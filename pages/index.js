import Head from 'next/head';
import React from 'react';
import config from '../config/constants.js';
import Navbar from '../components/navbar.js';
import Container from '../components/container.js';

function HomePage() {
   return (
     <>
     <Head>
      <title> About </title>
     </Head>
     <Navbar></Navbar>
     <Container style={{width: "60rem"}}>
      <div style={{textAlign: "justify", marginTop: "5.6%"}}>
        <p style={{fontSize:"1.5rem", margin:"1.5rem"}}>
          You will often find me in some remote corner of the world either exploring historical places,
          immersing myself in the local traditions and customs or attending some conference of interest.
          Over the past couple of years I have had the good fortune of travelling to many countries
          and continents across the globe. In the process I have learned a lot about the idiosyncrasies
          of different cultures and imbibed an egalitarian, community oriented outlook of the world.
          My primary job is that of a software developer and when I am not travelling or writing on my blog,
          I spend a lot of time, developing applications and getting acquainted with the latest tools of the trade.
          This site is an attempt to organize my portfolio in a single place. While you are here make yourself comfortable and have a look around
        </p>
      </div>
    </Container>
     </>
  )
}

export default HomePage
