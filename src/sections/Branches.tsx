import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { branchesData } from "../util/branches";
import BranchesTab from "@/components/BranchesTab";
import {
	branchBorderBottomMap,
	branchTextColorMap,
	branchStrokeMap,
	branchBorderBottomHoverMap,
} from "../util/branches";

export default function Branches() {
	return (
		<div className="flex flex-col items-center max-h-[685px] h-[685px] px-4 pt-6 pb-11 bg-branchesBg shadow-sm">
			<div className="flex flex-col justify-center items-center">
				<img
					src="icons/branches.svg"
					alt="branches"
					height={31}
					width={132}
					className="mb-6"
				/>

				<div className="px-6 mb-3">
					<h1 className="text-infosecBg font-medium text-2xl mb-1">
						Explore our three branches
					</h1>
					<p className="text-cardPrimary text-sm">
						Click on one of the branches below to learn more
					</p>
				</div>
			</div>

			<Tabs defaultValue="infosec" className="w-full h-10">
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
						<BranchesTab
							key={name}
							name={name}
							description={description}
							activities={activities}
							value={value}
							iconHeight={30}
							iconWidth={30}
							learnMoreHref={learnMoreHref}
							learnMoreText={learnMoreText}
							bottomBorderColor={branchBorderBottomMap[value]}
							hoverBorderColor={branchBorderBottomHoverMap[value]}
							stroke={branchStrokeMap[value]}
							textColor={branchTextColorMap[value]}
						/>
					)
				)}
			</Tabs>
		</div>
	);
}
