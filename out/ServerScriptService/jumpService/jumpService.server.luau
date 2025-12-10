-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local leaderboard = TS.import(script, game:GetService("ServerStorage"), "TS", "leaderboard", "leaderboard")
local playerData = TS.import(script, game:GetService("ServerStorage"), "TS", "playerData", "playerData")
local increaseJumpPowerRemoteFunction = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "remoteFunctions", "increaseJumpPowerRemoteFunction", "increaseJumpPowerRemoteFunction").increaseJumpPowerRemoteFunction
local JUMP_POWER_INCREMENT = 30
local JUMP_COIN_COST = 5
local function updateJumpPower(player, newJumpPower)
	-- Update the players jump power
	local character = (player.Character or { player.CharacterAdded:Wait() })
	local humanoid = character:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
		humanoid.JumpPower = newJumpPower
		-- Update the jump power data
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
	local _condition = playerData:getValue({
		player = player,
		key = "Coins",
	})
	if _condition == nil then
		_condition = 0
	end
	local coinAmount = _condition
	if coinAmount < JUMP_COIN_COST then
		return false
	end
	-- Increase player's jump power
	local _condition_1 = playerData:getValue({
		player = player,
		key = "Jump",
	})
	if _condition_1 == nil then
		_condition_1 = 0
	end
	local oldJumpPower = _condition_1
	updateJumpPower(player, oldJumpPower + JUMP_POWER_INCREMENT)
	-- Update the coin table
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
