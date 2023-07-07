import { Fragment } from 'react'
import {Auth} from '../firebase-config'
import {useAuthState} from 'react-firebase-hooks/auth'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'CLIV·AI', href: '/', current: true },
    { name: 'Generate', href: '/generate', current: false },
    { name: 'Collections', href: '/collections', current: false },
    { name: 'Blog', href: '/blog-cliv', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const [user] = useAuthState(Auth)
    return (
        <Disclosure as="nav" className="border-[#F4F4F6] border-b-[1px] bg-[#FAFAFC]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-[#00000] duration-200 hover:text-[#999999]">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="cursor-pointer block h-8 w-auto lg:hidden"
                                        src="https://testing-red-xi.vercel.app/static/media/logo-nav.3d1d611fa171cabda657.png"
                                        alt="EntityAI"
                                    />
                                    <img
                                        className="cursor-pointer hidden h-8 w-auto lg:block"
                                        src="https://testing-red-xi.vercel.app/static/media/logo-nav.3d1d611fa171cabda657.png"
                                        alt="EntityAI"
                                    />

                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? 'text-base font-semibold	text-[#000000]' : 'text-base font-semibold text-[#777777] duration-200 hover:underline hover:text-[#999999]',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                {/*<button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>*/}

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                   
                      

                                        <Menu.Button className="flex rounded-full  text-sm focus:outline-none">
                                            <span className="sr-only">Open user menu</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 mt-1 justify-center text-[#000000] duration-200 hover:text-[#999999] inline-flex items-center w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://i.redd.it/rx2crm2cw7x71.png"
                                                alt="User"
                                            />
                                            
                                           
                                        </Menu.Button>
                                        

                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-200"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg shadow-gray-300 ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'duration-200 text-[#999999] bg-[#ECECF1]' : '', 'block px-4 py-2 text-sm border-[#F4F4F6] border-b-[1px] text-gray-700')}
                                                    >
                                                        your@email.com
                                                        
                                                          Username
                                                        
                                                        
                                                        <div className='ml-2 inline-flex items-center justify-center'>
                                                          Free Plan
                                                        </div>
                                                    </a>
                                                    
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'duration-200 text-[#999999] bg-[#ECECF1]' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Buy Credits
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'duration-200 text-[#999999] bg-[#ECECF1]' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        API Inferece
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'duration-200 text-[#999999] bg-[#ECECF1]' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        
                                                        href="#"
                                                        className={classNames(active ? 'duration-200 text-[#999999] bg-[#ECECF1]' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden ">
                        <div className="space-y-1 px-2 pb-3 pt-2 ">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'text-base font-semibold	 text-[#00000]' : 'text-base font-semibold text-[#777777] duration-200 hover:text-[#999999]',
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
