import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  addCategory as addCategoryAdmin,
  deleteCategory,
  getCategory,
} from "../services/category.js";

function useCategory() {
  const queryClient = useQueryClient();

  const {
    mutate: addCategory,
    error: errorCategory,
    data: categoryData,
    isLoading: isCategoryLoading,
  } = useMutation({
    mutationFn: addCategoryAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries("get-categories");
    },
    onError: (error) => {
      console.error(error.response.data.message);
    },
  });

  const {
    data: getCategories,
    isLoading: isGetCategories,
    isFetching: isGetCategoriesLoading,
  } = useQuery({
    queryKey: ["get-categories"],
    queryFn: () => getCategory(),
  });

  const { mutate: deleteCategories, isLoading: isDeletingCategory } =
    useMutation({
      mutationFn: (id) => deleteCategory(id),
      onSuccess: () => {
        queryClient.invalidateQueries("get-categories");
      },
      onError: (error) => {
        console.error(error.response.data.message);
      },
    });

  return {
    addCategory,
    errorCategory,
    categoryData,
    isCategoryLoading,
    getCategories,
    isGetCategories,
    isGetCategoriesLoading,
    deleteCategories,
    isDeletingCategory,
  };
}
export default useCategory;
