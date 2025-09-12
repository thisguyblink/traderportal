<script>
    import logo from '../assets/Titan Blockchain Logo Mini.jpg';
    let accountName = "Admin Account";
</script>

<div class="navbar">
    <img class="logo" src={logo} alt="Logo Mini Logo" />
    <a href="/" class="link">
        <h1>TB Trader Portal</h1>
    </a>
    <div class="account">
        <select class="dropdown">
            <option value="default">{accountName}</option>
            <option value="account">Account</option>
            <option value="history">History</option>
            <option value="logOut">Log Out</option>
        </select>
            <img class="logo" src={logo} alt="Logo Mini Logo" />
        </div>
</div>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        max-height: 1.5rem;
        padding: 1rem;
    }
    .logo {
        height: 50px;   /* shrink to fit */
        width: auto;    /* keep proportions */
    }
    .link {
        text-decoration: none;
    }
    .dropdown {
        border: none;
    }
</style>