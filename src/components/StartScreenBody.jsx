import React from 'react';
import img from '../source/стартовый экран картинка с рамкой.png'

const StartScreenBody = () => {
    return (
        <div className='startScreenBody'>
            <section>
                <h1>
                    Созонов.рф
                </h1>
                <span>
                    Программно-аппаратный комплекс мониторинга придомовых не регулируемых парковочных мест.
                </span>
                <button>
                    Узнать подробнее
                </button>
            </section>
            <div className="imageBox">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default StartScreenBody;