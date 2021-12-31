import Head from 'next/head';
import Container from '../../components/container';
import Navbar from '../../components/navbar.js';
import CardImage from '../../components/cardimage.js';
import config from '../../config/constants.js';

export default function Skills() {
   return (
     <>
     <Navbar> </Navbar>
       <Head>
        <title> Skills </title>
       </Head>
       <Container>
       <hr/>
       <div style={{textAlign: "center"}}>
          <h2> Machine Learning </h2>
        </div>
       <hr/>
        <div style={{textAlign: "center"}}>
          {config.imageList.map((imageJson, index) =>
            <CardImage props={imageJson} key={index}></CardImage>
          )}
        </div>
       <hr/>
       <div style={{textAlign: "center"}}>
          <h2> Frontend Development </h2>
        </div>
       <hr/>
        <div style={{textAlign: "center"}}>
          {config.frontendImageList.map((imageJson, index) =>
            <CardImage props={imageJson} key={index}></CardImage>
          )}
        </div>
       <hr/>
       <div style={{textAlign: "center"}}>
          <h2> Backend Development </h2>
        </div>
       <hr/>
        <div style={{textAlign: "center"}}>
          {config.backendImageList.map((imageJson, index) =>
            <CardImage props={imageJson} key={index}></CardImage>
          )}
        </div>
       <hr/>
       <div style={{textAlign: "center"}}>
          <h2> Mobile Development </h2>
        </div>
       <hr/>
        <div style={{textAlign: "center"}}>
          {config.mobileImageList.map((imageJson, index) =>
            <CardImage props={imageJson} key={index}></CardImage>
          )}
        </div>
      </Container>
     </>
   )
}
