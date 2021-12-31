import Head from 'next/head';
import Container from '../../components/container';
import Navbar from '../../components/navbar.js';
import config from '../../config/constants.js';

export default function Reseach() {
   return (
     <>
     <Navbar> </Navbar>
       <Head>
        <title> Projects </title>
       </Head>
       <Container style={{width: "60rem"}}>
        <div style={{textAlign: "justify", marginTop: "1.6%"}}>

          <p style={{fontSize:"1.5rem", margin:"1.5rem"}}>
          <h3 style={{textAlign:"center"}}> Introduction </h3>
            My research lies at the intersection of <b> Natural Language Processing and Understanding </b>.
             I mostly focus on large scale, <b> multi-modal and multi-label hierarchical text analysis </b>.
             In recent years I have extensively worked on text classification, summarizing, topic extraction, sentiment-analysis and emotion detection.
             Previously, I have spent a considerable time working on Bipedal Locomotion and Human Gait Analysis. Both of which focus on using image data
             for extracting a unique gait signature. I also had the privilege of working with the <b> German Research Center for Artificial Intelligence at Kaiserslautern </b>.
             During my time there, I focused on extracting stamps from official document images following an unsupervised Machine learning paradigm, while making the
             system invariant to color, shape and size of the stamp. My present research interests include but are not limited to the following -
             <ul>
               <li> Interpretable AI - Model Agnostic Explanations </li>
               <li> AutoML - Both Classical version (Bayesian Hyperparameter Tuning) and Neural Architecture Search </li>
               <li> Reinforcement Learning - Q Learning, Temporal Difference, and Deep Reinforcement Learning </li>
               <li> Game Theory - Both Cooperative and Non Cooperative Games </li>
               <li> Self-Supervised Learning and Knowledge Distillation for training Deep Nets </li>
               <li> Multi-Task transfer learning for domain adaptive and domain-independent applications </li>
             </ul>
             <h3 style={{textAlign:"center"}}> Publications </h3>
             <ul>
              <li> Rupak Chakraborty, Senjuti Kundu, Prakul Agarwal – Fashioning Data: A Social Media Perspective on Fast Fashion
                  Brands, 7th Workshop on Computational Approaches to Subjectivity, Sentiment & Social Media Analysis in conjunction
                  with NAACL-HLT 2016, San Diego, June 2016.
              </li>
              <li>
                  Rupak Chakraborty, Ashima Elhence, Kapil Arora – Sparse Victory: A Large-Scale Systematic Comparison of count-based and
                  prediction based vectorizers for text classification, 12th Conference on Recent Advances in Natural Language Processing, Varna,
                  Bulgaria, September 2019.
              </li>
              <li>
                  Rupak Chakraborty, Kapil Arora – Adobe Sense: Customer Connectivity Redefined, 4th Swiss Conference on Text Analytics
                  (SwissText), Winterthur Switzerland, Demo Track, June 2019.
              </li>
              <li>
                  R.Chakraborty, G.C.Nandi, S.Kundu – Component Based Computational Model for Bipedal Locomotion, Robotics and
                  Autonomous Systems, Elsevier Publications July 2016, pp.48-56
              </li>
              <li>
                  A.Nandy, R.Chakraborty, P.Chakraborty – Cloth Invariant Gait Recognition Using Pooled Segmented Statistical
                  Features, Neurocomputing, Elsevier Publications February 2016, pp.227-247.
              </li>
              <li>
                  A.Nandy, R.Chakraborty, P.Chakraborty, G.C.Nandi - A novel Approach to Human Gait Recognition using possible
                  Speed Invariant features, International Journal of Computational Intelligence Systems, September 2014, pp. 280-300.
              </li>
              <li>
                V.B.Semwal, S.A.Katiyar, R.Chakraborty, G.C.Nandi – Biologically-inspired push recovery capable bipedal
                locomotion modeling through hybrid automata, Robotics and Autonomous Systems, Elsevier Publications, August 2015, pp.
                181-190.
              </li>
             </ul>
          </p>

        </div>
      </Container>
     </>
   )
}
