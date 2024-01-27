import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {dsnCN} from "../../hooks/helper";
import TitleSection from "../heading/TitleSection";

function ContactForm({className}) {

    const form = useRef();
    const [loading, setLoading] = useState();
    const [result, setResult] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
        setResult(false);
        setLoading(true);
        emailjs.sendForm(
            'service_lwh55sj',
            'template_zkky8lb',
            form.current,
            'ektIYmNqDUxLowZkA')
            .then((result) => {
                setLoading(false);
                setResult(true);
                form.current.reset();
            }, (error) => {
                setLoading(false);
            });
    };

    setTimeout(() => setResult(false), 5000);


    return (

            <div className={dsnCN('form-box', className)}>
                <div className="line line-top" />
                <div className="line line-bottom" />
                <div className="line line-left" />
                <div className="line line-right" />

                <TitleSection description="Fale conosco" defaultSpace={false}>
                   Entre em contato
                </TitleSection>
                <p className="mb-30 mt-20">
                Em breve retornaremos!
                </p>

                <form  className="form"  ref={form} onSubmit={sendEmail} >
                    <div className="input__wrap controls">
                        <div className="form-group">
                            <div className="entry-box">
                                <label>Seu nome *</label>
                                <input id="form_name" type="text" name="from_name"
                                       placeholder="Como devemos te chamar?" required="required"
                                       data-error="name is required." />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="entry-box">
                                <label>Seu e-mail *</label>
                                <input id="form_email" type="email" name="from_email"
                                       placeholder="Por favor, insira seu e-mail comercial." required="required"
                                       data-error="Valid email is required." />
                            </div>
                        </div>

                        <div className="form-group">
                            <div className="entry-box">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                <label>Como podemos ajudar o seu négocio?</label>
                                <textarea id="form_message" className="form-control" name="message" rows={4}
                                          placeholder="Nos conte sobre você e o seu mundo."
                                          required="required"
                                          data-error="Please,leave us a message." />
                            </div>
                        </div>

                        <div className="text-right">
                            <div className="image-zoom w-auto d-inline-block" data-dsn="parallax">
                                <button type="submit" className="dsn-button" style={{cursor:"pointer"}}>
                                    <span className="dsn-border border-color-default" />
                                    <span className="text-button">Enviar mensagem</span>
                                </button>
                            </div>
                            {loading && <div className="loading-message mt-20">Enviando mensagem ...</div>}
                            {result &&
                            <p className="success-message mt-20">Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.</p>}
                        </div>
                    </div>
                </form>
            </div>


    );
}

export default ContactForm;