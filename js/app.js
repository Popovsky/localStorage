const laptopsAndComputers = [
    laptop = {
        name: 'Ноутбук Asus ROG Strix G531GT-BQ132 (90NR01L3-M02530) Black',
        desc: 'Экран 15.6" IPS (1920x1080) Full HD, матовый / Intel Core i5-9300H (2.4 - 4.1 ГГц) / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce GTX 1650, 4 ГБ / без ОД / LAN / Wi-Fi / Bluetooth / без ОС / 2.35 кг / черный',
        price: 21999,
    },
    pc = {
        name: 'Lenovo IdeaCentre AIO 330-20 (F0D80042RK) Black',
        desc: 'Экран 19.5" (1440x900) WXGA+ / AMD Stoney Ridge A6-9200 (2.0 - 2.8 ГГц) / RAM 4 ГБ / HDD 500 ГБ/ AMD Radeon R4 Graphics / без ОД / LAN / Wi-Fi / Bluetooth / кардридер / веб-камера / без ОС / 4.9 кг / черный / клавиатура + мышь',
        price: 5999,
    },
    monitor = {
        name: 'Монитор 24" AOC C24G1/01 - Частота обновления 144 Гц',
        desc: 'Диагональ дисплея: 24"\n' +
            'Максимальное разрешение дисплея: 1920 x 1080\n' +
            'Тип матрицы: VA\n' +
            'Особенности: Flicker-Free ¸  Изогнутый экран',
        price: 4888,
    },
    tablet = {
        name: 'Планшет Lenovo Tab E7 TB-7104I 3G 1/16GB Slate Black',
        desc: 'Экран 7" TN (1024x600) MultiTouch / MediaTek MT8321A/D (1.3 ГГц) / RAM 1 ГБ / 16 ГБ встроенной памяти + microSD / 3G / Wi-Fi / Bluetooth 4.0 / основная камера 2 Мп, фронтальная - 0.3 Мп / A-GPS / Android 8.0 (Oreo Go edition) / 272 г / черный',
        price: 1999,
    },
    motherboard = {
        name: 'Материнская плата Asus Prime H310M-R R2.0 (s1151, Intel H310',
        desc: 'ип разъема: Socket 1151\n' +
            'Формфактор: MicroATX\n' +
            'Поддержка памяти: 2 x DDR4 DIMM; Количество каналов 2',
        price: 1375,
    },
];
const smartTV = [
    phone1 = {
        name: 'Мобильный телефон Samsung Galaxy M30s 4/64GB Gradation',
        desc: 'Экран (6.4", Super AMOLED, 2340х1080) / Samsung Exynos 9611 (4 x 2.3 ГГц + 4 x 1.7 ГГц) / тройная основная камера: 48 Мп + 8 Мп + 5 Мп, фронтальная 16 Мп / RAM 4 ГБ / 64 ГБ встроенной памяти + microSD (до 512 ГБ) / 3G / LTE / GPS / ГЛОНАСС / BDS / Galileo / поддержка 2х SIM-карт (Nano-SIM) / Android 9.0 (Pie) / 6000 мА*ч',
        price: 5999,
    },
    phone2 = {
        name: 'Мобильный телефон Samsung Galaxy S9 64GB Midnight Black',
        desc: 'Экран (5.8", Super AMOLED, 2960х1440)/ Samsung Exynos 9810 (4 x 2.7 ГГц + 4 x 1.7 ГГц)/ основная камера 12 Мп + фронтальная 8 Мп/ RAM 4 ГБ/ 64 ГБ встроенной памяти + microSD (до 400 ГБ)/ 3G/ LTE/ GPS/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.0 (Oreo) / 3000 мА*ч\n' +
            'Поддерживается установка двух SIM-карт или одной SIM-карты и карты памяти. Слот для второй SIM-карты совмещен со слотом для карты памяти.',
        price: 10999,
    },
    phone3 = {
        name: 'Мобильный телефон Meizu 16 6/64GB Black',
        desc: 'Экран (6.0", Super AMOLED, 2160x1080)/ Qualcomm Snapdragon 710 (2 x 2.2 ГГц + 6 x 1.7 ГГц)/ двойная основная камера: 12 Мп + 20 Мп, фронтальная камера: 20 Мп/ RAM 6 ГБ/ 64 ГБ встроенной памяти/ 3G/ LTE/ GPS/ ГЛОНАСС/ поддержка 2х SIM-карт (Nano-SIM)/ Android 8.1 (Oreo)/ 3100 мА*ч',
        price: 5299,
    },
    tv1 = {
        name: 'Телевизор Samsung UE43N5000AUXUA',
        desc: 'Диагональ экрана: 43"\n' +
            'Разрешение: 1920x1080\n' +
            'Диапазоны цифрового тюнера: DVB-C ¸  DVB-T2\n' +
            'Частота обновления: 300 Гц (PQI)',
        price: 7999,
    },
    tv2 = {
        name: 'Телевизор LG 43UK6300PLB',
        desc: 'Диагональ экрана: 43"\n' +
            'Разрешение: 3840x2160\n' +
            'Диапазоны цифрового тюнера: DVB-T2 ¸  DVB-S ¸  DVB-T ¸  DVB-S2\n' +
            'Smart-платформа: WebOS 4.0\n' +
            'Частота развертки панели: 60 Гц',
        price: 11399,
    },
];
const appliances = [
    fridge = {
        name: 'Холодильник SAMSUNG RB29FSRNDSA/UA',
        desc: 'Система разморозки No Frost (Frost Free): Холодильное+морозильное отделения\n' +
            'Тип холодильника: Двухкамерный\n' +
            'Количество компрессоров: 1\n' +
            'Тип управления: Электронное',
        price: 10999,
    },
    freezer = {
        name: 'Морозильная камера CANDY CMIOUS 5142 WH',
        desc: 'Тип управления: Механическое',
        price: 4999,
    },
    washingMachine = {
        name: 'Стиральная машина узкая CANDY CS34 1051D1/2-07',
        desc: 'Максимальная загрузка белья: 5 кг\n' +
            'Класс энергопотребления: А\n' +
            'Скорость отжима: 1000 об/мин\n' +
            'Способ установки: Отдельностоящая (соло)\n' +
            'Дисплей: Без дисплея',
        price: 4444,
    },
    tumbleDryer = {
        name: 'Сушильный автомат CANDY CS C8DG-S',
        desc: 'Принцип отвода влаги: Конденсационный',
        price: 7999,
    },
    plate = {
        name: 'Комбинированная плита GORENJE K 5341 XF',
        desc: 'Тип: Комбинированные (газ+электро)\n' +
            'Типы нагревательных элементов поверхности плиты: Газовые\n' +
            'Тип духовки: Электрическая\n' +
            'Конвекция: Есть\n' +
            'Материал решеток поверхности: Чугунные\n' +
            'Газ-контроль: Поверхности\n' +
            'Гриль: Электрический',
        price: 7599,
    },



];
const householdProducts = [
    blanket = {
        name: 'Одеяло MirSon Eco Hand Made 0602 деми 200x220 см',
        desc: 'Размер 200x220 см',
        price: 1309,
    },
    beddingSet = {
        name: 'Комплект постельного белья LightHouse Бязь Голд Cigdem',
        desc: 'Размер Евро',
        price: 894,
    },
    carcass = {
        name: 'Каркас Come-for Стандарт 200х160 см + 6 ножек',
        desc: 'Размеры\n' +
            '\n' +
            '160 х 200 см\n' +
            'Ножки в комлекте: С ножками\n' +
            'Материал ламелей: Бук',
        price: 1812,
    },
    pillow = {
        name: 'Подушка Sei Design Standart 50х70 см (4820182655876)',
        desc: 'Размер 50х70 см',
        price: 1812,
    },
    armchair = {
        name: 'Кресло для геймеров Hator Arc Terracotta (HTC-986)',
        desc: '...',
        price: 10999,
    },
];
const toolsAndAutoProducts = [
    dvr = {
        name: 'Видеорегистратор Xiaomi Yi Smart Dash WiFi Gray International',
        desc: 'Максимальное разрешение видео: SuperHD (2304x1296)\n' +
            'Количество камер: 1\n' +
            'Встроенный GPS: Нет',
        price: 1299,
    },
    oil = {
        name: 'Моторное масло Mobil Super 3000 x1 5W-40 4 л',
        desc: '4L',
        price: 567,
    },
    leds = {
        name: 'Светодиодные (LED) лампы rVolt RC01 H4 8000Lm',
        desc: 'Тип лампы: H4\n' +
            'Вид: Светодиодные',
        price: 1792,
    },
    autoAmbrella = {
        name: 'Автомобильный зонт - тент UKC Umbrella',
        desc: '...',
        price: 2849,
    },
    screwdriver = {
        name: 'Аккумуляторная дрель-шуруповерт Bosch Professional',
        desc: 'Питание: Литий-ионный аккумулятор\n' +
            'Ключевые особенности: Кейс ¸  Реверс ¸  Вторая аккумуляторная батарея\n' +
            'Тип патрона: Быстрозажимной',
        price: 2879,
    },
];
const category = [
    {
        arr: laptopsAndComputers,
        name: 'Ноутбуки и компьютеры',
    },
    {
        arr: smartTV,
        name: 'Смартфоны, ТВ и электротехника',
    },
    {
        arr: appliances,
        name: 'Бытовая техника',
    },
    {
        arr: householdProducts,
        name: 'Товары для дома',
    },
    {
        arr: toolsAndAutoProducts,
        name: 'Инструменты и автотовары',
    },
];
let cart = [];

const getRandomProduct = () => {
    let cat = Math.floor(Math.random()*category.length);
    let product = Math.floor(Math.random()*category[cat].arr.length);
    let av = !!Math.floor(Math.random()*2);
    return {
        name: category[cat].arr[product].name,
        desc: category[cat].arr[product].desc,
        price: category[cat].arr[product].price,
        available: av,
        cat: category[cat].name,
        amount: av ? Math.floor(Math.random()*100) : 0,
    }
};

const getArrayOfRandomProducts = count => [...new Array(count)].map(() => getRandomProduct());
const temp = getArrayOfRandomProducts(10);
const addProductToCart = number => {
    cart.push(temp[number]);
    localStorage.setItem('cart', JSON.stringify(cart));
};