-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local increaseJumpPowerRemoteFunction = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "remoteFunctions", "increaseJumpPowerRemoteFunction", "increaseJumpPowerRemoteFunction").increaseJumpPowerRemoteFunction
local Button = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "gui", "lib", "Button", "Button").default
local mountScreenGuiComponent = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "gui", "utils", "mountScreenGuiComponent", "mountScreenGuiComponent").default
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
mountScreenGuiComponent({
	component = Button,
	props = {
		text = "Buy Jump Power",
		onClick = onButtonClicked,
		position = UDim2.new(1, -110, 1, -60),
	},
})
