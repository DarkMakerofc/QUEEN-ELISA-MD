import { Agent } from 'http';

type KVObject = { [name: string]: string };

type RequestBody = null | string | Buffer | Blob | NodeJS.ReadableStream;
interface RequestOptions {
	url: string;
	method?: string;
	query?: KVObject;
	headers?: KVObject;
	body?: RequestBody;
	redirects?: number;
	agent?: Agent;
}

type ResponseBody = object | string | Buffer;
interface Response {
	status: number;
	statusText: string;
	headers: KVObject;
	url: string;
	ok: boolean;
	raw: Buffer;
	text: string;
	body: ResponseBody;
}

type StaticRequest = (url: string, options?: RequestOptions) => Request;

declare class Request extends Promise<Response> {
	public static acl: StaticRequest;
	public static bind: StaticRequest;
	public static checkout: StaticRequest;
	public static connect: StaticRequest;
	public static copy: StaticRequest;
	public static delete: StaticRequest;
	public static get: StaticRequest;
	public static head: StaticRequest;
	public static link: StaticRequest;
	public static lock: StaticRequest;
	// public static 'm-search': StaticRequest;
	public static merge: StaticRequest;
	public static mkactivity: StaticRequest;
	public static mkcalendar: StaticRequest;
	public static mkcol: StaticRequest;
	public static move: StaticRequest;
	public static notify: StaticRequest;
	public static options: StaticRequest;
	public static patch: StaticRequest;
	public static post: StaticRequest;
	public static propfind: StaticRequest;
	public static proppatch: StaticRequest;
	public static purge: StaticRequest;
	public static put: StaticRequest;
	public static rebind: StaticRequest;
	public static report: StaticRequest;
	public static search: StaticRequest;
	public static source: StaticRequest;
	public static subscribe: StaticRequest;
	public static trace: StaticRequest;
	public static unbind: StaticRequest;
	public static unlink: StaticRequest;
	public static unlock: StaticRequest;
	public static unsubscribe: StaticRequest;

	constructor(options: RequestOptions);
	public end(cb?: (err: Error, response?: ResponseBody) => void): Promise<Response>;

	public query(params: KVObject): this;
	public query(name: string, value: string): this;

	public set(headers: KVObject): this;
	public set(name: string, value: string): this;

	public attach(data: KVObject): this;
	public attach(name: string, value: string): this;

	public send(body: RequestBody, raw?: boolean): this;
	public redirects(amount: number): this;
	public agent(agent: Agent): this;

	protected _request(): Promise<Response>;
}

export = Request;
