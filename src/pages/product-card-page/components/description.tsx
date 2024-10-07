import React from 'react';

import { Accordion } from "../../../ui/accordion";
import { Text } from "../../../ui/text";

export const Description = ({ description = '' }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const tg = window.Telegram.WebApp;

  return (
      <div style={{
        background: tg?.themeParams?.bg_color || '#FFFFFF'
      }} className="mb-2 rounded-2xl">
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