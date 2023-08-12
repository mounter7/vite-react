import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchbar = ({ setResults }) => {

    const [input, setInput] = useState("")

    const fetchData = (value) => {
        fetch('Data.json')
            .then(response => response.json())
            .then(data => {
                const results = data.filter(user => {
                    return value && user && user.age && user.name.toLowerCase().includes(value.toLowerCase())
                })
                setResults(results)
            })
    }

    const hanndleData = (value) => {
        setInput(value)
        fetchData(value)
    }

    return (
        <div className='max-w-[600px] sm:mx-auto flex items-center pl-4 my-4 rounded-full bg-white border border-gray-300 relative mx-2'>

            <input
                type="text"
                className="w-full p-2 outline-none focus-within:border-slate-900 bg-transparent" placeholder='Search'
                value={input}
                onChange={e => hanndleData(e.target.value)}
            />

            <FaSearch id="search-icon" className='text-xl text-slate-100 bg-[#000] h-[40px] py-3 w-[80px] cursor-pointer' />

        </div>

    )
}

export default Searchbar