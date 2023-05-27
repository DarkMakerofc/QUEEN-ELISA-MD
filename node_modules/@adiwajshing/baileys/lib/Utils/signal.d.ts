/// <reference types="node" />
import { proto } from '../../WAProto';
import { AuthenticationCreds, AuthenticationState, KeyPair, SignalAuthState, SignalIdentity, SignalKeyStore, SignedKeyPair } from '../Types/Auth';
import { BinaryNode, JidWithDevice } from '../WABinary';
export declare const jidToSignalProtocolAddress: (jid: string) => any;
export declare const jidToSignalSenderKeyName: (group: string, user: string) => string;
export declare const createSignalIdentity: (wid: string, accountSignatureKey: Uint8Array) => SignalIdentity;
export declare const getPreKeys: ({ get }: SignalKeyStore, min: number, limit: number) => Promise<{
    [id: string]: KeyPair;
}>;
export declare const generateOrGetPreKeys: (creds: AuthenticationCreds, range: number) => {
    newPreKeys: {
        [id: number]: KeyPair;
    };
    lastPreKeyId: number;
    preKeysRange: readonly [number, number];
};
export declare const xmppSignedPreKey: (key: SignedKeyPair) => BinaryNode;
export declare const xmppPreKey: (pair: KeyPair, id: number) => BinaryNode;
export declare const signalStorage: ({ creds, keys }: SignalAuthState) => {
    loadSession: (id: string) => Promise<any>;
    storeSession: (id: any, session: any) => Promise<void>;
    isTrustedIdentity: () => boolean;
    loadPreKey: (id: number | string) => Promise<{
        privKey: Buffer;
        pubKey: Buffer;
    } | undefined>;
    removePreKey: (id: number) => void | Promise<void>;
    loadSignedPreKey: () => {
        privKey: Buffer;
        pubKey: Buffer;
    };
    loadSenderKey: (keyId: string) => Promise<any>;
    storeSenderKey: (keyId: any, key: any) => Promise<void>;
    getOurRegistrationId: () => number;
    getOurIdentity: () => {
        privKey: Buffer;
        pubKey: Buffer | Uint8Array;
    };
};
export declare const decryptGroupSignalProto: (group: string, user: string, msg: Buffer | Uint8Array, auth: SignalAuthState) => any;
export declare const processSenderKeyMessage: (authorJid: string, item: proto.Message.ISenderKeyDistributionMessage, auth: SignalAuthState) => Promise<void>;
export declare const decryptSignalProto: (user: string, type: 'pkmsg' | 'msg', msg: Buffer | Uint8Array, auth: SignalAuthState) => Promise<Buffer>;
export declare const encryptSignalProto: (user: string, buffer: Buffer, auth: SignalAuthState) => Promise<{
    type: string;
    ciphertext: Buffer;
}>;
export declare const encryptSenderKeyMsgSignalProto: (group: string, data: Uint8Array | Buffer, meId: string, auth: SignalAuthState) => Promise<{
    ciphertext: Uint8Array;
    senderKeyDistributionMessageKey: Buffer;
}>;
export declare const parseAndInjectE2ESessions: (node: BinaryNode, auth: SignalAuthState) => Promise<void>;
export declare const extractDeviceJids: (result: BinaryNode, myJid: string, excludeZeroDevices: boolean) => JidWithDevice[];
/**
 * get the next N keys for upload or processing
 * @param count number of pre-keys to get or generate
 */
export declare const getNextPreKeys: ({ creds, keys }: AuthenticationState, count: number) => Promise<{
    update: Partial<AuthenticationCreds>;
    preKeys: {
        [id: string]: KeyPair;
    };
}>;
export declare const getNextPreKeysNode: (state: AuthenticationState, count: number) => Promise<{
    update: Partial<AuthenticationCreds>;
    node: BinaryNode;
}>;
