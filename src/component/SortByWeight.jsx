import { useDispatch } from "react-redux";
import { sortByWeight } from "../redux/actions";
import { useState } from "react";
import style from '../styles/Filters.module.css'

const SortByWeight = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("");

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;
    setOrder(selectedOrder);

    dispatch(sortByWeight(selectedOrder))
  };

  return (
    <div className={style.sortByWeight}>
      <select onChange={handleOrderChange} className={style.select}>
        <option value="default">Sort by Weight</option>
        <option value="asc">ASCENDING</option>
        <option value="desc">DESCENDING</option>
      </select>
    </div>
  );
};

export default SortByWeight;
