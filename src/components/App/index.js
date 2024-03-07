import React, {useState, createContext} from 'react';
import { ThemeProvider } from '../../Context/ThemeContext';
import {Title} from './styles';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';

function App(){
   
    const [posts, setPosts] = useState([
        {
            id: 1,
            tipo: "Mansão",
            Bairro: "Condomínio Fazenda Gramado",
            localização: "Gravatá - PE",
            valor: "Não está a venda",
            iniciado_em: "01/01/2021",
            entregue_em: "01/01/2022",
        },
    ]);

    return (
        <ThemeProvider>
            {/* SEBOSEIRA IMENSA. DEPOIS VAMOS MUDAR ISSO. */}
            <div style = {{
                height: '130px',

            }}>
                
            </div>
            <Header>
            </Header>
            {/*
           {
           posts.map((post, index) => (
               <Post 
               key={post.id}
               post={post}
               likes={post.likes} 
               />
           ))} */}
            <PostHeader/>
          <Contato/>
        </ThemeProvider>    
    );
}

export default App;
