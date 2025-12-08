import Leaderboard from './Leaderboard'

const playerData: Map<string, Record<string, number>> = new Map()

function getData(props: { player: Player }): Record<string, number> {
  const userId = tostring(props.player.UserId)
  const data = playerData.get(userId) ?? {
    ['Coins']: 0,
  }
  playerData.set(userId, data)
  return data
}

const PlayerData = {
  COIN_KEY_NAME: 'Coins',
  getValue(props: { player: Player; key: string }): any {
    return getData({
      player: props.player,
    })[props.key]
  },
  updateValue(props: { player: Player; key: string }): any {
    const data = getData({
      player: props.player,
    })
    const oldValue = data[props.key] || 0
    const newValue = oldValue + 1

    data[props.key] = newValue

    Leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: newValue,
    })

    return newValue
  },
}

export = PlayerData
