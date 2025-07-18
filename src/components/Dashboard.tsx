import React, { useEffect } from 'react'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { useTaskStore, Task } from '../store/taskStore'
import { Swimlane } from './Swimlane'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import tasksData from '../data/task.json'
import { Project } from './Project'

const STATUSES: Task['status'][] = ['To Do', 'In Progress', 'Approved', 'Reject']

export const Dashboard: React.FC = () => {
  const {
    tasks,
    users,
    loading,
    setTasks,
    setUsers,
    setLoading,
    updateTaskStatus,
    getTasksByStatus,
  } = useTaskStore()

  // Load initial data
  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      try {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 500))
        
        setTasks(tasksData.tasks as Task[])
        setUsers(tasksData.users)
      } catch (error) {
        console.error('Failed to load tasks:', error)
      } finally {
        setLoading(false)
      }
    }
    
    // Only load if we don't have tasks (not loaded from localStorage)
    if (tasks.length === 0) {
      loadData()
    }
  }, [tasks.length, setTasks, setUsers, setLoading])

  const handleDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    // Drop cancelled
    if (!destination) return

    // Same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    // Update task status
    if (destination.droppableId !== source.droppableId) {
      updateTaskStatus(draggableId, destination.droppableId as Task['status'])
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading tasks...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex h-[calc(100vh-200px)]">
        <Sidebar />
        
        <div className="flex-1 overflow-auto">
          <Project />
          
          
          <DragDropContext onDragEnd={handleDragEnd}>
            <div className="p-6">
              <div className="flex gap-6 min-w-max">
                {STATUSES.map((status) => (
                  <Swimlane
                    key={status}
                    status={status}
                    tasks={getTasksByStatus(status)}
                    users={users}
                  />
                ))}
              </div>
            </div>
          </DragDropContext>
        </div>
      </div>
    </div>
  )
}