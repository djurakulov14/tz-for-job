import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Line from '../components/Line'

const FirstPage = () => {

    const [data, setData] = useState([])


    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/albums?userId=1")
            .then(res => setData(res.data))
    }, [])
    

  return (
    <div className='w-[500px] m-auto bg-white rounded-xl p-5'>
        <h1 className='text-3xl font-bold max-md:text-2xl mb-5'>Оплата услуг</h1>
        <ul className=' gap-2 flex flex-col'>
            {
                data.map(item => <Line key={item.id} {...item} />)
            }
        </ul>
    </div>
  )
}

export default FirstPage