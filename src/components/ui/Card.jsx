import { motion } from 'framer-motion';
import { animationConfig } from '../../config/animation.config';

const Card = ({
  children,
  className = '',
  hover = true,
  onClick,
  variant = 'default',
}) => {
  const variants = {
    default: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-lg',
    outlined: 'bg-transparent border-2 border-neutral-300',
  };

  const baseClasses = `
    rounded-xl
    overflow-hidden
    transition-shadow
    duration-300
    ${variants[variant]}
    ${className}
  `;

  const hoverAnimation =
    hover && !animationConfig.prefersReducedMotion
      ? {
          whileHover: {
            y: -6,
            scale: 1.02,
            transition: { duration: 0.2 },
          },
          whileTap: { scale: 0.98 },
        }
      : {};

  return (
    <motion.div
      className={baseClasses}
      onClick={onClick}
      {...hoverAnimation}
      style={{
        willChange: 'transform',
        cursor: onClick ? 'pointer' : 'default',
      }}
    >
      {children}
    </motion.div>
  );
};

export default Card;
