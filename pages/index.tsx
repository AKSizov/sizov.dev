import Head from 'next/head'
import Image from 'next/image'
import 'tw-elements';
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Website Services | Sizov.dev</title>
        <meta name="description" content="Create your next site with sizov.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <main className="dark:bg-zinc-900 min-h-screen dark:text-white">
        <h1 className="text-3xl font-bold underline">
          Hello, Next.js!
        </h1>
      </main>
    </>
  )
}
