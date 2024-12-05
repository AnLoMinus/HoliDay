// קובץ JSON עם החגים
const holidays = [
  {
    name: "יום המחמאות הבינלאומי 🤩",
    description: "יום שבו כל אחד מחויב לתת לפחות שלוש מחמאות כנות לאנשים סביבו",
    purpose: "לשפר את האווירה, להעלות חיוכים ולעודד חיבור אנושי חיובי ❤️",
    activities:
      "ניתן לחלק כרטיסי מחמאות קטנים או ליצור 'קירות מחמאות' ציבוריים 📝",
    food: "ממתקים בצורת לבבות או פרחים שמסמלים הערכה 🌺",
  },
  {
    name: "יום ההמצאות השימושיות 💡",
    description:
      "חג שמוקדש להמצאות קטנות ופשוטות שהופכות את החיים לנוחים יותר 🔧",
    purpose:
      "לעורר השראה לחדשנות יומיומית ולהכיר תודה להמצאות שלפעמים אנחנו לוקחים כמובן מאליו ✨",
    activities:
      "תערוכות קטנות של המצאות שימושיות, שיתוף במדיה החברתית המצאות מוערכות, עידוד לנסות להמציא משהו פשוט במהלך היום 🛠️",
    food: "'מגדל של המצאות' – ארוחה שמורכבת מחטיפים או פריטים קטנים שמתחברים למנה אחת יצירתית 🏗️",
  },
  {
    name: "יום הריקוד הספונטני 💃🕺",
    description:
      "יום שבו כולם מוזמנים לרקוד בכל רגע שמתחשק להם – ברחוב, בבית, בעבודה או סתם בתור בסופר 🎵",
    purpose: "לשחרר מתח, לעודד יצירתיות ולהפיץ שמחה 🎶",
    activities:
      "תחנות מוזיקה ציבוריות ברחובות, סדנאות ריקוד פתוחות לכל הגילאים, 'אתגר הריקוד הספונטני' ברשתות החברתיות 🎪",
    food: "עוגיות בצורת תווים מוזיקליים 🎵 או קוקטיילים צבעוניים שיתאימו לאווירת המסיבה 🍹",
  },
  {
    name: "יום החיבוק הגדול 🤗",
    description: "יום שמוקדש לחיבוקים – מחווה פשוטה אך עוצמתית של חום ואהבה ❤️",
    purpose:
      "לחזק קשרים בין אנשים, להפיץ חום אנושי ולעודד תקשורת לא מילולית 🫂",
    activities:
      "עמדות 'חיבוק חינם' ברחובות, סדנאות ללמידת שפת גוף חיובית, אתגר משפחתי – כמה חיבוקים אפשר לחלק ביום אחד 💝",
    food: "קינוחים רכים ומפנקים כמו מרשמלו, עוגות ספוג או שוקו חם עם קצפת ☕️",
  },
  {
    name: "יום ההפתעות 🎉",
    description:
      "יום שבו כולם מפתיעים אחד את השני במחוות קטנות – מתנות, מחמאות, או פעולות טובות לא צפויות",
    purpose: "להוסיף התרגשות ותחושת הרפתקה ליום-יום, ולעודד נדיבות יצירתית",
    activities:
      "'קופסת הפתעות' קהילתית, חברים ובני משפחה מתכננים 'מבצעי הפתעה' אחד לשני, חברות וארגונים מפתיעים את עובדיהם בפעילויות מיוחדות",
    food: "עוגיות ממולאות שאי אפשר לדעת מה יש בתוכן עד שטועמים! 🍪",
  },
  {
    name: "יום החלומות הגדולים ✨",
    description:
      "יום שמזמין כל אחד לחשוב בגדול על חלומותיו ושאיפותיו, ולשתף אותם עם אחרים",
    purpose: "לעורר השראה, לתמוך באנשים בהגשמת חלומותיהם ולעודד דמיון",
    activities:
      "'קירות חלומות' קהילתיים, פגישות קהילתיות עם סיפורים של אנשים שהגשימו חלומות גדולים, עידוד לכתוב תוכנית קטנה לצעד הראשון להגשמת חלום אישי",
    food: "עוגיות מזל עם מסרים חיוביים ותזכורות לחלומות 🌠",
  },
  {
    name: "יום החיוך העולמי 😄",
    description:
      "יום שמוקדש להפצת חיוכים בכל מקום! אנשים מוזמנים לחייך ולגרום לאחרים לחייך גם",
    purpose: "ליצור אווירה חיובית ולהפיץ שמחה פשוטה ובלתי מותנית",
    activities:
      "'תחנות חיוך' עם פעילויות מצחיקות, תחרות חיוכים, מחוות קטנות כמו פתקים עם פרצופים מחייכים",
    food: "פנקייקים או עוגות קטנות עם פרצופים מחייכים עליהם 🥞😊",
  },
  {
    name: "יום הטבע השקט 🌿🌸",
    description:
      "יום שבו כולנו מתחברים לטבע בשקט ובשלווה – ללא רעש, ללא טלפונים, רק אנחנו והסביבה",
    purpose: "לעודד מודעות לטבע, להרגיע את הנפש ולכבד את העולם הסובב אותנו",
    activities:
      "טיולים בטבע עם הנחיה לשמור על שקט, סדנאות מדיטציה תחת כיפת השמיים, נטיעות עץ קהילתיות",
    food: "פירות טריים, ייצי טבע או ארוחות טבעוניות קלות שמחוברות לטבע 🥗🍉",
  },
  {
    name: "יום הצחוק הקולני 🤣",
    description: "יום שבו צוחקים מכל הלב – כמה שיותר חזק, כמה שיותר מצחיק!",
    purpose: "להפיג מתחים, לחזק קשרים חברתיים ולעודד שמחה כנה",
    activities:
      "סדנאות צחוק קבוצתיות, תחרויות לסיפור הבדיחה המצחיקה ביותר, מרתונים של סרטי קומדיה או מופעי סטנד-אפ",
    food: "פופקורן צבעוני או ממתקים בצורות מצחיקות 🎭🍿",
  },
  {
    name: "יום המוזיקה המאולתרת 🎵",
    description:
      "יום שבו כל חפץ יכול להפוך לכלי נגינה! מעודדים יצירתיות מוזיקלית בכל מקום 🎶",
    purpose:
      "לעודד ביטוי עצמי דרך מוזיקה, לגלות את המוזיקליות שבחיי היומיום ולחבר בין אנשים דרך צלילים 🎹",
    activities:
      "יצירת תזמורת רחוב מאולתרת עם כלים מאולתרים, סדנאות ליצירת כלי נגינה מחומרים ממוחזרים, הופעות ספונטניות בתחבורה הציבורית 🥁",
    food: "חטיפים שעושים רעש כשאוכלים אותם (כמו צ'יפס פריך), משקאות מבעבעים, וממתקים שמצלצלים בפה 🍿",
  },
];

