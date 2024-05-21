import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    return {
        username: params.username
    }
}

export interface UserPageData {
    username: string
}
