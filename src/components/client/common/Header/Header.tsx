"use client";
import React from 'react';
import styles from './Header.module.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoArrowBackOutline } from 'react-icons/io5';
import Navigation from '@/components/client/common/Navigation/Navigation';
import { useGlobalContext } from '@/context/Global/GlobalContext';

const Header = () => {
  const { setIsSearchActive, setHidePrimaryColor } = useGlobalContext();
  const focus = (): void => {
    if(window.innerWidth <= 768){
      setIsSearchActive(true);
      setHidePrimaryColor(true);
    }
  }

  const unfocus = (): void =>{
    setIsSearchActive(false);
    setHidePrimaryColor(false);
  } 
  
  
  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>Logo</div>
        <div className={styles.search} onFocus={focus} onBlur={unfocus}>
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
        <div className={styles.nav}><Navigation /></div>
      </div>
    </div>
  );
};

export default Header;
