var btc=document.getElementById("bitcoin");
var eth=document.getElementById("ethereum");
var doge=document.getElementById("dogecoin");
var ltc=document.getElementById("litecoin");
var xrp=document.getElementById("ripple");
var ada=document.getElementById("cardano");
// Get the dropdown toggle and the dropdown content
var whitePapersToggle = document.getElementById("whitePapersToggle");
var whitePapersDropdown = document.getElementById("whitePapersDropdown");

// Toggle the dropdown when the button is clicked
whitePapersToggle.addEventListener("click", function() {
    whitePapersDropdown.classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});

// Add click event listeners for each white paper button
document.getElementById("btcWhitePaper").addEventListener("click", function() {
    window.location.href = "https://whitepaper.io/document/0/bitcoin-whitepaper";
});

document.getElementById("ethWhitePaper").addEventListener("click", function() {
    window.location.href = "https://whitepaper.io/document/718/ethereum-whitepaper";
});

document.getElementById("dogeWhitePaper").addEventListener("click", function() {
    window.location.href = "https://whitepaper.io/document/672/dogecoin-whitepaper";
});

document.getElementById("xrpWhitePaper").addEventListener("click", function() {
    window.location.href = "https://whitepaper.io/document/1/ripple-whitepaper";
});

document.getElementById("adaWhitePaper").addEventListener("click", function() {
    window.location.href = "https://whitepaper.io/document/581/cardano-whitepaper";
});

document.getElementById("ltcWhitePaper").addEventListener("click", function() {
    window.location.href = "https://whitepaper.io/document/683/litecoin-whitepaper";
});




var settings={
    "async":true,
    "scrossDomain":true,
    "url":"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin%2Cripple%2Ccardano&vs_currencies=usd",
    "method":"GET",
    "headers":{}
}
//verileri sayfayi guncellemeye gerek kalmadan internet ile ayni anda gosterilmesini saglayan framework.
$.ajax(settings).done(function(response){
    btc.innerHTML=response.bitcoin.usd;
    eth.innerHTML=response.ethereum.usd;
    doge.innerHTML=response.dogecoin.usd;
    ltc.innerHTML=response.litecoin.usd;
    xrp.innerHTML=response.ripple.usd;
    ada.innerHTML=response.cardano.usd;
});

// &111 NOLU HTML KODUNUN DEVAMI&  BU KOD DA FUCNTION redirectToBinance(coin) YERINE CALISTIRILIRSA YENI SEKMEDE CALISIR!!

/*    
document.getElementById("btcCoin").addEventListener("click", function() {
    openBinanceLink("BTC");
});

function openBinanceLink(coin) {
    var url = "https://www.binance.com/en/trade/" + coin + "_USDT?type=spot";
    window.open(url, "_blank");
}
   */





// when they click on the coin pictures will you go coin's link on the Binance
function redirectToBinance(coin) {
    var url = "https://www.binance.com/en/trade/" + coin + "_USDT?type=spot";
    window.location.href = url;
}

//EXPLORE MORE BUTONU LINK DIRECT
//added id for explore more button after that i add this code and i will reach website on the newTab when i click explore more button.

document.getElementById("btnExploreMore").addEventListener("click",function(){
    openNewsCrypto();
})

function openNewsCrypto(){
    var url="https://cryptonews.com/"
    window.open(url, "_blank");
}

//this time for Market btn
document.getElementById("marketToBinance").addEventListener("click",function(){
    openBinance();
})

function openBinance(){
    var url="https://www.binance.com/en"
    window.open(url, "_blank");
}


//en-tr multi-language

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
        "menuWhitePapers": "Tanitim Belgesi",
        "menuAboutUs": "Hakkimizda",
        "buy": "AL & ",
        "sellCrypto": "SAT Kripto",
        "cryptoExchange": "Dünyanin en büyük kripto para borsasi, <br> web ve mobil telefonlarda mevcut",
        "exploreMore": "DAHA FAZLA KEŞFET",
        "bitcoin": "Bitcoin",
        
    }
};

// Function to switch language
function switchLanguage(lang) {
    currentLang = lang;
    loadLanguageContent();
}

// Function to update content based on language
function loadLanguageContent() {
    updateContent(translations[currentLang]);
}

// Function to update content dynamically
function updateContent(translations) {
    $('[data-i18n]').each(function () {
        var key = $(this).data('i18n');
        var element = $(this);

        // Use html() to include HTML content
        if (key === 'sellCrypto') {
            var cryptoSpan = $('<span>').html(translations[key]);
            cryptoSpan.css('color', /* Your desired color for Crypto */);
            element.html('').append(cryptoSpan);
        } else {
            element.html(translations[key]);
        }
    });
}

// Event listeners for language switch buttons
$('#enLang').click(function () {
    switchLanguage('en');
});

$('#trLang').click(function () {
    switchLanguage('tr');
});

// Initial content load
loadLanguageContent();



//after this line about 'about-us html file language property


