
import { styled, Box, Typography } from '@mui/material';
import myImage from '../images/ultra.jpg';

const Image = styled(Box)`
    width: 100%;
    background: url(${myImage}) center/85% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOG</Heading>
            <SubHeading>Your Journey Starts Here</SubHeading>
        </Image>
    )
}

export default Banner;