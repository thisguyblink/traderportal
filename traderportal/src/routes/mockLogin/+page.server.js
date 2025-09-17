import { fail, redirect } from '@sveltejs/kit';
import { createServerClient } from '@supabase/ssr';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public';

export const actions = {
    mockLogin: async ({ request, fetch, cookies }) => {
        const formData = await request.formData();
        const email = formData.get('email');
        const password = formData.get('password');

        // Create a Supabase server client with cookies
        const supabase = createServerClient(
            PUBLIC_SUPABASE_URL,
            PUBLIC_SUPABASE_PUBLISHABLE_KEY,
            {
                global: { fetch },
                cookies: {
                    getAll: () => cookies.getAll(),
                    setAll: (cookiesToSet) =>
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookies.set(name, value, { ...options, path: '/' })
                        )
                }
            }
        );

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            console.error(error);
            return fail(400, { error: error.message });
        }

        if (!data.session) {
            console.error('No session returned from Supabase');
            return fail(400, { error: 'Login failed' });
        }

        throw redirect(303, '/mockTrade');
    }
};
