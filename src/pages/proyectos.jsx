// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import system from '../assets/image/sistemworkshop.png';
import mundoDivertido from '../assets/image/mundoDivertido.png';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import iconReact from '../assets/icons/react.png';
import iconNode from '../assets/icons/Node JS.png';
import iconJavaScript from '../assets/icons/js.png';
import iconHtml from '../assets/icons/html.png';
import iconCss from '../assets/icons/css.png';
import iconSql from '../assets/icons/sql.png';
import iconGit from '../assets/icons/git.png';
import iconGitHub from '../assets/icons/github.png';



const ProyectosPage = () => {
    return(
        <>
        <section className='sect-proyecto'>
            <div className='title-proyecto'>
                <h2>Proyectos Desarrollo web WebSize</h2>
                
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    768:{
                        slidesPerView:2,
                    },
                    1024:{
                        slidesPerView:4,
                    }
                }}
            >
                <span className='back-edif'></span>
                <article className='slider'>
                    
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="img-slider">
                            <img src={system} alt="dev system kevin galvis" />
                         

                        </div>
                        <div className="tag-slider">
                            <p>Desarrollo Web</p>
                            <p>Sitio Web Informativo</p>
                        </div>
                        <div className="slider-tecnologias">
                            <img src={iconReact} alt="React JS Dev Kevin Galvis" />
                            <img src={iconJavaScript} alt="React JS Dev Kevin Galvis" />
                            <img src={iconHtml} alt="React JS Dev Kevin Galvis" />
                            <img src={iconCss} alt="React JS Dev Kevin Galvis" />
                        </div>
                        <hr />
                       
                        <div className="title-slider">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque delectus tenetur nulla
                            </p>
                        </div>
                        <div className="slider-link">
                            <a href="#" target='_blank'>
                                <i class="bi bi-arrow-up-right-square-fill"></i>
                                www.google.com
                            </a>
                        </div>

                        <div className="slider-git">
                            <a href="#"><i class="bi bi-github"></i></a>
                        </div>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="img-slider">
                            <img src={mundoDivertido} alt="dev system kevin galvis" />
                        </div>
                        <div className="tag-slider">
                            <p>Desarrollo Web</p>
                            <p>Sitio Web Informativo</p>
                        </div>
                        <div className="slider-tecnologias">
                            <img src={iconReact} alt="React JS Dev Kevin Galvis" />
                            <img src={iconJavaScript} alt="React JS Dev Kevin Galvis" />
                            <img src={iconHtml} alt="React JS Dev Kevin Galvis" />
                            <img src={iconCss} alt="React JS Dev Kevin Galvis" />
                        </div>
                        <hr />
                       
                        <div className="title-slider">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque delectus tenetur nulla
                            </p>
                        </div>
                        <div className="slider-link">
                            <a href="#" target='_blank'>
                                <i class="bi bi-arrow-up-right-square-fill"></i>
                                www.google.com
                            </a>
                        </div>

                        <div className="slider-git">
                            <a href="#"><i class="bi bi-github"></i></a>
                        </div>
                       
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slider-card">
                        <div className="img-slider">
                            <img src={mundoDivertido} alt="dev system kevin galvis" />
                        </div>
                        <div className="tag-slider">
                            <p>Desarrollo Web</p>
                            <p>Sitio Web Informativo</p>
                        </div>
                        <div className="slider-tecnologias">
                            <img src={iconReact} alt="React JS Dev Kevin Galvis" />
                            <img src={iconJavaScript} alt="React JS Dev Kevin Galvis" />
                            <img src={iconHtml} alt="React JS Dev Kevin Galvis" />
                            <img src={iconCss} alt="React JS Dev Kevin Galvis" />
                        </div>
                        <hr />
                       
                        <div className="title-slider">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque delectus tenetur nulla
                            </p>
                        </div>
                        <div className="slider-link">
                            <a href="#" target='_blank'>
                                <i class="bi bi-arrow-up-right-square-fill"></i>
                                www.google.com
                            </a>
                        </div>

                        <div className="slider-git">
                            <a href="#"><i class="bi bi-github"></i></a>
                        </div>
                       
                    </div>
                </SwiperSlide>

               
            </article>
                
            </Swiper>

            <div className='title-proyecto'>
                <h2>Proyectos Desarrollo Aplicaciones Web</h2>
                
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    768:{
                        slidesPerView:2,
                    },
                    1024:{
                        slidesPerView:4,
                    }
                }}
            >
            <span className='back-edif'></span>
            <article className='slider'>
            <SwiperSlide>
                    <div className="slider-card">
                        <div className="img-slider">
                            <img src={system} alt="dev system kevin galvis" />
                        </div>
                        <div className="tag-slider">
                            <p>Desarrollo Web</p>
                            <p>Sitio Web Informativo</p>
                        </div>
                        <div className="slider-tecnologias">
                            <img src={iconReact} alt="React JS Dev Kevin Galvis" />
                            <img src={iconJavaScript} alt="React JS Dev Kevin Galvis" />
                            <img src={iconHtml} alt="React JS Dev Kevin Galvis" />
                            <img src={iconCss} alt="React JS Dev Kevin Galvis" />
                        </div>
                        <hr />
                       
                        <div className="title-slider">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cumque delectus tenetur nulla
                            </p>
                        </div>
                        <div className="slider-link">
                            <a href="#" target='_blank'>
                                <i class="bi bi-arrow-up-right-square-fill"></i>
                                www.google.com
                            </a>
                        </div>

                        <div className="slider-git">
                            <a href="#"><i class="bi bi-github"></i></a>
                        </div>
                       
                    </div>
                </SwiperSlide>


            </article>


            </Swiper>
           
            

        </section>
      
           
     


    </>
    );
}

export default ProyectosPage;