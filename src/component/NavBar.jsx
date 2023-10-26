import { Link } from "react-router-dom"
import style from '../styles/NavBar.module.css'
import patita from './iconoPatita.png'
import SearchBar from "./SearchBar"

const NavBar = () => {
    return (
        <div className={style.navBar}>
            <div className={style.h1}>
                <img src={patita} alt="patita" className={style.img}/>
                <h1>DOGGIS</h1>
            </div>
            <div className={style.search}><SearchBar /></div>
            <div className={style.div}>
            <Link to="/create" className={style.link}>CREATE BREED</Link>
            <Link to="/home" className={style.link}>BACK TO HOME</Link>    
            </div>
        </div>
    )
}

export default NavBar