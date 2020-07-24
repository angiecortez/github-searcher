import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Fork from '../icons/fork';
import Star from '../icons/star';
import moment from 'moment';

const Wrapper = styled.div`
  padding: 20px;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  .fork {
    font-size: 0.75rem;
    color: #586069;
  }
  .flex {
    display: flex;
    align-items: center;
    margin-right: 10px;
    .a {
      margin: 0 5px;
    }
  }
`;
const A = styled.a`
  color: #0366d6;
  text-decoration: none;
`;

const Language = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.background};
`;
const RepoCard = ({ data, colors }) => {
  const color = colors[data.language];
  const date = moment(data.updated_at).format('DD MMM YYYY');
  return (
    <Wrapper>
      <A>{data.name}</A>
      {data.fork && (
        <div className="fork">forked from {data.parent.full_name}</div>
      )}
      <p>{data.description}</p>

      <div className="flex">
        {color !== undefined && (
          <div className="fork flex">
            <Language background={color.color} />
            <div className="a">{data.language}</div>
          </div>
        )}

        <div className="fork flex">
          <Fork />
          <div className="a">
            {data.parent ? data.parent.forks : data.forks || 0}
          </div>
        </div>
        <div className="fork flex">
          <Star />
          <div className="a">
            {data.parent
              ? data.parent.stargazers_count
              : data.stargazers_count || 0}
          </div>
        </div>
      </div>

      <div className="fork">Updated on {date}</div>
    </Wrapper>
  );
};

RepoCard.propTypes = {};

export default RepoCard;
