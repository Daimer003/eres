export const pxToRem = (value: number) =>{
    return `${(value/16)}rem`;
}

export const getEllipsisTxt = (str: string, n = 4) => {
    return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
};

export const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
}