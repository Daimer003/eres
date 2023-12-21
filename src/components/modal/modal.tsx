
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { ReactNode } from 'react';

interface Props {
    isOpen: boolean,
    onClose: () => void,
    children: ReactNode,
    required?: boolean
}

const ModalComponet = ({ isOpen, onClose, children, required }: Props) => {

    return (
        <>
            <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={!required ? onClose : onClose} size={"4xl"}>
                <ModalOverlay />
                <ModalContent margin="auto 20px" borderRadius="20px">
                    {!required ? <ModalCloseButton /> : <></>}
                    <ModalBody>
                        {children}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalComponet;