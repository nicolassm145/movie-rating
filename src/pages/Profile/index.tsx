// src/pages/ProfilePage.tsx

import { useState } from "react";
import SystemLayout from "../../components/Layout/SystemLayout";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const TABS = [
    { id: "profile", label: "Profile" },
    { id: "watching", label: "Watching" },
    { id: "watched", label: "Watched" },
    { id: "watchlist", label: "Watchlist" },
    { id: "paused", label: "Paused" },
    { id: "dropped", label: "Dropped" },
    { id: "reviews", label: "Reviews" },
    { id: "lists", label: "Lists" },
    { id: "recommendation", label: "Recommendation" },
  ];

  return (
    <SystemLayout>
      <div className="relative w-full h-48 px-36 flex items-end pb-4">
        <div className="w-20 h-20 bg-gray-500 rounded-full border-4 border-gray-700 overflow-hidden">
        </div>

        <div className="ml-4 text-gray-200">
          <h1 className="text-2xl font-bold">Usuario</h1>
          <p className="text-sm text-gray-300">Joined on Month xx, xxxx</p>
          <div className="flex items-center gap-6 mt-2">
            <p className="text-sm">
              <span className="font-bold">xx</span> watched
            </p>
            <p className="text-sm">
              <span className="font-bold">xx</span> watchlisted
            </p>
            <p className="text-sm">
              <span className="font-bold">xx</span> ratings
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-36 mt-4 text-gray-200 ">
        <div className="flex justify-center items-center gap-4 border-b border-gray-600 pb-2">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-sm px-2 py-1 transition-colors ${
                activeTab === tab.id
                  ? "font-bold border-b-2 border-blue-500"
                  : "hover:text-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </SystemLayout>
  );
};

export default ProfilePage;
