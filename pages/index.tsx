import Head from 'next/head';
import { gql, request } from 'graphql-request';
import { CustomerReview } from '../components/sections/CustReviewsSection';
import { Partner } from '../components/sections/PartnersSection';
import { Section } from '../components/sections';

type HomeProps = {
  customerReviews: CustomerReview[];
  partnersData: Partner[];
};

export const metadata = {
  title: { default: 'Fat Slob Plumbing' },
  description:
    "Fat Slob Plumbing stress tests toilets. We're the UK's number 2 toilet testing service! Book Fat Slob Plumbing to stress test YOUR toilet!",
  keywords: [
    'toilet blocked',
    'blocked toilet',
    'blocked toilet repair',
    'blocked toilet replacement',
    'blocked toilet service',
    'blocked toilet repair service',
    'blocked toilet replacement service',
    'blocked toilet service repair',
    'blocked toilet repair service repair',
    'blocked toilet replacement service repair',
    'blocked toilet service repair',
    'blocked lav',
    'blocked lav repair',
    'blocked lav replacement',
    'lav blocked',
    'lav blocked repair',
    'toilet emergency',
    'toilet emergency repair',
    'toilet emergency replacement',
    'toilet emergency service',
    'toilet emergency repair service',
    'toilet emergency replacement service',
    'toilet emergency service repair',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
        <meta
          property="og:description"
          content="The UK's number 2 toilet testing service."
        />
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
      <Section.HowWeWork />
      {/* Services */}
      {/* <Section.Services /> */}
      {/* Franchises */}
      <Section.Franchises />
      {/* Valued Partners */}
      <Section.Partners data={partnersData}></Section.Partners>
      {/* About Us */}
      <Section.OurStory></Section.OurStory>
      {/* Footer */}
      <Section.Footer />
      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
      {/* <dialog className="modal animated fadeInDown">
        <Section.Dialog
          modalIsVisible={false}
          content="Nothing to see here yet"
        />
      </dialog> */}
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

  const custReviewData = await request(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master',
    custReviewQuery
  );

  const partnersData = await request(
    'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master',
    partnersQuery
  );

  return {
    props: {
      customerReviews: custReviewData.customerReviews,
      partnersData: partnersData.partners,
    }, // will be passed to the page component as props
  };
}
