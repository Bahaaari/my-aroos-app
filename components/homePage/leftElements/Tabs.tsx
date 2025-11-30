"use client"

import React, { useState } from "react";
import TabButton from "./TabButton";
import "./tabs.css";
//import "./ChoosingButton.css";

const Tabs: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const titles = [
    "پکیج جهیزیه طرح ۱",
    "هدیه ویژه عروس استور",
    "حراج فروشگاه عروس استور",
  ];

  return (
    <div className="tabs">
      {titles.map((title, index) => (
        <TabButton
          key={index}
          title={title}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </div>
  );
};

export default Tabs;
