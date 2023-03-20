import React from 'react';
import Icon, { IconType } from 'Common/components/Icon';
import { IButtonProps, Button } from 'Common/components/Button/Button';

export interface IButtonIconProps extends IButtonProps {
  rest?: string[];
  className?: string;
  typeIcon?: IconType;
  isDisabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
}

export const ButtonIcon: React.FC<IButtonIconProps> = ({ className, typeIcon, isDisabled, onClick, ...rest }) => {
  return (
    <Button className={className} isDisabled={isDisabled} onClick={onClick} {...rest}>
      {typeIcon && <Icon type={typeIcon} />}
    </Button>
  );
};
