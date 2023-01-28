import Head from 'next/head'
import Image from 'next/image'
import se3 from '../public/icon.svg'
import headerImage from '../public/mobile_app.svg'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Quality, production ready code | Sizov.dev</title>
        <meta name="description" content="Create your next site with sizov.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`bg-neutral-900 min-h-screen text-white ${inter.className}`}>
        <nav className="px-4 py-2.5 bg-neutral-900 fixed z-20 top-0 left-0 right-0 border-neutral-600">
          <div className="flex flex-wrap items-center justify-between">
            <a href="https://flowbite.com/" className="flex items-center">
              <Image src={se3} className="h-6 w-6 mr-3 sm:h-9 sm:w-9" alt="Sizov.dev Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">Sizov.dev</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-neutral-400 hover:bg-neutral-700 focus:ring-neutral-600" aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-neutral-800 md:bg-neutral-900 border-neutral-700">
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 text-white" aria-current="page">Home</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-neutral-400 md:hover:text-white hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">About</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-neutral-400 md:hover:text-white hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">Services</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-neutral-400 md:hover:text-white hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">Pricing</a>
                </li>
                <li>
                  <a href="#" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-neutral-400 md:hover:text-white hover:bg-neutral-700 hover:text-white md:hover:bg-transparent">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <section className="bg-white dark:bg-neutral-900 mt-14 lg:mt-18 p-8">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mx-auto lg:mx-0 lg:mr-auto place-self-center lg:col-span-7 text-center lg:text-start">
              <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Production ready results</h1>
              <p className="max-w-2xl mb-6 font-light text-neutral-500 lg:mb-8 md:text-lg lg:text-xl dark:text-neutral-400">Enter Your spec oe aoeuh oaeuth onetuh oeanut hnoaetu aoe uoate unaote uhnoaeu aoeunht aoentuhaon euhntaoe uhhuhu hu uh </p>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base bg-violet-600 font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Use Cases
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-neutral-900 border border-neutral-300 rounded-lg hover:bg-neutral-100 focus:ring-4 focus:ring-neutral-100 dark:text-white dark:border-neutral-700 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800">
                Contact Me
              </a>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-800 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-neutral-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-violet-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Space The Final Frontier</h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Street art subway tile salvia four dollar toast bitters selfies quinoa yuccie synth meditation iPhone intelligentsia prism tofu. Viral gochujang bitters dreamcatcher.</p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" width={1200} height={500} />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">Shooting Stars</h2>
                <p className="text-base leading-relaxed mt-2">Swag shoindxgoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a className="text-violet-400 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" width={1200} height={500} />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">The Catalyzer</h2>
                <p className="text-base leading-relaxed mt-2">Swag shoindxigoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a className="text-violet-400 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" width={1200} height={500} />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">The 400 Blows</h2>
                <p className="text-base leading-relaxed mt-2">Swag shoindegoitch literally meditation subway tile tumblr cold-pressed. Gastropub street art beard dreamcatcher neutra, ethical XOXO lumbersexual.</p>
                <a className="text-violet-400 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-neutral-400 bg-neutral-900 body-font">
          <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
              <Image src={se3} alt="Sizov.dev logo" className="w-10 h-10 p-2" />
              <span className="ml-3 text-xl">Sizov.dev</span>
            </a>
            <p className="text-sm text-neutral-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-neutral-800 sm:py-2 sm:mt-0 mt-4">© 2023 Sizov.dev
              {/* <a href="https://twitter.com/knyttneve" className="text-neutral-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a> */}
            </p>
            {/* <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-neutral-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-neutral-400">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="ml-3 text-neutral-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a className="ml-3 text-neutral-400">
                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                  <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span> */}
          </div>
        </footer>
        <Script src="https://unpkg.com/flowbite@1.6.0/dist/flowbite.min.js"></Script>
      </main>
    </>
  )
}
