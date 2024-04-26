"use client";

import Image from "next/image";
import Link from "next/link";

const DoctorLogo = () => (
  <Link href="/">
    <Image src={"/logo.png"} alt="" width={400} height={123} priority={true} />
  </Link>
);

export default DoctorLogo;
