# Сайт ASAU · Assemblea Solidaritat Antifeixista amb Ucraïna

Статичний сайт на HTML/CSS/JS для GitHub Pages. Без фреймворків, без Google Fonts і без трекерів.

## Структура
```
index.html   — розмітка сторінки
style.css    — стилі
content.js   — УСІ тексти (4 мови) + список зінів + контакти   ← редагувати тут
app.js       — логіка: перемикач мов, картки зінів, переглядач
img/         — обкладинки і розвороти (JPG)
fonts/       — шрифти Inter і PT Mono (локально)
```

## Як опублікувати на GitHub Pages (≈5 хв)
1. Створи на github.com новий **public** репозиторій, наприклад `asau`.
2. **Add file → Upload files**, перетягни ВЕСЬ вміст цієї папки (не саму папку). Натисни **Commit changes**.
3. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, Branch: `main`, папка `/ (root)` → **Save**.
4. За 1–2 хвилини сайт з'явиться за адресою `https://ТВІЙ-ЛОГІН.github.io/asau/`. Цей лінк вставляєш у заявку Tenderete.

Свій домен (наприклад `asau.cat`) можна підключити пізніше: Settings → Pages → Custom domain.

## Як додати зін (наприклад, від Ruinas del Kremlin)
1. Поклади картинки в `img/` (обкладинка ~900 px завширшки, розвороти ~1600 px).
2. У `content.js` знайди об'єкт з `id: "rk"`:
   - заміни `title`, `desc` (4 мови), `specs`, `cover`, `spreads`;
   - **видали рядок `soon: true`**.

## Що треба перевірити / заповнити (позначено `TODO` у content.js)
- `CONTACT.instagram`: я поставила `@antifaucrania.vlc`, бо цей акаунт підписаний на Ruinas del Kremlin. Перевір, чи це справді ASAU.
- `CONTACT.email`: колективна пошта, якщо є. Для колективу краще riseup.net або proton.me, а не особиста.
- Текст «Qui som»: я написала його за назвою асамблеї, тож перепиши своїми словами.
- Мову «Fanzine en castellà» показує кожна картка. Якщо з'явиться зін іншою мовою, додай йому окреме поле.

Посилання з мовою: `?lang=va` · `?lang=es` · `?lang=uk` · `?lang=en`
