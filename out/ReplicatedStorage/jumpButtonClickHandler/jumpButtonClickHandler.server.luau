-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local player = Players.LocalPlayer
local playerGui = player:FindFirstChild("PlayerGui")
local increaseJumpPowerFunction = getInstance({
	instancePath = "ReplicatedStorage/Instances/IncreaseJumpPowerFunction",
})
local jumpPurchaseGui = getInstance({
	instancePath = "ReplicatedStorage/Instances/JumpPurchaseGui",
})
local jumpButton = jumpPurchaseGui:WaitForChild("JumpButton")
local function onButtonClicked()
	-- TODO create a way to invoke remove functions listener better
	local success, purchased = pcall(function()
		return increaseJumpPowerFunction:InvokeServer()
	end)
	if not success then
		-- purchased will be the error message if success is false
		error(tostring(purchased))
	elseif success and not (purchased ~= 0 and purchased == purchased and purchased ~= "" and purchased) then
		warn("Not enough coins!")
	end
end
jumpButton.Activated:Connect(onButtonClicked)
-- Add the JumpPurchaseGui to the player's Gui
jumpPurchaseGui.Parent = playerGui
