import React from 'react';
import  FeedbackForm  from './Form/FeedbackForm'
import './styles/Feedback.css'



const Feedback = () => {
    return (
        <section className='feedback'>
            <article>
                <div>
                    <h2>ОБРАТНАЯ СВЯЗЬ</h2>
                    <span>В целях оперативного рассмотрения ваших обращений просим максимально точно изложить суть вопроса и имеющиеся факты.</span>
                </div>
            <FeedbackForm/>
            </article>
        </section>
    );
};

export default Feedback;