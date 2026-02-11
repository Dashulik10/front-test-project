import styles from "./Hero.module.css"
import '../../../styles/variables.css'
import './Stepper/Stepper.module.css'
import Stepper from "./Stepper/Stepper.tsx";
import TextBlock from "./TextBlock/TextBlock.tsx";
import Button from "../../ui/Button/Button.tsx";
import buttonStyle from "../../ui/Button/Button.module.css"
import PlaneImage from "../../../assets/plane.png"
import Sky from "../../../assets/sky.jpg"

const Hero = () => {

    const steps = [1, 2, 3]

    return (
        <section className={styles.heroWrapper}>

            <div className={styles.planeLayer}>
                <img src={PlaneImage} alt="Airplane" className={styles.planeImage} />
            </div>

            <div className={styles.blocksContainer}>

                <div className={styles.bgLayer}>
                    <img src={Sky} alt="Sky"/>
                </div>

                <div className={styles.skyCard}>
                    <div className={styles.contentLayer}>
                        <Stepper steps={steps}></Stepper>
                            <div className={styles.rightBox}>
                                <TextBlock smallText={"Elevate your travel journey"} bigText={"Experience The Magic Of Flight!"} />
                                <div className={styles.buttonsSubBlock}>
                                    <Button variant={"beautiful"}>Book a trip now</Button>
                                    <Button variant={"play"}>
                                        <svg className={buttonStyle.play__svg} viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                                <circle className={buttonStyle.play__outer} cx="32" cy="32" r="32"/>
                                                <circle className={buttonStyle.play__inner} cx="32" cy="32" r="16"/>
                                                <path className={buttonStyle.play__icon} d="M28 24L41 32L28 40V24Z"/>
                                        </svg>
                                    </Button>
                                </div>
                            </div>
                    </div>
                </div>

               <div className={styles.stageRow}>
                    <div className={styles.leftPreLastStage}></div>
                    <div className={`${styles.rightFiller} ${styles.preBottomFiller}`}>
                        <div className={styles.rightPreLastStage}></div>
                    </div>
                </div>

                <div className={styles.stageRow}>
                    <div className={styles.leftLastStage}></div>
                    <div className={`${styles.rightFiller} ${styles.bottomFiller}`}>
                        <div className={styles.rightLastStage}></div>
                    </div>
                </div>

            </div>
        </section>
    )

}

export default Hero