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

              

            </section>

            <section className='sect-inicio2'>
                <div className="art-inicio2">
                    <div className="text-inicio2">
                        <h2>Educacion Profesional</h2>
                        <hr />
                        <h3>Tecnologo En Analisis y Desarrollo De Software</h3>
                        <h4><span className='span-color'>In:</span> 11/09/2023 <span className='span-color'>Fn:</span>10/12/2025</h4>
                        <p>En Proceso</p>
                    </div>
                    <div className="text-inicio2">
                        <hr />
                        <h3>Tecnico En Programacion De Software</h3>
                        <h4><span className='span-color'>In:</span> 28/09/2015 <span className='span-color'>Fn:</span>28/09/2016</h4>
                        <p className={'certificado' == 'certificado'?'color-green':""}>Certificado</p>
                    </div>
                    <div className="text-inicio2">
                        <h2>Cursos Online</h2>
                        <hr />
                        <h3>React JS</h3>
                        <h4><span className='span-color'>In:</span> 28/09/2015 <span className='span-color'>Fn:</span>28/09/2016</h4>
                        <p className={'certificado' == 'certificado'?'color-green':""}>Certificado</p>
                    </div>
                    <div className="text-inicio2">
                        <hr />
                        <h3>JavaScript</h3>
                        <h4><span className='span-color'>In:</span> 28/09/2015 <span className='span-color'>Fn:</span>28/09/2016</h4>
                        <p className={'certificado' == 'certificado'?'color-green':""}>Certificado</p>
                    </div>

                </div>

            </section>
        
            <span className='squart-span'></span>
           
        </>
    );
}

export default AcercaPage;