-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Remo = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "remo", "src")
local schema = {
	increaseJumpPower = Remo.remote().returns(),
}
local default = schema
return {
	default = default,
}
