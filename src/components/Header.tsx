"use client";

export default function Header({ title = "New Task" }: { title?: string }) {
    return (
        <header className="flex items-center justify-between px-8 py-5 bg-card-bg">
            <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-lg px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                    <button className="bg-primary hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-lg shadow-md transition-transform active:scale-95">
                        SEARCH
                    </button>
                </div>

                <div className="flex items-center gap-3 ml-4">
                    {/* Avatar Placeholder */}
                    <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden border-2 border-white shadow-sm">
                        <img src="https://i.pravatar.cc/150?img=8" alt="User Avatar" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </header>
    );
}
