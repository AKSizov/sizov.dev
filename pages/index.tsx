import Head from 'next/head'
import Image from 'next/image'
import se3 from '../public/icon.svg'
import headerImage from '../public/mobile_app.svg'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import { Navbar } from "flowbite-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Quality, production ready code | Sizov.dev</title>
        <meta name="description" content="Create your next site with sizov.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-zinc-900 min-h-screen text-white ${inter.className} dark`}>
        <nav className="px-4 py-2.5 bg-zinc-900 fixed z-20 top-0 left-0 right-0 border-zinc-600">
          <div className="flex flex-wrap items-center justify-between">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image src={se3} className="h-6 w-6 mr-3 sm:h-9 sm:w-9" alt="Sizov.dev Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Sizov.dev</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-zinc-400 hover:bg-zinc-700 focus:ring-zinc-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-zinc-800 md:bg-zinc-900 border-zinc-700">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-zinc-400 md:hover:text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-zinc-400 md:hover:text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-zinc-400 md:hover:text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent">Pricing</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-zinc-400 md:hover:text-white hover:bg-zinc-700 hover:text-white md:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>


        <section className="bg-white dark:bg-gray-900 mt-14 lg:mt-18 p-8">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mx-auto lg:mx-0 lg:mr-auto place-self-center lg:col-span-7 text-center lg:text-start">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Production ready products</h1>
              <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Enter Your spec oe aoeuh oaeuth onetuh oeanut hnoaetu aoe uoate unaote uhnoaeu aoeunht aoentuhaon euhntaoe uhhuhu hu uh </p>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base bg-violet-600 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Use Cases
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Contact Me
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
            </div>
          </div>
        </section>

        <footer className="text-zinc-400 bg-zinc-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap md:text-left text-center order-first">
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-zinc-400 hover:text-white">First Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Second Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Third Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-zinc-400 hover:text-white">First Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Second Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Third Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
                <nav className="list-none mb-10">
                  <li>
                    <a className="text-zinc-400 hover:text-white">First Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Second Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Third Link</a>
                  </li>
                  <li>
                    <a className="text-zinc-400 hover:text-white">Fourth Link</a>
                  </li>
                </nav>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">SUBSCRIBE</h2>
                <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                  <form action="/send-data-here" className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start" method="post">
                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                      <label htmlFor="footer-field" className="leading-7 text-sm text-zinc-400">Placeholder</label>
                      <input type="text" id="footer-field" name="footer-field" className="w-full bg-zinc-800 rounded border bg-opacity-40 border-zinc-700 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500 text-base outline-none text-zinc-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                    </div>
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
                  </form>
                </div>
                <p className="text-zinc-500 text-sm mt-2 md:text-left text-center">Bitters chicharrones fanny pack
                  <br className="lg:block hidden" />waistcoat green juice
                </p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-800 bg-opacity-75">
            <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span className="ml-3 text-xl">Tailblocks</span>
              </a>
              <p className="text-sm text-zinc-400 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
                <a href="https://twitter.com/knyttneve" className="text-zinc-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-zinc-400">
                  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-zinc-400">
                  <svg fill="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </a>
                <a className="ml-3 text-zinc-400">
                  <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>
                <a className="ml-3 text-zinc-400">
                  <svg fill="currentColor" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
              </span>
            </div>
          </div>
        </footer>
        <script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"></script>
      </main>
    </>
  )
}
