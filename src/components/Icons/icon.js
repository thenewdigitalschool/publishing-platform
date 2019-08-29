import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './index.css'
import FacebookIcon from './svg/facebook.svg'
import InstagramIcon from './svg/instagram.svg'
import TwitterIcon from './svg/twitter.svg'
import MediumIcon from './svg/medium.svg'
import ProductHuntIcon from './svg/producthunt.svg'

const icons = {
  facebook: {
    icon: FacebookIcon,
    url: 'https://www.facebook.com/newdigitalschool',
  },

  twitter: {
    icon: InstagramIcon,
    url: 'https://twitter.com/newdigitschool',
  },

  instagram: {
    icon: TwitterIcon,
    url: 'https://www.instagram.com/thenewdigitalschool',
  },

  medium: {
    icon: MediumIcon,
    url: 'https://medium.com/the-new-digital-school',
  },

  producthunt: {
    icon: ProductHuntIcon,
    url: 'https://www.producthunt.com/posts/the-new-digital-school',
  },
}

const getUrl = socialIcon => icons[socialIcon].url

const getIcon = socialIcon => icons[socialIcon].icon

export default class Icon extends Component {
  render() {
    return (
      <div className="Icons-single">
        <a
          href={getUrl(this.props.socialIcon)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={getIcon(this.props.socialIcon)} alt={this.props.alt} />
        </a>
      </div>
    )
  }
}

Icon.propTypes = {
  alt: PropTypes.string,
  socialIcon: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  alt: null,
}
