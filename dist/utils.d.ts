export declare const shuffle: <T = any>(array: T[]) => T[];
export declare function genRandomNumber(min: number, max: number, isDecimal?: boolean): number;
export declare function getCurrentUnixTimestamp(date?: Date): number;
export declare function genListUniqueRandomNumber(amount: number, min: number, max: number): Set<number>;
export declare const camelToSnakeCase: (str: string) => string;
export declare function isNullOrUndefined(obj: any): boolean;
export declare function syncArrayPos(originArr: object[], sortArr: object[], field?: string): void;
export declare function chunk<T = any>(input: T[], size: number): T[][];
