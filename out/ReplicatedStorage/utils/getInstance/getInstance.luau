-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local _services = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services")
local ReplicatedStorage = _services.ReplicatedStorage
local Workspace = _services.Workspace
local function getInstance(props)
	local pathSegments = string.split(props.instancePath, "/")
	local rootFolder = pathSegments[1]
	table.remove(pathSegments, 1)
	local currentParent = if rootFolder == "ReplicatedStorage" then ReplicatedStorage elseif rootFolder == "Workspace" then Workspace else nil
	if not currentParent then
		error(`Invalid root folder: {rootFolder}. Options are 'Workspace' | 'ReplicatedStorage'`)
	end
	for _, segment in pathSegments do
		currentParent = currentParent:WaitForChild(segment)
	end
	local instance = currentParent
	return instance
end
return {
	default = getInstance,
}
