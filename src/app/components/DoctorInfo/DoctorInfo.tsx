import users from "@/users";

import styles from "./DoctorInfo.module.scss";

const DoctorInfo = () => {
  const userInfo = users["mariana-machoski"];

  return (
    <p className={styles["doctor-info"]}>
      {userInfo.name}, {userInfo.crm}, {userInfo.rqe} - Email: {userInfo.email}{" "}
      - Instagram: {userInfo.instagram}
    </p>
  );
};

export default DoctorInfo;
