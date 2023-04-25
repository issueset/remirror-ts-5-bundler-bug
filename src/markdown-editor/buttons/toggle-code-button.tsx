import { useActive, useCommands } from '@remirror/react'
import React, { useCallback } from 'react'
import { CodeExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const ToggleCodeButton = () => {
  const { toggleCode } = useCommands<CodeExtension>()

  const handleSelect = useCallback(() => {
    if (toggleCode.enabled()) {
      toggleCode()
    }
  }, [toggleCode])

  const active = useActive<CodeExtension>().code()
  const enabled = toggleCode.enabled()

  return (
    <BaseButton onClick={handleSelect} active={active} enabled={enabled}>
    </BaseButton>
  )
}
