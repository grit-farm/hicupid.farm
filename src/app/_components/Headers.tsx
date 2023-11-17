'use client'

import { Suspense, useEffect, useState } from 'react'
import { fireAnalytics } from '@/lib/utils/firebase'
import Image from 'next/image'
import Link from 'next/link'
import Analytics from './Analytics'
import MetaInfo from './MetaInfo'
import Logo from '../../../public/images/logo.png'

const Headers = () => {
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    if (typeof window != undefined) {
      fireAnalytics
    }
  }, [])

  return (
    <>
      <Suspense>
        <Analytics />
        <MetaInfo />
      </Suspense>
      <header>
        <nav className=" border-gray-200 bg-white px-4 py-2.5 lg:px-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between ">
            <Link href="/" className="flex items-center">
              <h1 className="self-center whitespace-nowrap font-gangwonEdu text-xl font-semibold">
                <Image src={Logo} alt="HiCupid" height={64} />
              </h1>
            </Link>
            <div className="flex items-center md:hidden lg:order-2">
              <button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm lg:hidden"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => {
                  setToggle(!toggle)
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
            <div
              className={`${
                !toggle && 'hidden'
              } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
              id="mobile-menu"
            >
              <ul className="mt-4 flex flex-col font-medium text-primary lg:mt-0 lg:flex-row lg:space-x-8">
                <li className="flex items-center">
                  <Link
                    href="/about"
                    className="block w-full border-b  border-gray-100 py-2 hover:bg-gray-50 hover:font-bold lg:border-0 lg:p-0 lg:hover:bg-transparent "
                  >
                    하이큐피드 소개
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/columns"
                    className="block w-full border-b border-gray-100 py-2 hover:bg-gray-50 hover:font-bold lg:border-0 lg:p-0 lg:hover:bg-transparent "
                  >
                    칼럼
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/faq"
                    className="block w-full border-b border-gray-100 py-2 hover:bg-gray-50 hover:font-bold lg:border-0 lg:p-0 lg:hover:bg-transparent "
                  >
                    FAQ
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    href="/books"
                    className="block w-full border-b border-gray-100 py-2 text-secondary hover:bg-gray-50 hover:font-bold lg:border-0 lg:p-0 lg:hover:bg-transparent "
                  >
                    노하우 북
                  </Link>
                </li>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf2BJrNiC96O3wRM2ksr7ckdG2F1HVB3aP60N9H2MrqGZqOfQ/viewform"
                  target="_blank"
                >
                  <button className="rounded bg-primary px-2 py-2 text-white">
                    하이큐피드 무료 상담
                  </button>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Headers
