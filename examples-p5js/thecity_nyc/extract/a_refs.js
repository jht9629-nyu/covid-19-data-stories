let a_refs = [
  {
    i: 0,
    d: 'CHARLES CHRISTOPHER “CHARLIE” CORRELL, 10, Staten Island',
    e: 'January 26, 2021',
  },
  {
    i: 1,
    d: 'SHAWN SAJI ABRAHAM, 20, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 2,
    d: 'SHAIMEEK RAIJEEN FRAZIER, 21, The Bronx',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Shaimeek_Frazier.jpg',
  },
  {
    i: 3,
    d: 'BRAD MAEHR, 21, Queens',
  },
  {
    i: 4,
    d: 'DAVID RIVERA JR., 23, The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Rivera.jpeg',
  },
  {
    i: 5,
    d: 'SEAN HOOK, 23, Staten Island',
    e: 'April 20, 2020',
  },
  {
    i: 6,
    d: 'DARREL MATTOCKS, 23, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 7,
    d: 'WILLIAM “KIING SHOOTER” DANIELS, 24, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 8,
    d: 'TANASIA SHAKIA “NAY NAY” ALAMO, 25',
    e: 'March 31, 2020',
  },
  {
    i: 9,
    d: 'HAILEY MARIE HERRERA, 25, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 10,
    d: 'LUIS “BOYIE” RIVERA, 25, The Bronx',
    e: 'March 30, 2020',
  },
  {
    i: 11,
    d: 'YITZCHAK MATATOV, 26',
    e: 'April 2, 2020',
  },
  {
    i: 12,
    d: 'PHILINDZ DESIR, 27, Staten Island',
  },
  {
    i: 13,
    d: 'MARSIA LOJA, 27, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 14,
    d: 'BRENDA MENDOZA, 28, Queens',
  },
  {
    i: 15,
    d: 'DEREK TIMOTHY PERALTA PERALTA, 28, Staten Island',
    e: 'January 22, 2021',
  },
  {
    i: 16,
    d: 'MICHELLE ALEXANDER, 29, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Alexander.jpg',
  },
  {
    i: 17,
    d: 'JAYED ALAM, 29, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 18,
    d: 'CALVIN BELL, 29, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 19,
    d: 'CHRISTOPHER MONDAL, 30, The Bronx',
    e: 'March 26, 2020',
  },
  {
    i: 20,
    d: 'RANA ZOE MUNGIN, 30, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 21,
    d: 'AVINAASH TAKDARI, 31, The Bronx',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Avinaash_Takdari.jpg',
  },
  {
    i: 22,
    d: 'JAY JANKELEWICZ, 31, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 23,
    d: 'RAHMAN MIZANUR, 31, The Bronx',
    e: 'April 28, 2020',
  },
  {
    i: 24,
    d: 'MIGUEL ALMARANTE JR., 32, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Almarante.jpg',
  },
  {
    i: 25,
    d: 'CRAIG AUGUSTE, 32, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 26,
    d: 'TERRENCE DARKIM RILEY, 32, Brooklyn',
    e: 'May 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Terrence_Darkim_Riley.jpg',
  },
  {
    i: 27,
    d: 'FRANTZ VITAL, 32, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frantz_Vital.jpg',
  },
  {
    i: 28,
    d: 'GILBERT CROOM, 32, Brooklyn',
    e: 'June 9, 2021',
  },
  {
    i: 29,
    d: 'KEITH MCDONALD, 32',
  },
  {
    i: 30,
    d: 'YISRAEL SPITZER, 32, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 31,
    d: 'LYNETTE BERMUDEZ, 33, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lynette_Bermudez.jpg',
  },
  {
    i: 32,
    d: 'TRAVIS WILLIAMS, 33, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Travis_Williams.jpg',
  },
  {
    i: 33,
    d: 'LUKE JAMES WORKOFF, 33, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luke_Workoff.png',
  },
  {
    i: 34,
    d: 'KARISMA DARGAN, 33, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 35,
    d: 'DIONY DIAZ, 33, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 36,
    d: 'SHLOMO “SHLOIMY” JACOBSEN, 33, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 37,
    d: 'VICTOR MORALES, 33, The Bronx',
    e: 'April 24, 2020',
  },
  {
    i: 38,
    d: 'KIMARLEE “KIM” NGUYEN, 33, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 39,
    d: 'KYRA MICHELLE SWARTZ, 33, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 40,
    d: 'RYAN SHEA, 34',
    e: 'February 19, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ryan_Shea.jpeg',
  },
  {
    i: 41,
    d: 'SHA-KING “SYCHO” ARRINDELL, 34, Brooklyn',
  },
  {
    i: 42,
    d: 'DONNY FOSTNER, 34',
    e: 'April 2, 2020',
  },
  {
    i: 43,
    d: 'GABRIELLE CATHLEEN GAYLE, 34',
    e: 'April 25, 2020',
  },
  {
    i: 44,
    d: 'GUSTAVO ADOLFO SALAS HERNANDEZ SR., 34, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 45,
    d: 'MARK ANTHONY MEDINA, 34, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 46,
    d: 'WILLIAM MELNISZYN, 34, Queens',
    e: 'February 7, 2021',
  },
  {
    i: 47,
    d: 'PREA NANKIESHORE, 34, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 48,
    d: "HUNTER O'KELLY-RODRIGUEZ, 34, Brooklyn",
    e: 'March 29, 2020',
  },
  {
    i: 49,
    d: 'MELLISA TUCKER, 34, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 50,
    d: 'JUAN “MACHO” RODRIGUEZ, 35, Brooklyn',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Rodriguez.jpg',
  },
  {
    i: 51,
    d: 'OSCAR ALVAREZ, 35',
    e: 'April 1, 2020',
  },
  {
    i: 52,
    d: 'LARICTER BROWN, 35, The Bronx',
  },
  {
    i: 53,
    d: 'MAURICE LACEY, 35, Queens',
  },
  {
    i: 54,
    d: 'FREDERICK “FRED THE GODSON” THOMAS, 35, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 55,
    d: 'JONATHON DAVIS, 36, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jonathon_Davis.png',
  },
  {
    i: 56,
    d: 'DANIELLE CHRISTINE ARRE, 36, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 57,
    d: 'SAADYA EHRENPREIS, 36, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 58,
    d: 'STEVE FALCO, 36',
    e: 'April 26, 2020',
  },
  {
    i: 59,
    d: 'KALEMA D. MCKETHAN, 36, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 60,
    d: 'DEZ-ANN ROMAIN, 36, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 61,
    d: 'ANNUNZIATA SAHID, 36, Manhattan',
  },
  {
    i: 62,
    d: 'JOEL GOMEZ DOMINGUEZ, 37, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Gomez.jpg',
  },
  {
    i: 63,
    d: 'LENIN “LENNY” PORTILLO, 37, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lenin_Portillo.jpg',
  },
  {
    i: 64,
    d: 'REYNOLD ANDERSON-HEWITT, 37, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 65,
    d: 'CHRISTOPHER DEAN, 37, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 66,
    d: 'RICKEY DOWTIN JR., 37, Staten Island',
  },
  {
    i: 67,
    d: 'JOEL GOMEZ, 37, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 68,
    d: 'LAWRENCE A. ROSS, 37, The Bronx',
    e: 'January 26, 2021',
  },
  {
    i: 69,
    d: 'ADRIAN HERNANDEZ LOPEZ, 38, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 70,
    d: 'TRISHA MARIAM, 38, Queens',
  },
  {
    i: 71,
    d: 'ELVESTER MCKOY, 38, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 72,
    d: 'ANANDA MOOLIYA, 38, Queens',
  },
  {
    i: 73,
    d: 'ERIC MURRAY, 38, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 74,
    d: 'IVAN PETER, 38, Queens',
  },
  {
    i: 75,
    d: 'ERNESTO “GETO” ROLON III, 38, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 76,
    d: 'JARROD SOCKWELL, 38, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 77,
    d: 'MARCELINO VAQUERO JR., 38, Brooklyn',
  },
  {
    i: 78,
    d: 'RONIECE WATSON, 38, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 79,
    d: 'DUSTIN J. PETRIE, 39, Manhattan',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dustin_Petrie.jpg',
  },
  {
    i: 80,
    d: 'ROBERT SIMON, 39, Manhattan',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Simon.jpg',
  },
  {
    i: 81,
    d: 'ROVIN ANTHONY SMITH, 39',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rovin_Smith.jpeg',
  },
  {
    i: 82,
    d: 'AJANA WILKINSON-IWAYEMI, 39, Manhattan',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ajana_Wilkinson_Iwayemi.jpeg',
  },
  {
    i: 83,
    d: 'MONROE M.K. “MONTY” BATES II, 39',
    e: 'April 13, 2020',
  },
  {
    i: 84,
    d: 'YIRA DIAZ, 39, The Bronx',
  },
  {
    i: 85,
    d: 'ADIEL MONTGOMERY, 39, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 86,
    d: 'YOEL SANDEL, 39, Brooklyn',
  },
  {
    i: 87,
    d: 'GONZALO “GEE” VIDANOS JR., 39, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 88,
    d: 'CLINTON WASHINGTON, 40, The Bronx',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clinton_Washington.jpg',
  },
  {
    i: 89,
    d: 'YIMEL ALVARADO, 40, Queens',
  },
  {
    i: 90,
    d: 'MICHAEL MCINTOSH, 40',
  },
  {
    i: 91,
    d: 'A. EDWARD WILLIAMS III, 40',
    e: 'May 7, 2020',
  },
  {
    i: 92,
    d: 'ROBERT CARDONA, 41, Manhattan',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Cardona.PNG',
  },
  {
    i: 93,
    d: 'JILL BRANDY LAMAS, 41, The Bronx',
    e: 'November 18, 2020',
  },
  {
    i: 94,
    d: 'SEAN ARTIS, 41',
    e: 'April 9, 2020',
  },
  {
    i: 95,
    d: 'NICK CORDERO, 41, Manhattan',
    e: 'July 5, 2020',
  },
  {
    i: 96,
    d: 'JUAN DIAZ, 41',
    e: 'April 3, 2020',
  },
  {
    i: 97,
    d: 'STEVANUS “STEFAN” FARIZ, 41, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 98,
    d: 'FERDI AMAURY GERMAN, 41, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 99,
    d: 'RIVKA GOTTLIEB, 41, Brooklyn',
  },
  {
    i: 100,
    d: 'NEVIE LACAYO, 41',
    e: 'May 25, 2020',
  },
  {
    i: 101,
    d: 'JILL BRANDY LAMAS, 41, Manhattan',
    e: 'November 18, 2020',
  },
  {
    i: 102,
    d: 'JULIET MANRAGH, 41, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 103,
    d: 'MARZE MATTHEW MURRAY, 41, Brooklyn',
    e: 'October 21, 2021',
  },
  {
    i: 104,
    d: 'QUEBIY PIGOTT, 41, The Bronx',
  },
  {
    i: 105,
    d: 'JENNIFER ROMAIN-HINDS, 41, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 106,
    d: 'ELECIER WILLIAMS, 41, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 107,
    d: 'GIANMARCO BERTOLOTTI, 42, Queens',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gianmarco_Bertolotti.png',
  },
  {
    i: 108,
    d: 'KANE “KENNY” NOEL, 42, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 109,
    d: 'BINYOMIN ABRAMOWITZ, 42, Brooklyn',
  },
  {
    i: 110,
    d: 'ARTURO AMARO, 42, Queens',
  },
  {
    i: 111,
    d: 'SCOTT CHRISTIAN-RAGINS, 42, Manhattan',
    e: 'May 27, 2020',
  },
  {
    i: 112,
    d: 'SUSAN CHUANG, 42, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 113,
    d: 'TERRENCE EARLINGTON, 42, Brooklyn',
  },
  {
    i: 114,
    d: 'FERNANDO GARZON, 42, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 115,
    d: 'RABBI MORDECHAI ZEV “ZEVI” HALBERSTAM, 42, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 116,
    d: 'JOSEPH “JOE; J-LEW” LEWINGER, 42, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 117,
    d: 'MARLON MARAGH, 42, Brooklyn',
  },
  {
    i: 118,
    d: 'KASEEM MCCALEB, 42, Manhattan',
    e: 'May 28, 2021',
  },
  {
    i: 119,
    d: 'SALVADOR MORAN, 42, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 120,
    d: 'AJIT NARAIN, 42, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 121,
    d: 'SHANTAY NEAL-BAKER, 42',
    e: 'August 14, 2021',
  },
  {
    i: 122,
    d: 'ANGEL M. SANTIAGO JR., 42, The Bronx',
    e: 'March 28, 2021',
  },
  {
    i: 123,
    d: 'MIGUEL A. SOSA, 42',
    e: 'May 3, 2020',
  },
  {
    i: 124,
    d: 'RAYMOND ABEAR, 43, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 125,
    d: 'NECOLE L. DURANT, 43, Brooklyn',
  },
  {
    i: 126,
    d: 'LENIN RICARDO “LENNY” FIERRO, 43, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 127,
    d: 'KALIN IZEVBIZUA, 43, Queens',
  },
  {
    i: 128,
    d: 'FERNANDO MORALES GONZÁLEZ, 43, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 129,
    d: 'CARLOS LEONARDO PINTADO, 43, Queens',
  },
  {
    i: 130,
    d: 'CARIDAD SANTIAGO, 43, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 131,
    d: 'WALTER SIMPSON, 43, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 132,
    d: 'CORCEL S. SMALLHORNE, 43, Queens',
    e: 'May 21, 2021',
  },
  {
    i: 133,
    d: 'DOREEN TAY, 43, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 134,
    d: 'ROLANDO “SONNY” ARAVENA, 44, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 135,
    d: 'IBRAHIMA BA, 44, Manhattan',
  },
  {
    i: 136,
    d: 'IRENE “RENE” BURGONIO, 44, Queens',
    e: 'May 9, 2020',
  },
  {
    i: 137,
    d: 'MICHELLE BURRELL, 44, The Bronx',
  },
  {
    i: 138,
    d: 'ALI DENNIS GUILLERMO, 44',
    e: 'April 7, 2020',
  },
  {
    i: 139,
    d: 'RENE GUTIERREZ, 44',
    e: 'April 12, 2020',
  },
  {
    i: 140,
    d: 'MIRZA HUDA, 44, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 141,
    d: 'ARNALDO SERRANO, 44, The Bronx',
    e: 'March 24, 2020',
  },
  {
    i: 142,
    d: 'DANNY CAMACHO, 45, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Danny_Camacho.jpg',
  },
  {
    i: 143,
    d: 'OSCAR TAPIA SANCHEZ, 45, Queens',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Oscar_Tapia_Sanchez.jpg',
  },
  {
    i: 144,
    d: 'RASHIDA AKTER, 45, Queens',
  },
  {
    i: 145,
    d: 'ANGEL CAMPOS, 45, The Bronx',
  },
  {
    i: 146,
    d: 'LILLIAN CLOWNEY, 45',
  },
  {
    i: 147,
    d: 'EDDIE GUERRERO, 45, Brooklyn',
    e: 'January 9, 2021',
  },
  {
    i: 148,
    d: 'CHRISTOPHER ALAN JOE, 45, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 149,
    d: 'ARNELA JUANICO, 45, Queens',
    e: 'June 2, 2020',
  },
  {
    i: 150,
    d: 'ROMARICO “RAMON” MARTINEZ, 45',
    e: 'May 9, 2020',
  },
  {
    i: 151,
    d: 'GABRIEL MENDEZ, 45, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 152,
    d: 'MICHAEL R. MUNDY, 45, Brooklyn',
    e: 'April 28, 2021',
  },
  {
    i: 153,
    d: 'ALYSSA PANTILIERIS, 45, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 154,
    d: 'KRISTOFER M. “KRIS” RUSSO, 45, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 155,
    d: 'ROBERTO TEJADA, 45, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 156,
    d: 'DOMINGO VEGA, 45, Queens',
    e: 'May 16, 2020',
  },
  {
    i: 157,
    d: 'JOSHUA “JOSH” WALLWORK, 45, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 158,
    d: 'PABLO GARCIA, 46, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Garcia.JPG',
  },
  {
    i: 159,
    d: 'LEVESTER THOMPSON JR., 46, Staten Island',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Levester_Thompson.jpg',
  },
  {
    i: 160,
    d: 'RASHIDA AHMED, 46, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 161,
    d: 'RAYMOND DERRICK “RAY” COPELAND, 46, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 162,
    d: 'EZEKIEL “ZEKE” COUSINS, 46, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 163,
    d: 'CHRISTIAN FLORES DELIM, 46',
  },
  {
    i: 164,
    d: 'SHLOMO “(SHLOIME) (BUNDY)” FREUNDLICH, 46, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 165,
    d: 'ALEJANDRO HERNÁNDEZ, 46, Queens',
    e: 'June 13, 2020',
  },
  {
    i: 166,
    d: 'LATIFA HOSKINS, 46, The Bronx',
    e: 'April 16, 2020',
  },
  {
    i: 167,
    d: 'SAKINAH KAMA, 46',
    e: 'April 16, 2020',
  },
  {
    i: 168,
    d: 'EDWARD LATOURETTE, 46, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 169,
    d: 'LEONARD MCCOLLOUGH, 46',
  },
  {
    i: 170,
    d: 'MARCOS GUTIERREZ MONTERO, 46, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 171,
    d: 'MAGDALENA ELIZABETH OCAMPO FRANCO, 46, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 172,
    d: 'JEFFREY ALLEN SCALF, 46, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 173,
    d: 'EDNA SANDY WACKMAN, 46, Brooklyn',
  },
  {
    i: 174,
    d: 'URAUL WATTS, 46',
  },
  {
    i: 175,
    d: 'LUIS LIZ, 47, The Bronx',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Liz.jpeg',
  },
  {
    i: 176,
    d: 'EVELYN RIVERA, 47, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Rivera.jpg',
  },
  {
    i: 177,
    d: 'DAVID BEHRBOM, 47, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 178,
    d: 'WALTER F. CARRERA, 47, Brooklyn',
    e: 'January 29, 2021',
  },
  {
    i: 179,
    d: 'WALTER CARRERA, 47, Brooklyn',
    e: 'January 29, 2021',
  },
  {
    i: 180,
    d: 'RASHMI CHRISTIAN, 47, Brooklyn',
  },
  {
    i: 181,
    d: 'THOMAS “BIJU” DAVID, 47, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 182,
    d: 'STANLEY FONG, 47, Queens',
  },
  {
    i: 183,
    d: 'MICHAEL GERACI, 47, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 184,
    d: 'CAROLYN JUSTINIANO, 47, Staten Island',
    e: 'March 17, 2021',
  },
  {
    i: 185,
    d: 'RUSSELL E. SMALLS, 47, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 186,
    d: 'LOUIS TORRES, 47, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 187,
    d: 'GUADALUPE VELASQUEZ, 47, Queens',
  },
  {
    i: 188,
    d: 'KIYOTO “BREEZE” WILLIAMS, 47, Staten Island',
  },
  {
    i: 189,
    d: 'WARREN BATES, 48',
    e: 'March 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Warren_Bates.jpg',
  },
  {
    i: 190,
    d: 'CEDRIC GEORGE DIXON, 48, The Bronx',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cedric_Dixon.jpeg',
  },
  {
    i: 191,
    d: 'ANTHONY R. IRACI, 48, Staten Island',
    e: 'March 27, 2020',
  },
  {
    i: 192,
    d: 'MARCUS L. OVERTON, 48, Brooklyn',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marcus_Overton.jpg',
  },
  {
    i: 193,
    d: 'MARISA MARIE SOTO WILLIAMS, 48, Staten Island',
    e: 'November 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marisa_Williams.png',
  },
  {
    i: 194,
    d: 'ROXANNE BENT, 48, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 195,
    d: 'MOSTAFIZUR RAHMAN BIPU, 48, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 196,
    d: 'ANTHONY CAUSI, 48, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 197,
    d: 'HESRONNI ST. ANTHONY CAYENNE, 48, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 198,
    d: 'GILBERT CONSTANT, 48, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 199,
    d: 'DAVID EDWARDS JR., 48, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 200,
    d: 'MI LYNN HUNT, 48, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 201,
    d: 'KIOUS JORDAN “JAMIE” KELLY, 48, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 202,
    d: 'THERESA M. LOCOCO JR., 48, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 203,
    d: 'ALLYSON MESTEL-SCHAPIRA, 48, Queens',
  },
  {
    i: 204,
    d: 'BARBARA PETTIWAY, 48, Manhattan',
  },
  {
    i: 205,
    d: 'GLORIA SOSA, 48, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 206,
    d: 'REBECCA YEE, 48, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 207,
    d: 'ARON SHULEM YUNOVSKY, 48, Brooklyn',
  },
  {
    i: 208,
    d: 'RANDIP S. “BOBBY” MINHAS, 49, Queens',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Randip_Minhas.JPG',
  },
  {
    i: 209,
    d: 'FRANCISCO MOLINA, 49, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 210,
    d: 'KELLY K. WONG, 49, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kelly_Wong.jpg',
  },
  {
    i: 211,
    d: 'MOHAMMED AHSAN, 49, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 212,
    d: 'GERRY BALASTA, 49, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 213,
    d: 'CHRISTOPHER N. “CHRIS” GAINES, 49, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 214,
    d: 'ARTHUR LEE GREEN, 49, The Bronx',
    e: 'March 23, 2020',
  },
  {
    i: 215,
    d: 'ERIC GRIMES, 49',
  },
  {
    i: 216,
    d: 'MICHAEL D. HOLLEY, 49',
  },
  {
    i: 217,
    d: 'PETER JI, 49, Manhattan',
  },
  {
    i: 218,
    d: 'DAVID JOHNSON, 49, Brooklyn',
    e: 'March 25, 2020',
  },
  {
    i: 219,
    d: 'MOHAMMAD SAIFUL HAYDER “AJAD” KHAN, 49',
    e: 'April 5, 2020',
  },
  {
    i: 220,
    d: 'ANIL SUBBA “RAMESH SAMBAHAMFE” LIMBU, 49, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 221,
    d: 'CLAUDIO LOPEZ, 49, Manhattan',
    e: 'April 24, 2020',
  },
  {
    i: 222,
    d: 'LEON J. MCKNIGHT JR., 49, The Bronx',
  },
  {
    i: 223,
    d: 'JESUS ROMAN MELENDEZ, 49, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 224,
    d: 'EFRAIN MEZA, 49, Brooklyn',
    e: 'May 5, 2020',
  },
  {
    i: 225,
    d: 'ARISTEDES MORAITIS, 49, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 226,
    d: 'JORGE “FATHER GEORGE” ORTIZ-GARAY, 49, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 227,
    d: 'PETER PETRASSI, 49, Queens',
    e: 'March 26, 2020',
  },
  {
    i: 228,
    d: 'LLOYD CORNELIOUS PORTER, 49, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 229,
    d: 'CHARINA “CHERRY” PORTILLO, 49',
    e: 'March 28, 2020',
  },
  {
    i: 230,
    d: 'MARISOL ROSARIO, 49, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 231,
    d: 'ALEX ZAPATA, 49, Brooklyn',
  },
  {
    i: 232,
    d: 'RUEL ALDRINGTON FORBES, 50, Brooklyn',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ruel_Forbes.PNG',
  },
  {
    i: 233,
    d: 'EDDY MARQUEZ, 50, Brooklyn',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eddy_Marquez.jpeg',
  },
  {
    i: 234,
    d: 'ALAN MATZA, 50, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 235,
    d: 'LUIS RIVERA, 50, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Rivera.jpeg',
  },
  {
    i: 236,
    d: 'KIMBERLY “KIM” WETZEL, 50, Brooklyn',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kimberly_Wetzel.jpg',
  },
  {
    i: 237,
    d: 'RABBI YITZCHOK BENISH/BANASH, 50, Brooklyn',
  },
  {
    i: 238,
    d: 'JUAN CASTILLO, 50, The Bronx',
  },
  {
    i: 239,
    d: 'LEONARDO CHAVEZ, 50',
    e: 'September 18, 2021',
  },
  {
    i: 240,
    d: 'SONY CLERGE, 50',
    e: 'August 20, 2021',
  },
  {
    i: 241,
    d: 'ADRIAN DAVID DIAZ, 50, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 242,
    d: 'CHAIM MEIR GANTZ, 50, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 243,
    d: 'TAMMY HENDRIKS, 50, Queens',
  },
  {
    i: 244,
    d: 'VADIM IVLEV, 50, Staten Island',
  },
  {
    i: 245,
    d: 'RAKKHON KIM, 50, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 246,
    d: 'YOSEF TZVI KLEIN, 50, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 247,
    d: 'MELISSA MARIE KRUPPA, 50, Staten Island',
    e: 'June 20, 2020',
  },
  {
    i: 248,
    d: 'LIPA LEFKOWITZ, 50, Brooklyn',
  },
  {
    i: 249,
    d: 'DR. MALIK KADIR AKEL “MERLIN” NORD, 50, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 250,
    d: 'FREDA OCRAN, 50, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 251,
    d: 'MILAGROS PEREZ, 50, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 252,
    d: 'ERIC VON PETERSON, 50, Brooklyn',
    e: 'January 9, 2021',
  },
  {
    i: 253,
    d: 'DIANNA RUSSELL, 50',
    e: 'May 30, 2020',
  },
  {
    i: 254,
    d: 'DARRIN M. SANTOS SR., 50',
    e: 'April 4, 2020',
  },
  {
    i: 255,
    d: 'SUSAN SISGUNDO, 50, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 256,
    d: 'RODNEY SPARROW, 50, Brooklyn',
  },
  {
    i: 257,
    d: 'TARA ELLEN STILP, 50, Brooklyn',
    e: 'February 6, 2021',
  },
  {
    i: 258,
    d: 'ALDO URRIOLA, 50, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 259,
    d: 'NASHOM WOODEN, 50, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 260,
    d: 'MAURICE KIRBY, 51, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 261,
    d: 'ROBERT “ROB” NATHAN, 51',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Nathan.jpg',
  },
  {
    i: 262,
    d: 'JACK POLIMENI, 51, Manhattan',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jack_Polimeni.jpg',
  },
  {
    i: 263,
    d: 'AFZAL AHMED, 51, Queens',
  },
  {
    i: 264,
    d: 'ANGELA ALLEN, 51, The Bronx',
  },
  {
    i: 265,
    d: 'GUILLERMO “WILLY” FRESTAN, 51, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 266,
    d: 'JANEE MICHELLE FUNCHESS, 51, The Bronx',
  },
  {
    i: 267,
    d: 'ANICK “NICK” JESDANUN, 51, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 268,
    d: 'YUPADEE KOBKULBOONSIRI, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 269,
    d: 'DARLISA C. NESBITT, 51, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 270,
    d: 'BOSEDE OLOWURO, 51, The Bronx',
  },
  {
    i: 271,
    d: 'MARTHA ORTEGA, 51, Queens',
    e: 'May 24, 2020',
  },
  {
    i: 272,
    d: 'BERNADETTE PAYNE, 51, The Bronx',
    e: 'March 24, 2020',
  },
  {
    i: 273,
    d: 'PAULA PRYCE-BREMMER, 51',
    e: 'March 26, 2020',
  },
  {
    i: 274,
    d: 'BARBARELLA RODRIGUEZ, 51, Queens',
  },
  {
    i: 275,
    d: 'WILLIAM SCOTT, 51',
    e: 'April 2, 2020',
  },
  {
    i: 276,
    d: 'ALBERTO “ZULMA ZANELLY” SEVILLA, 51, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 277,
    d: 'CALEB ST. SURIN, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 278,
    d: 'PETER URSINO, 51, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 279,
    d: 'MATTHEW F. MOORE JR., 52, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 280,
    d: 'ROBERT PAPIK, 52',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Papik.png',
  },
  {
    i: 281,
    d: 'MARTIN ROSETE, 52',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Martin_Vidal_Rosete.jpg',
  },
  {
    i: 282,
    d: 'JUAN SANABRIA, 52, The Bronx',
    e: 'March 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Sanabria.jpg',
  },
  {
    i: 283,
    d: 'LIBORIO “LEE” ALESSI JR., 52, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 284,
    d: 'RIVKA YOCHEVED “RIFKY” DEUTSCH, 52, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 285,
    d: 'MIGUEL “THE PASTA KING” GRANDE, 52, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 286,
    d: 'VICTOR VAZQUEZ HERNANDEZ, 52, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 287,
    d: 'CHRISTOPHER N. HOWARD, 52',
    e: 'May 3, 2020',
  },
  {
    i: 288,
    d: 'SAU LEE, 52',
    e: 'April 18, 2020',
  },
  {
    i: 289,
    d: 'DIANE MCCARREN, 52, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 290,
    d: 'EDWIN MCDOWELL, 52',
  },
  {
    i: 291,
    d: 'RICARDO MIGUEL MILANES, 52, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 292,
    d: 'SHARON NEARBY, 52, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 293,
    d: 'EZEQUIEL ORTIZ, 52, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 294,
    d: 'EMMA RAMOS, 52, Brooklyn',
    e: 'March 14, 2021',
  },
  {
    i: 295,
    d: 'RAÚL RAMÍREZ, 52, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 296,
    d: 'JANICE “MISS JANICE” RODMAN, 52, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 297,
    d: 'ADAM SCHLESINGER, 52, Manhattan',
    e: 'April 1, 2020',
  },
  {
    i: 298,
    d: 'LOUIS ORLANDO VARGAS, 52, The Bronx',
    e: 'January 14, 2021',
  },
  {
    i: 299,
    d: 'CURTIS I. WHITTED JR., 52, Manhattan',
  },
  {
    i: 300,
    d: 'JUSTO CALIXTO ANDON, 53, Brooklyn',
    e: 'May 26, 2020',
  },
  {
    i: 301,
    d: 'EDWARD J. DANIELS, 53, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edward_Daniels.jpg',
  },
  {
    i: 302,
    d: 'RAMON FURCAL, 53, Manhattan',
    e: 'May 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ramon_Furcal.jpg',
  },
  {
    i: 303,
    d: 'KENNETH EARL “WAYNE” GREEN JR., 53, Brooklyn',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Earl_Green_Jr.png',
  },
  {
    i: 304,
    d: 'JUANA GRULLON DE PENA, 53',
    e: 'March 25, 2020',
  },
  {
    i: 305,
    d: 'ADALBERTO “TITO” LEBRON JR., 53, Brooklyn',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Adalberto_Lebron.jpeg',
  },
  {
    i: 306,
    d: 'MARK POMPA, 53, Staten Island',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mark_Pompa.jpeg',
  },
  {
    i: 307,
    d: 'JUAN VAZQUEZ, 53, Brooklyn',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Vazquez.jpg',
  },
  {
    i: 308,
    d: 'JOSE D. AVILES, 53, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 309,
    d: 'CELERINA MAUREEN MIGUEL “RINA” CRISTY, 53',
    e: 'April 15, 2020',
  },
  {
    i: 310,
    d: 'JAMES DANIELS III, 53, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 311,
    d: 'SABRINA ALICIA EUBANKS, 53, Queens',
  },
  {
    i: 312,
    d: 'ROBERT GALLETTA II, 53, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 313,
    d: 'DENNY GILLIAM, 53, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 314,
    d: 'VALERIE R. GOODLEY, 53, Brooklyn',
  },
  {
    i: 315,
    d: 'PAMELA HICKS-LEWIS, 53, Brooklyn',
  },
  {
    i: 316,
    d: 'MARILYN HOWARD, 53, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 317,
    d: 'DANIEL MATIAS, 53, Queens',
  },
  {
    i: 318,
    d: 'JOSE PAEZ, 53',
  },
  {
    i: 319,
    d: 'KAITLYN “WAYNE” PATTERSON JR., 53, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 320,
    d: 'MAUREEN PERGOLA, 53, Queens',
    e: 'April 10, 2021',
  },
  {
    i: 321,
    d: 'MARLENE PICONE, 53, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 322,
    d: 'DENISE PRINCE, 53, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 323,
    d: 'PEDRO RODRIGUEZ, 53, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 324,
    d: 'JOSE ROSALES, 53, Staten Island',
  },
  {
    i: 325,
    d: 'JOSEPH SELBY, 53, Queens',
  },
  {
    i: 326,
    d: 'TROY LEE SWEENEY, 53',
    e: 'April 8, 2020',
  },
  {
    i: 327,
    d: 'VANEE SYKES, 53, Brooklyn',
    e: 'May 24, 2020',
  },
  {
    i: 328,
    d: 'THERESA TORRES, 53',
  },
  {
    i: 329,
    d: 'MICHAEL TYSON, 53, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 330,
    d: 'LUIS EDUARDO VELECELA, 53, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 331,
    d: 'ZLATKO VELESKI, 53, Queens',
  },
  {
    i: 332,
    d: 'CHARLES BURROWS, 54, Brooklyn',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Burrows.jpg',
  },
  {
    i: 333,
    d: 'KENNETH GREEN, 54, The Bronx',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Green.jpg',
  },
  {
    i: 334,
    d: 'VICTOR HUMBERTO HERAS, 54, Manhattan',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Victor_Heras.jpg',
  },
  {
    i: 335,
    d: 'ARTHUR C. HURWITZ, 54, Queens',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Hurwitz.jpg',
  },
  {
    i: 336,
    d: 'MARIA MERCADER, 54, Manhattan',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Mercader.jpg',
  },
  {
    i: 337,
    d: 'AJAZ BASHIR MOHAMMED, 54, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Bashir_Ajaz_Mohammed.jpeg',
  },
  {
    i: 338,
    d: 'LEONEL TUSA MASAQUIZA, 54, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Leonel_Tusa_Masaquiza.jpeg',
  },
  {
    i: 339,
    d: 'LOUIS S. BARCELO JR., 54, The Bronx',
    e: 'April 16, 2020',
  },
  {
    i: 340,
    d: 'FRANK JEFFERSON BOWMAN JR., 54, Brooklyn',
  },
  {
    i: 341,
    d: 'KELLIE CHILDS, 54, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 342,
    d: 'DIEGO CHOUTE, 54, Brooklyn',
  },
  {
    i: 343,
    d: 'MOHAMMED CHOWDHURY, 54, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 344,
    d: 'HAL STUART COHEN, 54, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 345,
    d: 'KEVIN CRAWFORD, 54, Manhattan',
    e: 'May 15, 2020',
  },
  {
    i: 346,
    d: 'IRWIN FELDMAN, 54, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 347,
    d: 'RENEE FRENCH, 54, Manhattan',
    e: 'May 19, 2020',
  },
  {
    i: 348,
    d: 'VALARIE FULTON, 54, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 349,
    d: 'GREGORY GARTRELL, 54, Queens',
    e: 'August 21, 2020',
  },
  {
    i: 350,
    d: 'THOMAS J. “TOMMY, TOM” HOGAN, 54, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 351,
    d: 'SAIFUL KHAN, 54, Queens',
  },
  {
    i: 352,
    d: 'CHRISTOPHER B. MCDONNELL, 54',
    e: 'May 6, 2020',
  },
  {
    i: 353,
    d: 'MAGDA NAPOLEONI, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 354,
    d: 'LAWRENCE NIEUENKIRK, 54, Brooklyn',
    e: 'June 4, 2020',
  },
  {
    i: 355,
    d: 'MIRTA PEREZ, 54, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 356,
    d: 'MIGUEL PINEDA, 54, Queens',
    e: 'March 1, 2021',
  },
  {
    i: 357,
    d: 'ZISHA RITTERMAN, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 358,
    d: 'KEVIN ROSSITER, 54, Staten Island',
    e: 'April 25, 2020',
  },
  {
    i: 359,
    d: 'WILLIAM SACKEY, 54, The Bronx',
  },
  {
    i: 360,
    d: 'SANDRA SANTOS-VIZCAINO, 54, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 361,
    d: 'ELGIN STEPHENSON, 54, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 362,
    d: 'JAMES MICHAEL VILLECCO, 54, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 363,
    d: 'ALAIN WALKER, 54',
    e: 'May 19, 2020',
  },
  {
    i: 364,
    d: 'DR. CIRINO R. ZAPPALA, 54',
    e: 'April 7, 2020',
  },
  {
    i: 365,
    d: 'GUMERCINDO “GUMO” ALICEA, 55',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gumercindo_Alicea.jpeg',
  },
  {
    i: 366,
    d: 'RICHARD LENIHAN, 55',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Lenihan.jpg',
  },
  {
    i: 367,
    d: 'TRACEY M. MURCHISON, 55, Queens',
    e: 'July 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tracey_Murchison.jpg',
  },
  {
    i: 368,
    d: 'GUSTAVO PETUZ TAPIA, 55, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 369,
    d: 'MOHAMMAD EUSUP ALI, 55, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 370,
    d: 'DR. TRACI BELTON, 55, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 371,
    d: 'KEVIN BOSTIC, 55, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 372,
    d: 'MARINA CEPEDA, 55, Queens',
    e: 'May 8, 2020',
  },
  {
    i: 373,
    d: 'JENNIFER BETH COTT, 55',
    e: 'February 4, 2021',
  },
  {
    i: 374,
    d: 'PHILLIP DAVIS, 55, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 375,
    d: 'ANDRE “DRE” DEVORE, 55, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 376,
    d: 'MIGUEL J. FELICIANO, 55, Queens',
  },
  {
    i: 377,
    d: 'OMARA FLORES, 55, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 378,
    d: 'INEZ “MAMA T” GONZALEZ, 55, Staten Island',
    e: 'April 20, 2020',
  },
  {
    i: 379,
    d: 'ALGION LONDON, 55, The Bronx',
  },
  {
    i: 380,
    d: 'KHEMRAJ MAHADEO, 55, Brooklyn',
  },
  {
    i: 381,
    d: 'MICHAEL A. MALLON, 55, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 382,
    d: 'MARISE MICIAL, 55, Brooklyn',
  },
  {
    i: 383,
    d: 'ROBERT MOODY JR., 55, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 384,
    d: 'TOMAS PUEBLA, 55, Queens',
  },
  {
    i: 385,
    d: 'GARY RAMDATT, 55, Queens',
  },
  {
    i: 386,
    d: 'MITCHELL ROSENWASSER, 55, Queens',
    e: 'April 26, 2020',
  },
  {
    i: 387,
    d: 'PAMELA ROSS, 55, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 388,
    d: 'FRANCISCO SAAVEDRA, 55, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 389,
    d: 'MEDER TLATELPA BALBUENA, 55, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 390,
    d: 'CESAR TORRES, 55',
  },
  {
    i: 391,
    d: 'JOSE VELEZ, 55',
  },
  {
    i: 392,
    d: 'WALTER WATSON, 55, Manhattan',
    e: 'May 4, 2020',
  },
  {
    i: 393,
    d: 'AVREMY ZAKON, 55, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 394,
    d: 'JOSE MIGUEL CABRERA GARCIA, 56, Manhattan',
    e: 'May 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Miguel_Cabrera_Garcia.jpg',
  },
  {
    i: 395,
    d: 'JAIME DE LA HOZ, 56, The Bronx',
    e: 'March 23, 2020',
  },
  {
    i: 396,
    d: 'ANTONIETTA FLORIO, 56, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonietta_Florio.png',
  },
  {
    i: 397,
    d: 'ROBERT GUIDA, 56, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 398,
    d: 'JOSE A. HERNANDEZ JR., 56, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Hernandez.jpg',
  },
  {
    i: 399,
    d: 'THANKACHAN MATHAI, 56, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thankachan_Mathai.jpg',
  },
  {
    i: 400,
    d: 'TIMOTHY OLAN MONTGOMERY, 56, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tim_Montgomery.jpg',
  },
  {
    i: 401,
    d: "MICHAEL X. O'CONNOR, 56, Queens",
    e: 'March 15, 2021',
    h: "https://projects.thecity.nyc/covid-19-deaths-img/Michael_O'Connor.jpeg",
  },
  {
    i: 402,
    d: 'RODERICK PAULUS, 56, Brooklyn',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Roderick_Paulus.PNG',
  },
  {
    i: 403,
    d: 'DAVID PEREZ, 56, Manhattan',
    e: 'March 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez.jpg',
  },
  {
    i: 404,
    d: 'LEMUEL “BOYET” SISON, 56, Queens',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lemuel_Sison.jpg',
  },
  {
    i: 405,
    d: 'ROBERT THOERING, 56, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Thoering.jpg',
  },
  {
    i: 406,
    d: 'DONAHUE “DANNY” VARGAS, 56, The Bronx',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Donahue_Vargas.jpeg',
  },
  {
    i: 407,
    d: 'JEFFREY ALSTON, 56, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 408,
    d: 'ARDETTE ARNOLD, 56, The Bronx',
    e: 'February 24, 2021',
  },
  {
    i: 409,
    d: 'EDUARDO ANTONIO BECERRIL, 56, The Bronx',
  },
  {
    i: 410,
    d: 'ISHMAEL BURCH, 56',
  },
  {
    i: 411,
    d: 'DR. DOMINIC CARBONE, 56, Manhattan',
    e: 'March 23, 2020',
  },
  {
    i: 412,
    d: 'GARY CHERRY SR., 56, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 413,
    d: 'TIMOTHY EDWARD “TIM” COYNE, 56, Manhattan',
    e: 'August 12, 2021',
  },
  {
    i: 414,
    d: 'RABBI CHAIM YECHEZKEL SHRAGA DAHAN, 56, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 415,
    d: 'JOSE FLORES, 56, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 416,
    d: 'EMMA GOOLSBY, 56, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 417,
    d: 'KEVIN GRAIANI, 56, The Bronx',
    e: 'March 30, 2020',
  },
  {
    i: 418,
    d: 'NAZMUL HAQUE, 56, Queens',
  },
  {
    i: 419,
    d: 'MOHAMMED JAFOR, 56, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 420,
    d: 'DORIS KIRKLAND, 56, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    i: 421,
    d: 'DARYL LABORDE, 56',
    e: 'April 4, 2020',
  },
  {
    i: 422,
    d: 'CUONG LUU, 56, Queens',
  },
  {
    i: 423,
    d: 'IRVING A. MALONEY, 56, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 424,
    d: 'ALEX MCCASKEY, 56, The Bronx',
    e: 'March 22, 2020',
  },
  {
    i: 425,
    d: 'EDWARD MUNGIN, 56, Brooklyn',
  },
  {
    i: 426,
    d: 'BARRY PERSARD, 56, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 427,
    d: 'ERROL “ELVIS” RAMSAROOP, 56, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 428,
    d: 'DORSEY L RHODES III, 56, Manhattan',
    e: 'August 6, 2021',
  },
  {
    i: 429,
    d: 'JACQUEL D. RYAN, 56, The Bronx',
  },
  {
    i: 430,
    d: 'YVETTE SHEFFER, 56, Brooklyn',
  },
  {
    i: 431,
    d: 'ELLIS JAMES STEPHENS JR., 56, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 432,
    d: 'ADLIN R. THOMPSON, 56, Manhattan',
    e: 'April 24, 2020',
  },
  {
    i: 433,
    d: 'GILBERT “TORO” TORRES JR., 56, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 434,
    d: 'SUNG TRUONG, 56, Queens',
  },
  {
    i: 435,
    d: 'SVETLANA VINOKUR, 56, Brooklyn',
    e: 'May 1, 2020',
  },
  {
    i: 436,
    d: 'AVA WALKER, 56, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 437,
    d: 'THOMAS J. “TOM” WATERS, 56, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 438,
    d: 'KENNETH WRIGHT, 56',
  },
  {
    i: 439,
    d: 'YITZCHOCK ZYLBERMINC, 56, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 440,
    d: 'SATYRA LOUISE CATTENHEAD, 57, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 441,
    d: 'GABRIELLA “GABBY” HERNANDEZ, 57, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gabriella_Hernandez.jpeg',
  },
  {
    i: 442,
    d: 'ERNESTO HERNANDEZ, 57, Brooklyn',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernesto_Hernandez.jpeg',
  },
  {
    i: 443,
    d: 'MUDADA KABIR, 57, Brooklyn',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mudada_Kabir.jpg',
  },
  {
    i: 444,
    d: 'PATRICK PATOIR, 57, Brooklyn',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Patrick_Patoir.jpeg',
  },
  {
    i: 445,
    d: 'FRANK SHELTON JR., 57, The Bronx',
    e: 'March 22, 2020',
  },
  {
    i: 446,
    d: 'ERIC S. SOBEL, 57, Manhattan',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eric_Sobel.png',
  },
  {
    i: 447,
    d: 'WILLIS CEPHUS “MARQUE” WASHINGTON JR., 57, Manhattan',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Willis_Washington.jpg',
  },
  {
    i: 448,
    d: 'HUI LIANG WEN, 57, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Hui_Liang_Wen.jpg',
  },
  {
    i: 449,
    d: 'JOHNATHAN ADEWUMI, 57, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 450,
    d: 'SAMUEL AKOPOV, 57, Brooklyn',
  },
  {
    i: 451,
    d: 'DERIK BRASWELL, 57, Queens',
  },
  {
    i: 452,
    d: 'KAREN CARMELLO, 57',
    e: 'April 16, 2020',
  },
  {
    i: 453,
    d: 'MARÍA ELSA CENTENO, 57, The Bronx',
    e: 'May 26, 2020',
  },
  {
    i: 454,
    d: 'STANLEY DASH, 57, Brooklyn',
    e: 'May 29, 2021',
  },
  {
    i: 455,
    d: 'DR. SUNDAY ESTEKYME, 57, The Bronx',
  },
  {
    i: 456,
    d: 'HECTOR GARCIA, 57',
  },
  {
    i: 457,
    d: 'EMMA L. GRIFFIN, 57, Brooklyn',
    e: 'March 21, 2020',
  },
  {
    i: 458,
    d: 'SANDY T. GUNAR, 57, Manhattan',
    e: 'March 17, 2021',
  },
  {
    i: 459,
    d: 'CONNIE JONES HAWKINS, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 460,
    d: 'ARTURO FRANCISCO HERNANDEZ, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 461,
    d: 'CEYBIL “SWEET SABLE” JEFFERIES, 57, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 462,
    d: 'ARYEH “LEIBEL” KATZ, 57, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 463,
    d: 'LEWIS J. KIRSCH, 57',
    e: 'April 15, 2020',
  },
  {
    i: 464,
    d: 'SAL LOMBARDO, 57, Queens',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sal_Lombardo.jpg',
  },
  {
    i: 465,
    d: 'SYLVIA LYONS, 57, The Bronx',
  },
  {
    i: 466,
    d: 'TARLACH MACNIALLAIS, 57, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 467,
    d: 'MARIA MINERVA MARTINEZ PUEBLA, 57, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 468,
    d: 'ARNETTE MITCHELL, 57, Brooklyn',
  },
  {
    i: 469,
    d: 'LINOSEE MOSLEY, 57, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 470,
    d: 'JAIME ARMANDO PINZON, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 471,
    d: 'MACARIO QUIZHPI GALLEGOS, 57, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 472,
    d: 'MELVIN RASCOE, 57, Queens',
    e: 'May 14, 2020',
  },
  {
    i: 473,
    d: 'FATIMA SCHMIDT, 57, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 474,
    d: 'HOWARD THOMPSON, 57',
    e: 'April 30, 2020',
  },
  {
    i: 475,
    d: 'MOHAMMAD RAFIQ UDDIN, 57, Brooklyn',
  },
  {
    i: 476,
    d: 'RICHARD E. WEBER JR., 57, Manhattan',
    e: 'March 19, 2020',
  },
  {
    i: 477,
    d: 'MORDECHAI “MORDY” WEINER, 57, Brooklyn',
  },
  {
    i: 478,
    d: 'PEREL WEISS, 57, Brooklyn',
  },
  {
    i: 479,
    d: 'SONIA YETMAN, 57, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 480,
    d: 'JUDY SAMPSON AVILEZ, 58, Brooklyn',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judy_Sampson_Avilez.jpg',
  },
  {
    i: 481,
    d: 'YAKARA BEAUVOIR, 58, Manhattan',
    e: 'May 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Yakara_Beauvoir.jpeg',
  },
  {
    i: 482,
    d: 'NELSON CRUZ, 58, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 483,
    d: 'PABLO CRUZ, 58, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Cruz.jpg',
  },
  {
    i: 484,
    d: 'ARTURO INTERIANO, 58, The Bronx',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arturo_Interiano.jpeg',
  },
  {
    i: 485,
    d: 'GELBERT A. RIOS, 58, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 486,
    d: 'CESAR MAURO SARMIENTO LOPEZ, 58, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 487,
    d: 'JODY G. SETTLE, 58',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jody_Settle.jpg',
  },
  {
    i: 488,
    d: 'JULES TAYLOR JR., 58, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jules_Taylor.jpg',
  },
  {
    i: 489,
    d: 'ALEX BRUNO, 58, Brooklyn',
  },
  {
    i: 490,
    d: 'CALOGERO CASTROGIOVANNI, 58, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 491,
    d: 'MARIA CORAZON CENTRON, 58, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 492,
    d: 'DR. REZA CHOWDURY, 58, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 493,
    d: 'RABBI MIKHAEL COHEN, 58, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 494,
    d: 'NACHUM COOPER, 58, Brooklyn',
  },
  {
    i: 495,
    d: 'PABLO CRIOLO, 58',
  },
  {
    i: 496,
    d: 'VENANCIO “BENNY” DIAZ, 58, Staten Island',
    e: 'April 30, 2020',
  },
  {
    i: 497,
    d: 'LEV GOLUBOV, 58, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 498,
    d: 'ANDREW HOPPER, 58, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 499,
    d: 'SHIRAJUL ISLAM, 58',
    e: 'April 4, 2020',
  },
  {
    i: 500,
    d: 'BABUL ISLAM, 58, Queens',
  },
  {
    i: 501,
    d: 'NICOLAS JIMENEZ, 58, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 502,
    d: 'RALPH JOHNSON, 58, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 503,
    d: 'YURIY KAPELEVICH, 58, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 504,
    d: 'GWENDOLYN KING, 58',
    e: 'March 30, 2020',
  },
  {
    i: 505,
    d: 'CAROL KING-GRANT, 58, Queens',
  },
  {
    i: 506,
    d: 'RABBI CHAIM TZVI KONIKOV, 58, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 507,
    d: 'CAROLINE LEDDY, 58, Staten Island',
  },
  {
    i: 508,
    d: 'JULIO MEJIA, 58, Queens',
  },
  {
    i: 509,
    d: 'FOSTER MOORE JR., 58, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 510,
    d: 'CHARLENE ADRIEN NEALY, 58, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 511,
    d: 'JOSE MARIA PALAGUACHI, 58, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 512,
    d: 'NESLY PAUL, 58, Brooklyn',
  },
  {
    i: 513,
    d: 'DANIEL PAVODANO-GULACK, 58, Manhattan',
  },
  {
    i: 514,
    d: 'BUDLINO RAMIREZ, 58, The Bronx',
    e: 'June 6, 2020',
  },
  {
    i: 515,
    d: 'CURTIS L. ROBERTSON JR., 58, Brooklyn',
  },
  {
    i: 516,
    d: 'SCOTT ROGERS, 58, Staten Island',
  },
  {
    i: 517,
    d: 'BENJAMIN WOLF “BEN” SCHAEFFER, 58, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 518,
    d: 'MERVIN SERAPHIN, 58, Queens',
  },
  {
    i: 519,
    d: 'DARRYL K. SWEENEY, 58, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 520,
    d: 'GEORGINA AGUIRRE, 59, Manhattan',
    e: 'May 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Georgina_Aguirre.jpg',
  },
  {
    i: 521,
    d: 'ZAMAN ALI, 59, Queens',
    e: 'February 12, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Zaman_Ali.jpg',
  },
  {
    i: 522,
    d: 'JULIO BARRIOS, 59, Queens',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Julio_Barrios.jpg',
  },
  {
    i: 523,
    d: 'STEPHEN VINCENT CANDILORO JR., 59',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stephen_Candiloro.jpg',
  },
  {
    i: 524,
    d: 'MICHAEL FIELD, 59',
    e: 'April 8, 2020',
  },
  {
    i: 525,
    d: 'MIGUEL GUAMAN, 59, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Guaman.jpg',
  },
  {
    i: 526,
    d: 'MANUEL J. GUANAQUIZA, 59, Queens',
    e: 'May 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Guanaquiza.jpg',
  },
  {
    i: 527,
    d: 'GREGORY HODGE, 59, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gregory_Hodge.PNG',
  },
  {
    i: 528,
    d: 'MICHELLE JOHNSON, 59, The Bronx',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Johnson.jpeg',
  },
  {
    i: 529,
    d: 'ANDREAS “ANDY” KOUTSOUDAKIS SR., 59, Staten Island',
    e: 'March 27, 2020',
  },
  {
    i: 530,
    d: 'SYED RAHMAN, 59',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Syed_Rahman.jpg',
  },
  {
    i: 531,
    d: 'LUIS EDUARDO RIASCOS, 59, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Riascos.jpeg',
  },
  {
    i: 532,
    d: 'RICHARD STEWART-JOHNSON, 59, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Johnson.jpg',
  },
  {
    i: 533,
    d: 'LUIS ACOSTA, 59',
  },
  {
    i: 534,
    d: 'REMBERTO AGUILAR, 59, Queens',
  },
  {
    i: 535,
    d: 'FREDDY WILSON ALEMAN, 59, Queens',
    e: 'December 26, 2020',
  },
  {
    i: 536,
    d: 'ANA SOFIA ARGOTE ZAPATA, 59, Queens',
    e: 'April 22, 2021',
  },
  {
    i: 537,
    d: 'LORENA BORJAS, 59, Queens',
    e: 'March 20, 2020',
  },
  {
    i: 538,
    d: 'BRYSON KENT BOWMAN, 59',
    e: 'April 4, 2020',
  },
  {
    i: 539,
    d: 'FLOYD CARDOZ, 59, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 540,
    d: 'JOHN CARILLO, 59',
    e: 'April 28, 2020',
  },
  {
    i: 541,
    d: 'ERNIE CHIU, 59, Queens',
  },
  {
    i: 542,
    d: 'JAMES EDWARD DALY, 59, Staten Island',
    e: 'May 6, 2020',
  },
  {
    i: 543,
    d: 'JOHN L. FERRI JR., 59, Manhattan',
    e: 'May 13, 2020',
  },
  {
    i: 544,
    d: 'WAYNE R. FINGALL, 59, Brooklyn',
  },
  {
    i: 545,
    d: 'ALFREDO MENESES GONZALEZ, 59, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 546,
    d: 'FRANKY GONZALEZ, 59',
    e: 'May 15, 2020',
  },
  {
    i: 547,
    d: 'RONALD MICHAEL HUNTER, 59, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 548,
    d: 'SAMEER JALEEL, 59, Queens',
  },
  {
    i: 549,
    d: 'RONNIE JIMENO, 59, Brooklyn',
  },
  {
    i: 550,
    d: 'CURWIN KING, 59, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 551,
    d: 'ERWIN “TITO” LAMBRENTO, 59, Queens',
    e: 'May 9, 2020',
  },
  {
    i: 552,
    d: 'MAUREEN PATRICIA LUNNEY, 59, Staten Island',
    e: 'April 16, 2020',
  },
  {
    i: 553,
    d: 'LOURDES MAGO, 59, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 554,
    d: 'VICTOR MANGAL, 59, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 555,
    d: 'THYCE MATTIS, 59, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 556,
    d: 'CATHERINE MOBILLE, 59, Staten Island',
  },
  {
    i: 557,
    d: 'ROY PIKSER, 59, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 558,
    d: 'ANUCHA PROMSGAN, 59',
  },
  {
    i: 559,
    d: 'MARK REMOLINO, 59, Staten Island',
    e: 'May 4, 2020',
  },
  {
    i: 560,
    d: 'JUAN RIVERA, 59, The Bronx',
  },
  {
    i: 561,
    d: 'STEVE JOSEPH RYBKIN, 59',
    e: 'April 5, 2020',
  },
  {
    i: 562,
    d: 'YVES SAJOUS, 59, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 563,
    d: 'ROBERT SARUTTO, 59, Staten Island',
  },
  {
    i: 564,
    d: 'PETER SCHURR, 59, Queens',
  },
  {
    i: 565,
    d: 'THOMAS SOTO, 59, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 566,
    d: 'YITZCHOK STEINBERG, 59, Brooklyn',
  },
  {
    i: 567,
    d: 'LORENZO JACQUES THAGGARD, 59, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 568,
    d: 'DR. J. RONALD VERRIER, 59, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 569,
    d: 'DIEGO AGRON, 60, Brooklyn',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Diego_Agron.jpg',
  },
  {
    i: 570,
    d: 'TAPAN BARUA, 60, Manhattan',
    e: 'December 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tapan_Barua.jpg',
  },
  {
    i: 571,
    d: 'FAREEDA BEHARRY, 60, Queens',
    e: 'May 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Beharry.jpeg',
  },
  {
    i: 572,
    d: 'IDRIS BEY, 60, Brooklyn',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Idris_Bey.PNG',
  },
  {
    i: 573,
    d: 'RUEL Y. DEJESUS, 60, Queens',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ruel_DeJesus.jpeg',
  },
  {
    i: 574,
    d: 'JOSEPH FLETCHER, 60, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Fletcher.JPG',
  },
  {
    i: 575,
    d: 'MARY MARGARET MINERLY, 60, Queens',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mary_Minerly.jpg',
  },
  {
    i: 576,
    d: 'JUAN ANDRES OLLARVIDE, 60, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Ollarvide.jpg',
  },
  {
    i: 577,
    d: 'BRIAN KEITH SADDLER, 60',
    e: 'May 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brian_Saddler.png',
  },
  {
    i: 578,
    d: 'ALFREDO SANTOS, 60, Queens',
    e: 'February 2, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alfredo_Santos.jpg',
  },
  {
    i: 579,
    d: 'WAYNE STEELE, 60',
    e: 'May 20, 2020',
  },
  {
    i: 580,
    d: 'MICHAEL ANTHONY STEVENS SR., 60, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Stevens.jpg',
  },
  {
    i: 581,
    d: 'FRANK AMATO, 60, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 582,
    d: 'YAW A. ASANTE, 60, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 583,
    d: 'NICANOR “NICK” BALTAZAR, 60, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 584,
    d: 'YISROEL MOSHE BAUM, 60, Brooklyn',
  },
  {
    i: 585,
    d: 'DON BENITO, 60, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 586,
    d: 'IQBAL HAQ BHUIYAN PRINCE, 60, Queens',
  },
  {
    i: 587,
    d: 'RABBI ELI BOTKNECHT, 60, Brooklyn',
  },
  {
    i: 588,
    d: 'VIRDREE BURNS JR., 60, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 589,
    d: 'ALEX CARRAZANA, 60, Queens',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alex_Carrazana.jpg',
  },
  {
    i: 590,
    d: 'LEONARD EUGENE CARTER JR., 60, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 591,
    d: 'ELIAR CENTENO, 60',
  },
  {
    i: 592,
    d: 'LAIDEZE CHARLES, 60, Brooklyn',
  },
  {
    i: 593,
    d: 'MIGUEL CHUMPITAZ, 60, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 594,
    d: 'CARMINE DEFAZIO JR., 60, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 595,
    d: 'DR. FRANK GABRIN, 60, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 596,
    d: 'ANTHONY GRAFFIGNA, 60, Staten Island',
    e: 'May 9, 2020',
  },
  {
    i: 597,
    d: 'MOHAMMED HAQUE, 60',
  },
  {
    i: 598,
    d: 'PAMELA EVETTE HAYNES, 60, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 599,
    d: 'AKMOL HUSSEIN (TANTU), 60, Brooklyn',
  },
  {
    i: 600,
    d: 'EMMANUEL “JAKE THE SNAKE” JACOB, 60, Brooklyn',
  },
  {
    i: 601,
    d: 'HORATIO JORDAN, 60',
    e: 'April 25, 2020',
  },
  {
    i: 602,
    d: 'JOSEPH JURCZAK, 60, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 603,
    d: 'ALAA M. KHALIL, 60, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 604,
    d: 'RABBI ARON HERSH KLEINMAN, 60, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 605,
    d: 'DR. ELI LANDAU, 60, Queens',
  },
  {
    i: 606,
    d: 'VINCENT J. “VINNIE” LIONTI, 60, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 607,
    d: 'ALCENIO MENA, 60, Brooklyn',
  },
  {
    i: 608,
    d: 'FERNANDO “NIC 707” MITEFF, 60, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 609,
    d: 'JORGE MUNOZ, 60',
  },
  {
    i: 610,
    d: 'PAT NICHOLLS, 60, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 611,
    d: 'FRANCOIS NIEUWENDAM, 60, Manhattan',
    e: 'May 3, 2020',
  },
  {
    i: 612,
    d: 'RICHARD “RICKY” PEREZ, 60, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 613,
    d: 'FRINE REYES, 60, Brooklyn',
  },
  {
    i: 614,
    d: 'CAROL RYER, 60, The Bronx',
  },
  {
    i: 615,
    d: 'BRIAN SADDLER, 60',
    e: 'May 8, 2020',
  },
  {
    i: 616,
    d: 'RAMON SALVA, 60, Queens',
  },
  {
    i: 617,
    d: 'GARY SAMUELS, 60, Staten Island',
    e: 'April 22, 2020',
  },
  {
    i: 618,
    d: 'SIGFRIDO SEPULVEDA, 60, Manhattan',
    e: 'April 29, 2020',
  },
  {
    i: 619,
    d: 'MICHAEL THOMPSON SR., 60',
    e: 'April 17, 2020',
  },
  {
    i: 620,
    d: 'SHARON BASCOM, 61, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sharon_Bascom.jpg',
  },
  {
    i: 621,
    d: 'VANESSA BURKETT, 61, Brooklyn',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Vanessa_Burkett.jpg',
  },
  {
    i: 622,
    d: 'RAUL AGUSTÍN CARMONA, 61, The Bronx',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Raul_Carmona.jpeg',
  },
  {
    i: 623,
    d: 'RONNIE CORDERO, 61',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ronnie_Cordero.jpg',
  },
  {
    i: 624,
    d: 'EDWIN GARCIA, 61, Manhattan',
    e: 'May 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edwin_Garcia.jpg',
  },
  {
    i: 625,
    d: 'PAUL DOUGLAS GRAY, 61, The Bronx',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Paul_Gray.jpeg',
  },
  {
    i: 626,
    d: 'RAINER “RAY” KILIAN, 61, Queens',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rainer_Kilian.jpeg',
  },
  {
    i: 627,
    d: 'MARIA VICTORIA “VICKY” LUCAS, 61, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Victoria_Lucas.jpg',
  },
  {
    i: 628,
    d: 'LISA G. MACK, 61, Brooklyn',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lisa_Mack.jpg',
  },
  {
    i: 629,
    d: 'WILLIAM T. MORRIS, 61, Queens',
    e: 'June 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Morris.jpeg',
  },
  {
    i: 630,
    d: 'ANGEL PILLIGUA, 61, Queens',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Angel_Pilligua.jpg',
  },
  {
    i: 631,
    d: 'PROMELA SURI, 61, Queens',
    e: 'January 25, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Promela_Suri.jpg',
  },
  {
    i: 632,
    d: 'SALVATORE ANDREOTTI, 61',
  },
  {
    i: 633,
    d: 'MADHVI AYA, 61, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    i: 634,
    d: 'SANATTAN BALGOBIN, 61, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 635,
    d: 'GIACOMINA BARR-BROWN, 61, The Bronx',
    e: 'March 26, 2020',
  },
  {
    i: 636,
    d: 'HUBERT BELGRAVE, 61, Queens',
  },
  {
    i: 637,
    d: 'DAVID M. BURNETT, 61, Brooklyn',
    e: 'January 22, 2021',
  },
  {
    i: 638,
    d: 'LENORA CASSO, 61, Queens',
  },
  {
    i: 639,
    d: 'RICHARD W. CHIN, 61, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 640,
    d: 'CHRISOPHER JOSEPH “CHRIS” COGNATO, 61, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 641,
    d: 'TRINIDAD CUEVAS, 61, Manhattan',
    e: 'December 26, 2020',
  },
  {
    i: 642,
    d: 'OLIVER CYRUS, 61, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 643,
    d: 'ISAIAH DE LA TORRE, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 644,
    d: 'ALISON DONOVAN, 61, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 645,
    d: 'LARRY D. EDGEWORTH, 61, Manhattan',
    e: 'March 19, 2020',
  },
  {
    i: 646,
    d: 'ROSITA ESTINFIL, 61, Brooklyn',
  },
  {
    i: 647,
    d: 'DEBRA FERRARI, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 648,
    d: 'JAIME E. FUENTES, 61, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 649,
    d: 'PATRICIA FUENTES, 61',
    e: 'April 17, 2020',
  },
  {
    i: 650,
    d: 'FERNANDO GALEANO, 61, Brooklyn',
  },
  {
    i: 651,
    d: 'JOANALEE GUINESS, 61',
  },
  {
    i: 652,
    d: 'WILLIAM HAYES, 61, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 653,
    d: 'PHYLLIS SUSAN HOLLEY, 61',
  },
  {
    i: 654,
    d: 'CHERYL JOHNSON, 61, Queens',
    e: 'April 25, 2020',
  },
  {
    i: 655,
    d: 'AZHAR KHAN, 61, Staten Island',
    e: 'April 7, 2020',
  },
  {
    i: 656,
    d: 'DELPHINE TAZAIR LEE, 61, Queens',
    e: 'March 22, 2020',
  },
  {
    i: 657,
    d: 'ROCCO LOMBARDO, 61, Brooklyn',
  },
  {
    i: 658,
    d: 'JOSE MAQUEDA, 61, Manhattan',
  },
  {
    i: 659,
    d: 'FERMIN MARTINEZ, 61, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 660,
    d: 'VENUS MCCOMBS-THREATTS, 61',
    e: 'May 24, 2021',
  },
  {
    i: 661,
    d: 'JOHN MCCORMACK, 61, Queens',
    e: 'May 20, 2020',
  },
  {
    i: 662,
    d: 'BRUCE B. MILEY, 61, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 663,
    d: 'MOHAMED RAHAMAN, 61, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 664,
    d: 'DR. IVAN RODRIGUEZ SR., 61',
    e: 'May 25, 2020',
  },
  {
    i: 665,
    d: 'DANIEL SANCHEZ, 61, The Bronx',
  },
  {
    i: 666,
    d: 'CONCEPCION SILVA, 61, Brooklyn',
  },
  {
    i: 667,
    d: 'STEWART ALAN TURNER, 61, Manhattan',
    e: 'April 27, 2020',
  },
  {
    i: 668,
    d: 'RICK A. UNTERBERG, 61, Manhattan',
  },
  {
    i: 669,
    d: 'JORGE VILLARROEL, 61, Queens',
  },
  {
    i: 670,
    d: 'VICTOR ZAPANA SR., 61, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 671,
    d: 'MIREYA VARGAS CARDONA, 62',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mireya_Cardona.jpg',
  },
  {
    i: 672,
    d: 'MARCOS CASTRO, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marcos_Castro.jpg',
  },
  {
    i: 673,
    d: 'NINA MARIE FAVUZZA, 62, Queens',
    e: 'January 27, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Nina_Marie_Favuzza.png',
  },
  {
    i: 674,
    d: 'ABUL HOSSAIN, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Abul_Hossain.JPG',
  },
  {
    i: 675,
    d: 'YI GAO HUANG, 62, Queens',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Yi_Gao_Huang.jpg',
  },
  {
    i: 676,
    d: 'BRIAN MARCUS, 62, Queens',
    e: 'April 24, 2021',
  },
  {
    i: 677,
    d: 'ANTHONY MEOLI, 62, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Meoli.jpg',
  },
  {
    i: 678,
    d: 'ADOLFO MOTTA, 62, Queens',
    e: 'February 7, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Adolfo_Motta.jpg',
  },
  {
    i: 679,
    d: 'FRANK ORSINI, 62',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frank_Orsini.jpg',
  },
  {
    i: 680,
    d: 'WILLIAM “BILLY” PLANTT, 62, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Plantt.JPG',
  },
  {
    i: 681,
    d: 'ANTONIO GUADALUPE RAMOS, 62, The Bronx',
    e: 'January 9, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Ramos.jpeg',
  },
  {
    i: 682,
    d: 'GURPAUL SINGH, 62, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gurpaul_Singh.jpeg',
  },
  {
    i: 683,
    d: 'JOSE AVILES VANEGAS, 62, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 684,
    d: 'LUCHNER BENOIT, 62',
  },
  {
    i: 685,
    d: 'MICHAEL BORLAND, 62, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 686,
    d: 'DR. JULIE BUTLER, 62, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 687,
    d: 'RODRIGO CALENO, 62, Queens',
  },
  {
    i: 688,
    d: 'MEZAC CHOSSON, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 689,
    d: 'DENNIS C. DICKSON, 62, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 690,
    d: 'DENNIS C. DIXON, 62',
    e: 'March 26, 2020',
  },
  {
    i: 691,
    d: 'DONNA DURKIN, 62, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 692,
    d: 'RAMSUNDER DWARKA, 62, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 693,
    d: 'MEIR ECKSTEIN, 62, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 694,
    d: 'MARIE CAROLE ETIENNE, 62, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 695,
    d: 'JOSHUA C. FAGIN, 62, Manhattan',
    e: 'November 24, 2020',
  },
  {
    i: 696,
    d: 'JAIME “JIMMY” FERNANDO, 62, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 697,
    d: 'DR. ARTHUR FRIEDMAN, 62',
    e: 'April 30, 2020',
  },
  {
    i: 698,
    d: 'MARIE GAGLIANO, 62, The Bronx',
  },
  {
    i: 699,
    d: 'EDUARDO L. GANCAYCO, 62, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 700,
    d: 'TONY GREER, 62, Manhattan',
  },
  {
    i: 701,
    d: 'RAMON GUTIERREZ, 62, The Bronx',
  },
  {
    i: 702,
    d: 'JORGE JARA, 62, Queens',
  },
  {
    i: 703,
    d: 'RABBI YAAKOV “YANKY” KORF, 62, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 704,
    d: 'SUSANA LAUZAN, 62, The Bronx',
    e: 'February 3, 2020',
  },
  {
    i: 705,
    d: 'YOSEF LEIB LAZAR, 62, Brooklyn',
  },
  {
    i: 706,
    d: 'MIRVIL LOUIS, 62',
  },
  {
    i: 707,
    d: 'EDGAR LUNA, 62, Queens',
  },
  {
    i: 708,
    d: 'DR., VERY REV. JAMES MAHONEY, 62, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 709,
    d: 'DR. JAMES MAHONEY, 62',
    e: 'April 27, 2020',
  },
  {
    i: 710,
    d: 'DR. STEPHEN R. MARRONE, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 711,
    d: 'LORNA MCEACHRON, 62, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 712,
    d: 'ROZELLA MCFARLAN, 62, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 713,
    d: 'MARIA ESTHER PALAGUACHI CUZCO, 62, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 714,
    d: 'MARIO PINNA, 62, Queens',
  },
  {
    i: 715,
    d: 'AZINET PUDPUD, 62, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 716,
    d: 'SURESH AMBARAM RANA, 62',
    e: 'March 19, 2021',
  },
  {
    i: 717,
    d: 'MAGDALENA RENTAS SÁNCHEZ, 62, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 718,
    d: 'MIREYA ROMERO, 62, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 719,
    d: 'YITZCHOK TUVIA RUBIN, 62, Brooklyn',
  },
  {
    i: 720,
    d: 'RICHARD “RICHIE” SANTANGELO, 62, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 721,
    d: 'PETER EDWARD SCHAEFER, 62, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 722,
    d: 'TOMMY SMITH III, 62, Staten Island',
    e: 'April 10, 2020',
  },
  {
    i: 723,
    d: 'ANTONIO STEELE, 62',
  },
  {
    i: 724,
    d: 'LOIDA TOBIAS, 62, Queens',
    e: 'June 30, 2020',
  },
  {
    i: 725,
    d: 'GARY VENDITTI, 62, Staten Island',
    e: 'March 26, 2021',
  },
  {
    i: 726,
    d: 'MARLYN M. VINUYA, 62, Queens',
    e: 'May 22, 2020',
  },
  {
    i: 727,
    d: 'DEAN PATRICK WRZESZCZ, 62, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 728,
    d: 'DAW KWUN YOON, 62',
  },
  {
    i: 729,
    d: 'ROMEO OCAMPO “ROMY” AGTARAP, 63',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Romeo_Agtarap.jpg',
  },
  {
    i: 730,
    d: 'LUIGI CAPORICCI, 63',
    e: 'December 11, 2020',
  },
  {
    i: 731,
    d: 'SEYMOUR “SY” COLLINS, 63, Staten Island',
    e: 'May 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Seymour_Collins.jpg',
  },
  {
    i: 732,
    d: 'GAETANA DESERTO, 63, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gaetana_Deserto.jpg',
  },
  {
    i: 733,
    d: 'SHARAN FERNANDEZ, 63, The Bronx',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sharan_Fernandez.jpg',
  },
  {
    i: 734,
    d: 'CARLOS ALFREDO FERNANDEZ, 63, Queens',
    e: 'May 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carlos_Alfredo_Fernandez.jpg',
  },
  {
    i: 735,
    d: 'KAREN GARVIN, 63, The Bronx',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Karen_Garvin.jpg',
  },
  {
    i: 736,
    d: 'PATRICK J. GLYNN, 63, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 737,
    d: 'JOHN MARCHINI, 63, Queens',
    e: 'April 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Marchini.jpg',
  },
  {
    i: 738,
    d: 'LUIS FERNANDO MARULANDA, 63',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Fernando_Marulanda.png',
  },
  {
    i: 739,
    d: 'CARLTON NAUGHTON SR., 63',
    e: 'February 24, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carlton_Naughton.jpeg',
  },
  {
    i: 740,
    d: 'JOHN REDD, 63, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Redd.jpg',
  },
  {
    i: 741,
    d: 'RICHARD C. SEABERRY, 63, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Seaberry.jpg',
  },
  {
    i: 742,
    d: 'ANTONIO SUAREZ, 63',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Suarez.jpg',
  },
  {
    i: 743,
    d: 'MANUEL A. TITO, 63, Queens',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Tito.jpg',
  },
  {
    i: 744,
    d: 'INGRID MOHAMMED WARNER, 63, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ingird_Warner.jpeg',
  },
  {
    i: 745,
    d: 'MAURICE BERGER, 63, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 746,
    d: 'MATIS BLUM, 63, Queens',
  },
  {
    i: 747,
    d: 'PATRICIA A. BOND, 63, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 748,
    d: 'MARIA LOURDES CABAN, 63, Queens',
    e: 'February 18, 2021',
  },
  {
    i: 749,
    d: 'MARIA GUIA “MAMA GUIA” CABILLON, 63, Brooklyn',
    e: 'April 26, 2020',
  },
  {
    i: 750,
    d: 'ROSALIA CASTELLI, 63, Staten Island',
  },
  {
    i: 751,
    d: 'MAVIS CHARLES, 63, Brooklyn',
    e: 'May 12, 2020',
  },
  {
    i: 752,
    d: 'KAREN FELTON, 63, The Bronx',
  },
  {
    i: 753,
    d: 'REMIGIO ROSALES FLORES, 63, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 754,
    d: 'DENNIS FOX, 63, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 755,
    d: 'AVROHOM SHIYA FREUND, 63, Brooklyn',
    e: 'March 20, 2020',
  },
  {
    i: 756,
    d: 'RABBI ALTER AVRAHAM SIMCHA FRIEDMAN, 63, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 757,
    d: 'RHONDA GARVIN, 63, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 758,
    d: 'MARISOL GUZMAN, 63, The Bronx',
    e: 'February 14, 2021',
  },
  {
    i: 759,
    d: 'SABRINA “BB” JEFFERSON, 63, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 760,
    d: 'RABBI YOSEF KALISH, 63, Brooklyn',
  },
  {
    i: 761,
    d: 'SHARON KAUFMAN, 63, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 762,
    d: 'FRANK LEONG, 63',
  },
  {
    i: 763,
    d: 'MENACHEM LOEFFLER, 63, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 764,
    d: 'JUIO MIGENES, 63, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 765,
    d: 'JAMIYLAH A. MUHAMMAD, 63, Queens',
  },
  {
    i: 766,
    d: 'DAVID NOCERA, 63, Manhattan',
    e: 'March 26, 2020',
  },
  {
    i: 767,
    d: 'EVELYN OCHOA-CELANO, 63',
    e: 'May 13, 2020',
  },
  {
    i: 768,
    d: 'LOUISE SOUTHWORTH PASQUINCE, 63, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 769,
    d: 'GABRIEL POLANCO, 63, Queens',
  },
  {
    i: 770,
    d: 'OMAR PORTILLO, 63, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 771,
    d: 'MEIR RAPAPORT, 63, Brooklyn',
  },
  {
    i: 772,
    d: 'CEDRIC ROBINSON, 63, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 773,
    d: 'DARLEY ROBINSON, 63',
  },
  {
    i: 774,
    d: 'ANDREA SANCHO, 63',
    e: 'April 11, 2020',
  },
  {
    i: 775,
    d: 'IQBAL SHAIKH, 63, Queens',
  },
  {
    i: 776,
    d: 'LOUISE SOUTHWORTH-PASQUINCE, 63, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 777,
    d: 'LESLIE SOLIUS VERNERET, 63, Brooklyn',
  },
  {
    i: 778,
    d: 'THEODORE CAMPBELL, 64, The Bronx',
    e: 'January 9, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Theodore_Campbell.jpeg',
  },
  {
    i: 779,
    d: 'STUART COHEN, 64, Staten Island',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stuart_Cohen.jpg',
  },
  {
    i: 780,
    d: 'JACOB CREDELL, 64, Brooklyn',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jacob_Credell.jpg',
  },
  {
    i: 781,
    d: 'ELENA CÁCERES, 64, Queens',
    e: 'March 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elena_Caceres.JPG',
  },
  {
    i: 782,
    d: 'LUIS A. FIGUEROA, 64, Queens',
    e: 'May 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Figueroa.jpg',
  },
  {
    i: 783,
    d: 'ELI KLAUSNER, 64',
    e: 'April 13, 2020',
  },
  {
    i: 784,
    d: 'BERNITA ELAINE RAYFORD-KERSHAW, 64, Queens',
    e: 'January 9, 2021',
  },
  {
    i: 785,
    d: 'ELISABETH “LIS” RUBERT, 64, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elisabeth_Rubert.jpg',
  },
  {
    i: 786,
    d: 'FRANK ABREU, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 787,
    d: 'ANTHONY ACHAN, 64, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 788,
    d: 'SHAMSUDDIN AHMED, 64, Queens',
    e: 'January 18, 2021',
  },
  {
    i: 789,
    d: 'DR. DOUG BASS, 64, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 790,
    d: 'JOHNNY LEE BAYNES, 64, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 791,
    d: 'YANICK ROSE BEAUBRUN, 64, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 792,
    d: 'BORUCH YAAKOV BLOCH, 64, Brooklyn',
  },
  {
    i: 793,
    d: 'LUIS CARDENAS, 64',
  },
  {
    i: 794,
    d: 'RICARDO CASTANEDA, 64, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 795,
    d: 'MARIANO CASTELLANOS, 64, The Bronx',
  },
  {
    i: 796,
    d: 'MANUEL “VICTOR” CHAVEZ, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 797,
    d: 'LEONA COHEN, 64, Brooklyn',
  },
  {
    i: 798,
    d: 'SANTIAGO R. CONDE, 64',
    e: 'April 11, 2020',
  },
  {
    i: 799,
    d: 'IRVING CRUZ, 64, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 800,
    d: 'RABBI YECHEZKEL SHARAGA EIDLIS, 64, Brooklyn',
  },
  {
    i: 801,
    d: 'SOSYA REIZEL FRIEDMAN, 64, Brooklyn',
  },
  {
    i: 802,
    d: 'ROBERT HERMAN, 64, Manhattan',
    e: 'March 20, 2020',
  },
  {
    i: 803,
    d: 'KAREN KELLY, 64, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 804,
    d: 'FREDERICK KING, 64, Queens',
    e: 'February 6, 2021',
  },
  {
    i: 805,
    d: 'DEBORAH KORCZYNSKI, 64, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 806,
    d: 'FRANK LEE, 64, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 807,
    d: 'DIANE PEARL MANNING, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 808,
    d: 'LEROY MARAGH, 64, The Bronx',
  },
  {
    i: 809,
    d: 'MARIE ELIZABETH MELENDEZ, 64, Manhattan',
    e: 'May 1, 2020',
  },
  {
    i: 810,
    d: 'BENNIE MOORE, 64, Brooklyn',
  },
  {
    i: 811,
    d: 'MARIUS NARCISSE, 64, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 812,
    d: 'LEROY NOEL, 64, Brooklyn',
  },
  {
    i: 813,
    d: 'JOSE OCHOA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 814,
    d: 'RENNIE REID, 64, The Bronx',
  },
  {
    i: 815,
    d: 'MARTHA RIVAS, 64, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 816,
    d: 'JORGE SALDARRIAGA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 817,
    d: 'GEDALYA SCHMALBERG, 64, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 818,
    d: 'DUROCHER SYLVAIN, 64, Brooklyn',
  },
  {
    i: 819,
    d: 'GREGORY TREADWELL, 64, The Bronx',
  },
  {
    i: 820,
    d: 'ANA VALERIO, 64',
    e: 'April 3, 2020',
  },
  {
    i: 821,
    d: 'HAL WILLNER, 64, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 822,
    d: 'FRANCHETTE WOODLEY, 64, The Bronx',
  },
  {
    i: 823,
    d: 'EDWARD FREDERICK DOTY, 65',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edward_Doty.jpeg',
  },
  {
    i: 824,
    d: 'GLORIA MARIA ESPERTIN, 65',
    e: 'March 29, 2020',
  },
  {
    i: 825,
    d: 'STEPHANIE GASTON, 65, The Bronx',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stephanie_Gaston.jpg',
  },
  {
    i: 826,
    d: 'LUIS E. MARTINEZ, 65, Queens',
    e: 'May 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Martinez.jpg',
  },
  {
    i: 827,
    d: 'LISA LOUISE MONTANINO, 65, Staten Island',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lisa_Louise_Montanino.png',
  },
  {
    i: 828,
    d: 'PANAYIOTIS “PETER” PANAYIOTOU, 65, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Peter_Panayiotou.jpeg',
  },
  {
    i: 829,
    d: 'PETER PINTO, 65, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 830,
    d: 'NAIM TOME, 65, Brooklyn',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Naim_Tome.jpg',
  },
  {
    i: 831,
    d: 'FERNANDO ZAPATA, 65, Queens',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fernando_Zapata.JPG',
  },
  {
    i: 832,
    d: 'MOSHE EZRA ADLER, 65, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 833,
    d: 'DANIEL F. “DANNY” BAUER JR., 65, The Bronx',
    e: 'July 8, 2020',
  },
  {
    i: 834,
    d: 'ELIEZER “LAZER” BERGER, 65, Brooklyn',
  },
  {
    i: 835,
    d: 'EILISH BOCHNER, 65, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 836,
    d: 'CARLOS CALDERON, 65, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 837,
    d: 'GREGORIO CAMPIS, 65, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 838,
    d: 'SALVATORE “CAPPI” CAPOZUCCA, 65, Brooklyn',
    e: 'May 13, 2020',
  },
  {
    i: 839,
    d: 'PRISCILLA “SWEET PEA” CARROW, 65, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 840,
    d: 'LYNFORD GEORGE CHAMBERS, 65, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 841,
    d: 'JANEE CHRISTIANSEN, 65, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 842,
    d: 'RUTHANN COHEN-AIKENS, 65, Manhattan',
  },
  {
    i: 843,
    d: "DAVID JOSPEH D'ERMILIO, 65",
    e: 'May 13, 2021',
  },
  {
    i: 844,
    d: 'RULX DAGUS, 65, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 845,
    d: 'MARIE CHARLOTTE DESTIN, 65, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 846,
    d: 'YESHAYA ENGLARD, 65, Brooklyn',
    e: 'March 18, 2020',
  },
  {
    i: 847,
    d: 'ROBERT THOMAS FAHS, 65',
    e: 'May 7, 2020',
  },
  {
    i: 848,
    d: 'DAVID OR DOVID FISHER, 65, Brooklyn',
  },
  {
    i: 849,
    d: 'MERCEDES GARCIA, 65',
  },
  {
    i: 850,
    d: 'DEBRA GRIMSLEY, 65',
  },
  {
    i: 851,
    d: 'RABBI YOSEF YITZCHOK GROSSMAN, 65, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 852,
    d: 'CESAR IRIZARRY, 65, The Bronx',
    e: 'July 7, 2020',
  },
  {
    i: 853,
    d: 'ALEYAMMA JOHN, 65, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 854,
    d: 'DEBORAH C. JOSEPH-SAUNDERS, 65, Staten Island',
  },
  {
    i: 855,
    d: 'EDWARD DESMOND KHELAWAN, 65, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 856,
    d: 'NICHOLAS MATTEI, 65',
  },
  {
    i: 857,
    d: 'FLORENCIO ALMAZO “TIO” MORÁN, 65, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 858,
    d: 'QUINTINO ORTEGA, 65, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 859,
    d: 'VICTOR PEI, 65',
    e: 'May 7, 2020',
  },
  {
    i: 860,
    d: 'JOHN PHILLIP, 65, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 861,
    d: 'MARY ELLEN PORTER, 65, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 862,
    d: 'PIERREPAUL RODRIGUE, 65, Brooklyn',
  },
  {
    i: 863,
    d: 'NELSON ROMERO, 65, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 864,
    d: 'GENARO SANCHEZ, 65',
  },
  {
    i: 865,
    d: 'ALPIN SANCHO, 65',
    e: 'April 12, 2020',
  },
  {
    i: 866,
    d: 'ALI SHAIBI, 65, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 867,
    d: 'LAFAYETTE TERRELL, 65, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 868,
    d: 'JUAN LEONARDO TORRES, 65, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 869,
    d: 'ALEXANDER “ALEX” WEIR, 65, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 870,
    d: 'VICTORIA WILHELM, 65, Staten Island',
    e: 'April 18, 2020',
  },
  {
    i: 871,
    d: 'CATHY WILLIAMS, 65',
  },
  {
    i: 872,
    d: 'VALERIE WILSON, 65, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 873,
    d: 'ELOY CALIXTO ANDON, 66, Brooklyn',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eloy_Calixto_Andon.jpg',
  },
  {
    i: 874,
    d: 'MARIA ARAGON, 66, The Bronx',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Aragon.jpeg',
  },
  {
    i: 875,
    d: 'CHARLES DEJESUS, 66, Queens',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_DeJesus.jpg',
  },
  {
    i: 876,
    d: 'DR. MUHAMMAD IFTEKHARUDDIN, 66, Queens',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Muhammad_Iftekharuddin.jpg',
  },
  {
    i: 877,
    d: 'MOHAMMAD SHAMSUZZOHA “PINTU” KHAN, 66, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 878,
    d: 'RUSTICO PASIG, 66, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rustico_Pasig.jpg',
  },
  {
    i: 879,
    d: 'MAUREEN PORTIA ROBINSON-MORGAN, 66, The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maureen_Robinson_Morgan.png',
  },
  {
    i: 880,
    d: 'HECTOR ROMAIN, 66, The Bronx',
    e: 'May 6, 2020',
  },
  {
    i: 881,
    d: 'FRANCES ROBERTA RUDLAND, 66, The Bronx',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frances_Rudland1.jpg',
  },
  {
    i: 882,
    d: 'RAYMOND VÁZQUEZ MUÑOZ, 66',
    e: 'April 7, 2020',
  },
  {
    i: 883,
    d: 'GREGORY ANDREWS, 66, Manhattan',
    e: 'May 12, 2020',
  },
  {
    i: 884,
    d: 'RICHARD AUSTIN JR., 66, Staten Island',
  },
  {
    i: 885,
    d: 'RABBI BENTZION BLUM, 66, Brooklyn',
  },
  {
    i: 886,
    d: 'DIMITRIY BOZHOVSKIY, 66',
    e: 'April 21, 2020',
  },
  {
    i: 887,
    d: 'MARLINO T. CAGAS, 66, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 888,
    d: 'EUCARIO CARDOSO-PABLO, 66, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 889,
    d: 'PAUL DAVID CARY, 66',
    e: 'April 30, 2020',
  },
  {
    i: 890,
    d: 'MARTHA CORTES, 66, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 891,
    d: 'NOACH DEAR, 66, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 892,
    d: 'LAURA DECKELMAN, 66, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 893,
    d: 'ANATHOL DESAMOURS, 66, Brooklyn',
  },
  {
    i: 894,
    d: 'ARNULFO DORVILLE, 66, Brooklyn',
  },
  {
    i: 895,
    d: 'VALERIE FATA, 66',
    e: 'April 11, 2020',
  },
  {
    i: 896,
    d: 'DR. DAVID WALTER FINN, 66, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 897,
    d: 'PHILIP FLORES, 66, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 898,
    d: 'YAAKOV SHMUEL FREILACH, 66, Brooklyn',
  },
  {
    i: 899,
    d: 'ERLIN “FLINSTONE” GALARZA, 66, The Bronx',
  },
  {
    i: 900,
    d: 'MARSHAL “MARSH” GOLBERG, 66, Brooklyn',
    e: 'January 29, 2021',
  },
  {
    i: 901,
    d: 'ISAAC GRAHAM, 66, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 902,
    d: 'YAAKOV YECHIEL GREENWALD, 66, Brooklyn',
  },
  {
    i: 903,
    d: 'YECHIEL MECHEL GROSS, 66, Brooklyn',
  },
  {
    i: 904,
    d: 'STEPHEN JOEL HARDING, 66, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 905,
    d: 'STANLEY HENESON, 66, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 906,
    d: 'ANTHONY HERNANDEZ, 66, The Bronx',
  },
  {
    i: 907,
    d: 'DAVID JAMAL, 66, Brooklyn',
  },
  {
    i: 908,
    d: 'BRAHM KANCHIBHOTLA, 66, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 909,
    d: 'CLAUDIO MALAVE, 66, Manhattan',
  },
  {
    i: 910,
    d: 'SALVATORE MANCUSO, 66',
    e: 'April 30, 2020',
  },
  {
    i: 911,
    d: 'STEPHEN MELNISZYN, 66, Queens',
    e: 'January 16, 2021',
  },
  {
    i: 912,
    d: 'HAZEL PIA MIJARES, 66, Manhattan',
    e: 'March 30, 2020',
  },
  {
    i: 913,
    d: 'ELIZABETH QUINDE, 66, Queens',
    e: 'April 26, 2020',
  },
  {
    i: 914,
    d: 'DR. MARK ALLEN RESPLER, 66, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 915,
    d: 'DR. YVES Y. ROSEUS, 66, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 916,
    d: 'DOVID/ DUVID ARYEH SHOR, 66, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 917,
    d: 'CARL STANBURY, 66, Brooklyn',
  },
  {
    i: 918,
    d: 'VIVIAN MOSS VOELPEL, 66, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 919,
    d: 'ALPHONSE JUNIOR “J.R.” AGOVINO, 67, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alphonse_Agovino.jpeg',
  },
  {
    i: 920,
    d: 'ALFONSO ROBERTO CHANG SEGOVIA, 67, Queens',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alfonso_Chang.jpg',
  },
  {
    i: 921,
    d: 'MICHAEL DIMIN, 67, Brooklyn',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Dimin.JPG',
  },
  {
    i: 922,
    d: 'MARC J. GOODMAN, 67, Manhattan',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marc_Goodman.jpg',
  },
  {
    i: 923,
    d: 'MOHAMED NEZAAM HARUN, 67, Queens',
    e: 'January 3, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mohamed_Nezaam_Harun.jpeg',
  },
  {
    i: 924,
    d: 'PATRICIA HARRIET JACKSON, 67, The Bronx',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Patricia_Jackson.jpg',
  },
  {
    i: 925,
    d: 'VICTORIA LEÓN, 67, The Bronx',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Victoria_Leon.jpg',
  },
  {
    i: 926,
    d: 'PAUL LINDNER, 67, Queens',
    e: 'January 10, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Paul_Lindner.png',
  },
  {
    i: 927,
    d: 'GISELE MENARD, 67, Queens',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gisele_Menard.jpg',
  },
  {
    i: 928,
    d: 'BEATRIZ SOLER, 67, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Beatriz_Soler.jpeg',
  },
  {
    i: 929,
    d: 'DAVID STONE, 67',
    e: 'April 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Stone.jpg',
  },
  {
    i: 930,
    d: 'EDWIN VALENCIA, 67, Brooklyn',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edwin_Valencia.jpg',
  },
  {
    i: 931,
    d: 'RUBY ATKINS, 67, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 932,
    d: 'FERDINAND BENITEZ, 67, Staten Island',
    e: 'January 6, 2021',
  },
  {
    i: 933,
    d: 'KEILA BLANK, 67, Brooklyn',
  },
  {
    i: 934,
    d: 'ANTHONY GENARO “TONY” CERULLO, 67, Brooklyn',
    e: 'January 7, 2021',
  },
  {
    i: 935,
    d: 'ANTONIO CHECO, 67, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 936,
    d: 'JIM CHRISTOFOROU, 67',
    e: 'May 6, 2020',
  },
  {
    i: 937,
    d: 'SCOTT ELIJAH, 67',
    e: 'March 29, 2020',
  },
  {
    i: 938,
    d: 'JOHN STEVEN “JOHNNY” FERRARI, 67, Staten Island',
    e: 'April 10, 2020',
  },
  {
    i: 939,
    d: 'HERLINDA FERREZ, 67, Queens',
    e: 'March 24, 2020',
  },
  {
    i: 940,
    d: 'PATRICIA GEORGE, 67, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 941,
    d: 'ANSTAY GODDARD, 67, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 942,
    d: 'STEVE HANN, 67, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 943,
    d: 'TOIBA JUNGREIS, 67, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 944,
    d: 'ANNA LYRIST, 67, Queens',
    e: 'June 5, 2020',
  },
  {
    i: 945,
    d: 'JULIO I. MIRELES, 67, The Bronx',
    e: 'December 11, 2020',
  },
  {
    i: 946,
    d: 'EMILIANO PADILLA, 67, Queens',
  },
  {
    i: 947,
    d: 'REV. NARCISO PATZAN, 67, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 948,
    d: 'LINDA POPE, 67, The Bronx',
  },
  {
    i: 949,
    d: 'MOHIBUR RAHMAN, 67, Queens',
    e: 'May 11, 2020',
  },
  {
    i: 950,
    d: 'ATAUR RAHMAN DEALER, 67, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 951,
    d: 'JAMES W. REEL JR., 67, Queens',
  },
  {
    i: 952,
    d: 'ZANVIL ROSS, 67, Brooklyn',
  },
  {
    i: 953,
    d: 'DR. GARY SCLAR, 67, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 954,
    d: 'WILLIAM SHACKLEFORD, 67, Manhattan',
  },
  {
    i: 955,
    d: 'ULLAH SHARIAT, 67, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 956,
    d: 'CLAUDIA SHIRLEY, 67, Brooklyn',
  },
  {
    i: 957,
    d: 'GERARD SMITH, 67',
    e: 'May 1, 2020',
  },
  {
    i: 958,
    d: 'IRA STERN, 67, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 959,
    d: 'GLENN FREDERIC VON NOSTITZ, 67, Brooklyn',
    e: 'February 10, 2021',
  },
  {
    i: 960,
    d: 'DR. BARRY WEBBER, 67, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 961,
    d: 'LARRY WILLIAMS, 67, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 962,
    d: 'EMILIO YAGUAL, 67, Queens',
  },
  {
    i: 963,
    d: 'PHYLLIS ANN BURKETT, 68, Brooklyn',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Burkett.jpg',
  },
  {
    i: 964,
    d: 'JUAN M. CABAN, 68, The Bronx',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Caban.jpg',
  },
  {
    i: 965,
    d: 'EZZARD “BURNHAM” CHRISTOPHER, 68, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ezzard_Christopher.jpg',
  },
  {
    i: 966,
    d: 'JOEL DUNN, 68, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 967,
    d: 'RALPH T. GISMONDI, 68',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Gismondi.jpg',
  },
  {
    i: 968,
    d: 'JOSE L. GONZALEZ, 68, Brooklyn',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_L_Gonzalez.jpg',
  },
  {
    i: 969,
    d: 'GLORIA CHRISTINE GREEN, 68, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 970,
    d: 'KENNETH “KENNY” HENDERSON, 68, The Bronx',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Henderson.jpg',
  },
  {
    i: 971,
    d: 'DANIEL “DANNY” KARPUS, 68, Manhattan',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Daniel_Karpus.jpg',
  },
  {
    i: 972,
    d: 'MANUEL J. “MEME” ORTIZ, 68, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Ortiz.jpg',
  },
  {
    i: 973,
    d: 'LLOYD OSBORNE, 68, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 974,
    d: 'REV. BARBARA RICHARDSON, 68, Brooklyn',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Barbara_Richardson.jpg',
  },
  {
    i: 975,
    d: 'MICHAEL A. SCURA, 68, Manhattan',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Scura.jpg',
  },
  {
    i: 976,
    d: 'ROSA VILLADA, 68, The Bronx',
    e: 'May 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosa_Villada.png',
  },
  {
    i: 977,
    d: 'ALTAGRACIA ALVAREZ, 68, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 978,
    d: 'JENNIFER ROBIN ARNOLD, 68, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 979,
    d: 'MARIE YOLAINE BELIZAIRE, 68, Queens',
    e: 'May 14, 2020',
  },
  {
    i: 980,
    d: 'CLAIRE GABRIELLE BIENAIME, 68, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 981,
    d: 'DELORES BOONE, 68, The Bronx',
  },
  {
    i: 982,
    d: 'HUBEL ISIDRO ONOFRE CASTILLO, 68, Queens',
    e: 'April 29, 2020',
  },
  {
    i: 983,
    d: 'BIDYUT B. DAS, 68, Staten Island',
    e: 'April 21, 2020',
  },
  {
    i: 984,
    d: 'MARGARITA REYNEL DUMES, 68, The Bronx',
    e: 'April 20, 2020',
  },
  {
    i: 985,
    d: 'RAFAEL ELI, 68, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 986,
    d: 'LOTTIE LUCILLE GLADDEN, 68, Brooklyn',
    e: 'May 18, 2020',
  },
  {
    i: 987,
    d: 'PATRICK IVOR GLASGOW, 68, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 988,
    d: 'MORDECHAI GOLDSTEIN, 68, Brooklyn',
  },
  {
    i: 989,
    d: 'ELENA GONZALEZ, 68, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 990,
    d: 'VISAUD GOTAY, 68, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 991,
    d: 'GARRY GREENBERG, 68, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 992,
    d: 'IRENA HARTELL, 68, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 993,
    d: 'KAZI HOSSAIN, 68, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 994,
    d: 'YISROEL YAAKOV KAHN, 68, Brooklyn',
  },
  {
    i: 995,
    d: 'LOUIS J. KRUSZKA, 68, The Bronx',
    e: 'January 2, 2021',
  },
  {
    i: 996,
    d: 'JOANN KULISH, 68, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 997,
    d: 'JORGE LOPEZ, 68',
  },
  {
    i: 998,
    d: 'CURLEY JAMES “MAC” MCALPINE, 68, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 999,
    d: 'FREDERIKKE NESSA MEISTER, 68, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1000,
    d: 'GEORGE MENEGATOS, 68, Queens',
    e: 'March 7, 2021',
  },
  {
    i: 1001,
    d: 'ISIDRO MINDIOLAZA, 68, Queens',
  },
  {
    i: 1002,
    d: 'HECTOR MOLINA, 68, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1003,
    d: 'JOYCE C. REESE, 68',
    e: 'May 25, 2020',
  },
  {
    i: 1004,
    d: 'LOURDES RIVERA, 68, Manhattan',
    e: 'January 20, 2021',
  },
  {
    i: 1005,
    d: 'PHYLLIS ROBINSON, 68, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 1006,
    d: 'MOSHE LEIB ROSENBERG, 68, Brooklyn',
  },
  {
    i: 1007,
    d: 'RACHEL ROSENZWEIG, 68, Brooklyn',
  },
  {
    i: 1008,
    d: 'VINCENT CIRELLI “VINNY PEANUTS” SABATINO, 68, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1009,
    d: 'ANA L. SANTANA, 68, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 1010,
    d: 'GARY JOHN SCHIAVI, 68, Staten Island',
    e: 'April 19, 2020',
  },
  {
    i: 1011,
    d: 'MICHAEL SCURA, 68, Manhattan',
  },
  {
    i: 1012,
    d: 'WILLIAM SKINNER, 68, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1013,
    d: 'ANDREA PEDOWITZ SMITH, 68, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 1014,
    d: 'ZEV STERN, 68, Brooklyn',
  },
  {
    i: 1015,
    d: 'CHAI SUTHAMMANONT, 68',
    e: 'May 26, 2020',
  },
  {
    i: 1016,
    d: 'BENILDO TEXEIRA, 68, The Bronx',
  },
  {
    i: 1017,
    d: 'JAMAL UDDIN, 68, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 1018,
    d: 'ANDREA RUIZ VELASCO, 68, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 1019,
    d: 'BRUCE WEISENBERG, 68, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1020,
    d: 'CYNTHIA L. ADAMS, 69, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cynthia_L_Adams.jpeg',
  },
  {
    i: 1021,
    d: 'MARGARET MARGIE BARRETO, 69, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1022,
    d: 'DOMINICK BRANCATO, 69, Staten Island',
    e: 'May 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dominick_Brancato.jpg',
  },
  {
    i: 1023,
    d: 'CARMEN M. CALERO, 69, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Calero.jpeg',
  },
  {
    i: 1024,
    d: 'ROBERT JOSEPH CAVALLO, 69, Brooklyn',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Joseph_Cavello.jpeg',
  },
  {
    i: 1025,
    d: 'DR. JAY MARTIN GALST, 69, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Galst.jpg',
  },
  {
    i: 1026,
    d: 'CORALIA “CORY” GALVEZ, 69, Manhattan',
    e: 'February 14, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Coralia_Galvez.jpg',
  },
  {
    i: 1027,
    d: 'MICHAEL HANKINS, 69, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1028,
    d: 'JOSÉ JARAMILLO, 69, Queens',
    e: 'June 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Jaramillo.jpeg',
  },
  {
    i: 1029,
    d: 'MARILU LOPEZ SANTIAGO, 69, Staten Island',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marilu_Santiago.jpg',
  },
  {
    i: 1030,
    d: 'KOSTA “GUS” STEFANOPOULOS, 69, Queens',
    e: 'January 9, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kosta_Stefanopoulos.jpg',
  },
  {
    i: 1031,
    d: 'CHARLES THORPE, 69, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Thorpe.jpg',
  },
  {
    i: 1032,
    d: 'JOHN PATRICK WHYTE, 69, Staten Island',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Whyte.jpg',
  },
  {
    i: 1033,
    d: 'KAMAL AHMED, 69, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 1034,
    d: 'NATHAN ANTHONY JR., 69, Staten Island',
    e: 'December 2, 2021',
  },
  {
    i: 1035,
    d: 'BIBI AYESHA, 69, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 1036,
    d: 'CLAUDETTE BARR, 69, Staten Island',
  },
  {
    i: 1037,
    d: 'THOMAS E. BELL, 69, The Bronx',
    e: 'April 22, 2020',
  },
  {
    i: 1038,
    d: 'MARK BLUM, 69, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 1039,
    d: 'MERCEDES BURGOS, 69, Queens',
    e: 'March 18, 2020',
  },
  {
    i: 1040,
    d: 'MICHAEL CHARLES BYRNE, 69, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 1041,
    d: 'SALVADOR CALDERON, 69, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 1042,
    d: 'FRANCISCO CANARTE, 69, Queens',
  },
  {
    i: 1043,
    d: 'RAMON CARANDANG, 69, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1044,
    d: 'ERIC CHASANOFF, 69',
    e: 'May 5, 2020',
  },
  {
    i: 1045,
    d: 'DEWAN AFJOL CHOWDHURY, 69',
  },
  {
    i: 1046,
    d: 'MYLES COKER, 69, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1047,
    d: 'OLIVIA CRUM, 69, Queens',
  },
  {
    i: 1048,
    d: 'PAULINE DELGADO, 69, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 1049,
    d: 'PHILIP FOGLIA, 69, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 1050,
    d: 'MOSHE MENDEL GLICK, 69, Brooklyn',
  },
  {
    i: 1051,
    d: 'JOEL S. GOLDBERG, 69, Staten Island',
    e: 'May 6, 2020',
  },
  {
    i: 1052,
    d: 'JUAN GONZALEZ-GARCIA, 69, Staten Island',
    e: 'April 26, 2020',
  },
  {
    i: 1053,
    d: 'ANDREW “ANDY” GONZÁLEZ, 69, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 1054,
    d: 'RUTH ELAINE HAMMER, 69, Brooklyn',
    e: 'January 15, 2021',
  },
  {
    i: 1055,
    d: 'RABBI MOSHE SHAUL HARFENES, 69, Brooklyn',
  },
  {
    i: 1056,
    d: 'OLSON HART, 69, The Bronx',
  },
  {
    i: 1057,
    d: 'BAMBANG HERMANTO, 69, Queens',
  },
  {
    i: 1058,
    d: 'PEARSON JORDAN, 69, Brooklyn',
  },
  {
    i: 1059,
    d: 'MOSHE SHMIEL KLEIN, 69, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1060,
    d: 'YITZHAK LEVY LEVYAWAMI, 69, Brooklyn',
  },
  {
    i: 1061,
    d: 'ALLEN Y. LEW, 69, Queens',
    e: 'June 23, 2020',
  },
  {
    i: 1062,
    d: 'MECEO RAY MCEADDY, 69, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 1063,
    d: 'ALAN MERRILL, 69, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1064,
    d: 'ABBEY METZGER, 69, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1065,
    d: 'ARTURO MILLAN, 69, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 1066,
    d: 'IRIS NIEVES-MITCHELL, 69',
    e: 'April 6, 2020',
  },
  {
    i: 1067,
    d: 'DOVID OLEWSKI, 69, Brooklyn',
  },
  {
    i: 1068,
    d: 'CESAR E. ORTIZ, 69, Staten Island',
  },
  {
    i: 1069,
    d: 'BARRY PENN, 69',
    e: 'April 4, 2020',
  },
  {
    i: 1070,
    d: 'HARRICHAND PERSAUD, 69, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1071,
    d: 'SHMIEL YITZCHOK RABI, 69, Brooklyn',
  },
  {
    i: 1072,
    d: 'HENRY ALLAN “KEITH” RIVERS, 69, Brooklyn',
    e: 'December 16, 2020',
  },
  {
    i: 1073,
    d: 'GLADYS M. “NENA” SANCHEZ, 69, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 1074,
    d: 'ANDREA SEARS, 69, Brooklyn',
  },
  {
    i: 1075,
    d: 'YISROEL/YISRAEL SILBERSTEIN, 69, Brooklyn',
  },
  {
    i: 1076,
    d: 'JANET J. SMITH, 69, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1077,
    d: 'WINSTON STEPHEN SWAN, 69, The Bronx',
    e: 'April 24, 2020',
  },
  {
    i: 1078,
    d: 'ANTONIO DEL VALLE, 69, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1079,
    d: 'CHRISTOPHER ALLAN WRIGHT, 69, Queens',
    e: 'May 9, 2020',
  },
  {
    i: 1080,
    d: 'CARLOS “CANDALLO” ACEVEDO, 70, The Bronx',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carlos_Acevedo.png',
  },
  {
    i: 1081,
    d: 'SAMUEL W. “SAM THE FENCE MAN” ARBEENY, 70, Staten Island',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Samuel_Arbeeny.png',
  },
  {
    i: 1082,
    d: 'KAREN CECILIA FAULKNER, 70, Queens',
    e: 'December 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Karen_Faulkner.jpg',
  },
  {
    i: 1083,
    d: 'VERONA FRASER, 70, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Verona_Fraser.JPG',
  },
  {
    i: 1084,
    d: 'BEVERLY RUBOCK GRAY, 70, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Beverly_Gray.jpeg',
  },
  {
    i: 1085,
    d: 'FRANK P. LUMINI, 70, Staten Island',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frank_lumini.jpg',
  },
  {
    i: 1086,
    d: 'PAUL JOSEPH MCELEARNEY, 70',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Paul_McElearney.jpg',
  },
  {
    i: 1087,
    d: 'ALFREDO MESCALLADO JR., 70, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alfredo_Mescallado.jpg',
  },
  {
    i: 1088,
    d: 'SHIRLEY ANN MILLER, 70, Manhattan',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Shirley_Ann_Miller.JPG',
  },
  {
    i: 1089,
    d: 'LIAQUAT MOHAMMED, 70, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Liaquat_Mohammed.png',
  },
  {
    i: 1090,
    d: 'JUDY RICHHEIMER, 70, Manhattan',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judy_Richheimer.jpg',
  },
  {
    i: 1091,
    d: 'PABLO GUSTAVO ROSAS, 70, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Rosas.jpeg',
  },
  {
    i: 1092,
    d: 'ERNESTO “ERNIE” SANCHEZ, 70, Queens',
    e: 'March 6, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernesto_Sanchez.jpeg',
  },
  {
    i: 1093,
    d: 'LUIS SANTOS, 70, Manhattan',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Santos.jpg',
  },
  {
    i: 1094,
    d: 'JOSEPH DANIEL VOLCY, 70, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Daniel_Volcy.jpeg',
  },
  {
    i: 1095,
    d: 'AHMED ALI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 1096,
    d: 'ELIYAHU MEIR BALLABON, 70, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1097,
    d: 'CHARLES BERENGUER JR., 70, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1098,
    d: 'BETZALEL BERTRAM, 70, Brooklyn',
  },
  {
    i: 1099,
    d: 'YOSEF BOKCHIN, 70, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1100,
    d: 'RABBI WOLF (VOLF) BRAUN, 70, Brooklyn',
  },
  {
    i: 1101,
    d: 'JAMES LAWRENCE BUTTENWIESER, 70, Manhattan',
    e: 'March 17, 2021',
  },
  {
    i: 1102,
    d: 'RAUL CAMBIAN, 70, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1103,
    d: 'THOMAS “TOMMY” CARNEY, 70, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 1104,
    d: 'ERESMILDO CASTIBLANCO, 70, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1105,
    d: 'DR. YDELFONSO DECOO, 70, Manhattan',
    e: 'April 23, 2020',
  },
  {
    i: 1106,
    d: 'DANIEL M. GARCIA, 70, The Bronx',
    e: 'June 4, 2020',
  },
  {
    i: 1107,
    d: 'YONATAN BINYOMIN GOLDBERGER, 70, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    i: 1108,
    d: 'RABBI MOSHE GREENWALD, 70, Brooklyn',
  },
  {
    i: 1109,
    d: 'REV. SIDNEY HARGRAVE, 70, The Bronx',
  },
  {
    i: 1110,
    d: 'RABBI DAVID JEMAL, 70, Brooklyn',
  },
  {
    i: 1111,
    d: 'ALEX KLEIN, 70',
    e: 'March 28, 2020',
  },
  {
    i: 1112,
    d: 'LEIBEL LEDERMAN, 70',
    e: 'May 20, 2020',
  },
  {
    i: 1113,
    d: 'SHAYA LETIMAN, 70, Brooklyn',
  },
  {
    i: 1114,
    d: 'SHIRLEY MILLER, 70',
  },
  {
    i: 1115,
    d: 'MANUEL MIZHQUIRI, 70, Queens',
  },
  {
    i: 1116,
    d: 'CARLO NATHAN, 70, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1117,
    d: 'DR. TOMAS PATTUGALAN, 70, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 1118,
    d: 'JOSEPH T. PELLETTERI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 1119,
    d: 'RABBI YISROEL MENACHEM ROSENBERG, 70, Brooklyn',
  },
  {
    i: 1120,
    d: 'ARLENE SIMON, 70',
  },
  {
    i: 1121,
    d: 'SALVATORE TERRANOVA, 70, Brooklyn',
    e: 'April 9, 2021',
  },
  {
    i: 1122,
    d: 'JOHN TURNER, 70, Staten Island',
  },
  {
    i: 1123,
    d: 'LORNA WILKINSON, 70, Queens',
  },
  {
    i: 1124,
    d: 'LORRAINE JOY BAGWELL, 71, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lorraine_Bagwell.JPG',
  },
  {
    i: 1125,
    d: 'MICHAEL A. COSTANZO, 71, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_A_Costanzo.jpg',
  },
  {
    i: 1126,
    d: 'LARRY DEVITO, 71, Brooklyn',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Larry_DeVito.JPG',
  },
  {
    i: 1127,
    d: 'LEAH DOMBE, 71, Brooklyn',
    e: 'February 7, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Leah_Dombe.jpeg',
  },
  {
    i: 1128,
    d: 'HARVEY CHESTER FUCHS, 71',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harvey_Fuchs.jpg',
  },
  {
    i: 1129,
    d: 'LEROY HAMMETT, 71, The Bronx',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Leroy_Hammett.jpeg',
  },
  {
    i: 1130,
    d: 'JAY HYMAN, 71',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Hyman.jpg',
  },
  {
    i: 1131,
    d: 'GARY JAEGER, 71, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gary_Jaeger.jpg',
  },
  {
    i: 1132,
    d: 'ELIZABETH LAMBERTY, 71, The Bronx',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_Lamberty.jpg',
  },
  {
    i: 1133,
    d: 'MATEO RIVERA, 71, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 1134,
    d: 'MAHMOODA SHAHEEN, 71, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mahmooda_Shaheen.jpg',
  },
  {
    i: 1135,
    d: 'ROSEMARY “RORY” SISCO, 71, Queens',
    e: 'March 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Sisco.jpg',
  },
  {
    i: 1136,
    d: 'ANTONIO SOLOMON, 71, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Solomon.jpeg',
  },
  {
    i: 1137,
    d: 'BRADLEY STEWART, 71, Brooklyn',
    e: 'January 9, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Bradley_Stewart.jpg',
  },
  {
    i: 1138,
    d: 'ELOY BENITEZ, 71, The Bronx',
  },
  {
    i: 1139,
    d: 'RAFAEL LEONARD BLACK, 71, Brooklyn',
    e: 'May 15, 2020',
  },
  {
    i: 1140,
    d: 'MENACHEM NACHUM BRONSTEIN, 71, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1141,
    d: 'SHMUEL DEITEL, 71, Brooklyn',
  },
  {
    i: 1142,
    d: 'MARTIN JOHN “DOUGIE” DOUGLAS, 71, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1143,
    d: 'DOVID FARKASH, 71, Brooklyn',
  },
  {
    i: 1144,
    d: 'YVONNE FEDERICO, 71, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 1145,
    d: 'CAROLYN FRAZIER, 71, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 1146,
    d: 'ZELIG GOTTLIEB, 71, Brooklyn',
  },
  {
    i: 1147,
    d: 'AUDREY ANNE HAYES, 71',
    e: 'April 7, 2020',
  },
  {
    i: 1148,
    d: 'SUSAN INGRAM, 71, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 1149,
    d: 'HENRY ARTHUR JACKSON, 71, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1150,
    d: 'VINCENT KELLEHER, 71, Staten Island',
    e: 'April 14, 2020',
  },
  {
    i: 1151,
    d: 'CHARLES KLEINBERG, 71, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    i: 1152,
    d: 'YVES LAFOND, 71, Queens',
  },
  {
    i: 1153,
    d: 'RUDY LAZAZZERA, 71, The Bronx',
    e: 'November 4, 2020',
  },
  {
    i: 1154,
    d: 'JOHN C. LEONARD, 71, The Bronx',
  },
  {
    i: 1155,
    d: 'FRANCESCO “FRANCO” LISI, 71',
  },
  {
    i: 1156,
    d: 'DESIREE MOORE, 71, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1157,
    d: 'BOGDAN PALKA, 71, Brooklyn',
  },
  {
    i: 1158,
    d: 'JAMES PUYOL, 71, Brooklyn',
  },
  {
    i: 1159,
    d: 'MEHMOODA REHMAN, 71, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1160,
    d: 'CYNTHIA RICHARDSON HAYES, 71, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 1161,
    d: 'MIGDALIA RODRIGUEZ, 71, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 1162,
    d: 'NATHANIEL ROYALL JR., 71, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1163,
    d: 'DAVID SACKOFF, 71, The Bronx',
    e: 'June 9, 2020',
  },
  {
    i: 1164,
    d: 'ALEXANDRA SAKS, 71',
    e: 'April 3, 2020',
  },
  {
    i: 1165,
    d: 'MICHAEL DAVID SORKIN, 71, Manhattan',
    e: 'March 26, 2020',
  },
  {
    i: 1166,
    d: 'WILLIAM TROY, 71, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1167,
    d: 'PIO COSTALES VELASCO, 71, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1168,
    d: 'RONALD VINCENT WAITE, 71, Staten Island',
    e: 'May 12, 2020',
  },
  {
    i: 1169,
    d: 'RABBI YAAKOV MORDECHAI WEINBERGER, 71, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 1170,
    d: 'ANGELA ZEMAN, 71, Manhattan',
    e: 'April 30, 2020',
  },
  {
    i: 1171,
    d: 'ROSE ZUBKO, 71, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    i: 1172,
    d: 'NOREEN JOHNSON, 72, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Noreen_Johnson.jpg',
  },
  {
    i: 1173,
    d: 'JOAQUIN LEON, 72',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joaquin_Leon.jpeg',
  },
  {
    i: 1174,
    d: 'RICHARD LITKOFSKY, 72, Brooklyn',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Litofsky.jpg',
  },
  {
    i: 1175,
    d: 'CARMEN PACHECO, 72, The Bronx',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Pacheco.JPG',
  },
  {
    i: 1176,
    d: 'DOMINGO PEREZ RIVERA, 72, Brooklyn',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Domingo_Perez_Rivera.jpg',
  },
  {
    i: 1177,
    d: 'EILEEN RUIZ, 72, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eileen_Ruiz.jpg',
  },
  {
    i: 1178,
    d: 'ESTELITA ATIENZA SOLOMON, 72, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Estelita_Solomon.jpeg',
  },
  {
    i: 1179,
    d: 'JOSEPH TRANCHINA, 72',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Tranchina.jpg',
  },
  {
    i: 1180,
    d: 'CONCEPCION ACOSTA, 72, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1181,
    d: 'BEVERLY ARTZ, 72',
    e: 'April 7, 2020',
  },
  {
    i: 1182,
    d: 'ANNETTA BANKS, 72, Queens',
    e: 'November 11, 2020',
  },
  {
    i: 1183,
    d: 'JUDITH EVANGELINE BERNARD, 72, Queens',
  },
  {
    i: 1184,
    d: 'NORMAN BLOOMFIELD, 72, Brooklyn',
  },
  {
    i: 1185,
    d: 'ELIYAHU CHAIM BRACH, 72, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1186,
    d: 'SUSAN BRODY, 72, Brooklyn',
    e: 'November 15, 2020',
  },
  {
    i: 1187,
    d: 'ROBBY BROWNE, 72, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1188,
    d: 'JOHN CALDER, 72, Queens',
  },
  {
    i: 1189,
    d: 'ROBERT CRAWFORD, 72, Manhattan',
    e: 'March 30, 2020',
  },
  {
    i: 1190,
    d: 'MARY DILLARD-CARTER, 72, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1191,
    d: 'JOSEPH DONOFRIO, 72, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1192,
    d: 'REGINALD DOWDY, 72, Manhattan',
  },
  {
    i: 1193,
    d: 'MICHAEL N. EDELMAN, 72, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1194,
    d: 'MARGARET ESSELBORN, 72, Staten Island',
    e: 'May 3, 2020',
  },
  {
    i: 1195,
    d: 'THELMA ESTEVEZ, 72, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1196,
    d: 'MARY EVANS, 72, Staten Island',
  },
  {
    i: 1197,
    d: 'ALAN AARON FINDER, 72',
    e: 'March 24, 2020',
  },
  {
    i: 1198,
    d: 'IAN FINKLE, 72, Brooklyn',
    e: 'October 16, 2020',
  },
  {
    i: 1199,
    d: 'MARK J. FITZPATRICK SR., 72, Staten Island',
    e: 'March 24, 2021',
  },
  {
    i: 1200,
    d: 'ANN GRIER, 72',
  },
  {
    i: 1201,
    d: 'MESHILEM ISUR HERSHKO, 72, Brooklyn',
  },
  {
    i: 1202,
    d: 'LEON SANDY HODGE, 72, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1203,
    d: 'YISROEL HOROWITZ, 72, Brooklyn',
  },
  {
    i: 1204,
    d: 'DR. STEPHEN KAMHOLZ, 72, Brooklyn',
    e: 'June 11, 2020',
  },
  {
    i: 1205,
    d: 'DR. LAWRENCE CARL KATZENSTEIN, 72',
  },
  {
    i: 1206,
    d: 'DR. JAY KAVET, 72, Manhattan',
    e: 'March 23, 2020',
  },
  {
    i: 1207,
    d: 'MALVINA KIZHNET, 72, Queens',
    e: 'February 11, 2021',
  },
  {
    i: 1208,
    d: 'NOCHUM KLEIN, 72, Brooklyn',
  },
  {
    i: 1209,
    d: 'ADAM KOVACS, 72, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1210,
    d: 'YENTA LAVY, 72, Brooklyn',
  },
  {
    i: 1211,
    d: 'RABBI DON YOEL LEVY, 72, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1212,
    d: 'OLGA MEMBRENO, 72, Queens',
    e: 'January 1, 2021',
  },
  {
    i: 1213,
    d: 'NEMECIO MENDEZ, 72, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1214,
    d: 'ELISEO NAVARRO, 72, Manhattan',
    e: 'January 16, 2022',
  },
  {
    i: 1215,
    d: 'LINDA ORTIZ, 72, Staten Island',
  },
  {
    i: 1216,
    d: 'ELBA PABEY, 72, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1217,
    d: 'ELBA PABEY, 72, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1218,
    d: 'RALPH PASTENA, 72, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1219,
    d: 'DIANE L. RIEGGER, 72, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1220,
    d: 'GUILLERMO RIVERA, 72, The Bronx',
    e: 'January 22, 2021',
  },
  {
    i: 1221,
    d: 'RITA SCARSO, 72, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1222,
    d: 'DIANE M. SCHWAB, 72, Staten Island',
    e: 'May 8, 2020',
  },
  {
    i: 1223,
    d: 'GLORIA SMALL-JONES, 72, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1224,
    d: 'BENJAMIN SMALLS, 72',
    e: 'May 7, 2020',
  },
  {
    i: 1225,
    d: 'GOLDIE THOMSON, 72, Brooklyn',
  },
  {
    i: 1226,
    d: 'ROBERTO S. TOBIAS SR., 72, Queens',
    e: 'May 30, 2020',
  },
  {
    i: 1227,
    d: 'CARMEN VAZQUEZ, 72, Brooklyn',
    e: 'January 27, 2021',
  },
  {
    i: 1228,
    d: 'JEAN BARBARA WEISMAN, 72, Brooklyn',
  },
  {
    i: 1229,
    d: 'AHARON WEISS, 72, Brooklyn',
  },
  {
    i: 1230,
    d: 'ROSARIO WRIGHT, 72, Queens',
    e: 'March 10, 2021',
  },
  {
    i: 1231,
    d: 'DOROTHY YUELLES, 72, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1232,
    d: 'RABBI MOSHE ZAKLIKOFSKY, 72, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1233,
    d: 'FRANKIE ALLI, 73, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frankie_Alli.jpg',
  },
  {
    i: 1234,
    d: 'ISABELLA ANN AXELROD, 73, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Isabella_Axelrod.jpg',
  },
  {
    i: 1235,
    d: 'ISMAEL CABRERA, 73, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ismael_Cabrera.jpg',
  },
  {
    i: 1236,
    d: 'FELICIA CACERES, 73, Manhattan',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Felicia_Caceres.jpeg',
  },
  {
    i: 1237,
    d: 'STUART RICHARD COHEN, 73',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stuart_Richard_Cohen.jpg',
  },
  {
    i: 1238,
    d: 'ANTHONY C. DAZZO, 73, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_C_Dazzo.JPG',
  },
  {
    i: 1239,
    d: 'ROSEMARY C. GUERRERO, 73, Queens',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Guerrero.jpeg',
  },
  {
    i: 1240,
    d: 'MICHAEL WALLACE HERRON, 73, Manhattan',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Herron.jpg',
  },
  {
    i: 1241,
    d: 'ARTHUR LACKER, 73',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Lacker.PNG',
  },
  {
    i: 1242,
    d: 'CORKY LEE, 73, Queens',
    e: 'January 27, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Corky_Lee.png',
  },
  {
    i: 1243,
    d: 'INDARJIT MARAJ, 73, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Indarjit_Maraj.jpg',
  },
  {
    i: 1244,
    d: 'RONALD “RONNIE” MCKIE, 73, Brooklyn',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ronald_McKie.jpeg',
  },
  {
    i: 1245,
    d: 'ALBERT “AL” PETROCELLI SR., 73, Staten Island',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Albert_Petrocelli.jpg',
  },
  {
    i: 1246,
    d: 'RAYMOND ROSADO SR., 73, The Bronx',
    e: 'May 31, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Raymond_Rosado.jpg',
  },
  {
    i: 1247,
    d: 'LUZ A. SANTIAGO, 73, The Bronx',
    e: 'January 30, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luz_Santiago.jpeg',
  },
  {
    i: 1248,
    d: 'ALAN SCHOENBERG, 73, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alan_Schoenberg.jpeg',
  },
  {
    i: 1249,
    d: 'EMILIO SOSA, 73, The Bronx',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emilio_Sosa.jpg',
  },
  {
    i: 1250,
    d: 'MOSHE AUGENSTEIN, 73, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1251,
    d: 'YOSSI BORENSTEIN, 73, Brooklyn',
  },
  {
    i: 1252,
    d: 'LORRAINE CARLISLE, 73, The Bronx',
  },
  {
    i: 1253,
    d: 'RENEE DIAMOND, 73',
    e: 'May 11, 2020',
  },
  {
    i: 1254,
    d: 'STEVEN MARK EDWARDS, 73, Manhattan',
    e: 'April 8, 2020',
  },
  {
    i: 1255,
    d: 'RABBI BORUCH HERSH FEDER, 73, Brooklyn',
  },
  {
    i: 1256,
    d: 'GEORGIANNA GLOSE, 73, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 1257,
    d: 'DR. JAMES T. GOODRICH, 73',
    e: 'March 30, 2020',
  },
  {
    i: 1258,
    d: 'HILLARY GREGG, 73, Queens',
    e: 'May 3, 2020',
  },
  {
    i: 1259,
    d: 'RICHARD J. GUASTELLA, 73, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1260,
    d: 'CAROLE ANN HEWITT HAMILTON, 73',
    e: 'April 12, 2020',
  },
  {
    i: 1261,
    d: 'TZVI DOV ITZKOWITZ, 73, Brooklyn',
  },
  {
    i: 1262,
    d: 'ALBA JULIANO, 73, Staten Island',
    e: 'March 25, 2020',
  },
  {
    i: 1263,
    d: 'SHLOMO TZVI KONIG, 73, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1264,
    d: 'SALOMON A. LEGARDA SR., 73',
  },
  {
    i: 1265,
    d: 'FLORENCE LEVESQUE, 73, Manhattan',
  },
  {
    i: 1266,
    d: 'JOHN LIEVANO, 73, Staten Island',
    e: 'February 24, 2021',
  },
  {
    i: 1267,
    d: 'GEORGE R. MAIRA, 73, Staten Island',
    e: 'March 30, 2020',
  },
  {
    i: 1268,
    d: 'JOSEPH MATERNA, 73, Staten Island',
    e: 'January 27, 2021',
  },
  {
    i: 1269,
    d: 'EDWARD MAZZA, 73, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 1270,
    d: 'RABBI CHAIM MERTZ, 73, Brooklyn',
  },
  {
    i: 1271,
    d: 'ARNOLD FRANCIS OBEY, 73, Staten Island',
    e: 'March 22, 2020',
  },
  {
    i: 1272,
    d: 'ANGELO OLIVERI, 73, Staten Island',
    e: 'March 11, 2021',
  },
  {
    i: 1273,
    d: 'JOSE LUIS OTERO, 73, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 1274,
    d: 'KAITLYN L. PATTERSON, 73, The Bronx',
  },
  {
    i: 1275,
    d: 'YISRAEL ROCHLITZ, 73, Brooklyn',
  },
  {
    i: 1276,
    d: 'MALKA SCHMELTZER, 73, Brooklyn',
  },
  {
    i: 1277,
    d: 'GOLDA “GOLDIE” SHIFRIN, 73, Brooklyn',
  },
  {
    i: 1278,
    d: 'FRANK STEARNS, 73, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1279,
    d: 'LAURA TAYLOR HOWELL, 73, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 1280,
    d: 'ANITA TERZIAN-TITUS, 73, Queens',
    e: 'January 20, 2021',
  },
  {
    i: 1281,
    d: 'LOLITA “LELY” TORRES, 73, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1282,
    d: 'JOE TORRES, 73, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 1283,
    d: 'MAXIMO UMAHAG, 73, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1284,
    d: 'LUIS VILLARREAL, 73, Queens',
  },
  {
    i: 1285,
    d: 'RODOLFO PEREZ “RUDY” ACEVEDO, 74, Queens',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rodolfo_Acevedo.jpg',
  },
  {
    i: 1286,
    d: 'CHRISTOS ARSENIS, 74, Queens',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Christos_Arsenis.png',
  },
  {
    i: 1287,
    d: 'LOUIS C. “MACGYVER” BARBATO JR., 74, Staten Island',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Barbato.jpg',
  },
  {
    i: 1288,
    d: 'IVONNE “SANDY” BENOIT, 74, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ivonne_Benoit.jpg',
  },
  {
    i: 1289,
    d: 'DONATO JOSEPH CANNELLA, 74, Staten Island',
    e: 'March 4, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Donato_Joseph_Cannella.png',
  },
  {
    i: 1290,
    d: 'ROSEMARY GRILLO CLEMENTI, 74, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1291,
    d: 'CARMEN CRUZ, 74, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Cruz.jpg',
  },
  {
    i: 1292,
    d: 'JOHN DUNSTON JR., 74, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dunston_Jr.png',
  },
  {
    i: 1293,
    d: 'FELIX ESCOTO, 74, The Bronx',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Felix_Escoto.jpeg',
  },
  {
    i: 1294,
    d: 'JOSEPH KEN MINTAH, 74, The Bronx',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Mintah.jpg',
  },
  {
    i: 1295,
    d: 'THEODORE “TED” MONETTE JR., 74',
    e: 'March 30, 2020',
  },
  {
    i: 1296,
    d: 'ARTHUR “ARTIE” NELSON, 74, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Nelson.jpeg',
  },
  {
    i: 1297,
    d: 'GREGORY PENNY SR., 74, The Bronx',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gregory_Penny.jpg',
  },
  {
    i: 1298,
    d: 'DAVID P. PEREZ, 74, The Bronx',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez2.jpg',
  },
  {
    i: 1299,
    d: 'PEGGY WILTROUT, 74, Manhattan',
    e: 'February 25, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Peggy_Wiltrout.jpg',
  },
  {
    i: 1300,
    d: 'FOOK SHEONG WONG, 74, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fook_Sheong_Wong.jpg',
  },
  {
    i: 1301,
    d: 'JOSE BOLIVAR AREVALO, 74, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1302,
    d: 'STUART BAKER, 74',
    e: 'March 29, 2020',
  },
  {
    i: 1303,
    d: 'JERI ELLEN BILUS, 74, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 1304,
    d: 'DAVID ERNST, 74',
  },
  {
    i: 1305,
    d: 'LOUISE FONTAO, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1306,
    d: 'JOHN “JACK” GREGORIE, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1307,
    d: 'WILLIAM HELMREICH, 74',
    e: 'March 28, 2020',
  },
  {
    i: 1308,
    d: 'JOSEPH E. “JOE” JOYCE, 74, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 1309,
    d: 'MARSHA KRAMER, 74, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1310,
    d: 'EFRAIM DOVBER MAJESKI, 74, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1311,
    d: 'ROBERT MALLER, 74, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1312,
    d: 'ALBA MIRANDA, 74, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1313,
    d: 'TEODORO MIRANDA, 74, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1314,
    d: 'JOSE RODRIGUEZ MUÑOZ, 74, Brooklyn',
  },
  {
    i: 1315,
    d: 'FRANKLIN V. ORDOÑEZ, 74, The Bronx',
    e: 'April 28, 2020',
  },
  {
    i: 1316,
    d: 'BENIGNO “BENNY” PEREZ JR., 74, Queens',
  },
  {
    i: 1317,
    d: 'RAFAEL PICA, 74, Staten Island',
    e: 'February 23, 2021',
  },
  {
    i: 1318,
    d: 'DR. BREDY PIERRE-LOUIS JR., 74',
  },
  {
    i: 1319,
    d: 'JOEL REVZEN, 74',
    e: 'May 25, 2020',
  },
  {
    i: 1320,
    d: 'LUIS M. RICO, 74, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 1321,
    d: 'DAVID ALLEN WOLIN, 74',
    e: 'March 30, 2020',
  },
  {
    i: 1322,
    d: 'THOMAS “TC” CRATER JR., 75, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Crater.png',
  },
  {
    i: 1323,
    d: 'JAY GOLDSTEIN, 75, Manhattan',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Goldstein.jpg',
  },
  {
    i: 1324,
    d: 'MAVIS HAYWOOD, 75, Brooklyn',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mavis_Haywood.png',
  },
  {
    i: 1325,
    d: 'FAREEDA ANN KADWANI, 75, The Bronx',
    e: 'April 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Ann_Kadwani.jpg',
  },
  {
    i: 1326,
    d: 'DALE RICHARD PON, 75, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dale_Richard_Pon.jpg',
  },
  {
    i: 1327,
    d: 'JANINE SOLEIL, 75, Brooklyn',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Janine_Soleil.jpg',
  },
  {
    i: 1328,
    d: 'GEORGE E. STONEY, 75, Brooklyn',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/George_Stoney.jpg',
  },
  {
    i: 1329,
    d: 'JAMES C. THOMPSON, 75, Brooklyn',
    e: 'May 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_Thompson.jpg',
  },
  {
    i: 1330,
    d: 'ALFRED ANTHONY BAFUMI, 75, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1331,
    d: 'REMI “CHARLIE” BEAUSEJOUR, 75, Staten Island',
    e: 'April 8, 2021',
  },
  {
    i: 1332,
    d: 'MAE CHAKRABARTY, 75, Queens',
    e: 'December 21, 2020',
  },
  {
    i: 1333,
    d: 'JUDITH L. COULSTON, 75, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1334,
    d: 'ARMAND D’AVIGNON, 75, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1335,
    d: 'YITZ “ADAM” FRIEDMAN, 75, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 1336,
    d: 'MARCO ANIBAL GORDILLO ULLOA, 75, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1337,
    d: 'ANA ISABEL HENAO, 75, Queens',
  },
  {
    i: 1338,
    d: 'ABIGIAL HERNANDEZ, 75, Brooklyn',
  },
  {
    i: 1339,
    d: 'YOLANDA HUERTERO, 75, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 1340,
    d: 'RABBI SHLOMO TZVI KOENIG, 75, Brooklyn',
  },
  {
    i: 1341,
    d: 'EDWARD LABOY, 75',
    e: 'April 14, 2020',
  },
  {
    i: 1342,
    d: 'CARMEN MANTO, 75, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1343,
    d: 'ALICEN MCKEON, 75, Staten Island',
    e: 'April 13, 2020',
  },
  {
    i: 1344,
    d: 'CHAYA MOTCHKIN, 75, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1345,
    d: 'CARLOS ORTIZ, 75, Brooklyn',
  },
  {
    i: 1346,
    d: 'DR. AZIZUR RAHMAN, 75, Manhattan',
  },
  {
    i: 1347,
    d: 'PHYLLIS RIVERA, 75, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 1348,
    d: 'LUIS RUIZ, 75, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 1349,
    d: 'MEYER SCHEINBERG, 75, Brooklyn',
  },
  {
    i: 1350,
    d: 'RUCHEL GITEL SCHWARTZ, 75, Brooklyn',
  },
  {
    i: 1351,
    d: 'MOSHE STAMM, 75, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1352,
    d: 'STEVE STEINER, 75, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1353,
    d: 'ESTHER STERN, 75, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1354,
    d: 'FRANK TAORMINA, 75, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 1355,
    d: 'ROSELIO ANTONIA TAPIA, 75, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1356,
    d: 'MARY SUE ZIMMERMAN IUCOPILLA, 75, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1357,
    d: 'ANTHONY PETER BONELLI, 76, The Bronx',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Bonelli.JPG',
  },
  {
    i: 1358,
    d: 'RUTH MAZYCK “DEACON CORBETT” CORBETT, 76, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ruth_Corbett.jpeg',
  },
  {
    i: 1359,
    d: 'PEDRO FLORES, 76, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Flores.jpeg',
  },
  {
    i: 1360,
    d: 'LORENA “LORI” MCDONALD, 76',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lori_McDonald.jpg',
  },
  {
    i: 1361,
    d: 'ELBA ORTIZ, 76, Manhattan',
    e: 'March 24, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elba_Ortiz.jpg',
  },
  {
    i: 1362,
    d: 'JOEL LAWRENCE SHATZKY, 76, Brooklyn',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Shatzky.jpg',
  },
  {
    i: 1363,
    d: 'DAVID STRUG, 76, Brooklyn',
    e: 'June 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Strug.JPG',
  },
  {
    i: 1364,
    d: 'ROSA TRIGUERO, 76, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosa_Triguero.png',
  },
  {
    i: 1365,
    d: 'MARYANN BAKER, 76, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 1366,
    d: 'DOROTHY BRUNETTI, 76, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1367,
    d: 'SALVATORE “SAL” CAMPO, 76, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 1368,
    d: 'ALFRED COLOMBAN, 76, Manhattan',
    e: 'December 3, 2020',
  },
  {
    i: 1369,
    d: 'RICHARD “RICHIE” COMMESSO, 76, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 1370,
    d: 'GLADYS DIAZ, 76, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1371,
    d: 'BETTY GIBBS, 76, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 1372,
    d: 'LANCELOT NEWBOLT HALL, 76, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 1373,
    d: 'MOHAMMAD IBRAHIM, 76, Brooklyn',
  },
  {
    i: 1374,
    d: 'LESTER JAMES, 76',
    e: 'April 16, 2020',
  },
  {
    i: 1375,
    d: 'MADELINE KRIPKE, 76, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 1376,
    d: 'GUY A. LAVIGNERA, 76, Staten Island',
    e: 'May 5, 2020',
  },
  {
    i: 1377,
    d: 'DR. KENNETH LEWES, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1378,
    d: 'JUDITH LOWIN, 76, The Bronx',
    e: 'March 21, 2020',
  },
  {
    i: 1379,
    d: 'EMMA LUQUIS, 76, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1380,
    d: 'VINCENT MESA, 76',
    e: 'April 15, 2020',
  },
  {
    i: 1381,
    d: 'NIDIA OVALLE, 76, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1382,
    d: 'GORDON M. PRADL, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1383,
    d: 'CARLOS ARTURO QUINTERO, 76, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1384,
    d: 'EUGENIO REYES, 76, The Bronx',
  },
  {
    i: 1385,
    d: 'PRIMO REYES ROSALES, 76',
  },
  {
    i: 1386,
    d: 'PIETRO SCARSO, 76, Staten Island',
    e: 'March 31, 2020',
  },
  {
    i: 1387,
    d: 'J. EDWARD “ED” SHAW, 76',
  },
  {
    i: 1388,
    d: 'KELLY P. SMITH, 76',
    e: 'April 14, 2020',
  },
  {
    i: 1389,
    d: 'RABBI CHAIM MOSHE STAUBER, 76, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    i: 1390,
    d: 'RICHARD J. STURGES, 76, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 1391,
    d: 'WILLIE WOOD, 76, The Bronx',
  },
  {
    i: 1392,
    d: 'ILLUYSHA AMINOV, 77, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Illuysha_Aminov.jpg',
  },
  {
    i: 1393,
    d: 'WILBERT RAY BURKETT, 77, Brooklyn',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Wilbert_Burkett.png',
  },
  {
    i: 1394,
    d: 'JOHN BUTTNER, 77, Queens',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Buttner.jpeg',
  },
  {
    i: 1395,
    d: 'JOHN CROWE, 77, The Bronx',
    e: 'December 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Crowe.jpg',
  },
  {
    i: 1396,
    d: 'IRIS CRUZ, 77, Brooklyn',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Iris_Cruz.jpg',
  },
  {
    i: 1397,
    d: 'CHRISTINA “TINA” DANIELO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Christina_Danielo.jpg',
  },
  {
    i: 1398,
    d: 'JASON FUCHS, 77, The Bronx',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jason_Fuchs.jpg',
  },
  {
    i: 1399,
    d: 'BRILLA GARCES “TITA BRILLA” JARLDANE, 77, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brilla_Jarldane.jpg',
  },
  {
    i: 1400,
    d: 'NATHANIEL “SONNY” JOHNSON, 77, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1401,
    d: 'JOSE MANUEL LUGO CASTRO, 77, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Manuel_Lugo_Castro.png',
  },
  {
    i: 1402,
    d: 'BETTY M. MCDONALD, 77, Queens',
    e: 'September 8, 2020',
  },
  {
    i: 1403,
    d: 'BLANCA CASTAÑO MERO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Blanca_Mero.jpg',
  },
  {
    i: 1404,
    d: 'EMELDA RODRIGUEZ, 77, Manhattan',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emelda_Rodriguez.jpg',
  },
  {
    i: 1405,
    d: 'PHYLLIS ANNE THOMPSON, 77, Manhattan',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Thompson.JPG',
  },
  {
    i: 1406,
    d: 'FOTIOS ANGELOPOULOS, 77, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1407,
    d: 'MICHAEL ANGEL BONANO, 77, Manhattan',
    e: 'May 6, 2020',
  },
  {
    i: 1408,
    d: 'TREVOR HUGH CAMERON, 77, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1409,
    d: 'STANLEY I. CHERA, 77, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1410,
    d: 'MICHAEL J. CUMMINS, 77, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1411,
    d: 'JORGE ERASMO ZAMBRANO ESPINOSA, 77, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 1412,
    d: 'MARIA FABBRICINI, 77, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1413,
    d: 'AVROHOM YAAKOV FRIEDMAN, 77, Brooklyn',
  },
  {
    i: 1414,
    d: 'DAVID HOROWITZ, 77',
    e: 'April 6, 2020',
  },
  {
    i: 1415,
    d: 'KHALID LABDUL AHAD, 77',
  },
  {
    i: 1416,
    d: 'OWEN LORD, 77, Brooklyn',
  },
  {
    i: 1417,
    d: 'MORDECHAI R. MARCUS, 77, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1418,
    d: 'MARIA MELENDEZ, 77, The Bronx',
    e: 'February 4, 2021',
  },
  {
    i: 1419,
    d: 'YISROEL YECHEZKIEL PUTCHOK, 77, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 1420,
    d: 'THOMAS OWEN REILLY, 77, Staten Island',
    e: 'February 7, 2021',
  },
  {
    i: 1421,
    d: 'RABBI DOVID DON REISS, 77, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1422,
    d: 'MANOLIN RIVERA, 77, Queens',
    e: 'October 2, 2020',
  },
  {
    i: 1423,
    d: 'EDITH ROBINSON, 77, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1424,
    d: 'ALBERTO ROTTURA, 77, Manhattan',
    e: 'May 25, 2020',
  },
  {
    i: 1425,
    d: 'RITA D. MCLAUGHLIN SARLO, 77',
    e: 'April 25, 2020',
  },
  {
    i: 1426,
    d: 'DOVID BER SCHWARTZ, 77, Brooklyn',
  },
  {
    i: 1427,
    d: 'ELLEN M. SINGLER, 77',
    e: 'January 31, 2021',
  },
  {
    i: 1428,
    d: 'SOOKRAJ SOOKCHAN, 77, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1429,
    d: 'THOMAS VERDILLO, 77, Brooklyn',
    e: 'December 27, 2020',
  },
  {
    i: 1430,
    d: 'DERYCK WILLIAMS, 77',
    e: 'April 5, 2020',
  },
  {
    i: 1431,
    d: 'WILLAMAE WILSON-MORRIS, 77, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1432,
    d: 'MARC ZIMETBAUM, 77, Staten Island',
    e: 'December 20, 2020',
  },
  {
    i: 1433,
    d: 'JEAN ANDERSON, 78, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 1434,
    d: 'STEPHEN A. COOPER, 78, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 1435,
    d: 'RAMESHCHANDRA J. PATEL, 78, Queens',
    e: 'June 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rameschandra_Patel.jpeg',
  },
  {
    i: 1436,
    d: 'JOSEPH ANTHONY SZALKIEWICZ, 78, Staten Island',
    e: 'March 8, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Anthony_Szalkiewicz.jpeg',
  },
  {
    i: 1437,
    d: 'DAVID JOSEPH BERNSTEIN, 78, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 1438,
    d: 'EDUARDO BUSTAMANTE, 78, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 1439,
    d: 'NOEL CARTER, 78, Queens',
    e: 'February 9, 2021',
  },
  {
    i: 1440,
    d: 'ARNOLD CHERRY, 78, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1441,
    d: 'EULALIA COLON, 78, The Bronx',
    e: 'June 3, 2020',
  },
  {
    i: 1442,
    d: "EILEEN O'SHEA CUMMINGS, 78, Staten Island",
    e: 'July 5, 2020',
  },
  {
    i: 1443,
    d: 'RICHARD CURRIE, 78, Staten Island',
    e: 'April 16, 2020',
  },
  {
    i: 1444,
    d: 'DR. WILLIAM TULIO DIVALE, 78, Queens',
  },
  {
    i: 1445,
    d: 'GEORGE EDELSTEIN, 78, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1446,
    d: 'ADALILA M. ENGSONG, 78',
  },
  {
    i: 1447,
    d: 'LEVI FAULK, 78, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1448,
    d: 'CATHERINE FONT, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1449,
    d: 'MARY S. FOULKS, 78, Brooklyn',
    e: 'December 26, 2020',
  },
  {
    i: 1450,
    d: 'ANAMARIA GARCIA, 78, Manhattan',
  },
  {
    i: 1451,
    d: 'LINDA HANSEN, 78, Staten Island',
    e: 'May 15, 2020',
  },
  {
    i: 1452,
    d: 'SALLIE L. HILL, 78, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 1453,
    d: 'RAYMOND “RAY” HOOBLER, 78',
    e: 'April 29, 2020',
  },
  {
    i: 1454,
    d: 'ADEM HOT, 78, Queens',
  },
  {
    i: 1455,
    d: 'VIRGINIA JACKSON, 78, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 1456,
    d: 'ZORIDA WHAID KHAN, 78, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1457,
    d: 'ANN CHEEVERS KOLB, 78, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1458,
    d: 'BOB KROTIN, 78, Brooklyn',
  },
  {
    i: 1459,
    d: 'MARGARET LAMBERT, 78, Manhattan',
  },
  {
    i: 1460,
    d: 'MARGARETTA H. “MARGO” LUNDELL, 78, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1461,
    d: 'VINCENT MEAD, 78, The Bronx',
  },
  {
    i: 1462,
    d: 'EUNICE ODEN, 78, Brooklyn',
  },
  {
    i: 1463,
    d: 'LAURELINA ORTIZ, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1464,
    d: 'MANUEL RODRIGUEZ QUINTERO, 78, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1465,
    d: 'AHARON ROKEACH, 78, Brooklyn',
  },
  {
    i: 1466,
    d: 'MEIR ROKEACH, 78, Brooklyn',
  },
  {
    i: 1467,
    d: 'MARIO CÉSAR ROMERO, 78, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1468,
    d: 'JANE ROSENTHAL, 78, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1469,
    d: 'ABRAHAM “AVI” SHARONI, 78, Staten Island',
  },
  {
    i: 1470,
    d: 'EDWIN SHOSTAK, 78, Manhattan',
    e: 'April 8, 2020',
  },
  {
    i: 1471,
    d: 'LINDA SILBERMAN, 78',
    e: 'April 7, 2020',
  },
  {
    i: 1472,
    d: 'SUSAN H. SILVERMAN, 78, Manhattan',
    e: 'April 24, 2021',
  },
  {
    i: 1473,
    d: 'SAFRA SPILMAN, 78, Brooklyn',
  },
  {
    i: 1474,
    d: 'SANTA TORAL, 78, Brooklyn',
  },
  {
    i: 1475,
    d: 'EDWARD J. “ED” ANTONIO II, 79, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edward_Antonio.jpg',
  },
  {
    i: 1476,
    d: 'GLADYS E. CASTILLO, 79, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1477,
    d: 'CAROL CERABONE, 79, Manhattan',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carol_Cerabone.jpeg',
  },
  {
    i: 1478,
    d: 'MARY ANNE DELONG, 79, Queens',
    e: 'February 10, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mary_Anne_Delong.png',
  },
  {
    i: 1479,
    d: 'BAO DUONG, 79',
    e: 'March 30, 2020',
  },
  {
    i: 1480,
    d: 'ADA FICARRA, 79',
    e: 'April 26, 2020',
  },
  {
    i: 1481,
    d: 'BEATRICE “BEA” GRANBERG, 79, Staten Island',
    e: 'May 9, 2020',
  },
  {
    i: 1482,
    d: 'EDWARD HENRY, 79, Brooklyn',
    e: 'May 5, 2020',
  },
  {
    i: 1483,
    d: 'PURIM ISAKOV, 79, Brooklyn',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Purim_Isakov.jpg',
  },
  {
    i: 1484,
    d: 'HARRIET SIMONE MAIO, 79, Brooklyn',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harriet_Maio.jpeg',
  },
  {
    i: 1485,
    d: 'ELIZABETH “BETTY” MCCOLLUM, 79, Manhattan',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_McCollum.jpeg',
  },
  {
    i: 1486,
    d: 'RAFAEL NEGRON, 79, Brooklyn',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rafael_Negron.jpg',
  },
  {
    i: 1487,
    d: 'ARYEH “TATTY” NORENSBERG, 79, Brooklyn',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Aryeh_Norensberg.jpeg',
  },
  {
    i: 1488,
    d: 'CARMEN SILVA, 79, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Silva.jpg',
  },
  {
    i: 1489,
    d: 'ANNA SPARACINO, 79, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 1490,
    d: 'ADA MAE VOID RIVERS, 79, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ada_Rivers.jpg',
  },
  {
    i: 1491,
    d: 'DR. GUIDO VOLCOVICI, 79',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Guido_Volcovici.jpg',
  },
  {
    i: 1492,
    d: 'OLGA M. ZAYAS, 79, The Bronx',
    e: 'January 5, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Olga_M_Zayas.jpeg',
  },
  {
    i: 1493,
    d: 'LOUIS ARLEO, 79, Queens',
  },
  {
    i: 1494,
    d: 'MICHAEL ARMSTRONG, 79, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    i: 1495,
    d: 'GAETANO BARBIERI, 79, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 1496,
    d: 'GARY BARTUCCELLI, 79, Staten Island',
    e: 'March 31, 2020',
  },
  {
    i: 1497,
    d: 'CELESTER BEASELY, 79, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1498,
    d: 'TUFAN BENER, 79, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1499,
    d: 'SUSAN BERMAN-LEVINE, 79',
    e: 'April 20, 2020',
  },
  {
    i: 1500,
    d: 'RUBY LAIWAN CHANG, 79, Manhattan',
    e: 'May 7, 2020',
  },
  {
    i: 1501,
    d: 'ROLANDO CHIRINOS, 79, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 1502,
    d: 'EDDY DAVIS, 79, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1503,
    d: 'EDDY DAVIS, 79, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1504,
    d: 'HELEN FORTE, 79, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1505,
    d: 'NELSON MANUEL FRANKY, 79, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1506,
    d: 'SOLOMON GREEN, 79, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 1507,
    d: 'JOSE A. GUZMAN, 79, The Bronx',
    e: 'May 22, 2020',
  },
  {
    i: 1508,
    d: 'ESTHER HAAS/ HASS, 79, Brooklyn',
  },
  {
    i: 1509,
    d: 'MARIANNE “PEACHY” HERLIHY, 79, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1510,
    d: 'LEONARD D. IMPERIO, 79, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 1511,
    d: 'JUN MAEDA, 79, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1512,
    d: 'ALBA PEREA, 79, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1513,
    d: 'JULIO PIÑA, 79',
    e: 'April 25, 2020',
  },
  {
    i: 1514,
    d: 'JOYCE YVONNE ROBERTS, 79, Staten Island',
    e: 'February 12, 2021',
  },
  {
    i: 1515,
    d: 'ANTHONY D. ROTUNNO, 79, Brooklyn',
    e: 'January 21, 2021',
  },
  {
    i: 1516,
    d: 'ROSA SANCHEZ, 79, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1517,
    d: 'JAMES J. “JIM” SMITH, 79, Staten Island',
    e: 'June 28, 2020',
  },
  {
    i: 1518,
    d: 'WALLACE VANPELT, 79, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 1519,
    d: 'RUTH M. WERRA, 79, Staten Island',
    e: 'April 11, 2020',
  },
  {
    i: 1520,
    d: 'OLGA ANCHUNDIA, 80, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 1521,
    d: 'ÁLVARO BONILLA, 80',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alvaro_Bonilla.jpg',
  },
  {
    i: 1522,
    d: 'OLIVER G. “CADABA” CLARKE, 80, Brooklyn',
    e: 'February 19, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Oliver_Clarke.jpg',
  },
  {
    i: 1523,
    d: 'RAMONA DE LA HOZ, 80, The Bronx',
  },
  {
    i: 1524,
    d: 'JOHN “YASHO” DEARDEN, 80, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dearden.jpg',
  },
  {
    i: 1525,
    d: 'MARK GABOR, 80, Manhattan',
    e: 'May 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mark_Gabor.jpeg',
  },
  {
    i: 1526,
    d: 'BIBI MAIMOON NEISHA KHAN, 80',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/BibiMaimoonNeisha_Khan.jpg',
  },
  {
    i: 1527,
    d: 'ESTEBAN MATOS, 80, Brooklyn',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Esteban_Matos.jpeg',
  },
  {
    i: 1528,
    d: "RONALD O'LOUGHLIN, 80, Brooklyn",
    e: 'March 31, 2020',
    h: "https://projects.thecity.nyc/covid-19-deaths-img/Ronald_O'Loughlin.png",
  },
  {
    i: 1529,
    d: 'HAROLD JOHN SOLOMON JR., 80, Staten Island',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Solomon.png',
  },
  {
    i: 1530,
    d: 'CLARENCE JESSIE “SONNY” SPANN, 80, Brooklyn',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clarence_Spann.jpg',
  },
  {
    i: 1531,
    d: 'JOHN WALTER, 80, Queens',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Walter.jpg',
  },
  {
    i: 1532,
    d: 'RAMON ALVARADO, 80, Manhattan',
  },
  {
    i: 1533,
    d: 'RAFAEL YITZCHOK ARANOFF, 80, Brooklyn',
  },
  {
    i: 1534,
    d: 'DNYNIA ARMSTRONG, 80, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1535,
    d: 'CAROLYN ANNA BENFANTE, 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1536,
    d: 'BEIRISH BERGER, 80, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1537,
    d: 'ELLEN RAAB BIENSTOCK, 80, Manhattan',
    e: 'March 19, 2021',
  },
  {
    i: 1538,
    d: 'SHIRLEY CAMPBELL, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 1539,
    d: 'KATIA MARIA CAPELLAN, 80, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1540,
    d: 'AURELIO CASILLA, 80, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1541,
    d: 'NELSON E. CUEVAS, 80, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1542,
    d: 'GERARD ANDERSON KIRBY DUVILLIER, 80, Staten Island',
    e: 'June 25, 2020',
  },
  {
    i: 1543,
    d: 'WILLIAM FRANK “WILLIE” FELONG, 80, Staten Island',
    e: 'May 18, 2020',
  },
  {
    i: 1544,
    d: 'ARTHUR FORTE, 80, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1545,
    d: 'FRANK GIAMBRONE, 80',
  },
  {
    i: 1546,
    d: 'LUIS GUZMAN, 80, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 1547,
    d: 'BARBARA J. HARKLESS, 80, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 1548,
    d: 'ALLEN L. HIRSCHMAN, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 1549,
    d: 'DR. DONALD B. “DON” HOFFMAN, 80, The Bronx',
  },
  {
    i: 1550,
    d: 'PATRICIA G. HORAN, 80, Manhattan',
    e: 'December 30, 2020',
  },
  {
    i: 1551,
    d: 'NATHAN KOLODNEY, 80',
    e: 'May 24, 2020',
  },
  {
    i: 1552,
    d: 'ALEX LAYNE, 80, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 1553,
    d: 'RABBI STEPHEN C. LERNER, 80',
    e: 'January 27, 2021',
  },
  {
    i: 1554,
    d: 'ELADIO LUCERO, 80',
    e: 'April 25, 2020',
  },
  {
    i: 1555,
    d: 'DR. ABDUL MANNAN, 80',
  },
  {
    i: 1556,
    d: 'PATRICIA MCGOWAN, 80, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 1557,
    d: 'KATHLEEN ELIZABETH MCNULTY, 80, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1558,
    d: 'RABBI YEHUDA MICHOEL MEISELS, 80, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1559,
    d: 'CAROLE OCERA, 80, Staten Island',
    e: 'April 13, 2020',
  },
  {
    i: 1560,
    d: 'THAD H. PAIGE, 80, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 1561,
    d: 'MYRIAM PEREZ, 80, Brooklyn',
  },
  {
    i: 1562,
    d: 'DANIEL PETERS, 80, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 1563,
    d: 'MYRTLE POLLARD, 80, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1564,
    d: 'PHILIP RABIN, 80, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1565,
    d: 'SHOLEM ROSENBLUM, 80, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1566,
    d: 'GAIL SALLUSTRO, 80',
    e: 'December 13, 2020',
  },
  {
    i: 1567,
    d: 'LOIS SASSON, 80, Manhattan',
    e: 'December 30, 2021',
  },
  {
    i: 1568,
    d: 'ROSEMARY SELL, 80',
    e: 'April 17, 2020',
  },
  {
    i: 1569,
    d: 'DR., REV. ANNIE BAILEY, 81, Queens',
    e: 'March 24, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Annie_Bailey.jpeg',
  },
  {
    i: 1570,
    d: 'ERIC JACOB BOWEN, 81, Queens',
    e: 'January 18, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eric_Bowen.jpeg',
  },
  {
    i: 1571,
    d: 'OK J. CHOI, 81, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ok_Choi.jpeg',
  },
  {
    i: 1572,
    d: 'EVELYN JEAN-MARIE HARRIS, 81, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Harris.jpeg',
  },
  {
    i: 1573,
    d: 'ALMA LILLIAN MARQUEZ, 81, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alma_Lillian_Marquez.jpeg',
  },
  {
    i: 1574,
    d: 'ANTONIA REYNOSO, 81',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonia_Reynoso.jpeg',
  },
  {
    i: 1575,
    d: 'PATRICIA BAKER, 81, Brooklyn',
  },
  {
    i: 1576,
    d: 'FANNY GELPIERYN, 81, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 1577,
    d: 'RABBI ASHER HEBER, 81, Brooklyn',
  },
  {
    i: 1578,
    d: 'ROBERT JOHNSON, 81, Manhattan',
    e: 'June 14, 2020',
  },
  {
    i: 1579,
    d: 'JOSEPH F. KELLY JR., 81, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1580,
    d: 'PETROS “PETER” MICHAELS, 81, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1581,
    d: 'JOSEPH MIGLIUCCI, 81, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1582,
    d: 'ROCHEL LEAH NEIMAN, 81, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 1583,
    d: 'JOHN ANDERSON “JACK; QUIS” QUISENBERRY, 81, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1584,
    d: 'JOAN S. RAINES, 81, Manhattan',
    e: 'May 17, 2020',
  },
  {
    i: 1585,
    d: 'WALTRAUD “VAL” REILLY, 81, Staten Island',
    e: 'March 10, 2021',
  },
  {
    i: 1586,
    d: 'MARIA SALAMAN, 81, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 1587,
    d: 'SOFIA NEREIDA VARGAS COLLAZO, 81, The Bronx',
    e: 'May 11, 2020',
  },
  {
    i: 1588,
    d: 'COURTNEY WARREN, 81, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 1589,
    d: 'THERON OSCAR WORTH, 81, Manhattan',
    e: 'January 19, 2021',
  },
  {
    i: 1590,
    d: 'THERON OSCAR WORTH JR., 81, Manhattan',
    e: 'January 19, 2021',
  },
  {
    i: 1591,
    d: 'RABBI SOLOMON “SHLOMO ELAZAR” WULLIGER, 81, Brooklyn',
  },
  {
    i: 1592,
    d: 'JOSEPH “JOE” ALOE, 82, Manhattan',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joe_Aloe.jpeg',
  },
  {
    i: 1593,
    d: 'PIK CHI CHAN, 82, Queens',
    e: 'June 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pik_Chi_Chan.jpg',
  },
  {
    i: 1594,
    d: 'RICHARD DI LIBERTO, 82, Queens',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_diLiberto.jpg',
  },
  {
    i: 1595,
    d: 'ELSIE LOPEZ ESCOBAR, 82, Brooklyn',
    e: 'April 21, 2020',
  },
  {
    i: 1596,
    d: 'ELSA GOMEZ, 82, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elsa_Gomez.jpg',
  },
  {
    i: 1597,
    d: 'ANNIE RUTH JOHNSON, 82, Manhattan',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Annie_Ruth_Johnson.jpg',
  },
  {
    i: 1598,
    d: 'WILLIAM J. “BILL” LEVY, 82, Staten Island',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Levy.jpg',
  },
  {
    i: 1599,
    d: 'ERNEST “ERNIE” MORENCY, 82, Brooklyn',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernest_Morency.jpg',
  },
  {
    i: 1600,
    d: 'TOBIAS NOBOA, 82, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tobias_Noboa.png',
  },
  {
    i: 1601,
    d: 'ANA ORTIZ, 82, The Bronx',
    e: 'May 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ana_Ortiz.jpeg',
  },
  {
    i: 1602,
    d: 'JEFFREY PALEY, 82, Manhattan',
    e: 'February 27, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jeffrey_Paley.jpg',
  },
  {
    i: 1603,
    d: 'ANTONIO PEPENELLA, 82, The Bronx',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Pepenella.jpg',
  },
  {
    i: 1604,
    d: 'DR. MADU RAO, 82, Staten Island',
    e: 'December 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Madu_Rao.jpeg',
  },
  {
    i: 1605,
    d: 'NATALIYA RUDNICHENKO, 82, Staten Island',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Nataliya_Rudnichenko.jpg',
  },
  {
    i: 1606,
    d: 'IVAN SANTANA, 82, Manhattan',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ivan_Santana.png',
  },
  {
    i: 1607,
    d: 'JESUS BIENVENIDO SOSA ESTRADA, 82, Queens',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jesus_Sosa.jpg',
  },
  {
    i: 1608,
    d: 'ROSEMARY “ROSIE” TERIO, 82, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Terio.jpg',
  },
  {
    i: 1609,
    d: 'WILLAMAY THOMPSON, 82, Staten Island',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Willamay_Thompson.jpg',
  },
  {
    i: 1610,
    d: 'REV. LYNETTE WOODLAND LOVE, 82, Queens',
    e: 'June 2, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lynette_Woodland_Love.png',
  },
  {
    i: 1611,
    d: 'SCHNEUR ABER, 82, Brooklyn',
  },
  {
    i: 1612,
    d: 'ROBERT LESLIE “BOB” AGNES, 82, Manhattan',
    e: 'January 9, 2021',
  },
  {
    i: 1613,
    d: 'JUAN “MIÑOSO” ARAUJO, 82, The Bronx',
  },
  {
    i: 1614,
    d: 'LUZ MARIA AROCHO MALDONADO, 82',
    e: 'April 11, 2020',
  },
  {
    i: 1615,
    d: 'JAIME ASENCIO, 82, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 1616,
    d: 'FRANCES H. BARRY, 82',
  },
  {
    i: 1617,
    d: 'WALTER BECKETT, 82, Brooklyn',
  },
  {
    i: 1618,
    d: 'PAUL A. BIENSTOCK, 82, Manhattan',
    e: 'March 6, 2021',
  },
  {
    i: 1619,
    d: 'REV. HARRY DEAN BIGBY, 82, Manhattan',
    e: 'May 26, 2020',
  },
  {
    i: 1620,
    d: 'IFGENIA “IFI” CARDENAS, 82, Manhattan',
  },
  {
    i: 1621,
    d: 'MORDECHAI LEIB “MOTTEL” CHEIN, 82, Brooklyn',
  },
  {
    i: 1622,
    d: 'MICHAEL ELGIN, 82, Manhattan',
    e: 'April 30, 2020',
  },
  {
    i: 1623,
    d: 'LUCIUS EWAN, 82, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 1624,
    d: 'MIGUEL GELPI, 82, Manhattan',
    e: 'May 25, 2020',
  },
  {
    i: 1625,
    d: 'LUCIEN GEORGE SR., 82',
    e: 'April 5, 2020',
  },
  {
    i: 1626,
    d: 'LUCIANO GOMEZ, 82, Queens',
  },
  {
    i: 1627,
    d: 'MICHAEL HALKIAS, 82, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 1628,
    d: 'BARUCH HAVIV, 82',
    e: 'May 27, 2020',
  },
  {
    i: 1629,
    d: 'WILFRED HAYWOOD, 82, Brooklyn',
    e: 'May 25, 2020',
  },
  {
    i: 1630,
    d: 'JOSEPH C. “JOE” HENNESSY, 82, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1631,
    d: 'MIRIAM HOMNICK, 82, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    i: 1632,
    d: 'LEAH KATZ, 82, Brooklyn',
  },
  {
    i: 1633,
    d: 'ARNIM KIWI, 82, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 1634,
    d: 'SEBASTIAN FRANCIS PEPI, 82',
    e: 'April 5, 2020',
  },
  {
    i: 1635,
    d: 'ENRIQUE RIVERA RIVERA, 82, The Bronx',
    e: 'March 29, 2020',
  },
  {
    i: 1636,
    d: 'WINSTON SILVERA, 82, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 1637,
    d: 'ROBERT TERRENCE STUCHBURY, 82, Brooklyn',
    e: 'March 22, 2021',
  },
  {
    i: 1638,
    d: 'WILLAMAY THOMPSON, 82, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1639,
    d: 'JULES G. VALESTIN, 82, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 1640,
    d: 'ALBERT KNICKERBOCKER “NICK” WEBSTER, 82, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1641,
    d: 'STANLEY ALBERT, 83, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stanley_Albert.jpg',
  },
  {
    i: 1642,
    d: 'CHARLES EDWARD “CHARLIE” BURKETT, 83, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Burkett.jpeg',
  },
  {
    i: 1643,
    d: 'THOMAS CORI, 83, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 1644,
    d: 'MARIA ADIELA HERNANDEZ, 83, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Hernandez.jpeg',
  },
  {
    i: 1645,
    d: 'GERARD EVANS MANOLOVICI, 83',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gerard_Manolovici.jpg',
  },
  {
    i: 1646,
    d: 'ELIAS LANE MELTON, 83, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elias_Melton.jpeg',
  },
  {
    i: 1647,
    d: 'DONALD J. MILLER, 83, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Donald_Miller.JPG',
  },
  {
    i: 1648,
    d: 'WILLIAM NEGRON, 83, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Negron.jpg',
  },
  {
    i: 1649,
    d: 'DANILO RIVAS, 83, The Bronx',
  },
  {
    i: 1650,
    d: 'LILA CHARLOTTE SWEDELSON WEISSMAN, 83, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lila_Weissman.jpg',
  },
  {
    i: 1651,
    d: 'ROBERT “BOB” ZOLNERZAK, 83, Brooklyn',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Zolnerzak.jpg',
  },
  {
    i: 1652,
    d: 'ROSALIE ACAMPORA, 83, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1653,
    d: 'LOUIS MICHAEL AMOIA, 83',
    e: 'June 6, 2020',
  },
  {
    i: 1654,
    d: 'RAFAEL ARCINIEGAS, 83, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 1655,
    d: 'CAROL A. BARRANCA, 83, Brooklyn',
    e: 'May 17, 2021',
  },
  {
    i: 1656,
    d: 'KEVIN JOHN CAHILL, 83, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 1657,
    d: 'MARGARITA CONCEPCION, 83, The Bronx',
    e: 'January 18, 2021',
  },
  {
    i: 1658,
    d: 'MENDEL DRIZIN, 83, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 1659,
    d: 'ELOUISE FENTY, 83, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1660,
    d: 'RABBI YISROEL FRIEDMAN, 83, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 1661,
    d: 'NICHOLAS A. GRIECO, 83, Staten Island',
    e: 'March 26, 2020',
  },
  {
    i: 1662,
    d: 'HENRI M. GUERON, 83, Manhattan',
    e: 'May 1, 2020',
  },
  {
    i: 1663,
    d: 'RABBI YITZCHOK KAPLINSKY, 83, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 1664,
    d: 'BETTY ANN KIRCHHOFER, 83, Queens',
    e: 'January 22, 2021',
  },
  {
    i: 1665,
    d: 'TIAN LIANG, 83, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1666,
    d: 'MICHAEL JOSEF “MIKE” LONGO, 83, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1667,
    d: 'MILDRED MAZZELLA, 83, Staten Island',
    e: 'February 24, 2021',
  },
  {
    i: 1668,
    d: 'JOSEPH F. MILAZZO, 83, Staten Island',
    e: 'January 30, 2021',
  },
  {
    i: 1669,
    d: 'EFRAIN MOLINA SR., 83, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 1670,
    d: 'DOROTHY MONTALVO, 83, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1671,
    d: 'JAMES D. “JIM” REED, 83, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1672,
    d: 'VIOLETA RIVERA, 83, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 1673,
    d: 'CLETUS STEWART, 83, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1674,
    d: 'RICHARD T. ZAIB, 83, Queens',
    e: 'June 25, 2020',
  },
  {
    i: 1675,
    d: 'DOLORES ALTAGRACIA MENA, 84',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dolores_Mena.JPG',
  },
  {
    i: 1676,
    d: 'MICHAEL BESSER, 84, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Besser.jpg',
  },
  {
    i: 1677,
    d: 'GERALD BRUSKIN, 84, Manhattan',
    e: 'December 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gerald_Bruskin.jpg',
  },
  {
    i: 1678,
    d: 'STANLEY KAPLAN, 84, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1679,
    d: 'JOHN KNOX, 84, Queens',
    e: 'March 16, 2020',
  },
  {
    i: 1680,
    d: 'CRISTINA LOPEZ, 84, The Bronx',
    e: 'February 11, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cristina_Lopez.jpg',
  },
  {
    i: 1681,
    d: 'RALPH WILLIAM MARTEL JR., 84, Manhattan',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Martel.jpeg',
  },
  {
    i: 1682,
    d: 'JOSE H. RICO, 84, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Rico.png',
  },
  {
    i: 1683,
    d: 'SALVATORE ROMEO, 84, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1684,
    d: 'ARLENE SCHNEIDMAN, 84, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arlene_Schneidman.jpeg',
  },
  {
    i: 1685,
    d: 'OLGA VASQUEZ, 84, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Olga_Vasquez.jpg',
  },
  {
    i: 1686,
    d: 'PIA ALBANESE, 84, Staten Island',
    e: 'October 30, 2020',
  },
  {
    i: 1687,
    d: 'GIL “THE GODFATHER OF CARIBBEAN RADIO” BAILEY, 84, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1688,
    d: 'RABBI GEDALYA BELZ, 84, Brooklyn',
  },
  {
    i: 1689,
    d: 'MURIEL A. CALLENDER, 84, Brooklyn',
    e: 'May 3, 2020',
  },
  {
    i: 1690,
    d: 'ARTHUR B. CORNFELD, 84, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1691,
    d: 'JANET DAVID, 84, Manhattan',
    e: 'October 16, 2020',
  },
  {
    i: 1692,
    d: 'RABBI BRUCE GOLDMAN, 84, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1693,
    d: 'HENRY GRIMES, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1694,
    d: 'RABBI MORDECHAI GURARY, 84, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1695,
    d: 'SAMUEL “SAM” HARGRESS JR., 84, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1696,
    d: 'NORMA PEARL HASSEL, 84, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1697,
    d: 'CECILIA WANG “CC” HSU, 84, Manhattan',
  },
  {
    i: 1698,
    d: 'MILENA JELINEK, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1699,
    d: 'KOSTA KASIMIS, 84, Manhattan',
    e: 'March 30, 2020',
  },
  {
    i: 1700,
    d: 'DONALD PHILIP MCCOMB, 84, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1701,
    d: 'EDWARD MICKUS, 84, Brooklyn',
    e: 'March 12, 2020',
  },
  {
    i: 1702,
    d: 'DR. PETER I. PRESSMAN, 84, Manhattan',
    e: 'April 27, 2020',
  },
  {
    i: 1703,
    d: 'KENNETH “SCATS” SCANLON, 84, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 1704,
    d: 'PATRICIA A. SCHMIDT, 84, Staten Island',
  },
  {
    i: 1705,
    d: 'GABRIEL DE JESUS MARIN SERNA, 84, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1706,
    d: 'ROSA SERRANO, 84, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 1707,
    d: 'FAUSTINA MONZI SLOBODZIAN, 84, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1708,
    d: 'RABBI SHIMON SUSHOLTZ, 84, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1709,
    d: 'DOROTHY RUTH ALAJI YASIN, 84, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 1710,
    d: 'ROCHEL LEAH ZAHLER, 84, Brooklyn',
  },
  {
    i: 1711,
    d: 'REV. GILBERT NOAH BURKETT, 85, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gilbert_Burkett.jpg',
  },
  {
    i: 1712,
    d: 'ANDRES DIAZ, 85, Staten Island',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Andres_Diaz.jpeg',
  },
  {
    i: 1713,
    d: 'IOLA DUNLAP, 85, Queens',
    e: 'January 22, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Iola_Dunlap.png',
  },
  {
    i: 1714,
    d: 'STEPHEN DURNIN, 85, Queens',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stephen_Durnin.jpeg',
  },
  {
    i: 1715,
    d: 'JOSEPH FERRIS, 85, Brooklyn',
    e: 'June 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Ferris.jpeg',
  },
  {
    i: 1716,
    d: 'ED FULD, 85, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ed_Fuld.jpg',
  },
  {
    i: 1717,
    d: 'PAOLO GIUSTI, 85, Manhattan',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Paolo_Giusti.png',
  },
  {
    i: 1718,
    d: 'CLIFTON HOWELL, 85, The Bronx',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clifton_Howell.jpg',
  },
  {
    i: 1719,
    d: 'DR. MOHAMMAD SHAMSUL ISLAM, 85, The Bronx',
    e: 'February 26, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mohammad_Shamsul_Islam.jpg',
  },
  {
    i: 1720,
    d: 'ARTURO F. NOLES, 85, Queens',
    e: 'December 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arturo_Noles.jpg',
  },
  {
    i: 1721,
    d: 'MARIO J. “PIPI” POBEGA, 85, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mario_Pobega.jpg',
  },
  {
    i: 1722,
    d: 'MARIE PROTO, 85, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marie_Proto.jpg',
  },
  {
    i: 1723,
    d: 'BALA “RITA” SENNANDAN, 85, The Bronx',
    e: 'February 6, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Bala_Sennandan.jpeg',
  },
  {
    i: 1724,
    d: 'CHANDRAKANT F. SHETH, 85, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Chandrakant_Sheth.jpg',
  },
  {
    i: 1725,
    d: 'NATHAN ALLMAN, 85, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1726,
    d: 'TACIA K. ARBONA, 85, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1727,
    d: 'DONALD C. BORBELL SR., 85, Brooklyn',
  },
  {
    i: 1728,
    d: 'LUCIA “LUCY” BUTTERMARK, 85, Staten Island',
    e: 'January 25, 2021',
  },
  {
    i: 1729,
    d: 'NORMAN “NACHUM” DICK, 85, Brooklyn',
  },
  {
    i: 1730,
    d: 'RAFAEL DUMAN, 85, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 1731,
    d: 'HARVEY FINKE, 85, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1732,
    d: 'MAZEL FINKENSTEIN, 85',
  },
  {
    i: 1733,
    d: 'BETTY FRUNZI, 85, Staten Island',
    e: 'April 19, 2020',
  },
  {
    i: 1734,
    d: 'CHAIM BER GRUNFELD, 85, Brooklyn',
  },
  {
    i: 1735,
    d: 'FRED KLEIN, 85, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1736,
    d: 'RABBI MOSHE KWALBRUN, 85, Queens',
  },
  {
    i: 1737,
    d: 'ZEPHIRIN FELIX MAZILE, 85, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 1738,
    d: 'EDWARD PAUL MCGUIRE, 85',
    e: 'May 15, 2020',
  },
  {
    i: 1739,
    d: 'KENNETH NEWMAN, 85, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 1740,
    d: 'ARTHUR POMPOSELLO, 85, Manhattan',
    e: 'May 6, 2021',
  },
  {
    i: 1741,
    d: 'GERARD H. “GERRY” ROSENBERG, 85, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1742,
    d: 'KARN VIR SURI, 85, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 1743,
    d: 'MARIA L. ARECHUA, 86, Manhattan',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Arechua.png',
  },
  {
    i: 1744,
    d: 'GLORIA BARONE, 86, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gloria_Barone.JPG',
  },
  {
    i: 1745,
    d: 'LAURICE KASOW, 86, Queens',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Laurice_Kasow.jpg',
  },
  {
    i: 1746,
    d: 'MANH NGUYEN, 86, The Bronx',
    e: 'March 18, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manh_Nguyen.jpeg',
  },
  {
    i: 1747,
    d: 'FELIPE ORTIZ, 86, Queens',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Felipe_Ortiz.jpeg',
  },
  {
    i: 1748,
    d: 'MARIA LENA PIERRE-LOUIS, 86, Brooklyn',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Lena_Pierre_Louis.jpeg',
  },
  {
    i: 1749,
    d: 'JACK SMITH, 86, Manhattan',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jack_Smith.png',
  },
  {
    i: 1750,
    d: 'ANTHONY “TONY” TERIO, 86, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Terio.jpeg',
  },
  {
    i: 1751,
    d: 'JOAN TERRERO, 86, The Bronx',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joan_Terrero.jpg',
  },
  {
    i: 1752,
    d: 'MELITA ELIZABETH “FLYNN” BAKER, 86',
    e: 'April 30, 2020',
  },
  {
    i: 1753,
    d: 'PATRICIA BOSWORTH, 86, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1754,
    d: 'CHAIM ALTER BRACH, 86, Brooklyn',
  },
  {
    i: 1755,
    d: 'AMERICO CORDERO, 86, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 1756,
    d: 'LILLIAN “LILY” DESANN-ZUNIGA, 86, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 1757,
    d: 'VINICIO DONATO, 86, Queens',
  },
  {
    i: 1758,
    d: 'JUAN ENRIQUEZ, 86',
    e: 'February 26, 2021',
  },
  {
    i: 1759,
    d: 'HUGH FREYER, 86, The Bronx',
    e: 'July 14, 2020',
  },
  {
    i: 1760,
    d: 'MICHAEL A. FRIEDMAN, 86, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 1761,
    d: 'NOELIA HERNANDEZ CORDERO, 86, Manhattan',
    e: 'April 24, 2020',
  },
  {
    i: 1762,
    d: 'ARTHUR HIRSHKOWITZ, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1763,
    d: 'BULGER L. “IRV” IRVING JR., 86, Staten Island',
  },
  {
    i: 1764,
    d: 'ALFRED JOLLON, 86, Manhattan',
  },
  {
    i: 1765,
    d: 'RICHARD G. KLEIN SR., 86, Staten Island',
    e: 'June 4, 2020',
  },
  {
    i: 1766,
    d: 'IRIS CORNELIA LOVE, 86, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1767,
    d: 'ARNULFO A. MIRANDA, 86, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1768,
    d: "CLAUDE O'BRIEN, 86, Brooklyn",
    e: 'April 7, 2020',
  },
  {
    i: 1769,
    d: 'JOEL M. REED, 86',
    e: 'April 13, 2020',
  },
  {
    i: 1770,
    d: 'ANTHONY RODRIGUEZ, 86',
    e: 'April 28, 2020',
  },
  {
    i: 1771,
    d: 'ROBERT SALAME, 86',
    e: 'April 16, 2020',
  },
  {
    i: 1772,
    d: 'YAAKOV SCHWEI, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1773,
    d: 'RICHARD SONET, 86',
    e: 'December 28, 2021',
  },
  {
    i: 1774,
    d: 'ARLENE STRINGER-CUEVAS, 86, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 1775,
    d: 'PEDRO FERNANDEZ UNAMUNO, 86, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1776,
    d: 'ETTA B. ALSTON, 87, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Alston.jpg',
  },
  {
    i: 1777,
    d: 'WALTER BAILEY, 87, Queens',
    e: 'March 31, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Walter_Bailey.png',
  },
  {
    i: 1778,
    d: 'PASQUALE BRUNO, 87, Brooklyn',
  },
  {
    i: 1779,
    d: 'THERESA “TERRY” COLLINS, 87, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Terry_Collins.png',
  },
  {
    i: 1780,
    d: 'EDITH ECKER, 87, Queens',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edith_Ecker.jpg',
  },
  {
    i: 1781,
    d: 'GRACE HARRIS, 87, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1782,
    d: 'PEDRO MUNIZ, 87, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Muniz.JPG',
  },
  {
    i: 1783,
    d: 'MARIA ROSA PARRELLI, 87, Brooklyn',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/MariaRosa_Parrelli.jpeg',
  },
  {
    i: 1784,
    d: 'ANGIE ROSA, 87, Brooklyn',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Angie_Rosa.png',
  },
  {
    i: 1785,
    d: 'ACCURSIO ZAGARA, 87, Brooklyn',
    e: 'December 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Accursio_Zagara.jpg',
  },
  {
    i: 1786,
    d: 'ROSEMARIE AMEROSI, 87, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1787,
    d: 'JOSEPH BROSTEK, 87, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 1788,
    d: 'VITO J. DI BENEDETTO, 87, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 1789,
    d: 'RIVKAH FELDMAN, 87, Manhattan',
    e: 'February 2, 2021',
  },
  {
    i: 1790,
    d: 'LILA A. FENWICK, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1791,
    d: 'ANITA FIAL, 87, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1792,
    d: 'BORUCH GELFAND, 87, Brooklyn',
  },
  {
    i: 1793,
    d: 'RABBI YAAKOV MORDECHAI GOLDBERG, 87, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1794,
    d: 'BEVERLY ADER HOFFER, 87',
    e: 'June 5, 2020',
  },
  {
    i: 1795,
    d: 'BABETTE SOLON HOLLISTER, 87, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 1796,
    d: 'IRVING HOPPENWASSER, 87, Brooklyn',
    e: 'May 17, 2020',
  },
  {
    i: 1797,
    d: 'WILLIAM E. HORNER, 87',
    e: 'April 19, 2020',
  },
  {
    i: 1798,
    d: 'CAROLE MAE KAYE, 87, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1799,
    d: 'MAURICE LEITER, 87',
    e: 'June 8, 2020',
  },
  {
    i: 1800,
    d: 'RABBI TZVI ABBA LERMAN, 87, Brooklyn',
  },
  {
    i: 1801,
    d: 'DR. FREDERICK MENDELSOHN, 87, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1802,
    d: 'STELLA PIPITONE, 87, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 1803,
    d: 'ANGELO “POPPY” PIRO, 87, Staten Island',
    e: 'March 30, 2020',
  },
  {
    i: 1804,
    d: 'MARY M. RIZZO, 87, Staten Island',
    e: 'April 22, 2020',
  },
  {
    i: 1805,
    d: 'AMALIO RODRIGUEZ, 87, The Bronx',
    e: 'May 28, 2020',
  },
  {
    i: 1806,
    d: 'ANGIE ROSA, 87, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 1807,
    d: 'ALLAN SCHLANGER, 87, Brooklyn',
    e: 'March 13, 2020',
  },
  {
    i: 1808,
    d: 'ANN YOUNGERMAN SMOLER, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1809,
    d: 'DR. ALFRED YASSKY, 87, Manhattan',
  },
  {
    i: 1810,
    d: 'JULIUS ADORNO JR., 88, The Bronx',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Julios_Adorno_Jr.jpg',
  },
  {
    i: 1811,
    d: 'MILDRED BARGEBUHR KUNIN, 88, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mildred_Kunin.jpeg',
  },
  {
    i: 1812,
    d: 'ROSE MARY INFANTINO, 88, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rose_Mary_Infantino.jpg',
  },
  {
    i: 1813,
    d: 'MANUEL RIVERA, 88, Manhattan',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Rivera.jpg',
  },
  {
    i: 1814,
    d: 'TULSA BALRAM, 88',
    e: 'April 8, 2020',
  },
  {
    i: 1815,
    d: 'ROBERT W. BARGHAAN, 88, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 1816,
    d: 'VIRGINIA FAITH BARGHAAN, 88, Staten Island',
  },
  {
    i: 1817,
    d: 'HARVEY BAYARD, 88, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1818,
    d: 'ROCHEL FELICE BLAU, 88, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 1819,
    d: 'FAT CHAN, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1820,
    d: 'ELY COHEN, 88, Staten Island',
    e: 'May 24, 2020',
  },
  {
    i: 1821,
    d: 'DONALD FELDSTEIN, 88, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1822,
    d: 'MARTIN FLANZBAUM, 88, Staten Island',
  },
  {
    i: 1823,
    d: 'RABBI LEIBEL GRONER, 88, Brooklyn',
  },
  {
    i: 1824,
    d: 'LUZMILA HERRERA, 88, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 1825,
    d: 'MOSHE HOMNICK, 88, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1826,
    d: 'RIVKA KELLNER, 88, Brooklyn',
  },
  {
    i: 1827,
    d: 'YNES KING, 88, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 1828,
    d: 'MINDELLA LAMM, 88, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 1829,
    d: 'SYLVIA NESTEL “GINGER” LIEF, 88, Manhattan',
    e: 'June 4, 2020',
  },
  {
    i: 1830,
    d: 'EFTYHIA MENICO, 88, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1831,
    d: 'ALEXANDER MEYERS, 88, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1832,
    d: 'RICHARD RAINES, 88, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1833,
    d: 'EDITH “BIG” RICHEMOND, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1834,
    d: 'SIDNEY RUSS, 88, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1835,
    d: 'ERNEST H. SCHWARZ, 88, Staten Island',
  },
  {
    i: 1836,
    d: 'LILLIAN STUGENSKY, 88, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 1837,
    d: 'JEAN POLSKY WEITZ, 88, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1838,
    d: 'DOROTHY L. WORRELL, 88, Staten Island',
    e: 'May 4, 2020',
  },
  {
    i: 1839,
    d: 'BARBARA GIORDANO “NANNY” CASSELLA, 89, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Barbara_Cassella.jpeg',
  },
  {
    i: 1840,
    d: 'THOMAS ECKER, 89, Queens',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Ecker.JPG',
  },
  {
    i: 1841,
    d: 'IRVING ENGELSON, 89, Manhattan',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Irving_Engelson.jpg',
  },
  {
    i: 1842,
    d: 'PHYLLIS FIORAVANTI, 89, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Fioravanti.jpg',
  },
  {
    i: 1843,
    d: 'DIONYSIOS S. KOTSONIS, 89, Manhattan',
    e: 'May 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dionysios_Kotsonis.JPG',
  },
  {
    i: 1844,
    d: 'CESAR AUGUSTO MORALES SR., 89, The Bronx',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cesar_Morales.JPG',
  },
  {
    i: 1845,
    d: 'CARMEN NEREIDA MUNIZ, 89, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Muniz.JPG',
  },
  {
    i: 1846,
    d: 'CARMEN PEREZ ABREU, 89, The Bronx',
    e: 'December 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Perez_Abreu.png',
  },
  {
    i: 1847,
    d: 'CORINNE ROGATNICK, 89, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1848,
    d: 'GILDA VILLAMAN, 89, Manhattan',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gilda_Villaman.JPG',
  },
  {
    i: 1849,
    d: 'HELENE ALYON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1850,
    d: 'FRANK AMATO, 89, Staten Island',
  },
  {
    i: 1851,
    d: 'HELENE AYLON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1852,
    d: 'JAMES P.ATRICK BOYLE, 89, Queens',
    e: 'April 2, 2021',
  },
  {
    i: 1853,
    d: 'DOMENICK CAVICCHIO, 89, Staten Island',
    e: 'February 21, 2021',
  },
  {
    i: 1854,
    d: 'BERNEL CONNELLY, 89, Queens',
  },
  {
    i: 1855,
    d: 'LINDY WILLIAM CRESCITELLI, 89, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 1856,
    d: 'ROY DREISTADT, 89, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1857,
    d: 'MARIA CRISTINA FIGUEROA, 89, Brooklyn',
    e: 'April 26, 2020',
  },
  {
    i: 1858,
    d: 'HERBERT F. “HERB” FISCHER, 89, Staten Island',
    e: 'May 3, 2020',
  },
  {
    i: 1859,
    d: 'SADIE GAGLIANO, 89, Staten Island',
    e: 'May 5, 2020',
  },
  {
    i: 1860,
    d: 'JAMES “JIMMY” GLENN, 89, Manhattan',
    e: 'May 7, 2020',
  },
  {
    i: 1861,
    d: 'ROBERT GREENBERGER, 89',
    e: 'March 23, 2020',
  },
  {
    i: 1862,
    d: 'TILLETHA HYDE, 89, The Bronx',
    e: 'May 16, 2020',
  },
  {
    i: 1863,
    d: 'EDWARD D. KILLEA, 89, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 1864,
    d: 'JOSEPH M. KISSANE, 89, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 1865,
    d: 'HELEN MILLER, 89, Staten Island',
  },
  {
    i: 1866,
    d: 'KYONG HE PARK, 89',
    e: 'March 28, 2020',
  },
  {
    i: 1867,
    d: 'YAAKOV PERLOW, 89, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1868,
    d: 'NECHAMA POSNER, 89, Brooklyn',
  },
  {
    i: 1869,
    d: 'ARLENE SAUNDERS, 89, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1870,
    d: 'MARY J. SAVINO, 89, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 1871,
    d: 'PETER SEMLER, 89',
    e: 'March 2, 2021',
  },
  {
    i: 1872,
    d: 'PHILIP J. SMITH, 89, Manhattan',
    e: 'January 15, 2021',
  },
  {
    i: 1873,
    d: 'TADASHI TSUFURA, 89, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1874,
    d: 'JOHN CANTWELL ZIEGLER, 89',
    e: 'March 4, 2021',
  },
  {
    i: 1875,
    d: 'MIGUEL ANGEL CALDERON, 90, Manhattan',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Calderon.JPG',
  },
  {
    i: 1876,
    d: 'LENORE CORCORAN, 90, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lenore_Corcoran.jpg',
  },
  {
    i: 1877,
    d: 'MARTHA DIAZ, 90, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Martha_Diaz.jpg',
  },
  {
    i: 1878,
    d: 'LUCY NICOLELIS, 90, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lucy_Nicolelis.jpeg',
  },
  {
    i: 1879,
    d: 'LUCILLE D. TAPPE, 90, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lucille_Tappe.png',
  },
  {
    i: 1880,
    d: 'BENNY AU, 90, Manhattan',
  },
  {
    i: 1881,
    d: 'BARBARA RHODES “BOBBY” BELKIN, 90, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1882,
    d: 'ONIELO DE LUZIO, 90, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 1883,
    d: 'MOLLIE “GRANDMA DUKES” GUSTINE, 90, Queens',
  },
  {
    i: 1884,
    d: 'EVA KONRAD HAWKINS, 90, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 1885,
    d: 'YUEN KAN HSU, 90, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1886,
    d: 'BETTY JOBLOVE, 90, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 1887,
    d: 'BETZALEL KAHAN, 90, Brooklyn',
  },
  {
    i: 1888,
    d: 'GEDALYA KORF, 90, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 1889,
    d: 'GOLDA “GOLDY” KORN, 90, Brooklyn',
  },
  {
    i: 1890,
    d: 'SHMUEL LANDAU, 90, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 1891,
    d: 'DR. HERMAN J. LEW, 90, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1892,
    d: 'EUGENIA “GEÑA” LOPEZ, 90, Queens',
    e: 'January 17, 2021',
  },
  {
    i: 1893,
    d: 'NANCY MAIELLO, 90, Staten Island',
    e: 'January 10, 2021',
  },
  {
    i: 1894,
    d: 'GERSHON MEIR, 90, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1895,
    d: 'YOSEF ZUNDEL MOTZEN, 90, Brooklyn',
  },
  {
    i: 1896,
    d: 'MAXWELL M. MOZELL, 90, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1897,
    d: 'ANNE MUSTRULLU, 90',
  },
  {
    i: 1898,
    d: 'RABBI YESHAYA ROTH, 90, Brooklyn',
  },
  {
    i: 1899,
    d: 'LEONARD SBORDONE, 90, The Bronx',
    e: 'May 1, 2020',
  },
  {
    i: 1900,
    d: 'MORDECHAI MENDEL WIEDER, 90, Brooklyn',
  },
  {
    i: 1901,
    d: 'MORTON WOLITZER, 90, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1902,
    d: 'HAROLD JAMES BLAKE, 91, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Blake.jpg',
  },
  {
    i: 1903,
    d: 'CANDIDA “CANDY” CARABALLO, 91, Queens',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Candida_Caraballo.jpg',
  },
  {
    i: 1904,
    d: 'ROSARIO GONZALEZ, 91, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosario_Gonzalez.png',
  },
  {
    i: 1905,
    d: 'MARIA C. IASIUOLO, 91, Staten Island',
    e: 'November 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Iasiuolo.jpg',
  },
  {
    i: 1906,
    d: 'ANNETTE MARKS, 91, Manhattan',
    e: 'March 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Annette_Marks.jpg',
  },
  {
    i: 1907,
    d: 'THERESA ESTELLE MORRIS, 91, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Theresa_Estelle_Morris.png',
  },
  {
    i: 1908,
    d: 'JUDITH PATOCS, 91, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judith_Patocs.jpg',
  },
  {
    i: 1909,
    d: 'IRMA SANCHEZ, 91, Queens',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Irma_Sanchez.jpg',
  },
  {
    i: 1910,
    d: 'ALEXANDER TABAROVSKY, 91, Brooklyn',
    e: 'May 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alexander_Tabarovsky.png',
  },
  {
    i: 1911,
    d: 'NANCY M. ALLEN, 91',
    e: 'April 15, 2020',
  },
  {
    i: 1912,
    d: 'JEROME DANIEL BENDER, 91, Brooklyn',
    e: 'January 4, 2021',
  },
  {
    i: 1913,
    d: 'JEROME “D.” BENDER, 91',
    e: 'January 4, 2021',
  },
  {
    i: 1914,
    d: 'JOAN COHEN, 91, Manhattan',
    e: 'January 28, 2021',
  },
  {
    i: 1915,
    d: 'ROMI COHN, 91, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 1916,
    d: 'RICHARD DE LUCIA, 91, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1917,
    d: 'BENJAMIN “BEN” DIGIOVANNI, 91, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1918,
    d: 'WILLIAM H. “BILL” GERDTS, 91',
    e: 'April 14, 2020',
  },
  {
    i: 1919,
    d: 'HARRIET “HANI” GROSSMAN, 91, The Bronx',
    e: 'May 16, 2020',
  },
  {
    i: 1920,
    d: 'SHMUEL HOCH, 91, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1921,
    d: 'RABBI SHMUEL HOROWITZ, 91, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1922,
    d: 'MIGUEL ANGEL IRIZARRY MARTINEZ, 91, The Bronx',
    e: 'March 7, 2020',
  },
  {
    i: 1923,
    d: 'BARRY KAYE, 91, Manhattan',
    e: 'April 21, 2020',
  },
  {
    i: 1924,
    d: 'RANDY LANCHNER, 91',
    e: 'March 14, 2021',
  },
  {
    i: 1925,
    d: 'ANNA LEVINE, 91, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 1926,
    d: 'RAE LUCCHESE, 91, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 1927,
    d: 'SARA MERMELSTEIN, 91, Brooklyn',
  },
  {
    i: 1928,
    d: 'JEANETTE “J FLO” MINCIELI, 91, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1929,
    d: 'JOSEPH P. MURPHY, 91, Staten Island',
    e: 'May 16, 2020',
  },
  {
    i: 1930,
    d: 'YEHUDIS “JUDITH” SHUBERT-FINKELSTEIN, 91, Brooklyn',
  },
  {
    i: 1931,
    d: 'JOHN HOYT STOOKEY, 91',
    e: 'January 31, 2021',
  },
  {
    i: 1932,
    d: 'MARGARET CIVERS, 92, Manhattan',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Margaret_Civers.jpg',
  },
  {
    i: 1933,
    d: 'JUAN “KYCHY” GARCIA QUINONES, 92, Manhattan',
    e: 'May 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Garcia_Quinones.jpg',
  },
  {
    i: 1934,
    d: 'DR. ALBERT GOODGOLD, 92, Manhattan',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Albert_Goodgold.jpg',
  },
  {
    i: 1935,
    d: 'CHANDRAWATI GURDIYAL, 92, Queens',
    e: 'May 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Chandrawati_Gurdiyal.jpeg',
  },
  {
    i: 1936,
    d: 'LAWRENCE HAROLD KRAMER, 92, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1937,
    d: 'KHANA VOROVICH, 92, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Khana_Vorovich.jpeg',
  },
  {
    i: 1938,
    d: 'GEORGE E. WOLF, 92, Manhattan',
    e: 'June 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/George_Wolf.jpg',
  },
  {
    i: 1939,
    d: 'JOHN D. “POP POP” ANNETTA, 92, Staten Island',
    e: 'May 22, 2020',
  },
  {
    i: 1940,
    d: 'DR. HOOSHANG BEHROOZI, 92',
    e: 'April 16, 2020',
  },
  {
    i: 1941,
    d: 'AVRAHAM HAKOHEN “ROMI” COHN, 92, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 1942,
    d: 'YVETTE DIAMOND, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1943,
    d: 'WINIFRED FREDERICKS, 92, Staten Island',
  },
  {
    i: 1944,
    d: 'JEAN GERINGER, 92, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1945,
    d: 'REUBEN GUTOFF, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1946,
    d: 'YOSEF HIRSCH, 92, Brooklyn',
  },
  {
    i: 1947,
    d: 'GEORGE WILLIAM KELLY, 92, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1948,
    d: 'LEAH KLEIN, 92, Brooklyn',
  },
  {
    i: 1949,
    d: 'LEE KONITZ, 92, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1950,
    d: 'LEAH REICH, 92, Brooklyn',
  },
  {
    i: 1951,
    d: 'ALEXANDER ZUSHA/ZUSIA? ROSENBLUM, 92, Brooklyn',
  },
  {
    i: 1952,
    d: 'ABRAHAM A. RUBASHKIN, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1953,
    d: 'BETTY SHAIN, 92, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1954,
    d: 'YVONNE SHERWELL, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1955,
    d: 'RAYMOND STRYPE, 92, Brooklyn',
  },
  {
    i: 1956,
    d: 'RAFAEL TEJEDA, 92, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1957,
    d: 'PETER JOHN TOSO, 92, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 1958,
    d: 'ROBERT BROGAN, 93, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Brogan.jpg',
  },
  {
    i: 1959,
    d: 'AGATHA FINA, 93, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agatha_Fina.jpg',
  },
  {
    i: 1960,
    d: 'VINCENZO GALLINA, 93, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1961,
    d: 'JENNIE GRAZIANO, 93, Brooklyn',
    e: 'March 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jennie_Graziano.jpg',
  },
  {
    i: 1962,
    d: 'JAMES L. HUTCHERSON, 93, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_L_Hutcherson.JPG',
  },
  {
    i: 1963,
    d: 'LIGIA “PITA” MENZIES, 93, Manhattan',
    e: 'May 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ligia_Pita_Menzies.jpg',
  },
  {
    i: 1964,
    d: 'JOHN RUVO, 93, The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Ruvo.jpg',
  },
  {
    i: 1965,
    d: 'IRVING BARASH, 93, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1966,
    d: 'LOUIS JOSEPH CELI, 93, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1967,
    d: 'ANNA CORTES, 93',
    e: 'February 11, 2021',
  },
  {
    i: 1968,
    d: 'LILLIAN ECKSTEIN, 93',
    e: 'April 12, 2020',
  },
  {
    i: 1969,
    d: 'MILDRED GLASER, 93, Queens',
  },
  {
    i: 1970,
    d: 'ROSS GRAHAM, 93, Manhattan',
    e: 'January 28, 2021',
  },
  {
    i: 1971,
    d: 'MOSHE GRUNWALD, 93, Brooklyn',
  },
  {
    i: 1972,
    d: 'BESSIE MAE JEFFRESS, 93, Queens',
    e: 'May 15, 2020',
  },
  {
    i: 1973,
    d: 'STEPHEN W. KANN, 93, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1974,
    d: 'RUCHEL/RACHEL KLEIN, 93, Brooklyn',
  },
  {
    i: 1975,
    d: 'FRADEL LEIFER, 93',
  },
  {
    i: 1976,
    d: 'ELIEZER OSTREICHER, 93, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1977,
    d: 'NITA PIPPINS, 93, Manhattan',
    e: 'May 10, 2020',
  },
  {
    i: 1978,
    d: 'SHIFRA SCHARF, 93, Brooklyn',
  },
  {
    i: 1979,
    d: 'ALFRED SCHWARTZ, 93, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 1980,
    d: 'HERBERT SHAPIRO, 93, Manhattan',
    e: 'February 19, 2021',
  },
  {
    i: 1981,
    d: 'SHEINDEL TEMPLER, 93, Brooklyn',
  },
  {
    i: 1982,
    d: 'RABBI AHARON MOSHE WEISS, 93, Brooklyn',
  },
  {
    i: 1983,
    d: 'BERNARD “BERNIE” WEISSMAN, 93, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1984,
    d: 'ESTHER WEISSMAN, 93, Brooklyn',
  },
  {
    i: 1985,
    d: 'CARMELINA CEBALLOS, 94, Brooklyn',
    e: 'February 23, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmelina_Ceballos.jpg',
  },
  {
    i: 1986,
    d: 'MARION M. GAVIN, 94, Brooklyn',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marion_Gavin.JPG',
  },
  {
    i: 1987,
    d: 'ANN KROSS, 94, The Bronx',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ann_Kross.jpg',
  },
  {
    i: 1988,
    d: 'LUBA WENGERSKY, 94, Brooklyn',
    e: 'February 27, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luba_Wengersky.jpg',
  },
  {
    i: 1989,
    d: 'IRENE ZORFAS, 94, Manhattan',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Irene_Zorfas.JPG',
  },
  {
    i: 1990,
    d: 'BERYL BERNAY, 94, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1991,
    d: 'GOLDA BRACH, 94, Brooklyn',
  },
  {
    i: 1992,
    d: 'GEORGE CARAVAKIS, 94, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 1993,
    d: 'MARGARET CRUDELE, 94, Staten Island',
    e: 'January 4, 2022',
  },
  {
    i: 1994,
    d: 'LEON FENICHEL, 94',
    e: 'May 26, 2021',
  },
  {
    i: 1995,
    d: 'FELICIA FRIEDMAN, 94, The Bronx',
    e: 'May 19, 2020',
  },
  {
    i: 1996,
    d: 'CHAYA SARAH GLUCK, 94, Brooklyn',
  },
  {
    i: 1997,
    d: 'RABBI MOSHE YEHUDA GUBITZ, 94, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1998,
    d: 'MALKA KALMANOWITZ, 94, Brooklyn',
  },
  {
    i: 1999,
    d: 'JOYCE ELAINE PARKER, 94, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 2000,
    d: 'BUCKY PIZZARELLI, 94',
    e: 'April 1, 2020',
  },
  {
    i: 2001,
    d: 'JOSEPH JEROME SNEAD, 94, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 2002,
    d: 'GENESHA SOLOMON, 94, Brooklyn',
  },
  {
    i: 2003,
    d: 'WILLIAM WOLF, 94, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 2004,
    d: 'GRACE GRANTER, 95, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 2005,
    d: 'EMILY SAVITSKY, 95, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emily_Savitsky.jpg',
  },
  {
    i: 2006,
    d: 'ROBERT J. WOLFSON, 95',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Wolfson.jpg',
  },
  {
    i: 2007,
    d: 'MOE “MOE THE BUTCHER” ALBANESE, 95',
    e: 'April 7, 2020',
  },
  {
    i: 2008,
    d: 'RACHEL DVOSHE ALTEIN, 95, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 2009,
    d: 'MARIA “MAYITO” COLÓN, 95, The Bronx',
  },
  {
    i: 2010,
    d: 'STANLEY B. DREYER, 95, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 2011,
    d: 'PHOEBE GLADSTONE, 95, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 2012,
    d: 'MORTEZA KHOSROVA, 95, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 2013,
    d: 'MR. AVROHOM KLEIN, 95, Brooklyn',
  },
  {
    i: 2014,
    d: 'RABBI MORDECHAI DOVID RUBIN, 95, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 2015,
    d: 'MEIR ZEV SPITZER, 95, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 2016,
    d: 'YECHEZKEL SHRAGA WAGSHAL, 95, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 2017,
    d: 'LILLIAN LAZAR, 96',
    e: 'May 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lillian_Lazar.jpg',
  },
  {
    i: 2018,
    d: 'MIRIAM STOLZENBERG, 96, The Bronx',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miriam_Stolzenberg.JPG',
  },
  {
    i: 2019,
    d: 'JAMES A. HARPER, 96',
    e: 'December 31, 2020',
  },
  {
    i: 2020,
    d: 'SADIE MARTUCCI, 96, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 2021,
    d: 'ANNA PRIOLO RICCOBONO, 96, Staten Island',
    e: 'April 18, 2020',
  },
  {
    i: 2022,
    d: 'BLIMA SCHWARTZ, 96, Brooklyn',
  },
  {
    i: 2023,
    d: 'BERL SILBERSTEIN, 96, Brooklyn',
  },
  {
    i: 2024,
    d: 'MILTON STEINBERG, 96, The Bronx',
    e: 'January 14, 2021',
  },
  {
    i: 2025,
    d: 'JOSEPH TUSIANI, 96, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 2026,
    d: 'ROBERT M. “BOB” WEINTRAUB, 96, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 2027,
    d: 'EDWIN WEINTRAUB, 97, The Bronx',
    e: 'April 7, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edwin_Weintraub.JPG',
  },
  {
    i: 2028,
    d: 'ROLANDO ACOSTA, 97, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 2029,
    d: 'ADELINE COPPOLA, 97, The Bronx',
  },
  {
    i: 2030,
    d: 'BETTE DEWING, 97, Manhattan',
    e: 'September 5, 2020',
  },
  {
    i: 2031,
    d: 'BERTINA ELLIS, 97',
    e: 'April 8, 2020',
  },
  {
    i: 2032,
    d: 'JOSEPH FEINGOLD, 97, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 2033,
    d: 'ELYA GELBERT, 97, Brooklyn',
  },
  {
    i: 2034,
    d: 'JERZY GLOWCZEWSKI, 97, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 2035,
    d: 'ROSLYN GREEN, 97, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 2036,
    d: 'WYNN HANDMAN, 97, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 2037,
    d: 'AUSTIN I. LEMPIT, 97',
    e: 'December 22, 2020',
  },
  {
    i: 2038,
    d: 'SARA (SURA) LISSAUER, 97, Brooklyn',
  },
  {
    i: 2039,
    d: 'MOSHE MOSKOWITZ, 97, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 2040,
    d: 'EVELYN BULCOCK, 98, Brooklyn',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Bullcock.jpeg',
  },
  {
    i: 2041,
    d: 'ETTA REBECCA BUSH, 98, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Rebecca_Bush.png',
  },
  {
    i: 2042,
    d: 'HAROLD GROSSMAN, 98, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Grossman.jpg',
  },
  {
    i: 2043,
    d: 'MOSHE BERKOWITZ, 98, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 2044,
    d: 'ANNA BUCCELLATO, 98, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 2045,
    d: 'MARGARET DONAHUE, 98, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 2046,
    d: 'RABBI YAAKOV YITZCHOK EICHORN, 98, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 2047,
    d: 'ANNA MESSINA, 98',
    e: 'May 1, 2020',
  },
  {
    i: 2048,
    d: 'LAURETTE B. NIERENBERG, 98',
    e: 'January 9, 2021',
  },
  {
    i: 2049,
    d: 'VITO BRANCATO, 99, Brooklyn',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Vito_Brancato.jpg',
  },
  {
    i: 2050,
    d: 'CANDIDA ROSA MOLINA, 99, Queens',
    e: 'January 19, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Candida_Rosa_Molina.jpeg',
  },
  {
    i: 2051,
    d: 'LOUIS SCHMIDT, 99',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Schmidt.jpg',
  },
  {
    i: 2052,
    d: 'AIDEL BUCHINGER, 99, Brooklyn',
  },
  {
    i: 2053,
    d: 'CARLOS RUBIO “TIO CARLOS” ESCUDERO, 99, Queens',
    e: 'January 20, 2022',
  },
  {
    i: 2054,
    d: 'CARLOS RUBIO ESCUDERO, 99, Queens',
    e: 'January 20, 2022',
  },
  {
    i: 2055,
    d: 'SHLOMO GOLDBERG, 99, Brooklyn',
  },
  {
    i: 2056,
    d: 'GUTA SHAPIRO, 99',
    e: 'March 27, 2020',
  },
  {
    i: 2057,
    d: 'KLARA WEISZ, 99',
    e: 'April 3, 2020',
  },
  {
    i: 2058,
    d: 'MIRIAM “MIMI” KERPEN, 100, Brooklyn',
    e: 'December 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miriam_Kerpen.jpg',
  },
  {
    i: 2059,
    d: 'AVRAHAM SHMUEL ABRAMOVITZ SHMUEL ABRAMOVITZ, 100, Brooklyn',
  },
  {
    i: 2060,
    d: 'PHILIP KAHN, 100',
    e: 'April 17, 2020',
  },
  {
    i: 2061,
    d: 'LOUIS MAIELLO, 100, Staten Island',
    e: 'January 14, 2021',
  },
  {
    i: 2062,
    d: 'MADALINE ULICNY, 100, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 2063,
    d: 'SARAH FEUERWERKER, 101, Brooklyn',
  },
  {
    i: 2064,
    d: 'MARIE GRILLO, 101, Staten Island',
    e: 'January 29, 2021',
  },
  {
    i: 2065,
    d: 'SYLVIA LIEBER, 102, Queens',
    e: 'January 25, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sylvia_Lieber.png',
  },
  {
    i: 2066,
    d: 'PHYLLIS BEATRICE ANTONETZ, 103',
    e: 'April 17, 2020',
  },
  {
    i: 2067,
    d: 'ANGELA MARIE ROONEY, 103, The Bronx',
    e: 'May 27, 2020',
  },
  {
    i: 2068,
    d: 'MILLIE BELLE BERRY, 110, Manhattan',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Millie_Belle_Berry.jpg',
  },
  {
    i: 2069,
    d: 'ANTHONY “TONY” CAGGIANO',
    e: 'April 4, 2020',
  },
  {
    i: 2070,
    d: 'VIDAL CRUZ, Staten Island',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Vidal_Cruz.jpg',
  },
  {
    i: 2071,
    d: 'RAMON GONZALEZ COCA, Queens',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ramon_Gonzalez.jpg',
  },
  {
    i: 2072,
    d: 'JAMES GREEN, The Bronx',
  },
  {
    i: 2073,
    d: 'CLYDE WILLIAM HENRY, Brooklyn',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clyde_William_Henry.jpg',
  },
  {
    i: 2074,
    d: 'LAURA TAYLOR HOWELL, The Bronx',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Laura_TaylorHowell.jpg',
  },
  {
    i: 2075,
    d: 'MELODY REED, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Melody_Reed.jpg',
  },
  {
    i: 2076,
    d: 'AGUSTIN SALVADOR',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agustin_Salvador.jpeg',
  },
  {
    i: 2077,
    d: 'WILLIAM “BILLY” SCANLAN JR.',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Scanlan.jpg',
  },
  {
    i: 2078,
    d: 'GLORIA DEL CARMEN QUIROZ SERNA',
    e: 'February 1, 2021',
  },
  {
    i: 2079,
    d: 'JAMES H. “SHAMUS” WEBER, Brooklyn',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_Weber.jpeg',
  },
  {
    i: 2080,
    d: 'JULIAN CLYDE WESTON, Brooklyn',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Julian_Clyde_Weston.jpg',
  },
  {
    i: 2081,
    d: 'KWABENA ACHEAMPONG',
  },
  {
    i: 2082,
    d: 'MARILYN ACLUFI, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 2083,
    d: 'LAURO ACUNA',
    e: 'April 26, 2020',
  },
  {
    i: 2084,
    d: 'EUGENE ADAMS',
  },
  {
    i: 2085,
    d: 'LUZ INES AGRAZAL',
  },
  {
    i: 2086,
    d: 'SERGIO AGUILAR',
  },
  {
    i: 2087,
    d: 'BABUL AHMED, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 2088,
    d: 'WILMAN AJILA, Queens',
  },
  {
    i: 2089,
    d: 'SHAFIQUL ALAM',
  },
  {
    i: 2090,
    d: 'LUIS ALBINO, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 2091,
    d: 'ANGEL ALEJANDRO',
  },
  {
    i: 2092,
    d: 'ALI ALI',
  },
  {
    i: 2093,
    d: 'ISMAT ALI, Queens',
  },
  {
    i: 2094,
    d: 'HAZRAT ALI, Manhattan',
  },
  {
    i: 2095,
    d: 'KHANDAKER MOSADDEK ALI (SADEK), The Bronx',
  },
  {
    i: 2096,
    d: 'MICHELLE ALLEN, Brooklyn',
  },
  {
    i: 2097,
    d: 'ISMAEL ALMODOVAR, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 2098,
    d: 'RICARDO ALVARADO RIVAS',
  },
  {
    i: 2099,
    d: 'WALTER L. ANCE, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2100,
    d: 'ARTHUR ANDERSON',
    e: 'April 14, 2020',
  },
  {
    i: 2101,
    d: 'WILLIAM ANDERSON',
  },
  {
    i: 2102,
    d: 'CORNELL ANDERSON',
  },
  {
    i: 2103,
    d: 'WILLIE ANDERSON, The Bronx',
  },
  {
    i: 2104,
    d: 'GOVINDA ANDIAPPEN, Queens',
  },
  {
    i: 2105,
    d: 'SABINO ANDRADE',
  },
  {
    i: 2106,
    d: 'LESTER ANTHONY',
  },
  {
    i: 2107,
    d: 'SEGUNO ARCHIBALA',
  },
  {
    i: 2108,
    d: 'EVERARDO ARENAS, Queens',
    e: 'May 12, 2020',
  },
  {
    i: 2109,
    d: 'DONALD ARRINGTON',
  },
  {
    i: 2110,
    d: 'ELPIDIO ASPIROZ, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 2111,
    d: 'RODRIGO ASTUDIILLO',
  },
  {
    i: 2112,
    d: 'JOSEPH AUFRICHTIG, Brooklyn',
  },
  {
    i: 2113,
    d: 'RABBI MEIR YISROEL AZRYLEWITZ, Brooklyn',
  },
  {
    i: 2114,
    d: 'MUHAMMAD ALI BABUL, Queens',
  },
  {
    i: 2115,
    d: 'MIGEL BAEZ, Brooklyn',
  },
  {
    i: 2116,
    d: 'ALFRED BAGLEY',
  },
  {
    i: 2117,
    d: 'GWENDOLYN BAILEY',
  },
  {
    i: 2118,
    d: 'ABRAHAM BALLINAS, Queens',
    e: 'April 29, 2020',
  },
  {
    i: 2119,
    d: 'ROBERT BARLEY',
  },
  {
    i: 2120,
    d: 'SALVATORE BATTAGLIA',
  },
  {
    i: 2121,
    d: 'ETHEL BAUMANN',
  },
  {
    i: 2122,
    d: 'THOMAS BEALS',
  },
  {
    i: 2123,
    d: 'DONALD BEARD',
  },
  {
    i: 2124,
    d: 'CHARLES H. BEATTY, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 2125,
    d: 'KETTY BEAUBIEN, Brooklyn',
  },
  {
    i: 2126,
    d: 'JAHANARA BEGUM, Queens',
  },
  {
    i: 2127,
    d: 'BARBARA E. BENJAMIN, Queens',
    e: 'March 20, 2020',
  },
  {
    i: 2128,
    d: 'MATTHEW BERENGUER, The Bronx',
  },
  {
    i: 2129,
    d: 'MARGARITA BERMUDEZ',
  },
  {
    i: 2130,
    d: 'GLADYS BARCELO BETANCOURT, The Bronx',
  },
  {
    i: 2131,
    d: 'ANNA BLADES',
    e: 'April 8, 2020',
  },
  {
    i: 2132,
    d: 'DAVID BLAGROVE',
  },
  {
    i: 2133,
    d: 'JULIA BLANCAS',
  },
  {
    i: 2134,
    d: 'MANUEL BOITEL',
  },
  {
    i: 2135,
    d: 'MARTIN BOND',
  },
  {
    i: 2136,
    d: 'ROBERT BOOTH',
  },
  {
    i: 2137,
    d: 'ARISTEO BOSQUES',
    e: 'May 25, 2020',
  },
  {
    i: 2138,
    d: 'ROBERTO BRAVO',
    e: 'April 13, 2020',
  },
  {
    i: 2139,
    d: 'MELQUIADES “PAUL” BRAVO',
  },
  {
    i: 2140,
    d: 'JULIA BROWN, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 2141,
    d: 'LEE BROWN',
    e: 'March 2, 2021',
  },
  {
    i: 2142,
    d: 'RANDY BROWN',
  },
  {
    i: 2143,
    d: 'CATHERINE BRUNO',
  },
  {
    i: 2144,
    d: 'FIORE BRUSCO',
  },
  {
    i: 2145,
    d: 'TYSUN BURGESS',
  },
  {
    i: 2146,
    d: 'ALEJANDRO BUSTAMANTE',
    e: 'April 3, 2020',
  },
  {
    i: 2147,
    d: 'HECTOR CABANA, Queens',
  },
  {
    i: 2148,
    d: 'MARCELO CAMPOS, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 2149,
    d: 'IRIS MILAGROS CANCEL',
    e: 'April 14, 2020',
  },
  {
    i: 2150,
    d: 'SAL CAPITUMMINO',
  },
  {
    i: 2151,
    d: 'ROSA CARABALLO, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 2152,
    d: 'ROBERTO CARDONA',
  },
  {
    i: 2153,
    d: 'FELIPE “TITO” CARRION, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 2154,
    d: 'FRAN CARROLL',
  },
  {
    i: 2155,
    d: 'HÉCTOR CASTILLO MENDEZ, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 2156,
    d: 'SANTIAGO CASTRO',
  },
  {
    i: 2157,
    d: 'HENRY CASTRO, Queens',
  },
  {
    i: 2158,
    d: 'HENRY CASTRO',
  },
  {
    i: 2159,
    d: 'ULYSSESE “ULICES” CASTRO, Queens',
  },
  {
    i: 2160,
    d: 'ERESMILDO CATIBLANCO',
  },
  {
    i: 2161,
    d: 'SALOME CAZARES, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 2162,
    d: 'GERMANO CELANT, Manhattan',
    e: 'April 29, 2020',
  },
  {
    i: 2163,
    d: 'JOSEPH CERAMI',
  },
  {
    i: 2164,
    d: 'JOSEPH CERIALE',
  },
  {
    i: 2165,
    d: 'DENNIS CERRATO, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 2166,
    d: 'JOSÉ R. CHABLA, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 2167,
    d: 'THOMAS TECK KUWE CHAI, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 2168,
    d: 'LUCILLE CHAPMAN',
  },
  {
    i: 2169,
    d: 'EDWARD CHARLES, The Bronx',
  },
  {
    i: 2170,
    d: 'RICARDO RAMOS CHAVEZ, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 2171,
    d: 'DANIEL CHAVEZ, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 2172,
    d: 'JOSE A FUENTES CHAVEZ',
  },
  {
    i: 2173,
    d: 'YEETANG CHEUNG',
  },
  {
    i: 2174,
    d: 'RICARDO CHILCHOA, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 2175,
    d: 'MUTABBIR CHOWDHURY',
    e: 'March 28, 2020',
  },
  {
    i: 2176,
    d: 'DAVID RONALD CHRISTIAN, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 2177,
    d: 'ERNIE CHUMPITAZ',
  },
  {
    i: 2178,
    d: 'MITTIE CLARK-JOHNSON, Brooklyn',
  },
  {
    i: 2179,
    d: 'RAUL CLARKE',
    e: 'March 31, 2020',
  },
  {
    i: 2180,
    d: 'DENISE COLBERT, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 2181,
    d: 'RODOLFO COLON',
  },
  {
    i: 2182,
    d: 'CRISTIAN COLON',
  },
  {
    i: 2183,
    d: 'KATHY CORNEJO',
    e: 'May 6, 2020',
  },
  {
    i: 2184,
    d: 'ROBERTO CORREA',
  },
  {
    i: 2185,
    d: 'RANULFO CORTEZ, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 2186,
    d: 'PETER MICHAEL COSTA',
  },
  {
    i: 2187,
    d: 'CURTIS COVINGTON',
  },
  {
    i: 2188,
    d: 'ANITA CRUMPTON',
    e: 'April 26, 2020',
  },
  {
    i: 2189,
    d: 'RAFAEL TORRES CRUZ, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 2190,
    d: 'CEASAR CRUZ',
  },
  {
    i: 2191,
    d: 'ZACARIAS DE LA CRUZ, Queens',
  },
  {
    i: 2192,
    d: 'GILDA CRUZ',
  },
  {
    i: 2193,
    d: 'CARLOS CRUZ',
  },
  {
    i: 2194,
    d: 'ZOILA CUZCO',
  },
  {
    i: 2195,
    d: 'JOHN DALESSANDRO',
  },
  {
    i: 2196,
    d: 'SALAJDIN DALIPI',
  },
  {
    i: 2197,
    d: 'WILBUR DAUGHTRY',
  },
  {
    i: 2198,
    d: 'HORACE DAVIS',
  },
  {
    i: 2199,
    d: 'CHARLOTTE DAVIS',
  },
  {
    i: 2200,
    d: 'LEONIDES DE JESUS, The Bronx',
  },
  {
    i: 2201,
    d: 'ERNESTO “AUDIE” DELEON',
    e: 'April 13, 2020',
  },
  {
    i: 2202,
    d: 'PIERRE DESHAUTEURS, Staten Island',
    e: 'March 16, 2020',
  },
  {
    i: 2203,
    d: 'ALBERTO DIAZ',
    e: 'March 21, 2020',
  },
  {
    i: 2204,
    d: 'ANTONIA DIAZ',
  },
  {
    i: 2205,
    d: 'HORALIA PALESTINO DIAZ',
  },
  {
    i: 2206,
    d: 'ROLANDO DIAZ',
  },
  {
    i: 2207,
    d: 'FREDDY DIAZ',
  },
  {
    i: 2208,
    d: 'MIGUEL DIAZ',
  },
  {
    i: 2209,
    d: 'CRYSTAL DIXON',
  },
  {
    i: 2210,
    d: 'MICHELLE DONALDOSN, Manhattan',
  },
  {
    i: 2211,
    d: 'ESSIE DORSEY',
  },
  {
    i: 2212,
    d: 'EMILY DUNCAN, Brooklyn',
  },
  {
    i: 2213,
    d: 'JOHN HENRY EDINGER',
  },
  {
    i: 2214,
    d: 'ROBERT EDMOND, Brooklyn',
  },
  {
    i: 2215,
    d: 'DEIDRE EDWARDS',
    e: 'April 6, 2020',
  },
  {
    i: 2216,
    d: 'WAYNE EDWARDS, Queens',
  },
  {
    i: 2217,
    d: 'JEAN EMILE, Brooklyn',
  },
  {
    i: 2218,
    d: 'ALFREDO ESPINAL, The Bronx',
  },
  {
    i: 2219,
    d: 'FELIX ESPINAL',
  },
  {
    i: 2220,
    d: 'ANGEL ESPINOZA',
  },
  {
    i: 2221,
    d: 'ALFREDO ESTRADA',
  },
  {
    i: 2222,
    d: 'ELMER ROMEL EUCEDA',
  },
  {
    i: 2223,
    d: 'SUZETTE FACEY, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 2224,
    d: 'NUPU FAKHRUZZAMAN, Queens',
    e: 'May 10, 2020',
  },
  {
    i: 2225,
    d: 'VICTOR FATTORUSSO',
  },
  {
    i: 2226,
    d: 'JOSEPH FELDER',
  },
  {
    i: 2227,
    d: 'MIQUEL FELMINE',
  },
  {
    i: 2228,
    d: 'TAI-DRIN FENG',
  },
  {
    i: 2229,
    d: 'HARRY FERNANDEZ',
  },
  {
    i: 2230,
    d: 'LOUIS FERRER',
  },
  {
    i: 2231,
    d: 'BETTY FIGUEROA, The Bronx',
  },
  {
    i: 2232,
    d: 'GERMAN RAMALES FLORES',
    e: 'April 10, 2020',
  },
  {
    i: 2233,
    d: 'VICENTA FLORES, Queens',
  },
  {
    i: 2234,
    d: 'CLEMENTINA MORA FLORES',
  },
  {
    i: 2235,
    d: 'URSULA FLOWERS, The Bronx',
  },
  {
    i: 2236,
    d: 'LIZ FONTANEZ',
  },
  {
    i: 2237,
    d: 'ALVIN FRAZIER',
  },
  {
    i: 2238,
    d: 'LEMUEL FRAZIER',
  },
  {
    i: 2239,
    d: 'WILLIE FREEMAN',
  },
  {
    i: 2240,
    d: 'KEVIN FRETT',
    e: 'April 11, 2020',
  },
  {
    i: 2241,
    d: 'FREDDY FUENTES, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 2242,
    d: 'CONCEPTIONE FUENTES',
  },
  {
    i: 2243,
    d: 'MOHAMMED GAFFAR',
  },
  {
    i: 2244,
    d: 'WILLIE FLORA GAINES, Queens',
  },
  {
    i: 2245,
    d: 'ELY GALAN, Brooklyn',
  },
  {
    i: 2246,
    d: 'FERNANDO GALLEGO',
  },
  {
    i: 2247,
    d: 'NECITAS GALURA',
  },
  {
    i: 2248,
    d: 'ANDRE GANTHIER',
  },
  {
    i: 2249,
    d: 'OLGA GARCIA, The Bronx',
  },
  {
    i: 2250,
    d: 'LEON GARRETT',
  },
  {
    i: 2251,
    d: 'SIMON WOLSEY GEORGE, The Bronx',
  },
  {
    i: 2252,
    d: 'HAROLD GERMAIN, Brooklyn',
  },
  {
    i: 2253,
    d: 'ALEXANDER GIGUEREDO',
    e: 'March 25, 2020',
  },
  {
    i: 2254,
    d: 'KENNETH GILLESPIE',
  },
  {
    i: 2255,
    d: 'HERSHUL GINN',
  },
  {
    i: 2256,
    d: 'GAIL GLASGOW',
  },
  {
    i: 2257,
    d: 'CAREN GOFF',
  },
  {
    i: 2258,
    d: 'SAUL GOMEZ, The Bronx',
  },
  {
    i: 2259,
    d: 'LUCIANO GOMEZ',
  },
  {
    i: 2260,
    d: 'MICHAEL GOMEZ',
  },
  {
    i: 2261,
    d: 'GIL GONZALES',
  },
  {
    i: 2262,
    d: 'MARIA E. “TELECO” GONZALEZ',
    e: 'April 13, 2020',
  },
  {
    i: 2263,
    d: 'MARIA BERTHA GONZALEZ',
    e: 'April 14, 2020',
  },
  {
    i: 2264,
    d: 'NEREIDA GONZALEZ, The Bronx',
    e: 'July 20, 2020',
  },
  {
    i: 2265,
    d: 'JOSE MARTIN ROMERO GONZALEZ',
  },
  {
    i: 2266,
    d: 'MARIA GONZALEZ',
  },
  {
    i: 2267,
    d: 'DENNIS GOULDING, Brooklyn',
  },
  {
    i: 2268,
    d: 'GREGORY GRAHAM, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 2269,
    d: 'HESTER GREEN, The Bronx',
  },
  {
    i: 2270,
    d: 'JACOB J. GREENBERG, Brooklyn',
  },
  {
    i: 2271,
    d: 'CLAUDE GREGOIRE',
  },
  {
    i: 2272,
    d: 'EUGENE GRIFFIN',
  },
  {
    i: 2273,
    d: 'SEGUNDO ESPIRO GUAMAN, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 2274,
    d: 'MARIA ZOILA GUAMAN, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    i: 2275,
    d: 'JORGE GUAMAN',
  },
  {
    i: 2276,
    d: 'EDWIN GUAMAN, Queens',
  },
  {
    i: 2277,
    d: 'EDWIN P. GUAMAN',
  },
  {
    i: 2278,
    d: 'DANIEL GUILLERMO',
  },
  {
    i: 2279,
    d: 'JOSE GUTIERREZ',
  },
  {
    i: 2280,
    d: 'HUGO GUTIERREZ',
  },
  {
    i: 2281,
    d: 'MAURILLO GUZMAN, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 2282,
    d: 'KOFI GYAMI',
    e: 'April 27, 2020',
  },
  {
    i: 2283,
    d: 'SHMUEL HAKOHEN MILLER, Brooklyn',
  },
  {
    i: 2284,
    d: 'RONALD HALL',
  },
  {
    i: 2285,
    d: 'EARL HARRIS',
  },
  {
    i: 2286,
    d: 'CHARLES HARRIS',
  },
  {
    i: 2287,
    d: 'AL HAVELIN',
    e: 'April 11, 2020',
  },
  {
    i: 2288,
    d: 'JANET HEADLEY',
  },
  {
    i: 2289,
    d: 'ALVIN HENDRICKS',
  },
  {
    i: 2290,
    d: 'JOSEMIQUEL “YOYA” HENRIQUEZ',
    e: 'April 11, 2020',
  },
  {
    i: 2291,
    d: 'MARCOS HERRERA',
  },
  {
    i: 2292,
    d: 'CECIL HEWITT, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 2293,
    d: 'CARLOS ANDRADE HIDALGO',
  },
  {
    i: 2294,
    d: 'JOSEPHINE HILL, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 2295,
    d: 'RICARDO HILL',
    e: 'May 14, 2020',
  },
  {
    i: 2296,
    d: 'CLINTON HINDS',
    e: 'April 29, 2020',
  },
  {
    i: 2297,
    d: 'LIONEL HOGAN, Queens',
  },
  {
    i: 2298,
    d: 'ED HOLDER, Brooklyn',
  },
  {
    i: 2299,
    d: 'MD SHIPON HOSSAIN',
    e: 'March 29, 2020',
  },
  {
    i: 2300,
    d: 'ANNABEL HOWELL, Brooklyn',
  },
  {
    i: 2301,
    d: 'MONIRUL HUDA, Queens',
  },
  {
    i: 2302,
    d: 'MOHAMMAD ZAKIR HUSSEIN, Queens',
  },
  {
    i: 2303,
    d: 'MARTIN IBARRA',
  },
  {
    i: 2304,
    d: 'PIETRO FABRICIO IDROVO VAZA, Queens',
  },
  {
    i: 2305,
    d: 'LEROI ISOM',
  },
  {
    i: 2306,
    d: 'CHRIS JACKOWSKI',
  },
  {
    i: 2307,
    d: 'RUSSELL JACKSON',
  },
  {
    i: 2308,
    d: 'MARIE JACQUES, The Bronx',
  },
  {
    i: 2309,
    d: 'CLAUDE JAMES, The Bronx',
  },
  {
    i: 2310,
    d: 'GEORGE JANVIER, The Bronx',
    e: 'December 23, 2020',
  },
  {
    i: 2311,
    d: 'MANUEL R. JARA',
    e: 'April 19, 2020',
  },
  {
    i: 2312,
    d: 'JESSICA JARAMILLO, Queens',
  },
  {
    i: 2313,
    d: 'MORENA TORREDES “TITA” JAVINES, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 2314,
    d: 'NELSON JENKINS',
  },
  {
    i: 2315,
    d: 'YESENIA MARIA JIMENEZ, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 2316,
    d: 'FRANCISCO ARIZA JIMENEZ, Queens',
  },
  {
    i: 2317,
    d: 'CARLYLE JOHNSON',
  },
  {
    i: 2318,
    d: 'SHELLY JOHNSON',
  },
  {
    i: 2319,
    d: 'JOAN JOHNSON',
  },
  {
    i: 2320,
    d: 'JAMES JONES',
  },
  {
    i: 2321,
    d: 'JOHN JONES',
  },
  {
    i: 2322,
    d: 'DONALD JONES, Manhattan',
  },
  {
    i: 2323,
    d: 'LELAND JORDAN',
  },
  {
    i: 2324,
    d: 'JOHNNY JOYNER',
  },
  {
    i: 2325,
    d: 'SANTOS JUAREZ, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 2326,
    d: 'ROGELIO JUSTIANIANO SR.',
  },
  {
    i: 2327,
    d: 'LEIBEL KATZ, Brooklyn',
  },
  {
    i: 2328,
    d: 'ALEXANDER KAUDERS, Brooklyn',
  },
  {
    i: 2329,
    d: 'ADVOCATE HAYAT ALI KHAN, Queens',
  },
  {
    i: 2330,
    d: 'MABIA KHATUN, The Bronx',
  },
  {
    i: 2331,
    d: 'SYED KHATUN, Queens',
  },
  {
    i: 2332,
    d: 'DEBORAH KING',
  },
  {
    i: 2333,
    d: 'SHIMON YEHOSHUA KLUGER, Brooklyn',
  },
  {
    i: 2334,
    d: 'HARVEY KNIGHT',
    e: 'April 23, 2020',
  },
  {
    i: 2335,
    d: 'FELICIA KNIGHT',
  },
  {
    i: 2336,
    d: 'PATRICK ANTONIO KNIGHT, The Bronx',
  },
  {
    i: 2337,
    d: 'JAY-NATALIE LA SANTA, The Bronx',
    e: 'April 20, 2020',
  },
  {
    i: 2338,
    d: 'SOOKNARINE LACHMINARAIN',
  },
  {
    i: 2339,
    d: 'EMANUEL LAGATTA',
  },
  {
    i: 2340,
    d: 'IRIS SHIRLENE LAKE, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 2341,
    d: 'LUIS LEBRON',
  },
  {
    i: 2342,
    d: 'DAVID LEE, Manhattan',
    e: 'May 22, 2020',
  },
  {
    i: 2343,
    d: 'KEVIN LEE, Brooklyn',
  },
  {
    i: 2344,
    d: 'JOSE LEMA, Queens',
  },
  {
    i: 2345,
    d: 'ANGEL LEON, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 2346,
    d: 'ANGELO LEOTTA, Staten Island',
    e: 'September 13, 2020',
  },
  {
    i: 2347,
    d: 'ANGELA LEWIS',
    e: 'April 5, 2020',
  },
  {
    i: 2348,
    d: 'JASON LEWIS, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 2349,
    d: 'MANUEL LIMA',
  },
  {
    i: 2350,
    d: 'PIDIO LINARES, Queens',
    e: 'March 13, 2020',
  },
  {
    i: 2351,
    d: 'SHIRLEY LINDSEY',
  },
  {
    i: 2352,
    d: 'LOUISE LLOYD, Brooklyn',
  },
  {
    i: 2353,
    d: 'LIDIA LOPEZ',
  },
  {
    i: 2354,
    d: 'ALBERTO LUCERO',
  },
  {
    i: 2355,
    d: 'RAUL LUNA, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 2356,
    d: 'ESTHER MAC, The Bronx',
  },
  {
    i: 2357,
    d: 'ANGEL MANUEL MAISONET, The Bronx',
  },
  {
    i: 2358,
    d: 'ANTHONY MALLANO, The Bronx',
  },
  {
    i: 2359,
    d: 'MARK MALONE',
  },
  {
    i: 2360,
    d: 'GARY MARBURY',
  },
  {
    i: 2361,
    d: 'CARLA MARCELO, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 2362,
    d: 'MENDEL MARGULIS, Brooklyn',
  },
  {
    i: 2363,
    d: 'EDDY MARQUEZ, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 2364,
    d: 'RAUL MARRERO',
  },
  {
    i: 2365,
    d: 'ALE MARTIN, Queens',
  },
  {
    i: 2366,
    d: 'JORGE SAN MARTIN',
  },
  {
    i: 2367,
    d: 'EFRAIN MARTINEZ, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 2368,
    d: 'ALFREDO MARTINEZ, Queens',
  },
  {
    i: 2369,
    d: 'MARIA MINERVA MARTINEZ, Queens',
  },
  {
    i: 2370,
    d: 'CARMEN MARTINEZ, The Bronx',
  },
  {
    i: 2371,
    d: 'FORTUNATO MARTINEZ',
  },
  {
    i: 2372,
    d: 'EDUARDO MARTINEZ HERNANDEZ, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 2373,
    d: 'OLIVERIO DANIEL MARÍN LÓPEZ',
  },
  {
    i: 2374,
    d: 'PATRICIA MASON, Brooklyn',
  },
  {
    i: 2375,
    d: 'HAROLD MAYS',
  },
  {
    i: 2376,
    d: 'JOHN MCDONALD',
  },
  {
    i: 2377,
    d: 'NICOLA MCINTYRE, Brooklyn',
  },
  {
    i: 2378,
    d: 'HEARLY MCKINNON',
  },
  {
    i: 2379,
    d: 'ENOS MCKOY',
  },
  {
    i: 2380,
    d: 'DORIS MCRAE, The Bronx',
  },
  {
    i: 2381,
    d: 'JUAN MEDINA',
  },
  {
    i: 2382,
    d: 'YOSEF MEHLER, Brooklyn',
  },
  {
    i: 2383,
    d: 'LUZ DARY MEJIA QUICENO',
    e: 'April 21, 2020',
  },
  {
    i: 2384,
    d: 'ALEJANDRO MENDEZ, Staten Island',
    e: 'April 28, 2020',
  },
  {
    i: 2385,
    d: 'GUILLERMO MENDOZA',
    e: 'April 21, 2020',
  },
  {
    i: 2386,
    d: 'WALTER MENDOZA, Queens',
    e: 'June 1, 2020',
  },
  {
    i: 2387,
    d: 'MARIA MENDOZA',
  },
  {
    i: 2388,
    d: 'ISHAQ MIAH, Queens',
  },
  {
    i: 2389,
    d: 'STEVEN MICHAEL',
  },
  {
    i: 2390,
    d: 'EVERETT MILES',
  },
  {
    i: 2391,
    d: 'MARIA MERCEDES MILLAN, The Bronx',
  },
  {
    i: 2392,
    d: 'MIRIAM MILLER, Brooklyn',
  },
  {
    i: 2393,
    d: 'JAMES MILTON',
  },
  {
    i: 2394,
    d: 'JOSE RICARDO “RIVERA” MINAN',
  },
  {
    i: 2395,
    d: 'GLORIA MINOR',
    e: 'April 7, 2020',
  },
  {
    i: 2396,
    d: 'EDUARDO MIRANDA',
  },
  {
    i: 2397,
    d: 'PIERRE MOISE',
    e: 'April 3, 2020',
  },
  {
    i: 2398,
    d: 'ORLANDO MONCADA',
  },
  {
    i: 2399,
    d: 'CARLOS MONCAYO',
  },
  {
    i: 2400,
    d: 'DEODORO MONGE GUTIERREZ, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 2401,
    d: 'MARIA GARCIA MONTALBAN',
  },
  {
    i: 2402,
    d: 'HARRY MONTALVO',
  },
  {
    i: 2403,
    d: 'AGUSTIN MONTANEZ',
  },
  {
    i: 2404,
    d: 'MANUEL MONTEALEGRE, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 2405,
    d: 'HELEN MOODY',
  },
  {
    i: 2406,
    d: 'WILLIE MOORE',
  },
  {
    i: 2407,
    d: 'GLENTON MOORE, Brooklyn',
  },
  {
    i: 2408,
    d: 'ANDRES MORALES, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 2409,
    d: 'JORGE O. MORALES, Queens',
  },
  {
    i: 2410,
    d: 'CARLOS MORENO',
    e: 'April 21, 2020',
  },
  {
    i: 2411,
    d: 'IMELDA MORENO-LUCERO',
  },
  {
    i: 2412,
    d: 'VIVIAN MOSS VOELPEL',
  },
  {
    i: 2413,
    d: 'ALBERT MUNGIN',
  },
  {
    i: 2414,
    d: 'JOSHUA W. MUNOZ, The Bronx',
  },
  {
    i: 2415,
    d: 'ROGER MUSCADI, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 2416,
    d: 'SAW THEIN “SAM” MYINT',
    e: 'April 19, 2020',
  },
  {
    i: 2417,
    d: 'PEDRO MÁRQUEZ',
  },
  {
    i: 2418,
    d: 'HANSARAJ NANKISSURE, Queens',
  },
  {
    i: 2419,
    d: 'MARGARET ADAM NAREL, The Bronx',
  },
  {
    i: 2420,
    d: 'BENNY NASTASI',
  },
  {
    i: 2421,
    d: 'WENDEL NAVARRO',
  },
  {
    i: 2422,
    d: 'MICHAEL NELSON',
  },
  {
    i: 2423,
    d: 'JUSTICE NANA YAW NYANTAKYI, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 2424,
    d: 'FRANCISCO NÚÑEZ',
  },
  {
    i: 2425,
    d: "MICHAEL O'HAGAN",
  },
  {
    i: 2426,
    d: 'BLANCA “BLANQUITA” OLIVA TABORDA',
  },
  {
    i: 2427,
    d: 'BENJAMIN ONODU, Queens',
  },
  {
    i: 2428,
    d: 'KENNY ORTEGA',
  },
  {
    i: 2429,
    d: 'NOE ORTIZ, The Bronx',
    e: 'June 6, 2020',
  },
  {
    i: 2430,
    d: 'SUCY ORTIZ',
  },
  {
    i: 2431,
    d: 'LLOYD OSBOURNE, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 2432,
    d: 'RAMON OSORIA, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 2433,
    d: 'JULIO PACHECO, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 2434,
    d: 'FRANCISCO PACHECO',
  },
  {
    i: 2435,
    d: 'LUZ PALOMINO, Queens',
  },
  {
    i: 2436,
    d: 'MARIA PAPAYIANNIA, Brooklyn',
    e: 'December 17, 2020',
  },
  {
    i: 2437,
    d: 'ORLANDO PARRA',
  },
  {
    i: 2438,
    d: 'GIRISH PATEL',
  },
  {
    i: 2439,
    d: 'SERGE PAUL',
  },
  {
    i: 2440,
    d: 'VICENTE PAVIA, Staten Island',
  },
  {
    i: 2441,
    d: 'DAVID PERSAUD',
  },
  {
    i: 2442,
    d: 'MICHAEL PETERSON',
  },
  {
    i: 2443,
    d: 'MARIE PETIT-HOMME',
    e: 'May 13, 2020',
  },
  {
    i: 2444,
    d: 'ADRIAN PHILLIPS',
  },
  {
    i: 2445,
    d: 'CINDY PICOU, Brooklyn',
  },
  {
    i: 2446,
    d: 'LORENZO W. PINCAY, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2447,
    d: 'LIVETTE PLAN, Queens',
  },
  {
    i: 2448,
    d: 'JAMES POWERS, Queens',
  },
  {
    i: 2449,
    d: 'MAGGIE PRICE',
  },
  {
    i: 2450,
    d: 'URIAH PRYCE',
  },
  {
    i: 2451,
    d: 'FIDEL I. PULAGRIN',
  },
  {
    i: 2452,
    d: 'MANUEL SALVADOR PUMA',
  },
  {
    i: 2453,
    d: 'FELIX PUNO II',
    e: 'April 23, 2020',
  },
  {
    i: 2454,
    d: 'LUCY “MAMA” QUESADA, The Bronx',
  },
  {
    i: 2455,
    d: 'WILLIE QUEZADA, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 2456,
    d: 'MOHAMMED RAHMAN, Queens',
  },
  {
    i: 2457,
    d: 'JOSE RAMON, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2458,
    d: 'JOSE RAMOS, The Bronx',
  },
  {
    i: 2459,
    d: 'ANTONIA RAMOS',
  },
  {
    i: 2460,
    d: 'STEVE RANNAZZISI',
  },
  {
    i: 2461,
    d: 'TAZIN RASHED',
  },
  {
    i: 2462,
    d: 'HARUNUR RASHID, Queens',
  },
  {
    i: 2463,
    d: 'WESTLY REED',
  },
  {
    i: 2464,
    d: 'MELVIN REEVES',
  },
  {
    i: 2465,
    d: 'RAYNARD REMBERT',
  },
  {
    i: 2466,
    d: 'JOSE REYES',
  },
  {
    i: 2467,
    d: 'RAMON REYES, The Bronx',
  },
  {
    i: 2468,
    d: 'KENNETH RICKETTS, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 2469,
    d: 'LEROY RIDDICK',
  },
  {
    i: 2470,
    d: 'OBDULIA RIVERA, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 2471,
    d: 'HILDA RIVERA, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 2472,
    d: 'MIGUEL RIVERA',
  },
  {
    i: 2473,
    d: 'RONALD ROBINSON',
  },
  {
    i: 2474,
    d: 'J.C. ROBINSON',
  },
  {
    i: 2475,
    d: 'RUBEN RODRIGUEZ, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 2476,
    d: 'WILLIAM RODRIGUEZ',
  },
  {
    i: 2477,
    d: 'OSCAR RODRIGUEZ',
  },
  {
    i: 2478,
    d: 'HUMBERTO RODRIGUEZ, Brooklyn',
  },
  {
    i: 2479,
    d: 'ANAVELIO RODRIGUEZ',
  },
  {
    i: 2480,
    d: 'STEVE J. RODRIGUEZ, Queens',
  },
  {
    i: 2481,
    d: 'MIGUEL RODRIGUEZ, Queens',
  },
  {
    i: 2482,
    d: 'EDWIN RODRIGUEZ',
  },
  {
    i: 2483,
    d: 'ROBERTO RODRIGUEZ',
  },
  {
    i: 2484,
    d: 'THOMAS RODRIGUEZ',
  },
  {
    i: 2485,
    d: 'EDDY RODRÍGUEZ',
  },
  {
    i: 2486,
    d: 'ROMAXI ROJAS',
  },
  {
    i: 2487,
    d: 'FRANKLIN ROLANDO',
  },
  {
    i: 2488,
    d: 'MIGUEL ROLDAN, Queens',
    e: 'May 25, 2020',
  },
  {
    i: 2489,
    d: 'RAMON ROMAN',
    e: 'April 5, 2020',
  },
  {
    i: 2490,
    d: 'OMAR ROMERO, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 2491,
    d: 'JOSÉ MARTÍN ROMERO GONZÁLEZ',
  },
  {
    i: 2492,
    d: 'RAYMOND ROSA',
  },
  {
    i: 2493,
    d: 'MARIO ROSA',
  },
  {
    i: 2494,
    d: 'MARIA MERCEDES ROSARIO, The Bronx',
  },
  {
    i: 2495,
    d: 'PETER ROSCONI, Brooklyn',
  },
  {
    i: 2496,
    d: 'MARVIN ROSENFELD',
  },
  {
    i: 2497,
    d: 'ABDUR ROUF, The Bronx',
  },
  {
    i: 2498,
    d: 'JACQUELINE “JACKIE” ROWE, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 2499,
    d: 'JOHNNY SABATER',
  },
  {
    i: 2500,
    d: 'ANAND SAHADEO, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 2501,
    d: 'BAQIR GILANI SAHIBZADA',
  },
  {
    i: 2502,
    d: 'ROMAN GUERRERO SALDIVAR',
    e: 'April 20, 2020',
  },
  {
    i: 2503,
    d: 'WILLIAM SALES',
  },
  {
    i: 2504,
    d: 'JOSE SALMERON, Queens',
  },
  {
    i: 2505,
    d: 'JORGE SAN MARTIN, Queens',
  },
  {
    i: 2506,
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 2507,
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 2508,
    d: 'JULIO SANCHEZ',
  },
  {
    i: 2509,
    d: 'RICHARD MAURICIO SALINAS SANCHEZ',
  },
  {
    i: 2510,
    d: 'JOSE LUIS SANCHEZ PEREZ, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 2511,
    d: 'MARIA TERESA SANGUINETTI, The Bronx',
  },
  {
    i: 2512,
    d: 'ELIEZER SANTIAGO, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 2513,
    d: 'GEORGE SANTIAGO',
    e: 'May 6, 2020',
  },
  {
    i: 2514,
    d: 'EDWIN SANTIAGO',
  },
  {
    i: 2515,
    d: 'MING SANTO',
  },
  {
    i: 2516,
    d: 'SHAH J. SARKAR, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 2517,
    d: 'MENACHEM MENDEL SCHLEISINGER, Brooklyn',
  },
  {
    i: 2518,
    d: 'ZVI YEHUDA SCHMIDT, Brooklyn',
  },
  {
    i: 2519,
    d: 'WALTER SCOTT, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 2520,
    d: 'PAUL SEBASTIAN',
  },
  {
    i: 2521,
    d: 'YVES MANUEL SEGUI',
  },
  {
    i: 2522,
    d: 'ERNST SEVERE, Brooklyn',
  },
  {
    i: 2523,
    d: 'MAJUMDER SHAFIQUR RAHMAN',
    e: 'March 28, 2020',
  },
  {
    i: 2524,
    d: 'CHAIM SHROOT, Brooklyn',
  },
  {
    i: 2525,
    d: 'RIVKA RACHEL SICHERMAN, Brooklyn',
  },
  {
    i: 2526,
    d: 'JOHN SIEGEL',
  },
  {
    i: 2527,
    d: 'AARON SILBERSTEIN, Brooklyn',
  },
  {
    i: 2528,
    d: 'QUINSEY SIMPSON',
  },
  {
    i: 2529,
    d: 'REGINALD SMALL',
  },
  {
    i: 2530,
    d: 'CORRINE SMITH',
  },
  {
    i: 2531,
    d: 'JUDITH SMITH',
  },
  {
    i: 2532,
    d: 'SHARON SOCKWELL',
  },
  {
    i: 2533,
    d: 'PAULINE SOTO',
    e: 'August 16, 2021',
  },
  {
    i: 2534,
    d: 'JOHN SPUCHES',
    e: 'February 3, 2021',
  },
  {
    i: 2535,
    d: 'EVE STEIN',
  },
  {
    i: 2536,
    d: 'RALPH STEINBERG',
  },
  {
    i: 2537,
    d: 'ROBERT “STEVE THE BOOKMAN” STEVENS',
    e: 'April 21, 2020',
  },
  {
    i: 2538,
    d: 'EILEEN STEWART, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 2539,
    d: 'DUANE EDWARD STEWART, The Bronx',
  },
  {
    i: 2540,
    d: 'RAYMOND SUGRIM',
  },
  {
    i: 2541,
    d: 'SYLVAN SYLVESTER, Brooklyn',
  },
  {
    i: 2542,
    d: 'LUCIEN SZPIRO, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 2543,
    d: 'VIRGINIA BARRON TAYLOE',
    e: 'May 26, 2020',
  },
  {
    i: 2544,
    d: 'ANTHONY “TONY” THOMAS, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 2545,
    d: 'WILLIAM THOMAS, Manhattan',
  },
  {
    i: 2546,
    d: 'JEAN THOMPSON, Queens',
    e: 'January 29, 2021',
  },
  {
    i: 2547,
    d: 'ANTONIA THORNE',
    e: 'April 9, 2020',
  },
  {
    i: 2548,
    d: 'GENOVEVO “GENO” TLACZANI, Queens',
  },
  {
    i: 2549,
    d: 'MORENA TORREDES JAVINES',
  },
  {
    i: 2550,
    d: 'MIGUEL TORRES, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2551,
    d: 'TONY TORRES, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 2552,
    d: 'PEDRO TORRES',
  },
  {
    i: 2553,
    d: 'MIGUEL ANTONIO TORRES',
  },
  {
    i: 2554,
    d: 'MILLIE TORRES, The Bronx',
  },
  {
    i: 2555,
    d: 'JULIO TORRES',
  },
  {
    i: 2556,
    d: 'CARLOS TORRES',
  },
  {
    i: 2557,
    d: 'HECTOR TORREZ, Brooklyn',
  },
  {
    i: 2558,
    d: 'LIEM TRAN, Manhattan',
  },
  {
    i: 2559,
    d: 'TOMMY TRAWICK',
  },
  {
    i: 2560,
    d: 'JOSE TRINIDAD',
  },
  {
    i: 2561,
    d: 'TENZING TSERING',
    e: 'May 24, 2020',
  },
  {
    i: 2562,
    d: 'WARREN TUCKER',
  },
  {
    i: 2563,
    d: 'DAWN TYSON',
  },
  {
    i: 2564,
    d: 'DR. MOHAMMAD IFTEKHAR UDDIN, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 2565,
    d: 'GIYASH UDDIN, The Bronx',
  },
  {
    i: 2566,
    d: 'ENAM UDDIN',
  },
  {
    i: 2567,
    d: 'MOHAMMAD OZI ULLAH (KUKON), Brooklyn',
  },
  {
    i: 2568,
    d: 'JOSÉ URUCHIMA, Queens',
  },
  {
    i: 2569,
    d: 'MARGARITA UZHCA MIZHQUIRI, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 2570,
    d: 'MOISES VALENCIA, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 2571,
    d: 'JAMILET VALENTE',
  },
  {
    i: 2572,
    d: 'LUIS VANEGAS, Queens',
    e: 'May 4, 2020',
  },
  {
    i: 2573,
    d: 'ANGEL VARGAS, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 2574,
    d: 'SIRIACO ROLANDO VASQUEZ',
  },
  {
    i: 2575,
    d: 'SIRIACO ORLANDO VASQUEZ',
  },
  {
    i: 2576,
    d: 'JOSHUA VASQUEZ',
  },
  {
    i: 2577,
    d: 'JOSE G. VASQUEZ-HERRE',
  },
  {
    i: 2578,
    d: 'HUGO VEGA, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 2579,
    d: 'ENRIQUE “JUNIOR” VEGA, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 2580,
    d: 'NICHOLAS VEGA, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 2581,
    d: 'ALFREDO VEGAS',
  },
  {
    i: 2582,
    d: 'GREGORIO VELEZ',
  },
  {
    i: 2583,
    d: 'JULIAN MUNIZ VIDALS',
  },
  {
    i: 2584,
    d: 'GIROLAMO VILLAGGIO',
  },
  {
    i: 2585,
    d: 'JOSE VILLAGRAN, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2586,
    d: 'WILLANDE “ELVIS” VILME',
    e: 'May 12, 2020',
  },
  {
    i: 2587,
    d: 'DAVID VINE',
  },
  {
    i: 2588,
    d: 'JOSÉ VÁZQUEZ',
  },
  {
    i: 2589,
    d: 'DEWAINE WALTERS, The Bronx',
  },
  {
    i: 2590,
    d: 'PAUL WALTERS',
  },
  {
    i: 2591,
    d: 'JOCELYN WALTON',
  },
  {
    i: 2592,
    d: 'NAVIL WARREN',
  },
  {
    i: 2593,
    d: 'PAULINE WASHINGTON, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 2594,
    d: 'LORETTA WASHINGTON',
  },
  {
    i: 2595,
    d: 'EVELYN WATKINS',
  },
  {
    i: 2596,
    d: 'JAMES WATKINS',
  },
  {
    i: 2597,
    d: 'IRENE WEISS',
    e: 'March 26, 2020',
  },
  {
    i: 2598,
    d: 'NICHOLAS WEST',
    e: 'June 25, 2020',
  },
  {
    i: 2599,
    d: 'STEVEN WIGGINS, Queens',
  },
  {
    i: 2600,
    d: 'HEIDY WILCOX',
  },
  {
    i: 2601,
    d: 'JANET WILKES',
  },
  {
    i: 2602,
    d: 'SHARON WILLIAMS',
    e: 'April 21, 2020',
  },
  {
    i: 2603,
    d: 'PHILLIP WILLIAMS',
  },
  {
    i: 2604,
    d: 'KEVIN WILLIAMS',
  },
  {
    i: 2605,
    d: 'PETAL WILLIAMS RICHARDS',
  },
  {
    i: 2606,
    d: 'DORA WILSON',
  },
  {
    i: 2607,
    d: 'WILLIAM WOLF',
    e: 'March 28, 2020',
  },
  {
    i: 2608,
    d: 'JOE WONG, Brooklyn',
  },
  {
    i: 2609,
    d: 'MING WONG, Brooklyn',
  },
  {
    i: 2610,
    d: 'JESUS “JAY” WONG',
  },
  {
    i: 2611,
    d: 'DENNIS ANTHONY WONGSANG',
  },
  {
    i: 2612,
    d: 'DONALD WOODSON',
  },
  {
    i: 2613,
    d: 'DAWN WORTHINGTON, Staten Island',
  },
  {
    i: 2614,
    d: 'CALVIN WRIGHT, The Bronx',
  },
  {
    i: 2615,
    d: 'MAI YING “SEAGULL” WU',
  },
  {
    i: 2616,
    d: 'ZALMAN YAAKOV, Brooklyn',
  },
  {
    i: 2617,
    d: 'DOVID MEIR YAKOV, Brooklyn',
  },
  {
    i: 2618,
    d: 'ALEXANDER YOUNG',
  },
  {
    i: 2619,
    d: 'ROBERT YOUNG',
  },
  {
    i: 2620,
    d: 'MANUEL MESIAS YUPA, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 2621,
    d: 'SARINA ZALMANOVICH, Queens',
  },
  {
    i: 2622,
    d: 'CARMEN ZAPATA, Brooklyn',
  },
  {
    i: 2623,
    d: 'JULIO ZHICAY, Queens',
  },
  {
    i: 2624,
    d: 'MARIA ELENA ZHUMI, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 2625,
    d: 'EDWIN ZHUNIO',
  },
  {
    i: 2626,
    d: 'WILLY ZUMARAN, Queens',
  },
  {
    i: 2627,
    d: 'MANUEL ZUNA, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 2628,
    d: 'MANUEL “MAX” ZUNIGA',
  },
  {
    i: 2629,
    d: 'SCOTT ZWIREN, Brooklyn',
  },
  {
    i: 2630,
    d: 'IMELDA ZÁRATE, Queens',
    e: 'May 1, 2020',
  },
];

module.exports = { a_refs };
