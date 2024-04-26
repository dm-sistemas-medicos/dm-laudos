import Image from "next/image";

import userInfo from "@/users/mariana-machoski/user-info.json";

import styles from "./DoctorSignature.module.scss";

const DoctorSignature = () => (
  <div
    className={styles["doctor-signature"]}
    data-testid="doctor-signature-container"
  >
    <Image src={"/assinatura.png"} width={75} height={75} alt="Assinatura" />
    {userInfo.signature.map((text, i) => (
      <p key={i}>{text}</p>
    ))}
  </div>
);

export default DoctorSignature;
