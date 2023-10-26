import style from '../styles/CardsContainer.module.css'
import Card from "./Card"
import Paginated from "../component/Paginated"
import { useSelector } from "react-redux"
import { useState } from "react"

const CardsContainer = () => {
       
    const dogs = useSelector((state)=> state.dogs)
    const [quantityDogsPage] = useState(8) 
    const [refreshPage, setRefreshPage] = useState(1) 
    const lastDog = refreshPage * quantityDogsPage
    const firstDog = lastDog - quantityDogsPage
    let currentDogs = dogs.slice(firstDog,lastDog)
    let index = Math.ceil(dogs.length / quantityDogsPage)
 
    const page = (pageNumber) => {
        setRefreshPage(pageNumber)
      }

      const nextHandler = () => {
        if (refreshPage >= index) return
        setRefreshPage(refreshPage + 1)
      }
    
      const prevHandler = () => {
        if (refreshPage === 1) return
        setRefreshPage(refreshPage - 1)
      }
    
      const firstHandler = () => {
        setRefreshPage(1)
      }
    
      const lastHandler = () => {
        setRefreshPage(index)
      }

    return (
        <div>
            <div className={style.paginated}>
                <Paginated  dogs2={dogs.length}
                            quantityDogs={quantityDogsPage}
                            page={page}
                            refresh={refreshPage} 
                            nextHandler={nextHandler}
                            prevHandler={prevHandler}
                            firstHandler={firstHandler}
                            lastHandler={lastHandler} />
            </div>

            <div className={style.CardsContainer}> 
                {currentDogs.map((dog) => {
                    return <Card key={dog.id} dogs={dog} name={dog.name} image={dog.image} id={dog.id} weightMin={dog.weightMin} weightMax={dog.weightMax} heightMin={dog.heightMin} heightMax={dog.heightMax} temperament={dog.temperament.join(", ")}/>
                        })}
            </div>
        </div>
)}


export default CardsContainer