import React from "react"

import Text from "../Components/Text";
import Subtitle from "../Components/Subtitle";
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
import TndsLogo from '../Components/Logo';

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
    <TndsLogo>
      why we do what we do
    </TndsLogo>
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus faucibus erat vel suscipit. Pellentesque molestie sapien eu dolor bibendum, blandit blandit enim gravida. Phasellus et eros diam. Aenean elementum orci sem, id malesuada massa feugiat vitae. Phasellus nunc diam, suscipit eleifend diam id, gravida ultrices leo. Donec posuere felis orci, vel hendrerit ligula vestibulum ac. Integer blandit at augue eget congue.</Text>
    <Subtitle>This is a subtitle</Subtitle>
  </div>
);
