import { FC, useRef } from 'react';

import arrow from '../../assets/icons/arrow.svg';

interface AccordionProps {
  children: JSX.Element | JSX.Element[];
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  accordionName: string;
}

export const Accordion: FC<AccordionProps> = ({ children, setIsOpen, isOpen, accordionName }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const tg = window.Telegram.WebApp;

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div style={{
        background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
      }} className="w-full max-w-md p-4 bg-white rounded-lg shadow-md">
        <button
            className="flex justify-between items-center w-full font-semibold text-lg text-left"
            onClick={toggleAccordion}
        >
          <span style={{ color: tg.themeParams.text_color }}>{accordionName}</span>
          <span>{isOpen ? (
              <img className="rotate-[-90deg] h-4 w-4" src={arrow} alt=""/>
          ) : (
              <img className="rotate-90 h-4 w-4" src={arrow} alt=""/>
          )}</span>
        </button>
        <div
            ref={contentRef}
            className="transition-all duration-300 ease-in-out overflow-hidden"
            style={{
              maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
            }}
        >
          <div className="mt-2 text-gray-700">
            {children}
          </div>
        </div>
      </div>
  );
};
