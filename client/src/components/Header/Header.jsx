import React from 'react';
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import styles from './Header.module.scss';

export const Header = ({}) => (
  <div className={styles.header}>
    <ContentWrapper className ={styles.content}>
      <h2>Header Component1</h2>
      <h1>Header Component2</h1>
    </ContentWrapper>
  </div>
);

