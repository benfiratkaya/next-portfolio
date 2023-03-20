import React from "react";
import {faFacebook, faGithub, faInstagram, faLinkedin, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

const socialLinks = [
  {
    name: 'Email',
    href: `mailto:${process.env.NEXT_PUBLIC_SOCIAL_EMAIL}`,
    icon: (props) => (
        <FontAwesomeIcon icon={faEnvelope} {...props} />
    ),
  },
  {
    name: 'Facebook',
    href: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
    icon: (props) => (
        <FontAwesomeIcon icon={faFacebook} {...props} />
    ),
  },
  {
    name: 'Instagram',
    href: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM,
    icon: (props) => (
        <FontAwesomeIcon icon={faInstagram} {...props} />
    ),
  },
  {
    name: 'Twitter',
    href: process.env.NEXT_PUBLIC_SOCIAL_TWITTER,
    icon: (props) => (
        <FontAwesomeIcon icon={faTwitter} {...props} />
    ),
  },
  {
    name: 'GitHub',
    href: process.env.NEXT_PUBLIC_SOCIAL_GITHUB,
    icon: (props) => (
        <FontAwesomeIcon icon={faGithub} {...props} />
    ),
  },
  {
    name: 'LinkedIn',
    href: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN,
    icon: (props) => (
        <FontAwesomeIcon icon={faLinkedin} {...props} />
    ),
  },
]

export default socialLinks;