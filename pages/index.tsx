import { MainLayout } from '@/components/layout'
import { Player } from '@lottiefiles/react-lottie-player'

export default function Home() {
  return (
    <MainLayout title='itcoders.tech' description='Desarrolladores apasionados'>
      <main>
        <section className='flex column justify-content align-center bg-black' style={{ height: '96vh' }}>
          <h1 className='white-text f-size-100 ls-1'>itcoders.tech</h1>
          <Player
            className="img-fluid"
            autoplay
            loop
            src="https://lottie.host/0cb71c55-0881-4936-a04e-e562d7b3c9c5/yMbDwhNWrZ.json"
            background="transparent"
            style={{ height: 400, width: 'auto' }}
          />
        </section>
        <section className='grid-c-2 white-text'>
          <div className='p-40'>
            <h2 className='f-size-50'>Sobre nosotros</h2>
            <p className='f-size-24'>Somos un grupo de desarrolladores de aplicaciones y sistemas aplicados a la vida real que pertenece y trabaja en conjunto como un grupo estudiantil con el departamento de sistemas del Instituto Tecnológico de Celaya.</p>
          </div>
          <div>
            <Player
              className="img-fluid"
              autoplay
              loop
              src="https://lottie.host/ca13a1ff-8b20-483a-b6b4-541d40a07dea/2vMLggQ0Mb.json"
              background="transparent"
              style={{ height: 400, width: 'auto' }}
            />
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ marginBottom: -10 }}>
          <path fill="#0099ff" fillOpacity="1" d="M0,0L16,5.3C32,11,64,21,96,48C128,75,160,117,192,128C224,139,256,117,288,128C320,139,352,181,384,170.7C416,160,448,96,480,64C512,32,544,32,576,69.3C608,107,640,181,672,208C704,235,736,213,768,197.3C800,181,832,171,864,149.3C896,128,928,96,960,112C992,128,1024,192,1056,213.3C1088,235,1120,213,1152,176C1184,139,1216,85,1248,85.3C1280,85,1312,139,1344,154.7C1376,171,1408,149,1424,138.7L1440,128L1440,320L1424,320C1408,320,1376,320,1344,320C1312,320,1280,320,1248,320C1216,320,1184,320,1152,320C1120,320,1088,320,1056,320C1024,320,992,320,960,320C928,320,896,320,864,320C832,320,800,320,768,320C736,320,704,320,672,320C640,320,608,320,576,320C544,320,512,320,480,320C448,320,416,320,384,320C352,320,320,320,288,320C256,320,224,320,192,320C160,320,128,320,96,320C64,320,32,320,16,320L0,320Z"></path>
        </svg>
        <section className='white-text bg-secondary p-40'>
          <h2 className='f-size-50'>Nuestros proyectos</h2>
          <div className='grid-c-6'>
            {/* TODO: CREAR COMPONENTE DE TARJETA CON FOTO, NOMBRE Y DESCRIPCIÓN */}
          </div>
        </section>
        <section className='white-text p-40'>
          <h2 className='f-size-50'>Equipo</h2>
          {/* TODO: CREAR COMPONENTE DE PERSONA CON FOTO, NOMBRE Y REDES SOCIALES (GITHUB, INSTAGRAM) */}
        </section>
      </main>
    </MainLayout>
  )
}
