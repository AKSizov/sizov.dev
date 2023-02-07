import Head from 'next/head'
import Image from 'next/image'
import resheader from '../public/undraw_certificate_re_yadi.svg'
import soonimg from '../public/pop-zebra-4q3Ogm3Kt44-unsplash.webp'
import colabimg from '../public/undraw_developer_activity_re_39tg.svg'
import { Inter } from '@next/font/google'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alex Sizov - Freelance Full Stack Developer | Sizov.io</title>
        <meta name="description" content="Alex Sizov (Alexander K. Sizov) full stack developer. View and download the CV, resume, and profile of Alex Sizov here." />
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

        <section className="min-h-[70vh] backdrop-brightness-50 text-neutral-400 flex flex-col justify-center p-4 py-8">
          <div className='flex flex-col lg:flex-row py-auto px-[5vw] gap-8 pt-8 items-center'>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0">
              <Image className="object-cover object-center" alt="hero" src={colabimg} priority />
            </div>
            <div className='lg:grow'></div>
            <div className='flex gap-4 flex-col justify-center grow items-center lg:items-start'>
              <Link className='text-sm hover:underline' href='/'>&lt;- Looking for the home page?</Link>
              <h1 className='text-5xl text-white font-semibold text-center lg:text-left'>Hello, I&apos;m <span className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Alex Sizov</span></h1>
              <div className='h-0.5 w-32 bg-neutral-300'></div>
              <p className='text-xl text-center lg:text-left'>I&apos;m a full stack developer and system administrator who has been in the industry since 2014. I&apos;ve developed software for startups, open source projects, and major corporations</p>
              <div className="flex flex-col sm:flex-row justify-center mt-2 gap-4 w-full sm:w-auto">
                <a className='w-full sm:w-auto' href='#resume'>
                  <button className="text-white border-2 rounded border-violet-600 py-2 px-6 hover:bg-violet-600 text-center w-full sm:w-auto">View my resume -&gt;</button>
                </a>
                {/* <a className='w-full sm:w-auto' href='#2'>
                  <button className="text-white border-2 rounded border-neutral-500 py-2 px-6 hover:bg-neutral-500 text-center w-full sm:w-auto">Learn more -&gt;</button>
                </a> */}
              </div>
            </div>
          </div>
        </section>

        <section className="h-[35vh] flex flex-col text-neutral-400 bg-neutral-900/90 backdrop-brightness-50 py-[2.5vh]" id='2'>
          <div className='flex flex-row h-full items-center overflow-hidden'>
            <div className='marquee flex flex-row h-full items-center'>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="icon" />
              </div>

              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/electron/electron-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gatsby/gatsby-plain.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="icon" />
              </div>
            </div>
          </div>
          <div className='flex flex-row h-full items-center overflow-hidden'>
            <div className='marquee-rev flex flex-row h-full items-center'>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="icon" />
              </div>

              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jamstack/jamstack-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/latex/latex-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redhat/redhat-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh] invert' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="icon" />
              </div>
              <div className='rounded border-2 border-neutral-700 h-[12vh] w-[12vh] flex items-center justify-center flex-shrink-0 ml-[1.5vh]'>
                <Image className='h-[8vh] w-[8vh]' height={64} width={64} src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="icon" />
              </div>
            </div>
          </div>
        </section>

        {/* <section className="text-neutral-400 bg-neutral-900/0 backdrop-brightness-50 body-font flex flex-col py-4 px-6" id='3'>
          <div className='my-16 flex flex-col lg:mx-16'>
            <h1 className='text-4xl text-white font-medium text-center my-2'>Projects</h1>
            <p className='text-center'>Take a look at what I&apos;m working on, and what&apos;s coming next.</p>
          </div>
          <div className="flex flex-wrap text-center">
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="">
                <Image alt="content" className="max-h-80 max-w-full m-auto rounded saturate-0 brightness-50 opacity-50" src={soonimg} />
              </div>
              <h2 className="title-font text-3xl font-medium text-white mt-6 mb-3 opacity-50">SmartBuddy</h2>
              <p className="leading-relaxed opacity-50">The cloud stack you&apos;ve always wanted but never had. Runs on whatever you have.</p>
              <a className='w-full sm:w-auto' href='#'>
                <button className="text-white border-2 rounded border-violet-600 py-2 px-6 text-center w-full sm:w-auto my-4 opacity-50" disabled>Coming soon</button>
              </a>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="max-h-96">
                <Image alt="content" className="max-h-80 max-w-full m-auto rounded saturate-0 brightness-50 blur opacity-50" src={soonimg} />
              </div>
              <h2 className="title-font text-4xl font-medium text-white mt-6 mb-3 blur opacity-50">Get a Sober</h2>
              <p className="leading-relaxed opacity-50 blur">A local ride-sharing alternative that charges flat rate fees for college campuses.</p>
              <a className='w-full sm:w-auto' href='#'>
                <button className="text-white border-2 rounded border-violet-600 py-2 px-6 text-center w-full sm:w-auto my-4 blur opacity-50" disabled>Coming soon</button>
              </a>
            </div>
          </div>
        </section> */}

        <section className="text-neutral-400 bg-neutral-900/90 backdrop-brightness-50 body-font" id='resume'>
          <div className="px-6 py-8 mx-auto flex flex-col lg:flex-row justify-evenly items-center">
            <Image className="w-72 h-72 hidden lg:block m-8" alt="hero" src={resheader} />
            <div className="flex flex-col justify-center">
              <h1 className="font-medium text-5xl text-white text-left">Resume</h1>
              <p className=" my-4 text-left">
                Download my resume to view my work history, full list of skills, and more!
              </p>
              <a className='text-left w-full sm:w-auto' target="_blank" href='/sizov_resume.pdf'>
                <button className="text-white border-2 rounded border-violet-600 py-2 px-6 text-center w-full my-2">Open resume.pdf -&gt;</button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
