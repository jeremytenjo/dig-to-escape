-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local increaseJumpPowerRemoteFunction = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "remoteFunctions", "increaseJumpPowerRemoteFunction", "increaseJumpPowerRemoteFunction").increaseJumpPowerRemoteFunction
local player = Players.LocalPlayer
local playerGui = player:FindFirstChild("PlayerGui")
local jumpPurchaseGui = getInstance({
	instancePath = "ReplicatedStorage/Instances/JumpPurchaseGui",
})
local jumpButton = jumpPurchaseGui:WaitForChild("JumpButton")
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
jumpButton.Activated:Connect(onButtonClicked)
-- Add the JumpPurchaseGui to the player's Gui
jumpPurchaseGui.Parent = playerGui
