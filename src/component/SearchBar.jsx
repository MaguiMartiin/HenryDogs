import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterByName } from "../redux/actions"
import style from '../styles/SearchBar.module.css'

const SearchBar = () => {
    const dispatch = useDispatch()
    const [search, setSearch] = useState("")

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(filterByName(search))
        setSearch("")
    }

    return (
        <div>
        <form onSubmit={(e)=>{handleSubmit(e)}} >
            <input value={search} type="text" placeholder="Search" onChange={(e) => handleChange(e)} className={style.input}/>
            <button type="submit" className={style.boton}>To search</button>
        </form>
        </div>
    )
}

export default SearchBar