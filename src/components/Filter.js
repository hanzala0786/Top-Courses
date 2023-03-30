import React from 'react'

const Filter = (props) => {
    let filterData = props.filterData;
    let category = props.category;
    let setCategory = props.setCategory;

    function filterHandler(title) {
       setCategory(title);
    }
  return (
    <div className='w-[11/12] max-w-max flex justify-center space-x-4 py-4 flex-wrap gap-y-4 mx-auto'>
        {
            filterData.map( (data) => {
                return <button onClick= {() => filterHandler(data.title)}
                      className={`text-white bg-black py-1 px-2 border-2 rounded-md text-lg font-medium hover:bg-opacity-50 transition-all duration-300
                      ${category===data.title?
                      "bg-opacity-60 border-white":
                      "bg-opacity-40 border-transparent"}
                      `}
                      key={data.id}>{data.title}</button>
            })
        }
    </div>
  )
}

export default Filter