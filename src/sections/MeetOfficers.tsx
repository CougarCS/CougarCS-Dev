export default function MeetOfficers() {
	return (
		<div className="bg-[url('background/meetofficers.svg')] h-[300px] w-full">
			<div className="flex flex-col items-center px-4 pt-16">
				<h1 className="font-semibold text-2xl text-center text-white px-6">
					Meet the officers that make up CougarCS
				</h1>

				<button className="flex items-center justify-center text-csred bg-white rounded-lg px-4 py-2 mt-4 w-[220px] h-[51px]">
					<span className="text-csred font-medium">Check out the team</span>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 7.9313V16.0686C9 16.6744 9 16.9773 9.1198 17.1175C9.22374 17.2393 9.37967 17.3038 9.53923 17.2913C9.72312 17.2768 9.93731 17.0626 10.3657 16.6342L14.4343 12.5656C14.6323 12.3676 14.7313 12.2686 14.7684 12.1544C14.8011 12.054 14.8011 11.9458 14.7684 11.8454C14.7313 11.7313 14.6323 11.6323 14.4343 11.4342L10.3657 7.36561C9.93731 6.93724 9.72312 6.72305 9.53923 6.70858C9.37967 6.69602 9.22374 6.76061 9.1198 6.88231C9 7.02257 9 7.32548 9 7.9313Z"
							fill="#C80F2E"
							stroke="#C80F2E"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
}
