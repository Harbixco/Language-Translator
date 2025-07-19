import React from "react";
import { Modal } from "antd";

import StudentPhoto from "../assets/avater.jpg";
import "./styles/about-me.scss";

function AboutMe(props) {
  const { visible, handleCancel } = props;
  return (
    <Modal
      title='About Me'
      visible={visible}
      onCancel={handleCancel}
      footer={false}
    >
      <div className='student-bio animate__animated animate__fadeIn'>
        <img src={StudentPhoto} width='100' alt='Logo' />
        <div>
          <h5>HC2021938474</h5>
          <h6>Matric Number</h6>
        </div>
        <div>
          <h5>Agbaje Abiodun Kayode</h5>
          <h6>Department</h6>
        </div>
        <div>
          <h5>Computer Science</h5>
          <h6>Department</h6>
        </div>
      </div>
    </Modal>
  );
}

export default AboutMe;
