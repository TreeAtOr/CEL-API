# CEL-API
Cloud English Learner - API для создания приложений по изучению иностранных языков

## Введение
На сегодняшний день владение как минимум одним иностранным языком является достаточно важным и практичным навыком. Одним из самых эффективных способов выучить язык является пополнение словарного запаса путем запоминания новых слов. Для этого уже создано много приложений, которые можно будет разрабатывать еще проще с нашим API

## Возможности
- Импорт существующих словарей с расширением .xdxf
- Формирование списка изучаемых слов согласно системе Лейтнера (слова с большим количеством ошибок получают больший приоритет)
- Возможность задавать разным ученикам разные списки слов
- Сбор статистики обучающихся для учителей
- Использование API в чат-ботах (Telegram)
- Хранение данных во внешней БД (MongoDB)

## Инструменты
Для реализации проекта мы использовали TypeScript, Node.js, express.js и библиотеку для работы с MongoDB - mongoose.
Был построен простой СI/СD pipline со сборкой документации с использованием apidoc и дальнейшем деплоем на Heroku.
