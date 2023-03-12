import React from 'react';
import Icon, { IconType } from 'components/ui/Icon';
import { IButtonProps, Button } from 'components/ui/Button/Button';

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
