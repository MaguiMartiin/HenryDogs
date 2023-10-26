import { useDispatch} from "react-redux"
import { filterBySite } from "../redux/actions"
import style from '../styles/Filters.module.css'
import { useState } from "react"

const FilterBySite = () => {
    const dispatch = useDispatch()
    const [selectedOption, setSelectedOption] = useState("")

    const handleFilterChange = (event) => {
      setSelectedOption(event.target.value)   
    }
  
    const handleFilterClick = () => {
      if (selectedOption === "API") {
        dispatch(filterBySite(false))
      } else if (selectedOption === "DB") {
        dispatch(filterBySite(true))
      }
    }
  
    return (
      <div className={style.filterSite}>
        <label htmlFor="filterSelect"></label>
        <select id="filterSelect" value={selectedOption} onChange={handleFilterChange} className={style.select}>
          <option value="default">Filter by Site</option>
          <option value="API">API</option>
          <option value="DB">Base de Datos</option>
        </select>
        <button onClick={handleFilterClick} className={style.boton}>Filter</button>
      </div>
    )
}

export default FilterBySite