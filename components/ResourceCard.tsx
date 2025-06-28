import React from "react";

type ResourceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  titleColor?: string;
};

export default function ResourceCard({
  icon,
  title,
  description,
  titleColor = "text-gray-900",
}: ResourceCardProps) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
      <div className="flex items-start">
        <span className="text-2xl mr-4">{icon}</span>
        <div>
          <h3 className={`text-lg font-semibold ${titleColor}`}>{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
