import { Fragment, useContext, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import { Badge, Button, InputBase, Paper, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useThemeContext } from 'Context/theme-context.tsx'

import { allContext } from 'Context/Context'
import CartItems from './CartItems'

import CoursesOpetion from './CoursesOpetion'
import WishlistItems from './Wishlist'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
    const auth=localStorage.getItem("token")
    const [searchQuery, setSearchQuery] = useState(""); 
    const { theme: themeMode, toggleTheme } = useThemeContext();
    const { image } =
    useContext(allContext);
  
    const navigation = [
        { name: 'Home', href: '/', current: false },
      
      ]
      
    
      const Auth=[
          {name:'Login',href:'/signin'},
          {name:'Register',href:'/signup'},
      
      ]
     let nav=useNavigate()
     const [isOpen, setIsOpen] = useState(false)
     const [icon, seticon] = useState('')

    
    const handleSearchSubmit = () => {
      if (searchQuery.trim() !== "") {
       
        nav(`/search/${searchQuery}`)
      }
    };
  
    const handleInputChange = (e) => {
      setSearchQuery(e.target.value);
    };
   const ToggleFunc=(item)=>{
    setIsOpen(!isOpen) 
    seticon(item)
   }
   let signout=()=>{
    localStorage.removeItem('token')
    // localStorage.removeItem('cart')
    nav('/signin')
   }
  return (
    <Disclosure as="nav" className="bg-gray-900">
      {({ open }) => (
        <> 
       
       
          <div className="mx-auto max-w-7xl px-1 sm:px-2 lg:px-6">
            <div className="relative flex h-16 items-center justify-around">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
               
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center cursor-pointer" onClick={()=>nav("/")}>
                 <Typography variant="h5"  color={'primary.main'} >Eduvation</Typography>
                </div>
                <div className="hidden sm:ml-4 sm:block">
                  <div className="flex  flex-row justify-between  space-x-4">
                    {navigation.map((item) => (
                       
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <CoursesOpetion />
                <div  >
                <Paper
     
     component="form"
     onSubmit={(e) => { e.preventDefault(); handleSearchSubmit(); }} // Handle form submit
     sx={{ alignItems: 'center',borderRadius: '15px',mx:10 }}
   >
   
     <InputBase
       sx={{ px:5 }}
       placeholder="Search...."
       inputProps={{ 'aria-label': 'search google maps', value: searchQuery, onChange: handleInputChange }}
     />
 
     {/* <IconButton type="submit" aria-label="search">
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

     </IconButton> */}
   </Paper>
                </div>

                  </div>
              
                </div>
                
              </div>
             
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
             
             
              {/* <IconButton
          
          aria-label="theme mode"
          onClick={() => toggleTheme()}
        >
          {themeMode === "dark" && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
         
          )}
          {themeMode !== "dark" && (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
        
          )}
        </IconButton> */}
         
    
              {auth?
                 <>
                  <div className="hidden sm:ml-4 sm:block " >
                    <div className="flex gap-1">
                   
                     <CartItems />
                     <WishlistItems />
                     <Badge badgeContent={1} color="primary">
                    <Link
                   
                    key='notefication'
                    className={classNames(
                      'text-gray-300 hover:bg-gray-700   hover:text-white',
                      'rounded-md  sm:px-2  text-sm font-medium'
                    )}
                  
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
                  </Link>
                    </Badge>
                 
                    
                   
                    </div>
                    {isOpen}
                    </div>
                      <Menu as="div" className="relative ml-3">
                      <div>
                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                          <span className="absolute -inset-1.5" />
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            
                            src='https://source.unsplash.com/random'
                          />
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/profile'
                                className={classNames(active ? 'bg-gray-100' : '', ' px-4 py-2 text-sm flex text-gray-700')}
                              >
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
</svg>
    Your Profile
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/mycourse'
                                className={classNames(active ? 'bg-gray-100' : '', 'flex px-4 py-2 text-sm text-gray-700')}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
</svg>

                                My Courses
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to='/mycourse'
                                className={classNames(active ? 'bg-gray-100' : '', 'flex px-4 py-2 text-sm text-gray-700')}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>


Certification
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/setting"
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                              >
                                Settings
                              </Link>
                            )}
                          </Menu.Item>
                          <div className="border-t border-gray-200 px-4 py-1 sm:px-6"></div>
                        
                        </Menu.Items>
                      </Transition>
                    </Menu>
                 </>
                
                :
                    <div className="flex  flex-row  space-x-2">
                    {Auth.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-4 py-2 text-sm font-medium'
                        )}
                      
                      >
                        {item.name}
                      </Link>
                    ))}
                    </div>
                    }
                   
                  
              
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
