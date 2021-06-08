import React from 'react';
import { Layout, Hero } from '../../components';
import { ROUTES } from '../../constants/routes';

export default function Landing() {
  return (
    <Layout>
      <Hero
        title='Karrestad II - Vår portal'
        subtitle='Dette er en nettside laget for beboere i Karrestad II borettslag. Her kan du finne informasjon om styret, ordensregler og sende inn saker til styret.'
        image='./images/karrestad.jpg'
        ctaText='Om oss i styret'
        cta2Text='Nyheter'
        ctaLink={ROUTES.MEMBERS}
        cta2Link='/news'
      />
    </Layout>
  );
}
