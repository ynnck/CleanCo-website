import React from "React"
import { FaPhone, FaEnvelope, FaRegCopyright } from "react-icons/fa"

const Footer = ({
  compName,
  compDescription,
  compPhone,
  compEmail,
  authorName,
  authorWebsite,
}) => (
  <>
    <div>
      <div>{compName}</div>
      <div>{compDescription}</div>
    </div>
    <div>
      Contact
      <ul>
        <li>
          <FaPhone />
          <span />
          {compPhone}
        </li>
        <li>
          <FaEnvelope />
          <span />
          {compEmail}
        </li>
      </ul>
    </div>
    <div>
      Copyright
      <FaRegCopyright />
      <a href={authorWebsite}>{authorName}</a>
    </div>
  </>
)

export default Footer
