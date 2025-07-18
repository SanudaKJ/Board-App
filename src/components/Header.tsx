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
} from "lucide-react";
import { useTaskStore } from "../store/taskStore";

export const Header: React.FC = () => {
  const { searchQuery, setSearchQuery } = useTaskStore();

  return (
    <div className="bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-3  text-black">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Image
              src="/assets/Frame.png"
              alt="Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <span className="font-semibold">
            <span className="text-black">Board</span>{" "}
            <span className="text-blue-600">App</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium text-white">
            Create new board
            <Plus className="w-4 h-4" />
          </button>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
            <input
              type="text"
              placeholder="Search tasks..."
              className="bg-gray-200 placeholder-gray-400 text-gray-600 border-none rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none text-sm "
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-blue-500 rounded-lg">
              <Settings2 className="w-4 h-4" />
            </button>
            <button className="p-2 hover:bg-blue-500 rounded-lg">
              <Bell className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">U</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm">
              R
            </div>
            <div className="flex flex-col items-start">
              <span className="text-gray-400">workspace</span>
              <span className="text-black font-bold text-lg">Root folder</span>
            </div>

            <ChevronDown className="w-4 h-4" />
          </button>
        </div> */}

        {/* <div className="flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Dashboard
            </a>
            <a href="#" className="text-blue-600 font-medium">
              Boards
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Messages
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Calendar
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Team members
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Support
            </a>
          </nav>
        </div> */}
      </div>

      {/* Project header */}
      {/* <div className="px-6 py-4 border-t border-gray-200">
        <div className="flex items-center flex-col ">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-gray-900">
              Sport Xi Project
            </h1>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
              In progress
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-sm text-gray-500">
              <span>event production</span>
              <br />
              <span>assigned</span>
            </div>

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

            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-2 text-sm text-gray-500">
          Last updated on 04 April 2022
        </div>
      </div> */}

      
    </div>
  );
};
