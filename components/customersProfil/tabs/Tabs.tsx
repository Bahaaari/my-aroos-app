"use client";
import React from "react";
import { useState } from "react";
import TabsContent from "./TabsContent"; // ← ایمپورت محتوای تب‌ها


interface Tab {
  id: string;
  label: string;
}

export default function Tabs() {
  const [activeTab, setActiveTab] = useState<string>("discountCodes");

  // تعریف تب‌ها
  const tabs:Tab[] = [
    { id: "messages", label: "پیام ها" },
    { id: "orders", label: "سفارشات" },
    { id: "favorits", label: "علاقه مندی ها" },
    { id: "reminder", label: "یادآور مراسم" },
    { id: "discountCodes", label: "کدهای تخفیف" },
    { id: "notices", label: "اطلاع رسانی ها" },
  ];

  return (
    <div className="w-full">
      {/* نوار تب‌ها */}
      <div className="flex items-center justify-start bg-gray-200">
        <div className="flex space-x-4  overflow-x-auto no-scrollbar ">
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
              <span className="text-xs">{tab.label}</span>
              
            </button>
          ))}
        </div>
      </div>

      {/* محتوای تب‌ها */}
      <div className="bg-white">
        <TabsContent activeTab={activeTab} />
      </div>
    </div>
  );
}
