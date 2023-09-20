import { ThumbsUp, Users, Wallet } from "lucide-react";
import React from "react";

type Props = { number: number };

const text = [
  {
    headline: "Affordable Price",
    subtext:
      "The cost of dental care is reasonable and manageable within a person's budget.",
  },
  {
    headline: "Professional Team",
    subtext:
      "The team include dentists, dental hygienists, dental assistants, and administrative staff who work together to provide high-quality dental care to patients.",
  },
  {
    headline: "Satisfactory Service",
    subtext:
      "The patient receives quality dental care that meets or exceeds their expectations.",
  },
];

function CardComponent({ number }: Props) {
  return (
    <div className="flex w-full items-center py-3 pl-3 ">
      {/* TODO: Add Icon */}
      <div className="flex h-[4rem] w-[20%] items-center justify-center">
        {number === 1 ? (
          <Wallet className="text-sky-700 lg:h-7 lg:w-7" />
        ) : number === 2 ? (
          <Users className="text-sky-700 lg:h-7 lg:w-7" />
        ) : (
          <ThumbsUp className="text-sky-700 lg:h-7 lg:w-7" />
        )}
      </div>
      <div className="w-full">
        <h3 className="text-lg font-bold text-sky-700">
          {text[number].headline}
        </h3>
        <h4 className="max-w-sm text-[1.1rem] text-gray-950">
          {text[number].subtext}
        </h4>
      </div>
    </div>
  );
}

export default CardComponent;
