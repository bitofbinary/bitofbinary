import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
        <p className="hero__subtitle">
          Online home of a programmer who likes learning about all things
          interesting
        </p>
      </div>
    </header>
  );
}

function Intro() {
  return (
    <div className={styles.heroBanner}>
      <h3>Hi! I'm Deepak</h3>
      <p>Welcome to my tech space</p>
      <p>
        Here you will find my <a href="/notes">notes</a> on programing and
        related bits
      </p>
    </div>
  );
}

function GardenLinks() {
  return (
    <div id="garden-links">
      <div class="garden-link">
        <a href="/technology/index">0-Technology</a>
      </div>
      <div class="garden-link">
        <a href="/history-and-geography/index">9-History and Geography</a>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Deepak's blog thingy`}
      description="Description will go into a meta tag in <head />"
    >
      {/* <HomepageHeader /> */}
      <main>
        <Intro />
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
