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
        <Wrap align="center" justify='center' spacing={5} >
            {
                techniques.map((item, index) => {
                    return (
                        <WrapItem
                            key={index}
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Center
                                w={{ base: '170px', md: '240px' }}
                                h={{ base: '170px', md: '240px' }}

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
                                        padding="10px"
                                    >
                                        <Text
                                            textAlign="center"
                                            textOverflow="ellipsis"
                                            overflow="hidden"
                                            whiteSpace="normal"
                                            fontSize={{ base: 'md', md: '2xl' }}
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