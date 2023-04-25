import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { StrikeExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const ToggleStrikeButton = () => {
  const { toggleStrike } = useCommands<StrikeExtension>()

  const handleSelect = useCallback(() => {
    if (toggleStrike.enabled()) {
      toggleStrike()
    }
  }, [toggleStrike])

  const active = useActive<StrikeExtension>().strike()
  const enabled = toggleStrike.enabled()

  return (
    <BaseButton onClick={handleSelect} active={active} enabled={enabled}>
    </BaseButton>
  )
}
