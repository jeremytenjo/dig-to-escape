import Leaderboard from './Leaderboard'

type PlayerDataModule = {
  COIN_KEY_NAME: string
  getValue(player: Player, key: string): any
  updateValue(player: Player, key: string): any
}

const PlayerData: PlayerDataModule = {
  COIN_KEY_NAME: 'Coins',
  getValue(player: Player, key: string): any {
    return {}
  },
  updateValue(player: Player, key: string): any {
    return {}
  },
}

const playerData: Map<string, Record<string, number>> = new Map()

const DEFAULT_PLAYER_DATA: Record<string, number> = {
  [PlayerData.COIN_KEY_NAME]: 0,
}

function getData(player: Player): Record<string, number> {
  const userId = tostring(player.UserId)
  const data = playerData.get(userId) ?? DEFAULT_PLAYER_DATA
  playerData.set(userId, data)
  return data
}

function getValue(player: Player, key: string): any {
  return getData(player)[key]
}

function updateValue(player: Player, key: string): any {
  const data = getData(player)
  const oldValue = data[key] || 0
  const newValue = oldValue + 1
  data[key] = newValue

  print('Leaderboard', Leaderboard)

  Leaderboard.setStat({
    player,
    statName: key,
    value: newValue,
  })

  return newValue
}

PlayerData.getValue = getValue
PlayerData.updateValue = updateValue

export default PlayerData
