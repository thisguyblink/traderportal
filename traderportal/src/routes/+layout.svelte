<script>
	import miniLogo from '$lib/assets/Titan Blockchain Logo Mini.jpg';
	import Navbar from '$lib/components/navbar.svelte';
	import { createBrowserClient, createServerClient, isBrowser } from '@supabase/ssr';
	import { PUBLIC_SUPABASE_PUBLISHABLE_KEY, PUBLIC_SUPABASE_URL } from '$env/static/public';
	import { invalidate } from '$app/navigation';
	import { onMount } from 'svelte';

	export let data;   // props from load function
	export let children; // slot content

	let session = data.session;
	let supabase = data.supabase;
	let user = data.user;

	onMount(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange((_, newSession) => {
			if (newSession?.expires_at !== session?.expires_at) {
				invalidate('supabase:auth');
			}
		});
		return () => authListener.subscription.unsubscribe();
	});
</script>

<svelte:head>
	<link rel="icon" href={miniLogo} />
</svelte:head>
<Navbar />

{@render children?.()}


}