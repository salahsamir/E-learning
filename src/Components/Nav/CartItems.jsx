import { useContext, useState } from 'react'

import { allContext } from 'Context/Context'



export default function CartItems() {
  const [open, setOpen] = useState(true)
   let {cartdata,RemoveFromCart,createOrder}=useContext(allContext)
 
  return (
  <>

   <div className="my-8">
       <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartdata.map((ele) => (
                              <li key={ele.courseId} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src={ele.coverImageUrl}
                                    alt={ele.name}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-6 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-white-700">
                                      <div className='w-56'>
                                      <h3>
                                        <a >{ele.name}</a>
                                      </h3>
                                      </div>
                                      <p className="ml-4">{ele.price}</p>
                                    </div>
                                  
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    

                                    <div className="flex">
                                      <button
                                        type="button"
                                        onClick={() => RemoveFromCart(ele.courseId)}
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
                  

                    <div className="border-t border-gray-200 px-4 pt-3 sm:px-6">
                      
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                        onClick={() => createOrder()}
                         
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 cursor-pointer text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
  
  
  </>
  )
}
