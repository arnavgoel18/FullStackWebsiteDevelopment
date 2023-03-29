import React from 'react'
import './Styles.css'
import Donor_card from './Donor_card'
import {FaSearch} from 'react-icons/fa'

export default function Contributers() {
  const searchContriName=()=>{
       console.log('hi')
  }
  return (
    <div className='sponsicompanies_bigbox'>
      <div className='margin-left-2rem'>
        <h2>
          our <span className='shaded-text'>Contributors</span>
        </h2>
        <div>
          <div className='flex justify-between top-contri-goats' >
            <Donor_card type={2} />
            <Donor_card type={2} />
            <Donor_card type={2} />
          </div>
          <div
            className='flex align-center'
            style={{ fontSize: '2rem'  }}
          >
            <span className='flex' style={{marginRight:'0.5rem'}}>
              <FaSearch />
            </span>
            <input
              className='contri-input-box'
              type='text'
              onkeyup={searchContriName}
              placeholder='Search for names..'
              title='Type in a name'
            ></input>
          </div>
          <ul className='contri-list'>
            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />

            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />
            <Donor_card type={1} />
          </ul>
        </div>
      </div>
    </div>
  )
}
