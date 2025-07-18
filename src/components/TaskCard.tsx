import React from 'react'
import { Draggable } from '@hello-pangea/dnd'
import { MessageSquare, Paperclip, Calendar, MoreHorizontal, FileText } from 'lucide-react'
import { Task, User } from '../store/taskStore'
import { cn, getPriorityColor } from '../lib/utils'

interface TaskCardProps {
  task: Task
  index: number
  users: Record<string, User>
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, index, users }) => {
  const assignedUsers = task.assignees.map(id => users[id]).filter(Boolean)
  
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={cn(
            'bg-white rounded-lg border border-gray-200 p-4 mb-3 shadow-sm hover:shadow-md transition-shadow',
            snapshot.isDragging && 'shadow-lg rotate-2'
          )}
        >
          {/* Priority indicator */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className={cn('w-2 h-2 rounded-full', getPriorityColor(task.priority))} />
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                {task.tags[0] || 'Task'}
              </span>
            </div>
            <button className="p-1 hover:bg-gray-100 rounded">
              <MoreHorizontal className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          {/* Task title */}
          <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
            {task.title}
          </h3>
          
          {/* Assignees */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -space-x-2">
              {assignedUsers.slice(0, 3).map((user, idx) => (
                <div
                  key={user.name + idx}
                  className="w-6 h-6 rounded-full bg-blue-500 text-white text-xs flex items-center justify-center border-2 border-white"
                  title={user.name}
                >
                  {user.initials}
                </div>
              ))}
              {assignedUsers.length > 3 && (
                <div className="w-6 h-6 rounded-full bg-gray-300 text-gray-600 text-xs flex items-center justify-center border-2 border-white">
                  +{assignedUsers.length - 3}
                </div>
              )}
            </div>
          </div>
          
          {/* Due date */}
          {task.dueDate && (
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
              <Calendar className="w-3 h-3" />
              <span>{task.dueDate}</span>
            </div>
          )}
          
          {/* Footer with stats */}
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-3">
              {task.comments > 0 && (
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  <span>{task.comments}</span>
                </div>
              )}
              {task.attachments > 0 && (
                <div className="flex items-center gap-1">
                  <Paperclip className="w-3 h-3" />
                  <span>{task.attachments}</span>
                </div>
              )}
              {task.reports && task.reports > 0 && (
                <div className="flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>{task.reports} reports</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Task preview thumbnails for some tasks */}
          {(task.id === '4' || task.id === '5' || task.id === '8' || task.id === '12' || task.id === '15' || task.id === '16') && (
            <div className="mt-3 bg-gray-100 rounded-md h-20 flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-300 rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-gray-400 rounded" />
              </div>
            </div>
          )}
        </div>
      )}
    </Draggable>
  )
}