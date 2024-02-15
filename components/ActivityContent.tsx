import styles from "./activityContent.module.css";

export const ActivityContent = () => {
  return (
    <>
      <div className={styles.aboutMain}>
        <img src="/activity.png" alt="" />
        <div className={styles.aboutDiv}>
          <h1>ABOUT</h1>
          <p>
            Potent felis facilisi feugiat volutpat amet. Elementum sed quisque
            eget vulputate et neque, cursus tellus. Adipiscing cras pellentesque
            velit commodo. Et dictumst a cras nisl facilisis cursus dolor.
            Ornare morbi lobortis tristique diam. Adipiscing sed at ut sit et,
            consequat. Ornare diam mattis eu nunc ornare erat. Vehicula
            ultricies orci, nunc vel. Vestibulum lacus, cursus tellus
            consectetur nisl lorem ullamcorper non. Arcu ipsum, congue tortor
            non eget. Fermentum, platea sit mi vulputate et nisl. In ornare
            habitasse tempus, tempor. Purus in id quisque viverra. Potent felis
            facilisi feugiat volutpat amet. Elementum sed quisque eget vulputate
            et neque, cursus tellus. Adipiscing cras pellentesque velit commodo.
            Et dictumst a cras nisl facilisis cursus dolor. Ornare morbi
            lobortis tristique diam. Adipiscing sed at ut sit et, consequat.
            Ornare diam mattis eu nunc ornare erat. Vehicula ultricies orci,
            nunc vel. Vestibulum lacus, cursus tellus consectetur nisl lorem.
          </p>
          <input className={styles.expand_btn} type="checkbox" />
          <div className={styles.buttonDiv}>
            <button>Register Now</button>
          </div>
        </div>
      </div>
    </>
  );
};
