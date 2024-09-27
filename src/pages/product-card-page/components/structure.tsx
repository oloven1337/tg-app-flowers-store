import React from 'react';

import { Accordion } from "../../../ui/accordion";
import { Text } from "../../../ui/text";

export const Structure = ({ structure = '' }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const tg = window.Telegram.WebApp;

  return (
      <div className="rounded-2xl">
        <Accordion accordionName="Состав" isOpen={isOpen} setIsOpen={setIsOpen}>
          <Text style={{ color: tg.themeParams.hint_color  }} variant="REGULAR">
            {structure}
          </Text>
        </Accordion>
      </div>
  );
};