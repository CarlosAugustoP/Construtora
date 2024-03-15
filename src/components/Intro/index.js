import React, { useState } from 'react';
import image from '../../../public/img/Parralax1.png';
import { Button, Colored } from './styles';

export default function Intro() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div style={{ paddingBottom: '100px', position: 'relative' }}>
            <img src={image} alt="Parralax" style={{ width: '100%' }} />
            <div style={{ color: 'black', position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: '20px', borderRadius: '10px' }}>
                <h1 style = {{
                    fontSize: '50px'

                }}>O seu <Colored>sonho</Colored> é o nosso <Colored>Compromisso</Colored>.</h1>
                <p>Com X anos de história, nos orgulhamos em manter um legado de excelência e comprometimento na construção de sonhos e lares.</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
                   <Button>Conheça nossos Empreendimentos</Button>
                   <Button>Fale Conosco</Button>
                   <Button>Obtenha financiamento</Button>
                   <Button>Quem somos?</Button>
                </div>
            </div>
        </div>
    );
}
