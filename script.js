const fromAmountElement=document.querySelector(".amount");
const convertedAmountElement=document.querySelector(".convertedAmount");
const fromCurrencyElement=document.querySelector(".fromCurrency");
const toCurrencyElement=document.querySelector(".toCurrency");
const resultElement= document.querySelector(".result");
const convertorContainer=document.querySelector(".convertor-container");
// array of countires to select one countires
const countries=[
  {code:"UNITED STATES",name: "USD"},
  {code:"AFGHANISTAN",name: "AFN "},
  {code:"ALBANIA",name: "ALL"},
  {code:"ALGERIA",name: "DZD"},
  {code:"ANDORRA",name: "EUR"},
  {code:"ANGOLA",name:"AOA"},
  {code:"ANTIGUA AND BARBUDA",name: "XCD"},
  {code:"ARGENTINA",name: "ARS"},
  {code:"ARMENIA",name: "AMD"},
  {code:"AUSTRALIA",name: "AUD"},
  {code:"AUSTRIA",name: "EUR"},
  {code:"AZERBAIJAN",name: "AZN"},
  {code:"BAHAMAS",name: "BSD"},
  {code:"BAHRAIN",name: "BHD"},
  {code:"BANGLADESH",name: "BDT"},
  {code:"BARBADOS",name: "BBD"},
  {code:"BELARUS",name: "BYN"},
  {code:"BELGIU,name:",name: "EUR"},
  {code:"BELIZE",name: "BZD"},
  {code:"BENIN",name: "XOF"},
  {code:"BHUTAN",name: "BTN"},
  {code:"BOLIVIA",name: "BOB"},
  {code:"BOSNIA AND HERZEGOVINA",name: "BAM"},
  {code:"BOTSWANA",name: "BWP"},
  {code:"BRAZIL",name: "BRL"},
  {code:"BRUNEI",name: "BND"},
  {code:"BULGARIA",name: "BGN"},
  {code:"BURKINA FASO",name: "XOF"},
  {code:"BURUNDI",name: "BIF"},
  {code:"CABO VERDE",name: "CVE"},
  {code:"CAMBODIA",name: "KHR"},
  {code:"CAMEROON",name: "XAF"},
  {code:"CANADA",name: "CAD"},
  {code:"CENTRAL AFRICAN REPUBLIC",name: "XAF"},
  {code:"CHAD",name: "XAF"},
  {code:"CHILE",name: "CLP"},
  {code:"CHINA",name: "CNY"},
  {code:"COLOMBIA",name: "COP"},
  {code:"COMOROS",name: "KMF"},
  {code:"CONGO",name: "XAF"},
  {code:"COSTA RICA",name: "CRC"},
  {code:"CROATIA",name: "HRK"},
  {code:"CUBA",name: "CUP"},
  {code:"CYPRUS",name: "EUR"},
  {code:"CZECH REPUBLIC",name: "CZK"},
  {code:"DENMARK",name: "DKK"},
  {code:"DJIBOUTI",name: "DJF"},
  {code:"DOMINICA",name: "XCD"},
  {code:"DOMINICAN REPUBLIC",name: "DOP"},
  {code:"ECUADOR",name: "USD"},
  {code:"EGYPT",name: "EGP"},
  {code:"EL SALVADOR",name: "USD"},
  {code:"EQUATORIAL GUINEA",name: "XAF"},
  {code:"ERITREA",name: "ERN"},
  {code:"ESTONIA",name: "EUR"},
  {code:"ESWATINI",name: "SZL"},
  {code:"ETHIOPIA",name: "ETB"},
  {code:"FIJI",name: "FJD"},
  {code:"FINLAND",name: "EUR"},
  {code:"FRANCE",name: "EUR"},
  {code:"GABON",name: "XAF"},
  {code:"GAMBIA",name: "GMD"},
  {code:"GEORGIA",name: "GEL"},
  {code:"GERMANY",name: "EUR"},
  {code:"GHANA",name: "GHS"},
  {code:"GREECE",name: "EUR"},
  {code:"GRENADA",name: "XCD"},
  {code:"GUATEMALA",name: "GTQ"},
  {code:"GUINEA",name: "GNF"},
  {code:"GUINEA-BISSAU",name: "XOF"},
  {code:"GUYANA",name: "GYD"},
  {code:"HAITI",name: "HTG"},
  {code:"HONDURAS",name: "HNL"},
  {code:"HUNGARY",name: "HUF"},
  {code:"ICELAND",name: "ISK"},
  {code:"INDIA",name: "INR"},
  {code:"INDONESIA",name: "IDR"},
  {code:"IRAN",name: "IRR"},
  {code:"IRAQ",name: "IQD"},
  {code:"IRELAND",name: "EUR"},
  {code:"ISRAEL",name: "ILS"},
  {code:"ITALY",name: "EUR"},
  {code:"JAMAICA",name: "JMD"},
  {code:"JAPAN",name: "JPY"},
  {code:"JORDAN",name: "JOD"},
  {code:"KAZAKHSTAN",name: "KZT"},
  {code:"KENYA",name: "KES"},
  {code:"KIRIBATI",name: "AUD"},
  {code:"KOSOVO",name: "EUR"},
  {code:"KUWAIT",name: "KWD"},
  {code:"KYRGYZSTAN",name: "KGS"},
  {code:"LAOS",name: "LAK"},
  {code:"LATVIA",name: "EUR"},
  {code:"LEBANON",name: "LBP"},
  {code:"LESOTHO",name: "LSL"},
  {code:"LIBERIA",name: "LRD"},
  {code:"LIBYA",name: "LYD"},
  {code:"LIECHTENSTEIN",name: "CHF"},
  {code:"LITHUANIA",name: "EUR"},
  {code:"LUXEMBOURG",name: "EUR"},
  {code:"MADAGASCAR",name: "MGA"},
  {code:"MALAWI",name: "MWK"},
  {code:"MALAYSIA",name: "MYR"},
  {code:"MALDIVES",name: "MVR"},
  {code:"MALI",name: "XOF"},
  {code:"MALTA",name: "EUR"},
  {code:"MARSHALL ISLANDS",name: "USD"},
  {code:"MAURITANIA",name: "MRU"},
  {code:"MAURITIUS",name: "MUR"},
  {code:"MEXICO",name: "MXN"},
  {code:"MICRONESIA",name: "USD"},
  {code:"MOLDOVA",name: "MDL"},
  {code:"MONACO",name: "EUR"},
  {code:"MONGOLIA",name: "MNT"},
  {code:"MONTENEGRO",name: "EUR"},
  {code:"MOROCCO",name: "MAD"},
  {code:"MOZAMBIQUE",name: "MZN"},
  {code:"MYANMAR",name: "MMK"},
  {code:"NAMIBIA",name: "NAD"},
  {code:"NAURU",name: "AUD"},
  {code:"NEPAL",name: "NPR"},
  {code:"NETHERLANDS",name: "EUR"},
  {code:"NEW ZEALAND",name: "NZD"},
  {code:"NICARAGUA",name: "NIO"},
  {code:"NIGER",name: "XOF"},
  {code:"NIGERIA",name: "NGN"},
  {code:"NORTH KOREA",name: "KPW"},
  {code:"NORTH MACEDONIA",name: "MKD"},
  {code:"NORWAY",name: "NOK"},
  {code:"OMAN",name: "OMR"},
  {code:"PAKISTAN",name: "PKR"},
  {code:"PALAU",name: "USD"},
  {code:"PALESTINE",name: "ILS"},
  {code:"PANAMA",name: "PAB"},
  {code:"PAPUA NEW GUINEA",name: "PGK"},
  {code:"PARAGUAY",name: "PYG"},
  {code:"PERU",name: "PEN"},
  {code:"PHILIPPINES",name: "PHP"},
  {code:"POLAND",name: "PLN"},
  {code:"PORTUGAL",name: "EUR"},
  {code:"QATAR",name: "QAR"},
  {code:"ROMANIA",name: "RON"},
  {code:"RUSSIA",name: "RUB"},
  {code:"RWANDA",name: "RWF"},
  {code:"SAINT KITTS AND NEVIS",name: "XCD"},
  {code:"SAINT LUCIA",name: "XCD"},
  {code:"SAINT VINCENT AND THE GRENADINES",name: "XCD"},
  {code:"SAMOA",name: "WST"},
  {code:"SAN MARINO",name: "EUR"},
  {code:"SAO TOME AND PRINCIPE",name: "STN"},
  {code:"SAUDI ARABIA",name: "SAR"},
  {code:"SENEGAL",name: "XOF"},
  {code:"SERBIA",name: "RSD"},
  {code:"SEYCHELLES",name: "SCR"},
  {code:"SIERRA LEONE",name: "SLL"},
  {code:"SINGAPORE",name: "SGD"},
  {code:"SLOVAKIA",name: "EUR"},
  {code:"SLOVENIA",name: "EUR"},
  {code:"SOLOMON ISLANDS",name: "SBD"},
  {code:"SOMALIA",name: "SOS"},
  {code:"SOUTH AFRICA",name: "ZAR"},
  {code:"SOUTH KOREA",name: "KRW"},
  {code:"SOUTH SUDAN",name: "SSP"},
  {code:"SPAIN",name: "EUR"},
  {code:"SRI LANKA",name: "LKR"},
  {code:"SUDAN",name: "SDG"},
  {code:"SURINAME",name: "SRD"},
  {code:"SWEDEN",name: "SEK"},
  {code:"SWITZERLAND",name: "CHF"},
  {code:"SYRIA",name: "SYP"},
  {code:"TAIWAN",name: "TWD"},
  {code:"TAJIKISTAN",name: "TJS"},
  {code:"TANZANIA",name: "TZS"},
  {code:"THAILAND",name: "THB"},
  {code:"TIMOR-LESTE",name: "USD"},
  {code:"TOGO",name: "XOF"},
  {code:"TONGA",name: "TOP"},
  {code:"TRINIDAD AND TOBAGO",name: "TTD"},
  {code:"TUNISIA",name: "TND"},
  {code:"TURKEY",name: "TRY"},
  {code:"TURKMENISTAN",name: "TMT"},
  {code:"TUVALU",name: "AUD"},
  {code:"UGANDA",name: "UGX"},
  {code:"UKRAINE",name: "UAH"},
  {code:"UNITED ARAB EMIRATES",name: "AED"},
  {code:"UNITED KINGDOM",name: "GBP"},
  {code:"URUGUAY",name: "UYU"},
  {code:"UZBEKISTAN",name: "UZS"},
  {code:"VANUATU",name: "VUV"},
  {code:"VATICAN CITY",name: "EUR"},
  {code:"VENEZUELA",name: "VES"},
  {code:"VIETNAM",name: "VND"},
  {code:"YEMEN",name: "YER"},
  {code:"ZAMBIA",name: "ZMW"},
  {code:"ZIMBABWE",name: "ZWL"},
   ];


