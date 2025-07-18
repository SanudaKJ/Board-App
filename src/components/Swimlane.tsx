import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import { Plus } from "lucide-react";
import { Task, User } from "../store/taskStore";
import { TaskCard } from "./TaskCard";
import { cn, getStatusColor, getStatusHeaderColor } from "../lib/utils";

interface SwimlaneProps {
  status: Task["status"];
  tasks: Task[];
  users: Record<string, User>;
}

export const Swimlane: React.FC<SwimlaneProps> = ({ status, tasks, users }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "To Do":

      case "In Progress":

      case "Approved":

      case "Reject":

      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col h-full min-w-80 bg-gray-50 rounded-lg">
      {/* Header */}

      <div
        className={cn(
          "flex items-center justify-between p-4 border-b border-gray-200 rounded-t-lg",
          getStatusHeaderColor(status)
        )}
      >
        <div className="flex items-center gap-2">
          <span className="text-lg">{getStatusIcon(status)}</span>
          <h2 className="font-semibold text-gray-900">{status}</h2>
          <span
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium border",
              getStatusColor(status)
            )}
          >
            {tasks.length}
          </span>
        </div>
        <button className="p-1 hover:bg-gray-200 rounded">
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Tasks */}
      <Droppable droppableId={status}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={cn(
              "flex-1 p-4 min-h-96 transition-colors",
              snapshot.isDraggingOver && "bg-blue-50"
            )}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} users={users} />
            ))}
            {provided.placeholder}

            {/* Empty state */}
            {tasks.length === 0 && (
              <div className="flex items-center justify-center h-32 text-gray-400 text-sm">
                No tasks in {status.toLowerCase()}
              </div>
            )}
          </div>
        )}
      </Droppable>
    </div>
  );
};
