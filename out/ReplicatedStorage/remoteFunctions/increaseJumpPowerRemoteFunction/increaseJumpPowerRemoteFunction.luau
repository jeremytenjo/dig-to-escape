-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local function increaseJumpPowerRemoteFunction(props)
	local increaseJumpPowerFunction = getInstance({
		instancePath = "ReplicatedStorage/Instances/IncreaseJumpPowerFunction",
	})
	local success = true
	local purchased
	if props.invokeType == "InvokeServer" then
		local result = { pcall(function()
			return increaseJumpPowerFunction:InvokeServer()
		end) }
		success = result[1]
		purchased = result[2]
	elseif props.invokeType == "InvokeClient" then
		local player = Players.LocalPlayer
		local result = { pcall(function()
			return increaseJumpPowerFunction:InvokeClient(player)
		end) }
		success = result[1]
		purchased = result[2]
	end
	return {
		success = success,
		purchased = purchased,
	}
end
return {
	default = increaseJumpPowerRemoteFunction,
}
