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
    icon: 'bi bi-cart',
    title: 'Shop',
    description: (
      <>
        Sell digital products seamlessly with instant provisioning, automated delivery, and secure payments. Our comprehensive e-commerce solution handles everything from product catalog management to order processing, ensuring your customers receive their purchases immediately after payment confirmation.
      </>
    ),
  },
  {
    icon: 'bi bi-person-circle',
    title: 'Customer Portal',
    description: (
      <>
        Give customers easy access to orders, invoices, and support in one convenient dashboard. The customer portal provides a self-service experience where clients can view their purchase history, download invoices, submit support tickets, and manage their account settings without needing to contact your support team.
      </>
    ),
  },
  {
    icon: 'bi bi-headset',
    title: 'Helpdesk',
    description: (
      <>
        Manage support tickets efficiently with automated workflows and a built-in knowledge base. The helpdesk system includes ticket categorization, priority management, automated responses, and a comprehensive knowledge base that helps reduce support workload while improving customer satisfaction through faster resolution times.
      </>
    ),
  },
  {
    icon: 'bi bi-credit-card',
    title: 'Billing Automation',
    description: (
      <>
        Generate invoices, process payments, and handle subscriptions automatically. The billing system supports multiple payment gateways, recurring billing for subscriptions, automated invoice generation, payment reminders, and comprehensive financial reporting to keep your business finances organized and up to date.
      </>
    ),
  },
  {
    icon: 'bi bi-gear',
    title: 'Admin Portal',
    description: (
      <>
        Manage users, orders, and settings all in one place with an easy-to-use admin dashboard. The admin portal provides complete control over your business operations, including user management, order processing, system configuration, security settings, and real-time monitoring of all business activities.
      </>
    ),
  },
  {
    icon: 'bi bi-pie-chart',
    title: 'Statistics',
    description: (
      <>
        Track key metrics with real-time reports and insightful analytics. The statistics module provides comprehensive business intelligence including sales reports, customer analytics, revenue tracking, product performance metrics, and customizable dashboards that help you make data-driven decisions to grow your business.
      </>
    ),
  },
  {
    icon: 'bi bi-brush',
    title: 'Themes',
    description: (
      <>
        Customize the look and feel with flexible themes that match your brand. The theming system allows you to create unique visual experiences for your customers, with customizable colors, fonts, layouts, and branding elements that can be tailored to different customer segments or business requirements.
      </>
    ),
  },
  {
    icon: 'bi bi-code-square',
    title: 'Modules',
    description: (
      <>
        Extend functionality with powerful modules tailored to your needs. The modular architecture allows you to add new features and capabilities as your business grows, with a wide range of available modules for inventory management, advanced reporting, third-party integrations, and custom business processes.
      </>
    ),
  },
  {
    icon: 'bi bi-layers',
    title: 'Multi-Tenancy',
    description: (
      <>
        Support for multiple businesses or clients with isolated environments and custom settings. The multi-tenant architecture enables you to serve multiple clients or business units from a single OBMS instance, with complete data isolation, custom branding, and independent configuration options for each tenant.
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

export default function HomepageReasons(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.headline)}>
          <div className="col--8 text--center">
            <h2 className="text--primary text--normal">
              Everything you'll ever need
            </h2>
            <p>
              OBMS provides a solid foundation for managing digital businesses with essential features for finance, orders, and customer relationships.
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
