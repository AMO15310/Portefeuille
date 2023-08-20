<script>
	import musicPlayerImg from '../../assets/music-player.png';
	import ecomImg from '../../assets/e-commerce.png';
	import waterAppImg from '../../assets/benmax-bucket.png';
	import medinfoImg from '../../assets/medinfoplus.jpg';
	import phonebookImg from '../../assets/phonebook.png';
	import watertrackerImg from '../../assets/water-tracker-v2.png';
	import { slide } from 'svelte/transition';
</script>

<main id="projects" transition:slide>
	<div class="h-[100vh] w-[100vw] bg-blue-400 flex flex-col">
		<div class="flex justify-center text-white mt-7 text-xl font-semibold">Some Of My Projects</div>
		<div class="flex flex-wrap justify-center p-10">
			<div class="w-1/3 p-2">
				<div class="h-[14rem] bg-green-400">
					<a href="https://github.com/AMO15310/music-player-react-ts">
						<img src={musicPlayerImg} class="h-[100%] w-[100%]" alt="music" /></a
					>
				</div>
				<p class="title text-center mt-2 text-white">Music Player</p>
			</div>
			<div class="w-1/3 p-2">
				<div class="h-[14rem] bg-green-400">
					<a href="https://github.com/AMO15310/e-commerce"
						><img src={ecomImg} class="h-[100%] w-[100%]" alt="music" /></a
					>
				</div>
				<p class="title text-center mt-2 text-white">E-commerce App</p>
			</div>
			<div class="w-1/3 p-2">
				<div class="h-[14rem] bg-green-400">
					<a href="https://github.com/AMO15310/Benmax-Bucket">
						<img src={waterAppImg} class="h-[100%] w-[100%]" alt="music" /></a
					>
				</div>
				<p class="title text-center mt-2 text-white">Water Tracker v2</p>
			</div>
			<div class="w-1/3 p-2">
				<div class="h-[14rem] bg-green-400">
					<a href="https://github.com/AMO15310/MedInfoPlus"
						><img src={medinfoImg} class="h-[100%] w-[100%]" alt="music" /></a
					>
				</div>
				<p class="title text-center mt-2 text-white">Health Information Web</p>
			</div>
			<div class="w-1/3 p-2">
				<div class="h-[14rem] bg-green-400">
					<a href="https://github.com/AMO15310/react-phone-book"
						><img src={phonebookImg} class="h-[100%] w-[100%]" alt="music" /></a
					>
				</div>
				<p class="title text-center mt-2 text-white">Phonebook</p>
			</div>
			<div class="w-1/3 p-2">
				<div class="h-[14rem] bg-green-400">
					<a href="https://github.com/AMO15310/Water_tracker">
						<img src={watertrackerImg} class="h-[100%] w-[100%]" alt="music" /></a
					>
				</div>
				<p class="title text-center mt-2 text-white">Water App V1</p>
			</div>
		</div>
	</div>
</main>
