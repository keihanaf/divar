import React from 'react';
import Loader from "../modules/Loader.jsx";
import styles from "./CategoryList.module.css"
import useCategory from "hooks/useCategory.js";

function CategoryList() {
    const {getCategories, isGetCategoriesLoading, deleteCategories, isDeletingCategory} = useCategory();
    return (
        <div className={styles.list}>
            {isGetCategoriesLoading ? ( <Loader/> ) : (
                getCategories?.data?.map((item) => (
                    <div key={item._id}>
                        <img src={`${item.icon}.svg`}/>
                        <h5>{item.name}</h5>
                        <button onClick={() => deleteCategories(item._id)} disabled={isDeletingCategory}>
                            {isDeletingCategory ? 'در حال حذف...' : 'حذف'}
                        </button>
                        <p>slug: {item.slug}</p>
                    </div>
                ))
            )}
        </div>
    )
}
export default CategoryList;
