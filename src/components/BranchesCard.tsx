import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Activity } from "../displayData/branches";

type BranchesCardProps = {
  name: string;
  description: string;
  learnMoreText: string;
  learnMoreHref: string;
  activities: Activity[];
  iconHeight: number;
  iconWidth: number;
  stroke: string;
  bottomBorderColor: string;
  textColor: string;
  hoverBorderColor: string;
};

const BranchesCard: React.FC<BranchesCardProps> = ({
  activities,
  description,
  name,
  iconHeight,
  iconWidth,
  learnMoreHref,
  learnMoreText,
  bottomBorderColor,
  hoverBorderColor,
  stroke,
  textColor,
}: BranchesCardProps) => {
  return (
    <Card
      className={`border-b-4 ${bottomBorderColor} rounded-b-none shadow-md`}
    >
      <CardHeader className="text-left p-8 lg:p-7 2xl:p-8">
        <span className={`font-bold mb-3 ${textColor}`}>Overview</span>

        <CardTitle className="text-cardPrimary font-semibold text-2xl mb-3">
          {name}
        </CardTitle>

        <CardDescription className="text-sm text-cardSecondary font-medium text-pretty lg:text-[15px]/6 lg:font-normal 2xl:text-base">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-8 pb-8 lg:px-7 lg:pb-7 2xl:px-8 2xl:pb-8 pt-0">
        <div className="flex flex-col gap-5">
          {activities.map(({ svgPath, title }) => (
            <div className="flex items-center gap-[10px]" key={title}>
              <img
                src={svgPath}
                alt={title}
                height={iconHeight}
                width={iconWidth}
              />
              <p className="text-cardPrimary text-base font-semibold">
                {title}
              </p>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="px-8 pb-8 lg:px-7 lg:pb-7 2xl:px-8 2xl:pb-8  pt-0">
        <a
          href={learnMoreHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-[10px] mb-1"
        >
          <p
            className={`${textColor} ${hoverBorderColor} border-b-[1.5px] border-b-transparent text-sm font-semibold lg:text-[15px]`}
          >
            {learnMoreText}
          </p>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="23"
              height="23"
              rx="3.5"
              fill="white"
              stroke={stroke}
            />
            <path
              d="M8.66659 15.3333L15.3333 8.66664M15.3333 8.66664H9.33325M15.3333 8.66664V14.6666"
              stroke={stroke}
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </CardFooter>
    </Card>
  );
};

export default BranchesCard;
