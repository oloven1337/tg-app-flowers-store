export const getAvatar = async () => {
  return await fetch('https://rfflowers.ru/api/getAvatar', {
    method: 'GET',
    headers: {
      'init-data': window.Telegram.WebApp.initData,
      'Content-Type': 'application/json',
    },
  })
}