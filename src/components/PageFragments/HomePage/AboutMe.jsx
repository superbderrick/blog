import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {
  paraOne: `My name is Derrick Kang (강진영). Currently I am working as a Software Engineer in Korea I am an expert in Android and iOS App developments and live streaming technologies areas. Especially I spent a lot of time on providing software development kit among various platforms in my career. I have participated in several overseas exhibitions to study many cases from various industries technologies.`,
  paraTwo: `Nowadays I spend a lot of time on development in order to make cool stuffs with Android or iOS I am so excited about how I can make a good service with technologies and change the world better. My vision is to enrich our lives with the latest technology therefore I am interested in new technologies and love to learn of new technologies. My personal interests are table tennis and traveling (I have visited to 16 countries until now) I love new situations and to meet new people , especially I can be a close friend easily to any people regardless of nationality, race, age,gender, or different cultures.`,
};

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Where I am"
            textH3="Seoul, Korea"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>

      </Row>
    </>
  );
};
export default AboutMe;
