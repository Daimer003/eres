import { techniques } from '@/src/utils/data/data';
import {
    Badge,
    Wrap,
    WrapItem,
    Center,
    Text,
    Box
} from '@chakra-ui/react'

const innerBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    boxSize: 'full',
    color: 'white',
    textShadow: '0 0 20px black',
    fontWeight: 'bold',
    fontSize: '20px',
}

const Techniques = () => {
    return (
        <Wrap>
            {
                techniques.map((item, index) => {
                    return (
                        <WrapItem
                            key={index}

                        >
                            <Center
                                w='250px'
                                h='250px'

                            >
                                <Badge
                                    sx={innerBoxStyles}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                    width="100%"
                                    height="100%"
                                    border="1px"
                                    borderColor='gray'
                                    colorScheme='gray'
                                    borderRadius="22px"
                                    padding="10px"
                                    backgroundImage={item.img}
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                >
                                    <Box
                                        display="flex"
                                        sx={innerBoxStyles}
                                        borderRadius="22px"
                                        width="100%"
                                        height="100%"
                                        backdropFilter='auto'
                                        backdropContrast='50%'
                                    >
                                        <Text
                                            textAlign="center"
                                            textOverflow="ellipsis"
                                            overflow="hidden"
                                            whiteSpace="normal"
                                            fontSize="2xl"
                                        >
                                            {item.title}
                                        </Text>
                                    </Box>
                                </Badge>
                            </Center>
                        </WrapItem>
                    )
                })
            }


        </Wrap>

    );
}

export default Techniques;