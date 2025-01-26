import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({url}) => {
  const [list, setList] = useState([])
  
  const fetchingList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    console.log(response.data);

    if(response.data.succes){
      setList(response.data.data)
    } else {
      toast.error(response.data.message)
    }
  }

  const removeFood = async (id) => {
      const response = await axios.post(`${url}/api/food/remove`, {id: id});
      await fetchingList();
      if(response.data.succes){
        toast.success(response.data.message)
      } else {
        toast.error('Error')
      }
  }

  useEffect(() => {
    fetchingList();
  }, [])

  return (
    <div className="list add flex-col">
      <p>All food List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => (
            <div className="list-table-format" key={index}>
              <img src={`${url}/images/`+ item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <p className="cursor" onClick={() => removeFood(item._id)}>x</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default List