import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function AboutWithParallax() {
    return <div className='min-h-screen bg-white'>
        <div class="flex md:flex-row flex-col-reverse md:justify-normal">
            <div
                class="flex-1 text-black flex items-center flex-col justify-center p-12 md:p-24 font-arimo"
            >
                <h1 class="text-4xl font-bold text-center mt-8">
                    ¿Quiénes somos?
                </h1>
                <p class="text-center mt-4">
                    Somos un grupo de profesionales con más de 38 años de experiencia en producción de comerciales, cortometrajes, largometrajes, series de televisión y videoclips, así como especializados en los ramos de la comunicación política, social y corporativa.
                </p>
                <p class="text-center mt-4">
                    Ofrecemos un servicio integral utilizando toda la gama de posibilidades del espectro comunicacional, adaptándolas a las necesidades de nuestros clientes.
                </p>
                <p class="text-center mt-4">
                    <b>JALAPEÑO FILMS, S.A. de C.V.</b> es una compañía establecida con la marca comercial representativa, dedicada a la producción profesional de Comunicación, Creatividad para todos los medios TV, Radio, Cine, Internet e Impresos entre otros. Exposiciones, videos corporativos, televisión, comerciales, documentales, programas y series de TV, corto y largo metraje.
                </p>
            </div>
            <div class="flex-1">
                <img
                    src="https://thelift.mx/wp-content/uploads/2021/06/IMG_7410-scaled.jpg"
                    alt="Acerca de Nosotros"
                    class="w-full"
                />
            </div>
        </div>
        {/*<Parallax pages={1}>
            <ParallaxLayer
                offset={0}
                speed={0.5}
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>


            </ParallaxLayer>
         <ParallaxLayer
                offset={1}
                speed={0.5}
                className={'bg-gray-900'}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: 'white',
                    alignItems: 'center',
                }}>
                <p>Layer 1</p>
            </ParallaxLayer>
            <ParallaxLayer
                offset={2}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#87BCDE'
                }}>
                <p>Layer 2</p>
            </ParallaxLayer> 
        </Parallax>*/}
    </div>
}

export default AboutWithParallax