import style from '../styles/Card.module.css'
import { Link, useHistory } from 'react-router-dom'
import dog from './dog.jpg'

const Card = ({name, weightMin, weightMax, heightMin, heightMax, temperament, image, id}) => {
    
    const history = useHistory()
    const currentPath = history.location.pathname
    const isDetailPage = currentPath.includes('/home/')
    console.log(image);
    return (
        <div className={style.card}>
            <h1 className={style.h1}>{name}</h1>
            <p className={style.weight}>Peso: {weightMin} - {weightMax} kg</p>
            {isDetailPage && (
                <p>Altura: {heightMin} - {heightMax}</p> )}
            <p className={style.p}>Temperamentos: {temperament}</p>
            <img src={image} className={style.cardImage}/>
            {isDetailPage && (
            <Link to={'/home'} className={style.back}><button className={style.botonBack}>Back To Home</button></Link>
            )}
            {!isDetailPage && (
            <Link to={`/home/${id}`} className={style.detalle}>
                <button className={style.boton}>Detalle</button>
            </Link>)}
        </div>
    )
}

export default Card