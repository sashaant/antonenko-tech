import React from 'react';
import foto from "../images/foto.jpg";
import "../styles/Foto.css";
import '../styles/HeroComponent.css';

const HeroComponent = () => {
  return (
    <div className="hero_texts text-center px-2">
      <div className="hero_image flex justify-center">
        <img
          src={foto}
          alt="Sasha Antonenko"
          className="rounded-full mb-4 mt-8 profile-pic border-white border"
        />
      </div>
      <h1 className="name dark:text-white uppercase mb-4">Sasha
         <span className="text-primary"> Antonenko</span>
      </h1>
      <div className="dark:text-white subtitle font-medium mb-20">
        <p className="mb-4">JS evangelist in development and testing apps
        <br/>
Making imposible at JABRA</p>
        <p>
          {/* <a
            href="https://developers.google.com/community/experts/directory/profile/profile-debbie-o-brien"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Google GDE
          </a>{' '}
          |{' '}
          <a
            href="https://mvp.microsoft.com/en-us"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Former Microsoft MVP
          </a>{' '}
          |{' '}
          <a
            href="https://stars.github.com/alumni/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            GitHub Star Alumni
          </a>
        </p>
        <p className="mt-4">
          <a
            href="https://cloudinary.com/mde"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Cloudinary MDE
          </a>{' '}
          |{' '}
          <a
            href="https://auth0.com/ambassador-program/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Auth0 Ambassador
          </a>{' '}
          |{' '}
          <a
            href="https://nuxtjs.org/teams/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Nuxt Ambassador
          </a> */}
        </p>
      </div>
    </div>
  );
};

export default HeroComponent;
