import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion";


function FramerAni() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
      restDelta: 0.001
    });

  return (
    <div>
   <motion.div className="fixed top-0 right-0 left-0 bg-gradient-to-r from-cyan-100 to-red-300 h-3 rounded-lg" style={{ scaleX }} />
    </div>
  )
}

export default FramerAni