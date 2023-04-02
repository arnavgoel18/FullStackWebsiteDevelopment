import React from 'react'
import './Styles.css'
import Donor_card from './Donor_card'
import {FaSearch} from 'react-icons/fa'
import { crowdFundingData } from './data'
import { useState,useEffect } from 'react'

export default function Contributers() {
    const [netData, setNetData] = useState(crowdFundingData)
    const [filteredList, setFilteredList] = useState(crowdFundingData)
    const filterBySearch = (event) => {
      // Access input value
      const query = event.target.value
      // Create copy of item list
      var updatedList = [...crowdFundingData]
      // Include all elements which includes the search query
      updatedList = updatedList.filter((item) => {
        return item[0].toLowerCase().indexOf(query.toLowerCase()) !== -1
      })
      // Trigger render with updated values
      setFilteredList(updatedList)
    }

  return (
    <div className='sponsicompanies_bigbox'>
      <div >
        <h2 className='flex top-contri-goats justify-center'>
          our <span className='shaded-text'>Top Contributors</span> 👏
        </h2>
        <div className='justify-between top-contri-goats flex'>
          {netData.map((item, index) =>
            index < 3 ? (
              <Donor_card
                type={2}
                key={index}
                name={item[0]}
                amount={item[1]}
              />
            ) : (
              <></>
            )
          )}
        </div>
      </div>
      <div className='margin-left-2rem'>
        <h2>
          our <span className='shaded-text'>Contributors</span>
        </h2>
        <div>
          <div className='flex align-center' style={{ fontSize: '2rem' }}>
            <span className='flex' style={{ marginRight: '0.5rem' }}>
              <FaSearch />
            </span>
            <input
              className='contri-input-box'
              type='text'
              onChange={filterBySearch}
              placeholder='Search for names..'
              title='Type in a name'
            ></input>
          </div>
          <ul className='contri-list'>
            {filteredList.map((item, index) => (
              <Donor_card
                type={1}
                key={index}
                name={item[0]}
                amount={item[1]}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
