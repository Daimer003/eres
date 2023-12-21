import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y } from "swiper";
import { ReactNode } from 'react';
import { BoxCarousel, ContentCarousel } from '@/styles/components/Carousel/carouse.styles';

SwiperCore.use([Navigation, Scrollbar, A11y]);

interface Props {
    children: ReactNode
}

const Carousel = ({ children }: Props) => {
    return (
        <BoxCarousel>
            <ContentCarousel>
                <Swiper
                    navigation
                    spaceBetween={20}
                    loop={false}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                        1440: {
                            slidesPerView: 3,
                        },
                    }}
                >

                    {children}

                </Swiper>
            </ContentCarousel>
        </BoxCarousel>
    );
}

export default Carousel;