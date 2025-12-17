import React from '@rbxts/react'
import ReactRoblox from '@rbxts/react-roblox'
import { CreateReactStory } from '@rbxts/ui-labs'

import WelcomeScreen from './WelcomeScreen.js'

const story = CreateReactStory(
  {
    react: React,
    reactRoblox: ReactRoblox,
    controls: {
      name: 'WelcomeScreen',
    },
  },
  (props) => {
    return <WelcomeScreen {...props.controls} />
  },
)

export = story
