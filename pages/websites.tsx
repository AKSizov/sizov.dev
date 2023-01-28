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

        <section className="text-neutral-400 bg-neutral-900 body-font mt-16">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
              <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Before they sold out
                <br className="hidden lg:inline-block" />readymade gluten
              </h1>
              <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">Button</button>
                <button className="ml-4 inline-flex text-neutral-400 bg-neutral-800 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-700 hover:text-white rounded text-lg">Button</button>
              </div>
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-8">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Raw Denim Heirloom Man Braid</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Authentic Cliche Forage</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Kinfolk Chips Snackwave</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Coloring Book Ethical</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Typewriter Polaroid Cray</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Pack Truffaut Blue</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">The Catcher In The Rye</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap w-full">
              <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-neutral-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 1</h2>
                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-neutral-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 2</h2>
                    <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-neutral-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="5" r="3"></circle>
                      <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 3</h2>
                    <p className="leading-relaxed">Coloring book nar whal glossier master cleanse umami. Salvia +1 master cleanse blog taiyaki.</p>
                  </div>
                </div>
                <div className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-neutral-800 pointer-events-none"></div>
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">STEP 4</h2>
                    <p className="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                  </div>
                </div>
                <div className="flex relative">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-500 inline-flex items-center justify-center text-white relative z-10">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="flex-grow pl-4">
                    <h2 className="font-medium title-font text-sm text-white mb-1 tracking-wider">FINISH</h2>
                    <p className="leading-relaxed">Pitchfork ugh tattooed scenester echo park gastropub whatever cold-pressed retro.</p>
                  </div>
                </div>
              </div>
              <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step" />
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">Pricing</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
            </div>
            <div className="lg:w-2/3 w-full mx-auto overflow-auto">
              <table className="table-auto w-full text-left whitespace-no-wrap">
                <thead>
                  <tr>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-neutral-800 rounded-tl rounded-bl">Plan</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-neutral-800">Speed</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-neutral-800">Storage</th>
                    <th className="px-4 py-3 title-font tracking-wider font-medium text-white text-sm bg-neutral-800">Price</th>
                    <th className="w-10 title-font tracking-wider font-medium text-white text-sm bg-neutral-800 rounded-tr rounded-br"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3">Start</td>
                    <td className="px-4 py-3">5 Mb/s</td>
                    <td className="px-4 py-3">15 GB</td>
                    <td className="px-4 py-3 text-lg text-white">Free</td>
                    <td className="w-10 text-center">
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-neutral-800 px-4 py-3">Pro</td>
                    <td className="border-t-2 border-neutral-800 px-4 py-3">25 Mb/s</td>
                    <td className="border-t-2 border-neutral-800 px-4 py-3">25 GB</td>
                    <td className="border-t-2 border-neutral-800 px-4 py-3 text-lg text-white">$24</td>
                    <td className="border-t-2 border-neutral-800 w-10 text-center">
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-neutral-800 px-4 py-3">Business</td>
                    <td className="border-t-2 border-neutral-800 px-4 py-3">36 Mb/s</td>
                    <td className="border-t-2 border-neutral-800 px-4 py-3">40 GB</td>
                    <td className="border-t-2 border-neutral-800 px-4 py-3 text-lg text-white">$50</td>
                    <td className="border-t-2 border-neutral-800 w-10 text-center">
                    </td>
                  </tr>
                  <tr>
                    <td className="border-t-2 border-b-2 border-neutral-800 px-4 py-3">Exclusive</td>
                    <td className="border-t-2 border-b-2 border-neutral-800 px-4 py-3">48 Mb/s</td>
                    <td className="border-t-2 border-b-2 border-neutral-800 px-4 py-3">120 GB</td>
                    <td className="border-t-2 border-b-2 border-neutral-800 px-4 py-3 text-lg text-white">$72</td>
                    <td className="border-t-2 border-b-2 border-neutral-800 w-10 text-center">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
              <a className="text-yellow-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button className="flex ml-auto text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded">Button</button>
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">Slow-carb next level shoinddgoitch ethical authentic, scenester sriracha forage.</h1>
              <button className="flex-shrink-0 text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg mt-10 sm:mt-0">Button</button>
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
