"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <main className="flex-1 flex flex-col h-screen overflow-y-auto relative">
                {/* Mobile Header / Hamburger */}
                <div className="md:hidden p-4 flex items-center border-b border-gray-200 bg-white">
                    <button onClick={() => setIsSidebarOpen(true)} className="text-gray-600 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <span className="ml-4 font-bold text-lg text-gray-800">Task Manager</span>
                </div>

                {children}
            </main>
        </div>
    );
}
