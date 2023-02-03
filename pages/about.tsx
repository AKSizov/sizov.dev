import Head from 'next/head'
import Image from 'next/image'
import qr from '../public/q1.1-inverted-nobg.svg'
import colabimg from '../public/undraw_team_collaboration_re_ow29.svg'
import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>About Alex Sizov | Sizov.dev</title>
        <meta name="description" content="Start your next project with Sizov.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`min-h-screen text-white ${inter.className}`}>
        <div className="background -z-10 brightness-50">
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span>
        </div>

        <section className="">
          <div className='text-neutral-400 bg-neutral-900/50 backdrop-brightness-50 py-24 px-[10vw]'>
            <h1 className='text-6xl text-center text-white font-bold'>Hello, it's nice to meet you!</h1>
            <p className='text-3xl text-center mt-6'>I hope we can make excellent things together.</p>
            <div className='mt-8'>
              <p className='text-center mx-auto'>Take my business card &#9759;</p>
              <div className='mx-auto scale-90 w-[70vw] h-[40vw] max-h-[400px] max-w-[700px] bg-neutral-900'>
                <div className='flex flex-row h-full w-full justify-center'>
                  <div className='flex flex-col justify-center basis-1'>
                    <div className='h-[1vw] max-h-[10px]'></div>
                    <Image className='w-[22vw] max-w-[220px] h-[22vw] max-h-[220px]' src={qr} alt='qr code with logo' />
                    <div className='h-[1vw] max-h-[10px]'></div>
                    <a className='text-center text-lg' href='https://sizov.io/about'>https://sizov.io/about</a>
                  </div>
                  <div className='w-[5vw] max-w-[50px]'></div>
                  <div className='flex flex-col justify-center basis-2'>
                    <h1 className='text-white text-3xl font-bold whitespace-nowrap'>Alexander Sizov</h1>
                    <h2 className='text-lg italic'>Full Stack developer</h2>
                    <h1 className='text-white text-xl'>.</h1>
                    <ul>
                      <li>Web/Mobile Development</li>
                      <li>Infrastructure & IT</li>
                      <li>UI / UX Design</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900/90 backdrop-brightness-50 body-font" id='2'>
          <div className="container px-5 py-16 mx-auto">
            <div className="text-center mb-8">
              <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-white mb-4">Included in all of my services</h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">No matter what service you request, I'll make sure my quality work the following standards:</p>
            </div>
            <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800/50 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Straightforward and accessible interfaces</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800/50 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Easy deployment and scalability</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800/50 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Coherent colors, fonts and formatting</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800/50 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Wide range of supported backends</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800/50 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Good error handling / messages</span>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-neutral-800/50 rounded flex p-4 h-full items-center">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-violet-400 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font font-medium text-white">Legacy compatibility</span>
                </div>
              </div>
            </div>
            <a href='#3'>
              <button className="flex mx-auto mt-8 text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-600 rounded text-lg">View services</button>
            </a>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900/50 backdrop-brightness-50 body-font" id='3'>
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col">
              <div className="h-1 bg-neutral-800 rounded overflow-hidden">
                <div className="w-24 h-full bg-violet-500"></div>
              </div>
              <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
                <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">Specialty services</h1>
                <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Regardless as to if you are starting a new adventure, upgrading a current project, or just looking around, these quality services are available at low-cost to you.</p>
              </div>
            </div>
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1203x503" />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">I will make a website from your sketch/drawing</h2>
                <p className="text-base leading-relaxed mt-2">
                  I will make a custom and responsive website from a sketch drawing. Sketching the website on a piece of paper is always the first step to create something brilliant. I will handle all the technical details and optionally set up hosting ...
                </p>
                <a className="text-violet-400 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1204x504" />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">I will optimize your existing website</h2>
                <p className="text-base leading-relaxed mt-2">Struggling with your lighthouse score, SEO, or user experience? I will improve your website’s performance by optimizing images, database queries, FCP, CLS, and more!</p>
                <a className="text-violet-400 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1205x505" />
                </div>
                <h2 className="text-xl font-medium title-font text-white mt-5">I will deploy a docker app for you</h2>
                <p className="text-base leading-relaxed mt-2">I will deploy an application such as Nextcloud, Nginx, or Wordpress in a easily-understandable way. HTTPS, SSL, and documentation included. I will make the app portable ...</p>
                <a className="text-violet-400 inline-flex items-center mt-3">Learn More
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="text-neutral-400 bg-neutral-900/90 backdrop-brightness-50 body-font">
          <div className="container px-5 py-8 mx-auto flex flex-wrap items-center">
            <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
              <h1 className="title-font font-medium text-3xl text-white">Custom services</h1>
              <p className="leading-relaxed my-4">
                If the packages above don't suit your needs, no worries! <br />
                Just shoot me an email at s‌erv‌ices‌@si‌zov.dev and we can have a chat to discuss your individual project needs.
              </p>
              <a href='mailto:services@sizov.dev'>
                <button className="inline-flex text-white bg-violet-500 border-0 py-2 px-6 focus:outline-none hover:bg-violet-600 rounded text-lg">Contact me at services@sizov.dev</button>
              </a>
            </div>
            <div className="lg:w-2/6 md:w-1/2 bg-opacity-50 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
              <Image className="object-cover object-center rounded" alt="hero" src={colabimg} />
              {/* <h2 className="text-white text-lg font-medium title-font mb-5">Sign Up</h2>
              <div className="relative mb-4">
                <label for="full-name" className="leading-7 text-sm text-neutral-400">Full Name</label>
                <input type="text" id="full-name" name="full-name" className="w-full bg-neutral-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-violet-900 rounded border border-neutral-600 focus:border-violet-500 text-base outline-none text-neutral-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
              <div className="relative mb-4">
                <label for="email" className="leading-7 text-sm text-neutral-400">Email</label>
                <input type="email" id="email" name="email" className="w-full bg-neutral-600 bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-violet-900 rounded border border-neutral-600 focus:border-violet-500 text-base outline-none text-neutral-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
              </div>
              <button className="text-white bg-violet-500 border-0 py-2 px-8 focus:outline-none hover:bg-violet-600 rounded text-lg">Button</button>
              <p className="text-xs mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
