import React from 'react';
import styled from 'styled-components';
import Code from 'react-highlight';
import moment from 'moment';

const StyledTime = styled.div`
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
    color: rgba(0,0,0,.3);
    font-family: serif;
`
const Time = () => (
   <StyledTime>{ moment().format('Do MMM YY') }</StyledTime>
)

const Page = styled.section`
  margin: 60px;
  font-family: Georgia, serif;
`

const Para = styled.p`
  padding-top: 10px;
  font-size: 17px;
  line-height: 28px;
`

const Subheader = styled.h2`
  font-weight: 500;
`

const CTitle = styled.h1`
  font-size: 40px;
  -webkit-font-smoothing: antialiased;
  font-weight: 200;
  line-height: 48px;
`

const components = {
  Page, CTitle, Subheader, Para, Time, Code
}

for (const key of Object.keys(components)) {
  window[key] = components[key]
}

window.React = React
