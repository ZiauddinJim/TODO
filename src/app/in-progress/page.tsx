"use client";

import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";

export default function InProgressPage() {
    const { tasks } = useTasks();
    const inProgressTasks = tasks.filter((task) => task.status === "In Progress");

    return (
        <LayoutWrapper>
            <Header title="In Progress" />
            <div className="p-8">
                {inProgressTasks.length === 0 ? (
                    <div className="text-center text-gray-500 mt-20">
                        <h3 className="text-xl font-medium">No tasks in progress</h3>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {inProgressTasks.map((task) => (
                            <TaskCard
                                key={task.id}
                                id={task.id}
                                title={task.title}
                                description={task.description}
                                date={task.date}
                                status={task.status}
                            />
                        ))}
                    </div>
                )}
            </div>
        </LayoutWrapper>
    );
}
