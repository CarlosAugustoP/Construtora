import React, {useState, createContext} from 'react';
import { ThemeProvider } from '../../Context/ThemeContext';
import {Title} from './styles';
import Header from '../NavBar';
import Contato from '../Contato';
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
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ac suscipit lectus, consectetur euismod urna. Vivamus eget neque bibendum, gravida lorem eget, porta libero. Nulla maximus vehicula leo ut tristique. Pellentesque fermentum dolor ex, at finibus tortor hendrerit id. Nullam suscipit est sed turpis sollicitudin pharetra. Mauris scelerisque diam hendrerit justo suscipit, ac facilisis felis pretium. Cras nec pellentesque purus. Duis pulvinar ante vel diam accumsan, vel porta nisl congue. Maecenas nec tortor a velit porta consectetur a ac nunc. Donec consectetur vulputate dui, a congue justo sollicitudin ac. Donec venenatis, est commodo hendrerit varius, leo tortor fermentum ipsum, sed eleifend orci tellus quis sapien. In hac habitasse platea dictumst. Donec feugiat nunc vel dolor consectetur tristique sodales nec sapien. Proin semper, libero eu bibendum bibendum, purus ipsum suscipit leo, eget tempus augue leo sed ex. Cras efficitur accumsan ipsum, id ultricies nisi aliquet id.

Vivamus vitae nisi ac felis viverra sagittis. Phasellus ut efficitur turpis, sodales pretium arcu. Vestibulum eget aliquam dui, nec viverra nulla. Phasellus id laoreet nisi. Vivamus id suscipit urna. Maecenas tempor eget nunc vel faucibus. Praesent dapibus et nibh nec vulputate. Aliquam eleifend massa ut eleifend malesuada. Nam luctus pellentesque hendrerit. Donec nec bibendum nisi. Suspendisse potenti. Nulla orci urna, lacinia eu pellentesque vel, congue volutpat diam. Integer placerat eros sed sapien tempus dictum.

Sed ante nisl, posuere eu mauris quis, facilisis aliquet diam. Etiam sed fringilla ante, et euismod sapien. Duis commodo, urna placerat viverra lacinia, nisl neque suscipit lectus, nec venenatis tellus nunc sed risus. Suspendisse dolor odio, sagittis a varius vel, ultrices sit amet mauris. Nullam varius, mauris a laoreet volutpat, velit dui semper quam, eu blandit sem felis quis dolor. Aliquam erat volutpat. Curabitur non vulputate tortor. Fusce in erat placerat, egestas justo a, pharetra urna. Nam dapibus lobortis erat eget vestibulum. Nulla facilisi. Vestibulum vulputate odio pharetra eleifend scelerisque. Vestibulum ac urna malesuada, dignissim libero sed, ornare turpis.

In in tempus justo, sit amet rutrum odio. Curabitur velit mauris, maximus ut ornare non, tristique in justo. Aenean a sollicitudin dui, a lacinia ex. Nam fringilla neque sed urna placerat rhoncus. Nullam pellentesque tempor nisl, vitae volutpat justo eleifend ut. Cras vel egestas neque. Pellentesque at dui ut neque mattis imperdiet. Mauris tristique libero tellus, ac rhoncus arcu interdum vitae. Vestibulum tempus blandit urna eget auctor. Nam consectetur quis metus id tincidunt. Praesent sodales, tellus eu dictum imperdiet, sapien dolor interdum ex, ultrices imperdiet ipsum justo vel sapien. Mauris sodales ante magna, ac rhoncus diam euismod non.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas sem augue, pretium nec maximus ut, mollis eget justo. Nam ut diam eget orci finibus auctor in ut tortor. Aenean odio nisi, varius vitae ligula nec, ultrices iaculis mi. Etiam malesuada tellus orci, eu maximus augue dignissim ut. Integer ornare magna urna, vitae tincidunt leo ullamcorper non. Duis pellentesque magna eget accumsan suscipit.

Donec a libero nec felis porta vulputate. </p>
          <Contato/>
        </ThemeProvider>    
    );
}

export default App;
