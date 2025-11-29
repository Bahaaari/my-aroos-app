import React from "react";

type TabButtonProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ title, isActive, onClick }) => {
  return (
    <button
      className={`tab ${isActive ? "active" : ""} text-sm p-4 relative tab`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default TabButton;
