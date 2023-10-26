import { Link } from "react-router-dom"
import style from '../styles/Landing.module.css'
import img from '../styles/Landing3.png'

const Landing = ()=>{
    return (
        <div className={style.conteinHome}>
            <img src={img} alt="image landing" className={style.image}/>
            <div className={style.conteinButton}>
                <h1 className={style.tittle}>Welcome to de doggis app</h1>
            <Link to="/home" className={style.link}>
                <button className={style.boton}>HOME</button>
            </Link>
            </div>
        </div>
    )
}

export default Landing