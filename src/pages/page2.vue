<script setup lang="ts">
	useHead({
		title: 'Page 2',
	});
</script>

<template>
	<div>
		<h1 class="mb-4">
			Page 2
		</h1>
		<router-link
			to="/"
			class="mt-5 hover:text-gray-200 dark:hover:text-gray-500 hover:underline"
		>
			Home
		</router-link>
	</div>
</template>

<style scoped></style>

<route lang="yaml">
name: other-page
</route>
