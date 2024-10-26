import { apiService } from "./apiService";

export const fetchAllImages = async ({ pageParam = 0 }) => {
  const LIMIT = 5;
  try {
    const res = await apiService.get(`/users`, {
      params: {
        _page: pageParam,
        _limit: LIMIT,
      },
    });

    const totalCount = parseInt(res.headers["x-total-count"], 10);

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalCount / LIMIT);

    const hasMorePages = pageParam < totalPages;
    return {
      data: res.data,
      nextPage: hasMorePages ? pageParam + 1 : undefined,
    };
  } catch (error) {
    console.log(error);
  }
};
