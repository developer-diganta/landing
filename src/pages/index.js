import Head from 'next/head'
import styled from 'styled-components'
import getStarzagersCount from 'utils/getStarzagersCount'
import formatStargazers from 'utils/formatStargazers'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
  Cards as BaseCards,
  Header,
  Hero as BaseHero,
  Demo as BaseDemo,
  Footer,
  OpenSource as BaseOpenSource,
  Step1 as BaseStep1,
  Step2 as BaseStep2,
  Step3 as BaseStep3,
} from 'blocks'
import getHomepageData from '../../data/homepage'
import get from 'utils/get'
import PageContent from 'components/PageContent'

const Hero = styled(BaseHero)`
  margin-top: 54px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 98px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 148px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 250px;
  }
`

const Demo = styled(BaseDemo)`
  margin-top: 72px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 178px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 266px;
  }
`

const OpenSource = styled(BaseOpenSource)`
  margin-top: 30px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 72px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 120px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 192px;
  }
`

const Step1 = styled(BaseStep1)`
  margin-top: 80px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 120px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 288px;
  }
`

const Step2 = styled(BaseStep2)`
  margin-top: 94px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 155px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 245px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 424px;
  }
`

const Step3 = styled(BaseStep3)`
  margin-top: 105px;
  @media (min-width: ${get('breakpoints.md')}) {
    margin-top: 72px;
  }
  @media (min-width: ${get('breakpoints.lg')}) {
    margin-top: 120px;
  }
  @media (min-width: ${get('breakpoints.xl')}) {
    margin-top: 256px;
  }
`

const Cards = styled(BaseCards)`
  // @media (min-width: ${get('breakpoints.md')}) {
  //   margin-top: 72px;
  // }
  // @media (min-width: ${get('breakpoints.lg')}) {
  //   margin-top: 120px;
  // }
  // @media (min-width: ${get('breakpoints.xl')}) {
  //   margin-top: 256px;
  // }
`

const Home = ({ stargazers_count }) => {
  const { t } = useTranslation('homepage')
  const { hero, demo, openSource, steps, cards } = getHomepageData(t)
  const stepsAnchor = steps.map(step => ({
    preTitle: step.preTitle,
    title: step.title,
  }))
  return (
    <>
      <Head>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <script
          src="https://cdn.usefathom.com/script.js"
          data-site="QNBPJXIV"
          defer
        ></script>
      </Head>
      <Header stargazers_count={formatStargazers(stargazers_count)} />
      <PageContent>
        <Hero heroProps={hero} />
        <Demo demoProps={demo} color={get('colors.lila')} />
        <OpenSource
          openSourceProps={openSource}
          color={get('colors.hotPink')}
        />
        <Step1
          step1Props={steps[0]}
          steps={stepsAnchor}
          color={get('colors.lila')}
        />
        <Step2
          step2Props={steps[1]}
          steps={stepsAnchor}
          color={get('colors.hotPink')}
        />
        <Step3
          step3Props={steps[2]}
          steps={stepsAnchor}
          color={get('colors.dodgerBlue')}
        />
        <Cards cardsProps={cards} />
      </PageContent>
      <Footer />
    </>
  )
}

export const getStaticProps = async ({ locale }) => {
  try {
    const stargazers_count = await getStarzagersCount()
    return {
      props: {
        stargazers_count: stargazers_count,
        ...(await serverSideTranslations(locale, [
          'homepage',
          'header',
          'footer',
        ])),
      },
    }
  } catch (err) {
    console.log(err)
  }
}

export default Home
