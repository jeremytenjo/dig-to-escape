import Leaderboard from './Leaderboard'

type PlayerDataEntry = {
  userId: string
  data: Record<string, number>
}

const playerData: PlayerDataEntry[] = []

function getData(props: { player: Player }): Record<string, number> {
  const userId = tostring(props.player.UserId)
  let entry: PlayerDataEntry | undefined
  for (const item of playerData) {
    if (item.userId === userId) {
      entry = item
      break
    }
  }
  const data = entry?.data ?? {
    ['Coins']: 0,
  }
  if (!entry) {
    playerData.push({ userId, data })
  }
  return data
}

const PlayerData = {
  COIN_KEY_NAME: 'Coins',
  getValue(props: { player: Player; key: string }) {
    return getData({
      player: props.player,
    })[props.key]
  },
  updateValue(props: { player: Player; key: string }) {
    const data = getData({
      player: props.player,
    })
    const oldValue = data[props.key] ?? 0
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
