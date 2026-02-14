import Image from "next/image";

import users, { User } from "@/users";

import styles from "./DoctorSignature.module.scss";

type DoctorSignatureProps = {
  user: User;
};

const DoctorSignature = ({ user }: DoctorSignatureProps) => {
  const userInfo = users[user];

  return (
    <div className={styles["doctor-signature"]}>
      {userInfo.hasSignatureImage && (
        <Image
          src={`/${user}/assinatura.png`}
          width={75}
          height={75}
          alt="Assinatura"
        />
      )}
      {userInfo.signature.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
};

export default DoctorSignature;
