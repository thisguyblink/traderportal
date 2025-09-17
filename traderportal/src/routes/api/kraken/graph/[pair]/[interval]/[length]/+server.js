export async function GET({ params }) {
    const { pair, interval, length } = params;

    const now = Math.floor(Date.now() / 1000); // current time in seconds
    let secondsAgo = 0;
    const value = parseInt(length.slice(0, -1), 10);
    let unit = length[length.length - 1];
    if (unit === 'h') {
        secondsAgo = value * 3600; // hours → seconds
    } else if (unit === 'd') {
        secondsAgo = value * 24 * 3600; // days → seconds
    }
    let startTime = now - secondsAgo;

    try {
        const res = await fetch(`https://api.kraken.com/0/public/OHLC?pair=${pair}&interval=${interval}&since=${startTime}`);
        const data = await res.json();

        if (data.error.length > 0) {
            return new Response(JSON.stringify({ error: data.error }), { status: 400 });
        }

        const resultKey = Object.keys(data.result)[0];
        return new Response(JSON.stringify({ ticker: data.result[resultKey] }));
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}