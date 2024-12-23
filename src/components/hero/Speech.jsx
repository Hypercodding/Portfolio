import { TypeAnimation } from 'react-type-animation';
import {motion} from "motion/react"

const Speech = () => {
  return (
    <motion.div animate={{opacity:[0,1]}} transition={{duration:1}} className="bubbleContainer">
        <div className="bubble">
        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'FULL Stack WEB Solutions',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Backend Programming',
        1000,
        'Front-end Designs',
        1000,
        'We care for your sites',
        1000
      ]}
      wrapper="span"
      speed={50}
      deletionSpeed={40}
      // omitDeletionAnimation
      // style={{ fontSize: '2 em', display: 'inline-block' }}
      repeat={Infinity}
    />
        </div>
        <img src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech