import React from 'react'



const ContactForm = () => {
    return (
        <div className='parent'>

            <div className="twoparts">

                <div className='button'>
                    <button id='chat'>VIA SUPPORT CHAT</button>
                    <button id='call'>VIA CALL</button>
                </div>
                <br />
                <button className='emailform'>VIA EMAIL FORM</button>
                <br />

                <form className='form'>
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





        </div>
    )
}

export default ContactForm
