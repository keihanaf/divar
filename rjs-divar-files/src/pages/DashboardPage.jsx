import React from 'react';
import AddPost from "components/templates/AddPost.jsx";
import PostList from "components/templates/PostList.jsx";

function DashboardPage() {
    return (
        <div>
            <AddPost/>
            <PostList/>
        </div>
    )
}
export default DashboardPage;