var paintings = [
    {
        title: 'DE AARDAPPELETERS',
        imgsrc: 'images/aardappeleters.jpg',
        text: "Van Gogh zag De aardappeleters als een soort meesterproef. Hij koos een moeilijke compositie om te bewijzen dat hij op weg was een goede figuurschilder te worden. Hij wilde met het schilderij laten zien dat de boeren die model stonden ‘met die handen die zij in den schotel steken zelf de aarde hebben omgespit en (…) dat zij hun eten zoo eerlijk verdiend hebben’, schreef hij op 30 april 1885 aan zijn broer Theo. <br>Van Gogh benadrukte die rauwe werkelijkheid door haar te overdrijven. Het was donker en krap in de hut, dus moest het op zijn schilderij heel donker en benauwend zijn. Hij gebruikte alleen groenen en bruinen, de kleuren van de aarde die het gezin bewerkte. Voor het effect voegde hij enkele lichtpartijen toe. De modellen hadden grove gezichten en ruwe handen, dus gaf hij ze in het schilderij bonkige tronies en knokige kolenschoppen. <br>Van Gogh was zeer tevreden met het resultaat: ‘het zou wel kunnen blijken het een ECHT BOERENSCHILDERIJ is. ik weet dat het dit is.’ De aardappeleters is nu een van zijn beroemdste werken. Maar destijds werd het kritisch ontvangen omdat het zo donker van kleur is en de figuren vol fouten zitten. Van Gogh meende dat deze onvolkomenheden juist bijdroegen aan het primitieve karakter van het onderwerp."

    },
    {
        title: 'ZONNEBLOEMEN',
        imgsrc: 'images/zonnebloemen.jpg',
        text: "Van Gogh keek ongeduldig uit naar de komst van zijn kunstenaarsvriend Gauguin in het ‘gele huis’. Hij besloot voor de kamer van zijn vriend een serie decoratieve stillevens van zonnebloemen te maken. Met de ‘eenvoud’ die hij hierin had bereikt hoopte hij indruk te maken op Gauguin.<br>Uiteindelijk wist Van Gogh voor het einde van het zonnebloemenseizoen vier stillevens te voltooien, waarvan twee op groot formaat. De boeketten maakte hij steeds groter en uiteindelijk veranderde hij de hoofdkleuren blauw en geel in ‘de drie chromaatgeelen, geel oker en veroneesgroen en anders niets’, schreef hij op 22 januari 1889. Zo liet hij zien dat het mogelijk was een voorstelling te maken met veel varianten van één kleur zonder aan zeggingskracht en vorm in te boeten.<br>Gauguin vond het laatste schilderij zeer geslaagd, ‘een perfect voorbeeld van een stijl die helemaal Vincent is’. Van Gogh had tijdens het verblijf van zijn vriend al een nieuwe versie geschilderd en later vroeg Gauguin er een cadeau. Daar voelde Van Gogh niet veel voor. Wel maakte hij nog twee vrije herhalingen, waarvan er één in het Van Gogh Museum hangt."
    },
    {
        title: 'AMANDELBLOESEM',
        imgsrc: 'images/amandelbloesem.jpg',
        text: "Van Gogh schilderde dit sprankelende stilleven van tere amandelbloesem tegen een helderblauwe lucht voor zijn pasgeboren neefje Vincent Willem. In de brief waarin hij het goede nieuws meedeelde, schreef zijn broer Theo: ‘Zoals we je hebben gezegd, vernoemen we hem naar jou en ik spreek de wens uit dat hij even vasthoudend en even moedig wordt als jij.’ <br>Als symbool voor het jonge leven koos Van Gogh de takken van de amandelboom, een vroegbloeiende boomsoort, die al in februari de lente aankondigt. Voor het onderwerp, de scherpe omlijningen en de plaatsing van de boom in het beeldvlak liet hij zich inspireren door de Japanse prentkunst. De witte bloesemknoppen waren oorspronkelijk meer roze. Ze zijn onder invloed van het licht verbleekt en hebben aan kleurkracht ingeboet. <br>Van Gogh had het schilderij bedoeld voor boven het bed van Theo en zijn vrouw Jo. Maar de kersverse ouders hingen het werk in de woonkamer boven de piano. Het is niet verwonderlijk dat het voor de familie Van Gogh altijd het meest dierbare werk is gebleven. Vincent Willem zou later het Van Gogh Museum oprichten."

    },
    {
        title: 'TUIN MET GELIEFDEN: SQUARE SAINT-PIERRE',
        imgsrc: 'images/tuinMetGeliefden.jpg',
        text: "Dit zonovergoten parkgezicht is een van de grootste doeken die Van Gogh maakte. Hij zag tuinen en parken als poëtische plekken. De drie verliefde paartjes versterken het romantische karakter van de voorstelling. <br>Voor de uitvoering liet hij zich inspireren door de pointillisten, die hun schilderijen opbouwden uit verfstipjes. Van Gogh gebruikte geen stippen, maar kleine verfstreken van uiteenlopende lengte, die hij in verschillende richtingen aanbracht. Met deze schildertrant creëerde hij een effect van vrolijkheid en stralende lucht, dat goed past bij het gevoel van intimiteit en samenzijn dat hij wilde uitdrukken. <br>In de tijd dat Van Gogh dit schilderij maakte, had hij een relatie met Agostina Segatori, een caféhoudster in Montmartre. De relatie duurde niet lang. Van Gogh had een ongelukkig liefdesleven en berustte daar uiteindelijk in; hij was toegewijd aan zijn kunst."
    }
];
var hamburger = document.getElementById('hamburger');
var title = document.getElementById('title');
var scanner = document.getElementById('reader-container');
var img = document.getElementById('img');
var text = document.getElementById('text');
var refresh = document.getElementById('refresh');


var home_button = document.getElementById('home_button');
var tour_button = document.getElementById('tour_button');
var images_tour = document.getElementById('images_tour');
var contact_button = document.getElementById('contact_button');
var intro = document.getElementById('intro-text');

var home = document.getElementById('home');
var tour = document.getElementById('tour');
var images = document.getElementById('images');
var contact = document.getElementById('contact');


$('#reader').html5_qrcode(function (data) {
        // do something when code is read
        var currentScan = paintings[data];
        title.innerHTML = currentScan.title;
        text.innerHTML = currentScan.text;
        img.innerHTML = '<img src='+ currentScan.imgsrc +' id="image">';
        scanner.classList.add("disabled");
        refresh.classList.remove("disabled");



    },
    function (error) {
        //show read errors
    }, function (videoError) {
        //the video stream could be opened
    }
);


home_button.addEventListener("click", function(){
  home.classList.remove("disabled");
  tour.classList.add("disabled");
  contact.classList.add("disabled");
  intro.classList.remove('disabled');
  images.classList.add("disabled");

});

tour_button.addEventListener("click", function(){
  tour.classList.remove("disabled");
  home.classList.add("disabled");
  contact.classList.add("disabled");
  intro.classList.add('disabled');
  images.classList.add("disabled");
});

images_button.addEventListener("click", function(){
  images.classList.remove("disabled");
  home.classList.add("disabled");
  tour.classList.add("disabled");
  contact.classList.add("disabled");
})

contact_button.addEventListener("click", function(){
  contact.classList.remove("disabled");
  home.classList.add("disabled");
  tour.classList.add("disabled");
  intro.classList.add('disabled');
  images.classList.add("disabled");
})



refresh.addEventListener("click", function(){
  title.innerHTML = "";
  text.innerHTML = "";
  img.innerHTML = "";
  refresh.classList.add("disabled");
  scanner.classList.remove("disabled");
});
