import Image from 'next/image';
import * as React from 'react';

import Footer from '@/components/layout/Footer';
import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

import ThePig from '../../public/images/pig.svg';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <Image src={ThePig} width={350} height={350} alt={'The Pig'} />
            <p className='mt-2 text-sm text-gray-800'>
              A starter for projects using Next.js, Tailwindcs and Sass written
              in Typescript{' '}
            </p>
            <p className='mt-2 text-sm text-gray-700'>
              <ArrowLink
                href='https://github.com/designpigofficial/dp-project-starter'
                target='_blank'
              >
                See the repository
              </ArrowLink>
            </p>

            <UnstyledLink
              href='https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Ftheodorusclarence%2Fts-nextjs-tailwind-starter'
              className='mt-4'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                width='92'
                height='32'
                src='https://vercel.com/button'
                alt='Deploy with Vercel'
              />
            </UnstyledLink>

            <Footer />
          </div>
        </section>
      </main>
    </Layout>
  );
}
