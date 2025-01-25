import React, { useState, useEffect, useContext } from "react";
import { Await, Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddContact = () => {
	const {actions} = useContext(Context);
	const [contact, setContact] = useState()
	


	const handleChange = (e) =>{
		console.log(e);

		setContact({...contact, [e.target.name] : e.target.value})

		// setSaveImage(contact.image)
		// actions.saveImage(saveImage)

		
		// store.setStore({image : saveImage})

		console.log(contact);
		console.log(saveImage);
		//console.log(store.image);
		//imageInput();
		
	};

	//setSaveImage("https://m.media-amazon.com/images/I/61xeUo0cJ2L._AC_UF894,1000_QL80_.jpg")
	//actions.saveImage({image : saveImage})

	// const imageInput = () => {
	// 	setSaveImage("contact.image");
	// 	setSaveImage(null);
	// 	console.log();
		
	// }

	const postContactApi = async () =>{
		try {
			const response = await fetch('https://playground.4geeks.com/contact/agendas/alcides/contacts', 
				{method: "POST",
				body: JSON.stringify({
					"name": contact.name,
					"phone": contact.phone ,
					"email": contact.email,
					"address": contact.address
				  }),
				headers:{
					"Content-Type" : "application/json"
				}
			}
		)	
		actions.getContacts();
		} catch (error) {
			
		}
	};

	
	return (
		<>
			<main className="container_form">
				<section className="form_header"> 
					<h1>Contact Form</h1>
				</section>

				<form className="form_contact">
					<label className="form_label" htmlFor="name">Full Name</label>
					<input className="form_input" name="name" onChange={(e)=> handleChange(e)} type="text" placeholder="Full Name"></input>

					<label className="form_label" htmlFor="email">Email</label>
					<input className="form_input" name="email" onChange={(e)=> handleChange(e)} type="email" placeholder="Enter Email"></input>

					<label className="form_label" htmlFor="phone">Phone</label>
					<input className="form_input" name="phone" onChange={(e)=> handleChange(e)} type="text" placeholder="Enter Phone"></input>

					<label className="form_label" htmlFor="address">Address</label>
					<input className="form_input" name="address" onChange={(e)=> handleChange(e)} type="text" placeholder="Enter address"></input>
				</form>
			</main>

			<div className="container_button"> 
				<Link to="/">
					<button className="contact_button save" type="submit" onClick={postContactApi}>Save Contact</button>
				</Link>
			
				<Link to="/">
					<button className="contact_button">Back home</button>
				</Link>
			</div>

		</>
	);
};
