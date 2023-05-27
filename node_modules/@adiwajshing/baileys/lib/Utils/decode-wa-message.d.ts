import { proto } from '../../WAProto';
import { AuthenticationState } from '../Types';
import { BinaryNode } from '../WABinary';
/**
 * Decode the received node as a message.
 * @note this will only parse the message, not decrypt it
 */
export declare function decodeMessageNode(stanza: BinaryNode, meId: string): {
    fullMessage: proto.IWebMessageInfo;
    author: string;
    sender: string;
};
export declare const decryptMessageNode: (stanza: BinaryNode, auth: AuthenticationState) => {
    fullMessage: proto.IWebMessageInfo;
    category: string;
    author: string;
    decrypt(): Promise<void>;
};
