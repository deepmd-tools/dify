import type { MouseEvent } from 'react'
import { useCallback } from 'react'
import { useWorkflowStore } from '../store'

export const usePanelInteractions = () => {
  const workflowStore = useWorkflowStore()

  const handlePanelContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault()
    const container = document.querySelector('#workflow-container')
    const { x, y } = container!.getBoundingClientRect()
    workflowStore.setState({
      panelMenu: {
        top: e.clientY - y,
        left: e.clientX - x,
      },
    })
  }, [workflowStore])

  const handlePanelContextmenuCancel = useCallback(() => {
    workflowStore.setState({
      panelMenu: undefined,
    })
  }, [workflowStore])

  const handleNodeContextmenuCancel = useCallback(() => {
    workflowStore.setState({
      nodeMenu: undefined,
    })
  }, [workflowStore])

  return {
    handlePanelContextMenu,
    handlePanelContextmenuCancel,
    handleNodeContextmenuCancel,
  }
}
