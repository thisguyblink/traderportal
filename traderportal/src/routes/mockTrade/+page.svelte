<script>
    import {onMount} from "svelte";
    import SymbolInfo from "$lib/components/SymbolInfo.svelte";
    import Candlestick from "$lib/components/Candlestick.svelte";
    import pairs  from "$lib/assets/kraken_pairs_USD.json";

    export let data;
    let userEmail = "default@email.com";

    const symbols = ["BTC-USD", "ETH-USD", "SOL-USD", "XRP-USD", "TRX-USD", "USDC-USD", "DOGE-USD", "BNB-USD", "USDT-USD", "CHILLGUY"];
    const krakenPairs = {"BTC-USD": "BTC%2FUSD", "ETH-USD": "XETHZUSD", "SOL-USD": "SOLUSD", "XRP-USD": "XXRPZUSD", "TRX-USD": "TRXUSD", "USDC-USD": "USDCZUSD", "DOGE-USD": "XXDGZUSD", "BNB-USD": "BNBUSD", "USDT-USD": "USDTZUSD"};

    const intervals = ["1", "5", "15", "30", "60", "240", "1440"]; // minutes
    const lengths = ["1h", "2h", "4h", "12h", "1d", "3d", "7d", "30d"];

    let orderSymbol = "BTC-USD";
    let krakenSymbol = "BTC%2FUSD";
    let interval = "15";
    let length = "7d";

    export let tickerData;
    export let tickerGraphData;
    let loading;
    let error;

    $: krakenSymbol = krakenPairs[orderSymbol];

    onMount(async () => {
        let session = data.session;
        if (session) {
            console.log("User is logged in:", session.user.email);
            userEmail = session.user.email;
        } else {
            console.log("Not logged in");
        }
    });

    async function getTickerData(krakenSymbol) {
        loading = true;
        error = null;
        try {
            const res = await fetch(`/api/kraken/info/${krakenSymbol}`);
            const json = await res.json();
            if (json.error) throw new Error(json.error.join ? json.error.join(", ") : json.error);
            tickerData = json.ticker;
        } catch (e) {
            error = e.message;
        } finally {
            loading = false;
        }
    }

    async function getTickerGraphData(krakenSymbol, interval, length) {
        loading = true;
        error = null;
        try {
            const res = await fetch(`/api/kraken/graph/${krakenSymbol}/${interval}/${length}`);
            const json = await res.json();
            if (json.error) throw new Error(json.error.join ? json.error.join(", ") : json.error);
            tickerGraphData = json.ticker;
        } catch (e) {
            error = e.message;
        } finally {
            loading = false;
        }
    }

    // reactive reload when krakenSymbol changes
    $: if (krakenSymbol) {
        (async () => {
            await getTickerData(krakenSymbol);
        })();
    }

    // reload graph when symbol, interval, or length changes
    $: if (krakenSymbol && interval && length) {
        (async () => {
            await getTickerGraphData(krakenSymbol, interval, length);
        })();
    }


    function selectSymbol(symbol) {
        orderSymbol = symbol;
    }

    function selectInterval(i) {
        interval = i;
        console.log("Interval:", interval);
    }

    function selectLength(l) {
        length = l;
        console.log("Length:", length);
    }
</script>

<div class="main">
    <div class="tokenList">
        {#each symbols as symbol}
            <button class="tokenOption" on:click={() => selectSymbol(symbol)}>{symbol}</button>
        {/each}
    </div>
    <div class="centerView">
        <div id="symbolGraph">
            <Candlestick {tickerGraphData}></Candlestick>
        </div>
        <div id="tradeOrder">
            <form>
                <p>Trade form goes here</p>
            </form>
        </div>
    </div>
    <div class="rightView">
        <div class="controls">
            <div class="interval">
                <p>Interval:</p>
                {#each intervals as i}
                    <button class:active={i===interval} on:click={() => selectInterval(i)}>{i}m</button>
                {/each}
            </div>
            <div class="length">
                <p>Length:</p>
                {#each lengths as l}
                    <button class:active={l===length} on:click={() => selectLength(l)}>{l}</button>
                {/each}
            </div>
        </div>
        <SymbolInfo {tickerData} {orderSymbol}/>
    </div>
</div>

<style>
    .main {
        display: flex;
        flex-direction: row;
        padding-top: 2rem;
    }
    .tokenList {
        width: 20%;
        display: flex;
        flex-direction: column;
    }
    .tokenOption {
        margin-left: 2rem;
        margin-top: 0.5rem;
        padding: 0.5rem;
    }
    .centerView {
        width: 50%;
        border: 2px solid black;
        display: flex;
        flex-direction: column;
    }
    .rightView {
        width: 30%;
        border: 2px solid red;
    }
    .controls {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }
    .interval button,
    .length button {
        margin-right: 0.5rem;
        padding: 0.3rem 0.6rem;
    }
    .active {
        background-color: #007bff;
        color: white;
        border-radius: 3px;
    }
</style>
