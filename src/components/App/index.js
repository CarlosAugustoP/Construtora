import React, {useState, createContext} from 'react';
import { ThemeProvider } from '../../Context/ThemeContext';
import {Title} from './styles';
import Header from '../NavBar';
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
        </ThemeProvider>    
    );
}

export default App;