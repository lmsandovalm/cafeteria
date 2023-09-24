import React from 'react'
import {useState,useEffect } from 'react'
import Layout from '../../Components/Layout'
import Card from '../../Components/Card'
import ProductDetail  from '../../Components/ProductDetail'

function Menu() {

  const [items, setItems] = useState(null)
  useEffect(() => {
    // https://fakeapi.platzi.com/
    fetch('https://kaoxdc.pythonanywhere.com/api/producto/')
    // fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => console.log(setItems(data)) )

  }, [])
  
  return (
    <>
      <Layout>
      <div className="bg-orange-300 rounded-lg text-lg text-red-950 m-2 px-3 py-0.5">
            Menu </div> 
        <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            { items?.map(item => (
                    <Card key={item.id} data = {item}/>
                ))
            }
        </div>
        <ProductDetail/>
      </Layout>
    </>
  )
}

export default Menu
