import React from 'react';
import { Header } from '../../components/Header';
import { Planes } from '../../components/Planes';
import styles from './HomePage.module.scss';

export const HomePage = ({}) => {
  return(
  <div className={styles.homePage}>
    <Planes/>
  </div>
)};

