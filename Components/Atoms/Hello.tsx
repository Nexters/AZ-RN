import React from 'react';
import { useDispatch } from 'react-redux';
import { reduxSampleAction } from '../../store/modules/post/actions';
import styled from 'styled-components/native';

const HelloWorld = styled.Text``;

const Hello = () => {
  const dispatch = useDispatch();
  dispatch(reduxSampleAction());
  return <HelloWorld>HELLO</HelloWorld>;
};

export default Hello;
