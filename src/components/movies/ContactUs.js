import React, { Fragment,useRef } from "react";

const ContactUS = () => {
    const nameRef = useRef("");
    const mailRef = useRef("");
    const phnoRef = useRef("");

    // const contacts = {
    //   name: nameRef.current.value,
    //   email: mailRef.current.value,
    //   phno: phnoRef.current.value,
    // };
    const submitHandler=async(event)=> {
      event.preventDefault();
      const contacts = {
        name: nameRef.current.value,
        email: mailRef.current.value,
        phno: phnoRef.current.value,
      };
      
        const response = await fetch('https://react-http-9484f-default-rtdb.firebaseio.com/contacts.json',
          {
            method: "POST",
            body: JSON.stringify(contacts),
            headers: {
              "Content-Type": "application/json",
            },
          });
        const data = await response.json();
        console.log(data);
      }
  
      
    
  
    return (
      <Fragment  >
        <div className="d-flex justify-content-left about"><h1>Contact Us</h1></div>
      <form onSubmit={submitHandler}>
         
         <label htmlFor="name">NAME</label>
        <input type="text" ref={nameRef} />
        <label htmlFor="e-mail">E-MAIL</label>
        <input type="mail" ref={mailRef} />
        <label htmlFor="phno">PHno</label>
        <input type="number" ref={phnoRef} />
        <button type="submit">Submit</button>
        </form>
        </Fragment>
    );
  }
  export default ContactUS;