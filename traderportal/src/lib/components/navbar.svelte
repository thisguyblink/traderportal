<script>
    import logo from '../assets/Titan Blockchain Logo Mini.jpg';
    import { supabase } from "$lib/supabase.js";

    export let data;
    let userEmail = data?.session?.user?.email ?? "defaul@email.com";

    async function signOut() {
        await supabase.auth.signOut();
    }

    function handleSelect(event) {
        if (event.target.value === 'logout') {
            signOut();
            event.target.value = 'default'; // reset dropdown
        } else if (event.target.value !== 'default') {
            window.location.href = `/${event.target.value}`;
        }
    }

</script>

<div class="navbar">
    <img class="logo" src={logo} alt="Logo" />
    <a href="/" class="link"><h1>TB Trader Portal</h1></a>
    <div class="account">
        <select class="dropdown" on:change={handleSelect}>
            <option value="default">{userEmail}</option>
            <option value="trade">Trade</option>
            <option value="account">Account</option>
            <option value="history">History</option>
            <option value="logout">Log Out</option>
        </select>
    </div>
</div>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 1rem;
    }
    .logo {
        height: 50px;
        width: auto;
    }
    .link {
        text-decoration: none;
    }
    .dropdown {
        border: none;
    }
</style>
