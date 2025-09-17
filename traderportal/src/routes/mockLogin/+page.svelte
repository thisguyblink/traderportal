<script>
</script>
<body>
<div class="login-stack">
    <form action="?/mockLogin" method="POST" class="login-stack">
        <h1 class="title">Mock Login </h1>
        <label>Email
            <br>
            <input class="inputBox" type="text" placeholder="Email" name="email">
        </label>
        <label>Password
            <br>
        <input class="inputBox" type="password" placeholder="Password" name="password">
            </label>
        <button type="submit" >Login</button>
    </form>
</div>

</body>

<style>
    .login-stack {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        padding-top: 10rem;
        width : 100%;
    }
    .inputBox {
        width: 12rem;
    }
</style>