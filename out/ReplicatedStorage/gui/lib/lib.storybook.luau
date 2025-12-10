-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local LibInstance = getInstance({
	instancePath = "ReplicatedStorage/gui/lib",
})
local storybook = {
	name = "Lib",
	storyRoots = LibInstance:GetChildren(),
	groupRoots = true,
}
return storybook
