 
const Players = game:GetService("Players")
const Workspace = game:GetService("Workspace")

const hazardsFolder = Workspace.World.Hazards
const hazards = hazardsFolder:GetChildren()

const function onHazardTouched(otherPart: BasePart) {
	const character = otherPart.Parent
	const player = Players:GetPlayerFromCharacter(character)
	if (player) {
		const humanoid = character:FindFirstChildWhichIsA("Humanoid")
		if (humanoid) {
			humanoid.Health = 0
		}
	}
}

for (const hazard of hazards) {
	hazard.Touched:Connect(onHazardTouched)
}
