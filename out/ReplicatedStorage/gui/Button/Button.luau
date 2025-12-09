-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local React = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react")
local function Button(props)
	local _attributes = {}
	local _condition = props.text
	if _condition == nil then
		_condition = props.variant
	end
	_attributes.Text = _condition
	_attributes.Size = UDim2.new(0, 100, 0, 50)
	_attributes.BackgroundColor3 = Color3.fromRGB(100, 100, 100)
	_attributes.TextColor3 = Color3.fromRGB(255, 255, 255)
	_attributes.Event = {
		Activated = function()
			local _result = props.onClick
			if _result ~= nil then
				_result = _result()
			end
			return _result
		end,
	}
	return React.createElement("textbutton", _attributes)
end
return {
	default = Button,
}
