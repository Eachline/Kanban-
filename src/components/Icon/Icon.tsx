import React, { DOMAttributes } from 'react';
import { IconType, IconTypes } from './IconType';
import * as S from './StyleIcon';
export interface IIconProps extends DOMAttributes<HTMLDivElement> {
  className?: string;
  type: IconType;
}

const getIcon = (type: IconType): JSX.Element => IconTypes.get(type) as JSX.Element;

export const Icon: React.FC<IIconProps> = ({ className, type, ...rest }) => {
  return (
    <S.Icon className={className} {...rest}>
      {getIcon(type)}
    </S.Icon>
  );
};
