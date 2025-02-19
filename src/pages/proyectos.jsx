// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const ProyectosPage = () => {
    return(
        <>
        <section className='sect-proyecto'>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            </Swiper>
            <div className='title-proyecto'>
                <h2>Proyectos Desarrollo web WebSize</h2>
            </div>
            <article className='slider'>
                <SwiperSlide>
                    <div className="slider-card">
                       
                    </div>
                </SwiperSlide>

            </article>

        </section>
      
           
     


    </>
    );
}

export default ProyectosPage;