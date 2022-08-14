import React from 'react'
import './DataTable.css'

import LeftArrow from './assets/left-arrow.png'
import RightArrow from './assets/right-arrow.png'
import DownwardArrow from './assets/downward-arrow.png'
import UpwardArrow from './assets/upward-arrow.png'

export default function DataTable(props){
  let {
    data,
    nextPage,
    prevPage,
    page,
    sortFunction
  } = props

  return(
    <>
    {data &&
    <div className='Table-container'>
      <div className='Table-header'>
        <div className='Header-item-column'>
          Username
          <div className='Sort-icon-wrapper'>
            <img src={UpwardArrow} onClick={()=>sortFunction('login','asc','username')} alt='sort-up-icon' width={16} height={16}/>
            <img src={DownwardArrow} onClick={()=>sortFunction('login','desc','username')} alt='sort-down-icon' width={16} height={16}/>
          </div>
        </div>

        <div className='Header-item-column'>
          Name
          <div className='Sort-icon-wrapper'>
            <img src={UpwardArrow} onClick={()=>sortFunction('name','asc','first')} alt='sort-up-icon' width={16} height={16}/>
            <img src={DownwardArrow} onClick={()=>sortFunction('name','desc','first')} alt='sort-down-icon' width={16} height={16}/>
          </div>
        </div>
        <div className='Header-item-column'>
          Email
          <div className='Sort-icon-wrapper'>
            <img src={UpwardArrow} onClick={()=>sortFunction('email','asc')} alt='sort-up-icon' width={16} height={16}/>
            <img src={DownwardArrow} onClick={()=>sortFunction('email','desc')} alt='sort-down-icon' width={16} height={16}/>
          </div>
        </div>
        <div className='Header-item-column'>
          Gender
          <div className='Sort-icon-wrapper'>
            <img src={UpwardArrow} onClick={()=>sortFunction('gender','asc')} alt='sort-up-icon' width={16} height={16}/>
            <img src={DownwardArrow} onClick={()=>sortFunction('gender','desc')} alt='sort-down-icon' width={16} height={16}/>
          </div>
        </div>
        <div className='Header-item-column'>
          Registered Date
          <div className='Sort-icon-wrapper'>
            <img src={UpwardArrow} onClick={()=>sortFunction('registered','asc','date')} alt='sort-up-icon' width={16} height={16}/>
            <img src={DownwardArrow} onClick={()=>sortFunction('registered','desc','date')} alt='sort-down-icon' width={16} height={16}/>
          </div>
        </div>
      </div>
      {data.map((item,index)=>{
        return(
      <div key={index} className='Table-row'>
        <div className='Item-column'>{item.username}</div>
        <div className='Item-column'>{item.name.first} {item.name.last}</div>
        <div className='Item-column'>{item.email}</div>
        <div className='Item-column'>{item.gender}</div>
        <div className='Item-column'>{item.registered}</div>
      </div>
        )}
      )}

      <div className='Pagination-wrapper'>
        <button onClick={prevPage} className='Pagination-button' disabled={page===1}>
          <img src={LeftArrow} alt='left-arrow-icon' width={24} height={24}/>
        </button>
        <button className='Pagination-button__selected' disabled>
          {page}
        </button>
        <button onClick={nextPage} disabled={data.length < 5} className='Pagination-button'>
          {page+1}
        </button>
        <button onClick={nextPage} disabled={data.length < 5}  className='Pagination-button'>
          <img src={RightArrow} alt='right-arrow-icon' width={24} height={24}/>
        </button>
      </div>
    </div>
    }
    </>
  )
}