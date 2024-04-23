import React from 'react'
import { Link } from 'react-router-dom'
import { baseImgUrl } from '../../helpers/functions-general'

const HomeCards = ({item}) => {
  return (
    <div className={`flex h-full mb-10 ${item.isImgContent ? "" : "flex-row-reverse"} ${item.bg}`}>
        <img src={`${baseImgUrl}/${item.img}`} alt="" className='w-1/2 object-cover'/>
        <div className="content w-1/2 h-full flex flex-col text-center justify-center items-center text-center self-center p-10">
            <h2>{item.title}</h2>
            <p className='text-2xl max-w-[500px] mx-auto mb-6'>{item.content}</p>
            <Link to={`${item.link}`} className='btn btn-outline'>{item.linkLabel}</Link>
        </div>
    </div>
  )
}

export default HomeCards