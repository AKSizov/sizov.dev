import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import se3 from '../public/icon.svg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Quality, production ready code | Sizov.dev</title>
        <meta name="description" content="Create your next site with sizov.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-zinc-900 min-h-screen text-white">
        <header className="text-zinc-400 body-font fixed w-100 right-0 left-0 bg-[#242424cc] !backdrop-blur-md px">
          <div className="flex flex-wrap p-5 flex-row items-center w-100">
            <a className="flex title-font font-medium items-center text-white mb-0">
              <Image src={se3} alt="Sizov.dev logo" width={32} height={32} />
              <span className="ml-3 text-xl hidden sm:block">Sizov.dev</span>
            </a>
            <nav className="ml-4 py-1 pl-4 sm:border-l border-zinc-700flex flex-wrap items-center text-base justify-center">
              <a className="mr-5 hover:text-white">Home</a>
              <a className="mr-5 hover:text-white">Products</a>
              <a className="mr-5 hover:text-white">About</a>
            </nav>
            <div className='grow'></div>
            <button className="hidden sm:inline-flex items-center bg-zinc-800 border-0 py-1 px-3 focus:outline-none hover:bg-zinc-700 rounded text-base mt-0">Github
              <svg fill="none" stroke="currentColor" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </header>

        <section className="flex flex-row w-100 p-24 bg-gradient-to-tr from-violet-800 to-fuchsia-600">
          <h1 className="my-auto text-6xl basis-2/3 mx-auto text-center">Quality, production code.</h1>
          <Image
            className="basis-1/3"
            alt="hero"
            src="/code.png"
            width={600}
            height={600} />
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
      </main>
    </>
  )
}
