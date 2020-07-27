import { css } from 'styled-components';

import { MarginStyleProps, PaddingStyleProps } from '@types';

export const marginStyles = css<MarginStyleProps>`
  margin-top: ${({ marginTop }) => marginTop ?? 0};
  margin-bottom: ${({ marginBottom }) => marginBottom ?? 0};
  margin-left: ${({ marginLeft }) => marginLeft ?? 0};
  margin-right: ${({ marginRight }) => marginRight ?? 0};
`;

export const paddingStyles = css<PaddingStyleProps>`
  padding-top: ${({ paddingTop }) => paddingTop ?? 0};
  padding-bottom: ${({ paddingBottom }) => paddingBottom ?? 0};
  padding-left: ${({ paddingLeft }) => paddingLeft ?? 0};
  padding-right: ${({ paddingRight }) => paddingRight ?? 0};
`;
