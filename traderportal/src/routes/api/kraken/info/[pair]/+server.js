export async function GET({ params }) {
    const { pair } = params;

    try {
        const res = await fetch(`https://api.kraken.com/0/public/Ticker?pair=${pair}`);
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