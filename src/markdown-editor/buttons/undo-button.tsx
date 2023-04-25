import { useCommands, useHelpers } from '@remirror/react'
import React, { useCallback } from 'react'
import { HistoryExtension } from 'remirror/extensions'
import { BaseButton } from './base-button.js'

export const UndoButton = () => {
  const { undo } = useCommands<HistoryExtension>()
  const { undoDepth } = useHelpers<HistoryExtension>(true)

  const handleSelect = useCallback(() => {
    if (undo.enabled()) {
      undo()
    }
  }, [undo])

  const enabled = undoDepth() > 0

  return (
    <BaseButton onClick={handleSelect} enabled={true} active={false}>
    </BaseButton>
  )
}
