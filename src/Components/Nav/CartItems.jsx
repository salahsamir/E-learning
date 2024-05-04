import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { Badge, Divider } from '@mui/material'
import { Link } from 'react-router-dom'
import { allContext } from 'Context/Context'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CartItems() {
  const {cart}=useContext(allContext)
  // console.log(cartdata);
  let cartdata=[
    {img:"https://source.unsplash.com/random",
      name:"Reactjs+typescript+redux",
      instructor:"john Deo",
      price:"$100.00",

    },
    {img:"https://source.unsplash.com/random",
    name:"Reactjs+typescript+redux",
    instructor:"john Deo",
    price:"$100.00",

  },
  {img:"https://source.unsplash.com/random",
  name:"Reactjs+typescript+redux",
  instructor:"john Deo",
  price:"$100.00",

}
  ]
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 ">
      <Badge badgeContent={cart} color="primary">
                    <div 
                   
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700   hover:text-white',
                      'rounded-md  sm:px-2  text-sm font-medium'
                    )}
                  
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
        </svg>
                  </div>
                    </Badge>
          
        </Menu.Button>
      
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-80 p-2 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <h4 className="text-md font-medium text-slate-50 pb-2">Shopping Cart</h4>
            <Divider style={{ margin: "4px", backgroundColor: "white" }} />
            {cartdata?.map((ele, index) => (
  <div key={index}>
    <Menu.Item>
      <div className='flex gap-x-2 shadow-lg p-1'>
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img src={ele.img} alt="Random" className="h-20 w-20 flex-1 rounded-md object-cover object-center" />
        </div>
        <div className='flex-2'>
          <p className="text-md font-medium text-slate-200 m-0">{ele.name}</p>
          <p className="text-سة font-medium text-slate-500 py-1 m-0">{ele.instructor}</p>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-300 m-0">{ele.price}</p>
            <button className="text-sm rounded-lg text-slate-100 hover:bg-green-500 border border-slate-100 p-1 hover:text-slate-200 cursor-pointer m-0">Remove</button>
          </div>

        </div>
      
      </div>
    </Menu.Item>
    {index < cartdata.length - 1 && <Divider style={{ margin: "3px", backgroundColor: "white" }} />}

  </div>
))}
            <div className=" px-4 py-2 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-slate-200">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <div className="mt-1">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md  text-white px-6 py-2 text-base font-medium hover:bg-green-500 border border-slate-100 shadow-sm "
                        >
                          Checkout
                        </a>
                      </div>
                      </div>


          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
