import { OurProjects, InitialPlayer, HomeSection, AboutUs } from "@/components/landing-page";
import { OurProyects } from "@/components/landing-page/OurProyects";

export default function Home() {
  return (
    <main className=''>
      <HomeSection />
      <AboutUs />
      <OurProyects/>
      {/* <section className='flex column justify-content align-center' style={{ height: '96vh' }}>
        <h1 className='white-text f-size-100 ls-1'>itcoders.tech</h1>
      </section>
      <section className='grid-c-2 white-text'>
        <div className='p-40 flex column justify-content'>
          <h2 className='f-size-50'>Sobre nosotros</h2>
          <p className='f-size-24'>Somos un grupo de desarrolladores de aplicaciones y sistemas aplicados a la vida real que pertenece y trabaja en conjunto como un grupo estudiantil con el departamento de sistemas del Instituto Tecnológico de Celaya.</p>
        </div>
        <div>
          <InitialPlayer />
        </div>
      </section> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginBottom: -10 }}>
        <path fill="#0099ff" fillOpacity="1" d="M0,0L16,5.3C32,11,64,21,96,48C128,75,160,117,192,128C224,139,256,117,288,128C320,139,352,181,384,170.7C416,160,448,96,480,64C512,32,544,32,576,69.3C608,107,640,181,672,208C704,235,736,213,768,197.3C800,181,832,171,864,149.3C896,128,928,96,960,112C992,128,1024,192,1056,213.3C1088,235,1120,213,1152,176C1184,139,1216,85,1248,85.3C1280,85,1312,139,1344,154.7C1376,171,1408,149,1424,138.7L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
      </svg> */}
      {/* <section className='white-text bg-secondary p-40' style={{ paddingBottom: 300 }}>
        <h2 className='f-size-50'>Nuestros proyectos</h2>
        <OurProjects />
      </section> */}
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginBottom: -10, marginTop: -250 }} className='mt-50'>
        <path fill="#F2F168" fillOpacity="1" d="M0,0L16,5.3C32,11,64,21,96,48C128,75,160,117,192,128C224,139,256,117,288,128C320,139,352,181,384,170.7C416,160,448,96,480,64C512,32,544,32,576,69.3C608,107,640,181,672,208C704,235,736,213,768,197.3C800,181,832,171,864,149.3C896,128,928,96,960,112C992,128,1024,192,1056,213.3C1088,235,1120,213,1152,176C1184,139,1216,85,1248,85.3C1280,85,1312,139,1344,154.7C1376,171,1408,149,1424,138.7L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
      </svg> */}
      {/* <section className='bg-thirt p-40'>
        <h2 className='f-size-50'>Nuestros servicios</h2>
        <div className='grid-c-4 gap-25 mt-50'>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-globe"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Sitios web</h3>
            <p className='f-size-24'>Desarrollamos sitios web a la medida de tus necesidades.</p>
          </div>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Tiendas en línea</h3>
            <p className='f-size-24'>Desarrollamos tiendas en línea a la medida de tus necesidades.</p>
          </div>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-computer"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Sistemas</h3>
            <p className='f-size-24'>Desarrollamos sistemas a la medida de tus necesidades.</p>
          </div>
          <div>
            <div className='center-text f-size-100'>
              <i className="fa-solid fa-mobile-button"></i>
            </div>
            <h3 className='f-size-30 mt-20'>Aplicaciones móviles</h3>
            <p className='f-size-24'>Desarrollamos aplicaciones móviles para Android y iOS.</p>
          </div>
        </div>
      </section> */}
      {/* TODO: TERMINAR FORMULARIO DE CONTACTO */}
      {/* <section className='p-100 flex align-center justify-content'>
        <div className='bg-white p-20'>
          <h2 className='f-size-50'>Contacto</h2>
          <form action="">
            <input type="text" placeholder="Nombre"></input>
            <input type="email" placeholder="Correo"></input>
            <input type="text" placeholder="Asunto"></input>
            <textarea name="mensaje" id="mensaje" placeholder="Mensaje"></textarea>
            <input type="submit" value="Enviar" className="btn btn-primary" />
          </form>
        </div>
      </section> */}

      {/* TODO: CREAR COMPONENTE DE PERSONA CON FOTO, NOMBRE Y REDES SOCIALES (GITHUB, INSTAGRAM) */}
      {/* <section className='white-text p-40'>
        <h2 className='f-size-50'>Equipo</h2>

      </section> */}
    </main>
  )
}
