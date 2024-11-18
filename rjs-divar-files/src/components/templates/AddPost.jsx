import useAdmin from "hooks/useCategory.js";
import { useState } from "react";
import styles from "./AddPost.module.css";
import { getCookie } from "utils/cookie.js";
import axios from "axios";
import { toast } from "react-hot-toast";

function AddPost() {
    const [form, setForm] = useState({
        title: "",
        content: "",
        category: "",
        amount: null,
        city: "",
        images: null,
    });

    const { getCategories } = useAdmin();
    console.log(getCategories);

    const addHandler = (event) => {
        event.preventDefault();
        const formData = new FormData();
        for (let i in form) {
            formData.append(i, form[i]);
        }
        const token = getCookie("accessToken");
        axios.post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
            headers: {
                "content-type": "multipart/form-data",
                "Authorization": `Bearer ${token}`,
            },
        })
            .then((res) => {
                toast.success(res.data.message);
            })
            .catch((err) => {
                toast.error("مشکلی پیش آمده است.");
                console.error(err);  // Log error for debugging
            });
    };

    const changeHandler = (event) => {
        const name = event.target.name;
        if (name !== "images") {  // corrected string comparison
            setForm({ ...form, [name]: event.target.value });
        } else {
            setForm({ ...form, [name]: event.target.files[0] });
        }
    };

    return (
        <form onSubmit={addHandler} onChange={changeHandler} className={styles.form}>
            <h3>افزودن آگهی</h3>
            <label htmlFor="title">عنوان</label>
            <input type="text" name="title" id="title" />
            <label htmlFor="content">توضیحات</label>
            <textarea name="content" id="content" />
            <label htmlFor="amount">قیمت</label>
            <input type="number" name="amount" id="amount" />
            <label htmlFor="city">شهر</label>
            <input type="text" name="city" id="city" />
            <label htmlFor="category">دسته بندی</label>
            <select name="category" id="category">
                {getCategories && getCategories.data.map((item) => (
                    <option key={item._id} value={item._id}>{item.name}</option>
                ))}
            </select>
            <label htmlFor="images">عکس</label>
            <input type="file" name="images" id="images" />
            <button type="submit">ایجاد</button>
        </form>
    );
}

export default AddPost;