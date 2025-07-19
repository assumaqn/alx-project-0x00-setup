// pages/landing.tsx
import React from 'react';
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
    </div>
  );
};

export default Landing;
