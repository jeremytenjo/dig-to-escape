-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local React = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "react")
local sizePx = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "gui", "utils", "sizePx", "sizePx").default
local hex = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "gui", "utils", "hex", "hex").default
local function Button(props)
	local size = sizePx({
		width = 280,
		height = 80,
	})
	return React.createElement("textbutton", {
		Text = props.text,
		Size = size,
		BackgroundColor3 = hex("#00DD00"),
		TextColor3 = hex("#FFFFFF"),
		TextSize = 32,
		Font = Enum.Font.GothamBold,
		Position = props.position,
		AnchorPoint = props.anchorPoint,
		BorderSizePixel = 4,
		BorderColor3 = hex("#00AA00"),
		Event = {
			Activated = function()
				local _result = props.onClick
				if _result ~= nil then
					_result = _result()
				end
				return _result
			end,
		},
	})
end
return {
	default = Button,
}
