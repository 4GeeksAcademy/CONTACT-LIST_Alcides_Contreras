import React, { useState, useEffect, useContext } from "react";
import { Await, Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const UpdateContact = () => {
    console.log("hola");
    
    const {store, actions } = useContext(Context);
    const [contact, setContact] = useState({})
    
    useEffect (()=>{
        if(store.contactUpdate.id != undefined){
        setContact(store.contactUpdate)
        console.log("a ver si entra");
    }
    }, [])
    

    const {id} = useParams()
    
    console.log(store.contactUpdate);
    

    console.log(id);
    

    const handleChange = (e) =>{
        console.log(e);

        setContact({...contact, [e.target.name] : e.target.value})
    };


    const updateContact = async () =>{
        try {
            const response = await fetch(`https://playground.4geeks.com/contact/agendas/alcides/contacts/${id}`, 
                {method: "PUT",
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
                    <h1>Update Contact</h1>
                </section>

                <form className="form_contact">
                    <label className="form_label" htmlFor="name">Full Name</label>
                    <input className="form_input" name="name" onChange={(e)=> handleChange(e)} value={contact.name} type="text" placeholder="Full Name"></input>

                    <label className="form_label" htmlFor="email">Email</label>
                    <input className="form_input" name="email" onChange={(e)=> handleChange(e)} value={contact.email} type="email" placeholder="Enter Email"></input>

                    <label className="form_label" htmlFor="phone">Phone</label>
                    <input className="form_input" name="phone" onChange={(e)=> handleChange(e)} value={contact.phone} type="text" placeholder="Enter Phone"></input>

                    <label className="form_label" htmlFor="address">Address</label>
                    <input className="form_input" name="address" onChange={(e)=> handleChange(e)} value={contact.address} type="text" placeholder="Enter address"></input>
                </form>
            </main>

            <div className="container_button"> 
                <Link to="/">
                    <button className="contact_button save" type="submit" onClick={updateContact}>Update Contact</button>
                </Link>
            
                <Link to="/">
                    <button className="contact_button">Back home</button>
                </Link>
            </div>

        </>
    );
};