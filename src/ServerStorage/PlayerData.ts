import Leaderboard from './Leaderboard'

const playerData: Map<string, Record<string, number>> = new Map()

function getData(player: Player): Record<string, number> {
  const userId = tostring(player.UserId)
  const data = playerData.get(userId) ?? {
    ['Coins']: 0,
  }
  playerData.set(userId, data)
  return data
}

const PlayerData = {
  COIN_KEY_NAME: 'Coins',
  getValue(player: Player, key: string): any {
    return getData(player)[key]
  },
  updateValue(player: Player, key: string): any {
    const data = getData(player)
    const oldValue = data[key] || 0
    const newValue = oldValue + 1

    data[key] = newValue

    Leaderboard.setStat({
      player,
      statName: key,
      value: newValue,
    })

    return newValue
  },
}

export = PlayerData
