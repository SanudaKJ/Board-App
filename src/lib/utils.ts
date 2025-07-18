import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getStatusColor = (status: string) => {
  switch (status) {
    case 'To Do':
      return 'bg-gray-100 text-gray-800 border-gray-200'
    case 'In Progress':
      return 'bg-orange-100 text-orange-800 border-orange-200'
    case 'Approved':
      return 'bg-green-100 text-green-800 border-green-200'
    case 'Reject':
      return 'bg-red-100 text-red-800 border-red-200'
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200'
  }
}

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-red-500'
    case 'Medium':
      return 'bg-orange-500'
    case 'Low':
      return 'bg-green-500'
    default:
      return 'bg-gray-500'
  }
}

export const getStatusHeaderColor = (status: string) => {
  switch (status) {
    case 'To Do':
      return 'bg-gray-50 border-gray-200'
    case 'In Progress':
      return 'bg-orange-50 border-orange-200'
    case 'Approved':
      return 'bg-green-50 border-green-200'
    case 'Reject':
      return 'bg-red-50 border-red-200'
    default:
      return 'bg-gray-50 border-gray-200'
  }
}