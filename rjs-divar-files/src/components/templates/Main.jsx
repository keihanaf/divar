import { Link } from 'react-router-dom';
import { sp } from 'utils/numbers.js';
import useUser from 'hooks/useUser.js';
import styles from "./Main.module.css"

function Main({ getAllPost, selectedCategory }) {
    console.log(getAllPost);
    const filteredPosts = selectedCategory
        ? getAllPost?.data.posts.filter(post => post.category === selectedCategory)
        : getAllPost?.data.posts;

    return (
        <div className={styles.container}>
            {filteredPosts?.map((post) => (
                <Link to={`/details/${post._id}`} key={post._id} className={styles.card}>
                    <div className={styles.info}>
                        <p>{post.options.title}</p>
                        <div>
                            <p>{sp(post.amount)} تومان</p>
                            <span>{post.options.city}</span>
                        </div>
                    </div>
                    <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} alt={post.options.title} />
                </Link>
            ))}
        </div>
    );
}

export default Main;