// showing countries in the dropdown menu of select

countries.forEach(country=>{
    const option1=document.createElement('option');
    option1.value=country.name;
    option1.textContent=`${country.code} (${country.name})`
    fromCurrencyElement.appendChild(option1);

    const option2=document.createElement('option');
    option2.value=country.name;
  option2.textContent=`${country.code} (${country.name})`
   toCurrencyElement.appendChild(option2);
});
fromCurrencyElement.value="USD";
toCurrencyElement.value="INR";


const getExchangeRate=async ()=>{
    const amount =parseFloat(fromAmountElement.value);  //converting the entered value into the floating value if any
    const fromCurrency=fromCurrencyElement.value;
     const toCurrency=toCurrencyElement.value;
     resultElement.textContent='Fetching Exchange Rates.....';

try{
   //fetch datafrom API
   const response= await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`); //it will return the url fetch data in the form of promise
   const data =await response.json();
   const conversionRate=data.rates[toCurrency] //getting the specific data from the API
   const convertedAmount=(amount*conversionRate).toFixed(2);
   
   if(typeof conversionRate==="undefined"){
    resultElement.textContent="Exchange Rate Data is not available for selected country";
   }
   else{
    convertedAmountElement.value=convertedAmount;
    resultElement.innerHTML=`1 ${fromCurrency} = ${conversionRate} ${toCurrency}`;
   }

}

catch(error){
    convertorContainer.innerHTML=`<h2>Error while fetching the exchange rates</h2>`;
}
}
 

//fetching the data when user change any property
fromAmountElement.addEventListener("input",getExchangeRate);
fromCurrencyElement.addEventListener("change",getExchangeRate);
toCurrencyElement.addEventListener("change",getExchangeRate);
window.addEventListener("load",getExchangeRate);
