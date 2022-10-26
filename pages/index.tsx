import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Section } from "../components/sections";
import styles from "../styles/Home.module.css";
import { gql, request } from "graphql-request";
import { CustomerReview } from "../components/sections/CustReviewsSection";

type HomeProps = {
  customerReviews: CustomerReview[];
};

const Home = ({ customerReviews }: HomeProps) => {
  return (
    <div className={styles._container}>
      <Head>
        <title>Fat Slob Plumbing</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NavBar */}
      <Section.NavBar />
      {/* Intro Section */}
      <Section.Intro />
      {/* Customer Reviews */}
      <Section.CustReviews data={customerReviews}></Section.CustReviews>
      {/* How We Work */}
      <Section.HowWeWork />
      {/* Services */}
      <Section.Services />
      {/* Franchises */}
      <Section.Franchises />
      {/* Valued Partners */}
      <Section.Partners />
      {/* About Us */}
      <Section.AboutUs />
      {/* Footer */}

      <main className={styles.main}>
        <div className={styles.grid}></div>
      </main>

      <Section.Footer></Section.Footer>
      <footer className={styles.footer}>
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
      </footer>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const custReviewsQuery = gql`
    {
      customerReviews {
        customerName
        id
        review
        photo
      }
    }
  `;

  const data = await request(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl9cidxte4hnw01ueb5tfbvuh/master",
    custReviewsQuery
  );
  return {
    props: {
      customerReviews: data.customerReviews,
    }, // will be passed to the page component as props
  };
}
