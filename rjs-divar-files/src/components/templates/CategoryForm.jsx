import React, {useState} from 'react';
import styles from './CategoryForm.module.css';
import useAdmin from "hooks/useCategory.js";

function CategoryForm() {
    const [form, setForm] = useState({
        name:"",
        slug:"",
        icon:""
    })
    const {addCategory,errorCategory,isCategoryLoading, categoryData} = useAdmin();
    console.log({ errorCategory, categoryData});

    const changeHandler = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }
    const submitHandler = (event) => {
        event.preventDefault()
        if (!form.name || !form.slug || !form.icon) return;
        addCategory(form);
    }

    return (
        <form onChange={changeHandler} onSubmit={submitHandler} className={styles.form}>
            <h3>دسته بندی جدید</h3>
            {errorCategory && <p>لطفا به درستی اطلاعات را وارد کنید</p>}
            {categoryData?.status === 201 && <p>دسته بندی با موفقیت اضافه شد</p>}
            <label htmlFor="name">اسم دسته بندی</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="slug">اسلاگ</label>
            <input type="text" name="slug" id="slug"/>
            <label htmlFor="icon">آیکون</label>
            <input type="text" name="icon" id="icon"/>
            <button type="submit" disabled={isCategoryLoading}>ایجاد</button>
        </form>
    )
}

export default CategoryForm;