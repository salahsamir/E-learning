import { useContext } from 'react'

import { allContext } from 'Context/Context'

import { useNavigate } from 'react-router-dom'



export default function Wishlist() {
   let nav=useNavigate()
   let {wishlistdata,RemoveFromWishlist}=useContext(allContext)
  return (
  <>

   <div className="my-4">
       <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {wishlistdata.map((ele) => (
                              <li key={ele._id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={ele.coverImageUrl}
                                    alt={ele.title}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-6 flex flex-1 flex-col">
                                  <div onClick={()=>{nav(`/courseDetails/${ele._id}`)}}>
                                    <div className="flex justify-between text-base font-medium text-white-700">
                                      <div className='w-56'>
                                      <h3>
                                        <a >{ele.title}</a>
                                      </h3>
                                      </div>
                                      <p className="ml-4">{ele.price}</p>
                                    </div>
                                  
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => RemoveFromWishlist(ele._id)}
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                  

                
  
  
  </>
  )
}
