interface TelegramWebAppInitDataUnsafe {
  query_id?: string;
  user?: {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
  };
  auth_date?: number;
  hash: string;
  [key: string]: unknown;
}

interface Telegram {
  WebApp: {
    initDataUnsafe: TelegramWebAppInitDataUnsafe;
    themeParams: {
      section_bg_color: string;
      link_color: string;
      text_color: string;
      accent_text_color: string;
      secondary_bg_color: string;
      header_bg_color: string;
      hint_color: string;
      button_text_color: string;
      subtitle_text_color: string;
      bg_color: string;
      section_header_text_color: string;
      destructive_text_color: string;
      bottom_bar_bg_color: string;
      button_color:string;
    }
  };
}

// Расширяем глобальный объект Window, чтобы TypeScript понимал Telegram
declare global {
  interface Window {
    Telegram: Telegram;
  }
}
