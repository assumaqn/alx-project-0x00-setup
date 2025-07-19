import React from "react";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Landing Page - Buttons Demo</h1>

      <div className="space-y-2">
        <h2 className="font-medium">Small Buttons</h2>
        <Button title="Small Sm" styles="text-sm rounded-sm px-2 py-1" />
        <Button title="Small Md" styles="text-sm rounded-md px-2 py-1" />
        <Button title="Small Full" styles="text-sm rounded-full px-2 py-1" />
      </div>

      <div className="space-y-2">
        <h2 className="font-medium">Medium Buttons</h2>
        <Button title="Medium Sm" styles="text-base rounded-sm" />
        <Button title="Medium Md" styles="text-base rounded-md" />
        <Button title="Medium Full" styles="text-base rounded-full" />
      </div>

      <div className="space-y-2">
        <h2 className="font-medium">Large Buttons</h2>
        <Button title="Large Sm" styles="text-lg rounded-sm px-6 py-3" />
        <Button title="Large Md" styles="text-lg rounded-md px-6 py-3" />
        <Button title="Large Full" styles="text-lg rounded-full px-6 py-3" />
      </div>
    </div>
  );
};

export default Landing;
