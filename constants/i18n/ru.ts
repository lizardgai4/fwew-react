import type { UITranslation } from "@/types/i18n";

const partOfSpeech = {
  "vtr.": "переходный глагол",
  "n.": "имя существительное",
  "num.": "число",
  "pn.": "местоимение",
  "adv.": "наречие",
  "adj.": "прилагательное",
  "vin.": "непереходный глагол",
  "inter.": "вопросительное слово",
  "part.": "частица",
  "adp.": "предлог",
  "adv., n.": "наречие, имя существительное",
  "vtrm.": "переходный модальный глагол",
  "vim.": "непереходный модальный глагол",
  "conj.": "союз",
  "sbd.": "подчинительный союз",
  "n., intj.": "имя существительное, междометие",
  "intj.": "междометие",
  "part., intj.": "частица, междометие",
  "prop.n.": "имя собственное",
  "vin., intj.": "непереходный глагол, междометие",
  "adj., n.": "прилагательное, имя существительное",
  "adj., adv.": "прилагательное, наречие",
  "adj., intj.": "прилагательное, междометие",
  "adv., intj.": "наречие, междометие",
  "ph.": "фраза",
  "adj., conj.": "прилагательное, союз",
  "inter., intj.": "вопросительное слово, междометие",
  "adv., conj.": "наречие, союз",
  "vin., vtr.": "непереходный или переходный глагол",
};

const partOfSpeechList = Object.entries(partOfSpeech).map(([value, name]) => ({
  value,
  name,
}));

const getResultText = (count: number) => {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    return `результат`;
  }
  if (
    (lastDigit === 2 || lastDigit === 3 || lastDigit === 4) &&
    (lastTwoDigits < 10 || lastTwoDigits > 20)
  ) {
    return `результата`;
  }
  return `результатов`;
};

const strings: UITranslation = {
  common: {
    results: getResultText,
    noResults: "Нет результатов",
    partOfSpeech,
    partOfSpeechList,
  },
  screens: {
    search: "Поиск",
    list: "Список",
    random: "Случайные",
    numbers: "Числа",
    names: "Имена",
    settings: "Настройки",
  },
  search: {
    search: "Поиск",
    naviOnly: "Поиск только по словам На'ви",
    audio: "Audio",
    partOfSpeech: "Часть речи",
    definition: "Определение",
    breakdown: "Разбивка на слоги",
    infixDots: "Infixes (dots)",
    infixSlots: "Infixes (slots)",
    prefixes: "Префиксы",
    infixes: "Infixes",
    suffixes: "Суффиксы",
    lenition: "Lenition",
    comment: "Комментарий",
    source: "Источник",
    ipa: "IPA",
  },
  list: {
    list: "Список",
    listOptions: "Параметры",
    listMenu: {
      whatValues: [
        { value: "pos", description: "часть речи" },
        { value: "word", description: "слово" },
        {
          value: "words",
          description: "слова в порядке публикации",
        },
        { value: "syllables", description: "количество слогов" },
        { value: "stress", description: "позиция ударного слога" },
        { value: "length", description: "длина слова в фонемах" },
      ],
      condValues: {
        pos: [
          { value: "starts", description: "начинается с" },
          { value: "ends", description: "заканчивается" },
          { value: "is", description: "есть" },
          { value: "has", description: "имеет" },
          { value: "like", description: "похоже на" },
          { value: "not-starts", description: "не начинается с" },
          { value: "not-ends", description: "не заканчивается" },
          { value: "not-is", description: "не есть" },
          { value: "not-has", description: "не имеет" },
          { value: "not-like", description: "не похоже на" },
        ],
        word: [
          { value: "starts", description: "начинается с" },
          { value: "ends", description: "заканчивается" },
          { value: "has", description: "имеет" },
          { value: "like", description: "похоже на" },
          { value: "not-starts", description: "не начинается с" },
          { value: "not-ends", description: "не заканчивается" },
          { value: "not-has", description: "не имеет" },
          { value: "not-like", description: "не похоже на" },
        ],
        words: [
          { value: "first", description: "самые старые слова" },
          { value: "last", description: "самые новые слова" },
        ],
        syllables: [
          { value: "<", description: "меньше чем" },
          { value: "<=", description: "меньше или равно" },
          { value: "=", description: "равно" },
          { value: ">=", description: "больше или равно" },
          { value: ">", description: "больше чем" },
          { value: "!=", description: "не равно" },
        ],
        stress: [
          { value: "<", description: "меньше чем" },
          { value: "<=", description: "меньше или равно" },
          { value: "=", description: "равно" },
          { value: ">=", description: "больше или равно" },
          { value: ">", description: "больше чем" },
          { value: "!=", description: "не равно" },
        ],
        length: [
          { value: "<", description: "меньше чем" },
          { value: "<=", description: "меньше или равно" },
          { value: "=", description: "равно" },
          { value: ">=", description: "больше или равно" },
          { value: ">", description: "больше чем" },
          { value: "!=", description: "не равно" },
        ],
      },
    },
    and: "и...",
  },
  random: {
    random: "Случайные Слова",
    randomOptions: "Случайные опции",
    numWords: "Количество случайных слов",
    where: "где...",
  },
  numbers: {
    placeholderNumeric: "42",
    placeholderAlpha: "mrrvomun",
    octal: "в восьмеричной:",
    decimal: "в десятеричной:",
  },
  names: {
    single: "Одно имя",
    full: "Полное имя",
    alu: "Имя с alu",
    options: "Параметры",
    numNames: "Количество генерируемых имен",
    dialect: "Диалект",
    dialects: [
      { name: "междудиалектный", value: "interdialect" },
      { name: "лесной", value: "forest" },
      { name: "рифовый", value: "reef" },
    ],
    syllablesOptions: [
      { name: "случайный", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
    ],
  },
  nameSingle: {
    numSyllables: "Количество слогов",
  },
  nameFull: {
    numSyllables1: "Количество слогов в имени",
    numSyllables2: "Количество слогов в фамилии",
    numSyllables3: "Количество слогов в имени родителя",
    nameEnding: "Окончание Имени",
    nameEndingHint:
      "-'itan для мужчин, -'ite для женщин, -'itu для небинарных (неканонический)",
    nameEndingOptions: [
      { value: "random", name: "случайный" },
      { value: "'ite", name: "-'ite" },
      { value: "'itan", name: "-'itan" },
      { value: "'itu", name: "-'itu" },
    ],
  },
  nameAlu: {
    numSyllables: "Количество слогов в имени",
    nounMode: "Существительное",
    adjMode: "Прилагательное",
    nounModes: [
      { name: "что-то", value: "something" },
      { name: "обычное существительное", value: "normal noun" },
      { name: "глагол-ер", value: "verb-er" },
    ],
    adjModes: [
      { name: "любое", value: "any" },
      { name: "что-то", value: "something" },
      { name: "ничего", value: "none" },
      { name: "обычное прилагательное", value: "normal adjective" },
      { name: "существительное в родительном падеже", value: "genitive noun" },
      { name: "существительное происхождения", value: "origin noun" },
      { name: "причастие глагола", value: "participle verb" },
      { name: "активное причастие глагола", value: "active participle verb" },
      { name: "пассивное причастие глагола", value: "passive participle verb" },
    ],
  },
  settings: {
    about: "О приложении",
    version: "Версия",
    credits: "Авторы",
    development: "Разработка",
    design: "Дизайн",
    testing: "Тестирование",
    translation: "Перевод",
    appLanguage: "Язык интерфейса",
    resultsLanguage: "Язык результатов",
  },
};

export default strings;
