/// <reference types="node" />
import type { proto } from '../../WAProto';
import type { Contact } from './Contact';
import type { MinimalMessage } from './Message';
export declare type KeyPair = {
    public: Uint8Array;
    private: Uint8Array;
};
export declare type SignedKeyPair = {
    keyPair: KeyPair;
    signature: Uint8Array;
    keyId: number;
};
export declare type ProtocolAddress = {
    name: string;
    deviceId: number;
};
export declare type SignalIdentity = {
    identifier: ProtocolAddress;
    identifierKey: Uint8Array;
};
export declare type LTHashState = {
    version: number;
    hash: Buffer;
    indexValueMap: {
        [indexMacBase64: string]: {
            valueMac: Uint8Array | Buffer;
        };
    };
};
export declare type SignalCreds = {
    readonly signedIdentityKey: KeyPair;
    readonly signedPreKey: SignedKeyPair;
    readonly registrationId: number;
};
export declare type AccountSettings = {
    /** unarchive chats when a new message is received */
    unarchiveChats: boolean;
    /** the default mode to start new conversations with */
    defaultDisappearingMode?: Pick<proto.IConversation, 'ephemeralExpiration' | 'ephemeralSettingTimestamp'>;
};
export declare type AuthenticationCreds = SignalCreds & {
    readonly noiseKey: KeyPair;
    readonly advSecretKey: string;
    me?: Contact;
    account?: proto.IADVSignedDeviceIdentity;
    signalIdentities?: SignalIdentity[];
    myAppStateKeyId?: string;
    firstUnuploadedPreKeyId: number;
    nextPreKeyId: number;
    lastAccountSyncTimestamp?: number;
    platform?: string;
    processedHistoryMessages: MinimalMessage[];
    /** number of times history & app state has been synced */
    accountSyncCounter: number;
    accountSettings: AccountSettings;
};
export declare type SignalDataTypeMap = {
    'pre-key': KeyPair;
    'session': any;
    'sender-key': any;
    'sender-key-memory': {
        [jid: string]: boolean;
    };
    'app-state-sync-key': proto.Message.IAppStateSyncKeyData;
    'app-state-sync-version': LTHashState;
};
export declare type SignalDataSet = {
    [T in keyof SignalDataTypeMap]?: {
        [id: string]: SignalDataTypeMap[T] | null;
    };
};
declare type Awaitable<T> = T | Promise<T>;
export declare type SignalKeyStore = {
    get<T extends keyof SignalDataTypeMap>(type: T, ids: string[]): Awaitable<{
        [id: string]: SignalDataTypeMap[T];
    }>;
    set(data: SignalDataSet): Awaitable<void>;
    /** clear all the data in the store */
    clear?(): Awaitable<void>;
};
export declare type SignalKeyStoreWithTransaction = SignalKeyStore & {
    isInTransaction: () => boolean;
    transaction(exec: () => Promise<void>): Promise<void>;
};
export declare type TransactionCapabilityOptions = {
    maxCommitRetries: number;
    delayBetweenTriesMs: number;
};
export declare type SignalAuthState = {
    creds: SignalCreds;
    keys: SignalKeyStore;
};
export declare type AuthenticationState = {
    creds: AuthenticationCreds;
    keys: SignalKeyStore;
};
export {};
