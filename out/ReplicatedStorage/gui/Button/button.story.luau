-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local React = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react")
local ReactRoblox = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react-roblox")
local _ui_labs = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "ui-labs", "src")
local CreateReactStory = _ui_labs.CreateReactStory
local Choose = _ui_labs.Choose
local story = CreateReactStory({
	react = React,
	reactRoblox = ReactRoblox,
	controls = {
		variant = Choose({ "hello", "world", "button" }),
	},
}, function(props)
	print("props", props)
	local component = React.createElement("frame")
	return component
end)
return story
