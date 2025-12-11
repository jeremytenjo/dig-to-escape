-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _remo = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "remo", "src")
local createRemotes = _remo.createRemotes
local namespace = _remo.namespace
local remote = _remo.remote
local t = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "t", "lib", "ts").t
local powersRemotes = createRemotes({
	powers = namespace({
		setCoins = remote(t.number),
	}),
})
return {
	powersRemotes = powersRemotes,
}