// פונקציה לעדכון השעון והתאריך
function updateClock() {
  const now = new Date();
  const timeElement = document.getElementById("current-time");
  const dateElement = document.getElementById("current-date");

  // פורמט השעה
  const timeString = now.toLocaleTimeString("he-IL", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  // פורמט התאריך
  const dateString = now.toLocaleDateString("he-IL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  timeElement.textContent = timeString;
  dateElement.textContent = dateString;
}

// פונקציה להצגת החג של היום
function showTodaysHoliday() {
  const todaysHolidayElement = document.getElementById("todays-holiday");
  // מחשב את היום בשנה (0-364)
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay) - 1;

  // בוחר את החג המתאים ליום
  const todaysHoliday = holidays[dayOfYear % holidays.length];

  todaysHolidayElement.innerHTML = `
        <h3>החג של היום:</h3>
        <p><strong>${todaysHoliday.name}</strong></p>
        <p>${todaysHoliday.description}</p>
    `;
}

// פונקציה לטעינת החגים
function loadHolidays() {
  const holidaysList = document.getElementById("holidays-list");
  holidaysList.innerHTML = ""; // מנקה את הרשימה לפני טעינה מחדש
  holidays.forEach((holiday, index) => {
    const holidayCard = document.createElement("div");
    holidayCard.className = "holiday-card";
    holidayCard.innerHTML = `
      <h2>${holiday.name}</h2>
      <p><strong>רעיון:</strong> ${holiday.description}</p>
      <p><strong>מטרת החג:</strong> ${holiday.purpose}</p>
      <p><strong>פעילות חגיגית:</strong> ${holiday.activities}</p>
      <p><strong>מאכל מסורתי:</strong> ${holiday.food}</p>
    `;
    holidaysList.appendChild(holidayCard);
  });
}

// טעדכן את השעון כל שנייה
setInterval(updateClock, 1000);

// קורא לפונקציות בטעינת העמוד
document.addEventListener("DOMContentLoaded", () => {
  loadHolidays();
  updateClock();
  showTodaysHoliday();
});
