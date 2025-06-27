<script lang="ts">
	import { onMount } from 'svelte';
	import TdClient from 'tdweb';

	const tdclient = new TdClient({
		jsLogVerbosityLevel: 'debug'
	});

	onMount(async () => {
		const res = await tdclient.send({
			'@type': 'getOption',
			name: 'version'
		});

		console.log(res);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
