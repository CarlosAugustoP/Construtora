import React, {useState, createContext} from 'react';
import { ThemeProvider } from '../../Context/ThemeContext';
import {Title} from './styles';
import Header from '../NavBar';
import Contato from '../Contato';
import PostHeader from '../PostHeader';

function App(){
   
    // const [posts, setPosts] = useState([
    //     {
    //         id: Math.random(),
    //         title: "Estrutura para post",
    //         subtitle: "Início e termino da obra",
    //         likes: 14,
    //         read: false,
    //         removed: true
    //     },
    // ]);

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
