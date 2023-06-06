import Cal from '@calcom/embed-react'

export default function CalCom() {
	return (
		<section>
			<div className="mb-16 mt-16 flex flex-col items-center gap-6 md:mb-24 md:mt-24">
				<p className="text-2xl">Let's chat. Book a call!</p>
				<Cal
					title="Book a call with me on cal.com"
					className="md:w-full"
					calLink="danielmarques"
					config={{
						theme: 'light'
					}}
				/>
			</div>
		</section>
	)
}
