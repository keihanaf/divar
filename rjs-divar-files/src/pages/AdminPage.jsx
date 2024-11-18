import React from 'react';
import CategoryForm from "components/templates/CategoryForm.jsx";
import CategoryList from "components/templates/CategoryList.jsx";

function AdminPage() {
    return (
        <div>
            <CategoryList/>
            <CategoryForm/>
        </div>
    )
}
export default AdminPage;