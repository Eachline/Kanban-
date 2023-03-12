import React, { DOMAttributes } from 'react';
import * as S from './StyleIcon';
import { IconType, IconTypes } from './IconType';

export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
  rest?: string[];
}

const getIcon = (type: IconType): JSX.Element => IconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
  return (
    <S.Icon className={className} {...rest}>
      {getIcon(type)}
    </S.Icon>
  );
};
