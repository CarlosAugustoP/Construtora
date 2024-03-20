import React, { useRef } from 'react';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';
import FeaturedPost from '../FeaturedPost';
import {posts} from '../PostHeader/posts';
import Intro from '../Intro';
import QuemSomos  from '../QuemSomos';
export default function App(){
  const FeaturedPostRef = useRef(null);
  const QuemSomosRef = useRef(null);
  const ContatoRef = useRef(null);
  
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollToSection={(refName) => scrollToSection(refName)} />
      <div style={{height: '100px'}}></div>
      <Intro/>
      <section ref = {FeaturedPostRef}>
        <FeaturedPost />
      </section>
        <PostHeader />
      <section ref = {QuemSomosRef}>
        <QuemSomos/>
      </section>
      <section ref = {ContatoRef}>
        <Contato/>
      </section>
      </>
  );
}
