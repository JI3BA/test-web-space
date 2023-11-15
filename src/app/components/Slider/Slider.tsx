'use client'

import m from '../../page.module.css'
import s from '../../styles/Slider.module.css'
import {useState} from "react";
import {nunito} from "@/app/fonts/fonts";
import {SlideType} from "@/app/types/SlideType";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const slides: SlideType[] = [
        { id: 1, title: "Оценка дизайнеру:", description: "Не заслужил, там криво, там непонятно", unit: '3', unitDesc:'и не более'},
        { id: 2, title: "Сложность задания", description: "Миссия с вертолетиком была легче..", unit: '5', unitDesc: 'звезд' },
        { id: 3, title: "Потребовалось на тестовое задание:", description: "Справился быстро, забыл пообедать", unit: '9', unitDesc: 'часов' },
    ];

    const changeSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return(
        <div className={`${s.slider} ${nunito.className}`}>
            <div className={m.wrapper}>
                <div className={s.carousel}>

                    <div className={s.carousel__container}>
                        {slides.map((slide, index) => (
                            <div
                                className={`${s.slide} ${index === currentSlide ? `${s.active}` : ""}`}
                                key={slide.id}
                            >
                                <div className={s.unit}>
                                    <p className={s.unit__name}>{slide.unit}</p>

                                    <div className={s.info}>
                                        <h5 className={s.info__title}>{slide.title}</h5>
                                        <p className={s.info__name}>{slide.description}</p>
                                    </div>
                                </div>

                                <p className={s.slide__desc}>{slide.unitDesc}</p>
                            </div>
                        ))}
                    </div>

                    <div className={s.pagination}>
                        {slides.map((slide, index) => (
                            <span
                                className={`${s.dot} ${index === currentSlide ? `${s.active}` : ""}`}
                                key={slide.id}
                                onClick={() => changeSlide(index)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider