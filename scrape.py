import json

with open("pairs.json", "r") as f:
    pairs = json.load(f)

pairs = pairs["result"]

friendly_to_api = {}
for api_key, pair_info in pairs.items():
    wsname = pair_info.get("wsname")  # e.g. "BTC/USD"
    if wsname and pair_info.get("quote") == "ZUSD":  # some pairs may not have wsname
        friendly_to_api[wsname] = api_key


# Optional: save to JSON for frontend use
with open("kraken_pairs_USD.json", "w") as f:
    json.dump(friendly_to_api, f, indent=2)

# Print a preview
for friendly, api_key in list(friendly_to_api.items())[:10]:
    print(f"{friendly} -> {api_key}")
