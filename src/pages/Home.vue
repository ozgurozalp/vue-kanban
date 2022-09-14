<template>
	<div class="flex h-full flex-col place-items-center justify-center">
		<h1 class="mb-5 text-center text-8xl">Welcome To Project</h1>
		<nav class="flex gap-10 [&>a]:text-5xl">
			<RouterLink :to="{ name: 'case-1' }" class="link">Case 1</RouterLink>
			<RouterLink :to="{ name: 'case-2' }" class="link">Case 2</RouterLink>
		</nav>
	</div>
</template>

<style>
.link {
	@apply relative block transition-all duration-300 hover:text-gray-700 hover:after:-bottom-1 hover:after:bg-gray-700;
	@apply after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:bg-black after:transition-all after:duration-300;
}
</style>
