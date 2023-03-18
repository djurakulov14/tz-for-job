import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { BsPhoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Line = ({title, id}) => {
  return (
    <li className=" ">
        <Link to={"/oplata/" + id}>
            <div className="flex justify-between items-center cursor-pointer">
                <div className='flex items-center gap-3' >
                    <div className=' w-8 h-8 bg-gray-800 rounded-full flex justify-center items-center' ><BsPhoneFill color='white'/></div>
                    <h3 className=' text-xl'>{title}</h3>
                </div>
                <MdKeyboardArrowRight size={35}/>
            </div>
        </Link>
    </li>
  )
}

export default Line