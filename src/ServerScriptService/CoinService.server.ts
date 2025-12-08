// Initializing services and variables
const Workspace = game.GetService('Workspace')
const Players = game.GetService('Players')

// Modules
import PlayerData from '../ServerStorage/PlayerData'

const coinsFolder = Workspace.WaitForChild('World').WaitForChild('Coins') as Folder
const coins = coinsFolder.GetChildren() as BasePart[]

// Defining the event handler
function onCoinTouched(otherPart: BasePart, coin: BasePart): void {
  if (coin.GetAttribute('Enabled')) {
    const character = otherPart.Parent
    const player = Players.GetPlayerFromCharacter(character)

    if (player) {
      // Player touched a coin
      coin.Transparency = 1
      coin.SetAttribute('Enabled', false)

      PlayerData.updateValue({
        player,
        key: PlayerData.COIN_KEY_NAME,
      })

      task.wait(10)
      coin.Transparency = 0
      coin.SetAttribute('Enabled', true)
    }
  }
}

// Setting up event listeners
for (const coin of coins) {
  const part = coin
  part.SetAttribute('Enabled', true)
  part.Touched.Connect((otherPart: BasePart) => {
    onCoinTouched(otherPart, part)
  })
}
