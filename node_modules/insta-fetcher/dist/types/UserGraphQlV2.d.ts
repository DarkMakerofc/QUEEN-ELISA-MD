import { PageInfo, PurpleNode } from ".";
export interface UserGraphQLV2 {
    seo_category_infos: Array<string[]>;
    logging_page_id: string;
    show_suggested_profiles: boolean;
    show_follow_dialog: boolean;
    graphql: Graphql;
    toast_content_on_load: null;
    show_view_shop: boolean;
    profile_pic_edit_sync_props: ProfilePicEditSyncProps;
    always_show_message_button_to_pro_account: boolean;
}
export interface Graphql {
    user: GraphqlUser;
}
export interface GraphqlUser {
    biography: string;
    blocked_by_viewer: boolean;
    restricted_by_viewer: boolean;
    country_block: boolean;
    external_url: null;
    external_url_linkshimmed: null;
    edge_followed_by: EdgeFollowClass;
    fbid: string;
    followed_by_viewer: boolean;
    edge_follow: EdgeFollowClass;
    follows_viewer: boolean;
    full_name: string;
    has_ar_effects: boolean;
    has_clips: boolean;
    has_guides: boolean;
    has_channel: boolean;
    has_blocked_viewer: boolean;
    highlight_reel_count: number;
    has_requested_viewer: boolean;
    hide_like_and_view_counts: boolean;
    id: string;
    is_business_account: boolean;
    is_professional_account: boolean;
    is_embeds_disabled: boolean;
    is_joined_recently: boolean;
    business_address_json: null;
    business_contact_method: string;
    business_email: null;
    business_phone_number: null;
    business_category_name: null;
    overall_category_name: null;
    category_enum: null;
    category_name: null;
    is_private: boolean;
    is_verified: boolean;
    edge_mutual_followed_by: EdgeMutualFollowedBy;
    profile_pic_url: string;
    profile_pic_url_hd: string;
    requested_by_viewer: boolean;
    should_show_category: boolean;
    should_show_public_contacts: boolean;
    state_controlled_media_country: null;
    username: string;
    connected_fb_page: null;
    pronouns: any[];
    edge_felix_video_timeline: EdgeFelixVideoTimelineClass;
    edge_owner_to_timeline_media: EdgeFelixVideoTimelineClass;
    edge_saved_media: EdgeFelixVideoTimelineClass;
    edge_media_collections: EdgeFelixVideoTimelineClass;
}
export interface EdgeFelixVideoTimelineClass {
    count: number;
    page_info: PageInfo;
    edges: EdgeFelixVideoTimelineEdge[];
}
export interface EdgeFelixVideoTimelineEdge {
    node: PurpleNode;
}
export interface ClipsMusicAttributionInfo {
    artist_name: string;
    song_name: string;
    uses_original_audio: boolean;
    should_mute_audio: boolean;
    should_mute_audio_reason: string;
    audio_id: string;
}
export interface EdgeFollowClass {
    count: number;
}
export interface EdgeMutualFollowedBy {
    count: number;
    edges: EdgeMutualFollowedByEdge[];
}
export interface EdgeMutualFollowedByEdge {
    node: IndigoNode;
}
export interface IndigoNode {
    username: string;
}
export interface ProfilePicEditSyncProps {
    show_change_profile_pic_confirm_dialog: boolean;
    show_profile_pic_sync_reminders: boolean;
    identity_id: string;
    remove_profile_pic_header: null;
    remove_profile_pic_subtext: null;
    remove_profile_pic_confirm_cta: null;
    remove_profile_pic_cancel_cta: null;
    is_business_central_identity: boolean;
    change_profile_pic_actions_screen_header: string[];
    change_profile_pic_actions_screen_subheader: null;
    change_profile_pic_actions_screen_upload_cta: string[];
    change_profile_pic_actions_screen_remove_cta: string[];
    change_profile_pic_actions_screen_cancel_cta: string[];
    change_profile_pic_header: null;
    change_profile_pic_subtext: null;
}
