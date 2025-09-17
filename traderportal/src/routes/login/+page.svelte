<script>

</script>

<body>
    <form action="?/login" method="POST" class="login-stack">
        <h1 class="title"> Login </h1>
        <input class="inputBox" type="text" placeholder="Email" name="email">
        <input class="inputBox" type="password" placeholder="Password" name="password">
        <button type="submit" >Login</button>
    </form>
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