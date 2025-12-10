-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local leaderboard = TS.import(script, game:GetService("ServerStorage"), "TS", "leaderboard", "leaderboard")
local playerDataEntries = {}
local function getData(props)
	local userId = tostring(props.player.UserId)
	local entry
	for _, item in playerDataEntries do
		if item.userId == userId then
			entry = item
			break
		end
	end
	local _result = entry
	if _result ~= nil then
		_result = _result.data
	end
	local _condition = _result
	if _condition == nil then
		_condition = {
			Coins = 0,
			Jump = 0,
		}
	end
	local data = _condition
	if not entry then
		local _arg0 = {
			userId = userId,
			data = data,
		}
		table.insert(playerDataEntries, _arg0)
	end
	return data
end
local playerData = {
	getValue = function(self, props)
		return getData({
			player = props.player,
		})[props.key]
	end,
	updateValue = function(self, props)
		local data = getData({
			player = props.player,
		})
		local _condition = data[props.key]
		if _condition == nil then
			_condition = 0
		end
		local oldValue = _condition
		local newValue = oldValue + 1
		data[props.key] = newValue
		leaderboard:setStat({
			player = props.player,
			statName = props.key,
			value = newValue,
		})
		return newValue
	end,
	resetValue = function(self, props)
		local data = getData({
			player = props.player,
		})
		local newValue = 0
		data[props.key] = newValue
		leaderboard:setStat({
			player = props.player,
			statName = props.key,
			value = newValue,
		})
		return newValue
	end,
	setValue = function(self, props)
		local data = getData({
			player = props.player,
		})
		data[props.key] = props.value
		leaderboard:setStat({
			player = props.player,
			statName = props.key,
			value = props.value,
		})
		return props.value
	end,
}
return playerData
