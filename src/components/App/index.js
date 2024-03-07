import React, {useState, createContext} from 'react';
import { ThemeProvider } from '../../Context/ThemeContext';
import {Title} from './styles';
import Header from '../NavBar';
import Contato from '../Contato';
import Post from '../Post';
import PostHeader from '../PostHeader';
function App(){

    return (
        <ThemeProvider>
            {/* SEBOSEIRA IMENSA. DEPOIS VAMOS MUDAR ISSO. */}
            <div style = {{
                height: '130px',

            }}>
                
            </div>
            <Header>
            </Header>
           
        <PostHeader />
          <Contato/>
        </ThemeProvider>    
    );
}

export default App;
