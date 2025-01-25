import React, { useContext } from "react";
import "../../styles/home.css";
import Contact from "../component/Contact.jsx";
import { Context } from "../store/appContext.js";

export const Home = () => {

	const {store, actions} = useContext(Context)

	return(

		<>
		{
			store.contact.map((contact, index) => {
				return(
					<Contact contact={contact} key={index}/>
				)
			})
		}

	</>
	)
};
