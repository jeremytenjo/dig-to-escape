import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'
import { CreateReactStory } from '@rbxts/ui-labs'

import Text from './Text.js'

const story = CreateReactStory(
  {
    react: React,
    reactRoblox: ReactRoblox,
    controls: {
      name: 'hello',
    },
  },
  (props) => {
    return <Text {...props.controls} />
  },
)

export = story
