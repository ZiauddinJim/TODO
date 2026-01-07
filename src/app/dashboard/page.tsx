"use client";

import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";
import { useTasks } from "@/context/TaskContext";

export default function DashboardPage() {
    const { tasks } = useTasks();

    const totalTasks = tasks.length;
    const newTasks = tasks.filter((t) => t.status === "New").length;
    const inProgressTasks = tasks.filter((t) => t.status === "In Progress").length;
    const completedTasks = tasks.filter((t) => t.status === "Completed").length;
    const canceledTasks = tasks.filter((t) => t.status === "Canceled").length;

    return (
        <LayoutWrapper>
            <Header title="Dashboard" />
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-gray-500 text-sm font-medium">Total Tasks</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">{totalTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-primary text-sm font-medium">New</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">{newTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-yellow-500 text-sm font-medium">In Progress</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">{inProgressTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-green-500 text-sm font-medium">Completed</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">{completedTasks}</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="text-red-500 text-sm font-medium">Canceled</h3>
                        <p className="text-3xl font-bold text-gray-800 mt-2">{canceledTasks}</p>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
}
