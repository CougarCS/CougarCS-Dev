import React from "react";
import { cn } from "@/lib/utils";

interface SectionAnnouncementProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // Optional icon component prop
  color: string; // Optional color prop
  text: string; // Optional text prop
}

const SectionAnnouncement: React.FC<SectionAnnouncementProps> = ({
  Icon,
  color = "red", // Default color to red if not provided
  text = "ABOUT US", // Default text if not provided
}) => {
  return (
    <div className="flex justify-center">
      <div
        className={cn(
          "w-8 h-8 border-2 rounded-l-sm flex justify-center items-center",
          `border-${color}-700`, // Use the color prop for the border
        )}
      >
        {Icon ? (
          <Icon
            className={`fill-current text-${color}-700`}
            width={14}
            height={16}
          />
        ) : (
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`fill-current text-${color}-700`}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.572571 0H2.03003L4.68467 2.55054H4.94493V2.39439H8.79677V2.55054H9.00498L11.7117 0H13.1171L13.7417 0.832831V3.17517L12.7527 5.25724V6.92291L12.3363 7.75574V9.68166L10.3583 12.5445V13.5335L8.64062 14.8869L8.06805 15.7197H5.67366L5.10109 14.8869L3.38338 13.5335V12.5445L1.4054 9.68166V7.75574L0.988987 6.92291V5.25724L0 3.17517V0.832831L0.572571 0ZM8.53652 9.88987V7.59958L9.94192 6.66265L10.8789 7.39137V8.2242L8.53652 9.88987ZM3.79979 6.66265L2.86286 7.39137V8.2242L5.20519 9.88987V7.59958L3.79979 6.66265ZM6.61059 13.5856L5.56956 12.7007H8.17215L7.13111 13.5856V14.2622H6.61059V13.5856Z"
              fill={`${color === "red" ? "#C80F2E" : "currentColor"}`}
            />
          </svg>
        )}
      </div>
      <div
        className={cn(
          "text-white px-4 text-center rounded-r-sm flex items-center justify-center font-semibold",
          `bg-${color}-700`,
        )}
      >
        {text}
      </div>
    </div>
  );
};

export default SectionAnnouncement;
