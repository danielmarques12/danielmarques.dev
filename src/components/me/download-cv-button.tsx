export default function DownloadCVButton() {
	return (
		<div className="flex w-24 flex-col justify-end">
			<a href="resume.pdf" target="_blank">
				<div className="flex items-center gap-2 rounded-2xl border-2 border-black px-4 py-1 hover:bg-pink-200">
					<p className="mt-[2px]">CV</p>
					<img src="download.svg" alt="download my cv" />
				</div>
			</a>
		</div>
	)
}
