-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local createCollection = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "lapis", "out").createCollection
local leaderboard = TS.import(script, game:GetService("ServerStorage"), "TS", "leaderboard", "leaderboard")
local playerDataOptions = {
	defaultData = function()
		return {
			Coins = 0,
			Jump = 0,
		}
	end,
}
local playerDataCollection = createCollection("PlayerData", playerDataOptions)
local loadedDocuments = {}
local Players = game:GetService("Players")
-- Load player data on join
Players.PlayerAdded:Connect(TS.async(function(player)
	local userId = tostring(player.UserId)
	TS.try(function()
		local document = TS.await(playerDataCollection:load(userId, { player.UserId }))
		loadedDocuments[userId] = document
	end, function(error)
		warn(`Failed to load data for player {userId}:`, error)
	end)
end))
-- Save and cleanup on player leave
Players.PlayerRemoving:Connect(TS.async(function(player)
	local userId = tostring(player.UserId)
	local document = loadedDocuments[userId]
	if document then
		TS.try(function()
			TS.await(document.close())
		end, function(error)
			warn(`Failed to close document for player {userId}:`, error)
		end)
		loadedDocuments[userId] = nil
	end
end))
-- Unified playerData object that integrates lapis collection
local playerData = {
	getValue = function(self, props)
		local userId = tostring(props.player.UserId)
		local document = loadedDocuments[userId]
		if not document then
			warn(`Document not loaded for player {userId}`)
			return {
				returnValue = 0,
			}
		end
		local data = document.read()
		local _condition = data[props.key]
		if _condition == nil then
			_condition = 0
		end
		local returnValue = _condition
		return {
			returnValue = returnValue,
		}
	end,
	updateValue = function(self, props)
		local userId = tostring(props.player.UserId)
		local document = loadedDocuments[userId]
		if not document then
			warn(`Document not loaded for player {userId}`)
			return {
				returnValue = 0,
			}
		end
		local data = document.read()
		local _condition = data[props.key]
		if _condition == nil then
			_condition = 0
		end
		local oldValue = _condition
		local newValue = oldValue + 1
		local _object = table.clone(data)
		setmetatable(_object, nil)
		_object[props.key] = newValue
		local updatedData = _object
		document.write(updatedData)
		leaderboard:setStat({
			player = props.player,
			statName = props.key,
			value = newValue,
		})
		local returnValue = newValue
		return {
			returnValue = returnValue,
		}
	end,
	resetValue = function(self, props)
		local userId = tostring(props.player.UserId)
		local document = loadedDocuments[userId]
		if not document then
			warn(`Document not loaded for player {userId}`)
			return {
				returnValue = 0,
			}
		end
		local newValue = 0
		local data = document.read()
		local _object = table.clone(data)
		setmetatable(_object, nil)
		_object[props.key] = newValue
		local updatedData = _object
		document.write(updatedData)
		leaderboard:setStat({
			player = props.player,
			statName = props.key,
			value = newValue,
		})
		local returnValue = newValue
		return {
			returnValue = returnValue,
		}
	end,
	setValue = function(self, props)
		local userId = tostring(props.player.UserId)
		local document = loadedDocuments[userId]
		if not document then
			warn(`Document not loaded for player {userId}`)
			return {
				returnValue = 0,
			}
		end
		local data = document.read()
		local _object = table.clone(data)
		setmetatable(_object, nil)
		_object[props.key] = props.value
		local updatedData = _object
		document.write(updatedData)
		leaderboard:setStat({
			player = props.player,
			statName = props.key,
			value = props.value,
		})
		local returnValue = props.value
		return {
			returnValue = returnValue,
		}
	end,
}
local default = playerData
return {
	default = default,
}
