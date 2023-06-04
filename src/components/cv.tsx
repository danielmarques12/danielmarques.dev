export const CV = () => {
	return (
		<div class="flex w-24 flex-col justify-end">
			<a href="resume.pdf" download="Daniel Marques - Resume.pdf">
				<div class="flex items-center gap-2 rounded-2xl border-2 border-black px-4 py-1 hover:bg-pink-300">
					<p class="mt-[2px]">CV</p>
					<img src="download.svg" alt="download my cv" />
				</div>
			</a>
		</div>
	)
}
