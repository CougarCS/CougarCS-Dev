import SponsorCard from "@/components/SponsorCard";
import { sponsorData } from "@/util/sponsors";
import { partnersData } from "@/util/partners";

export default function Affiliates() {
	return (
		<div className="flex flex-col items-center h-full px-4 pt-12 pb-11">
			<img
				src="icons/sponsors.svg"
				alt="sponsors"
				height={31}
				width={220}
				className="mb-6"
			/>

			<div className="px-8 mb-9">
				<h1 className="text-csred text-center font-bold text-2xl mb-2">
					Thank you to all of our amazing sponsors!
				</h1>
				<p className="text-cardPrimary text-sm text-center font-medium">
					Explore the companies that believe in what we do
				</p>
			</div>

			<div className="mb-7">
				<img src="tiers.svg" />
			</div>

			<div className="flex flex-col items-center justify-center w-full gap-4 mb-10">
				{sponsorData.map(
					({
						name,
						logoPath,
						cardHeight,
						cardWidth,
						logoHeight,
						logoWidth,
					}) => (
						<SponsorCard
							key={name}
							name={name}
							cardHeight={cardHeight}
							cardWidth={cardWidth}
							logoHeight={logoHeight}
							logoWidth={logoWidth}
							logoPath={logoPath}
						/>
					)
				)}
			</div>

			<div className="flex flex-col items-center h-fit">
				<div className="text-center px-5 mb-3">
					<h1 className="text-csred font-bold text-2xl mb-1">
						Meet our Partners
					</h1>
					<p className="font-medium text-sm px-5">
						Take a look at the student organizations we partner up with for some
						of our events
					</p>
				</div>

				<div className="grid grid-cols-2 gap-x-6 justify-items-center items-center self-center w-full">
					{partnersData.map(({ name, logoPath }) => (
						<div
							key={name}
							className="flex items-center justify-center w-full h-40 px-2"
						>
							<img
								src={logoPath}
								alt={`${name} logo`}
								className="object-cover"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
