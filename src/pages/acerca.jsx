import imgAbout from '../assets/image/img_perfil.png'; 
import logoSena from '../assets/image/SENA.png';
import logoUdemy from '../assets/icons/udemy.svg';
import iconReact from '../assets/icons/react.png';
import iconNode from '../assets/icons/Node JS.png';
import iconJavaScript from '../assets/icons/js.png';
import iconHtml from '../assets/icons/html.png';
import iconCss from '../assets/icons/css.png';
import iconSql from '../assets/icons/sql.png';
import iconGit from '../assets/icons/git.png';
import iconGitHub from '../assets/icons/github.png';
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
                <span className='back-edif'></span>
                <p>¡Soy desarrollador de software junior con experiencia en la creación de aplicaciones web dinámicas y responsivasMi enfoque principal es el desarrollo frontend utilizando React.js, JavaScript, HTML5 y CSS, pero también tengo conocimientos en Node.js para el backend. Me encanta aprender y enfrentar desafíos que me permitan crecer como profesional.</p>
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
                        <p><span className='back-card'>Fecha Inicial</span>  11/09/2023</p>
                   
                     

                        <a href="#" className='back-warning'>En Proceso</a>

                    </div>
                </div>
                <div className="card">
                    <div className="header-card">
                        <img src={logoSena} alt="dev kevin galvis SENA" />
                    </div>
                    <div className="body-card">
                        <h2>Tecnico En Programacion De Software</h2>
                        <p><span className='back-card'>Fecha Inicial</span>  28/09/2015</p>
                   
                        <p><span className='back-card'>Fecha Final</span>  28/09/2016</p>
                        <a href="#" className='back-success'>Certificado</a>


                    </div>
                </div>
                
            </section>

            <section className='sect-skills'>
                <article className='art-skills'>
                    <div className='div-textSkill'>
                        <h2>Tecnologias</h2>
                    </div>
                    <figure className='fig-skills'>
                        <img src={iconReact} alt="React JS Dev Kevin Galvis" />
                        <img src={iconNode} alt="React JS Dev Kevin Galvis" />
                        <img src={iconJavaScript} alt="React JS Dev Kevin Galvis" />
                        <img src={iconSql} alt="React JS Dev Kevin Galvis" />
                        <img src={iconHtml} alt="React JS Dev Kevin Galvis" />
                        <img src={iconCss} alt="React JS Dev Kevin Galvis" />
                        <img src={iconGit} alt="React JS Dev Kevin Galvis" />
                        <img src={iconGitHub} alt="React JS Dev Kevin Galvis" />

                    </figure>

                </article>

                <span className='back-edif'></span>
               
            </section>

            <section className='sect-card'>
                <div className="card-title">
                    <h2>Cursos Online</h2>
                </div>
                <div className="card">
                    <div className="header-card header-card-udemy">
                        <img src={iconReact} alt="dev kevin galvis SENA" />
                        <img src={logoUdemy} alt="dev kevin galvis SENA" />
                    </div>
                    <div className="body-card">
                        <h2>React Js </h2>
                        <p><span className='back-card'>Horas</span> 56.6</p>

                        <a href="#" className='back-success'>Certificado</a>

                    </div>
                </div>
                <div className="card">
                    <div className="header-card">
                        <img src={iconJavaScript} alt="dev kevin galvis SENA" />
                        <img src={logoUdemy} alt="dev kevin galvis SENA" />
                    </div>
                    <div className="body-card">
                        <h2>JavaScript</h2>
                        <p><span className='back-card'>Horas</span> 56.6</p>
                        <a href="#" className='back-success'>Certificado</a>


                    </div>
                </div>
                <div className="card">
                    <div className="header-card">
                        <img src={iconHtml} alt="dev kevin galvis SENA" />
                        <img src={logoUdemy} alt="dev kevin galvis SENA" />
                        
                    </div>
                    <div className="body-card">
                        <h2>HTML5</h2>
                            <p><span className='back-card'>Horas</span> 56.6</p>
                        <a href="#" className='back-success'>Certificado</a>


                    </div>
                </div>
                
            </section>

            
              
           
        </>
    );
}

export default AcercaPage;