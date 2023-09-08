ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12,
        controls: []
    });


    // Создание геообъекта с типом точка (метка).
    var myGeoObject = new ymaps.GeoObject({
        geometry: {
            type: "Point", // тип геометрии - точка
            coordinates: [55.8, 37.8] // координаты точки
        }
    });

    var myPlacemark = new ymaps.Placemark([55.76953456898229, 37.63998549999998], {}, {
        iconLayout: 'default#image',
        iconImageSize: [12, 12],
        iconImageHref: './images/ellipse2.svg',


    })

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
}
