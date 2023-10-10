/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import { rgba } from 'polished';
import SectionHeading from 'components/section-heading';
import Service from 'components/cards/service';
import icon1 from 'assets/images/icons/service1.png';
import icon2 from 'assets/images/icons/service2.png';
import icon3 from 'assets/images/icons/service3.png';

const data = [
  {
    id: 1,
    icon: icon1,
    title: 'Software development',
    description: `Front End Development,
    Backend development,
    Mobile Application Development,
    Blockchain Development`,
  },
  {
    id: 2,
    icon: icon2,
    title: 'Quality Engineering',
    description: `Web Application Testing,
    Mobile Application Testing,
    Performance Testing,
    Accessibility & Security Testing,
    Test Automation & Framework Development,
    Blockchain Testing,
    API Automation Testing,
    QA Outsourcing`,
  },
  {
    id: 3,
    icon: icon3,
    title: 'Product & Design',
    description: `Product Design & Project Management`,
  },
  {
    id: 4,
    icon: icon3,
    title: 'Data and Analytics',
    description: `Data Intelligence and AI/ML`,
  },
  {
    id: 5,
    icon: icon3,
    title: 'Enterprise Applications',
    description: `Servicenow and Salesforce`,
  },
  {
    id: 6,
    icon: icon3,
    title: 'Business Process Outsourcing',
    description: `Technical Support
    Voice & Non-Voice Process`,
  }
];

const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="Grow your company's business with our Service"
          //  description="Grow your business with"
        />
        <Box sx={styles.contentWrapper}>
          {data?.map((item) => (
            <Service key={item.id} item={item} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  section: {
    backgroundColor: rgba('#FFF5ED', 0.5),
    pt: [11, 11, 11, 12, 12, 12, 14],
    pb: [7, 7, 7, 9, 9, 10, 11],
  },
  heading: {
    maxWidth: [null, null, null, 455, 660],
    mb: [6, null, null, 8, null, 9, 13],
  },
  contentWrapper: {
    gap: 30,
    display: 'grid',
    justifyContent: ['center', null, null, 'unset'],
    gridTemplateColumns: [
      'repeat(1, 285px)',
      'repeat(1, 325px)',
      'repeat(1, 285px)',
      'repeat(3, 1fr)',
    ],
  },
};
