import { increaseJumpPowerRemoteFunction } from '../remoteFunctions/increaseJumpPowerRemoteFunction/increaseJumpPowerRemoteFunction.js'
import Button from '../gui/lib/Button/Button.js'
import mountScreenGuiComponent from '../gui/utils/mountScreenGuiComponent/mountScreenGuiComponent.js'

async function onButtonClicked() {
  try {
    const purchased =
      await increaseJumpPowerRemoteFunction.increaseJumpPowerFromServer.request()

    if (!purchased) {
      warn('Not enough coins!')
    }
  } catch (err) {
    error(tostring(err))
  }
}

mountScreenGuiComponent({
  component: Button,
  props: {
    text: 'Buy Jump Power',
    onClick: onButtonClicked,
    position: new UDim2(1, 0, 1, 0),
    anchorPoint: new Vector2(1, 1),
  },
})
