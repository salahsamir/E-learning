import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { Badge, Divider } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { allContext } from 'Context/Context'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function WishlistItems() {
  let nav=useNavigate()
  const {wishlist,wishlistdata,RemoveFromWishlist}=useContext(allContext)
  //  console.log(wishlistdata)
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
      <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-900 shadow-sm  ">
      <Badge badgeContent={wishlist} color="primary">
                    <div 
                   
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700   hover:text-white',
                      'rounded-md  sm:px-2  text-sm font-medium'
                    )}
                  
                  >
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
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
          
            {wishlistdata?.map((ele, index) => (
  <div key={index} className='cursor-pointer'>
    <Menu.Item>
      <div className='shadow-lg p-2'>
      <div className='flex gap-x-2 py-2 '>
        <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"  onClick={()=>{nav(`/courseDetails/${ele._id}`)}}>
          <img src={ele.coverImageUrl} alt="Random" className="h-20 w-20 flex-1 rounded-md object-cover object-center" />
        </div>
        <div className='flex-2'>
          <p className="text-md font-medium text-slate-200 m-0">{ele.title}</p>
          <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-slate-300 py-1 m-0">{ele.price} EGP</p>
          <p className="text-sm font-medium text-green-500 hov:text-green-300 py-1 m-0 cursor-pointer " onClick={() => RemoveFromWishlist(ele._id)}>Remove</p>
          </div>
        </div>
      </div>
          <button className="text-md rounded-lg m-auto border border-slate-50 text-slate-100 hover:bg-green-600 w-full   py-1 hover:text-slate-200 cursor-pointer ">Add to cart</button>
      
      </div>
    </Menu.Item>
    {index < wishlistdata.length - 1 && <Divider style={{ margin: "5px", backgroundColor: "white" }} />}

  </div>
))}
            

          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
