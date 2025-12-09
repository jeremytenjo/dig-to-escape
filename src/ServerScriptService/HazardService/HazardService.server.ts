import { Players } from '@rbxts/services'

import getFolder from '../../ReplicatedStorage/utils/getFolder/getFolder.js'

const hazardsFolder = getFolder({
  folderPath: 'World/Hazards',
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
