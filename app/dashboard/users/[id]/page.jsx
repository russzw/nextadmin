
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"

const SingleUserPage = () => {


  return(
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt="" fill />
        </div>
        Kevin de Bruyne
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label>Username</label>
        <input type="text" name ="username" placeholder="KDB"/><br/>
        <label>Email</label>
        <input type="email" name ="email" placeholder="KDB@mail.com"/>
        <label>Password</label>
        <input type="password" name ="password" />
        <label>Phone</label>
        <input type="phone" name ="phone" placeholder="+17171717"/>
        <label>Address</label>
        <textarea type="text" name ="address" placeholder="Manchester"/>
        <label>Is Admin?</label>
        <select name="isAdmin" id="isAdmin">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <label>Is Active?</label>
        <select name="isActive" id="isActive">
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default  SingleUserPage;