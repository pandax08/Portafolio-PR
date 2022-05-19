import type { NextPage } from 'next'
import Layout from '../components/layout'
import useDarkMode from '../hooks/useDarkMode'
import Link from 'next/link'
import Head from 'next/head'
import Header from '../components/header'
import Work from '../components/work'
import Bio from '../components/bio'
import Hobbies from '../components/hobbies'
import Web from '../components/web'

const Home: NextPage = () => {
  useDarkMode()
  return (
    <div >
     <Head>
       <title>Pablo Ringler-Home</title>
     </Head>
     <Layout>
       <div className=' mt-[60px] w-[500px] mx-auto px-7'>
         {/* header */}
          <Header></Header>
         {/* work section */}
         <Work></Work>
         {/* Bio section */}
         <Bio></Bio>
        {/* hobbis section */}
        <Hobbies></Hobbies>
        {/* web section */}
        <Web></Web>
     
       </div>
     </Layout>
     </div>
  )
}

export default Home
