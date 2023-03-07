import React, { DOMAttributes } from 'react';
import { IconType, IconTypes } from './IconType';
import styled from 'styled-components';

const StyledIcon = styled.div`
   display: inline-flex;
   align-items: center;
   text-align: center;

   svg {
      display: inline-flex;
      width: 100%;
      height: max-content;
   }
`;

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
   className?: string;
   type: IconType;
}

const getIcon = (type: IconType): JSX.Element => IconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
   return (
      <StyledIcon className={className} {...rest}>
         {getIcon(type)}
      </StyledIcon>
   );
};
