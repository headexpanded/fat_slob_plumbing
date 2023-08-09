import Head from 'next/head';
import { Suspense } from 'react';
import { gql, request } from 'graphql-request';

import { CustomerReview } from '@sections/CustReviewsSection';
import { Partner } from '@sections/PartnersSection';
import { Section } from '@sections/index';

type IndexProps = {
  customerReviews: CustomerReview[];
  partnersData: Partner[];
  //franchisesData?: Franchise[] | undefined;
};

function Index({ customerReviews, partnersData }: IndexProps) {
  return (
    <div className="main">
      <Head>
        <title>Fat Slob Plumbing</title>
        <meta
          name="description"
          key="desc"
          content="Fat Slob Plumbing stress tests toilets. We're the UK's number 2 toilet testing service! Book Fat Slob Plumbing to stress test YOUR toilet!"
        />
        <meta property="og:title" content="Fat Slob Plumbing" />
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta
          property="og:description"
          content="The UK's number 2 toilet testing service."
        />
        <meta
          name="keywords"
          content="
    toilet blocked,
    blocked toilet,
    blocked toilet repair,
    blocked toilet replacement,
    blocked toilet service,
    blocked toilet repair service,
    blocked toilet replacement service,
    blocked toilet service repair,
    blocked toilet repair service repair,
    blocked toilet replacement service repair,
    blocked toilet service repair,
    blocked lav,
    blocked lav repair,
    blocked lav replacement,
    lav blocked,
    lav blocked repair,
    toilet emergency,
    toilet emergency repair,
    toilet emergency replacement,
    toilet emergency service,
    toilet emergency repair service,
    toilet emergency replacement service,
    toilet emergency service repair
  "
        />
        <meta name="charset" content="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar Section */}
      <Section.NavBar />
      {/* Hero Section */}
      <Suspense fallback={<div>Loading...</div>}>
        <Section.Hero />
      </Suspense>
      {/* Customer Reviews */}
      <Suspense fallback={<div>Loading...</div>}>
        <Section.CustReviews data={customerReviews}></Section.CustReviews>
      </Suspense>
      {/* Franchises */}
      <Suspense fallback={<div>Loading...</div>}>
        <Section.Franchises />
      </Suspense>
      {/* Partners */}
      <Suspense fallback={<div>Loading...</div>}>
        <Section.Partners data={partnersData}></Section.Partners>
      </Suspense>
      {/* Our Story */}
      <Section.OurStory></Section.OurStory>
      {/* Footer */}
      <Section.Footer />
    </div>
  );
}

export default Index;

export const getStaticProps = async () => {
  
  const custReviewQuery = gql`
    {
      customerReviews {
        customerName
        id
        review
        photo
      }
    }
  `;

  const partnersQuery = gql`
    {
      partners {
        id
        title
        photo
        desc
      }
    }
  `;

  const franchisesQuery = gql`
    {
      franchises {
        id
        locationName
        desc
        price
        latitude
        longitude
      }
    }
  `;

  const custReviewData = await request(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master',
    custReviewQuery
  );

  const partnersData = await request(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master',
    partnersQuery
  );

  const franchisesData = await request(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master',
    franchisesQuery
  );

  return {
    props: {
      customerReviews: custReviewData.customerReviews,
      partnersData: partnersData.partners,
      franchisesData: franchisesData.franchises,
    }, // will be passed to the page component as props
  };
};
