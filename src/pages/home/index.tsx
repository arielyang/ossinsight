import React, {PropsWithChildren, useState} from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import WordCloud from "../../components/WordCloud";
import TopList from "../../components/TopList";
import Button, {ButtonProps} from "@mui/material/Button";
import ThemeAdaptor from "../../components/ThemeAdaptor";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Cards, StandardCard} from '../../components/Cards';
import Image from "../../components/Image";
import Section from '../../components/Section';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const [period, setPeriod] = useState('last_hour')

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <ThemeAdaptor>
        <div
          style={{
            '--ifm-container-width-xl': '1200px'
          }}
        >
          <HomepageHeader />
          <Section
            title='Deep insights into open source software'
            subtitle='Discover deep analytical insights of various types including their rankings and popularity trends using multiple metrics such as stars, PRs, and contributors.'
            buttonText='🔍 Find more'
          >
            <Cards sx={{ mt: 2 }}>
              <StandardCard
                title='📈 OSS Database Repos Landscape 2021'
                description='/* Deep insights into OSS Databases in 2011. */'
                image={<Image src={require('./images/chart-1.png').default} style={{ borderRadius: 6 }} />}
              />
              <StandardCard
                title='🔥 Real-time Insights'
                description='/* Analyze open source software in realtime, up to last hour. */'
                image={<Image src={require('./images/chart-2.png').default} style={{ borderRadius: 6 }} />}
              />
              <StandardCard
                title='❤️ Custom Insights'
                description='/* Analyze by customize your own date range. */'
                image={<Image src={require('./images/chart-3.png').default} style={{ borderRadius: 6 }} />}
              />
            </Cards>
          </Section>
          <Section
            title='Compare any two GitHub repositories'
            subtitle='Compare any one/two repositories using multiple metrics such as stars, pull requests, commits and our special metrics blow.'
            buttonText='🔍 Find more'
            backgroundImage={require('./images/map-bg.png').default}
          >
            <Cards sx={{ mt: 2 }}>
              <StandardCard
                title='Company Distribution'
                description='/* Stargazers from the Top 50 companies in different repositories. */'
                image={<Image src={require('./images/chart-4.png').default} style={{ borderRadius: 6 }} />}
              />
              <StandardCard
                title='Commits Time Heat Map'
                description='/* Time zones of contributors submit code for repositories. */'
                image={<Image src={require('./images/chart-5.png').default} style={{ borderRadius: 6 }} />}
              />
              <StandardCard
                title='Geographical Distribution'
                description='/* Locations of contributors in world-wide countries/regions. */'
                image={<Image src={require('./images/chart-6.png').default} style={{ borderRadius: 6 }} />}
              />
            </Cards>
          </Section>
          <Section>
            <TopList period={period} onPeriodChange={setPeriod} />
          </Section>
          <Section
            title='Wonder how OSS Insight works ?'
            subtitle='Read our blog and try it yourself !'
          >
          </Section>
            <Cards sx={{ mt: 2 }}>
              <StandardCard
                title='Data Preparation for Analytics'
                description='Tutorial · 5 min read'
                codeStyleDescription={false}
                readMore='https://ossinsight.io/blog/how-it-works'
              />
              <StandardCard
                title='What is TiDB Cloud'
                description='Documentation · 5 min read'
                codeStyleDescription={false}
                readMore='https://docs.pingcap.com/tidbcloud/'
              />
              <StandardCard
                title='Use TiDB Cloud to Analyze GitHub Events in 10 Minutes'
                description='Tutorial · 5 min read'
                codeStyleDescription={false}
                readMore='https://ossinsight.io/blog/try-it-yourself/'
              />
            </Cards>
          </Section>
          <div style={{margin: '4em 0'}}>
            <div className='container container-fluid'>
              <div className="text--center">
                <h3>Follow us <a href="https://twitter.com/PingCAP">@PingCAP</a> and join the conversation using the
                  hashtags #PingCAP</h3>
              </div>
            </div>
          </div>
        </div>
      </ThemeAdaptor>
    </Layout>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <>
      <header className={clsx('hero', styles.heroWc)}>
        <div className={styles.wcContainer}>
          <WordCloud period='last_hour'>
            <h1 className={clsx('hero__title', styles.heroWcTitle)}>{siteConfig.title}</h1>
          </WordCloud>
        </div>
      </header>
      <div className={clsx('hero', styles.heroBanner)}>
        <div className='container'>
          <p className={clsx('hero__subtitle', styles.autoBr)}>
            {siteConfig.tagline}
          </p>
          <p className={clsx('hero__subtitle', styles.autoBr)}>
            Powered by
            <img alt="TiDB Cloud" src='img/tidb_cloud.png' width={108} height={24} />
          </p>
        </div>
      </div>
    </>
  );
}