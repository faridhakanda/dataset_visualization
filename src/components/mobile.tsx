'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const MobileResponsive = () => {
    const dashboards = [
        {
            id: 1,
            title: 'Dashboard',
            url: '/',
            image: '/dashboard.png'
        },
        {
            id: 2,
            title: 'Intensity',
            url: '/intensity',
            image: '/intensity.png'
        },
        {
            id: 3,
            title: 'Likelihood',
            url: '/likelihood',
            image: '/likelihood.png'
        },
        {
            id: 4,
            title: 'Relevance',
            url: '/relevance',
            image: '/relevance.png',
        },
        {
            id: 5,
            title: 'Year',
            url: '/year',
            image: '/year.png'
        },
        {
            id: 6,
            title: 'Country',
            url: '/country',
            image: '/country.png'
        },
        {
            id: 7,
            title: 'Topic',
            url: '/topic',
            image: '/topic.png'
        },
        {
            id: 8,
            title: 'Region',
            url: '/region',
            image: '/region.png'
        },
        {
            id: 9,
            title: 'City',
            url: '/city',
            image: '/city.png'
        }
    ];
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
            url: '/',
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
    const [isOpen, setOpen] = useState(false);
    const [isUser, setUser] = useState(false);
    const [isLight, setLight] = useState(false);
    const [isSearch, setSearch] = useState(false);
    
    const toggleOpen = () => {
        setOpen(!isOpen);
    }
    const toggleUser = () => {
        setUser(!isUser);
    }
    const toggleLight = () => {
        setLight(!isLight);
    }
    const toggelSearch = () => {
        setSearch(!isSearch);
    }
  return (
    <div className="mt-10">
        {/* Header nav bar section */}
        <div className="flex justify-between pl-8 pr-8 bg-slate-100 p-3">
            <div onClick={toggleOpen}>
                {!isOpen ? 
                    <Image src="/menu.png" alt="menu" width="32" height="32" /> : <Image src="/cross.png" alt="cross" width="32" height="32" />
                }
            </div>
            <div className="flex gap-3">
                <div onClick={toggelSearch} className="">
                    <Image src="/search.png" alt="search" width="32" height="32" />
                </div>
                <div onClick={toggleLight}>
                    {isLight ? 
                        <Image src="/light.png" alt="light" width="30" height="30" /> :
                        <Image src="/dark.png" alt="dark" width="30" height="30" />
                    }
                </div>
                <div onClick={toggleUser}> 
                    <Image src="/user.png" alt="user" width="32" height="32" />
                </div>
            </div>
        </div>
        {/* Header panel section for link */}
        <div className="flex justify-between">
            <div className="float-left">
                {isOpen && ( 
                    <div className="mt-1 ml-1 w-48 h-full rounded-md text-start bg-slate-100">
                        {
                            dashboards.map(item => {
                                return (
                                    <div className="flex flex-col p-2 pl-5">
                                        <Link className="flex gap-3" onClick={toggleOpen} key={item.id} href={item.url}>
                                            <Image src={item.image} alt={item.title} width="24" height="24" />
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </div>
            <div className="">
                {isSearch && (
                    <div className="mt-1 w-64 h-full bg-slate-100 p-4 rounded-md">
                        {
                            searchItems.map(item => {
                                return (
                                    <div className="p-4 hover:bg-white rounded-full">
                                        <Link onClick={toggelSearch} key={item.id} href={item.url}>
                                            {item.title}
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </div>
                )}
            </div>
            <div className="float-right">
                <div className="flex bg-slate-100 rounded-md mt-1 mr-1">
                    {isUser && (
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

export default MobileResponsive