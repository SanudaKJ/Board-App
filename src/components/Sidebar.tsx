import React from "react";
import {
  LayoutDashboard,
  Folder,
  MessageSquare,
  Calendar,
  Users,
  ChevronRight,
  ChevronDown,
  MessageCircleMore,
} from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarProps {
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([
    "boards",
  ]);

  const toggleExpanded = (item: string) => {
    setExpandedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", href: "#" },
    {
      id: "boards",
      icon: Folder,
      label: "Boards",
      href: "#",
      expandable: true,
      children: [
        { id: "create-route", label: "Create route", href: "#" },
        { id: "management-board", label: "Management board App", href: "#" },
        { id: "sport-xi", label: "Sport Xi Project", href: "#", active: true },
        { id: "wordpress", label: "Wordpress theme", href: "#" },
      ],
    },
    {
      id: "messages",
      icon: MessageCircleMore,
      label: "Messages",
      href: "#",
      badge: "3",
    },
    { id: "calendar", icon: Calendar, label: "Calendar", href: "#" },
    { id: "team", icon: Users, label: "Team members", href: "#" },
    
  ];

  return (
    <div
      className={cn(
        "w-64 bg-white border-r border-gray-200 flex flex-col",
        className
      )}
    >
      <div className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-4">
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
      </div>
      </div>
      
      <div className="p-4">
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.id}>
              <button
                onClick={() => item.expandable && toggleExpanded(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors",
                  item.id === "boards" && expandedItems.includes("boards")
                    ? "bg-blue-50 text-blue-700"
                    : "text-gray-700 hover:bg-gray-50"
                )}
              >
                <item.icon className="w-4 h-4" />
                <span className="flex-1 text-left">{item.label}</span>
                {item.badge && (
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
                {item.expandable &&
                  (expandedItems.includes(item.id) ? (
                    <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ChevronRight className="w-4 h-4" />
                  ))}
              </button>

              {item.expandable &&
                item.children &&
                expandedItems.includes(item.id) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.children.map((child) => (
                      <button
                        key={child.id}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors",
                          child.active
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        )}
                      >
                        <div className="w-4 h-4 flex items-center justify-center">
                          {child.active ? (
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                          ) : (
                            <div className="w-1 h-1 bg-gray-400 rounded-full" />
                          )}
                        </div>
                        <span className="flex-1 text-left">{child.label}</span>
                      </button>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};
