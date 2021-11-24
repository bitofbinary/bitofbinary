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
      <p>
        Welcome to the online home of a programmer who likes learning about all
        things interesting.
      </p>
      <h3>Hi! I'm Deepak</h3>
      <p>
        This website is my <a href="/garden">Digital Garden</a> and{" "}
        <a href="/stream">Stream</a>
      </p>
      <div style={{ paddingLeft: "10%", paddingRight: "10%" }}>
        <hr />
      </div>
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
      title={`Deepak's Digital Garden`}
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
