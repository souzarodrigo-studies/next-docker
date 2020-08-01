import React from 'react';
import Head from 'next/head';
import GlobalStyle from '@styles/GlobalStyle.ts';
import { Container, SubContainer, Footer, Main, Title } from '@styles/Index.ts';

export default function Index() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Head>
          <title>Docker e Next.JS</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <Title>
            Welcome to <a href="https://nextjs.org">Next.JS</a>
          </Title>

          <SubContainer>
            <h3>Styled Components!</h3>
          </SubContainer>
        </Main>

        <Footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by
          </a>
        </Footer>
      </Container>
    </>
  );
}
