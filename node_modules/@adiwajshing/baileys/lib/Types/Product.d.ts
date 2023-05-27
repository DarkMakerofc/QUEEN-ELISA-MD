import { WAMediaUpload } from './Message';
export declare type CatalogResult = {
    data: {
        paging: {
            cursors: {
                before: string;
                after: string;
            };
        };
        data: any[];
    };
};
export declare type ProductCreateResult = {
    data: {
        product: any;
    };
};
export declare type CatalogStatus = {
    status: string;
    canAppeal: boolean;
};
export declare type CatalogCollection = {
    id: string;
    name: string;
    products: Product[];
    status: CatalogStatus;
};
export declare type ProductAvailability = 'in stock';
export declare type ProductBase = {
    name: string;
    retailerId?: string;
    url?: string;
    description: string;
    price: number;
    currency: string;
    isHidden?: boolean;
};
export declare type ProductCreate = ProductBase & {
    /** ISO country code for product origin. Set to undefined for no country */
    originCountryCode: string | undefined;
    /** images of the product */
    images: WAMediaUpload[];
};
export declare type ProductUpdate = Omit<ProductCreate, 'originCountryCode'>;
export declare type Product = ProductBase & {
    id: string;
    imageUrls: {
        [_: string]: string;
    };
    reviewStatus: {
        [_: string]: string;
    };
    availability: ProductAvailability;
};
export declare type OrderPrice = {
    currency: string;
    total: number;
};
export declare type OrderProduct = {
    id: string;
    imageUrl: string;
    name: string;
    quantity: number;
    currency: string;
    price: number;
};
export declare type OrderDetails = {
    price: OrderPrice;
    products: OrderProduct[];
};
export declare type CatalogCursor = string;
export declare type GetCatalogOptions = {
    /** cursor to start from */
    cursor?: CatalogCursor;
    /** number of products to fetch */
    limit?: number;
    jid?: string;
};
