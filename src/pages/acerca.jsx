import imgAbout from '../assets/image/img_perfil.png'; 
import logoSena from '../assets/image/SENA.png';
const AcercaPage = () => {
    return(
        <>
            <section className="container-about">
                <figure className="img-about about-item1">
                    <img src={imgAbout} alt="DEV JR KEVIN GALVIS" />
                </figure>
           
                <article className='art-aboutText about-item3'>
                    <div className='about-information'>
                        <h2>Kevin David Zambrano Galvis</h2>
                        <h3>Tecnologo En Analisis y Desarrollo De Software</h3>
                        <a href="tel:+573015304944" target='_blank'>
                            <i class="bi bi-telephone-fill"></i>
                            3015304944
                        </a>
                        <a href="mailto:kevindevelopersr@outlook.com" target='_blank'>
                            <i class="bi bi-envelope-at-fill"></i>
                            kevindevelopersr@outlook.com
                        </a>
                        <a href="https://www.google.com/maps?q=Colombia,Bogota Dc" target='_blank'>
                            <i class="bi bi-building-fill"></i>
                            Colombia, Bogota Dc
                        </a>
                        <a href="https://github.com/kevinSRdeveloper" target='_blank'>
                            <i class="bi bi-github"></i>
                            kevinSRdeveloper
                        </a>
                    </div>

                </article>
                
            </section>

            <div className="text-profesional">
                <p>¡Soy desarrollador de software junior con experiencia en la creación de aplicaciones web dinámicas y responsivas Mi enfoque principal es el desarrollo frontend utilizando React.js, JavaScript, HTML5 y CSS, pero también tengo conocimientos en Node.js para el backend. Me encanta aprender y enfrentar desafíos que me permitan crecer como profesional.</p>
            </div>

            <section className='sect-card'>
                <div className="card-title">
                    <h2>Educacion Profecional</h2>
                </div>
                <div className="card">
                    <div className="header-card">
                        <img src={logoSena} alt="dev kevin galvis SENA" />
                    </div>
                    <div className="body-card">
                        <h2>Tecnologo En Analisis y Desarrollo De Software</h2>
                        <p><span className='back-card'>Fecha Inicial</span>10/10/2025</p>
                   
                        <p><span className='back-card'>Fecha Final</span>10/10/2025</p>

                    </div>
                </div>
                <div className="card">
                    <div className="header-card">
                        <img src={logoSena} alt="dev kevin galvis SENA" />
                    </div>
                    <div className="body-card">
                        <h2>Tecnico En Programacion De Software</h2>
                        <p><span className='back-card'>Fecha Inicial</span>10/10/2025</p>
                   
                        <p><span className='back-card'>Fecha Final</span>10/10/2025</p>

                    </div>
                </div>
                
            </section>

          
        
          
           
        </>
    );
}

export default AcercaPage;