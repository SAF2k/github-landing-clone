'use client'

import Link from 'next/link'
import { useState } from 'react'

type Props = {}

const OpenSourceNav = () => {
  const [show, setShow] = useState<boolean>(false)

  const handleOnClick = () => {
    if (window.innerWidth < 1024) {
      setShow(!show)
    }
  }

  const handleOnMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setShow(true)
    }
  }

  const handleOnMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setShow(false)
    }
  }

  return (
    <li
      id="myLi"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <button
        onClick={handleOnClick}
        type="button"
        className={`flex items-center p-1 transition ease-in duration-150 rounded max-lg:justify-between max-lg:font-semibold max-lg:w-full ${
          show ? 'lg:text-neutral-300' : ''
        }`}
      >
        Open Source
        <svg
          opacity="0.5"
          aria-hidden="true"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          version="1.1"
          width="16"
          data-view-component="true"
          className={`octicon octicon-chevron-down HeaderMenu-icon ml-1 transition-all ease-in duration-200  max-lg:scale-x-125 ${
            show
              ? 'lg:mt-2 opacity-40 max-lg:rotate-0'
              : 'mt-0 max-lg:-rotate-90'
          }`}
        >
          <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
        </svg>
      </button>
      <div
        className={`relative lg:absolute rounded -ml-5 bg-neutral-50 lg:py-2 p-6 w-[320px] transition ease-in duration-150 ${
          show ? 'opacity-100 visible' : 'opacity-0 hidden'
        }`}
      >
        <div className="lg:border-b-[1px] mb-4 pb-3 pt-4 w-full">
          <h2 className="text-neutral-800 font-semibold text-base hover:text-blue-600 hover:cursor-pointer">
            GitHub Sponsors
          </h2>
          <p className="text-sm font-normal text-neutral-500">
            Fund open source developers
          </p>
        </div>
        <div className="lg:border-b-[1px] mb-2 pb-3 pt-0 w-full">
          <h2 className="text-neutral-800 font-semibold text-base hover:text-blue-600 hover:cursor-pointer">
            The ReadMe Projects{' '}
          </h2>
          <p className="text-sm font-normal text-neutral-500">
            GitHub community articles
          </p>
        </div>
        <div className="mb-2 pb-0 pt-2 w-full">
          <p className="text-neutral-800 font-semibold text-base">
            Repositories
          </p>
          <ul className="text-sm text-neutral-500 mt-1 w-full">
            <li>
              <Link href="" className="block py-2 hover:text-blue-600">
                Topics
              </Link>
            </li>
            <li>
              <Link href="" className="block py-2 hover:text-blue-600">
                Trending
              </Link>
            </li>
            <li>
              <Link href="" className="block py-2 hover:text-blue-600">
                Collections
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default OpenSourceNav
