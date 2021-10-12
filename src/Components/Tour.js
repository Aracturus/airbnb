import {React ,useState } from 'react'

import './tour.css'
import { SliderImage } from './SliderImage.js';

export default function Tour(slide) {
    const [current, setCurrent] = useState(0);

        const length = slide.length;
      
        const nextSlide = () => {
          setCurrent(current === length - 1 ? 0 : current + 1);
        };
      
        const prevSlide = () => {
          setCurrent(current === 0 ? length - 1 : current - 1);
        };

    const ImageSlider = ({ slide }) => {
        
      
        if (!Array.isArray(slide) || slide.length <= 0) {
          return null;
        }
    }
      
    return (
        <>

                <section className='slider'>
                    <span className='left-arrow' onClick={prevSlide} > &gt;</span>
                    <span className='right-arrow' onClick={nextSlide} > &lt;</span>
                    {SliderImage.map((slide, index) => {
                        return (
                        <div
                            className={index === current ? 'slide active' : 'slide'}
                            key={index}
                        >
                            {index === current && (
                            <img src={slide.image} alt='travel image' className='image' />
                            )}
                        </div>
                        );
                    })}
                </section>
           
        </>
    )
}
