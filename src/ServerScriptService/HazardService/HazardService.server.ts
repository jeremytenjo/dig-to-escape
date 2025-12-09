import { Players, Workspace } from '@rbxts/services'

const hazardsFolder = Workspace.WaitForChild('World').WaitForChild('Hazards') as Folder
const hazards = hazardsFolder.GetChildren()

function onHazardTouched(otherPart: BasePart): void {
  const character = otherPart.Parent
  const player = Players.GetPlayerFromCharacter(character)

  if (player) {
    const humanoid = character?.FindFirstChildWhichIsA('Humanoid')
    if (humanoid && humanoid.IsA('Humanoid')) {
      ;(humanoid as Humanoid).Health = 0
    }
  }
}

for (const hazard of hazards) {
  if (hazard.IsA('BasePart')) {
    ;(hazard as BasePart).Touched.Connect(onHazardTouched)
  }
}
