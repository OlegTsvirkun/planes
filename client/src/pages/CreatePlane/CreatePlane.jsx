import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPlane } from "../../store/planes/planeSlice";
import { Button } from "../../components/Button";
import { ContentWrapper } from "../../components/ContentWrapper";
import { Input } from "../../components/Input/Input";
import { paths } from "../../paths";
import styles from "./CreatePlane.module.scss";

export const CreatePlane = ({}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { errors } = useSelector((state) => state.plane);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [capacity, setCapacity] = useState('');
  const [description, setDescription] = useState('');
  const [planeImage, setPlaneImage] = useState(null);
  
  const handleCreatePlane = useCallback(
    () => {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("capacity", capacity);
      formData.append("description", description);
      formData.append("planeImage", planeImage);

      dispatch(createPlane(formData))
      .then(res=>{
        if(!res.err){
          navigate(`${paths.plane}/${res.payload._id}`, {replace:true})
        }
      })
    },
    [name, price, capacity,description,planeImage,dispatch,navigate],
  )
  

	return (
		<ContentWrapper className={styles.createPlane}>
			<Button
				onClick={() => navigate(-1)}
				isBackButton={true}
				containerClassName={styles.backButtonContainer}
			>
				Back
			</Button>
			<form className={styles.form}>
				<h1 className={styles.title}>Create a plane</h1>
				<Input
					name="name"
					placeholder="Plane's name"
					// error ={errors}
					onChange={(e) => setName(e.target.value)}
				/>
				<Input
					name="price"
          type = 'number'
					placeholder="Plane's price"
					error = {errors && errors.name && errors.message}
          onChange={(e) => setPrice(e.target.value)}

				/>
				<Input
					name="capacity"
          type = 'number'
					placeholder="Plane's capaity"
					error = {errors && errors.name && errors.message}
          onChange={(e) => setCapacity(e.target.value)}

				/>
				<Input
					name="description"
					placeholder="Plane's description"
          error = {errors && errors.name && errors.message}
          onChange={(e) => setDescription(e.target.value)}

				/>
				<Input
					name="planeImage"
					type="file"
					placeholder="Plane's Image"
          error = {errors && errors.name && errors.message}
          onChange={(e) => setPlaneImage(e.target.files[0])}

				/>
				<Button
					containerClassName={styles.buttonContainer}
					onClick={handleCreatePlane}
				>
					Create
				</Button>
			</form>
		</ContentWrapper>
	);
};
