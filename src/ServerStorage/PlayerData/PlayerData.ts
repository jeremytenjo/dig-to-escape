import leaderboard from '../leaderboard/leaderboard.js'

type PlayerDataEntry = {
  userId: string
  data: {
    Coins: number
    Jump: number
  }
}

type PlayerDataKey = keyof PlayerDataEntry['data']

const playerDataEntries: PlayerDataEntry[] = []

function getData(props: { player: Player }): PlayerDataEntry['data'] {
  const userId = tostring(props.player.UserId)
  let entry: PlayerDataEntry | undefined

  for (const item of playerDataEntries) {
    if (item.userId === userId) {
      entry = item
      break
    }
  }

  const data = entry?.data ?? {
    Coins: 0,
    Jump: 0,
  }

  if (!entry) {
    playerDataEntries.push({ userId, data })
  }

  return data
}

const playerData = {
  getValue(props: { player: Player; key: PlayerDataKey }) {
    return getData({
      player: props.player,
    })[props.key]
  },
  updateValue(props: { player: Player; key: PlayerDataKey }) {
    const data = getData({
      player: props.player,
    })
    const oldValue = data[props.key] ?? 0
    const newValue = oldValue + 1

    data[props.key] = newValue

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: newValue,
    })

    return newValue
  },
  resetValue(props: { player: Player; key: PlayerDataKey }) {
    const data = getData({
      player: props.player,
    })
    const newValue = 0

    data[props.key] = newValue

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: newValue,
    })

    return newValue
  },
  setValue(props: { player: Player; key: PlayerDataKey; value: number }) {
    const data = getData({
      player: props.player,
    })

    data[props.key] = props.value

    leaderboard.setStat({
      player: props.player,
      statName: props.key,
      value: props.value,
    })

    return props.value
  },
}

export = playerData
