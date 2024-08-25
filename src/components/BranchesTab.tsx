import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TabsContent } from "@/components/ui/tabs";
import type { Activity } from "../util/branches";

type BranchesTabProps = {
	name: string;
	value: string;
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

export default function BranchesTab({
	activities,
	description,
	name,
	value,
	iconHeight,
	iconWidth,
	learnMoreHref,
	learnMoreText,
	bottomBorderColor,
	hoverBorderColor,
	stroke,
	textColor,
}: BranchesTabProps) {
	return (
		<TabsContent value={value}>
			<Card className={`border-b-4 ${bottomBorderColor} rounded-b-none`}>
				<CardHeader className="p-8">
					<span className={`font-semibold mb-2 ${textColor}`}>Overview</span>

					<CardTitle className="text-cardPrimary font-semibold text-2xl mb-3">
						{name}
					</CardTitle>

					<CardDescription className="text-left text-sm text-cardSecondary font-base">
						{description}
					</CardDescription>
				</CardHeader>

				<CardContent className="mb-4 p-8 pt-0">
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

				<CardFooter className="p-8 pt-0">
					<a
						href={learnMoreHref}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-[10px] mb-1"
					>
						<p
							className={`${textColor} ${hoverBorderColor} border-b-[1.5px] border-b-transparent text-sm font-semibold`}
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
		</TabsContent>
	);
}
