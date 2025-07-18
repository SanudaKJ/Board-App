import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Task {
  id: string
  title: string
  description: string
  status: 'To Do' | 'In Progress' | 'Approved' | 'Reject'
  priority: 'Low' | 'Medium' | 'High'
  assignees: string[]
  tags: string[]
  dueDate?: string | null
  comments: number
  attachments: number
  reports?: number
}

export interface User {
  name: string
  avatar: string
  initials: string
}

interface TaskStore {
  tasks: Task[]
  users: Record<string, User>
  searchQuery: string
  loading: boolean
  
  // Actions
  setTasks: (tasks: Task[]) => void
  setUsers: (users: Record<string, User>) => void
  updateTaskStatus: (taskId: string, newStatus: Task['status']) => void
  setSearchQuery: (query: string) => void
  setLoading: (loading: boolean) => void
  
  // Computed
  getFilteredTasks: () => Task[]
  getTasksByStatus: (status: Task['status']) => Task[]
}

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      users: {},
      searchQuery: '',
      loading: false,
      
      setTasks: (tasks) => set({ tasks }),
      setUsers: (users) => set({ users }),
      
      updateTaskStatus: (taskId, newStatus) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, status: newStatus } : task
          ),
        }))
      },
      
      setSearchQuery: (query) => set({ searchQuery: query }),
      setLoading: (loading) => set({ loading }),
      
      getFilteredTasks: () => {
        const { tasks, searchQuery } = get()
        if (!searchQuery.trim()) return tasks
        
        const query = searchQuery.toLowerCase()
        return tasks.filter(
          (task) =>
            task.title.toLowerCase().includes(query) ||
            task.description.toLowerCase().includes(query) ||
            task.tags.some((tag) => tag.toLowerCase().includes(query))
        )
      },
      
      getTasksByStatus: (status) => {
        const filteredTasks = get().getFilteredTasks()
        return filteredTasks.filter((task) => task.status === status)
      },
    }),
    {
      name: 'task-storage',
      partialize: (state) => ({
        tasks: state.tasks,
        users: state.users,
      }),
    }
  )
)