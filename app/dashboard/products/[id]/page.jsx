
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Image from "next/image"

const SingleProductPage = () => {


  return(
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src='/noavatar.png' alt="" fill />
        </div>
        Trash bag
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
        <label>Title</label>
        <input type="text" name ="title" placeholder="KDB"/><br/>
        <label>Price</label>
        <input type="number" name ="price" placeholder="$00.00"/>
        <label>Stock</label>
        <input type="number" name ="stock" placeholder="33"/>
        <label>Color</label>
        <input type="text" name ="color" placeholder="red"/>
        <label>Size</label>
        <input type="number" name ="size" placeholder="56"/>
        <label>Cat</label>
        <select name="cat" id="cat">
          <option value="residential">Residential</option>
          <option value="industrial">Industrial</option>
        </select>
        <label>Description</label>
        <textarea type="text" name ="desc" rows= "10" placeholder="Description"/>
        <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default  SingleProductPage;