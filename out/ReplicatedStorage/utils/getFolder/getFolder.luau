-- Compiled with roblox-ts v3.0.0
local TS = require(game:GetService("ReplicatedStorage"):WaitForChild("rbxts_include"):WaitForChild("RuntimeLib"))
local Workspace = TS.import(script, game:GetService("ReplicatedStorage"), "rbxts_include", "node_modules", "@rbxts", "services").Workspace
local function getFolder(props)
	local pathSegments = string.split(props.folderPath, "/")
	local currentParent = Workspace
	for _, segment in pathSegments do
		currentParent = currentParent:WaitForChild(segment)
	end
	local folder = currentParent
	return folder
end
return {
	default = getFolder,
}
