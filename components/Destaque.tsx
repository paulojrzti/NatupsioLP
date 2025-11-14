"use client";
import { FC } from "react";
import { Sparkles } from "lucide-react";

interface DestaqueProps {
  text: string;
}

const Destaque: FC<DestaqueProps> = ({ text }) => {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-text  font-semibold shadow-sm"
      style={{
        background:
          "linear-gradient(90deg, #ABD87D 0%, #D6F6B5 31.73%, #ABD87D 75%, #D6F6B5 100%)",
      }}
    >
      <Sparkles className="w-4 h-4 text-green-900" />
      <span>{text}</span>
    </div>
  );
};

export default Destaque;
