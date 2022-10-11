
import React from 'react'
import { Fragment } from 'react';
import {logo} from "../assets"
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
// import { useRouter } fm 'next/router';
// import Link from 'next/link';
import {useState} from 'react'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export const Navbar = () => {
  return (
    <div>
        <Disclosure as="nav" className="bg-orange-600 py-[5px] shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-[62px]">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden  h-20 w-auto text-black"
                    src={Logo.src}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-24 w-auto"
                    src={Logo.src}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link href={`/`}>
                    <a
                      href="#"
                      className={`border-transparent text-white hover:border-black hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        router.pathname === '/'
                          ? 'border-b-2 border-black'
                          : 'hover-underline-animation'
                      }`}
                    >
                      HOME
                    </a>
                  </Link>
                  <Link href={`/workflow`}>
                    <a
                      href="#"
                      className={`border-transparent text-white hover:border-black hover:text-black inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        router.pathname === '/workflow'
                          ? 'border-b-2 border-black'
                          : 'hover-underline-animation'
                      }`}
                    >
                      WORKFLOW
                    </a>
                  </Link>
                  <Link href={`/contact`}>
                    <a
                      href="#"
                      className={`border-transparent text-white hover:border-black hover:text-black inline-flex items-center px-1 pt-1  text-sm font-medium ${
                        router.pathname === '/contact'
                          ? 'border-b-2 border-black'
                          : 'hover-underline-animation'
                      }`}
                    >
                      CONTACT US
                    </a>
                  </Link>
                  <Link href={`/leaderboard`}>
                    <a
                      href="#"
                      className={`border-transparent text-white hover:border-black hover:text-black inline-flex items-center px-1 pt-1  text-sm font-medium ${
                        router.pathname === '/leaderboard'
                          ? 'border-b-2 border-black'
                          : 'hover-underline-animation'
                      }`}
                    >
                      LEADERBOARD
                    </a>
                  </Link>
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black  focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Disclosure.Button
                className={` block pl-3 pr-4 py-2 text-base font-medium  w-11/12 m-auto rounded-md
                ${
                  router.pathname === '/'
                    ? 'bg-orange-50 border-orange-400 text-black'
                    : ''
                }
                `}
              >
                <Link href={`/`}>Home</Link>
              </Disclosure.Button>
              <Disclosure.Button
                className={`border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-11/12 m-auto rounded-md  ${
                  router.pathname === '/workflow'
                    ? 'bg-orange-50 border-orange-400 text-black'
                    : ''
                }`}
              >
                <Link href={`/workflow`}>Workflow</Link>
              </Disclosure.Button>
              <Disclosure.Button
                className={`border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-11/12 m-auto rounded-md  ${
                  router.pathname === '/contact'
                    ? 'bg-orange-50 border-orange-400 text-black'
                    : ''
                }`}
              >
                <Link href={`/contact`}>Contact Us</Link>
              </Disclosure.Button>
              <Disclosure.Button
                className={`border-transparent text-black hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium w-11/12 m-auto rounded-md  ${
                  router.pathname === '/leaderboard'
                    ? 'bg-orange-50 border-orange-400 text-black'
                    : ''
                }`}
              >
                <Link href={`/leaderboard`}>Leaderboard</Link>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      
        )}
    </Disclosure>
  );
    </div>
  )
}
export default Navbar;

