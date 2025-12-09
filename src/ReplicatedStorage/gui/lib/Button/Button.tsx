import React from '@rbxts/react'

import sizePx from '../../utils/sizePx/sizePx.js'
import hex from '../../utils/hex/hex.js'

export type ButtonProps = {
  text: string
  onClick?: () => void
  position?: UDim2
}

export default function Button(props: ButtonProps) {
  const size = sizePx({ width: 280, height: 80 })

  return (
    <textbutton
      Text={props.text}
      Size={size}
      BackgroundColor3={hex('#00DD00')}
      TextColor3={hex('#FFFFFF')}
      TextSize={32}
      Font={Enum.Font.GothamBold}
      Position={props.position}
      BorderSizePixel={4}
      BorderColor3={hex('#00AA00')}
      Event={{
        Activated: () => {
          return props.onClick?.()
        },
      }}
    ></textbutton>
  )
}
