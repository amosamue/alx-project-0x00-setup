import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-xl font-extralight">Landing Page</h1>

      {/* Render Card components */}
      <Card />
      <Card />
      <Card />

      {/* Render Button components */}
      <div className="flex flex-wrap gap-4 mt-6">
        {/* Sizes */}
        <Button title="Small Button" styles="text-sm px-2 py-1" />
        <Button title="Medium Button" styles="text-base px-4 py-2" />
        <Button title="Large Button" styles="text-lg px-6 py-3" />

        {/* Shapes */}
        <Button title="Rounded-sm" styles="rounded-sm" />
        <Button title="Rounded-md" styles="rounded-md" />
        <Button title="Rounded-full" styles="rounded-lg" />
        <Button title="Rounded-full" styles="rounded-full" />
      </div>
    </div>
  );
};

export default Landing;
