import { RedirectCard } from "../../ui/redirect-card";

export const RedirectCardList = () => {
  return (
      <div className="grid grid-cols-2 gap-4">
        <RedirectCard title="Каталог" link="/catalog"/>
        <RedirectCard title="Цветы без сборки"/>
      </div>
  )
};