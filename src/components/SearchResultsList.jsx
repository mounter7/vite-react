import React from 'react'
import SearchResult from './SearchResult'

export default function SearchResultsList({ results }) {
    return (
        <div className='relative'>
            <div className='my-2 w-full absolute'>
            <ul>
                {
                    results.map(({ key, name }) => {
                        return <SearchResult name={name} key={key} />
                    })
                }
            </ul>
        </div>
        </div>
    )
}
