import React from 'react';

import { Accordion } from "../../../ui/accordion";
import { Text } from "../../../ui/text";

export const Structure = ({ structure = '' }) => {
  const [isOpen, setIsOpen] = React.useState(true);
  const tg = window.Telegram.WebApp;

  return (
      <div className="mb-2 rounded-2xl">
        <Accordion accordionName="Состав" isOpen={isOpen} setIsOpen={setIsOpen}>
          <Text style={{ color: tg.themeParams.hint_color, whiteSpace: 'pre-wrap'  }} variant="REGULAR">
            {structure}
          </Text>
        </Accordion>
      </div>
  );
};