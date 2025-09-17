<script>
    import {Plot, RuleX} from '@gka/svelteplot';
    export let tickerGraphData = [];

    // Map Kraken data to objects SveltePlot can read
    $: graphData = tickerGraphData.map(d => ({
        Date: new Date(d[0] * 1000), // convert timestamp to Date
        Open: parseFloat(d[1]),
        High: parseFloat(d[2]),
        Low: parseFloat(d[3]),
        Close: parseFloat(d[4])
    }));
</script>

<Plot title="Candlestick" grid>
    <RuleX
            data={graphData}
            x="Date"
            y1="Low"
            y2="High"
            strokeWidth="2"
            opacity="0.3" />
    <RuleX
            data={graphData}
            x="Date"
            y1="Open"
            y2="Close"
            strokeWidth="5"
            stroke={(d) => d.Close > d.Open ? 'green' : 'red'} />
</Plot>
