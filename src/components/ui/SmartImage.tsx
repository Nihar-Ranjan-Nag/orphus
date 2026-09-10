import { ImgHTMLAttributes, useState } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & { fallback?: string };

export function SmartImage({ fallback = "/dubai-bg.png", onError, ...props }: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <img
      {...props}
      src={failed ? fallback : props.src}
      onError={(e) => {
        if (!failed) setFailed(true);
        onError?.(e);
      }}
    />
  );
}
