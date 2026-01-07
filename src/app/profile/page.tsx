"use client";

import Header from "@/components/Header";
import LayoutWrapper from "@/components/LayoutWrapper";

export default function ProfilePage() {
    return (
        <LayoutWrapper>
            <Header title="Profile" />
            <div className="p-8">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
                    <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden mx-auto mb-6 border-4 border-primary-light">
                        <img src="https://i.pravatar.cc/150?img=8" alt="User Avatar" className="w-full h-full object-cover" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                    <p className="text-gray-500 mb-6">Product Designer</p>

                    <div className="grid grid-cols-1 gap-4 text-left">
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="text-xs text-gray-400 block uppercase tracking-wider">Email</span>
                            <span className="text-gray-800 font-medium">johndoe@example.com</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="text-xs text-gray-400 block uppercase tracking-wider">Location</span>
                            <span className="text-gray-800 font-medium">San Francisco, CA</span>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-lg">
                            <span className="text-xs text-gray-400 block uppercase tracking-wider">Bio</span>
                            <span className="text-gray-800">Passionate about creating intuitive and beautiful user experiences.</span>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
}
