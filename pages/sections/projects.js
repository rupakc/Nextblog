import Head from 'next/head';
import Container from '../../components/container';
import Navbar from '../../components/navbar.js';
import CustomCard from '../../components/card.js';
import config from '../../config/constants.js';

export default function Projects() {
   return (
     <>
     <Navbar> </Navbar>
       <Head>
        <title> Projects </title>
       </Head>
       <Container>
        <div style={{textAlign: "center"}}>
          {config.projectListJson.map((projectJson, index) =>
            <CustomCard props={projectJson} key={index}> </CustomCard>
          )}
        </div>
      </Container>
     </>
   )
}
