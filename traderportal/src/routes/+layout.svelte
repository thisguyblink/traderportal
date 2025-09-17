<script>
	import miniLogo from '$lib/assets/Titan Blockchain Logo Mini.jpg';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { supabase } from '$lib/supabase.js'; // import the client

	export let data;        // layout server data
	export let children;    // page content

	let session = data.session;
	let user = supabase.auth.getUser();
	onMount(() => {
		const { data } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth')
			}
		})
		return () => data.subscription.unsubscribe()
	})
</script>

<svelte:head>
	<link rel="icon" href={miniLogo} />
</svelte:head>

<Navbar {data} />

{@render children?.({session: session, user: user })}
