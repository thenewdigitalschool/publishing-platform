import React from "react";

import Image from '../Components/Image';
import Input from '../Components/Input';
import LabelTitle from "../Components/Label";
import ApplyLink from "../Components/Link"

export default () =>
  <div>
    <Image src="http://via.placeholder.com/400x450" alt="Alternate Text" />
    <Input label="Input Label" type="text" />
    <LabelTitle labelTitle="yoo" />
    <ApplyLink LinkText="Apply Now" LinkUrl="#" />
  </div>
