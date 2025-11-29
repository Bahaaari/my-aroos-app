"use client";
import React from "react";
import { useState } from "react";
import { MapPin, Calendar, Image, Grid, CheckSquare, MessageSquare, Scale } from "lucide-react";
import { ReactNode } from "react";
import TabContent from "./TabContent"; // ← ایمپورت محتوای تب‌ها


interface Tab {
  id: string;
  label: string;
  icon:ReactNode;
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("address");

  // تعریف تب‌ها
  const tabs:Tab[] = [
    { id: "intro", label: "معرفی", icon: <CheckSquare size={18} /> },
    { id: "services", label: "خدمات", icon: <Grid size={18} /> },
    { id: "gallery", label: "گالری", icon: <Image size={18} /> },
    { id: "booking", label: "برنامه رزرو", icon: <Calendar size={18} /> },
    { id: "address", label: "آدرس", icon: <MapPin size={18} /> },
    { id: "reviews", label: "نظرات کاربران", icon: <MessageSquare size={18} /> },
    { id: "compare", label: "مقایسه", icon: <Scale size={18} /> },
  ];

  return (
    <div className="w-full">
      {/* نوار تب‌ها */}
      <div className="flex items-center justify-start bg-gray-200">
        <div className="flex space-x-4 space-x-reverse overflow-x-auto no-scrollbar ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 
                ${activeTab === tab.id
                  ? "text-pink-600 border-t-2 border-pink-500 bg-white shadow-sm"
                  : "text-gray-500 hover:text-pink-600"
                }`}
            >
              <span className="ml-1">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* محتوای تب‌ها */}
      <div className="bg-white shadow-sm rounded-md">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
}
