export type Activity = {
	svgPath: string;
	title: string;
};

type branchesData = {
	name: string;
	value: string;
	description: string;
	learnMoreText: string;
	learnMoreHref: string;
	activities: Activity[];
};

type StringKV = {
	[key: string]: string;
};

export const branchBorderBottomMap: StringKV = {
	infosec: "border-b-infosecBg",
	tutoring: "border-b-tutoringBg",
	webdev: "border-b-webdevBg",
};

export const branchBorderBottomHoverMap: StringKV = {
	infosec: "hover:border-b-infosecBg",
	tutoring: "hover:border-b-tutoringBg",
	webdev: "hover:border-b-webdevBg",
};

export const branchTextColorMap: StringKV = {
	infosec: "text-infosecBg",
	tutoring: "text-tutoringBg",
	webdev: "text-webdevBg",
};

export const branchStrokeMap: StringKV = {
	infosec: "#00B2FF",
	tutoring: "#0BC756",
	webdev: "#7554F6",
};

export const branchesData: branchesData[] = [
	{
		name: "Information Security",
		value: "infosec",
		description:
			"Info. Sec. is a branch dedicated to equipping members with the knowledge and skills to protect themselves in the digital world.",
		learnMoreText: "Learn more about Information Security",
		learnMoreHref: "https://react.dev/reference/react-dom/components/link",
		activities: [
			{
				svgPath: "icons/infosecflag.svg",
				title: "Capture The Flag (CTF’s)",
			},
			{
				svgPath: "icons/infoseccube.svg",
				title: "Interactive Workshops",
			},
			{
				svgPath: "icons/infosecarrow.svg",
				title: "Hands-on Demos",
			},
		],
	},
	{
		name: "Tutoring",
		value: "tutoring",
		description:
			"The Tutoring branch is here to provide free peer-to-peer tutoring for all students, offering services for a wide range of courses.",
		learnMoreText: "Learn more about Tutoring",
		learnMoreHref: "",
		activities: [
			{
				svgPath: "icons/tutoringhat.svg",
				title: "In-Person & Virtual Support",
			},
			{
				svgPath: "icons/tutoringhw.svg",
				title: "Midterm & Final Reviews",
			},
			{
				svgPath: "icons/tutoringbook.svg",
				title: "Wide range of course support",
			},
		],
	},
	{
		name: "Web Dev. Committee",
		value: "webdev",
		description:
			"The Web Dev. Committee is a branch fully-focused on developing experiences to help the club out, one line of code at a time.",
		learnMoreText: "Learn more about Web Development",
		learnMoreHref: "",
		activities: [
			{
				svgPath: "icons/webdevportal.svg",
				title: "Admin Portal",
			},
			{
				svgPath: "icons/webdevmonitor.svg",
				title: "Website Revamp",
			},
			{
				svgPath: "icons/webdevbot.svg",
				title: "CougarCS Bot",
			},
		],
	},
];
