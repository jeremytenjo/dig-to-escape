const leaderboard = {
  setStat(props: { player: Player; statName: string; value: number }) {
    let leaderstats = props.player.FindFirstChild('leaderstats')

    if (!leaderstats) {
      leaderstats = new Instance('Folder')
      // 'leaderstats' is a reserved name Roblox recognizes for creating a leaderboard
      leaderstats.Name = 'leaderstats'
      leaderstats.Parent = props.player
    }

    let stat = leaderstats.FindFirstChild(props.statName) as IntValue | undefined

    if (!stat) {
      const newStat = new Instance('IntValue')
      newStat.Name = props.statName
      newStat.Value = 0
      newStat.Parent = leaderstats

      stat = newStat as IntValue
    }

    ;(stat as IntValue).Value = props.value
  },
}

export = leaderboard
