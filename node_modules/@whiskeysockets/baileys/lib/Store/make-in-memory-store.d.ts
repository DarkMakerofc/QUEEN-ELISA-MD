import type KeyedDB from '@adiwajshing/keyed-db';
import type { Comparable } from '@adiwajshing/keyed-db/lib/Types';
import type { Logger } from 'pino';
import { proto } from '../../WAProto';
import type makeMDSocket from '../Socket';
import type { BaileysEventEmitter, Chat, ConnectionState, Contact, GroupMetadata, PresenceData, WAMessage, WAMessageCursor, WAMessageKey } from '../Types';
declare type WASocket = ReturnType<typeof makeMDSocket>;
export declare const waChatKey: (pin: boolean) => {
    key: (c: Chat) => string;
    compare: (k1: string, k2: string) => number;
};
export declare const waMessageID: (m: WAMessage) => string;
export declare type BaileysInMemoryStoreConfig = {
    chatKey?: Comparable<Chat, string>;
    logger?: Logger;
};
declare const _default: ({ logger: _logger, chatKey }: BaileysInMemoryStoreConfig) => {
    chats: KeyedDB<Chat, string>;
    contacts: {
        [_: string]: Contact;
    };
    messages: {
        [_: string]: {
            array: proto.IWebMessageInfo[];
            get: (id: string) => proto.IWebMessageInfo | undefined;
            upsert: (item: proto.IWebMessageInfo, mode: "append" | "prepend") => void;
            update: (item: proto.IWebMessageInfo) => boolean;
            remove: (item: proto.IWebMessageInfo) => boolean;
            updateAssign: (id: string, update: Partial<proto.IWebMessageInfo>) => boolean;
            clear: () => void;
            filter: (contain: (item: proto.IWebMessageInfo) => boolean) => void;
            toJSON: () => proto.IWebMessageInfo[];
            fromJSON: (newItems: proto.IWebMessageInfo[]) => void;
        };
    };
    groupMetadata: {
        [_: string]: GroupMetadata;
    };
    state: ConnectionState;
    presences: {
        [id: string]: {
            [participant: string]: PresenceData;
        };
    };
    bind: (ev: BaileysEventEmitter) => void;
    /** loads messages from the store, if not found -- uses the legacy connection */
    loadMessages: (jid: string, count: number, cursor: WAMessageCursor) => Promise<proto.IWebMessageInfo[]>;
    loadMessage: (jid: string, id: string) => Promise<proto.IWebMessageInfo | undefined>;
    mostRecentMessage: (jid: string) => Promise<proto.IWebMessageInfo>;
    fetchImageUrl: (jid: string, sock: WASocket | undefined) => Promise<string | null | undefined>;
    fetchGroupMetadata: (jid: string, sock: WASocket | undefined) => Promise<GroupMetadata>;
    fetchMessageReceipts: ({ remoteJid, id }: WAMessageKey) => Promise<proto.IUserReceipt[] | null | undefined>;
    toJSON: () => {
        chats: KeyedDB<Chat, string>;
        contacts: {
            [_: string]: Contact;
        };
        messages: {
            [_: string]: {
                array: proto.IWebMessageInfo[];
                get: (id: string) => proto.IWebMessageInfo | undefined;
                upsert: (item: proto.IWebMessageInfo, mode: "append" | "prepend") => void;
                update: (item: proto.IWebMessageInfo) => boolean;
                remove: (item: proto.IWebMessageInfo) => boolean;
                updateAssign: (id: string, update: Partial<proto.IWebMessageInfo>) => boolean;
                clear: () => void;
                filter: (contain: (item: proto.IWebMessageInfo) => boolean) => void;
                toJSON: () => proto.IWebMessageInfo[];
                fromJSON: (newItems: proto.IWebMessageInfo[]) => void;
            };
        };
    };
    fromJSON: (json: {
        chats: Chat[];
        contacts: {
            [id: string]: Contact;
        };
        messages: {
            [id: string]: proto.IWebMessageInfo[];
        };
    }) => void;
    writeToFile: (path: string) => void;
    readFromFile: (path: string) => void;
};
export default _default;
