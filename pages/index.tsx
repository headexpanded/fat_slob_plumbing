import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql, request } from "graphql-request";
import { CustomerReview } from "../components/sections/CustReviewsSection";
import { Partner } from "../components/sections/PartnersSection";
import { Section } from "../components/sections";

type HomeProps = {
  customerReviews: CustomerReview[];
  partnersData: Partner[];
};

function Home({ customerReviews, partnersData }: HomeProps) {
  return (
    <div className="main">
      <Head>
        <title>Fat Slob Plumbing</title>
        <meta
          name="description"
          content="Fat Slob Plumbing stress tests domestic sewage systems."
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
      {/* <Section.Franchises /> */}
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


  const data = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master",
    custReviewQuery
  );

  const partnersData = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master",
    partnersQuery
  );

  return {
    props: {
      customerReviews: data.customerReviews,
      partnersData: partnersData.partners,
    }, // will be passed to the page component as props
  };
}
