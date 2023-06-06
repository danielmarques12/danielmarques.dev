import Cal from '@calcom/embed-react'

export default function CalCom() {
	return (
		<section>
			<div className="mt-24 flex flex-col items-center gap-6">
				<p className="text-2xl">Let's chat. Book a call!</p>
				<Cal
					title="Book a call with me on cal.com"
					className="w-full"
					calLink="danielmarques"
					config={{
						theme: 'light'
					}}
				/>
			</div>
		</section>
	)
}
