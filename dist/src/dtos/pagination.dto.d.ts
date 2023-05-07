export declare abstract class PaginationReqDto {
    page?: number;
    limit?: number;
}
export declare class PaginationResDto {
    items: any[];
    meta: {
        itemCount: number;
        totalItems?: number;
        itemsPerPage: number;
        totalPages?: number;
        currentPage: number;
    };
    links?: {
        first?: string;
        previous?: string;
        next?: string;
        last?: string;
    };
}
