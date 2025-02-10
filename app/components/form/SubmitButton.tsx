"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface SubmitButtonProps {
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <Button
        type="submit"
        color="secondary"
        onClick={onClick}
        className="mt-4 bg-gray-500 hover:bg-gray-600 text-white"
      >
        Check Chord and Tune !
      </Button>
    </div>
  );
};

export default SubmitButton;
