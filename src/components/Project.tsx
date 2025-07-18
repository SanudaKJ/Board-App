import React from "react";
import Image from "next/image";
import {
  Search,
  Plus,
  Bell,
  Settings,
  ChevronDown,
  MoreHorizontal,
  Settings2,
  Edit2,
} from "lucide-react";
import { useTaskStore } from "../store/taskStore";

export const Project: React.FC = () => {
  const { searchQuery, setSearchQuery } = useTaskStore();

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Project header */}
      <div className="px-2 py-4 border-t border-gray-200">
        <div className="flex items-start flex-col ">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">
              Sport Xi Project
            </h1>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
              In progress
            </span>
          </div>

          <div className="flex items-start gap-4 flex-col text-gray-600 ">
            <div className="text-sm text-gray-500">event production</div>

            <div className="flex flex-row gap-5">
              <div className="text-gray-400">assigned</div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm border-2 border-white">
                  J
                </div>
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm border-2 border-white">
                  A
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm border-2 border-white">
                  +2
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600 text-sm flex flex-row gap-2 border border-gray-300 rounded-2xl  p-2 ">
                Manage
                <span>
                  <Edit2 className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </div>

        
      </div>
      <div className="mt-2 text-sm text-gray-400 border-t border-gray-200 px-2 py-4">
          Last updated on 04 April 2022
        </div>
    </div>
  );
};
