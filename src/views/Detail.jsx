import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState} from "react"
import { getById} from "../redux/actions"
import Card from "../component/Card"
import Loading from "../component/Loading"
import styleD from '../styles/Detail.module.css'

const Detail = ()=>{

    const {id} = useParams()
    const dogDetail = useSelector(state => state.dogId)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(getById(id)).then(() => {
        setLoading(false)
      })
    }, [dispatch, id])

    if (loading) {
        return <div><Loading/> </div>
    } 
      
    return (
        <div className={styleD.container}>   
            {dogDetail && (
            <Card className={styleD.cardD} name={dogDetail.name} key={dogDetail.id} image={dogDetail.image} id={dogDetail.id} weightMin={dogDetail.weightMin} weightMax={dogDetail.weightMax} heightMin={dogDetail.heightMin} heightMax={dogDetail.heightMax} temperament={dogDetail.temperament.join(", ")} />
            )}
        </div>
    )
}

export default Detail