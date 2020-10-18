import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="iOS"
        />
        <ProgressBar
          percent={95}
          text="Android"
        />
        <ProgressBar
          percent={85}
          text="Unity"
        />
        <ProgressBar
          percent={90}
          text="NodeJS"
        />
      </Col>

    </Row>
  </div>
);

export default SkillsProgress;
