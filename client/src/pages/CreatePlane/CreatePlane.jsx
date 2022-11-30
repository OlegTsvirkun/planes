import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { ContentWrapper } from '../../components/ContentWrapper';
import { Input } from '../../components/Input/Input';
import styles from './CreatePlane.module.scss';

export const CreatePlane = ({}) => {
  const navigate = useNavigate();
  return(
 <ContentWrapper className={styles.createPlane}>
  <Button 
  onClick={()=>navigate(-1)}
  isBackButton ={true}
  containerClassName = {styles.backButtonContainer}
  >Back</Button>
  <form className={styles.form}>
    <h1 className={styles.title}>Create a plane</h1>
    <Input
    name = "name"
    placeholder = "Plane's name"
    // error ={errors}
    onChange ={()=>null}
    />
    <Input
    name = "price"
    placeholder = "Plane's price"
    // error ={errors}
    onChange ={()=>null}
    />
    <Input
    name = "capaity"
    placeholder = "Plane's capaity"
    // error ={errors}
    onChange ={()=>null}
    />
    <Input
    name = "description"
    placeholder = "Plane's description"
    // error ={errors}
    onChange ={()=>null}
    />
    <Input
    name = "planeImage"
    type = 'file'
    placeholder = "Plane's Image"
    // error ={errors}
    onChange ={()=>null}
    />
<Button
containerClassName={styles.buttonContainer}
onClick = {()=>null}
>Create</Button>
  </form>
 </ContentWrapper>
)};

