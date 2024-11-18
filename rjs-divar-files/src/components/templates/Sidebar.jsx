import styles from "./Sidebar.module.css";
import { FaThLarge } from "react-icons/fa";

function Sidebar({getCategories, onCategorySelect, selectedCategory}) {
    console.log(getCategories);
    const handleClick = (id) => {
        onCategorySelect(id);
    }

    return (
        <div className={styles.sidebar}>
            <h4>دسته بندی ها</h4>
            <ul>
                <li 
                    onClick={() => handleClick(null)}
                    className={selectedCategory === null ? styles.selected : ''}
                >
                    <FaThLarge className={styles.icon} />
                    <p>همه</p>
                </li>
                {getCategories?.data.map((category) => (
                    <li 
                        key={category._id} 
                        onClick={() => handleClick(category._id)}
                        className={selectedCategory === category._id ? styles.selected : ''}
                    >
                        <img src={`${category.icon}.svg`} alt={category.name} />
                        <p>{category.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Sidebar;
