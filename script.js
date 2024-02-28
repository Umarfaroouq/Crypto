document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Select elements for Bitcoin, Ethereum, and Dogecoin prices
var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

// API request settings
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2
