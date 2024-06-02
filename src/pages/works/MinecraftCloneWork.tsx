import React from 'react'
import { getWorkBackground } from '../../utils'
import Work from './Work'

const MinecraftCloneWork = () => {
  return (
    <Work title='Minecraft Clone' description='A Minecraft Clone made with love' background={getWorkBackground('Minecraft Clone')} />
  )
}

export default MinecraftCloneWork