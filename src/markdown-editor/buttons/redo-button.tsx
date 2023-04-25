import { useCommands, useHelpers } from '@remirror/react'
import React, { useCallback } from 'react'
import { HistoryExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const RedoButton = () => {
  const { redo } = useCommands<HistoryExtension>()
  const { redoDepth } = useHelpers<HistoryExtension>(true)

  const handleSelect = useCallback(() => {
    if (redo.enabled()) {
      redo()
    }
  }, [redo])

  const enabled = redoDepth() > 0

  return (
    <BaseButton onClick={handleSelect} enabled={enabled} active={false}>
    </BaseButton>
  )
}
