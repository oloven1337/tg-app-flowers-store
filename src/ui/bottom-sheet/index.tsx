import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const BottomSheet: React.FC<BottomSheetProps> = ({ isOpen, onClose, children }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (isOpen) {
      controls.start({ y: 0, opacity: 1 });
      document.body.style.overflow = 'hidden'; // Отключение скролла
    } else {
      // Закрытие компоненты
      controls.start({ y: '100%', opacity: 0 });
      document.body.style.overflow = ''; // Включение скролла
    }
    return () => {
      document.body.style.overflow = ''; // Сброс стиля при размонтировании
    };
  }, [isOpen, controls]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.y > 100) {
      onClose();
    }
  };

  return (
      <>
        {isOpen && (
            // Полупрозрачный оверлей
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={onClose} // Закрытие при клике на фон
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            />
        )}

        <motion.div
            className={`fixed bottom-0 left-0 right-0 bg-[#F2F2F7] shadow-lg rounded-t-3xl z-50 max-h-[80vh] w-full overflow-hidden`}
            initial={{ y: '100%', opacity: 0 }}
            animate={controls}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            onDragEnd={handleDragEnd}
        >
          <div className="p-4 overflow-y-auto h-full">{children}</div>
        </motion.div>
      </>
  );
};
