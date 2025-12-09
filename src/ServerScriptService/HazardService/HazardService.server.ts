import { Players } from '@rbxts/services'

import getInstance from '../../ReplicatedStorage/utils/getInstance/getInstance.js'

const hazardsFolder = getInstance<Folder>({
  instancePath: 'Workspace/World/Hazards',
})
const hazards = hazardsFolder.GetChildren() as BasePart[]

function onHazardTouched(otherPart: BasePart): void {
  const character = otherPart.Parent
  const player = Players.GetPlayerFromCharacter(character)

  if (player) {
    const humanoid = character?.FindFirstChildWhichIsA('Humanoid')

    if (humanoid && humanoid.IsA('Humanoid')) {
      humanoid.Health = 0
    }
  }
}

for (const hazard of hazards) {
  if (hazard.IsA('BasePart')) {
    hazard.Touched.Connect(onHazardTouched)
  }
}
