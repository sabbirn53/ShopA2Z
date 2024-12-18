import React from 'react'

const SelectedCategory = ({filterItem,setItem,Data,menuItems,setProducts,selectedCategory}) => {
  return (
    <div>
      <div className="widget-header">
        <h5 className="ms-2">All Category</h5>
      </div>
      <div>
        <button onClick={()=>setProducts(Data)} className={`m-2 ${selectedCategory === "All" ? 'bg-warning': ''}`}>All</button>
        {
            menuItems.map((val,id)=>{
                return(
                    <button className={`m-2 ${selectedCategory === val ? 'bg-warning': ''}`}
                    key={id}
                    onClick={()=>filterItem(val)} >
                        {val}
                    </button>
                )
            })
        }
      </div>
    </div>
  )
}

export default SelectedCategory
