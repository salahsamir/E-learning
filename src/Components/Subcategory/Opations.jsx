import React, { Fragment, useEffect, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { BaseApi } from 'util/BaseApi';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Opetions({ onOptionSelect }) {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState();

  useEffect(() => {
    async function getallCategory() {
      try {
        const response = await axios.get(`${BaseApi}/category`);
        setOptions(response.data.category);
        options.unshift({ name: 'All', id: '' });
        if (response.data.category.length > 0) {
          setSelected(options[0]);
         
        }
      } catch (error) {
        console.log(error);
      }
    }
    getallCategory();
  }, []);

  return (
    <>
      {selected && (
        <>
         
          <Listbox value={selected} onChange={(selectedOption) => { setSelected(selectedOption); onOptionSelect(selectedOption); }}>
            {({ open }) => (
              <>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-32 cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <span className="block truncate">{selected.name}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>
                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {options.map((option) => (
                        <Listbox.Option
                          key={option._id}
                          className={({ active }) =>
                            classNames(active ? 'bg-indigo-600 text-white' : 'text-gray-900', 'relative cursor-default select-none py-2')
                          }
                          value={option}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex justify-between">
                                <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                  {option.name}
                                </span>
                              </div>
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </>
      )}
    </>
  );
}
