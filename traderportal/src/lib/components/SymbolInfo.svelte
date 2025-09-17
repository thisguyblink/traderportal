<script>
    export let tickerData;
    export let orderSymbol;
</script>

{#if tickerData}
    <div class="tickerData">
        <h2>{orderSymbol}</h2>
        <ul>
            <li><strong>Ask:</strong> {tickerData.a[0]} (volume {tickerData.a[2]})</li>
            <li><strong>Bid:</strong> {tickerData.b[0]} (volume {tickerData.b[2]})</li>
            <li><strong>Last trade:</strong> {tickerData.c[0]} ({tickerData.c[1]} lots)</li>
            <li><strong>Volume:</strong> Today {tickerData.v[0]}, 24h {tickerData.v[1]}</li>
            <li><strong>VWAP:</strong> Today {tickerData.p[0]}, 24h {tickerData.p[1]}</li>
            <li><strong>Trades:</strong> Today {tickerData.t[0]}, 24h {tickerData.t[1]}</li>
            <li><strong>Low:</strong> Today {tickerData.l[0]}, 24h {tickerData.l[1]}</li>
            <li><strong>High:</strong> Today {tickerData.h[0]}, 24h {tickerData.h[1]}</li>
            <li><strong>Opening price:</strong> {tickerData.o}</li>
        </ul>
    </div>
{:else}
    <p>Loading tickerData for {orderSymbol}...</p>
    <p></p>
{/if}

<style>
    .tickerData {
        padding: 1rem;
        border: 1px solid #ddd;
        border-radius: 0.5rem;
        max-width: 400px;
        font-family: sans-serif;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    li {
        margin: 0.3rem 0;
    }
</style>
