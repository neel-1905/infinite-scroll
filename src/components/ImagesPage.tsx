import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchAllImages } from "../lib/fetchImages";
import Container from "./Container";

const ImagesPage = () => {
  const {
    data,
    status,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["photos"],
    queryFn: fetchAllImages,
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage?.nextPage,
  });

  return (
    <Container>
      {status === "pending" ? (
        <div>Loading...</div>
      ) : status === "error" ? (
        <div>{error.message}</div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-4">
            {data.pages.map((page) => {
              return page?.data.map((item: any) => {
                return (
                  <div
                    key={item.id}
                    className="h-20 w-full border border-gray-700"
                  >
                    {item.name}
                  </div>
                );
              });
            })}
          </div>

          <div>
            <button
              className="border border-blue-400"
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage || !hasNextPage}
            >
              {isFetchingNextPage
                ? "Loading more..."
                : hasNextPage
                ? "Load More"
                : "Nothing more to load"}
            </button>
          </div>
        </>
      )}
    </Container>
  );
};

export default ImagesPage;
