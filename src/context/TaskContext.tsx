"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type TaskStatus = "New" | "In Progress" | "Completed" | "Canceled";

export interface Task {
    id: string;
    title: string;
    description: string;
    date: string;
    isNew?: boolean;
    status: TaskStatus;
}

interface TaskContextType {
    tasks: Task[];
    addTask: (task: Omit<Task, "id" | "isNew" | "status">) => void;
    deleteTask: (id: string) => void;
    updateTaskStatus: (id: string, status: TaskStatus) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
    const [tasks, setTasks] = useState<Task[]>([]);

    // Load initial mock data or from local storage (simplified for now)
    useEffect(() => {
        const initialTasks: Task[] = [
            {
                id: "1",
                title: "Create New",
                description: "Create New in publishing and graphic design, Lorem ipsum is a placeholder te",
                date: "27-06-2022",
                isNew: true,
                status: "New",
            },
            {
                id: "2",
                title: "Create New",
                description: "Create New in publishing and graphic design, Lorem ipsum is a placeholder te",
                date: "27-06-2022",
                isNew: true,
                status: "New",
            },
            {
                id: "3",
                title: "In Progress Task",
                description: "This task is currently in progress.",
                date: "28-06-2022",
                status: "In Progress",
            },
            {
                id: "4",
                title: "Completed Task",
                description: "This task has been completed.",
                date: "29-06-2022",
                status: "Completed",
            },
        ];
        setTasks(initialTasks);
    }, []);

    const addTask = (newTask: Omit<Task, "id" | "isNew" | "status">) => {
        const task: Task = {
            ...newTask,
            id: Math.random().toString(36).substr(2, 9),
            isNew: true,
            status: "New",
        };
        setTasks((prev) => [task, ...prev]);
    };

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const updateTaskStatus = (id: string, status: TaskStatus) => {
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status } : t)));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, updateTaskStatus }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
}
