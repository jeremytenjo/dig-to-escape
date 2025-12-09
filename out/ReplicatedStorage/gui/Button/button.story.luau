-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local React = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react")
local ReactRoblox = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react-roblox")
local _ui_labs = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "ui-labs", "src")
local CreateReactStory = _ui_labs.CreateReactStory
local Choose = _ui_labs.Choose
local Button = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "gui", "Button", "Button").default
local story = CreateReactStory({
	react = React,
	reactRoblox = ReactRoblox,
	controls = {
		variant = Choose({ "hello", "world", "button" }),
		text = "Button",
	},
}, function(props)
	local _attributes = table.clone(props.controls)
	setmetatable(_attributes, nil)
	local component = React.createElement(Button, _attributes)
	return component
end)
return story
