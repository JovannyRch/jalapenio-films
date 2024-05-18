import { Parallax } from "react-scroll-parallax";
import Footer from "./Footer";

const Page1 = () => (
  <>
    <div class="min-h-screen bg-white md:pt-[0px] xs:pt-[80px]">
      <div class="flex md:flex-row flex-col-reverse md:justify-normal md:h-screen">
        <div class="md:w-[50vw] w-full text-black flex items-start flex-col justify-start p-12 md:p-16 xl:p-24 font-arimo text-lef">
          <h1
            class="md:text-6xl text-5xl font-bold mt-8 text-left"
            style={{
              fontFamily: "Coolvetica-Crammed",
            }}
          >
            ¿Quiénes somos?
          </h1>
          <p class="mt-4">
            Somos un grupo de profesionales con más de 38 años de experiencia en
            producción de comerciales, cortometrajes, largometrajes, series de
            televisión y videoclips, así como especializados en los ramos de la
            comunicación política, social y corporativa.
          </p>
          <p class="mt-4">
            Ofrecemos un servicio integral utilizando toda la gama de
            posibilidades del espectro comunicacional, adaptándolas a las
            necesidades de nuestros clientes.
          </p>
          <p class="mt-4">
            <b>JALAPEÑO FILMS, S.A. de C.V.</b> es una compañía establecida con
            la marca comercial representativa, dedicada a la producción
            profesional de Comunicación, Creatividad para todos los medios TV,
            Radio, Cine, Internet e Impresos entre otros. Exposiciones, videos
            corporativos, televisión, comerciales, documentales, programas y
            series de TV, corto y largo metraje.
          </p>
        </div>
        <div
          class="md:h-screen h-[50vh] w-full bg-cover bg-center md:w-[50vw]"
          style={{
            backgroundImage: `url('https://thelift.mx/wp-content/uploads/2021/06/IMG_7410-scaled.jpg')`,
          }}
        ></div>
      </div>
    </div>
  </>
);
const Page2 = () => (
  <>
    <div class="min-h-screen bg-white md:pt-[0px] xs:pt-[80px]">
      <div class="flex md:flex-row-reverse flex-col-reverse md:justify-normal md:h-screen">
        <div class="md:w-[50vw] w-full text-black flex items-start flex-col justify-start p-12 md:p-16 xl:p-24 font-arimo text-lef">
          <h1
            class="md:text-6xl text-5xl font-bold mt-8 text-left"
            style={{
              fontFamily: "Coolvetica-Crammed",
            }}
          >
            ¿Quiénes somos?
          </h1>
          <p class="mt-4">
            Somos un grupo de profesionales con más de 38 años de experiencia en
            producción de comerciales, cortometrajes, largometrajes, series de
            televisión y videoclips, así como especializados en los ramos de la
            comunicación política, social y corporativa.
          </p>
          <p class="mt-4">
            Ofrecemos un servicio integral utilizando toda la gama de
            posibilidades del espectro comunicacional, adaptándolas a las
            necesidades de nuestros clientes.
          </p>
          <p class="mt-4">
            <b>JALAPEÑO FILMS, S.A. de C.V.</b> es una compañía establecida con
            la marca comercial representativa, dedicada a la producción
            profesional de Comunicación, Creatividad para todos los medios TV,
            Radio, Cine, Internet e Impresos entre otros. Exposiciones, videos
            corporativos, televisión, comerciales, documentales, programas y
            series de TV, corto y largo metraje.
          </p>
        </div>
        <div
          class="md:h-screen h-[50vh] w-full bg-cover bg-center md:w-[50vw]"
          style={{
            backgroundImage: `url('https://thelift.mx/wp-content/uploads/2021/06/IMG_7410-scaled.jpg')`,
          }}
        ></div>
      </div>
    </div>
  </>
);

function AboutWithParallax() {
  const queryParam = new URLSearchParams(window.location.search);

  console.log("queryParams", queryParams);

  return (
    <>
      <Page2 />
      <Parallax speed={-10}>
        <Page1 />
      </Parallax>
    </>
  );
}

export default AboutWithParallax;
