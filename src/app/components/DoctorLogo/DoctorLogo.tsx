"use client";

import Image from "next/image";

const DoctorLogo = () => (
  <Image src={"/logo.png"} alt="" width={400} height={123} priority={true} />
);

export default DoctorLogo;
