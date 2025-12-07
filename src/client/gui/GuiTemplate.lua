local GuiTemplate = {}

-- Creates a label GUI with customizable properties
-- @param config table with properties:
--   text: string - the text to display
--   size: UDim2 - size of the label (default: UDim2.new(0, 200, 0, 50))
--   position: UDim2 - position of the label (default: UDim2.new(0.5, -100, 0, 20))
--   bgColor: Color3 - background color (default: Color3.fromRGB(0, 0, 0))
--   bgTransparency: number - background transparency (default: 0.5)
--   textColor: Color3 - text color (default: Color3.fromRGB(255, 255, 255))
--   textSize: number - text size (default: 24)
--   font: Enum.Font - text font (default: Enum.Font.GothamBold)
--   name: string - name of the GUI (default: "CustomLabel")
function GuiTemplate.createLabel(config)
  config = config or {}

  local Players = game:GetService('Players')
  local player = Players.LocalPlayer
  local playerGui = player:WaitForChild('PlayerGui')

  -- Create ScreenGui if it doesn't exist
  local screenGui = playerGui:FindFirstChild('CustomScreenGui')
  if not screenGui then
    screenGui = Instance.new('ScreenGui')
    screenGui.Name = 'CustomScreenGui'
    screenGui.ResetOnSpawn = false
    screenGui.Parent = playerGui
  end

  -- Create TextLabel
  local textLabel = Instance.new('TextLabel')
  textLabel.Name = config.name or 'CustomLabel'
  textLabel.Size = config.size or UDim2.new(0, 200, 0, 50)
  textLabel.Position = config.position or UDim2.new(0.5, -100, 0, 20)
  textLabel.BackgroundColor3 = config.bgColor or Color3.fromRGB(0, 0, 0)
  textLabel.BackgroundTransparency = config.bgTransparency or 0.5
  textLabel.TextColor3 = config.textColor or Color3.fromRGB(255, 255, 255)
  textLabel.TextSize = config.textSize or 24
  textLabel.Font = config.font or Enum.Font.GothamBold
  textLabel.Text = config.text or 'Label'
  textLabel.Parent = screenGui

  return textLabel
end

-- Updates an existing label's text
-- @param label: TextLabel - the label to update
-- @param newText: string - the new text to display
function GuiTemplate.updateLabel(label, newText)
  if label and label:IsA('TextLabel') then
    label.Text = newText
  end
end

-- Destroys a GUI element
-- @param guiElement: GuiObject - the GUI element to destroy
function GuiTemplate.destroy(guiElement)
  if guiElement then
    guiElement:Destroy()
  end
end

return GuiTemplate
