-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local increaseJumpPowerRemoteFunction = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "remoteFunctions", "increaseJumpPowerRemoteFunction", "increaseJumpPowerRemoteFunction").default
local player = Players.LocalPlayer
local playerGui = player:FindFirstChild("PlayerGui")
local jumpPurchaseGui = getInstance({
	instancePath = "ReplicatedStorage/Instances/JumpPurchaseGui",
})
local jumpButton = jumpPurchaseGui:WaitForChild("JumpButton")
local function onButtonClicked()
	local res = increaseJumpPowerRemoteFunction({
		triggerEnv = "server",
	})
	if not res.success then
		-- purchased will be the error message if success is false
		error(tostring(res.purchased))
	else
		local _condition = res.success
		if _condition then
			local _value = res.purchased
			_condition = not (_value ~= 0 and _value == _value and _value ~= "" and _value)
		end
		if _condition then
			warn("Not enough coins!")
		end
	end
end
jumpButton.Activated:Connect(onButtonClicked)
-- Add the JumpPurchaseGui to the player's Gui
jumpPurchaseGui.Parent = playerGui
