import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { branchesData } from "../../util/branches";
import BranchesCard from "@/components/BranchesCard";
import {
  branchBorderBottomMap,
  branchTextColorMap,
  branchStrokeMap,
  branchBorderBottomHoverMap,
} from "../../util/branches";

const Branches = () => {
  return (
    <div className="flex flex-col items-center h-fit px-4 pt-6 pb-12 bg-branchesBg shadow-sm lg:hidden">
      <div className="flex flex-col justify-center items-center">
        <img
          src="icons/branches.svg"
          alt="branches"
          height={31}
          width={132}
          className="mb-6"
        />

        <div className="px-6 mb-5">
          <h1 className="text-csred font-bold text-2xl mb-2">
            Explore our three branches
          </h1>
          <p className="text-cardPrimary text-sm font-medium">
            Click on one of the branches below to learn more
          </p>
        </div>
      </div>

      <Tabs defaultValue="infosec" className="w-full">
        <TabsList className="w-full flex justify-between bg-cardTabBg shadow-sm mb-4">
          <TabsTrigger
            value="infosec"
            className="text-cardTabInactive border-[1.4px] border-transparent data-[state=active]:border-infosecBg"
          >
            Information Security
          </TabsTrigger>
          <TabsTrigger
            value="tutoring"
            className="text-cardTabInactive border-[1.4px] border-transparent data-[state=active]:border-tutoringBg"
          >
            Tutoring
          </TabsTrigger>
          <TabsTrigger
            value="webdev"
            className="text-cardTabInactive border-[1.4px] border-transparent data-[state=active]:border-webdevBg"
          >
            Web Dev.
          </TabsTrigger>
        </TabsList>

        {branchesData.map(
          ({
            name,
            description,
            activities,
            value,
            learnMoreHref,
            learnMoreText,
          }) => (
            <TabsContent key={name} value={value}>
              <BranchesCard
                name={name}
                description={description}
                activities={activities}
                iconHeight={30}
                iconWidth={30}
                learnMoreHref={learnMoreHref}
                learnMoreText={learnMoreText}
                bottomBorderColor={branchBorderBottomMap[value]}
                hoverBorderColor={branchBorderBottomHoverMap[value]}
                stroke={branchStrokeMap[value]}
                textColor={branchTextColorMap[value]}
              />
            </TabsContent>
          ),
        )}
      </Tabs>
    </div>
  );
};

export default Branches;
