type SponsorCard = {
	name: string;
	logoPath: string;
	donationAmount?: number;
	cardHeight: string;
	cardWidth: string;
	logoHeight: number;
	logoWidth: number;
};

export const sponsorData: SponsorCard[] = [
	{
		name: "ConocoPhillips",
		logoPath: "logos/conocophilips.svg",
		donationAmount: 1000,
		cardHeight: "h-[150px]",
		cardWidth: "w-full",
		logoHeight: 50.25,
		logoWidth: 225,
	},
	{
		name: "LyondellBasell",
		logoPath: "logos/lyondellbasell.svg",
		donationAmount: 500,
		cardHeight: "h-[150px]",
		cardWidth: "w-full",
		logoHeight: 68.41,
		logoWidth: 202.79,
	},
	{
		name: "Pros",
		logoPath: "logos/pros.svg",
		donationAmount: 250,
		cardHeight: "h-[150px]",
		cardWidth: "w-full",
		logoHeight: 38,
		logoWidth: 124.19,
	},
	{
		name: "Chevron",
		logoPath: "logos/chevron.svg",
		donationAmount: 100,
		cardHeight: "h-[150px]",
		cardWidth: "w-full",
		logoHeight: 89.77,
		logoWidth: 80.2,
	},
	{
		name: "Google",
		logoPath: "logos/google.svg",
		donationAmount: 50,
		cardHeight: "h-[150px]",
		cardWidth: "w-full",
		logoHeight: 47,
		logoWidth: 150,
	},
	{
		name: "RedBull",
		logoPath: "logos/redbull.svg",
		donationAmount: 25,
		cardHeight: "h-[150px]",
		cardWidth: "w-full",
		logoHeight: 85.25,
		logoWidth: 140.16,
	},
];
