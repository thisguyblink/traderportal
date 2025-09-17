<script>
    import {onMount} from "svelte";

    export let data;
    let userEmail = "default@email.com";

    onMount(async () => {
        let session = data.session;
        if (session !== undefined) {
            console.log("User is logged in:", session.user.email);
            userEmail = data.session.user.email;
        } else {
            console.log("Not logged in");
            console.log(session);
        }
    })
    function selectSymbol(symbol) {
        orderSymbol = symbol;
    }

    let orderSymbol = "BTC-USD";
    let symbols = ["BTC-USD", "ETH-USD", "SOL-USD", "XRP-USD", "TRX-USD", "USDC-USD", "DOGE-USD", "BNB-USD", "USDT-USD", "CHILLGUY"];

</script>
<div class="main">
    <div class="tokenList">
        {#each symbols as symbol}
            <button class="tokenOption" on:click={() => selectSymbol(symbol)}>{symbol}</button>
        {/each}
    </div>
    <div class="centerView">
        <div id="coinGraph">
            <p>graph goes here</p>
        </div>
        <div id="tradeOrder">
            <p>{orderSymbol}</p>
        </div>
        <p>{userEmail}</p>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: row;
    }
    .tokenList {
        width: 20%;
        display: flex;
        flex-direction: column;
        justify-content: right;
    }
    .tokenOption {
        margin-left: 2rem;
        margin-top: 0.5rem;
        padding: 0.5rem;
    }
    .centerView {
        width: 50%;
    }
</style>
