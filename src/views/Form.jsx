import {  useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createDog } from "../redux/actions"
import style from '../styles/Form.module.css'

const Form = ()=>{
    const dispatch = useDispatch()
    const temperamentA = useSelector((state)=>state.temperaments)

    const [form, setForm] = useState({
        name: "",
        heightMin: "", 
        heightMax: "", 
        weightMin: "",
        weightMax: "",
        image: "",
        yearsOfLife: "",
        temperament: [],
    })

    const [error, setError] = useState({
        name: "",
        heightMin: "", 
        heightMax: "", 
        weightMin: "",
        weightMax: "",
        image: "",
        yearsOfLife: "",
        temperament: [],
    })

    const validate = (input) =>{
    
      let error = {}
      if(input.name.length >= 0 && !input.name.match(/^[a-zA-Z_]+([a-zA-Z_]+)*$/)){
         error.name = 'Only letters are allowed and no spaces at the end!'
      }else error.name = null
      
      if(input.image.length > 0 && !input.image.match(/^(ftp|http|https):\/\/[^ "]+$/)){
         error.image = 'The image has to be a URL'
      } else error.image = null
      
      if(input.heightMin > 100 || input.heightMin < 0){
         error.heightMin = 'It has to be between 0 and 100'
      }else error.heightMin = null

      if(input.heightMax > 100 || input.heightMax < 0){
        error.heightMax = 'It has to be between 0 and 100'
      }else error.heightMax = null
 
      if(input.weightMin > 100 || input.weightMin < 0){
        error.weightMin = 'It has to be between 0 and 100'
      }else error.weightMin = null

      if(input.weightMax > 100 || input.weightMax < 0){
        error.weightMax = 'It has to be between 0 and 100'
      }else error.weightMax = null

      if(input.temperament && input.temperament.length === 0){
         error.temperament = 'You have to choose at least one temperament'
      } else error.temperament = null
      return error
 }

    const handlerChange = (event) => {
        const property = event.target.name
        const value = event.target.value
        setForm({...form, [property]: value})
        setError(validate({...form, [property]: value}))
    }
    const handlerSelect = (event) => {
        const selectedTemperamentName = event.target.value
        const selectedTemperament = temperamentA.find(
          (temperament) => temperament.name === selectedTemperamentName
        )
        if (selectedTemperament) {
          if (!form.temperament.includes(selectedTemperament.name)){
          const updatedtemperament = [...form.temperament, selectedTemperament.name]
          setForm({ ...form, temperament: updatedtemperament })
          setError(validate({...form, temperament: updatedtemperament}))}
        }
    }

    const handlerSubmit = (event) => {
        event.preventDefault()
        if (error.name === null && error.heightMin === null && error.heightMax === null && error.weightMin === null && error.weightMax === null && error.temperament === null && error.image === null) {
          const temperamentString = form.temperament.join(", ")
            console.log(temperamentString);
            dispatch(createDog({...form, temperament: temperamentString}))
            console.log(form);
            alert("Dog Created!")
            setForm({
                name: "",
                heightMin: "",
                heightMax: "", 
                weightMin: "",
                weightMax: "",
                yearsOfLife: "",
                image: "",
                temperament: [],
            })
        } else {alert("Complete the required fields!")}
    } 

    const handlerDelete = (event) => {
        event.preventDefault()
        const temperDelete = event.target.value
        setForm({...form, temperament: form.temperament.filter((t) => t !== temperDelete)})
    }

    return (
      <div className={style.container}>
        <form onSubmit={(e) => {handlerSubmit(e)}} className={style.form}>   
            <div className={style.nameD}>
                <label htmlFor="name">Nombre: </label>
                <input type="text" value={form.name} onChange={(e) => {handlerChange(e)}} name="name"/>
                <div className={style.name}>
                  {error.name && (<p className={style.p}>{error.name}</p>)}
                </div>
            </div>
            
            <div className={style.divP}>  
              <div className={style.input2}>
                <div className={style.input}>
                  <label htmlFor="heightMin" className={style.label}>Altura min: </label>
                  <input type="number" value={form.heightMin} onChange={(e) => {handlerChange(e)}} name="heightMin" className={style.inputI}/>
                </div>
                  {error.heightMin && (<p className={style.p}>{error.heightMin}</p>)}                
              </div>
              <div className={style.input2}>
                <div className={style.input}>
                  <label htmlFor="heightMax" className={style.label}>Altura max: </label>
                  <input type="number" value={form.heightMax} onChange={(e) => {handlerChange(e)}} name="heightMax" className={style.inputI}/>
                </div>
                  {error.heightMax && (<p className={style.p}>{error.heightMax}</p>)}
              </div>
            </div>

            <div className={style.divP}>
              <div className={style.input2}>
                <div className={style.input}>
                  <label htmlFor="weightMin" className={style.label}>Peso min: </label>
                  <input type="number" value={form.weightMin} onChange={(e) => {handlerChange(e)}} name="weightMin" className={style.inputI}/>
                </div>
                  {error.weightMin && (<p className={style.p}>{error.weightMin}</p>)}
              </div>
              <div className={style.input2}>
                <div className={style.input}>
                  <label htmlFor="weightMax" className={style.label}>Peso max:</label>
                  <input type="number" value={form.weightMax} onChange={(e) => {handlerChange(e)}} name="weightMax" className={style.inputI}/>
                </div>
                  {error.weightMax && (<p className={style.p}>{error.weightMax}</p>)}
              </div>
            </div>
        
            <div>
                <label htmlFor="yearsOfLife">Años de vida: </label>
                <input type="text" value={form.yearsOfLife} onChange={(e) => {handlerChange(e)}} name="yearsOfLife"/>
            </div>

            <div>
                <label htmlFor="image">Imagen: </label>
                <input type="text" value={form.image} onChange={(e) => {handlerChange(e)}} name="image"/>
                {error.image && (<p className={style.p}>{error.image}</p>)}
            </div>

            <div className={style.inputT}>
              <div className={style.input}>
                <label htmlFor="temperament" className={style.inputI}>Temperamentos: </label>
                <select onChange={(e) => {handlerSelect(e)}} name="temperament">
                  <option value="">Select at least one</option>
                  {temperamentA && temperamentA.map((temperament) => {
                    return (
                      <option key={temperament.id} value={temperament.name} className={style.label}>
                        {temperament.name} 
                      </option>
                    )
                  })}
                </select>
                </div>
                {error.temperament && (<p className={style.p}>{error.temperament}</p>)}
            </div>

            <div className={style.divUl}>
              <ul id="temperament" className={style.ul}>
                Temperamentos: 
                {form.temperament.map((temperamentId) => {
                  const selectedTemperament = temperamentA.find(
                    (temperament) => temperament.name === temperamentId
                    )
                    if (selectedTemperament) {
                      return (
                        <li key={selectedTemperament.id} className={style.li}> {selectedTemperament.name}
                        <button onClick={handlerDelete} value={selectedTemperament.name}className={style.botonX}>X</button>
                        </li>
                        )
                  } 
                  return null
                })}
              </ul>
            </div>
            <button type="submit" className={style.boton}>CREATE</button>

        </form>
      </div>
    )
}

export default Form