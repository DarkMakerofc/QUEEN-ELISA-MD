import type { MinecraftJava } from './types';
interface Options {
    timeout: number;
}
export declare function statusBedrock(ip: string, port: number, opts?: Options): Promise<void>;
export declare function statusJava(ip: string, port?: number, opts?: Options): Promise<MinecraftJava>;
export {};
//# sourceMappingURL=minecraft.d.ts.map