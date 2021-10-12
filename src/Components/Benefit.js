import React from 'react'
import './benefit.css'
import heart from './photo/heart.png'
import AT from './photo/AT.png'
import gp from './photo/gp.png'
import HF from './photo/HF.png'
import ld from './photo/ld.png'
import pv from './photo/pv.png'
import bene from './photo/bene.webp'

export default function Benefit() {
    return (
        <>
        <div className="full-container">
        <img src={bene} alt="" className="benefit-image" />
        </div>

            <div className="container bene-container">
           
            <span className="bene-head">BENEFITS</span>
            <h1 className="bene-heading">
            Live your best life
            </h1>
            <div className="bene-para">

            
            <p >
            There’s life at work and life outside of work. We want everyone to be healthy, travel often, get time to give back, and have the financial resources and support they need.
            </p><br />
            <div className="icon-grid">
                
                <div class="tile is-ancestor">
                    <div class="tile is-parent">
                        <article class="tile is-child ">
                        <p class="title">
                            <img  className="photo-circle"src={heart} alt="" srcset="" />
                        </p>
                        <p class="subtitle">Comprehensive health plans</p>
                        </article>
                        <article class="tile is-child ">
                        <p class="title">
                            <img  className="photo-circle"src={pv} alt="" srcset="" />
                        </p>
                        <p class="subtitle">Paid volunteer time</p>
                        </article>
                        <article class="tile is-child ">
                        <p class="title">
                            <img  className="photo-circle"src={HF} alt="" srcset="" />
                        </p>
                        <p class="subtitle">Healthy food and snacks</p>
                        </article>
                        
                        <article class="tile is-child ">
                        <p class="title">
                            <img  className="photo-circle"className="photo-circle" src={gp} alt="" srcset="" />
                        </p>
                        <p class="subtitle">Generous parental and family leave</p>
                        </article>
                        <article class="tile is-child ">
                        <p class="title">
                            <img  className="photo-circle"src={ld} alt="" srcset="" />
                        </p>
                        <p class="subtitle">Learning and development</p>
                        </article>
                        <article class="tile is-child ">
                        <p class="title">
                            <img  className="photo-circle"src={AT} alt="" srcset="" />
                        </p>
                        <p class="subtitle">Annual travel and experiences credit</p>
                        </article>
                    </div>
                </div>

            </div>
                </div>
                </div>
            
        </>
    )
}
