-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local PlayerData = TS.import(script, game:GetService("ServerStorage"), "TS", "PlayerData")
local getFolder = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getFolder", "getFolder").default
local coinsFolder = getFolder({
	folderPath = "World/Coins",
})
local coins = coinsFolder:GetChildren()
local function onCoinTouched(coin, otherPart)
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
end
-- Setting up event listeners
for _, coin in coins do
	coin:SetAttribute("Enabled", true)
	coin.Touched:Connect(function(otherPart)
		return onCoinTouched(coin, otherPart)
	end)
end
