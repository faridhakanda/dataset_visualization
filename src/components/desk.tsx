'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Desk = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isLight, setIsLight] = useState(false);
    const [isSearch, setSearch] = useState(false);
    const toggleSearch = () => {
        setSearch(!isSearch);
    }
    const toggleUser = () => {
        setIsOpen(!isOpen);
    }
    const toggleLight = () => {
        setIsLight(!isLight);
    }
    
    const users = [
        {
            id: 1,
            title: 'Profile',
            url: '/profile',
            image: '/profile.png'
        },
        {
            id: 2,
            title: 'Setting',
            url: '/setting',
            image: '/setting.png'
        },
        {
            id: 3,
            title: 'Pricing',
            url: '/pricing',
            image: '/dollar.png'
        },
        {
            id: 4,
            title: 'Bill',
            url: '/bill',
            image: '/bill.png'
        },
        {
            id: 5,
            title: 'FAQ',
            url: '/faq',
            image: '/faq.png'
        }
    ];
    const searchItems = [
        {
            id: 0,
            title: 'Dashboard',
            url: '/'
        },
        {
            id: 1,
            title: 'Sector',
            url: '/sector'
        },
        {
            id: 2,
            title: 'Topic',
            url: '/topic'
        },
        {
            id: 3,
            title: 'Region',
            url: '/region'
        },
        {
            id: 4,
            title: 'Country',
            url: '/country'
        },
        {
            id: 5,
            title: 'Pestle',
            url: '/pestle'
        },
        {
            id: 6,
            title: 'Source',
            url: '/source'
        },
        {
            id: 7,
            title: 'End Year',
            url: '/year'
        }

    ];
  return (
    <div className="">
        <div className="flex bg-slate-100 p-4 shadow-md justify-around">

            <div>
                <Link className="text-blue-800 text-xl animate-pulse" href="/">BlackCoffer</Link>
            </div>
            <div className="flex justifybetween gap-3">
                <div className="" onClick={toggleSearch}>
                    <Image src="/search.png" alt="search" width="32"  height="32" />
                </div>
                <div className="" onClick={toggleLight}>
                    {!isLight ? <Image src="/light.png" alt="light" width="30" height="30" /> : <Image src="/dark.png" alt="dark"  width="30" height="30" />}
                </div>
                <div>
                    <div className="" onClick={toggleUser}>
                        <Image className="" src="/user.png" alt="user" width="32" height="32" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-between">
            <div className="flex mx-auto mt-1">
                <div className="">
                    {isSearch && (
                        <div className="bg-slate-100 w-96 h-full p-4 rounded-md">
                            {
                                searchItems.map(item => {
                                    return (
                                        <div className="p-2 hover:bg-white rounded-full">
                                            <Link onClick={toggleSearch} key={item.id} href={item.url}>{item.title}</Link>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )}
                </div>
            </div>
            <div className="flex float-right mt-1 mr-4">
            
                
                <div className="flex bg-slate-100 rounded-md">
                    {isOpen && (
                        <div className="flex flex-col divide-y">
                            <div className="flex gap-2 p-4">
                                <div className="">
                                    <Image src="/user.png" alt="user" width="48" height="48" />
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-lg">David Melan</h1>
                                    <p className="text-sm">CEO &amp; Founder</p>
                                </div>       
                            </div>
                            <div className="flex p-4">
                                <div className="">
                                    {
                                        users.map(item => {
                                            return (
                                                <div className="p-4">
                                                    <Link className="flex gap-2" onClick={toggleUser} key={item.id} href={item.url}>
                                                        <Image src={item.image} alt={item.title} width="32" height="32" />
                                                        {item.title}
                                                    </Link>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                
                            </div>
                            <div className="p-4 flex bg-red-500 rounded-es-md rounded-ee-md">
                                <div className="mx-auto">
                                    <Link className="flex gap-4" href="/logout">
                                        <Image src="/logout.png" alt="logout" width="32" height="32" />
                                        Logout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
            </div>
        </div>
        
    </div>
  )
}

export default Desk