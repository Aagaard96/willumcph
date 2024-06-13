import { motion } from 'framer-motion';

const StaggerAnimationVariants = {
    initial: {
        opacity: 0,
        y: 50, // Slightly less downward movement
        scale: 0.75, // Slightly scale down
    },
    animate: (index = 0) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5, // Shortened duration for a quicker appearance
            ease: "easeOut", // Easing for a smoother transition
            delay: 0.3 * index, // Delay to create a staggered effect
        },
    }),
};

export default function StaggerAnimation({ children, index,  className }) {
    return (

        <motion.as
            variants={StaggerAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className={className}
        >
            {children}
        </motion.as>
    );
}

