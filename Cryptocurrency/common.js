// Dil çevirilerini içeren nesne
var translations = {
    "en": {
        "menuMarket": "Market",
        "menuFeatures": "Features",
        "menuWhitePapers": "White Papers",
        "menuAboutUs": "About Us",
        "buy": "BUY & ",
        "sellCrypto": "SELL Crypto",
        "cryptoExchange": "World's biggest Cryptocurrency exchange available <br> on the web as well as a mobile phone",
        "exploreMore": "EXPLORE MORE",
        "bitcoin": "Bitcoin",
    },
    "tr": {
        "menuMarket": "Market",
        "menuFeatures": "Özellikler",
        "menuWhitePapers": "Tanıtım Belgesi",
        "menuAboutUs": "Hakkımızda",
        "buy": "AL & ",
        "sellCrypto": "SAT Kripto",
        "cryptoExchange": "Dünyanın en büyük kripto para borsası, <br> web ve mobil telefonlarda mevcut",
        "exploreMore": "DAHA FAZLA KEŞFET",
        "bitcoin": "Bitcoin",
    }
};

var currentLang = localStorage.getItem('currentLang') || 'en'; // Tarayıcıdan dil bilgisini al, yoksa varsayılan olarak 'en' kullan

// Fonksiyon: Dil değiştirmek için kullanılır
function switchLanguage(lang) {
    currentLang = lang;

    // Dil bilgisini tarayıcıda sakla
    localStorage.setItem('currentLang', currentLang);

    // Dil değişikliğine bağlı olarak sayfa içeriğini güncelle
    loadLanguageContent();
}

// Fonksiyon: Sayfa içeriğini mevcut dile göre günceller
function loadLanguageContent() {
    updateContent(translations[currentLang]);
}

// Fonksiyon: Element içeriğini günceller
function updateContent(translations) {
    $('[data-i18n]').each(function () {
        var key = $(this).data('i18n');
        var element = $(this);

        // HTML içeriği dahil etmek için html() kullanılır
        if (key === 'sellCrypto') {
            var cryptoSpan = $('<span>').html(translations[key]);
            cryptoSpan.css('color', '#ff960b');
            element.html('').append(cryptoSpan);
        } else {
            element.html(translations[key]);
        }
    });
}

// Dil değiştirme butonlarına tıklama olayları
$('#enLang').click(function () {
    switchLanguage('en');
});

$('#trLang').click(function () {
    switchLanguage('tr');
});

// Sayfa yüklendiğinde dil bilgisini kontrol et ve sayfa içeriğini güncelle
$(document).ready(function () {
    loadLanguageContent();
});


