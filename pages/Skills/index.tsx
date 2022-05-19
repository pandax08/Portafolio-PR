import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../../components/layout'

import profile from '../public/profile.jpg'
const Skills: NextPage = () => {
  
  return (
    <div >
      <Head>
       <title>Pablo Ringler-Skills</title>
     </Head>
     <Layout >
         <h2 className='text-6xl-5xl text-white '>Skills</h2>
     </Layout>
     </div>
  )
}

export default Skills
