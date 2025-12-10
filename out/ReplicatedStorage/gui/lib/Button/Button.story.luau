-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local React = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react")
local ReactRoblox = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react-roblox")
local CreateReactStory = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "ui-labs", "src").CreateReactStory
local Button = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "gui", "lib", "Button", "Button").default
local story = CreateReactStory({
	react = React,
	reactRoblox = ReactRoblox,
	controls = {
		text = "Button Text",
	},
}, function(props)
	local _attributes = table.clone(props.controls)
	setmetatable(_attributes, nil)
	return React.createElement(Button, _attributes)
end)
return story
