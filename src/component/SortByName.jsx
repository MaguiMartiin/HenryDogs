import { useDispatch } from "react-redux"
import { sortByName } from "../redux/actions"
import { useState } from "react"
import style from '../styles/Filters.module.css'

const SortByName = () => {
    const dispatch = useDispatch()
    const [order, setOrder] = useState("")
  
    const handleOrderChange = (e) => {
      const selectedOrder = e.target.value
      setOrder(selectedOrder)
  
      if (selectedOrder === "asc") {
        dispatch(sortByName("asc"))
      } else if (selectedOrder === "desc") {
        dispatch(sortByName("desc"))
      } else {
        dispatch(sortByName(undefined))
      }
    }
  
    return (
      <div className={style.sortByName}>
        <select  onChange={handleOrderChange} className={style.select}>
          <option value="default">Sort alphabetically</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
      </div>
    )
  }
  
  export default SortByName