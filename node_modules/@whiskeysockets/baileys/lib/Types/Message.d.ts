/// <reference types="node" />
import { AxiosRequestConfig } from 'axios';
import type { Logger } from 'pino';
import type { Readable } from 'stream';
import type { URL } from 'url';
import { proto } from '../../WAProto';
import { MEDIA_HKDF_KEY_MAPPING } from '../Defaults';
import type { GroupMetadata } from './GroupMetadata';
import { CacheStore } from './Socket';
export { proto as WAProto };
export declare type WAMessage = proto.IWebMessageInfo;
export declare type WAMessageContent = proto.IMessage;
export declare type WAContactMessage = proto.Message.IContactMessage;
export declare type WAContactsArrayMessage = proto.Message.IContactsArrayMessage;
export declare type WAMessageKey = proto.IMessageKey;
export declare type WATextMessage = proto.Message.IExtendedTextMessage;
export declare type WAContextInfo = proto.IContextInfo;
export declare type WALocationMessage = proto.Message.ILocationMessage;
export declare type WAGenericMediaMessage = proto.Message.IVideoMessage | proto.Message.IImageMessage | proto.Message.IAudioMessage | proto.Message.IDocumentMessage | proto.Message.IStickerMessage;
export import WAMessageStubType = proto.WebMessageInfo.StubType;
export import WAMessageStatus = proto.WebMessageInfo.Status;
export declare type WAMediaUpload = Buffer | {
    url: URL | string;
} | {
    stream: Readable;
};
/** Set of message types that are supported by the library */
export declare type MessageType = keyof proto.Message;
export declare type DownloadableMessage = {
    mediaKey?: Uint8Array | null;
    directPath?: string | null;
    url?: string | null;
};
export declare type MessageReceiptType = 'read' | 'read-self' | 'hist_sync' | 'peer_msg' | 'sender' | 'inactive' | 'played' | undefined;
export declare type MediaConnInfo = {
    auth: string;
    ttl: number;
    hosts: {
        hostname: string;
        maxContentLengthBytes: number;
    }[];
    fetchDate: Date;
};
export interface WAUrlInfo {
    'canonical-url': string;
    'matched-text': string;
    title: string;
    description?: string;
    jpegThumbnail?: Buffer;
    highQualityThumbnail?: proto.Message.IImageMessage;
    originalThumbnailUrl?: string;
}
declare type Mentionable = {
    /** list of jids that are mentioned in the accompanying text */
    mentions?: string[];
};
declare type Contextable = {
    /** add contextInfo to the message */
    contextInfo?: proto.IContextInfo
};
declare type ViewOnce = {
    viewOnce?: boolean;
};
declare type Buttonable = {
    /** add buttons to the message  */
    buttons?: proto.Message.ButtonsMessage.IButton[];
};
declare type Templatable = {
    /** add buttons to the message (conflicts with normal buttons)*/
    templateButtons?: proto.IHydratedTemplateButton[];
    footer?: string;
};
declare type Listable = {
    /** Sections of the List */
    sections?: proto.Message.ListMessage.ISection[];
    /** Title of a List Message only */
    title?: string;
    /** Text of the bnutton on the list (required) */
    buttonText?: string;
};
declare type WithDimensions = {
    width?: number;
    height?: number;
};
export declare type PollMessageOptions = {
    name: string;
    selectableCount?: number;
    values: string[];
    /** 32 byte message secret to encrypt poll selections */
    messageSecret?: Uint8Array;
};
export declare type MediaType = keyof typeof MEDIA_HKDF_KEY_MAPPING;
export declare type AnyMediaMessageContent = (({
    image: WAMediaUpload;
    caption?: string;
    jpegThumbnail?: string;
} & Contextable & Mentionable & Buttonable & Templatable & WithDimensions) | ({
    video: WAMediaUpload;
    caption?: string;
    gifPlayback?: boolean;
    jpegThumbnail?: string;
} & Contextable & Mentionable & Buttonable & Templatable & WithDimensions) | {
    audio: WAMediaUpload;
    /** if set to true, will send as a `voice note` */
    ptt?: boolean;
    /** optionally tell the duration of the audio */
    seconds?: number;
} | ({
    sticker: WAMediaUpload;
    isAnimated?: boolean;
} & WithDimensions) | ({
    document: WAMediaUpload;
    mimetype: string;
    fileName?: string;
    caption?: string;
} & Buttonable & Templatable)) & {
    mimetype?: string;
};
export declare type ButtonReplyInfo = {
    displayText: string;
    id: string;
    index: number;
};
export declare type WASendableProduct = Omit<proto.Message.ProductMessage.IProductSnapshot, 'productImage'> & {
    productImage: WAMediaUpload;
};
export declare type AnyRegularMessageContent = (({
    text: string;
    linkPreview?: WAUrlInfo | null;
} & Contextable & Mentionable & Buttonable & Templatable & Listable) | AnyMediaMessageContent | ({
    poll: PollMessageOptions;
} & Contextable & Mentionable & Buttonable & Templatable) | {
    contacts: {
        displayName?: string;
        contacts: proto.Message.IContactMessage[];
    };
} | {
    location: WALocationMessage;
} | {
    react: proto.Message.IReactionMessage;
} | {
    buttonReply: ButtonReplyInfo;
    type: 'template' | 'plain';
} | {
    listReply: Omit<proto.Message.IListResponseMessage, 'contextInfo'>;
} | {
    product: WASendableProduct;
    businessOwnerJid?: string;
    body?: string;
    footer?: string;
}) & ViewOnce;
export declare type AnyMessageContent = AnyRegularMessageContent | {
    forward: WAMessage;
    force?: boolean;
} | {
    /** Delete your message or anyone's message in a group (admin required) */
    delete: WAMessageKey;
} | {
    disappearingMessagesInChat: boolean | number;
};
export declare type GroupMetadataParticipants = Pick<GroupMetadata, 'participants'>;
declare type MinimalRelayOptions = {
    /** override the message ID with a custom provided string */
    messageId?: string;
    /** cached group metadata, use to prevent redundant requests to WA & speed up msg sending */
    cachedGroupMetadata?: (jid: string) => Promise<GroupMetadataParticipants | undefined>;
};
export declare type MessageRelayOptions = MinimalRelayOptions & {
    /** only send to a specific participant; used when a message decryption fails for a single user */
    participant?: {
        jid: string;
        count: number;
    };
    /** additional attributes to add to the WA binary node */
    additionalAttributes?: {
        [_: string]: string;
    };
    /** should we use the devices cache, or fetch afresh from the server; default assumed to be "true" */
    useUserDevicesCache?: boolean;
};
export declare type MiscMessageGenerationOptions = MinimalRelayOptions & {
    /** optional, if you want to manually set the timestamp of the message */
    timestamp?: Date;
    /** the message you want to quote */
    quoted?: WAMessage;
    /** disappearing messages settings */
    ephemeralExpiration?: number | string;
    /** timeout for media upload to WA server */
    mediaUploadTimeoutMs?: number;
};
export declare type MessageGenerationOptionsFromContent = MiscMessageGenerationOptions & {
    userJid: string;
};
export declare type WAMediaUploadFunction = (readStream: Readable, opts: {
    fileEncSha256B64: string;
    mediaType: MediaType;
    timeoutMs?: number;
}) => Promise<{
    mediaUrl: string;
    directPath: string;
}>;
export declare type MediaGenerationOptions = {
    logger?: Logger;
    mediaTypeOverride?: MediaType;
    upload: WAMediaUploadFunction;
    /** cache media so it does not have to be uploaded again */
    mediaCache?: CacheStore;
    mediaUploadTimeoutMs?: number;
    options?: AxiosRequestConfig;
};
export declare type MessageContentGenerationOptions = MediaGenerationOptions & {
    getUrlInfo?: (text: string) => Promise<WAUrlInfo | undefined>;
};
export declare type MessageGenerationOptions = MessageContentGenerationOptions & MessageGenerationOptionsFromContent;
/**
 * Type of message upsert
 * 1. notify => notify the user, this message was just received
 * 2. append => append the message to the chat history, no notification required
 */
export declare type MessageUpsertType = 'append' | 'notify';
export declare type MessageUserReceipt = proto.IUserReceipt;
export declare type WAMessageUpdate = {
    update: Partial<WAMessage>;
    key: proto.IMessageKey;
};
export declare type WAMessageCursor = {
    before: WAMessageKey | undefined;
} | {
    after: WAMessageKey | undefined;
};
export declare type MessageUserReceiptUpdate = {
    key: proto.IMessageKey;
    receipt: MessageUserReceipt;
};
export declare type MediaDecryptionKeyInfo = {
    iv: Buffer;
    cipherKey: Buffer;
    macKey?: Buffer;
};
export declare type MinimalMessage = Pick<proto.IWebMessageInfo, 'key' | 'messageTimestamp'>;
