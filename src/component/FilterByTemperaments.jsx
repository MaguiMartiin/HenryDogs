import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterDogsByTemperament } from "../redux/actions"
import style from '../styles/Filters.module.css'

const FilterByTemperaments = () => {
  const [selectedTemperament, setSelectedTemperament] = useState("default")
  const [selectedNoneTemperament, setSelectedNoneTemperament] = useState("none")
  const temperaments = useSelector((state) => state.temperaments)
  const dispatch = useDispatch()

  const handleFilterChange = (event) => {
    const selectedValue = event.target.value
    setSelectedTemperament(selectedValue)
    setSelectedNoneTemperament(selectedValue)
    dispatch(filterDogsByTemperament(selectedValue))
  }

  return (
    <div className={style.filterTemper}>
      <select onChange={handleFilterChange} className={style.select}>
        <option value="default">Select Temperament</option>
        <option value="none">None</option>
        {temperaments.map((tem) => (
          <option value={tem.name} key={tem.id}>
            {tem.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterByTemperaments