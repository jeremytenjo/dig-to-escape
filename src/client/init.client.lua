local Players = game:GetService('Players')
local player = Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()
local humanoid = character:WaitForChild('Humanoid')
local jumpCount = 0

-- Create GUI directly
local playerGui = player:WaitForChild('PlayerGui')
local screenGui = Instance.new('ScreenGui')
screenGui.Name = 'JumpCounterGui'
screenGui.ResetOnSpawn = false
screenGui.Parent = playerGui

local jumpLabel = Instance.new('TextLabel')
jumpLabel.Name = 'JumpCountLabel'
jumpLabel.Size = UDim2.fromOffset(200, 50)
jumpLabel.Position = UDim2.new(0.5, -100, 0, 20)
jumpLabel.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
jumpLabel.BackgroundTransparency = 0.5
jumpLabel.TextColor3 = Color3.fromRGB(255, 255, 255)
jumpLabel.TextSize = 24
jumpLabel.Font = Enum.Font.GothamBold
jumpLabel.Text = 'Jumps: 0'
jumpLabel.Parent = screenGui

humanoid.StateChanged:Connect(function(_oldState, newState)
  if newState == Enum.HumanoidStateType.Jumping then
    jumpCount = jumpCount + 1
    print('hello')
    jumpLabel.Text = 'Jumps: ' .. jumpCount
  end
end)
