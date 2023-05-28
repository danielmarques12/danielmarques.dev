import { createSignal } from 'solid-js'

export const SMB = () => {
	const [isHovered, setIsHovered] = createSignal(false)

	return (
		<div>
			<button
				onMouseOver={() => setIsHovered(true)}
				onmouseleave={() => setIsHovered(false)}
				class={`relative  flex h-20 w-64 items-center justify-center gap-4 rounded-3xl border-[3px] border-b-8 border-r-4 border-black bg-white font-semibold`}
			>
				<p class="text-2xl">GitHub</p>
				<img src="github.svg" alt="logo" />
			</button>

			<div
				class={`relative top-[${
					isHovered() ? '-70px' : '-80px'
				}] z-[-1] h-20 w-64 rounded-3xl bg-pink-400`}
			/>

			<div
				class={`relative top-[-160px] z-[-2] h-20 w-64 rounded-3xl bg-black`}
			/>
		</div>
	)
}
