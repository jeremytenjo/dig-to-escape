local Players = game:GetService('Players')
local player = Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild('Humanoid')
local jumpCount = 0

-- Create GUI
local playerGui = player:WaitForChild('PlayerGui')
local screenGui = Instance.new('ScreenGui')
screenGui.Name = 'JumpCounterGui'
screenGui.ResetOnSpawn = false
screenGui.Parent = playerGui

local textLabel = Instance.new('TextLabel')
textLabel.Name = 'JumpCountLabel'
textLabel.Size = UDim2.new(0, 200, 0, 50)
textLabel.Position = UDim2.new(0.5, -100, 0, 20)
textLabel.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
textLabel.BackgroundTransparency = 0.5
textLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
textLabel.TextSize = 24
textLabel.Font = Enum.Font.GothamBold
textLabel.Text = 'Jumps: 0'
textLabel.Parent = screenGui

humanoid.StateChanged:Connect(function(oldState, newState)
  if newState == Enum.HumanoidStateType.Jumping then
    jumpCount = jumpCount + 1
    textLabel.Text = 'Jumps: ' .. jumpCount
    print('hello')
  end
end)
