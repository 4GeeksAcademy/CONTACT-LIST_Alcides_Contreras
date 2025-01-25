import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const Contact = ({contact}) =>{

    const {store, actions} = useContext(Context);
    console.log(contact);
    console.log(contact.image);
    
    
    const deleteContact = async () =>{
        const response = await fetch(`https://playground.4geeks.com/contact/agendas/alcides/contacts/${contact.id}`, 
        {method:"DELETE"});
        actions.getContacts();
    };

    // const updateContact = async () =>{
    //     try {
    //         const response = await fetch(`https://playground.4geeks.com/contact/agendas/alcides/contacts/${contact.id}`, 
    //         {method: "PUT",
    //          body: JSON.stringify({
    //             "name": contact.name,
	// 			"phone": contact.phone ,
	// 			"email": contact.email,
	// 			"address": contact.address
    //          }),
    //          headers:{
    //             'Content-Type': 'application/json'}
    //         });
    //         actions.getContacts();
    //     } catch (error) {
            
    //     }
    // };



    return (
        <>
            <main className="Contact">
                <section className="contact_img_container">
                    <img className="contact_img" src={store.image} alt="" />
                </section>
                <section className="contact_data">
                    <h5 className="contact_name">{contact.name}</h5>
                    <section className="contact_data_info">
                        <p className="contact_direction"> <span><i className="fa-solid fa-location-dot icon_data"></i></span> {contact.address}</p>
                        <p className="contact_phone"><span><i className="fa-solid fa-phone icon_data"></i></span> {contact.phone}</p>
                        <p className="contact_email"><span><i className="fa-solid fa-envelope icon_data"></i></span> {contact.email}</p>
                    </section>

                    <h5><span className="contact_icon_absolute"><i data-bs-toggle="modal" data-bs-target="#exampleModal" className="fa-solid fa-trash"></i></span></h5>
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Are You Sure?</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Confirm if you want to delete the contact
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" onClick={deleteContact} data-bs-dismiss="modal" class="btn btn-primary">Yes, Delete!</button>
                        </div>
                        </div>
                    </div>
                    </div>
                    <Link to={`/UpdateContact/${contact.id}`}><h5><span onClick={()=> actions.contactUpdate(contact)} className="contact_icon_absolute update"><i className="fa-solid fa-pen"></i></span></h5></Link>
                </section>
            </main>
        </>
    )
};

export default Contact