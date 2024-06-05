import userInfo from "@/users/mariana-machoski/user-info.json";

import styles from "./DoctorInfo.module.scss";

const DoctorInfo = () => (
  <p className={styles["doctor-info"]}>
    {userInfo.name}, {userInfo.crm}, {userInfo.rqe} - Email: {userInfo.email} -
    Instagram: {userInfo.instagram}
  </p>
);

export default DoctorInfo;
