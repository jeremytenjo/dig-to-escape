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
	local _exitType, _returns = TS.try(function()
		local document = TS.await(playerDataCollection:load(userId, { player.UserId }))
		if not player:IsDescendantOf(Players) then
			return TS.TRY_RETURN, { document:close() }
		end
		documents[userId] = document
	end, function(error)
		warn(`Failed to load {powersCollectionName} data for player {userId}:`, error)
	end)
	if _exitType then
		return unpack(_returns)
	end
end))
Players.PlayerRemoving:Connect(TS.async(function(player)
	local userId = tostring(player.UserId)
	local document = documents[userId]
	if document then
		TS.try(function()
			documents[userId] = nil
			TS.await(document:close())
		end, function(error)
			warn(`Failed to close {powersCollectionName} document for player {userId}:`, error)
		end)
	end
end))
