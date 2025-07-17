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
    icon: 'bi bi-shield-lock',
    title: 'GDPR & Data Protection',
    description: (
      <>
        OBMS supports GDPR with consent management, data export, and deletion requests. Encryption and access controls keep user data secure.
      </>
    ),
  },
  {
    icon: 'bi bi-file-earmark-text',
    title: 'e-Invoicing',
    description: (
      <>
        Generate legally compliant invoices in structured formats like XRechnung, ensuring smooth transactions with public authorities and enterprises.
      </>
    ),
  },
  {
    icon: 'bi bi-fingerprint',
    title: 'Security & Audit Trails',
    description: (
      <>
        Advanced encryption, role-based access, and audit logs ensure data security and regulatory transparency.
      </>
    ),
  },
];

function Feature({title, description, icon}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center padding-horiz--md padding-top--md padding-bottom-md', styles.featureItem)}>
        <i className={`${icon} featureIcon ${styles.icon}`}></i>
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageCompliance(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.headline)}>
          <div className="col--8 text--center">
            <h2 className="text--primary text--normal">
              Made to be compliant
            </h2>
            <p>
              OBMS helps businesses stay compliant with data protection, financial, and security regulations through built-in GDPR support, e-invoicing, and audit trails.
            </p>
          </div>
        </div>
        <div className={clsx('row justify-content-center', styles.featureRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
