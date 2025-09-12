import { fail, redirect } from '@sveltejs/kit'
import { createServerClient } from '@supabase/ssr'
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY } from '$env/static/public'

export const actions = {
    login: async ({ request, fetch, cookies }) => {
        const formData = await request.formData()
        const email = formData.get('email')
        const password = formData.get('password')

        const supabase = createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY, {
            global: { fetch },
            cookies: { getAll: () => cookies.getAll() }
        })

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            console.error(error)
            return fail(400, { error: error.message })
        }

        // success → go to dashboard
        throw redirect(303, '/')
    }
}
