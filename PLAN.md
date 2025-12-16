# CUBE CRUSH EMPIRE - Roblox Game Concept

## Core Idea

**One-Sentence Pitch:**  
Tap cubes, build your empire, compete globally, and get rewarded for streaks and donations.

---

## Why This Works

Adapted from CryoZONE's Idle Cube success on VRChat, this concept translates the proven mechanics to Roblox while **weaponizing FOMO** through Roblox's superior retention systems.

---

## The 5 Pillars Evaluation

### ✅ 1. Simple to Explain

- **Passes:** "Click cubes to earn points, level up, climb the leaderboard"
- No complex lore. No tutorials needed.

### ✅ 2. Intuitive (No Tutorial Required)

- Player spawns → sees giant cube in center → big button says "TAP ME"
- Tap → cube breaks → numbers go up → instant dopamine
- Leaderboard visible on wall (visual language)
- Controls: tap, that's it.

### ✅ 3. Naturally Fun (Immediate Dopamine)

- **Instant feedback on every tap:**
  - Cube shatters/respawns
  - Particle effects
  - Sound effects
  - +10 points pop-up (visual)
- No grinding gate. Fun is immediate.
- Leveling up triggers: screen shake, special effect, cosmetic unlock

### ✅ 4. Broad Appeal

- All ages can play (kids love tapping, teens love leaderboards, adults like afk progression)
- No niche mechanics
- Works on low-end devices
- Social gameplay (see others tapping in real-time)

### ✅ 5. Retention (Weaponized FOMO)

