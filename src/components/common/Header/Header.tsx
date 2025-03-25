import React from 'react';
import styles from './Header.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';
import Navigation from '@/components/common/Navigation/Navigation';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.search}>
          <div className={styles.backIcon}>
            <IoArrowBackOutline />
          </div>
          <div className={styles.inputIcon}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="Search Cloud Commerce"
            />
            <div className={styles.searchIcon}>
              <HiOutlineSearch />
            </div>
          </div>
        </div>
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
