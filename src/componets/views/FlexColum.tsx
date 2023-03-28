import { FC, PropsWithChildren } from "react";
import style from "./FlexColum.module.css";

type FlexProps = {
  as?: React.ElementType;
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const FlexColum: FC<PropsWithChildren<FlexProps>> = (props) => {
  const {
    as: CustomTag = "div",
    children,
    className: _className,
    ...divProps
  } = props;
  const className = _className ? `${style.root} ${_className}` : style.root;
  return (
    <CustomTag className={className} {...divProps}>
      {children}
    </CustomTag>
  );
};
