import React, { Component } from 'react';

import './index.css';
import FacebookIcon from './svg/facebook.svg';
import InstagramIcon from './svg/instagram.svg';
import TwitterIcon from './svg/twitter.svg';
import MediumIcon from './svg/medium.svg';
import ProductHuntIcon from './svg/producthunt.svg';

const icons = {
    facebook: {
        icon: FacebookIcon,
        url: "https://www.facebook.com/newdigitalschool"
    },
    twitter: {
        icon: InstagramIcon,
        url: "https://twitter.com/newdigitschool"
    },
    instagram: {
        icon: TwitterIcon,
        url: "https://www.instagram.com/thenewdigitalschool"
    },
    medium: {
        icon: MediumIcon,
        url: "https://medium.com/the-new-digital-school"
    },
    producthunt: {
        icon: ProductHuntIcon,
        url: "https://www.producthunt.com/posts/the-new-digital-school"
    }
}

export default class Icon extends Component {
    getUrl(socialIcon) {
        return icons[socialIcon].url;
    }

    getIcon(socialIcon) {
        return icons[socialIcon].icon
    }

    render() {
        
        return <div className="Icons-single">
            <a href={this.getUrl(this.props.socialIcon)} target="_blank">
                <img src={this.getIcon(this.props.socialIcon)}/>    
            </a>
        </div>
    }
}
