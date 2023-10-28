"use client"

import React from 'react'
import SearchManufacture from './SearchManufacture'

const SearchBar=()=> {
    const handelSearch=()=>{}
  return (
   <form className="searchbar" onSubmit={handelSearch}>
    <div className="searchbar__item">
        <SearchManufacture />
    </div>
   </form>
  )
}

export default SearchBar
