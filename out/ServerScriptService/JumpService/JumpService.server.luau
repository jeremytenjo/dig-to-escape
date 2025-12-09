-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local Leaderboard = TS.import(script, game:GetService("ServerStorage"), "TS", "Leaderboard", "Leaderboard")
local PlayerData = TS.import(script, game:GetService("ServerStorage"), "TS", "PlayerData", "PlayerData")
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local increaseJumpPowerFunction = getInstance({
	instancePath = "ReplicatedStorage/Instances/IncreaseJumpPowerFunction",
})
local JUMP_KEY_NAME = PlayerData.JUMP_KEY_NAME
local COIN_KEY_NAME = PlayerData.COIN_KEY_NAME
local JUMP_POWER_INCREMENT = 30
local JUMP_COIN_COST = 5
local function updateJumpPower(player, newJumpPower)
	-- Update the players jump power
	local character = (player.Character or { player.CharacterAdded:Wait() })
	local humanoid = character:FindFirstChildWhichIsA("Humanoid")
	if humanoid then
		humanoid.JumpPower = newJumpPower
		-- Update the jump power data
		PlayerData:setValue({
			player = player,
			key = JUMP_KEY_NAME,
			value = newJumpPower,
		})
		-- Update the jump leaderboard
		Leaderboard:setStat({
			player = player,
			statName = JUMP_KEY_NAME,
			value = newJumpPower,
		})
	end
end
local function onPurchaseJumpIncrease(player)
	local _condition = PlayerData:getValue({
		player = player,
		key = COIN_KEY_NAME,
	})
	if _condition == nil then
		_condition = 0
	end
	local coinAmount = _condition
	if coinAmount < JUMP_COIN_COST then
		return false
	end
	-- Increase player's jump power
	local _condition_1 = PlayerData:getValue({
		player = player,
		key = JUMP_KEY_NAME,
	})
	if _condition_1 == nil then
		_condition_1 = 0
	end
	local oldJumpPower = _condition_1
	updateJumpPower(player, oldJumpPower + JUMP_POWER_INCREMENT)
	-- Update the coin table
	local newCoinAmount = coinAmount - JUMP_COIN_COST
	PlayerData:setValue({
		player = player,
		key = COIN_KEY_NAME,
		value = newCoinAmount,
	})
	-- Update the coin leaderboard
	Leaderboard:setStat({
		player = player,
		statName = COIN_KEY_NAME,
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
increaseJumpPowerFunction.OnServerInvoke = onPurchaseJumpIncrease
Players.PlayerAdded:Connect(onPlayerAdded)
Players.PlayerRemoving:Connect(onPlayerRemoved)
