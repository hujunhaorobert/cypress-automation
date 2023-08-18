class QantasHomePage {
    // Demo using cypress-testing-library
    // Top menu texts: map to Qantas all avaliale services
    static readonly flightsText = "//span[contains(text(), 'Flights')]";
    static readonly hotelsText = "//span[contains(text(), 'Hotels')]";
    static readonly holidaysText = "//span[contains(text(), 'Holidays')]";
    static readonly shoppingText = "//span[contains(text(), 'Shopping')]";
    static readonly wineText = "//span[contains(text(), 'Wine')]";
    static readonly moneyText = "//span[contains(text(), 'Money')]";
    static readonly insuranceText = "//span[contains(text(), 'Insurance')]";
    static readonly frequentFlyerText = "//span[contains(text(), 'Frequent Flyer')]";
    static readonly qantasLogo = ".logo-qantas";
    static readonly qantasLogoOriginalImageFile = '/content/dam/qantas/logos/qantas-masterbrand-logo-40px.svg';
    static readonly oneworldLogoOriginalLink = 'https://www.qantas.com/au/en/qantas-experience/network-and-partner-airlines/oneworld.html';
    static readonly oneworldLogo = ".logo-oneworld";
    static readonly travelGuidesMenu = "#primary-navigation__travel-guides";
    static readonly flightDealsMenu = "#primary-navigation__flight-deals";
    static readonly planMenu = "#primary-navigation__qantas-experience";
    static readonly bookMenu = "#primary-navigation__book-a-trip";
    static readonly flyMenu = "#primary-navigation__travel-info";
    static readonly frequentFlyerMenu = "#primary-navigation__frequent-flyer";
    static readonly qantasForBusinessMenu = "#primary-navigation__business";
    static readonly helpMenu = "#primary-navigation__support";
    static readonly shoppingCartIconMenu = "#primary-navigation__cart";
}

export default QantasHomePage;
