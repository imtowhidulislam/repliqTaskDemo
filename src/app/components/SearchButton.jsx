import React, { useEffect, useRef, useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import {RxCross1} from "react-icons/rx"

const SearchButton = () => {
    const focusSearch = useRef(null);
    const [searchInput,setSearchInput] = useState({search:""});
    const [searchValue , setSearchValue] = useState([]);

    const handleChange = (e) => {
        const {name,value} = e.target;
        setSearchInput({...searchInput, [name]:value});
    }
    const handleSumbit = (e) => {
        e.preventDefault();
        if(searchInput.search) {
            const id = new Date().getTime().toString();
            const newSearch = {...searchInput,id};
            setSearchValue([...searchValue,newSearch]);
            setSearchInput({search : ""})
        } 
    }

    useEffect(() => {
        focusSearch.current.focus();
    },[searchInput])

    const deleteSearchText = () => {
        setSearchInput({search : ""})
    }

  return (
    <div className='flex items-center justify-between border border-lime-800 rounded-full overflow-hidden'>
        <form className='flex items-center justify-center' onSubmit={handleSumbit}>
            <input type='text' id='searchInput' ref={focusSearch} name='search' value={searchInput.search} onChange={handleChange} placeholder='search' className='w-full lg:w-full placeholder:capitalize bg-transparent pl-4 border-none outline-none placeholder:text-[#222]'>
            </input>
            <div className={`flex items-center justify-center px-2 transition-all duration-150 ease-in-out ${searchInput.search ? 'visible':'collapse'}`}>
                <button type='submit' onClick={deleteSearchText}>
                    <span className='text-xl font-bold'><RxCross1 /></span>
                </button>
            </div>
        </form>
        <div className='border-l border-gray-400 h-full py-2 px-2 lg:px-5 bg-transparent cursor-pointer hover:bg-lime-800 transition-all duration-200 ease-in-out hover:text-gray-50'>
            <span className='text-xl font-bold'><AiOutlineSearch /></span>
        </div>
    </div>
  )
}

export default SearchButton