<script setup lang="ts">
	const router = useRouter();
</script>

<template>
	<main p="x4 y10" text="center teal-700 dark:gray-200">
		<RouterView />
		<div class="text-center">
			<button class="mt-8 text-center underline" @click="router.back()">
				Back
			</button>
		</div>
	</main>
</template>
