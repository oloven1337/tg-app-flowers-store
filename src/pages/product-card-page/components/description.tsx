import React from 'react';

import { Accordion } from "../../../ui/accordion";
import { Text } from "../../../ui/text";

export const Description = ({ description = '' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const tg = window.Telegram.WebApp;

  return (
      <div style={{
        background: tg?.themeParams?.bottom_bar_bg_color || '#F2F2F7'
      }} className="mb-3 rounded-2xl">
        <Accordion accordionName="Описание" isOpen={isOpen} setIsOpen={setIsOpen}>
          <Text style={{
            color: tg.themeParams.hint_color
          }} className="text-start" variant="REGULAR">
            {description}
          </Text>
        </Accordion>
      </div>
  );
};