import { useState } from 'react'
import './App.css'
import Searchbar from './components/Searchbar'
import SearchResultsList from './components/SearchResultsList'
import List from './components/List'

function App() {

  const [results, setResults] = useState([])

  return (
    <div className='max-w-[1280px] mx-auto'>
      <Searchbar setResults={setResults} />
      <SearchResultsList results={results} />
      <List />
    </div>
  )
}

export default App
