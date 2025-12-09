-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local function increaseJumpPowerRemoteFunction(props)
	local increaseJumpPowerFunction = getInstance({
		instancePath = "ReplicatedStorage/Instances/IncreaseJumpPowerFunction",
	})
	local success
	local purchased
	if props.triggerEnv == "server" then
		local result = { pcall(function()
			return increaseJumpPowerFunction:InvokeServer()
		end) }
		success = result[1]
		purchased = result[2]
	else
		success = false
		purchased = "Invalid trigger environment"
	end
	return {
		success = success,
		purchased = purchased,
	}
end
return {
	default = increaseJumpPowerRemoteFunction,
}
