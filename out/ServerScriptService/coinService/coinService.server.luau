-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local playerData = TS.import(script, game:GetService("ServerScriptService"), "TS", "_datastores", "playerData", "playerData.module").default
local coinsFolder = getInstance({
	instancePath = "Workspace/World/Coins",
})
local coins = coinsFolder:GetChildren()
local function onCoinTouched(coin, otherPart)
	if coin:GetAttribute("Enabled") == true then
		local character = otherPart.Parent
		local player = Players:GetPlayerFromCharacter(character)
		if player then
			-- Player touched a coin - increment coins using unified playerData system
			coin.Transparency = 1
			coin:SetAttribute("Enabled", false)
			playerData:updateValue({
				player = player,
				key = "Coins",
			})
			task.wait(10)
			coin.Transparency = 0
			coin:SetAttribute("Enabled", true)
		end
	end
end
-- Setting up event listeners
for _, coin in coins do
	coin:SetAttribute("Enabled", true)
	coin.Touched:Connect(function(otherPart)
		return onCoinTouched(coin, otherPart)
	end)
end
local function onPlayerAdded(player)
	-- Reset player coins to 0 when joining
	playerData:resetValue({
		player = player,
		key = "Coins",
	})
	player.CharacterAdded:Connect(function(character)
		-- WaitForChild would stop the player loop, so below should be done in a separate thread
		task.spawn(function()
			-- When a player dies, reset coins
			local humanoid = character:WaitForChild("Humanoid")
			humanoid.Died:Connect(function()
				playerData:resetValue({
					player = player,
					key = "Coins",
				})
			end)
		end)
	end)
end
-- Initialize any players added before connecting to PlayerAdded event
for _, player in Players:GetPlayers() do
	onPlayerAdded(player)
end
local function onPlayerRemoved(player)
	-- Cleanup when player leaves - data persists via lapis
	playerData:resetValue({
		player = player,
		key = "Coins",
	})
end
Players.PlayerAdded:Connect(onPlayerAdded)
Players.PlayerRemoving:Connect(onPlayerRemoved)
