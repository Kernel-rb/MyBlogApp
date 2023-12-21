import Link from 'next/link';
import styles from './authLinks.module.css';

const AuthLinks = () => {
    //TODO : not auth
    const status ="notauth"
    return <>
        {status === "notauth" ? (
            <Link href="/login"></Link>
        ) : (
                <>
                <Link href="/write">Create</Link>
                    <span className={styles.link}>Logout</span>

                </>
                    )}
                    
    </>;

};
export default AuthLinks;

