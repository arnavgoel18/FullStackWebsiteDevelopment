import React from 'react'
import Card1 from './card/Card1'
import Card2 from './card/Card2'

export default function Donor_card({type = 1,name,amount}) {
  if (type === 1) return <Card1 name={name} amount={amount}/>
  else return <Card2 name={name} amount={amount} />
}
