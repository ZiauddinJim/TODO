"use client";

import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";
import TaskCard from "@/components/TaskCard";
import { useTasks } from "@/context/TaskContext";

export default function Home() {
  const { tasks } = useTasks();

  return (
    <LayoutWrapper>
      <Header title="New Task" />
      <div className="p-8">
        {tasks.filter(t => t.status === "New").length === 0 ? (
          <div className="text-center text-gray-500 mt-20">
            <h3 className="text-xl font-medium">No new tasks found</h3>
            <p>Ready to start? Create a new task!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.filter(t => t.status === "New").map((task) => (
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
