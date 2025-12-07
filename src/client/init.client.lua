local GuiTemplate = require(script.Parent.gui.GuiTemplate)
local Players = game:GetService('Players')
local player = Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild('Humanoid')
local jumpCount = 0

-- Create the jump counter label using the template
local jumpLabel = GuiTemplate.createLabel({
  text = 'Jumps: 0',
  size = UDim2.new(0, 200, 0, 50),
  position = UDim2.new(0.5, -100, 0, 20),
  bgColor = Color3.fromRGB(0, 0, 0),
  bgTransparency = 0.5,
  textColor = Color3.fromRGB(255, 255, 255),
  textSize = 24,
  font = Enum.Font.GothamBold,
  name = 'JumpCountLabel',
})

humanoid.StateChanged:Connect(function(oldState, newState)
  if newState == Enum.HumanoidStateType.Jumping then
    jumpCount = jumpCount + 1
    print('hello')
    GuiTemplate.updateLabel(jumpLabel, 'Jumps: ' .. jumpCount)
  end
end)
