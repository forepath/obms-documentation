import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  icon: string;
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    icon: 'bi bi-basket',
    title: 'Module Marketplace',
    description: (
      <>
        Expand OBMS with ready-to-use modules from our marketplace. Easily integrate additional features to tailor the system to your needs without complex configurations.
      </>
    ),
  },
  {
    icon: 'bi bi-code-slash',
    title: 'REST API',
    description: (
      <>
        Leverage OBMS's REST API for seamless communication with other applications. Automate processes, synchronize data, and enhance functionality with simple API calls.
      </>
    ),
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className={clsx('text--center padding-horiz--md padding-top--md padding-bottom-md', styles.featureItem)}>
        <i className={`${icon} featureIcon ${styles.icon}`}></i>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageIntegration(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.headline)}>
          <div className="col--8 text--center">
            <h2 className="text--primary text--normal">
              Integrated with ease
            </h2>
            <p>
            Seamlessly connect OBMS with the tools and services you already use. Our powerful integration capabilities ensure smooth data flow, automation, and enhanced functionality.
            </p>
          </div>
        </div>
        <div className={clsx('row justify-content-center', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="mailto:hi@forepath.io">
            Request a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
