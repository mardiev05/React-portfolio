
import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "./Logo"
import "./index.scss"





const Home = () => {

    const [letterClass, setLetterClass] = useState("text-animate")
    const hiArray = ["H", "i", ","]
    const imArray = ["I", "'m"]
    const nameArray = ["h", "a", "k", "h", "z", "o", "d"]
    const jobArray = ["w", "e", "b", " ", "d", "e", "v", "e", "l", "o", "p", "e", "r", "."]


    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animate-hover")
        }, 4000)
    }, [])


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1><AnimatedLetters letterClass={letterClass} strArray={hiArray} idx={10} />
                    <br /> <AnimatedLetters letterClass={letterClass} strArray={imArray} idx={13} />
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>


                <h2>Frontend Developer / JavaScript / React Expert</h2>
                <Link to="/contact" className="flat-buttom">CONTACT ME</Link>
            </div>
            <Logo />
        </div>
    )
}


export default Home