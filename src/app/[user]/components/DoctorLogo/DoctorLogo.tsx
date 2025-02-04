import Image from "next/image";
import Link from "next/link";

import { User } from "@/users";

const DoctorLogo = ({ user }: { user: User }) => (
  <Link href={`/${user}`}>
    <Image
      src={`/${user}/logo.png`}
      alt=""
      width={400}
      height={123}
      priority={true}
    />
  </Link>
);

export default DoctorLogo;
