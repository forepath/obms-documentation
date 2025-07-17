import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

function ComparisonSection() {
  return (
    <div className={styles.comparisonSection}>
      <div className="container">
        <div className={clsx('row', styles.headline)}>
          <div className="col col--10 col--offset-1 text--center">
            <h2 className="text--primary text--normal">
              Designed for business excellence
            </h2>
            <p>
              In today's fast-paced world, digital transformation isn't just an advantage - it's a necessity. 
              Companies that embrace digitalization streamline operations, improve efficiency, and gain a competitive 
              edge. Here's how going digital compares to sticking with traditional methods.
            </p>
          </div>
        </div>
        <div className={clsx('row', styles.comparisonList)}>
          <div className="col col--6">
            <div className={clsx(styles.comparisonItem, 'padding--lg h-100')}>
              <Heading as="h3" className="mt-0 mb-4 text--primary">Traditional Companies</Heading>
              <ul className={styles.comparisonUl}>
                <li>
                  <i className="bi bi-x-circle text--danger"></i> Paper-based processes
                  slow down operations
                </li>
                <li>
                  <i className="bi bi-x-circle text--danger"></i> Data is scattered and
                  hard to track
                </li>
                <li>
                  <i className="bi bi-x-circle text--danger"></i> High operational costs
                  and inefficiencies
                </li>
                <li>
                  <i className="bi bi-x-circle text--danger"></i> Limited scalability and
                  flexibility
                </li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={clsx(styles.comparisonItem, 'padding--lg h-100')}>
              <Heading as="h3" className="mt-0 mb-4 text--primary">Digital Companies</Heading>
              <ul className={styles.comparisonUl}>
                <li>
                  <i className="bi bi-check-circle text--success"></i> Automated
                  workflows boost efficiency
                </li>
                <li>
                  <i className="bi bi-check-circle text--success"></i> Centralized data
                  for better decision-making
                </li>
                <li>
                  <i className="bi bi-check-circle text--success"></i> Reduced costs
                  through digital optimization
                </li>
                <li>
                  <i className="bi bi-check-circle text--success"></i> Scalable and
                  adaptable to business growth
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="mailto:hi@forepath.io">
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className={clsx('container', styles.featuresContainer)}>
        <ComparisonSection />
      </div>
    </section>
  );
}
