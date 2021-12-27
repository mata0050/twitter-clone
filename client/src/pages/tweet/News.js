import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

// Redux
import { useSelector } from 'react-redux';

const News = () => {
  const title = useParams().id;
  const news = useSelector((state) => state.news.allNews);

  const currentNews =
    news.length !== 0 && news.filter((item) => item.title === title)[0];
  console.log(typeof news[0].title);
  console.log(currentNews);

  return (
    <StyledNews>
      <h1>{currentNews.title}</h1>
      {currentNews.image_url !== null && (
        <img src={currentNews.image_url} alt={currentNews.title} />
      )}

      <p>{currentNews.content}</p>

      <p>{currentNews.description}</p>
    </StyledNews>
  );
};

const StyledNews = styled.div`
  padding: 25px;

  h1{
    margin-bottom: 20px;
  }

  img {
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
  }

  p{
    margin-bottom: 20px;
  }
`;

export default News;
