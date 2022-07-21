import { useEffect, useRef, useState } from "react"
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import emailjs from "@emailjs/browser"
import "./index.scss"


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('serviceId', 'template_service', e.target, 'heRgkFLGhv2vwfOkR')
            .then((result) => {
                alert("Message successfully sent")
                window.localStorage.reload(false)
            }, (error) => {
                alert("Faild to send the message, please try again! ")
            });
    }

    return <>
        <div className="container contact-page ">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={["C", "o", "n", "t", "a", "c", "t", " ", "m", "e"]} idx={15} />
                </h1>
                <p>
                    I am interested in freelance opportunities - especially ambitious or
                    large projects. However, if you have other request or question,
                    don't hesitate to contact me using below form either.
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                                <input className="name-email" type="text" name="name" placeholder="Name" required />
                            </li>
                            <li className="half">
                                <input className="name-email" type="email" name="email" placeholder="Email" required />
                            </li>
                            <li>
                                <input className="name-email" type="text" name="subject" placeholder="Subject" required />
                            </li>
                            <li>
                                <textarea name="message" placeholder="Message" required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>

            <div className="map-wrap">
                <div className="info-map">
                    Shakhzod Mardiev
                    <br />
                    Tennessee, USA

                    <br />
                    <span>mardiev.dev@gmail.com</span>
                </div>
                <MapContainer center={[35.925064, -86.868889]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                    <Marker position={[35.925064, -86.868889]}>
                        <Popup>I live here, come over for a cup of coffee :)</Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
        <Loader type="pacman" />
    </>
}

export default Contact 