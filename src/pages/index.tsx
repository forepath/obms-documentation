import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageReasons from '@site/src/components/HomepageReasons';
import HomepageCompliance from '@site/src/components/HomepageCompliance';
import HomepageIntegration from '@site/src/components/HomepageIntegration';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h1" className="hero__title">
                <img src="/img/logo-full-color.svg" alt={siteConfig.title} className="hero__logo" />
              </Heading>
              <p className="hero__subtitle">Open-source business management software for workflow streamlining and digital sales automation</p>
              <ul className="hero__list">
                <li>
                  <i className="bi bi-people"></i> Streamline workflows for your team and customers
                </li>
                <li>
                  <i className="bi bi-easel"></i> Easy-to-use interface for non-technical users
                </li>
                <li>
                  <i className="bi bi-cloud-check"></i> Modular architecture for customizable business solutions
                </li>
                <li>
                  <i className="bi bi-code-slash"></i> Free and open source (Apache-2.0)
                </li>
              </ul>
              <div className={styles.buttons}>
                <Link
                  className="button button--secondary button--lg"
                  to="/docs/intro">
                  Get Started
                </Link>
                <Link
                  className="button button--primary button--lg"
                  to="mailto:hi@obms.one">
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/screenshots/dashboard.png" alt="Screenshot" className="hero__screenshot" />
      </header>
    </>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Streamline your business workflows"
      description="OBMS is a comprehensive, open-source business management platform designed to streamline workflows and automate digital sales processes.">
      <HomepageHeader />
      <main>
        <HomepageReasons />
        <HomepageFeatures />
        <HomepageCompliance />
        <HomepageIntegration />
      </main>
    </Layout>
  );
}
