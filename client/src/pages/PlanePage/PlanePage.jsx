import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './PlanePage.module.scss';
import { getPlane } from '../../store/planes/planeSlice';
import { Rings } from 'react-loader-spinner'
import { ContentWrapper } from '../../components/ContentWrapper';
import { Button } from '../../components/Button';


export const PlanePage = () => {
  const navigate = useNavigate();
  const {id }= useParams();
  const dispatch = useDispatch()
  const { plane, isLoading } = useSelector((state) => state.plane);

  useEffect(() =>  {
    dispatch(getPlane(id));
  }, [dispatch, id]);

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
    plane && (
      <ContentWrapper className={styles.plane}>
        <div className={styles.descContent}>
          <Button onClick={() => navigate(-1)} isBackButton={true}>
            Назад
          </Button>
          <h1 className={styles.title}>{plane.name}</h1>
          <div className={styles.price}>{plane.price}$</div>
          <Button
            containerClassName={styles.buyBtnContainer}
            onClick={() => navigate('/order') }
          >
            Оформить заказ
          </Button>
          <p className={styles.desc}>{plane.description}</p>
        </div>
        <div className={styles.imageContent}>
          <img className={styles.image} src={plane.planeImage} alt="" />
        </div>
      </ContentWrapper>
    )
)};

