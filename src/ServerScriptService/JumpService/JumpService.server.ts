import { Players } from '@rbxts/services'

import leaderboard from '../../ServerStorage/leaderboard/leaderboard.js'
import { increaseJumpPowerRemoteFunction } from '../../ReplicatedStorage/remoteFunctions/increaseJumpPowerRemoteFunction/increaseJumpPowerRemoteFunction.js'
import playerData from '../_datastores/playerData/playerData.module.js'

const JUMP_POWER_INCREMENT = 30
const JUMP_COIN_COST = 5

function updateJumpPower(player: Player, newJumpPower: number): void {
  // Update the players jump power
  const character = (player.Character ?? player.CharacterAdded.Wait()) as Model
  const humanoid = character.FindFirstChildWhichIsA('Humanoid')
  if (humanoid) {
    ;(humanoid as Humanoid).JumpPower = newJumpPower

    // Update the jump power data using unified playerData system
    playerData.setValue({
      player,
      key: 'Jump',
      value: newJumpPower,
    })

    // Update the jump leaderboard
    leaderboard.setStat({
      player,
      statName: 'Jump',
      value: newJumpPower,
    })
  }
}

function onPurchaseJumpIncrease(player: Player): boolean {
  // Get current coin amount from unified playerData
  const coinAmountResult = playerData.getValue({
    player,
    key: 'Coins',
  })
  const coinAmount = coinAmountResult.returnValue as number

  if (coinAmount < JUMP_COIN_COST) {
    return false
  }

  // Increase player's jump power from unified playerData
  const jumpPowerResult = playerData.getValue({
    player,
    key: 'Jump',
  })
  const oldJumpPower = jumpPowerResult.returnValue as number

  updateJumpPower(player, oldJumpPower + JUMP_POWER_INCREMENT)

  // Update the coin amount using unified playerData system
  const newCoinAmount = coinAmount - JUMP_COIN_COST

  playerData.setValue({
    player,
    key: 'Coins',
    value: newCoinAmount,
  })

  // Update the coin leaderboard
  leaderboard.setStat({
    player,
    statName: 'Coins',
    value: newCoinAmount,
  })

  return true
}

function onCharacterAdded(player: Player): void {
  // Set default jump power when the character is added
  updateJumpPower(player, 50)
}

// Initialize any players added before connecting to PlayerAdded event
for (const player of Players.GetPlayers()) {
  onCharacterAdded(player)
}

// Normal initialization of players from PlayerAdded event
function onPlayerAdded(player: Player): void {
  player.CharacterAdded.Connect(() => {
    onCharacterAdded(player)
  })
}

function onPlayerRemoved(player: Player): void {
  updateJumpPower(player, 0)
}

increaseJumpPowerRemoteFunction.increaseJumpPowerFromServer.onRequest(
  onPurchaseJumpIncrease,
)
Players.PlayerAdded.Connect(onPlayerAdded)
Players.PlayerRemoving.Connect(onPlayerRemoved)
