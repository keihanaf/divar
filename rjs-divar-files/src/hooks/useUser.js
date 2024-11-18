import {useQuery} from "@tanstack/react-query";
import {getPosts, getProfile, getAllPosts} from "services/user.js";


function useUser() {
    const  {
        data: profile,
        isLoading: isProfileLoading,
        refetch: refetchProfile,
        error:isErrorProfile
    } = useQuery({
        queryKey: ["profile"],
        queryFn: () => getProfile()
    })

    const {
        data: myPostList,
        isLoading: isMyPostListLoading,
    } = useQuery({
        queryKey: ["my-post-list"],
        queryFn: () => getPosts()
    })

    const {
        data: getAllPost,
        isLoading: isGetAllPost,
    } = useQuery({
        queryKey: ["post-list"],
        queryFn: () => getAllPosts()
    })

    return {
        profile,
        isProfileLoading,
        refetchProfile,
        isErrorProfile,
        myPostList,
        isMyPostListLoading,
        getAllPost,
        isGetAllPost,
    }
}
export default useUser;