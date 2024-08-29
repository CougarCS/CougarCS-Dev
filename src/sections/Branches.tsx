import BranchesCard from "@/components/BranchesCard";
import {
  branchesData,
  branchBorderBottomHoverMap,
  branchStrokeMap,
  branchTextColorMap,
  branchBorderBottomMap,
} from "@/util/branches";

export default function Branches() {
  return (
    <div className="hidden lg:flex lg:flex-col items-center w-full bg-branchesBg py-20">
      <div className="max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <img
            src="icons/branches.svg"
            alt="branches"
            height={63}
            width={190}
            className="mb-8"
          />

          <h1 className="text-csred font-bold text-3xl mb-3">
            Explore our three branches
          </h1>
          <p className="text-cardPrimary text-lg font-semibold">
            Learn about the branches of CougarCS that power what we do.
          </p>
        </div>

        <div className="flex gap-8">
          {branchesData.map(
            ({
              activities,
              description,
              learnMoreHref,
              learnMoreText,
              name,
              value,
            }) => (
              <BranchesCard
                activities={activities}
                description={description}
                learnMoreHref={learnMoreHref}
                learnMoreText={learnMoreText}
                name={name}
                key={value}
                iconHeight={38}
                iconWidth={38}
                stroke={branchStrokeMap[value]}
                bottomBorderColor={branchBorderBottomMap[value]}
                textColor={branchTextColorMap[value]}
                hoverBorderColor={branchBorderBottomHoverMap[value]}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
}
