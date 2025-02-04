import Image from "next/image";

import users from "@/users";

import styles from "./DoctorSignature.module.scss";

const DoctorSignature = () => {
  const userInfo = users["mariana-machoski"];

  return (
    <div className={styles["doctor-signature"]}>
      <Image src={"/assinatura.png"} width={75} height={75} alt="Assinatura" />
      {userInfo.signature.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
    </div>
  );
};

export default DoctorSignature;
