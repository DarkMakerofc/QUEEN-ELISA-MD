export interface AlQuran {
    number: number;
    ayatCount: number;
    sequence: number;
    asma: {
        ar: {
            short: string;
            long: string;
        };
        en: {
            short: string;
            long: string;
        };
        id: {
            short: string;
            long: string;
        };
        translation: {
            en: string;
            id: string;
        };
    };
    preBismillah?: boolean;
    type: {
        ar: string;
        id: string;
        en: string;
    };
    tafsir: {
        id: string;
        en?: string;
    };
    recitation: {
        full: string;
    };
    ayahs: {
        number: {
            inquran: number;
            insurah: number;
        };
        juz: number;
        manzil: number;
        page: number;
        ruku: number;
        hizbQuarter: number;
        sajda: {
            recommended: boolean;
            obligatory: boolean;
        };
        text: {
            ar: string;
            read: string;
        };
        translation: {
            en: string;
            id: string;
        };
        tafsir: {
            id: string;
            en?: string;
        };
        audio: {
            url: string;
        };
    }[];
}
export interface AsmaulHusna {
    index: number;
    latin: string;
    arabic: string;
    translation_id: string;
    translation_en: string;
}
export interface JadwalSholatItem {
    value: string;
    kota: string;
}
export interface JadwalSholat {
    date: string;
    today: {
        [Key: string]: string;
    };
    list: {
        date: string;
        imsyak: string;
        shubuh: string;
        terbit: string;
        dhuha: string;
        dzuhur: string;
        ashr: string;
        magrib: string;
        isyak: string;
    }[];
}
//# sourceMappingURL=types.d.ts.map