import React, {useState} from 'react'
import './accordian.css'

export default function Accordian() {
    const Data = [
        {
          question: 'What is your Qualifiation?',
          answer: 'Graduation'
        },
        {
          question: 'What is your Qualifiation?',
          answer: 'Graduation'
        },
        {
          question: 'What is your Qualifiation?',
          answer: 'Graduation'
        }
      ];


    
        const [clicked, setClicked] = useState(false);
      
        const toggle = index => {
          if (clicked === index) {
            //if clicked question is already active, then close it
            return setClicked(null);
          }
      
          setClicked(index);
        };
      

 
    return (
        <>


        <div className="container-acco">
             <h1 className="accordin-head">FAQ</h1>
            <div className='AccordionSectio '>
            <div className='Container'>
            {Data.map((item, index) => {
                return (
                <div>
                    <div className='Wrap' onClick={() => toggle(index)} key={index}>
                    <h1 class="accordin-que">{item.question}</h1>
                    <span>{clicked === index ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}</span>
                    </div>
                    {clicked === index ? (
                    <div div className='Dropdown'>
                        <p>{item.answer}</p>
                    </div>
                    ) : null}
                </div>
                );
            })}
            </div>
        </div>
      </div>


            
        </>
    )
}
