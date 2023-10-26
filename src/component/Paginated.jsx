import { useState } from 'react';
import style from '../styles/Paginated.module.css';

const Paginated = ({ dogs2, quantityDogs, page, prevHandler, nextHandler }) => {
    const numPage = []

    for (let i = 1; i <= Math.ceil(dogs2 / quantityDogs); i++) {
      numPage.push(i)
    }

    const [selectedNumber, setSelectedNumber] = useState(1)

    const handleClick = (number) => {
      setSelectedNumber(number)
      page(number)
    }

    const handlePrevClick = () => {
      if (selectedNumber > 1) {
          setSelectedNumber(selectedNumber - 1);
          prevHandler();
      }
    }

    const handleNextClick = () => {
      if (selectedNumber < numPage.length) {
          setSelectedNumber(selectedNumber + 1);
          nextHandler();
      }
    }

  return (
    <div className={style.nav}>
      <button className={style.butti} onClick={handlePrevClick}>
        {"🡰"}
      </button>
      <div className={style.contdiv}>
        {numPage &&
          numPage.map((number) => (
            <div
              key={number}
              onClick={() => handleClick(number)}
              className={`${style.contmap} ${selectedNumber === number ? style.focus : ''}`}
            >
              {number}
            </div>
          ))}
      </div>
      <button className={style.buttd} onClick={handleNextClick}>
        {"🡲"}
      </button>
    </div>
  )
}

export default Paginated