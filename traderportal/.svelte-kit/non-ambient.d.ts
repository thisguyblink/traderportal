
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/account" | "/api" | "/api/kraken" | "/api/kraken/graph" | "/api/kraken/graph/[pair]" | "/api/kraken/graph/[pair]/[interval]" | "/api/kraken/graph/[pair]/[interval]/[length]" | "/api/kraken/info" | "/api/kraken/info/[pair]" | "/history" | "/login" | "/mockLogin" | "/mockTrade" | "/trade";
		RouteParams(): {
			"/api/kraken/graph/[pair]": { pair: string };
			"/api/kraken/graph/[pair]/[interval]": { pair: string; interval: string };
			"/api/kraken/graph/[pair]/[interval]/[length]": { pair: string; interval: string; length: string };
			"/api/kraken/info/[pair]": { pair: string }
		};
		LayoutParams(): {
			"/": { pair?: string; interval?: string; length?: string };
			"/account": Record<string, never>;
			"/api": { pair?: string; interval?: string; length?: string };
			"/api/kraken": { pair?: string; interval?: string; length?: string };
			"/api/kraken/graph": { pair?: string; interval?: string; length?: string };
			"/api/kraken/graph/[pair]": { pair: string; interval?: string; length?: string };
			"/api/kraken/graph/[pair]/[interval]": { pair: string; interval: string; length?: string };
			"/api/kraken/graph/[pair]/[interval]/[length]": { pair: string; interval: string; length: string };
			"/api/kraken/info": { pair?: string };
			"/api/kraken/info/[pair]": { pair: string };
			"/history": Record<string, never>;
			"/login": Record<string, never>;
			"/mockLogin": Record<string, never>;
			"/mockTrade": Record<string, never>;
			"/trade": Record<string, never>
		};
		Pathname(): "/" | "/account" | "/account/" | "/api" | "/api/" | "/api/kraken" | "/api/kraken/" | "/api/kraken/graph" | "/api/kraken/graph/" | `/api/kraken/graph/${string}` & {} | `/api/kraken/graph/${string}/` & {} | `/api/kraken/graph/${string}/${string}` & {} | `/api/kraken/graph/${string}/${string}/` & {} | `/api/kraken/graph/${string}/${string}/${string}` & {} | `/api/kraken/graph/${string}/${string}/${string}/` & {} | "/api/kraken/info" | "/api/kraken/info/" | `/api/kraken/info/${string}` & {} | `/api/kraken/info/${string}/` & {} | "/history" | "/history/" | "/login" | "/login/" | "/mockLogin" | "/mockLogin/" | "/mockTrade" | "/mockTrade/" | "/trade" | "/trade/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/robots.txt" | string & {};
	}
}