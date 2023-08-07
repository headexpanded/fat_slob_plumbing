import Head from 'next/head';
import { gql, request } from 'graphql-request';
import { CustomerReview } from '../components/sections/CustReviewsSection';
import { Partner } from '../components/sections/PartnersSection';
import { Section } from '../components/sections';
//import { Franchise } from '../components/sections/FranchisesSection';


type HomeProps = {
  customerReviews: CustomerReview[];
  partnersData: Partner[];
  //franchisesData?: Franchise[] | undefined;
};

function Home({ customerReviews, partnersData }: HomeProps) {
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

        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navbar Section */}
      <Section.NavBar />
      {/* Hero Section */}
      <Section.Hero />
      {/* Customer Reviews */}
      <Section.CustReviews data={customerReviews}></Section.CustReviews>
      {/* How We Work */}
      {/* <Section.HowWeWork /> */}
      {/* Franchises */}

      <Section.Franchises />

      {/* Partners */}
      <Section.Partners data={partnersData}></Section.Partners>
      {/* Our Story */}
      <Section.OurStory></Section.OurStory>
      {/* Footer */}
      <Section.Footer />
    </div>
  );
}

export default Home;

export async function getStaticProps() {
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
}
