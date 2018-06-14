<<<<<<< HEAD
import React from 'react';

import Image from '../Components/Image';
import Input from '../Components/Input';
import LabelTitle from '../Components/Label';
import ApplyLink from '../Components/Link';
import Quote from '../Components/Quote';
import Title from '../Components/Title';
import Avatar from '../components/avatar'
import Footerlink from '../Components/Footer/Link';
import NavigationLink from '../Components/Navigation/Link';
import FooterLabel from '../Components/Footer/FooterLabel'

export default () => (
  <div>
    <Image src="http://via.placeholder.com/400x450" alt="Alternate Text" />
    <Input label="Input Label" type="text" />
    <LabelTitle labelTitle="yoo" />
    <ApplyLink LinkText="Apply Now" LinkUrl="#" />
    <Quote>
      "In the school there is not a typical day, like, you always have a
      different activies, but the good thing is that you can decide which
      activities you want to be involved with."
    </Quote>
    <Title propTitle="Shit, It's Working" />
    < Avatar src="https://unsplash.it/1200/800/?random"/>
    <FooterLabel>This is a fooooooter label</FooterLabel>
    <Footerlink linkurl="" linklabel="Founders Founders Rua da Constituição 346 4200-192 Porto, Portugal"/>
    <NavigationLink linkurl = "" linklabel="ABOUT US"/>

  </div>
);
=======
import React from "react";

import TndsLogo from '../Components/Logo';

export default () =>

<TndsLogo>
  why we do what we do
</TndsLogo>
>>>>>>> 8d1dfc5... adding the logo, ready for revision
