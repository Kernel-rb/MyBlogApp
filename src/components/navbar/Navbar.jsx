import React from 'react';
import Link from 'next/link';
import {  FaTwitter, FaInstagram , FaGithub  , FaLinkedin} from 'react-icons/fa';
import styles from "./navbar.module.css";
import AuthLinks from '../authLinks/AuthLinks';
import ThemeToggle from '../themeToggle/ThemeToggle';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <FaLinkedin  alt="Linkedin" width={24} height={24}/>
        <FaTwitter alt="twitter" width={24} height={24} />
        <FaInstagram alt="instagram" width={24} height={24} />
        <FaGithub alt="github" width={24} height={24} />
      </div>
      <div className={styles.logo}>KernelBlogs</div>
      <div className={styles.link}>
        <Link href="/Homepage">Homepage</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/About">About</Link>
        <Link href="/Login">Login</Link>
        <ThemeToggle />
        <AuthLinks />
      </div>
    
    </div>
  );
}

export default Navbar;
