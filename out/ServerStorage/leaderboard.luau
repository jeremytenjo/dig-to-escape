-- Compiled with roblox-ts v3.0.0
local Leaderboard = {
	setStat = function(self, props)
		local leaderstats = props.player:FindFirstChild("leaderstats")
		if not leaderstats then
			leaderstats = Instance.new("Folder")
			-- 'leaderstats' is a reserved name Roblox recognizes for creating a leaderboard
			leaderstats.Name = "leaderstats"
			leaderstats.Parent = props.player
		end
		local stat = leaderstats:FindFirstChild(props.statName)
		if not stat then
			local newStat = Instance.new("IntValue")
			newStat.Name = props.statName
			newStat.Value = 0
			newStat.Parent = leaderstats
			stat = newStat
		end
		stat.Value = props.value
	end,
}
return Leaderboard
