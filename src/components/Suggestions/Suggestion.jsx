import React from 'react';
import './Suggestion.css'

import Photos from './image/suggestion.jpeg'

export default () =>
    <section className='suggestion'>
        <div className='profile'>
            <div className='my-img'>
                <div className='div-img-suggestion'>
                    <img src={Photos} alt="Your photo" className='suggestion-img-profile' />
                </div>
            </div>
            <div className='tag-name'>
                <div className='name'>
                    <p className='tag'>Dev_Vitor</p>
                    <p className='profile-name'>Vitor Hugo</p>
                </div>
                <div className='change'>
                    <p className='change-text' className='suggestion-img-profile'>
                        Change
                    </p>
                </div>
            </div>
        </div>
        <div className='for-you'>
            <p className='text-suggestion'>Suggestion for you</p>
            <p className='see'>See all</p>
        </div>
        <div className='peoples-profile'>
            <div className='profile-peoples'>
                <div className='div-img-profile'>
                    <img src={Photos} alt="Peoples"/>
                </div>
                <div className='texts-profile'>
                    <p className='text-title-profile'>An imaginary person</p>
                    <p className='text-descriped-profile'>Suggested for you</p>
                </div>
                <div className='follow-profile'>
                    <p className='text-follow-profile'>
                        Follow
                    </p>
                </div>
            </div>
            <div className='profile-peoples'>
                <div className='div-img-profile'>
                    <img src={Photos} alt="Peoples"/>
                </div>
                <div className='texts-profile'>
                    <p className='text-title-profile'>An imaginary person</p>
                    <p className='text-descriped-profile'>Suggested for you</p>
                </div>
                <div className='follow-profile'>
                    <p className='text-follow-profile'>
                        Follow
                    </p>
                </div>
            </div>
            <div className='profile-peoples'>
                <div className='div-img-profile'>
                    <img src={Photos} alt="Peoples"/>
                </div>
                <div className='texts-profile'>
                    <p className='text-title-profile'>An imaginary person</p>
                    <p className='text-descriped-profile'>Suggested for you</p>
                </div>
                <div className='follow-profile'>
                    <p className='text-follow-profile'>
                        Follow
                    </p>
                </div>
            </div>
            <div className='profile-peoples'>
                <div className='div-img-profile'>
                    <img src={Photos} alt="Peoples"/>
                </div>
                <div className='texts-profile'>
                    <p className='text-title-profile'>An imaginary person</p>
                    <p className='text-descriped-profile'>Suggested for you</p>
                </div>
                <div className='follow-profile'>
                    <p className='text-follow-profile'>
                        Follow
                    </p>
                </div>
            </div>
             <div className='profile-peoples'>
                <div className='div-img-profile'>
                    <img src={Photos} alt="Peoples"/>
                </div>
                <div className='texts-profile'>
                    <p className='text-title-profile'>An imaginary person</p>
                    <p className='text-descriped-profile'>Suggested for you</p>
                </div>
                <div className='follow-profile'>
                    <p className='text-follow-profile'>
                        Follow
                    </p>
                </div>
            </div>
        </div>
    </section>