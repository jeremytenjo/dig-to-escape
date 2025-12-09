import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'
import { CreateReactStory, Choose } from '@rbxts/ui-labs'

import Button from './Button.js'

const story = CreateReactStory(
  {
    react: React,
    reactRoblox: ReactRoblox,
    controls: {
      variant: Choose(['hello', 'world', 'button']),
    },
  },
  (props) => {
    const component = <Button variant={props.controls.variant} />
    return component
  },
)

export = story
