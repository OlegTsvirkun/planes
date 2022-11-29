import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './PlanePage.module.scss';

export const PlanePage = () => {
  const navigate = useNavigate();
  const {id }= useParams();
  const dispatch = useDispatch()
  return(
  <div className={styles.planePage}>
   
  </div>
)};

