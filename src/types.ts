export interface LinkType {
    method: string;
    href: string;
    rel: string;
}

export interface ResponseDeferFutureType {
    links?: LinkType[];
    id?: string;
    definitionId?: string;
    businessKey?: string;
    tenantId?: string | null;
    ended?: boolean;
    suspended?: boolean;
    list: [],
}