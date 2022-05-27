export default interface Page<T> {
    Page: {
        media: T[];
        pageInfo: {
            currentPage: number;
            hasNextPage: true;
            lastPage: number;
            perPage: number;
            total: number;
        };
    };
}
