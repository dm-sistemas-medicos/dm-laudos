import users, { User } from "@/users";

import styles from "./DoctorInfo.module.scss";

const DoctorInfo = ({ user }: { user: User }) => {
  const userInfo = users[user];

  return (
    <p className={styles["doctor-info"]}>
      {userInfo.name}, {userInfo.crm}, {userInfo.rqe} - Email: {userInfo.email}{" "}
      - Instagram: {userInfo.instagram}
    </p>
  );
};

export default DoctorInfo;
