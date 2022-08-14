import React from 'react';
import './App.css';

import ActionBar from './ActionBar';
import { useEffect, useMemo, useState,useReducer } from 'react';
import DataTable from './DataTable';

function App() {
  let [data,setData]=useState([])
  let [selectedGender,setSelectedGender]=useState('All')
  let [isOpen,setIsOpen] = useState(false)
  let [currentPage,setCurrentPage] = useState(1)
  let [_, forceUpdate] = useReducer((x) => x + 1, 0);

  const fetchFunction = (page,gender) => {
    fetch(`https://randomuser.me/api/?page=${page?page:1}${gender?`&gender=${gender.toLowerCase()}`:''}&results=5`)
    .then((response)=>response.json())
    .then((data)=>{setData(data.results)})
  }

  useEffect(()=>{
    fetchFunction()
  },[])

  const filteredData = useMemo(() => {
    if(data){
      const tempData=[...data]
      let newTempData = tempData.map((data)=>{
        let date = new Date(data.registered.date)
        let newDate = ("0" + date.getDate()).slice(-2) + "-" + ("0"+(date.getMonth()+1)).slice(-2) + "-" +
        date.getFullYear() + " " + ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
    
        return ({
          'username':data.login.username,
          'name':data.name,
          'email':data.email,
          'gender':data.gender,
          'registered':newDate
        })
      })
      return newTempData
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[data,_])

  const nextPage = () => {
    fetchFunction(currentPage+1,selectedGender !== 'All' && selectedGender)
    setCurrentPage(currentPage+1)
  }

  const prevPage = () => {
    fetchFunction(currentPage-1,selectedGender !== 'All' && selectedGender)
    setCurrentPage(currentPage-1)
  }

  const search = (input) => { 
    const tempData = [...data]
    const filterByName = tempData.filter((item)=>{
      return(
        item.name.first.concat(' ',item.name.last).toLowerCase().includes(input)
      )
    })
    const filterByUsername= tempData.filter((item)=>{
      return item.login.username.toLowerCase().includes(input)
    })
    const filterByEmail= tempData.filter((item)=>{
      return item.email.includes(input)
    })

    const finalArray = [...filterByName,...filterByUsername,...filterByEmail]
    const finalFilter =[...new Map(finalArray.map(item => [item['email'], item])).values()]
    setData(finalFilter)
  }

  const onSelectGender = (gender) => {
    fetchFunction(1,gender)
    setCurrentPage(1)
    setSelectedGender(gender)
    setIsOpen(false)
  }

  const resetFilter = () => {
    fetchFunction()
    setSelectedGender('All')
    setIsOpen(false)
  }

  //Note: optional needed for nested variable
  const sortFunction = (category,sort,optional) => {
    function compareDate(a,b){
      if(sort==='desc'){
        return Number(new Date(a.registered.date)) - Number(new Date(b.registered.date))
      } else {
        return Number(new Date(b.registered.date)) - Number(new Date(a.registered.date))
      }
    }
    function compare( a, b ) {
      if(optional){
        if ( a[`${category}`][`${optional}`] < b[`${category}`][`${optional}`] ){

          return sort === 'asc' ? -1 : 1;
        }
        if ( a[`${category}`][`${optional}`] > b[`${category}`][`${optional}`] ){
          return sort === 'asc' ? 1 : -1;
        }
        return 0;
      }
      if ( a[`${category}`] < b[`${category}`] ){
        
        return sort === 'asc' ? -1 : 1;
      }
      if ( a[`${category}`] > b[`${category}`] ){
        return sort === 'asc' ? 1 : -1;
      }
      return 0;
    }

  let newData = optional === 'date' ? data.sort(compareDate) : data.sort( compare );
  setData(newData)
  forceUpdate()
  }

  return (
    <div className="App">
      <ActionBar 
      searchFunction={search} 
      selectedGender={selectedGender}
      onSelectGender={onSelectGender}
      setIsOpen={setIsOpen}
      isOpen={isOpen}
      resetFilter={resetFilter}
      />
      <DataTable
      data={filteredData}
      nextPage={nextPage}
      prevPage={prevPage}
      page={currentPage}
      sortFunction={sortFunction}
      />
    </div>
  );
}

export default App;
