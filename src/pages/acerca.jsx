import imgAbout from '../assets/image/img_perfil.png'; 
const AcercaPage = () => {
    return(
        <>
            <section className="container-about">
                <figure className="img-about about-item1">
                    <img src={imgAbout} alt="DEV JR KEVIN GALVIS" />
                </figure>
                <article className="art-about about-item2">
                   
                </article>
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
                <span className='squart-span'></span>

              

            </section>

            <section className='sect-inicio2'>
                <div className="text-inicio">
                    <h3>Estudios Profesionales</h3>
                </div>
                <div className="card-inicio">
                    <h2>Tecnologo En Analisis y Desarrollo de software | SENA</h2>
                    <hr />
                    <h4><span>Fecha Inicio</span>10/10/2025 </h4>
                    <h4><span>Fecha Final</span>10/10/2025 </h4>
                    <p>En Proceso</p>
                </div>
                <div className="card-inicio">
                    <h2>Tecnologo En Analisis y Desarrollo de software | SENA</h2>
                    <hr />
                    <h4><span>Fecha Inicio</span>10/10/2025 </h4>
                    <h4><span>Fecha Final</span>10/10/2025 </h4>
                    <p>En Proceso</p>
                </div>
            </section>
           
            <section className='sect-inicio2 background-light'>
                <div className="text-inicio background-blue">
                    <h3>Cursos</h3>
                </div>
                <div className="card-inicio background-border">
                    <h2>Tecnologo En Analisis y Desarrollo de software | SENA</h2>
                    <hr />
                    <h4><span>Fecha Inicio</span>10/10/2025 </h4>
                    <h4><span>Fecha Final</span>10/10/2025 </h4>
                    <p>En Proceso</p>
                </div>
                <div className="card-inicio background-border">
                    <h2>Tecnologo En Analisis y Desarrollo de software | SENA</h2>
                    <hr />
                    <h4><span>Fecha Inicio</span>10/10/2025 </h4>
                    <h4><span>Fecha Final</span>10/10/2025 </h4>
                    <p>En Proceso</p>
                </div>
            </section>

            <section className='sect-inicio2'>
                <div className="text-inicio ">
                    <h3>Tecnologias</h3>
                </div>
                <div className="card-inicio ">
                    <h2>Tecnologias </h2>
                    <hr />
                    <h4>Ract JS</h4>
                    <h4>JavaScript</h4>
                    <h4>Node JS</h4>
                    <h4>SQL</h4>
                    <h4>HTML5</h4>
                    <h4>Css3</h4>
                   
                </div>
                <div className="card-inicio">
                    <h2>Herramientas</h2>
                    <hr />
                    <h4>Git</h4>
                    <h4>GitHub</h4>
                    <h4>Figma</h4>  
                </div>
            </section>
        
          
           
        </>
    );
}

export default AcercaPage;