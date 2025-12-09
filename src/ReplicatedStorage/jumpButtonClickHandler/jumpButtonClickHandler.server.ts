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
    variant: 'buy-jump-power',
    text: 'Buy Jump Power',
    onClick: onButtonClicked,
  },
})
