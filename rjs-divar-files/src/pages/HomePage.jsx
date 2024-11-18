import React, { useState } from 'react';
import Sidebar from "../components/templates/Sidebar.jsx";
import Main from "../components/templates/Main.jsx";
import useUser from "hooks/useUser.js";
import useCategory from "hooks/useCategory.js";
import Loader from "components/modules/Loader.jsx";


const style = {display : "flex"}

function HomePage() {
    const { getCategories, isGetCategories } = useCategory()
    const {getAllPost, isGetAllPost} = useUser()
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (categoryId) => {
        setSelectedCategory(categoryId);
    }

    return (
        <>
            {
                isGetAllPost || isGetCategories ? <Loader/> : (
                    <div style={style}>
                        <Sidebar 
                            getCategories={getCategories} 
                            onCategorySelect={handleCategorySelect}
                            selectedCategory={selectedCategory}
                        />
                        <Main 
                            getAllPost={getAllPost} 
                            selectedCategory={selectedCategory}
                        />
                    </div>
                )
            }
        </>
    )
}

export default HomePage;
