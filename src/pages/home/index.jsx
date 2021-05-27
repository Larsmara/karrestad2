import React from 'react';
import Hero from '@components/hero';
import BasicLayout from '@components/basicLayout';

export default function Landing() {
  return (
    <BasicLayout>
      <Hero
        title='Karrestad II - Vår portal'
        subtitle='Dette er en nettside laget for beboere i Karrestad II borettslag. Her kan du finne informasjon om styret, ordensregler og sende inn saker til styret.'
        image='./images/karrestad.jpg'
        ctaText='Om oss i styret'
        cta2Text='Nyheter'
        ctaLink='/members'
        cta2Link='/news'
      />
    </BasicLayout>
  );
}
