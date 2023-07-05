import React from 'react'
import Button from "./Button"

const Card = ({data}) => {
	const clickedButton = () => {
		console.log("Clickedddd");
	}

	const {image,title,description,price} = data;
  return (
	 <div className="container">
<div className="card">
		<img src={image} alt="" />
		<h2>{title}</h2>
		<p>{description.slice(0,15)}</p>
		<h2>{price} <span>AZN</span></h2>
		<Button className="primary" text="Read more" onClick={clickedButton}/>
	 </div>
	 </div>
  )
}

export default Card