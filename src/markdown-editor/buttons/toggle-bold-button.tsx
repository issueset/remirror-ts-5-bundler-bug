import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { BoldExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const ToggleBoldButton = () => {
  const { toggleBold } = useCommands<BoldExtension>()

  const handleSelect = useCallback(() => {
    if (toggleBold.enabled()) {
      toggleBold()
    }
  }, [toggleBold])

  const active = useActive<BoldExtension>().bold()
  const enabled = toggleBold.enabled()

  return (
    <BaseButton active={active} enabled={enabled} onClick={handleSelect}>
    </BaseButton>
  )
}
