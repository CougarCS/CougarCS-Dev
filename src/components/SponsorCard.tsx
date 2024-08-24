type SponsorCardProps = {
	name: string;
	logoPath: string;
	donationAmount?: number;
	cardHeight: string;
	cardWidth: string;
	logoHeight: number;
	logoWidth: number;
};

export default function SponsorCard({
	cardHeight,
	logoPath,
	name,
	cardWidth,
	logoHeight,
	logoWidth,
}: SponsorCardProps) {
	return (
		<div
			className={`flex items-center justify-center ${cardHeight} ${cardWidth} rounded-lg shadow-md border border-cardBorder
			`}
		>
			<img src={logoPath} alt={name} height={logoHeight} width={logoWidth} />
		</div>
	);
}
