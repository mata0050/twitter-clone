import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Redux
import { useSelector } from 'react-redux';

const NewsCard = () => {
  const news = useSelector((state) => state.news.allNews);


  return (
    <StyledTweet>
      {news.length !== 0 &&
        news.map((item) => (
          <article>
            <header>
              <h1>{item.title}</h1>
              <span>@{item.creator !== null && item.creator[0]}</span>
              <span> {moment(item.pubDate).format('MMM DD, YYYY')}</span>
            </header>

            {item.image_url !== null && <img src={item.image_url} alt='' />}

            <p>{item.content !== null && item.content.slice(0, 300)}</p>

            {/* <p>{item.full_description}</p> */}

            <Link to={`/news/${item.title}`}>Read More</Link>

          </article>
        ))}

      {news.length === 0 && (
        <h3 style={{marginTop: '40px', fontWeight: '500'}}>Sorry, we are using a free news api and it has limited requests. That's why you can't see the News Section.</h3>
      )}
    </StyledTweet>
  );
};

const StyledTweet = styled.div`
  padding: 25px;

  article {
    border-bottom: 1px solid var(--color-lightGrey);
    margin: 0 -25px;
    padding: 25px;

    header {
      margin-bottom: 8px;

      h1 {
        font-size: 1.4rem;
      }

      span:first-child {
        font-size: 1rem;
        font-size: 600;
      }

      span:nth-child(2) {
        color: var(--color-grey);
        font-size: 0.8rem;
        margin-bottom: 20px;
        margin-left: 3px;
      }

      span:last-child {
        font-size: 0.9rem;
        color: var(--color-grey);
        margin-left: 10px;
      }
    }

    img {
      height: 200px;
      width: 100%;
      object-fit: cover;
    }

    a {
      color: var(--color-blue);
      margin-top: 10px;
      display: block;
    }

    a:hover {
      color: var(--color-white);
    }
  }
`;

export default NewsCard;
