"use client";

import { useTasks, TaskStatus, Task } from "@/context/TaskContext";
import { useState } from "react";

interface TaskCardProps {
    id: string;
    title: string;
    description: string;
    date: string;
    status: TaskStatus;
}

export default function TaskCard({ id, title, description, date, status }: TaskCardProps) {
    const { updateTaskStatus, deleteTask } = useTasks();
    const [showMenu, setShowMenu] = useState(false);

    const handleStatusChange = (newStatus: TaskStatus) => {
        updateTaskStatus(id, newStatus);
        setShowMenu(false);
    };

    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this task?")) {
            deleteTask(id);
        }
    }

    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative group">
            <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">{title}</h3>
                <div className="relative">
                    <button onClick={() => setShowMenu(!showMenu)} className="text-gray-400 hover:text-gray-600 p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle></svg>
                    </button>
                    {showMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-100 p-1">
                            <div className="text-xs font-semibold text-gray-500 px-3 py-2 uppercase">Move to</div>
                            {["New", "In Progress", "Completed", "Canceled"].map((s) => (
                                s !== status && (
                                    <button
                                        key={s}
                                        onClick={() => handleStatusChange(s as TaskStatus)}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-sm"
                                    >
                                        {s}
                                    </button>
                                )
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                {description}
            </p>

            <div className="flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="material-icons-outlined text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    </span>
                    <span>{date}</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className={`text-[10px] uppercase font-bold px-2 py-1 rounded-full ${status === 'New' ? 'bg-blue-100 text-blue-600' :
                            status === 'In Progress' ? 'bg-yellow-100 text-yellow-600' :
                                status === 'Completed' ? 'bg-green-100 text-green-600' :
                                    'bg-red-100 text-red-600'
                        }`}>
                        {status}
                    </span>
                    <button onClick={handleDelete} className="text-red-400 hover:text-red-600 transition-colors" title="Delete Task">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
