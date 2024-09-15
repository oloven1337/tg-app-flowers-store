import React from 'react';

import { Accordion } from "../../../ui/accordion";
import { Text } from "../../../ui/text";

export const Structure = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const tg = window.Telegram.WebApp;

  return (
      <div className="rounded-2xl">
        <Accordion accordionName="Состав" isOpen={isOpen} setIsOpen={setIsOpen}>
          <Text style={{ color: tg.themeParams.hint_color  }} variant="REGULAR">
            {( "Лизиантус - 2 шт.\nРоза кустовая - 2 шт.\nРоза - 5 шт.\nЛента атласная - 1 шт.\nДиантус - 5 шт.\nУпаковка дизайнерская - 2 шт.\nЗелень декоративная - 3 шт.")}
          </Text>
        </Accordion>
      </div>
  );
};