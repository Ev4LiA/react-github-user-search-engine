import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  const { repos } = useGlobalContext();

  let languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    // total[language] = { label: language, value: ..., star: stargazers_count}
    if (!language) return total;

    if (!total[language]) {
      total[language] = { label: language, value: 1, star: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        star: total[language].star + stargazers_count,
      };
    }

    return total;
  }, {});

  // Transform object to array
  // language
  const mostUsed = Object.values(languages)
    .sort((a, b) => {
      return b.value - a.value;
    })
    .slice(0, 5);

  // star
  const mostPopular = Object.values(languages)
    .sort((a, b) => {
      return b.star - a.star;
    })
    .map((item) => {
      return { ...item, value: item.star };
    })
    .slice(0, 5);

  const repoMostPopular = repos
    .sort((a, b) => {
      return b.stargazers_count - a.stargazers_count;
    })
    .map((item) => {
      return { label: item.name, value: item.stargazers_count };
    })
    .slice(0, 5);

  const repoMostUsed = repos
    .sort((a, b) => {
      return b.forks - a.forks;
    })
    .map((item) => {
      return { label: item.name, value: item.forks };
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsed} />
        <Column3D data={repoMostPopular} />
        <Doughnut2D data={mostPopular} />
        <Bar3D data={repoMostUsed} />
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
