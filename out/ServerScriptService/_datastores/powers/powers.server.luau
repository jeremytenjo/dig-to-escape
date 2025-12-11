-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local createCollection = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "lapis", "out").createCollection
local powersCollectionName = TS.import(script, game:GetService("ServerScriptService"), "TS", "_datastores", "powers", "powers.config").powersCollectionName
local playerDataCollection = createCollection(powersCollectionName, {
	defaultData = function()
		return {
			Coins = 0,
			Jump = 0,
		}
	end,
})
local Players = game:GetService("Players")
local documents = {}
Players.PlayerAdded:Connect(TS.async(function(player)
	local userId = tostring(player.UserId)
	TS.try(function()
		local document = TS.await(playerDataCollection:load(userId, { player.UserId }))
		documents[userId] = document
	end, function(error)
		warn(`Failed to load data for player {userId}:`, error)
	end)
end))
Players.PlayerRemoving:Connect(TS.async(function(player)
	local userId = tostring(player.UserId)
	local document = documents[userId]
	if document ~= 0 and document == document and document ~= "" and document then
		TS.try(function()
			documents[userId] = nil
		end, function(error)
			warn(`Failed to close document for player {userId}:`, error)
		end)
	end
end))
