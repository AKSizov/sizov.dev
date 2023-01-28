import Head from 'next/head'
import { Inter } from '@next/font/google'
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
      <main className={`bg-neutral-900 min-h-screen text-white ${inter.className}`}>

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
                <button className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">Button</button>
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
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Authentic Cliche Forage</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Kinfolk Chips Snackwave</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Coloring Book Ethical</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Typewriter Polaroid Cray</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Pack Truffaut Blue</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
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
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-violet-500 inline-flex items-center justify-center text-white relative z-10">
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
              <a className="text-violet-400 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button className="flex ml-auto text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded">Button</button>
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
              <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">Slow-carb next level shoinddgoitch ethical authentic, scenester sriracha forage.</h1>
              <button className="flex-shrink-0 text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-600 rounded text-lg mt-10 sm:mt-0">Button</button>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
