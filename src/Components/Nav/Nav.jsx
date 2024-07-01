import { Fragment, useContext, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Badge,
  Button,
  InputBase,
  Paper,
  Typography,
  useTheme,
} from "@mui/material";
import { Link, NavLink, useNavigate } from "react-router-dom";

import CartItems from "./CartItems";

import WishlistItems from "./Wishlist";
import Usermenu from "./Usermenu";
import NotificationButton from "shared/ui/Navbar/ActionsRight/NotificationButton";
import AvatarButton from "shared/ui/Navbar/ActionsRight/AvatarButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const auth = localStorage.getItem("token");
  const nav = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const theme = useTheme();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Workshops", href: "/workshops" },

    { name: "Courses", href: "/courses" },
  ];

  const Auth = [
    { name: "Login", href: "/signin" },
    { name: "Register", href: "/signup" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [icon, seticon] = useState("");

  const handleSearchSubmit = () => {
    if (searchQuery.trim() !== "") {
      nav(`/search/${searchQuery}`);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };
  const ToggleFunc = (item) => {
    setIsOpen(!isOpen);
    seticon(item);
  };

  return (
    <Disclosure
      as="nav"
      className="bg-gray-900"
      style={{ backgroundColor: theme.palette.background.paper }}
    >
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
                <div
                  className="flex flex-shrink-0 items-center cursor-pointer"
                  onClick={() => nav("/")}
                >
                  <Typography variant="h5" color={"primary.main"}>
                    Eduvation
                  </Typography>
                </div>
                <div className="hidden sm:ml-4 sm:block">
                  <div className="flex  flex-row justify-between items-center  space-x-8">
                    {navigation.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={({ isActive }) =>
                          (isActive ? "text-white" : "text-gray-300") +
                          " p-2 rounded-md  font-medium "
                        }
                      >
                        {item.name}
                      </NavLink>
                    ))}

                    <div className="">
                      <Paper
                        component="form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          handleSearchSubmit();
                        }} // Handle form submit
                        sx={{
                          alignItems: "center",
                          borderRadius: "15px",
                          mx: 10,
                        }}
                      >
                        <InputBase
                          sx={{ px: "2rem" }}
                          placeholder="Search...."
                          inputProps={{
                            "aria-label": "search google maps",
                            value: searchQuery,
                            onChange: handleInputChange,
                          }}
                        />
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

                {auth ? (
                  <>
                    <div className="hidden sm:ml-4 sm:block ">
                      <div className="flex gap-1 items-center">
                        <CartItems />
                        <WishlistItems />
                        {/* <Badge badgeContent={1} color="primary">
                          <Link
                            key="notefication"
                            className={classNames(
                              "text-gray-300 hover:bg-gray-700   hover:text-white",
                              "rounded-md  sm:px-2  text-sm font-medium"
                            )}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                              />
                            </svg>
                          </Link>
                        </Badge> */}
                        <NotificationButton />
                      </div>
                      {isOpen}
                    </div>

                    {/* <Usermenu /> */}
                    <AvatarButton />
                  </>
                ) : (
                  <div className="flex  flex-row  space-x-1">
                    {Auth.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          "text-slate-50 ",
                          "rounded-md px-1 py-3 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </NavLink>
                    ))}
                  </div>
                )}
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
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-slate-50 hover:text-gray-900 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
