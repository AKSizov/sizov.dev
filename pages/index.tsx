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
      </main>
    </>
  )
}
