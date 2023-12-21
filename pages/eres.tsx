import { useState, useRef } from "react";
import Card from "@/src/components/card/card";
import Details from "@/src/components/details/details";
import { useDisclosure } from '@chakra-ui/react'
import {
    BoxHeader,
    GridImg,
    BoxText,
    BoxEres,
    BoxTeachers,
    BoxRowTeachers,
    BoxContent,
    BoxRehabilitation,
    BoxRowRehabilitation,
    ContentAudio
} from "@/styles/components/header/header.styles";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import ModalComponet from "@/src/components/modal/modal";
import Carousel from "@/src/components/carousel/carousel";
import { SwiperSlide } from 'swiper/react';
import { curso, imgs } from "@/src/utils/data/data";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";

const Eres = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    // const [sucessfull, setSucessfull] = useState<boolean>(true);
    const [itemCourse, setitemCourse] = useState<any>()
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    //*Repoduce el audio
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    //*Ejecuta el modal para ver los detalles del item
    const open = (itam) => {
        onOpen()
        setitemCourse(itam)
    }

    return (
        <Box display="flex" flexDirection="column" width="100%" gap="100px">
            <BoxHeader>
                <BoxText as="h1">
                    <span>Tu</span>
                    <span>Sensación</span>
                </BoxText>
                <GridImg>
                    {
                        imgs.map((img, i) => {
                            return (
                                <Image key={i} src={img.img} alt="Imagen del hedader" width={140} height={140} />
                            )
                        })
                    }
                </GridImg>
            </BoxHeader>
            <Box>
                <BoxEres>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                        maxW="600px">
                        <Image src="/assets/eres.png" alt="Imagen eres" width={400} height={400} />
                    </Box>
                    <Box width="100%">
                        <Text as="h2" fontFamily="'Cormorant Garamond', serif" fontSize="5xl">
                            En Eres
                        </Text>
                        <Text
                            as="p"
                            fontSize="18px"
                        >
                            Te damos la bienvenida a un espacio dedicado al entrenamiento vocal, la capacitación personalizada y una amplia gama de servicios diseñados para todos aquellos que sienten una profunda pasión por descubrir el potencial oculto de su voz.
                            <br /><br />Eres más que una voz; eres una sensación, una fuente de talento esperando a ser descubierta y perfeccionada.
                            En Eres, te ayudaremos a desarrollar tus habilidades vocales, a encontrar esa sensación única en cada palabra y a liberar tu talento innato.
                        </Text>
                    </Box>
                </BoxEres>
            </Box>

            <Box>
                <BoxTeachers>
                    <Text as="h3" fontSize="5xl" textAlign="center" fontFamily="'Cormorant Garamond', serif">Tus Profes</Text>
                    <BoxRowTeachers>
                        <BoxContent imgBackground="/assets/teachers/pahola.png">
                            {/* <Image src="/assets/teachers/pahola.png" alt="Imagen eres" width={400} height={400} /> */}
                            <ContentAudio>
                                <audio ref={audioRef} controls>
                                    <source src="/assets/audios/amarte-Igual.mp3" type="audio/mpeg" />
                                    Tu navegador no soporta el elemento de audio.
                                </audio>
                                <button onClick={togglePlay}>
                                    {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                                </button>
                            </ContentAudio>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text as="h4" color="#9AE4D3" fontSize="4xl" fontFamily="'Cormorant Garamond', serif">
                                    Pahola Valenzuela
                                </Text>
                                <Text as="p" color="#FFFFFF" fontSize="2xl" >
                                    Escucha nuestra voz.
                                </Text>
                            </Box>

                        </BoxContent>
                        <BoxContent
                            imgBackground="/assets/teachers/danna.png">
                            {/* <Image src="/assets/teachers/danna.png" alt="Imagen eres" width={400} height={400} /> */}
                            <ContentAudio>
                                <audio ref={audioRef} controls>
                                    <source src="/assets/audios/amarte-Igual.mp3" type="audio/mpeg" />
                                    Tu navegador no soporta el elemento de audio.
                                </audio>
                                <button onClick={togglePlay}>
                                    {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                                </button>
                            </ContentAudio>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Text as="h4" color="#9AE4D3" fontSize="4xl" fontFamily="'Cormorant Garamond', serif">Danna Palacios</Text>
                                <Text as="p" color="#FFFFFF" fontSize="2xl" >Escucha nuestra voz.</Text>
                            </Box>
                        </BoxContent>
                    </BoxRowTeachers>
                </BoxTeachers>
            </Box>

            <Box>
                <BoxRehabilitation>
                    <Text as="h3" fontSize="5xl" fontFamily="'Cormorant Garamond', serif">
                        Rehabilitación Vocal
                    </Text>
                    <Text as="p" fontSize="18px" fontFamily="'Cormorant Garamond', serif">
                        Nuestra categoría de Rehabilitación Vocal está diseñada para cuidar y mejorar tu voz hablada y/o cantada. Te ofrecemos los siguientes paquetes especializados para ti:
                    </Text>
                    <BoxRowRehabilitation>
                        <Carousel>
                            {
                                curso.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Card
                                                onClick={() => open(item)}
                                                img={item.image}
                                                title={item.title}
                                                text={item.text}
                                                value={item.price} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Carousel>
                    </BoxRowRehabilitation>
                </BoxRehabilitation>
            </Box>

            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                w="100%"
                h="400px"
                borderRadius="28px"
                backgroundImage="/assets/banner.jpg"
                backgroundPosition="center"
                backgroundSize="cover"
                p="20px"
            >
                <Text
                    as="p"
                    fontSize="4xl"
                    color="white"
                    fontFamily="'Cormorant Garamond', serif"
                    fontWeight="700"
                    textAlign="center"
                    variant={["sm", "lg"]}
                >
                    ¡Únete a Eres y desbloquea
                    el potencial oculto de tu voz!
                </Text>
            </Box>

            <Box>
                <BoxRehabilitation>
                    <Text as="h3" fontSize="5xl" fontFamily="'Cormorant Garamond', serif">
                        Rehabilitación Vocal
                    </Text>
                    <Text as="p" fontSize="18px" fontFamily="'Cormorant Garamond', serif">
                        Nuestra categoría de Rehabilitación Vocal está diseñada para cuidar y mejorar tu voz hablada y/o cantada. Te ofrecemos los siguientes paquetes especializados para ti:
                    </Text>
                    <BoxRowRehabilitation>
                        <Carousel>
                            {
                                curso.map((item, i) => {
                                    return (
                                        <SwiperSlide key={i}>
                                            <Card
                                                key={i}
                                                id={item.id}
                                                onClick={() => open(item)}
                                                img={item.image}
                                                title={item.title}
                                                text={item.text}
                                                value={item.price} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Carousel>
                    </BoxRowRehabilitation>
                </BoxRehabilitation>
            </Box>
            <ModalComponet isOpen={isOpen} onClose={onClose} required={false}>
                <Details itemCourse={itemCourse} onClose={() => onClose()} />
            </ModalComponet>
        </Box>
    );
}

export default Eres;