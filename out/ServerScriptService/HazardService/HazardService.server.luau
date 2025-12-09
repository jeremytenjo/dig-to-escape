-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Players = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Players
local getInstance = TS.import(script, game:GetService("ReplicatedStorage"), "TS", "utils", "getInstance", "getInstance").default
local hazardsFolder = getInstance({
	instancePath = "Workspace/World/Hazards",
})
local hazards = hazardsFolder:GetChildren()
local function onHazardTouched(otherPart)
	local character = otherPart.Parent
	local player = Players:GetPlayerFromCharacter(character)
	if player then
		local _humanoid = character
		if _humanoid ~= nil then
			_humanoid = _humanoid:FindFirstChildWhichIsA("Humanoid")
		end
		local humanoid = _humanoid
		if humanoid and humanoid:IsA("Humanoid") then
			humanoid.Health = 0
		end
	end
end
for _, hazard in hazards do
	if hazard:IsA("BasePart") then
		hazard.Touched:Connect(onHazardTouched)
	end
end
