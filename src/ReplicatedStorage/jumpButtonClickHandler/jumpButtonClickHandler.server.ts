import { Players, ReplicatedStorage } from '@rbxts/services'

export default function jumpButtonClickHandler() {
  const player = Players.LocalPlayer
  const playerGui = player.FindFirstChild('PlayerGui') as PlayerGui

  const instances = ReplicatedStorage.WaitForChild('Instances') as Folder
  const increaseJumpPowerFunction = instances.WaitForChild(
    'IncreaseJumpPowerFunction',
  ) as RemoteFunction
  const jumpPurchaseGui = instances.WaitForChild('JumpPurchaseGui') as Frame
  const jumpButton = jumpPurchaseGui.WaitForChild('JumpButton') as GuiButton

  function onButtonClicked() {
    const [success, purchased] = pcall(() => {
      return (increaseJumpPowerFunction as RemoteFunction).InvokeServer()
    })

    if (!success) {
      // purchased will be the error message if success is false
      error(tostring(purchased))
    } else if (success && !purchased) {
      warn('Not enough coins!')
    }
  }

  jumpButton.Activated.Connect(onButtonClicked)

  // Add the JumpPurchaseGui to the player's Gui
  jumpPurchaseGui.Parent = playerGui
}
