import users, { User } from "@/users";

import styles from "./DoctorInfo.module.scss";

type DoctorInfoProps = {
  user: User;
};

const DoctorInfo = ({ user }: DoctorInfoProps) => {
  const userInfo = users[user];

  return (
    <p className={styles["doctor-info"]}>
      <span>
        {userInfo.name}, {userInfo.crm}, {userInfo.rqe}
      </span>
      {userInfo.email && <span> - Email: {userInfo.email}</span>}
      {userInfo.instagram && <span> - Instagram: {userInfo.instagram}</span>}
    </p>
  );
};

export default DoctorInfo;
