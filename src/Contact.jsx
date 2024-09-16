/* eslint-disable no-unused-vars */
import './Contact.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import walls from './pictures/whitewalls.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconButton } from '@mui/material';


function Contact() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, []);

    const [status, setStatus] = useState(t("contactSubmitButton"));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus(t("contactSetStatus"));

        const { fname, lname, phone, email, message } = e.target.elements;
        const details = {
            fname: fname.value,
            lname: lname.value,
            phone: phone.value,
            email: email.value,
            message: message.value,
        };  

        //fetch was the localhost url
        
        try {
            const response = await fetch("https://api-qurmmidqra-uc.a.run.app/Contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                    "Accept": "application/json",
                },
                body: JSON.stringify(details),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(errorText);
            }
          
            const result = await response.json();
            setStatus("SUBMIT");

            toast.success(t("contactToastSuccess"), {
                transition: Slide,
            });
        } catch(error){
            setStatus("SUBMIT");
            toast.error(t("contactToastError"), {
                transition: Slide,
            })
        }
    };


    return (
      <div className="contact">
        
            <div className="contact__content">
                <div className="contact__left">
                    <h1 className='title'>{t("contactTitle")}</h1>
                    <p>
                        {t("contactDesc1")} 
                    </p>
                    <p>
                        {t("contactDesc2")}
                        
                        <IconButton
                            component="a"
                            href="https://www.facebook.com/paty.espinoza.9615?mibextid=LQQJ4d"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="facebook__icon"
                        >
                            <FacebookIcon fontSize="medium" />
                        </IconButton>
                    </p>
                    <p>
                        {t("contactDesc3")}
                    </p>
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__text">
                            <label htmlFor="fname">{t("contactFN")} </label>
                            <input type="text" id="fname" name="fname" required /> 
                        </div>
                        <div className="contact__text">
                            <label htmlFor="lname">{t("contactLN")} </label>
                            <input type="text" id="lname" name="lname" required /> 
                        </div>
                        <div className="contact__text">
                            <label htmlFor="phone">{t("contactNum")} </label>
                            <input type="tel" id="phone" name="phone" required /> 
                        </div>
                        <div className="contact__text">
                            <label htmlFor="email">{t("contactEmail")} </label>
                            <input type="email" id="email" name="email" required /> 
                        </div>
                        <div className="contact__text">
                            <label htmlFor="message">{t("contactMess")} </label>
                            <textarea id="message" name="message" required /> 
                        </div>
                        <button type="submit">{status}</button>
                    </form>

                </div>

                <div className="contact__right">
                        <img src={walls} alt="walls" className="contact__pic"/>
                </div>

            </div>
            <ToastContainer />

      </div>
    )
  }
  
  export default Contact