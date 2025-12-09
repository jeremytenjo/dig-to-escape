import { Players } from '@rbxts/services'

import Leaderboard from '../../ServerStorage/Leaderboard/Leaderboard.js'
import PlayerData from '../../ServerStorage/PlayerData/PlayerData.js'
import getInstance from '../../ReplicatedStorage/utils/getInstance/getInstance.js'

const increaseJumpPowerFunction = getInstance<RemoteFunction>({
  instancePath: 'ReplicatedStorage/Instances/IncreaseJumpPowerFunction',
})

const JUMP_KEY_NAME = PlayerData.JUMP_KEY_NAME
const COIN_KEY_NAME = PlayerData.COIN_KEY_NAME
const JUMP_POWER_INCREMENT = 30
const JUMP_COIN_COST = 5

function updateJumpPower(player: Player, newJumpPower: number): void {
  // Update the players jump power
  const character = (player.Character ?? player.CharacterAdded.Wait()) as Model
  const humanoid = character.FindFirstChildWhichIsA('Humanoid')
  if (humanoid) {
    ;(humanoid as Humanoid).JumpPower = newJumpPower

    // Update the jump power data
    PlayerData.setValue({
      player,
      key: JUMP_KEY_NAME,
      value: newJumpPower,
    })

    // Update the jump leaderboard
    Leaderboard.setStat({
      player,
      statName: JUMP_KEY_NAME,
      value: newJumpPower,
    })
  }
}

function onPurchaseJumpIncrease(player: Player): boolean {
  const coinAmount =
    PlayerData.getValue({
      player,
      key: COIN_KEY_NAME,
    }) ?? 0

  if (coinAmount < JUMP_COIN_COST) {
    return false
  }

  // Increase player's jump power
  const oldJumpPower =
    PlayerData.getValue({
      player,
      key: JUMP_KEY_NAME,
    }) ?? 0

  updateJumpPower(player, oldJumpPower + JUMP_POWER_INCREMENT)

  // Update the coin table
  const newCoinAmount = coinAmount - JUMP_COIN_COST

  PlayerData.setValue({
    player,
    key: COIN_KEY_NAME,
    value: newCoinAmount,
  })

  // Update the coin leaderboard
  Leaderboard.setStat({
    player,
    statName: COIN_KEY_NAME,
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

// TODO create a way to handle remove functions listener better
increaseJumpPowerFunction.OnServerInvoke = onPurchaseJumpIncrease
Players.PlayerAdded.Connect(onPlayerAdded)
Players.PlayerRemoving.Connect(onPlayerRemoved)
