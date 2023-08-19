"use client";

import Image from "next/image";

interface Props {
  src?: string | null;
}

const Avatar: React.FC<Props> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      alt="Avatar"
      height="30"
      width="30"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
