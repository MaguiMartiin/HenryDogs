import CardsContainer from "../component/CardsContainer"
import { useEffect } from "react" 
import { useDispatch } from "react-redux"
import { useState } from "react"
import { getDogs, getTemperaments} from "../redux/actions"
import SortByName from "../component/SortByName"
import SortByWeight from "../component/SortByWeight"
import FilterByTemperaments from "../component/FilterByTemperaments"
import Loading from "../component/Loading"
import FilterBySite from "../component/FilterBySite"
import style from '../styles/Home.module.css'

const Home = ()=>{
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        dispatch(getDogs()).then(() => {
            setLoading(false)
        })
        dispatch(getTemperaments())
    },[dispatch])
    

    if (loading) {
        return <div><Loading/> </div>
    } 
    
    const reloadHandler = () =>{
        window.location.reload()
    }

    return (
        <div className={style.container}>  
            <div className={style.filters}>
            <button onClick={reloadHandler} className={style.botonR}>Reload</button>
            <FilterBySite/>
            <FilterByTemperaments/>
            <SortByWeight/>
            <SortByName/>    
            </div>
            <div className={style.cards}>
            <CardsContainer/>
            </div>
        </div>
    )
}

export default Home