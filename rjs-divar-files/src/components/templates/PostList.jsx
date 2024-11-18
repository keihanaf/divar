import useUser from "hooks/useUser.js";
import Loader from "../modules/Loader.jsx";
import {sp} from "utils/numbers.js";
import styles from "./PostList.module.css"
import React from "react";
import useCategory from "../../hooks/useCategory.js";


function PostList() {
    const {myPostList,isMyPostListLoading} = useUser();
    console.log("my",myPostList)

    return (
        <div className={styles.list}>
            {
                isMyPostListLoading ? <Loader /> : (
                    <>
                        <h3>آگهی های شما</h3>
                        {
                            myPostList.data.posts.map((post) => (
                                <div className={styles.post} key={post._id}>
                                    <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}/>
                                    <div>
                                        <p>{post.options.title}</p>
                                        <span>{post.options.content}</span>
                                    </div>
                                    <div className={styles.price}>
                                        <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                                        <span>{sp(post.amount)} تومان </span>
                                    </div>
                                </div>
                            ))
                        }
                    </>
                )
            }
        </div>
    )
}

export default PostList;