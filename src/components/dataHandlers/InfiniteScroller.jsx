import { useInfiniteQuery } from "@tanstack/react-query"
import { getPostsInfinite } from "../../api"
import PostCardFigma from "../cards/PostCardFigma"

export const InfiniteScroller = () => {
    const {
        isLoading,
        isError,
        status,
        error,
        data,
        isFetchingNextPage,
        hasNextPage,
        fetchNextPage,
    } = useInfiniteQuery({
        queryKey: ['posts', 'infinite'],
        getNextPageParam: prevData => prevData.nextPage,
        queryFn: ( {pageParam = 1} ) => getPostsInfinite(pageParam, 2),
    })

    if(isLoading) return <h1>Loading...</h1>
    // if (status === 'loading') return <h1>Loading...</h1>
    if (isError) return <pre>{JSON.stringify(error)}</pre>
    console.log(data)


    return (
        <>
            {hasNextPage && (
                <button onClick={() => fetchNextPage()}>
                    {isFetchingNextPage ? 'Loading...' : "Load More"}
                </button>
            )
            }
            {data.pages.map(page =>
            (
                <PostCardFigma key={page.id} post={page} />
            )
            )}
        </>
    )
}

export default InfiniteScroller

