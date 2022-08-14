import React, { useState } from 'react'
import './ActionBar.css'

import Search from './assets/search.png'
import ArrowDown from './assets/arrow-down.png'

export default function ActionBar(props){
  let {
    searchFunction,
    selectedGender,
    onSelectGender,
    isOpen,
    setIsOpen,
    resetFilter
  } = props

  let [searchInput,setSearchInput] = useState('')


  const genderOptions = ['Male','Female']

  return(
    <div className='Container'>

      <div className='Action-wrapper'>
        <span className='Box-title'>
          Search
        </span>
        <div className='Row'>
          <input id='search-input' className='Input' onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder='Search...'/>
          <img onClick={()=>searchFunction(searchInput)} className='Search-icon' src={Search} alt='search-icon' width={20} height={20}/>
        </div>
      </div>

      <div className='Action-wrapper'>
        <span className='Box-title'>
          Gender
        </span>
        <div className='Gender-select' onClick={()=>setIsOpen(!isOpen)}>
        <span className='Gender-selected'>
          {selectedGender}
        </span>
          <img className='Arrow-down-icon' src={ArrowDown} alt='arrow-down-icon' width={20} height={20}/>
        </div>
        {isOpen&&
        <ul className='Gender-options'>
          { genderOptions.map((gender)=>
          <li key={gender} className='List-item' onClick={()=>onSelectGender(gender)}>{gender}</li>
          )}
        </ul>}
      </div>

      <button className='Reset-button' type='button' onClick={()=>{resetFilter();setSearchInput('')}}>Reset Filter</button>
      
    </div>
  )
}