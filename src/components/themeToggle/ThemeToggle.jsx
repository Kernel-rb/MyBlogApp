import styles from './themeToggle.module.css';

const ThemeToggle = () => {
    return <div className={styles.container}>
        <label className="switch">
            <input type="checkbox" />
            <span className="slider" />
        </label>

    </div>;
    

};
export default ThemeToggle;

