import { FC } from "react";
import clsx from "clsx";
import { useTranslations } from "next-intl";

type Props = {
  children: string;
  className?: string;
};

export const Paragraph: FC<Props> = ({ children, className }) => {
  const t = useTranslations();
  return (
    <p className={clsx(className, "indent-5 my-2 hyphens-auto break-words")}>
      {t(children)}
    </p>
  );
};
