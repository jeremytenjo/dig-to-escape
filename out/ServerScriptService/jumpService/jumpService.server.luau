-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local leaderboard = TS.import(script, game:GetService("ServerStorage"), "TS", "leaderboard", "leaderboard")
local increaseJumpPowerRemoteFunction = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "remoteFunctions", "increaseJumpPowerRemoteFunction", "increaseJumpPowerRemoteFunction").increaseJumpPowerRemoteFunction
local playerData = TS.import(script, game:GetService("ServerScriptService"), "TS", "_datastores", "playerData", "playerData.module").default
local JUMP_POWER_INCREMENT = 30
local JUMP_COIN_COST = 5
local function updateJumpPower(player, newJumpPower)
	-- Update the players jump power
	local character = (player.Character or { player.CharacterAdded:Wait() })
	local humanoid = character:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
		humanoid.JumpPower = newJumpPower
		-- Update the jump power data using unified playerData system
		playerData:setValue({
			player = player,
			key = "Jump",
			value = newJumpPower,
		})
		-- Update the jump leaderboard
		leaderboard:setStat({
			player = player,
			statName = "Jump",
			value = newJumpPower,
		})
	end
end
local function onPurchaseJumpIncrease(player)
	-- Get current coin amount from unified playerData
	local coinAmountResult = playerData:getValue({
		player = player,
		key = "Coins",
	})
	local coinAmount = coinAmountResult.returnValue
	if coinAmount < JUMP_COIN_COST then
		return false
	end
	-- Increase player's jump power from unified playerData
	local jumpPowerResult = playerData:getValue({
		player = player,
		key = "Jump",
	})
	local oldJumpPower = jumpPowerResult.returnValue
	updateJumpPower(player, oldJumpPower + JUMP_POWER_INCREMENT)
	-- Update the coin amount using unified playerData system
	local newCoinAmount = coinAmount - JUMP_COIN_COST
	playerData:setValue({
		player = player,
		key = "Coins",
		value = newCoinAmount,
	})
	-- Update the coin leaderboard
	leaderboard:setStat({
		player = player,
		statName = "Coins",
		value = newCoinAmount,
	})
	return true
end
local function onCharacterAdded(player)
	-- Set default jump power when the character is added
	updateJumpPower(player, 50)
end
-- Initialize any players added before connecting to PlayerAdded event
for _, player in Players:GetPlayers() do
	onCharacterAdded(player)
end
-- Normal initialization of players from PlayerAdded event
local function onPlayerAdded(player)
	player.CharacterAdded:Connect(function()
		onCharacterAdded(player)
	end)
end
local function onPlayerRemoved(player)
	updateJumpPower(player, 0)
end
increaseJumpPowerRemoteFunction.increaseJumpPowerFromServer:onRequest(onPurchaseJumpIncrease)
Players.PlayerAdded:Connect(onPlayerAdded)
Players.PlayerRemoving:Connect(onPlayerRemoved)
