import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useUser from 'hooks/useUser';
import { sp } from 'utils/numbers.js';
import { FaArrowLeft } from 'react-icons/fa';
import styles from "./Details.module.css";
import Loader from "../components/modules/Loader"

function Details() {
    const { id } = useParams();
    const { getAllPost, isGetAllPost } = useUser();

    if (isGetAllPost) {
        return <Loader/>;
    }

    const post = getAllPost?.data.posts.find(post => post._id === id);

    if (!post) {
        return <div className={styles.notFound}>پست مورد نظر یافت نشد.</div>;
    }

    return (
        <div className={styles.container}>
            <Link to="/" className={styles.backButton}>
                بازگشت<FaArrowLeft />
            </Link>
            <div className={styles.imageContainer}>
                <img 
                    src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} 
                    alt={post.options.title} 
                    className={styles.image} 
                />
            </div>
            <div className={styles.details}>
                <h1 className={styles.title}>{post.options.title}</h1>
                <p className={styles.price}>{sp(post.amount)} تومان</p>
                <p className={styles.city}>{post.options.city}</p>
            </div>
        </div>
    );
}

export default Details;
