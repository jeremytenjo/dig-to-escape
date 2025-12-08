// Initializing services and variables
const Workspace = game.GetService('Workspace')
const Players = game.GetService('Players')

// Modules
import PlayerData from '../ServerStorage/PlayerData'

const coinsFolder = Workspace.WaitForChild('World').WaitForChild('Coins')
const coins = coinsFolder.GetChildren()

const COIN_KEY_NAME = PlayerData.COIN_KEY_NAME
const COOLDOWN = 10

// Defining the event handler
function onCoinTouched(otherPart: BasePart, coin: BasePart): void {
  if (coin.GetAttribute('Enabled')) {
    const character = otherPart.Parent
    const player = Players.GetPlayerFromCharacter(character as Model)

    if (player) {
      // Player touched a coin
      coin.Transparency = 1
      coin.SetAttribute('Enabled', false)

      PlayerData.updateValue(player, COIN_KEY_NAME)

      task.wait(COOLDOWN)
      coin.Transparency = 0
      coin.SetAttribute('Enabled', true)
    }
  }
}

// Setting up event listeners
for (const coin of coins) {
  const part = coin as BasePart
  part.SetAttribute('Enabled', true)
  part.Touched.Connect((otherPart: BasePart) => {
    onCoinTouched(otherPart, part)
  })
}
