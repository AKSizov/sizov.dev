import '../styles/globals.css'
import '../styles/devices.min.css'
import Image from 'next/image'
import se3 from '../public/icon.svg'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("flowbite");
  }, []);
  return (
    <>
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.css" rel="stylesheet" /> */}
      <div className="background -z-10 brightness-50">
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span>
      </div>
      <nav className="px-4 py-2 bg-brightness-50 backdrop-blur fixed z-20 top-0 left-0 right-0 border-neutral-600">
        <div className="flex flex-wrap items-center justify-between">
          <a href="" className="flex items-center">
            <Image src={se3} className="h-6 w-6 mr-3 sm:h-9 sm:w-9" alt="Sizov.dev Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Sizov.dev</span>
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 border-neutral-700">
              <li>
                <Link href="/" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-neutral-400 md:hover:text-white hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">Home</Link>
              </li>
              <li>
                <Link href="about" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-neutral-400 md:hover:text-white hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">About</Link>
              </li>
              <li>
                <Link href="about#resume" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-neutral-400 md:hover:text-white hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='h-16 backdrop-brightness-50'></div>
      <Component {...pageProps} />
      <footer className="text-neutral-400 bg-neutral-900 body-font">
        <div className="container px-5 py-4 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <Image src={se3} alt="Sizov.dev logo" className="w-10 h-10 p-2" />
            <span className="ml-3 text-xl">Sizov.dev</span>
          </a>
          <p className="text-sm text-neutral-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-neutral-800 sm:py-2 sm:mt-0 mt-4">© 2023 Sizov.dev
            {/* <a href="https://twitter.com/knyttneve" className="text-neutral-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a> */}
          </p>
          {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-neutral-400">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-neutral-400">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-neutral-400">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-neutral-400">
                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span> */}
        </div>
      </footer>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.3/flowbite.min.js" defer></script>
    </>)
}
