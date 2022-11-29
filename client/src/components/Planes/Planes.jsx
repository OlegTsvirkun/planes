import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanes } from '../../store/planes/planesSlice';
import styles from './Planes.module.scss';
import { Rings } from 'react-loader-spinner'
import { ContentWrapper } from '../ContentWrapper/ContentWrapper';
import { PlaneItem } from '../PlaneItem/PlaneItem';
import { Link } from 'react-router-dom';
import { paths } from '../../paths';

export const Planes = ({}) => {
  const dispatch = useDispatch();
  const {planes, isLoading , isError , message} = useSelector((state)=> state.planes);
  useEffect(() => {
    dispatch(getPlanes())
  }, [dispatch]);
if (isLoading){
  return(
    <div className={styles.isLoading}>
    <Rings
    height="20vh"
    width="20vw"
    color="#6347e1"
    radius="2"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="rings-loading"
    />
  </div>
  )
}


  return(
   <>
      <div className={styles.sort}> 
      <ContentWrapper className={styles.planesHeader}>
        <button> Sorting by price</button>
        <Link className={styles.createPlaneBtn} to = {paths.createPlane}>Add Plane</Link>
      </ContentWrapper>
      </div>
    
      <ContentWrapper className={styles.planes}>
        {planes && planes.map(plane=> <PlaneItem key ={plane._id} {...plane}/>)}
  </ContentWrapper>
    
   </>
)};

