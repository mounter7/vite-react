import React, { Fragment } from 'react'

export default function SearchResult({ name, key }) {
    return (
        <Fragment>
            <input type="hidden" value={key} />
            <li className='p-1 hover:bg-[#eac5ff] bg-gray-200 border-b-[1px] border-gray-300 text-black mx-2' onClick={e => console.log(name)} >{name}</li>
        </Fragment>
    )
}
