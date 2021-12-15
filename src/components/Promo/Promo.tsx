import React, { FC } from 'react'
import './Promo.scss'
import { useTranslation } from 'react-i18next'
import Particles from "react-tsparticles";

interface PromoProps {
  title: string,
  subtitle: string,
}

const Promo: FC<PromoProps> = ({ title, subtitle }) => {
  const { t } = useTranslation()
  return (
    <section className='promo'>
      <h1 className='promo__title'>{t(title)}</h1>
      <p className='promo__subtitle'>{t(subtitle)}</p>
      <Particles
      id='tsparticles'
      className='tsparticles'
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 2,
            },
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
    </section>
  )
}

export default Promo
