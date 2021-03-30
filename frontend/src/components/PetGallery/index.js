import React, {useState} from 'react';

import '@brainhubeu/react-carousel/lib/style.css'; 

import { CarouselContainer, CarouselCustom } from './styles';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';

import banner00 from '../../assets/pets/cat00.jpg';

function PetGallery() {
    return (
    <div>
        <CarouselContainer>
            <Carousel plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 2,
                    },
                },
                {
                    resolve: slidesToScrollPlugin,
                    options: {
                        numberOfSlides: 2,
                    },
                },
            ]}>
                <img style={{width: '300px'}} src={banner00} />
                <img style={{width: '300px'}} src={banner00} />
                <img style={{width: '300px'}} src={banner00} />
            </Carousel>
        </CarouselContainer>
    </div>
    );
}

export default PetGallery;