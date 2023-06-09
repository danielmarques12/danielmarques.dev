import Cal from '@calcom/embed-react'

export default function CalCom() {
	return (
		<section id='book-call'
			aria-label="book a call with me on cal.com"
			className="flex snap-start items-center justify-center md:h-screen"
		>
			<div className="mb-16 mt-16 flex flex-col gap-6 md:mb-24 md:mt-24 md:w-full">
				<p className="text-2xl">Let's chat. Book a call!</p>
				<Cal
					title="Book a call with me on cal.com"
					calLink="danielmarques"
					config={{
						theme: 'light'
					}}
				/>
			</div>
		</section>
	)
}
