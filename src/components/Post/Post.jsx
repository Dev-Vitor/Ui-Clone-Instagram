import React from 'react';
import './Post.css';

import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai'
import { RiFlag2Line } from 'react-icons/ri'
import { FaRegPaperPlane, FaRegComment } from 'react-icons/fa'

import Woman from './images/Woman.jpg'

export default () =>
    <>
    <section className='section-posts'>
        <div className='div-name'>
            <div className='div-photo-woman'>
                <img src={Woman} alt="Woman" className='photo-woman' />
            </div>
            <p className='name-account'>An imaginary person</p>
            <div className='div-dots'>
                <BiDotsHorizontalRounded size='1.5rem' className='dots-icons' />
            </div>
        </div>
        <div className='post-body'>
            <img src={Woman} alt="Woman" className='img-woman-post' />
        </div>
        <div className='div-icons-posts'>
            <div className='div-reacts'>
                <AiOutlineHeart  size='2.1rem' className='icons-reacts' />
                <FaRegComment  size='2rem' className='icons-reacts' />
                <FaRegPaperPlane  size='2rem' className='icons-reacts' />
            </div>
            <div className='div-saved'>
                <RiFlag2Line className='save-post'  size='2rem' />
            </div>
        </div>
        <div className='div-info-posts'>
            <div className='likes-in-post'>
                <div className='div-img-liked-post'>
                    <img src={Woman} alt="Woman" className='img-post-liked'/>
                </div>
                    <p className='text-post-liked'>Liked by <b>an person </b> and <b>10 others</b></p>
            </div>
            <div className='post-description'>
                <p className='text-description-post'><b>An_Person</b> The World is beautiful.</p>
            </div>
            <div className='post-send-data'>
                <p className='text-time-post'>
                10 minutes ago
                </p>
            </div>
            <div className='comment-post'>
                <input type="text"className='area-comment-post' placeholder='add a comment to the post' />
                <p className='publish-post-comment'>Publish</p>
            </div>
        </div>
    </section>

    <section className='section-posts'>
        <div className='div-name'>
            <div className='div-photo-woman'>
                <img src={Woman} alt="Woman" className='photo-woman' />
            </div>
            <p className='name-account'>An imaginary person</p>
            <div className='div-dots'>
                <BiDotsHorizontalRounded size='1.5rem' className='dots-icons' />
            </div>
        </div>
        <div className='post-body'>
            <img src={Woman} alt="Woman" className='img-woman-post' />
        </div>
        <div className='div-icons-posts'>
            <div className='div-reacts'>
                <AiOutlineHeart  size='2.1rem' className='icons-reacts' />
                <FaRegComment  size='2rem' className='icons-reacts' />
                <FaRegPaperPlane  size='2rem' className='icons-reacts' />
            </div>
            <div className='div-saved'>
                <RiFlag2Line className='save-post'  size='2rem' />
            </div>
        </div>
        <div className='div-info-posts'>
            <div className='likes-in-post'>
                <div className='div-img-liked-post'>
                    <img src={Woman} alt="Woman" className='img-post-liked'/>
                </div>
                    <p className='text-post-liked'>Liked by <b>an person </b> and <b>10 others</b></p>
            </div>
            <div className='post-description'>
                <p className='text-description-post'><b>An_Person</b> The World is beautiful.</p>
            </div>
            <div className='post-send-data'>
                <p className='text-time-post'>
                10 minutes ago
                </p>
            </div>
            <div className='comment-post'>
                <input type="text"className='area-comment-post' placeholder='add a comment to the post' />
                <p className='publish-post-comment'>Publish</p>
            </div>
        </div>
    </section>

    <section className='section-posts'>
        <div className='div-name'>
            <div className='div-photo-woman'>
                <img src={Woman} alt="Woman" className='photo-woman' />
            </div>
            <p className='name-account'>An imaginary person</p>
            <div className='div-dots'>
                <BiDotsHorizontalRounded size='1.5rem' className='dots-icons' />
            </div>
        </div>
        <div className='post-body'>
            <img src={Woman} alt="Woman" className='img-woman-post' />
        </div>
        <div className='div-icons-posts'>
            <div className='div-reacts'>
                <AiOutlineHeart  size='2.1rem' className='icons-reacts' />
                <FaRegComment  size='2rem' className='icons-reacts' />
                <FaRegPaperPlane  size='2rem' className='icons-reacts' />
            </div>
            <div className='div-saved'>
                <RiFlag2Line className='save-post'  size='2rem' />
            </div>
        </div>
        <div className='div-info-posts'>
            <div className='likes-in-post'>
                <div className='div-img-liked-post'>
                    <img src={Woman} alt="Woman" className='img-post-liked'/>
                </div>
                    <p className='text-post-liked'>Liked by <b>an person </b> and <b>10 others</b></p>
            </div>
            <div className='post-description'>
                <p className='text-description-post'><b>An_Person</b> The World is beautiful.</p>
            </div>
            <div className='post-send-data'>
                <p className='text-time-post'>
                10 minutes ago
                </p>
            </div>
            <div className='comment-post'>
                <input type="text"className='area-comment-post' placeholder='add a comment to the post' />
                <p className='publish-post-comment'>Publish</p>
            </div>
        </div>
    </section>

    <section className='section-posts'>
        <div className='div-name'>
            <div className='div-photo-woman'>
                <img src={Woman} alt="Woman" className='photo-woman' />
            </div>
            <p className='name-account'>An imaginary person</p>
            <div className='div-dots'>
                <BiDotsHorizontalRounded size='1.5rem' className='dots-icons' />
            </div>
        </div>
        <div className='post-body'>
            <img src={Woman} alt="Woman" className='img-woman-post' />
        </div>
        <div className='div-icons-posts'>
            <div className='div-reacts'>
                <AiOutlineHeart  size='2.1rem' className='icons-reacts' />
                <FaRegComment  size='2rem' className='icons-reacts' />
                <FaRegPaperPlane  size='2rem' className='icons-reacts' />
            </div>
            <div className='div-saved'>
                <RiFlag2Line className='save-post'  size='2rem' />
            </div>
        </div>
        <div className='div-info-posts'>
            <div className='likes-in-post'>
                <div className='div-img-liked-post'>
                    <img src={Woman} alt="Woman" className='img-post-liked'/>
                </div>
                    <p className='text-post-liked'>Liked by <b>an person </b> and <b>10 others</b></p>
            </div>
            <div className='post-description'>
                <p className='text-description-post'><b>An_Person</b> The World is beautiful.</p>
            </div>
            <div className='post-send-data'>
                <p className='text-time-post'>
                10 minutes ago
                </p>
            </div>
            <div className='comment-post'>
                <input type="text"className='area-comment-post' placeholder='add a comment to the post' />
                <p className='publish-post-comment'>Publish</p>
            </div>
        </div>
    </section>

    <section className='section-posts'>
        <div className='div-name'>
            <div className='div-photo-woman'>
                <img src={Woman} alt="Woman" className='photo-woman' />
            </div>
            <p className='name-account'>An imaginary person</p>
            <div className='div-dots'>
                <BiDotsHorizontalRounded size='1.5rem' className='dots-icons' />
            </div>
        </div>
        <div className='post-body'>
            <img src={Woman} alt="Woman" className='img-woman-post' />
        </div>
        <div className='div-icons-posts'>
            <div className='div-reacts'>
                <AiOutlineHeart  size='2.1rem' className='icons-reacts' />
                <FaRegComment  size='2rem' className='icons-reacts' />
                <FaRegPaperPlane  size='2rem' className='icons-reacts' />
            </div>
            <div className='div-saved'>
                <RiFlag2Line className='save-post'  size='2rem' />
            </div>
        </div>
        <div className='div-info-posts'>
            <div className='likes-in-post'>
                <div className='div-img-liked-post'>
                    <img src={Woman} alt="Woman" className='img-post-liked'/>
                </div>
                    <p className='text-post-liked'>Liked by <b>an person </b> and <b>10 others</b></p>
            </div>
            <div className='post-description'>
                <p className='text-description-post'><b>An_Person</b> The World is beautiful.</p>
            </div>
            <div className='post-send-data'>
                <p className='text-time-post'>
                10 minutes ago
                </p>
            </div>
            <div className='comment-post'>
                <input type="text"className='area-comment-post' placeholder='add a comment to the post' />
                <p className='publish-post-comment'>Publish</p>
            </div>
        </div>
    </section>

    <section className='section-posts'>
        <div className='div-name'>
            <div className='div-photo-woman'>
                <img src={Woman} alt="Woman" className='photo-woman' />
            </div>
            <p className='name-account'>An imaginary person</p>
            <div className='div-dots'>
                <BiDotsHorizontalRounded size='1.5rem' className='dots-icons' />
            </div>
        </div>
        <div className='post-body'>
            <img src={Woman} alt="Woman" className='img-woman-post' />
        </div>
        <div className='div-icons-posts'>
            <div className='div-reacts'>
                <AiOutlineHeart  size='2.1rem' className='icons-reacts' />
                <FaRegComment  size='2rem' className='icons-reacts' />
                <FaRegPaperPlane  size='2rem' className='icons-reacts' />
            </div>
            <div className='div-saved'>
                <RiFlag2Line className='save-post'  size='2rem' />
            </div>
        </div>
        <div className='div-info-posts'>
            <div className='likes-in-post'>
                <div className='div-img-liked-post'>
                    <img src={Woman} alt="Woman" className='img-post-liked'/>
                </div>
                    <p className='text-post-liked'>Liked by <b>an person </b> and <b>10 others</b></p>
            </div>
            <div className='post-description'>
                <p className='text-description-post'><b>An_Person</b> The World is beautiful.</p>
            </div>
            <div className='post-send-data'>
                <p className='text-time-post'>
                10 minutes ago
                </p>
            </div>
            <div className='comment-post'>
                <input type="text"className='area-comment-post' placeholder='add a comment to the post' />
                <p className='publish-post-comment'>Publish</p>
            </div>
        </div>
    </section>
    </>