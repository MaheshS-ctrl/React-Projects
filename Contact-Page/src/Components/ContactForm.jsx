import React from 'react'
import { useState } from 'react'



const ContactForm = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [text,setText] = useState("");

const onviachatclick = () => {
    console.log("Hello im From Chat")
}

const onviacallclick = () => {
    console.log("Hello im From Call")
}

const onSubmit = (event) => {

    event.preventDefault();

    setName(event.target[1].value);
    setEmail(event.target[3].value);
    setText(event.target[5].value)

}

    return (
        <div className='parent'>

            <div className="twoparts">

                <div className='button'>
                    <button onClick={onviachatclick} id='chat'>VIA SUPPORT CHAT</button>
                    <button onClick={onviacallclick} id='call'>VIA CALL</button>
                </div>
                <br />
                <button className='emailform'>VIA EMAIL FORM</button>
                <br />

                <form className='form' onSubmit={onSubmit}>
                    <br />
                    <fieldset>
                        <legend>Name</legend>
                        <input type='text'></input>
                    </fieldset>

                    <br />

                    <fieldset>
                        <legend>Email</legend>
                        <input type='text'></input>
                    </fieldset>

                    <br />

                    <fieldset>
                        <legend>Text</legend>
                        <textarea name='text' rows="10" cols="50"></textarea>
                    </fieldset>

                    <br />
                    <br />

                    <button className='submit'>SUBMIT</button>
                </form>

            </div>

            <div className='services1'>
                <img src="./images/Service.svg" alt="" />
            </div>

            <div>
                Data From FORM :
                <p>{name}</p>
                <p>{email}</p>
                <p>{text}</p>
            </div>





        </div>
    )
}

export default ContactForm
