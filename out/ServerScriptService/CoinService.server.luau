-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local PlayerData = TS.import(script, game:GetService("ServerStorage"), "TS", "PlayerData")
local Workspace = game:GetService("Workspace")
local Players = game:GetService("Players")
local coinsFolder = Workspace:WaitForChild("World"):WaitForChild("Coins")
local coins = coinsFolder:GetChildren()
-- Setting up event listeners
for _, coin in coins do
	local part = coin
	part:SetAttribute("Enabled", true)
	part.Touched:Connect(function(otherPart)
		if coin:GetAttribute("Enabled") == true then
			local character = otherPart.Parent
			local player = Players:GetPlayerFromCharacter(character)
			if player then
				-- Player touched a coin
				coin.Transparency = 1
				coin:SetAttribute("Enabled", false)
				PlayerData:updateValue({
					player = player,
					key = PlayerData.COIN_KEY_NAME,
				})
				task.wait(10)
				coin.Transparency = 0
				coin:SetAttribute("Enabled", true)
			end
		end
	end)
end
