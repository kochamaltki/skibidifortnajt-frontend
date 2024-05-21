import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        query: params.query
    }
}

export interface SearchPageData {
    username: string
}
