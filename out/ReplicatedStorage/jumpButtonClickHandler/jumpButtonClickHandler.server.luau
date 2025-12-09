-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local React = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react")
local ReactRoblox = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react-roblox")
local increaseJumpPowerRemoteFunction = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "remoteFunctions", "increaseJumpPowerRemoteFunction", "increaseJumpPowerRemoteFunction").increaseJumpPowerRemoteFunction
local Button = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "gui", "Button", "Button").default
local player = Players.LocalPlayer
local playerGui = player:WaitForChild("PlayerGui")
local screenGui = Instance.new("ScreenGui")
screenGui.Parent = playerGui
local onButtonClicked = TS.async(function()
	TS.try(function()
		local purchased = TS.await(increaseJumpPowerRemoteFunction.increaseJumpPowerFromServer:request())
		if not purchased then
			warn("Not enough coins!")
		end
	end, function(err)
		error(tostring(err))
	end)
end)
local jumpPurchaseGui = React.createElement(Button, {
	variant = "buy-jump-power",
	text = "Buy Jump Power",
	onClick = onButtonClicked,
})
local root = ReactRoblox.createRoot(screenGui)
root:render(jumpPurchaseGui)