- **Daily Streak Counter** — break it, lose bonus multiplier
- **Limited cosmetics** — "Cube Skin of the Week" (changes weekly)
- **Global Events** — "Weekend Cube Rush" (2x points for 48 hours)
- **Supporter Boosts** — donate = team-wide multiplier (like CryoZONE's global boost)
- **Offline Notifications** — "Your streak is ending in 12 hours"

---

## Core Mechanics

### Gameplay Loop

1. **Tap the cube** → earn points/currency
2. **Level up** → unlock cosmetics, earn passive income
3. **Daily Streak** → bonus multiplier (5x at 30-day streak)
4. **Leaderboard** → compete weekly/monthly for cosmetic rewards
5. **Passive Progression** — continue earning while AFK (idle game core)

### Cosmetics (No Pay-to-Win)

- Cube skins
- Tap effects
- Particle colors
- Sound packs
- Avatar rewards (Roblox avatar cosmetics)

### Monetization

- **Supporter Pass** (recurring): $4.99/month → 2x passive income, daily free cosmetic
- **Battle Pass** (seasonal): $9.99 → cosmetic rewards, exclusive streaks
- **Cosmetic Bundles**: $2.99-$7.99 (seasonal themes)
- **Optional Tips** during checkout (high conversion for Roblox)

---

## Retention Hooks (FOMO Implementation)

| Hook                 | Purpose                                | Implementation                          |
| -------------------- | -------------------------------------- | --------------------------------------- |
| Daily Streak         | Creates anxiety if player misses login | -1 day per 24hr miss, visual timer      |
| Limited Cosmetics    | FOMO on cosmetics                      | "Cosmic Cube" only available Dec 16-23  |
| Weekend Boosts       | Creates urgency to play                | 2x points Sat-Sun only                  |
| Leaderboard Churn    | Competitive fear                       | Weekly reset, top 100 get exclusive tag |
| Supporter Multiplier | Social pressure                        | "You + 50 supporters = 3x for everyone" |
| Seasonal Events      | Event FOMO                             | "Christmas Cube Crush" (limited event)  |

---

## Algorithm Strategy (First 4 Weeks)

### Week 1-2: Soft Launch

- Internal testing
- 500-1000 organic players
- Collect retention metrics

### Week 3-4: Paid Ad Campaign

- **Budget:** $15k-$25k Robux in ads
- **Target:** Kids 8-16, casual players
- **Message:** "Tap ONE cube. Become EMPIRE."
- **Goal:** Prove retention metrics to algorithm

### Post-Campaign

- If retention > 45% Day 7, algorithm will promote
- Organic traffic spike expected Week 5+

---

## Why This Beats Dig to Escape (Your Current Game)

| Factor         | Dig to Escape         | Cube Crush Empire                        |
| -------------- | --------------------- | ---------------------------------------- |
| Learning curve | Medium (platformer)   | Zero (tap game)                          |
| Barrier to fun | Must get past hazards | Immediate (first tap)                    |
| Retention hook | One-time completion   | **Infinite progression + FOMO**          |
| AFK viability  | NO                    | **YES (passive income)**                 |
| Monetization   | Likely cosmetics-only | Supporter Pass + Battle Pass + cosmetics |
| Algorithm fit  | Good (action game)    | **EXCELLENT (addictive idle)**           |

---

## 1-Month Build Plan

### WEEK 1: Core Mechanics (Foundation)

**Goal:** Playable cube-tapping loop with persistent points.

**Deliverables:**

- ✅ Workspace setup & Roblox file structure
- ✅ Cube spawn logic (single cube in center, respawns on click)
- ✅ Tap detection system (InputBegan for mouse click)
- ✅ Points system (increment by 1 per tap, display on screen)
- ✅ Basic Player GUI (score counter, big tap button indicator)
- ✅ Local player data save (points persist across sessions)
- ✅ Sound effect on tap (one simple click sound)

**Tech Stack:**

- Lua scripts (Server + LocalScript)
- Roblox Studio GUI
- LocalStorage for persistence

**Estimated Hours:** 20-25h
**Risk:** Tap detection latency (test early)

---

### WEEK 2: Progression & Leaderboard (Engagement)

**Goal:** Players have something to work toward; global competition visible.

**Deliverables:**

- ✅ Level system (every 100 points = +1 level, reset counter)
- ✅ Global leaderboard (top 50 players, updates in real-time)
- ✅ Leaderboard UI (wall-mounted board showing live rankings)
- ✅ Weekly reset system (leaderboard clears Friday 11:59 PM EST)
- ✅ Passive income system (earn 1 point/second when offline, cap at 2 hours)
- ✅ Level-up visual feedback (screen shake, particle burst, sound)
- ✅ Player datastore integration (save level, XP, weekly score)

**Tech Stack:**

- DataStore API (player persistence)
- RemoteFunction for leaderboard queries
- Particle effects system

**Estimated Hours:** 25-30h
**Risk:** DataStore scaling (test with 50+ simultaneous players)

---

### WEEK 3: Retention Mechanics (FOMO Hooks)

**Goal:** Players feel anxiety about missing streaks; addicted to logging in daily.

**Deliverables:**

- ✅ Daily streak counter (visible on screen, resets at 6 AM UTC)
- ✅ Streak multiplier (1.5x → 2x → 3x → 5x at day 30)
- ✅ Streak notification system (alerts player 12h before reset)
- ✅ Limited cosmetics rotation ("Cube Skin of the Week")
- ✅ Weekend boost events (2x multiplier Fri-Sun only)
- ✅ Seasonal cosmetic themes (start with "Winter Blast" theme)
- ✅ Event tracker UI (countdown to next bonus window)

**Tech Stack:**

- Time-based logic (check UTC time on join)
- Cosmetics database (rotation schedule)
- Event scheduler (runs on server tick)

**Estimated Hours:** 20-25h
**Risk:** Time syncing across timezones (use UTC consistently)

---

### WEEK 4: Monetization & Polish (Revenue)

**Goal:** Monetization live; game ready for beta testing.

**Deliverables:**

- ✅ Supporter Pass system (in-game store integration)
  - Recurring $4.99/month subscription
  - 2x passive income multiplier
  - Daily free cosmetic reward
  - Supporter badge on leaderboard
- ✅ Cosmetics store UI (browse, preview, purchase)
- ✅ Cosmetic application system (cube skins, tap effects, particles)
- ✅ Battle Pass seasonal track (9 cosmetic rewards over 4 weeks)
- ✅ Tip/donation button at checkout (+tip = leaderboard boost notification)
- ✅ UI polish & optimization
  - Mobile responsiveness (tap target size ≥ 64px)
  - Lag reduction (tap input debounce)
  - Load time < 3 seconds
- ✅ Sound polish (tap, level-up, event notification sounds)
- ✅ Particle effect optimization (max 3 on-screen simultaneous)

**Tech Stack:**

- Roblox Developer Product API
- GamePass API (for Supporter Pass)
- LocalScript cosmetic application

**Estimated Hours:** 25-30h
**Risk:** Payment gateway latency (test thoroughly)

---

## Timeline (Original)

- **Week 1:** Design & mechanics document
- **Week 2:** Basic Lua implementation (tap detection, points, leaderboard)
- **Week 3:** Cosmetics system & UI polish
- **Week 4:** Monetization system
- **Week 5:** Beta testing & data collection
- **Week 6:** Ad campaign launch

---

---

## Implementation Checklist by System

### Core Tap System (Week 1)

- [ ] Cube model (simple part or mesh in center of workspace)
- [ ] ClickDetector on cube (or InputBegan for mouse position)
- [ ] Points increment logic (server-side to prevent cheating)
- [ ] GUI text label (displays current points)
- [ ] Sound effect on tap
- [ ] Cosmetic respawn animation (fade in/shrink)
- [ ] LocalScript to detect player position/render (client-side)

### Persistence Layer (Week 1-2)

- [ ] Player data folder structure in DataStore
- [ ] Save schema: `{ points, level, xp, totalTaps, lastDaily, streak }`
- [ ] Auto-save every 30 seconds
- [ ] Load data on player join
- [ ] Migrate old save format (if applicable)

### Leaderboard System (Week 2)

- [ ] Leaderboard Part in workspace (Part with SurfaceGui)
- [ ] Remote function: `GetTopPlayers(count)` returns top 50
- [ ] Update leaderboard every 5 seconds
- [ ] Weekly reset script (runs every Friday 11:59 PM)
- [ ] Store weekly high scores in separate DataStore
- [ ] Display format: `Rank | Name | Score | Weekly Bonus`

### Streak System (Week 3)

- [ ] Track `lastDailyResetTime` in player data
- [ ] Daily reset check: if `now - lastReset > 24 hours`, reset streak
- [ ] Streak notification system (warn at 20 hours)
- [ ] Multiplier calculation: `pointsEarned * multiplier(streak)`
- [ ] Streak display UI (with countdown timer to next reset)

### Cosmetics System (Week 3-4)

- [ ] Cosmetics database (JSON file or DataStore):
  ```lua
  {
    "winter_cube": { name="Winter Cube", price=150, rotation="Dec 16-23" },
    "cosmic_tap": { name="Cosmic Tap", price=200, rotation="weekly" }
  }
  ```
- [ ] Player cosmetics inventory (track owned cosmetics)
- [ ] Cosmetic application logic (swap cube color, particle type)
- [ ] Limited rotation check (only show if current date is in `rotation` window)
- [ ] UI: Browse page (grid of cosmetics, "NEW" badge on limited items)

### Monetization Integration (Week 4)

- [ ] Create GamePass: "Supporter Pass" (recurring $4.99)
- [ ] Create Developer Product: "Cosmetic Bundle 1" (e.g., $2.99)
- [ ] Supporter Pass perk check:
  - [ ] 2x passive income multiplier
  - [ ] Daily free cosmetic reward (unlock new cosmetic daily)
  - [ ] Leaderboard badge (gold star next to name)
- [ ] Cosmetics store purchase flow
  - [ ] UI button → opens cosmetics catalog
  - [ ] Click cosmetic → preview on cube
  - [ ] "Buy for 500 Robux" button → MarketplaceService.PromptPurchase()
  - [ ] Confirm purchase → add to inventory
- [ ] Donation/Tip system (optional tip at checkout, flags leaderboard entry)

### Event System (Week 3-4)

- [ ] Event scheduler (config table):
  ```lua
  events = {
    { name="Weekend Boost", days={5,6}, multiplier=2 },
    { name="Holiday Crush", startTime=1700000000, multiplier=3 }
  }
  ```
- [ ] Active event detector (compare current time to event windows)
- [ ] Multiplier chain: `basePts * streakMult * eventMult * supporterMult`
- [ ] Event countdown UI (shows next 3 upcoming events)

### QA & Testing (Week 4)

- [ ] Performance test: tap 10 times/second for 5 minutes (no lag)
- [ ] DataStore test: 50 simultaneous players, save every 30s
- [ ] Leaderboard test: 100 players, verify sorting accuracy
- [ ] Cross-device test: PC, Mobile, Tablet (tap targets scale)
- [ ] Monetization test: purchase GamePass, verify 2x multiplier applies
- [ ] Edge case: Player joins during event, leaves, rejoins (event bonus still works)
- [ ] Edge case: Player reaches Day 30 streak (5x multiplier triggers)

---

## Key Technical Decisions

### Server vs Client

- **Server:** Points calculation, DataStore writes, leaderboard queries, event detection
- **Client:** Tap input detection, cosmetic rendering, UI updates, animations

### DataStore Schema

```lua
-- Key: "player_" .. userId
{
  points = 12500,
  level = 125,
  xp = 50,
  totalTaps = 12500,
  lastDailyReset = 1702800000, -- Unix timestamp
  streak = 15,
  supporterExpires = 1702886400, -- nil if not supporter
  ownedCosmetics = { "winter_cube", "cosmic_tap" },
  selectedCosmeticCube = "winter_cube",
  selectedCosmeticTap = "cosmic_tap",
  lastSaved = 1702886400
}
```

### Passive Income Logic

```lua
function calculatePassiveIncome(playerData)
  local timeSinceLastJoin = currentTime - playerData.lastSaved
  local maxPassiveTime = 2 * 60 * 60  -- 2 hours cap
  local passiveTime = math.min(timeSinceLastJoin, maxPassiveTime)
  local basePassiveRate = 1  -- 1 point per second
  local multiplier = playerData.streak > 0 and (1 + (playerData.streak * 0.05)) or 1
  if isSupporter(playerData) then
    multiplier = multiplier * 2
  end
  return math.floor(passiveTime * basePassiveRate * multiplier)
end
```

### Event Detection

```lua
function getActiveEventMultiplier()
  local currentHour = os.date("!*t", os.time()).hour
  local currentDay = os.date("!*t", os.time()).wday  -- 1=Sunday, 7=Saturday

  if currentDay >= 5 then  -- Friday-Sunday
    return 2  -- Weekend boost
  end

  return 1  -- Base multiplier
end
```

---

## Risks & Mitigations

| Risk                                    | Impact            | Mitigation                                                         |
| --------------------------------------- | ----------------- | ------------------------------------------------------------------ |
| DataStore quota exceeded                | Game unplayable   | Batch writes (every 30s), implement queue system                   |
| Tap detection latency on mobile         | Poor UX           | Use LocalScript, debounce to 100ms                                 |
| Leaderboard slow with 1000+ players     | Lag spikes        | Cache top 50, update every 5 seconds, not realtime                 |
| Supporter Pass not converting           | Low revenue       | A/B test pricing ($3.99 vs $4.99), test messaging                  |
| Players hit max level/points too fast   | Retention drops   | Increase XP requirements exponentially (lvl 100+ needs 1000x more) |
| Streak system abused (rejoins to reset) | Loses FOMO effect | Track play sessions, require 60+ taps/day to maintain streak       |

---

## Success Metrics: Week-by-Week

### Week 1 (Foundation)

- ✅ Tap detection working (no input lag)
- ✅ Points persist across sessions
- ✅ 50 concurrent players without crashes

### Week 2 (Engagement)

- ✅ Leaderboard updates live
- ✅ Passive income accumulating correctly
- ✅ Day 7 retention ≥ 60% (easy mode baseline)

### Week 3 (FOMO)

- ✅ Streak system tracking correctly
- ✅ Event multiplier applying
- ✅ Cosmetics rotating weekly

### Week 4 (Revenue)

- ✅ Supporter Pass conversion ≥ 5%
- ✅ Cosmetic purchase success rate ≥ 8%
- ✅ Average session ≥ 15 min
- ✅ Ready for soft launch

---

## Post-Launch (Week 5+)

### Week 5: Soft Launch & Metrics

- Release to 500-1000 internal testers
- Monitor Day 1, Day 3, Day 7 retention
- Target: D7 retention ≥ 45%
- Gather feedback, patch critical bugs

### Week 6-8: Ad Campaign

- Launch $20k Robux ad campaign
- Daily spend $500-1000
- Target audience: 8-16 year olds, casual players
- Benchmark: Cost per install < 50 Robux

### Ongoing: Iteration

- Add new cosmetics weekly
- Rotate event multipliers (keep variety)
- Monitor churn, adjust streak multiplier if needed
- A/B test Supporter Pass pricing

---

## Final Note

**This idea is strong because:**

- Proven model (CryoZONE's success validates the core loop)
- Roblox-optimized (tap games perform exceptionally well)
- Weaponized FOMO (daily streaks + limited cosmetics = anxiety-driven retention)
- Low friction to fun (zero tutorial, immediate dopamine)
- Scalable monetization (doesn't require P2W, just cosmetics + support pass)

**This beats 90% of Roblox game ideas because it prioritizes retention mechanics over complex systems.**
