import React from 'react';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';

export default function App(){

  return (
    <>
      {/* SEBOSEIRA IMENSA. DEPOIS VAMOS MUDAR ISSO. */}
      <div style = {{ height: '130px' }}/>
      <Header/>
      <PostHeader />
      <Contato/>
      </>
  );
}
