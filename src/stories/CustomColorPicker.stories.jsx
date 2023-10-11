// import React from 'react';
// import { ReactDOM } from 'react';
// import { storiesOf } from '@storybook/react';
// import CustomColorPicker from '../components/CustomColorPicker'; 



// storiesOf('CustomColorPicker', module)
//   .add('Default', () => {
//     const defaultColor = '#FFFFFF'; 
//     return <CustomColorPicker defaultColor={defaultColor} />;
//   });


import React from 'react'; 
// import ReactDOM from 'react-dom'; 
// import { storiesOf } from '@storybook/react';
import CustomColorPicker from "../components/CustomColorPicker"

export default {
  title: "CustomColorPicker"
}

export const Default = () => <CustomColorPicker />;
