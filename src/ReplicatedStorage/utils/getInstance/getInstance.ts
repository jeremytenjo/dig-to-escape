import { ReplicatedStorage, Workspace } from '@rbxts/services'

type Roots = 'Workspace' | 'ReplicatedStorage'

export type GetInstanceProps = {
  instancePath: `${Roots}/${string}`
}

export default function getInstance<InstanceClass>(
  props: GetInstanceProps,
): InstanceClass {
  const pathSegments = props.instancePath.split('/')
  const rootFolder = pathSegments[0] as Roots
  let currentParent: Instance | undefined =
    rootFolder === 'ReplicatedStorage'
      ? ReplicatedStorage
      : rootFolder === 'Workspace'
        ? Workspace
        : undefined

  if (!currentParent) {
    error(
      `Invalid root folder: ${rootFolder}. Options are 'Workspace' | 'ReplicatedStorage'`,
    )
  }

  for (const segment of pathSegments) {
    currentParent = currentParent.WaitForChild(segment)
  }

  const instance = currentParent as InstanceClass

  return instance
}
