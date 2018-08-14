var app = new Vue({
    el: "#app",
    data: {
        offerTitle: "Кран-манипулятор на вашем объекте через день!",
        mainOffer: "Нужен кран-манипулятор?",
        feedback: {
            f1: {
                text: 'Не ожидал, что в такие короткие сроки можно организовать поставку техники к себе на объект',
                photo: '',
                name: 'Агарков Максим ЗАО "Зенит Инвестпром"'
            },
            f2: {
                text: 'Наш кран внезапно сломался, а нужно было разгрузить еще 3 машины с плитами, одна из которых была уже на объекте. Обратились в эту компанию. Пообещали что кран будет максимум через два часа. Прибыл примерно через 1 час -10 мин., если с момента звонка, специально засекли, т.к. цигель-цигель... Что очень порадовало - не пришлось платить неустойку за длинномеры. В целом все в штатном режиме. Спасибо!',
                photo: '',
                name: 'Борис Зейтунян ООО «МПМ»'
            },
            f3: {
                text: 'Не ожидал, что в такие короткие сроки можно организовать поставку техники к себе на объект',
                photo: '',
                name: 'Пивоваров Иван АО "Изолюкс"'
            }
        }
    },
    created: function () {
        if (location.href.includes('ekskavator')) {
            this.offerTitle = 'Экскаватор на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужен экскаватор?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/ekskavator/ekskavator1.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/ekskavator/ekskavator2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/ekskavator/mini-eksk.jpeg')";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Высота погрузки</span> <span>6 - 17 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Глубина копания</span> <span>5 - 17 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Объём ковша</span> <span>0,8 - 3,0 м3</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>гусеничный</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Эксплуатационная масса</span> <span>12 - 25 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Доп. оборудование</span> <span>гидромолот, шнек, грейфер</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1500 - 2800 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Высота погрузки</span> <span>6 - 17 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Глубина копания</span> <span>5 - 17 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Объём ковша</span> <span>0,8 - 3,0 м3</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колёсный</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Эксплуатационная масса</span> <span>12 - 20 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Доп. оборудование</span> <span>гидромолот, шнек</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1500 - 2800 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Высота погрузки</span> <span>1 - 4 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Глубина копания</span> <span>0,5 - 4 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Объём ковша</span> <span>0,1 - 1,7 м3</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>гусеничный</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Эксплуатационная масса</span> <span>1,6 - 5 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Доп. оборудование</span> <span>гидромолот, шнек</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1150 - 1350 руб./ч.</span></li>";

            document.getElementsByClassName('image1').item(0).src = "img/ekskavator/ekskavator1.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/ekskavator/ekskavator2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/ekskavator/mini-eksk.jpeg";

            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Экскаватор гусеничный";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Экскаватор колесный";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Мини экскаватор";
        }

        if (location.href.includes('kran-manipulator')) {
            this.offerTitle = 'Кран-манипулятор на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужен кран-манипулятор?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/kran-manipulator/kran-manipulyator1-1.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/kran-manipulator/kran-manipulyator2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/kran-manipulator/kran-manipulyator3.jpg')";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>12, 16, 18, 22 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность кузова</span> <span>3-20 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность стрелы</span> <span>2-25 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Длина кузова</span> <span>3-12 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина кузова</span> <span>2,35 - 2,5 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1000 - 1500 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>12, 16, 18, 22 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность кузова</span> <span>3-20 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность стрелы</span> <span>2-25 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Длина кузова</span> <span>3-12 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина кузова</span> <span>2,35 - 2,5 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1000 - 1500 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>12, 16, 18, 22 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность кузова</span> <span>3-20 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность стрелы</span> <span>2-25 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Длина кузова</span> <span>3-12 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина кузова</span> <span>2,35 - 2,5 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1000 - 1500 руб./ч.</span></li>";

            document.getElementsByClassName('image1').item(0).src = "img/kran-manipulator/kran-manipulyator1-1.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/kran-manipulator/kran-manipulyator2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/kran-manipulator/kran-manipulyator3.jpg";

            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Кран-манипулятор вездеход";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Кран-манипулятор";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Кран-манипулятор";
        }

        if (location.href.includes('avtokran')) {
            this.offerTitle = 'Автокран на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужен автокран?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/avtokran/avtokran3.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/avtokran/avtokran2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/avtokran/avtokran1.jpg')";

            document.getElementsByClassName('conditions__image_num_4').item(0).style.backgroundImage = "url('img/avtokran/avtocrane123.jpg')";
            document.getElementsByClassName('conditions__image_num_5').item(0).style.backgroundImage = "url('img/avtokran/avtokran6.jpg')";
            document.getElementsByClassName('conditions__image_num_6').item(0).style.backgroundImage = "url('img/avtokran/avtokran7.jpg')";

            document.getElementsByClassName('conditions__item').item(3).style.display = "flex";
            document.getElementsByClassName('conditions__item').item(4).style.display = "flex";
            document.getElementsByClassName('conditions__item').item(5).style.display = "flex";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>14 – 31 м. +6м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность крана</span> <span>14 - 25 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный(вездеход)</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1100 - 2200 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>22 – 38 м. +6м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность крана</span> <span>25 - 32 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный(вездеход)</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1100 - 2500 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>30 – 38 м. +16м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность крана</span> <span>32 - 50 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>2500 - 4800 руб./ч.</span></li>";

            document.getElementsByClassName('description4').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>40 – 60 м. +19м.</span></li>";
            document.getElementsByClassName('description4').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность крана</span> <span>70 - 100 т.</span></li>";
            document.getElementsByClassName('description4').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description4').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>5800 - 11800 руб./ч.</span></li>";

            document.getElementsByClassName('description5').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>60 – 72 м. +22м.</span></li>";
            document.getElementsByClassName('description5').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность крана</span> <span>120 - 250 т.</span></li>";
            document.getElementsByClassName('description5').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description5').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>12000 - 22500 руб./ч.</span></li>";

            document.getElementsByClassName('description6').item(0).innerHTML = "<li class=\"description__item\"><span>Вылет стрелы</span> <span>78 – 52 м. +91м.</span></li>";
            document.getElementsByClassName('description6').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность крана</span> <span>300 - 750 т.</span></li>";
            document.getElementsByClassName('description6').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description6').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span><a class=\"how__b_orange\" href=\"#offer\">Запросить</a></span></li>";


            document.getElementsByClassName('image1').item(0).src = "img/avtokran/avtokran3.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/avtokran/avtokran2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/avtokran/avtokran1.jpg";
            document.getElementsByClassName('image4').item(0).src = "img/avtokran/avtokran5.jpg";
            document.getElementsByClassName('image5').item(0).src = "img/avtokran/avtokran6.jpg";
            document.getElementsByClassName('image6').item(0).src = "img/avtokran/avtokran7.jpg";

            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Автокран вездеход";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Автокран вездеход";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Автокран";
            document.getElementsByClassName('conditions__title').item(3).innerHTML = "Автокран";
            document.getElementsByClassName('conditions__title').item(4).innerHTML = "Автокран";
            document.getElementsByClassName('conditions__title').item(5).innerHTML = "Автокран";
        }

        if (location.href.includes('avtovishka')) {
            this.offerTitle = 'Автовышка на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужна автовышка?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/avtovishka/avtovyshka-1.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/avtovishka/avtovyshka-2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/avtovishka/avtovishka3-1.jpeg')";

            document.getElementsByClassName('image1').item(0).src = "img/avtovishka/avtovyshka-1.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/avtovishka/avtovyshka-2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/avtovishka/avtovishka3-1.jpeg";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Боковой вылет стрелы</span> <span>12 - 22 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Высота подъема автовышки</span> <span>12 - 50 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность корзины</span> <span>100 - 800 кг.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Тип подъёмника автовышки</span> <span>комбинированная</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1100 - 4900 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Боковой вылет стрелы</span> <span>12 - 22 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Высота подъема автовышки</span> <span>12 - 50 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность корзины</span> <span>100 - 800 кг.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Тип подъёмника автовышки</span> <span>телескопическая</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1100 - 4900 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Боковой вылет стрелы</span> <span>12 - 22 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Высота подъема автовышки</span> <span>12 - 50 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность корзины</span> <span>100 - 800 кг.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Тип подъёмника автовышки</span> <span>комбинированная</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости:</span> <span>колесный</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1100 - 4900 руб./ч.</span></li>";

            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Автовышка вездеход";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Автовышка";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Автовышка";
        }

        if (location.href.includes('bash-kran')) {
            this.offerTitle = 'Башенный кран на вашем объекте в кротчайшие сроки!';
            this.mainOffer = 'Нужен башенный кран?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/bash-kran/bash-crane123.jpeg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/bash-kran/kran2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/bash-kran/kran1-1.jpg')";

            document.getElementsByClassName('image1').item(0).src = "img/bash-kran/bash-crane123.jpeg";
            document.getElementsByClassName('image2').item(0).src = "img/bash-kran/kran2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/bash-kran/kran1-1.jpg";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Высота крюка</span> <span>32 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъёмность</span> <span>3 - 5 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>При макс. вылете</span> <span>1,6 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Вылет стрелы</span> <span>3 - 40 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span><a class=\"how__b_orange\" href=\"#offer\">Запросить</a></span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Высота крюка</span> <span>до 70 м (свободностоящий).</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъёмность</span> <span>6 - 12 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>При макс. вылете</span> <span>2,5 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Вылет стрелы</span> <span>3 - 70 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span><a class=\"how__b_orange\" href=\"#offer\">Запросить</a></span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Высота крюка</span> <span>до 70 м (свободностоящий).</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъёмность</span> <span>6 - 12 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>При макс. вылете</span> <span>2,5 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Вылет стрелы</span> <span>3 - 70 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span><a class=\"how__b_orange\" href=\"#offer\">Запросить</a></span></li>";


            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Башенный кран";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Башенный кран";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Башенный кран";
        }

        if (location.href.includes('buldozer')) {
            this.offerTitle = 'Бульдозер на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужен бульдозер?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/buldozer/buldozer1-1.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/buldozer/buldozer2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/buldozer/buldozer3.jpg')";

            document.getElementsByClassName('image1').item(0).src = "img/buldozer/buldozer1-1.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/buldozer/buldozer2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/buldozer/buldozer3.jpg";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Масса бульдозера</span> <span>17 - 50 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Мощность двигателя</span> <span>140 - 700 л.с.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Тип бульдозера</span> <span>Гусенечный</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина отвала</span> <span>3 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1500 - 2400 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Масса бульдозера</span> <span>17 - 50 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Мощность двигателя</span> <span>140 - 700 л.с.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Тип бульдозера</span> <span>Гусенечный</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина отвала</span> <span>3 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1500 - 2400 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Масса бульдозера</span> <span>17 - 50 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Мощность двигателя</span> <span>140 - 700 л.с.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Тип бульдозера</span> <span>Гусенечный</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина отвала</span> <span>3 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1500 - 2400 руб./ч.</span></li>";

            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Бульдозер";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Бульдозер";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Бульдозер";
        }

        if (location.href.includes('katok')) {
            this.offerTitle = 'Каток на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужен каток?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/katok/katok1.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/katok/katok2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/katok/katok3.jpg')";

            document.getElementsByClassName('image1').item(0).src = "img/katok/katok1.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/katok/katok2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/katok/katok3.jpg";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Рабочий вес</span> <span>3 - 20 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина уплотняемой полосы</span> <span>1000 - 3000 мм.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1250 - 2000 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Рабочий вес</span> <span>3 - 20 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина уплотняемой полосы</span> <span>1000 - 3000 мм.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1250 - 2000 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Рабочий вес</span> <span>3 - 20 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина уплотняемой полосы</span> <span>1000 - 3000 мм.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1000 - 2000 руб./ч.</span></li>";

            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Каток асфальтный";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Каток асфальтный";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Каток грунтовый";
        }

        if (location.href.includes('pogruz4ik')) {
            this.offerTitle = 'Погрузчик на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужен погрузчик?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/pogruz4ik/pogruz4ik1.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/pogruz4ik/pogruz4ik2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/pogruz4ik/pogruz4ik3.jpg')";

            document.getElementsByClassName('image1').item(0).src = "img/pogruz4ik/pogruz4ik1.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/pogruz4ik/pogruz4ik2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/pogruz4ik/pogruz4ik3.jpg";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Высота подъема</span> <span>2 - 4 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность ковша</span> <span>2 - 4 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Эксплуатационная масса</span> <span>4 - 33 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Объём ковша</span> <span>0,25 - 5 м3</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости</span> <span>колесный</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1300 - 2100 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Высота подъема</span> <span>2 - 4 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность ковша</span> <span>2 - 4 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Эксплуатационная масса</span> <span>4 - 33 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Объём ковша</span> <span>0,25 - 5 м3</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости</span> <span>гусеничный/кол-й</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1000 - 1350 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Высота подъема</span> <span>2 - 4 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность ковша</span> <span>2 - 4 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Эксплуатационная масса</span> <span>4 - 33 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Объём ковша</span> <span>0,25 - 5 м3</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Тип проходимости</span> <span>колесный/гусеничный</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1300 - 2100 руб./ч.</span></li>";


            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Фронтальный погрузчик";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Мини-Погрузчик";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Фронтальный погрузчик";
        }

        if (location.href.includes('samosval')) {
            this.offerTitle = 'Самосвал на вашем объекте уже сегодня!';
            this.mainOffer = 'Нужен самосвал?';
            document.getElementsByClassName('conditions__image_num_1').item(0).style.backgroundImage = "url('img/samosval/samosval1.jpg')";
            document.getElementsByClassName('conditions__image_num_2').item(0).style.backgroundImage = "url('img/samosval/samosval2.jpg')";
            document.getElementsByClassName('conditions__image_num_3').item(0).style.backgroundImage = "url('img/samosval/samosval3.jpg')";

            document.getElementsByClassName('image1').item(0).src = "img/samosval/samosval1.jpg";
            document.getElementsByClassName('image2').item(0).src = "img/samosval/samosval2.jpg";
            document.getElementsByClassName('image3').item(0).src = "img/samosval/samosval3.jpg";

            document.getElementsByClassName('description1').item(0).innerHTML = "<li class=\"description__item\"><span>Высота кузова</span> <span>1,5 - 3 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность кузова</span> <span>10 - 40 т.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Длина кузова</span> <span>5 - 8 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Объём кузова</span> <span>5 - 40 м3</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина кузова</span> <span>2 - 3 м.</span></li>";
            document.getElementsByClassName('description1').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1300 - 1900 руб./ч.</span></li>";

            document.getElementsByClassName('description2').item(0).innerHTML = "<li class=\"description__item\"><span>Высота кузова</span> <span>1,5 - 3 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность кузова</span> <span>10 - 40 т.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Длина кузова</span> <span>5 - 8 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Объём кузова</span> <span>5 - 40 м3</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина кузова</span> <span>2 - 3 м.</span></li>";
            document.getElementsByClassName('description2').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1300 - 1900 руб./ч.</span></li>";

            document.getElementsByClassName('description3').item(0).innerHTML = "<li class=\"description__item\"><span>Высота кузова</span> <span>1,5 - 3 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Грузоподъемность кузова</span> <span>10 - 40 т.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Длина кузова</span> <span>5 - 8 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Объём кузова</span> <span>5 - 40 м3</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Ширина кузова</span> <span>2 - 3 м.</span></li>";
            document.getElementsByClassName('description3').item(0).innerHTML += "<li class=\"description__item\"><span>Цена</span> <span>1300 - 1900 руб./ч.</span></li>";

            document.getElementsByClassName('conditions__title').item(0).innerHTML = "Самосвал";
            document.getElementsByClassName('conditions__title').item(1).innerHTML = "Самосвал";
            document.getElementsByClassName('conditions__title').item(2).innerHTML = "Самосвал";
        }
    },
    methods: {
        slide: function (event) {

        }
    }
});
