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
    d: 'SEAN HOOK, 23, Staten Island',
    e: 'April 20, 2020',
  },
  {
    i: 5,
    d: 'DARREL MATTOCKS, 23, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 6,
    d: 'WILLIAM “KIING SHOOTER” DANIELS, 24, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 7,
    d: 'HAILEY MARIE HERRERA, 25, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 8,
    d: 'TANASIA SHAKIA “NAY NAY” ALAMO, 25',
    e: 'March 31, 2020',
  },
  {
    i: 9,
    d: 'LUIS “BOYIE” RIVERA, 25, The Bronx',
    e: 'March 30, 2020',
  },
  {
    i: 10,
    d: 'YITZCHAK MATATOV, 26',
    e: 'April 2, 2020',
  },
  {
    i: 11,
    d: 'MARSIA LOJA, 27, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 12,
    d: 'PHILINDZ DESIR, 27, Staten Island',
  },
  {
    i: 13,
    d: 'DEREK TIMOTHY PERALTA PERALTA, 28, Staten Island',
    e: 'January 22, 2021',
  },
  {
    i: 14,
    d: 'BRENDA MENDOZA, 28, Queens',
  },
  {
    i: 15,
    d: 'MICHELLE ALEXANDER, 29, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Alexander.jpg',
  },
  {
    i: 16,
    d: 'JAYED ALAM, 29, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 17,
    d: 'CALVIN BELL, 29, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 18,
    d: 'RANA ZOE MUNGIN, 30, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 19,
    d: 'CHRISTOPHER MONDAL, 30, The Bronx',
    e: 'March 26, 2020',
  },
  {
    i: 20,
    d: 'RAHMAN MIZANUR, 31, The Bronx',
    e: 'April 28, 2020',
  },
  {
    i: 21,
    d: 'JAY JANKELEWICZ, 31, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 22,
    d: 'AVINAASH TAKDARI, 31, The Bronx',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Avinaash_Takdari.jpg',
  },
  {
    i: 23,
    d: 'GILBERT CROOM, 32, Brooklyn',
    e: 'June 9, 2021',
  },
  {
    i: 24,
    d: 'TERRENCE DARKIM RILEY, 32, Brooklyn',
    e: 'May 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Terrence_Darkim_Riley.jpg',
  },
  {
    i: 25,
    d: 'CRAIG AUGUSTE, 32, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 26,
    d: 'MIGUEL ALMARANTE JR., 32, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Almarante.jpg',
  },
  {
    i: 27,
    d: 'YISRAEL SPITZER, 32, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 28,
    d: 'FRANTZ VITAL, 32, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frantz_Vital.jpg',
  },
  {
    i: 29,
    d: 'KEITH MCDONALD, 32',
  },
  {
    i: 30,
    d: 'VICTOR MORALES, 33, The Bronx',
    e: 'April 24, 2020',
  },
  {
    i: 31,
    d: 'TRAVIS WILLIAMS, 33, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Travis_Williams.jpg',
  },
  {
    i: 32,
    d: 'SHLOMO “SHLOIMY” JACOBSEN, 33, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 33,
    d: 'KIMARLEE “KIM” NGUYEN, 33, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 34,
    d: 'LUKE JAMES WORKOFF, 33, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luke_Workoff.png',
  },
  {
    i: 35,
    d: 'KYRA MICHELLE SWARTZ, 33, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 36,
    d: 'DIONY DIAZ, 33, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 37,
    d: 'KARISMA DARGAN, 33, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 38,
    d: 'RYAN SHEA, 34',
    e: 'February 19, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ryan_Shea.jpeg',
  },
  {
    i: 39,
    d: 'WILLIAM MELNISZYN, 34, Queens',
    e: 'February 7, 2021',
  },
  {
    i: 40,
    d: 'GABRIELLE CATHLEEN GAYLE, 34',
    e: 'April 25, 2020',
  },
  {
    i: 41,
    d: 'GUSTAVO ADOLFO SALAS HERNANDEZ SR., 34, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 42,
    d: 'MARK ANTHONY MEDINA, 34, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 43,
    d: 'PREA NANKIESHORE, 34, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 44,
    d: 'DONNY FOSTNER, 34',
    e: 'April 2, 2020',
  },
  {
    i: 45,
    d: "HUNTER O'KELLY-RODRIGUEZ, 34, Brooklyn",
    e: 'March 29, 2020',
  },
  {
    i: 46,
    d: 'MELLISA TUCKER, 34, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 47,
    d: 'SHA-KING “SYCHO” ARRINDELL, 34, Brooklyn',
  },
  {
    i: 48,
    d: 'FREDERICK “FRED THE GODSON” THOMAS, 35, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 49,
    d: 'OSCAR ALVAREZ, 35',
    e: 'April 1, 2020',
  },
  {
    i: 50,
    d: 'JUAN “MACHO” RODRIGUEZ, 35, Brooklyn',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Rodriguez.jpg',
  },
  {
    i: 51,
    d: 'LARICTER BROWN, 35, The Bronx',
  },
  {
    i: 52,
    d: 'MAURICE LACEY, 35, Queens',
  },
  {
    i: 53,
    d: 'SAADYA EHRENPREIS, 36, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 54,
    d: 'STEVE FALCO, 36',
    e: 'April 26, 2020',
  },
  {
    i: 55,
    d: 'DANIELLE CHRISTINE ARRE, 36, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 56,
    d: 'JONATHON DAVIS, 36, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jonathon_Davis.png',
  },
  {
    i: 57,
    d: 'KALEMA D. MCKETHAN, 36, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 58,
    d: 'DEZ-ANN ROMAIN, 36, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 59,
    d: 'ANNUNZIATA SAHID, 36, Manhattan',
  },
  {
    i: 60,
    d: 'LAWRENCE A. ROSS, 37, The Bronx',
    e: 'January 26, 2021',
  },
  {
    i: 61,
    d: 'CHRISTOPHER DEAN, 37, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 62,
    d: 'JOEL GOMEZ DOMINGUEZ, 37, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Gomez.jpg',
  },
  {
    i: 63,
    d: 'JOEL GOMEZ, 37, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 64,
    d: 'REYNOLD ANDERSON-HEWITT, 37, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 65,
    d: 'RICKEY DOWTIN JR., 37, Staten Island',
  },
  {
    i: 66,
    d: 'ERIC MURRAY, 38, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 67,
    d: 'ELVESTER MCKOY, 38, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 68,
    d: 'ADRIAN HERNANDEZ LOPEZ, 38, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 69,
    d: 'JARROD SOCKWELL, 38, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 70,
    d: 'RONIECE WATSON, 38, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 71,
    d: 'ERNESTO “GETO” ROLON III, 38, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 72,
    d: 'TRISHA MARIAM, 38, Queens',
  },
  {
    i: 73,
    d: 'ANANDA MOOLIYA, 38, Queens',
  },
  {
    i: 74,
    d: 'IVAN PETER, 38, Queens',
  },
  {
    i: 75,
    d: 'MARCELINO VAQUERO JR., 38, Brooklyn',
  },
  {
    i: 76,
    d: 'ROVIN ANTHONY SMITH, 39',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rovin_Smith.jpeg',
  },
  {
    i: 77,
    d: 'AJANA WILKINSON-IWAYEMI, 39, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 78,
    d: 'GONZALO “GEE” VIDANOS JR., 39, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 79,
    d: 'ROBERT SIMON, 39, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 80,
    d: 'ROBERT SIMON, 39, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 81,
    d: 'MONROE M.K. “MONTY” BATES II, 39',
    e: 'April 13, 2020',
  },
  {
    i: 82,
    d: 'ADIEL MONTGOMERY, 39, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 83,
    d: 'DUSTIN J. PETRIE, 39, Manhattan',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dustin_Petrie.jpg',
  },
  {
    i: 84,
    d: 'YIRA DIAZ, 39, The Bronx',
  },
  {
    i: 85,
    d: 'YOEL SANDEL, 39, Brooklyn',
  },
  {
    i: 86,
    d: 'A. EDWARD WILLIAMS III, 40',
    e: 'May 7, 2020',
  },
  {
    i: 87,
    d: 'CLINTON WASHINGTON, 40, The Bronx',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clinton_Washington.jpg',
  },
  {
    i: 88,
    d: 'YIMEL ALVARADO, 40, Queens',
  },
  {
    i: 89,
    d: 'MICHAEL MCINTOSH, 40',
  },
  {
    i: 90,
    d: 'JILL BRANDY LAMAS, 41, The Bronx',
    e: 'November 18, 2020',
  },
  {
    i: 91,
    d: 'JILL BRANDY LAMAS, 41, Manhattan',
    e: 'November 18, 2020',
  },
  {
    i: 92,
    d: 'NICK CORDERO, 41, Manhattan',
    e: 'July 5, 2020',
  },
  {
    i: 93,
    d: 'NEVIE LACAYO, 41',
    e: 'May 25, 2020',
  },
  {
    i: 94,
    d: 'ELECIER WILLIAMS, 41, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 95,
    d: 'JENNIFER ROMAIN-HINDS, 41, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 96,
    d: 'ROBERT CARDONA, 41, Manhattan',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Cardona.PNG',
  },
  {
    i: 97,
    d: 'SEAN ARTIS, 41',
    e: 'April 9, 2020',
  },
  {
    i: 98,
    d: 'FERDI AMAURY GERMAN, 41, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 99,
    d: 'JULIET MANRAGH, 41, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 100,
    d: 'JUAN DIAZ, 41',
    e: 'April 3, 2020',
  },
  {
    i: 101,
    d: 'STEVANUS “STEFAN” FARIZ, 41, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 102,
    d: 'RIVKA GOTTLIEB, 41, Brooklyn',
  },
  {
    i: 103,
    d: 'QUEBIY PIGOTT, 41, The Bronx',
  },
  {
    i: 104,
    d: 'SHANTAY NEAL-BAKER, 42',
    e: 'August 14, 2021',
  },
  {
    i: 105,
    d: 'KASEEM MCCALEB, 42, Manhattan',
    e: 'May 28, 2021',
  },
  {
    i: 106,
    d: 'ANGEL M. SANTIAGO JR., 42, The Bronx',
    e: 'March 28, 2021',
  },
  {
    i: 107,
    d: 'SCOTT CHRISTIAN-RAGINS, 42, Manhattan',
    e: 'May 27, 2020',
  },
  {
    i: 108,
    d: 'MIGUEL A. SOSA, 42',
    e: 'May 3, 2020',
  },
  {
    i: 109,
    d: 'GIANMARCO BERTOLOTTI, 42, Queens',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gianmarco_Bertolotti.png',
  },
  {
    i: 110,
    d: 'SALVADOR MORAN, 42, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 111,
    d: 'FERNANDO GARZON, 42, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 112,
    d: 'AJIT NARAIN, 42, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 113,
    d: 'SUSAN CHUANG, 42, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 114,
    d: 'KANE “KENNY” NOEL, 42, Queens',
    e: 'March 31, 2020',
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
    d: 'BINYOMIN ABRAMOWITZ, 42, Brooklyn',
  },
  {
    i: 118,
    d: 'ARTURO AMARO, 42, Queens',
  },
  {
    i: 119,
    d: 'TERRENCE EARLINGTON, 42, Brooklyn',
  },
  {
    i: 120,
    d: 'MARLON MARAGH, 42, Brooklyn',
  },
  {
    i: 121,
    d: 'CORCEL S. SMALLHORNE, 43, Queens',
    e: 'May 21, 2021',
  },
  {
    i: 122,
    d: 'DOREEN TAY, 43, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 123,
    d: 'RAYMOND ABEAR, 43, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 124,
    d: 'FERNANDO MORALES GONZÁLEZ, 43, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 125,
    d: 'WALTER SIMPSON, 43, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 126,
    d: 'LENIN RICARDO “LENNY” FIERRO, 43, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 127,
    d: 'CARIDAD SANTIAGO, 43, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 128,
    d: 'NECOLE L. DURANT, 43, Brooklyn',
  },
  {
    i: 129,
    d: 'KALIN IZEVBIZUA, 43, Queens',
  },
  {
    i: 130,
    d: 'CARLOS LEONARDO PINTADO, 43, Queens',
  },
  {
    i: 131,
    d: 'IRENE “RENE” BURGONIO, 44, Queens',
    e: 'May 9, 2020',
  },
  {
    i: 132,
    d: 'RENE GUTIERREZ, 44',
    e: 'April 12, 2020',
  },
  {
    i: 133,
    d: 'ALI DENNIS GUILLERMO, 44',
    e: 'April 7, 2020',
  },
  {
    i: 134,
    d: 'ROLANDO “SONNY” ARAVENA, 44, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 135,
    d: 'MIRZA HUDA, 44, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 136,
    d: 'ARNALDO SERRANO, 44, The Bronx',
    e: 'March 24, 2020',
  },
  {
    i: 137,
    d: 'IBRAHIMA BA, 44, Manhattan',
  },
  {
    i: 138,
    d: 'MICHELLE BURREL, 44, The Bronx',
  },
  {
    i: 139,
    d: 'MICHAEL R. MUNDY, 45, Brooklyn',
    e: 'April 28, 2021',
  },
  {
    i: 140,
    d: 'EDDIE GUERRERO, 45, Brooklyn',
    e: 'January 9, 2021',
  },
  {
    i: 141,
    d: 'ARNELA JUANICO, 45, Queens',
    e: 'June 2, 2020',
  },
  {
    i: 142,
    d: 'DOMINGO VEGA, 45, Queens',
    e: 'May 16, 2020',
  },
  {
    i: 143,
    d: 'ROMARICO “RAMON” MARTINEZ, 45',
    e: 'May 9, 2020',
  },
  {
    i: 144,
    d: 'DANNY CAMACHO, 45, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Danny_Camacho.jpg',
  },
  {
    i: 145,
    d: 'OSCAR TAPIA SANCHEZ, 45, Queens',
    e: 'April 27, 2020',
  },
  {
    i: 146,
    d: 'ROBERTO TEJADA, 45, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 147,
    d: 'ALYSSA PANTILIERIS, 45, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 148,
    d: 'CHRISTOPHER ALAN JOE, 45, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 149,
    d: 'GABRIEL MENDEZ, 45, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 150,
    d: 'KRISTOFER M. “KRIS” RUSSO, 45, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 151,
    d: 'JOSHUA “JOSH” WALLWORK, 45, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 152,
    d: 'RASHIDA AKTER, 45, Queens',
  },
  {
    i: 153,
    d: 'ANGEL CAMPOS, 45, The Bronx',
  },
  {
    i: 154,
    d: 'LILLIAN CLOWNEY, 45',
  },
  {
    i: 155,
    d: 'ALEJANDRO HERNÁNDEZ, 46, Queens',
    e: 'June 13, 2020',
  },
  {
    i: 156,
    d: 'EDWARD LATOURETTE, 46, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 157,
    d: 'RASHIDA AHMED, 46, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 158,
    d: 'LATIFA HOSKINS, 46, The Bronx',
    e: 'April 16, 2020',
  },
  {
    i: 159,
    d: 'SAKINAH KAMA, 46',
    e: 'April 16, 2020',
  },
  {
    i: 160,
    d: 'MAGDALENA ELIZABETH OCAMPO FRANCO, 46, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 161,
    d: 'JEFFREY ALLEN SCALF, 46, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 162,
    d: 'ROSA “TUTY” TRIGUERO, 46, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 163,
    d: 'EZEKIEL “ZEKE” COUSINS, 46, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 164,
    d: 'SHLOMO “(SHLOIME) (BUNDY)” FREUNDLICH, 46, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 165,
    d: 'PABLO GARCIA, 46, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Garcia.JPG',
  },
  {
    i: 166,
    d: 'LEVESTER “L.T.” THOMPSON, 46, Staten Island',
    e: 'April 7, 2020',
  },
  {
    i: 167,
    d: 'RAYMOND DERRICK “RAY” COPELAND, 46, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 168,
    d: 'MARCOS GUTIERREZ MONTERO, 46, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 169,
    d: 'CHRISTIAN FLORES DELIM, 46',
  },
  {
    i: 170,
    d: 'LEONARD MCCOLLOUGH, 46',
  },
  {
    i: 171,
    d: 'EDNA SANDY WACKMAN, 46, Brooklyn',
  },
  {
    i: 172,
    d: 'URAUL WATTS, 46',
  },
  {
    i: 173,
    d: 'CAROLYN JUSTINIANO, 47, Staten Island',
    e: 'March 17, 2021',
  },
  {
    i: 174,
    d: 'WALTER F. CARRERA, 47, Brooklyn',
    e: 'January 29, 2021',
  },
  {
    i: 175,
    d: 'WALTER CARRERA, 47, Brooklyn',
    e: 'January 29, 2021',
  },
  {
    i: 176,
    d: 'RUSSELL E. SMALLS, 47, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 177,
    d: 'MICHAEL GERACI, 47, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 178,
    d: 'LOUIS TORRES, 47, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 179,
    d: 'EVELYN RIVERA, 47, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Rivera.jpg',
  },
  {
    i: 180,
    d: 'DAVID BEHRBOM, 47, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 181,
    d: 'LUIS LIZ, 47, The Bronx',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Liz.jpeg',
  },
  {
    i: 182,
    d: 'THOMAS “BIJU” DAVID, 47, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 183,
    d: 'RASHMI CHRISTIAN, 47, Brooklyn',
  },
  {
    i: 184,
    d: 'STANLEY FONG, 47, Queens',
  },
  {
    i: 185,
    d: 'GUADALUPE VELASQUEZ, 47, Queens',
  },
  {
    i: 186,
    d: 'KIYOTO “BREEZE” WILLIAMS, 47, Staten Island',
  },
  {
    i: 187,
    d: 'MARISA MARIE SOTO WILLIAMS, 48, Staten Island',
    e: 'November 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marisa_Williams.png',
  },
  {
    i: 188,
    d: 'MARCUS L. OVERTON, 48, Brooklyn',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marcus_Overton.jpg',
  },
  {
    i: 189,
    d: 'GLORIA SOSA, 48, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 190,
    d: 'ROXANNE BENT, 48, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 191,
    d: 'REBECCA YEE, 48, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 192,
    d: 'ANTHONY CAUSI, 48, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 193,
    d: 'HESRONNI ST. ANTHONY CAYENNE, 48, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 194,
    d: 'MI LYNN HUNT, 48, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 195,
    d: 'MOSTAFIZUR RAHMAN BIPU, 48, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 196,
    d: 'GILBERT CONSTANT, 48, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 197,
    d: 'CEDRIC GEORGE DIXON, 48, The Bronx',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cedric_Dixon.jpeg',
  },
  {
    i: 198,
    d: 'ANTHONY R. IRACI, 48, Staten Island',
    e: 'March 27, 2020',
  },
  {
    i: 199,
    d: 'THERESA M. LOCOCO JR., 48, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 200,
    d: 'KIOUS JORDAN “JAMIE” KELLY, 48, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 201,
    d: 'DAVID EDWARDS JR., 48, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 202,
    d: 'WARREN BATES, 48',
    e: 'March 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Warren_Bates.jpg',
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
    d: 'ARON SHULEM YUNOVSKY, 48, Brooklyn',
  },
  {
    i: 206,
    d: 'LLOYD CORNELIOUS PORTER, 49, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 207,
    d: 'EFRAIN MEZA, 49, Brooklyn',
    e: 'May 5, 2020',
  },
  {
    i: 208,
    d: 'CHRISTOPHER N. “CHRIS” GAINES, 49, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 209,
    d: 'FRANCISCO MOLINA, 49, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 210,
    d: 'RANDIP S. “BOBBY” MINHAS, 49, Queens',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Randip_Minhas.JPG',
  },
  {
    i: 211,
    d: 'MOHAMMED AHSAN, 49, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 212,
    d: 'CLAUDIO LOPEZ, 49, Manhattan',
    e: 'April 24, 2020',
  },
  {
    i: 213,
    d: 'GERRY BALASTA, 49, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 214,
    d: 'ARISTEDES MORAITIS, 49, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 215,
    d: 'MOHAMMAD SAIFUL HAYDER “AJAD” KHAN, 49',
    e: 'April 5, 2020',
  },
  {
    i: 216,
    d: 'MARISOL ROSARIO, 49, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 217,
    d: 'JESUS ROMAN MELENDEZ, 49, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 218,
    d: 'CHARINA “CHERRY” PORTILLO, 49',
    e: 'March 28, 2020',
  },
  {
    i: 219,
    d: 'JORGE “FATHER GEORGE” ORTIZ-GARAY, 49, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 220,
    d: 'PETER PETRASSI, 49, Queens',
    e: 'March 26, 2020',
  },
  {
    i: 221,
    d: 'DAVID JOHNSON, 49, Brooklyn',
    e: 'March 25, 2020',
  },
  {
    i: 222,
    d: 'KELLY K. WONG, 49, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kelly_Wong.jpg',
  },
  {
    i: 223,
    d: 'ARTHUR LEE GREEN, 49, The Bronx',
    e: 'March 23, 2020',
  },
  {
    i: 224,
    d: 'ANIL SUBBA “RAMESH SAMBAHAMFE” LIMBU, 49, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 225,
    d: 'ERIC GRIMES, 49',
  },
  {
    i: 226,
    d: 'MICHAEL D. HOLLEY, 49',
  },
  {
    i: 227,
    d: 'PETER JI, 49, Manhattan',
  },
  {
    i: 228,
    d: 'LEON J. MCKNIGHT JR., 49, The Bronx',
  },
  {
    i: 229,
    d: 'ALEX ZAPATA, 49, Brooklyn',
  },
  {
    i: 230,
    d: 'TARA ELLEN STILP, 50, Brooklyn',
    e: 'February 6, 2021',
  },
  {
    i: 231,
    d: 'ERIC VON PETERSON, 50, Brooklyn',
    e: 'January 9, 2021',
  },
  {
    i: 232,
    d: 'MELISSA MARIE KRUPPA, 50, Staten Island',
    e: 'June 20, 2020',
  },
  {
    i: 233,
    d: 'DIANNA RUSSELL, 50',
    e: 'May 30, 2020',
  },
  {
    i: 234,
    d: 'MILAGROS PEREZ, 50, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 235,
    d: 'CHAIM MEIR GANTZ, 50, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 236,
    d: 'ALAN MATZA, 50, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 237,
    d: 'DR. MALIK KADIR AKEL “MERLIN” NORD, 50, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 238,
    d: 'EDDY MARQUEZ, 50, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 239,
    d: 'SUSAN SISGUNDO, 50, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 240,
    d: 'ALDO URRIOLA, 50, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 241,
    d: 'ADRIAN DAVID DIAZ, 50, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 242,
    d: 'DARRIN M. SANTOS SR., 50',
    e: 'April 4, 2020',
  },
  {
    i: 243,
    d: 'LUIS RIVERA, 50, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Rivera.jpeg',
  },
  {
    i: 244,
    d: 'YOSEF TZVI KLEIN, 50, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 245,
    d: 'KIMBERLY “KIM” WETZEL, 50, Brooklyn',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kimberly_Wetzel.jpg',
  },
  {
    i: 246,
    d: 'FREDA OCRAN, 50, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 247,
    d: 'RUEL ALDRINGTON FORBES, 50, Brooklyn',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ruel_Forbes.PNG',
  },
  {
    i: 248,
    d: 'RAKKHON KIM, 50, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 249,
    d: 'NASHOM WOODEN, 50, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 250,
    d: 'RABBI YITZCHOK BENISH/BANASH, 50, Brooklyn',
  },
  {
    i: 251,
    d: 'JUAN CASTILLO, 50, The Bronx',
  },
  {
    i: 252,
    d: 'TAMMY HENDRIKS, 50, Queens',
  },
  {
    i: 253,
    d: 'VADIM IVLEV, 50, Staten Island',
  },
  {
    i: 254,
    d: 'LIPA LEFKOWITZ, 50, Brooklyn',
  },
  {
    i: 255,
    d: 'RODNEY SPARROW, 50, Brooklyn',
  },
  {
    i: 256,
    d: 'MARTHA ORTEGA, 51, Queens',
    e: 'May 24, 2020',
  },
  {
    i: 257,
    d: 'YUPADEE KOBKULBOONSIRI, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 258,
    d: 'CALEB ST. SURIN, 51, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 259,
    d: 'MAURICE KIRBY, 51, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 260,
    d: 'ROBERT “ROB” NATHAN, 51',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Nathan.jpg',
  },
  {
    i: 261,
    d: 'JACK POLIMENI, 51, Manhattan',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jack_Polimeni.jpg',
  },
  {
    i: 262,
    d: 'ALBERTO “ZULMA ZANELLY” SEVILLA, 51, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 263,
    d: 'ANICK “NICK” JESDANUN, 51, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 264,
    d: 'DARLISA C. NESBITT, 51, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 265,
    d: 'WILLIAM SCOTT, 51',
    e: 'April 2, 2020',
  },
  {
    i: 266,
    d: 'GUILLERMO “WILLY” FRESTAN, 51, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 267,
    d: 'PAULA PRYCE-BREMMER, 51',
    e: 'March 26, 2020',
  },
  {
    i: 268,
    d: 'PETER URSINO, 51, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 269,
    d: 'BERNADETTE PAYNE, 51, The Bronx',
    e: 'March 24, 2020',
  },
  {
    i: 270,
    d: 'AFZAL AHMED, 51, Queens',
  },
  {
    i: 271,
    d: 'ANGELA ALLEN, 51, The Bronx',
  },
  {
    i: 272,
    d: 'JANEE MICHELLE FUNCHESS, 51, The Bronx',
  },
  {
    i: 273,
    d: 'BOSEDE OLOWURO, 51, The Bronx',
  },
  {
    i: 274,
    d: 'BARBARELLA RODRIGUEZ, 51, Queens',
  },
  {
    i: 275,
    d: 'EMMA RAMOS, 52, Brooklyn',
    e: 'March 14, 2021',
  },
  {
    i: 276,
    d: 'LOUIS ORLANDO VARGAS, 52, The Bronx',
    e: 'January 14, 2021',
  },
  {
    i: 277,
    d: 'MARTIN ROSETE, 52',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Martin_Vidal_Rosete.jpg',
  },
  {
    i: 278,
    d: 'VICTOR VAZQUEZ HERNANDEZ, 52, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 279,
    d: 'CHRISTOPHER N. HOWARD, 52',
    e: 'May 3, 2020',
  },
  {
    i: 280,
    d: 'RIVKA YOCHEVED “RIFKY” DEUTSCH, 52, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 281,
    d: 'MIGUEL “THE PASTA KING” GRANDE, 52, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 282,
    d: 'SAU LEE, 52',
    e: 'April 18, 2020',
  },
  {
    i: 283,
    d: 'MATTHEW F. MOORE JR., 52, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 284,
    d: 'LIBORIO “LEE” ALESSI JR., 52, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 285,
    d: 'DIANE MCCARREN, 52, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 286,
    d: 'RAÚL RAMÍREZ, 52, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 287,
    d: 'EZEQUIEL ORTIZ, 52, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 288,
    d: 'ROBERT PAPIK, 52',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Papik.png',
  },
  {
    i: 289,
    d: 'SHARON NEARBY, 52, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 290,
    d: 'ADAM SCHLESINGER, 52, Manhattan',
    e: 'April 1, 2020',
  },
  {
    i: 291,
    d: 'JANICE “MISS JANICE” RODMAN, 52, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 292,
    d: 'RICARDO MIGUEL MILANES, 52, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 293,
    d: 'EDWIN MCDOWELL, 52',
  },
  {
    i: 294,
    d: 'JUAN SANABRIA, 52, The Bronx',
  },
  {
    i: 295,
    d: 'CURTIS I. WHITTED JR., 52, Manhattan',
  },
  {
    i: 296,
    d: 'JUSTO CALIXTO ANDON, 53, Brooklyn',
    e: 'May 26, 2020',
  },
  {
    i: 297,
    d: 'VANEE SYKES, 53, Brooklyn',
    e: 'May 24, 2020',
  },
  {
    i: 298,
    d: 'RAMON FURCAL, 53, Manhattan',
    e: 'May 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ramon_Furcal.jpg',
  },
  {
    i: 299,
    d: 'DENNY GILLIAM, 53, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 300,
    d: 'JOSE D. AVILES, 53, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 301,
    d: 'JAMES DANIELS III, 53, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 302,
    d: 'JUAN VAZQUEZ, 53, Brooklyn',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Vazquez.jpg',
  },
  {
    i: 303,
    d: 'MARLENE PICONE, 53, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 304,
    d: 'MARK POMPA, 53, Staten Island',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mark_Pompa.jpeg',
  },
  {
    i: 305,
    d: 'KENNETH EARL “WAYNE” GREEN JR., 53, Brooklyn',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Earl_Green_Jr.png',
  },
  {
    i: 306,
    d: 'KAITLYN “WAYNE” PATTERSON JR., 53, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 307,
    d: 'CELERINA MAUREEN MIGUEL “RINA” CRISTY, 53',
    e: 'April 15, 2020',
  },
  {
    i: 308,
    d: 'DENISE PRINCE, 53, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 309,
    d: 'PEDRO RODRIGUEZ, 53, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 310,
    d: 'LUIS EDUARDO VELECELA, 53, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 311,
    d: 'TROY LEE SWEENEY, 53',
    e: 'April 8, 2020',
  },
  {
    i: 312,
    d: 'MICHAEL TYSON, 53, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 313,
    d: 'MARILYN HOWARD, 53, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 314,
    d: 'ROBERT GALLETTA II, 53, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 315,
    d: 'ADALBERTO “TITO” LEBRON JR., 53, Brooklyn',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Adalberto_Lebron.jpeg',
  },
  {
    i: 316,
    d: 'JUANA GRULLON DE PENA, 53',
    e: 'March 25, 2020',
  },
  {
    i: 317,
    d: 'SABRINA ALICIA EUBANKS, 53, Queens',
  },
  {
    i: 318,
    d: 'VALERIE R. GOODLEY, 53, Brooklyn',
  },
  {
    i: 319,
    d: 'PAMELA HICKS-LEWIS, 53, Brooklyn',
  },
  {
    i: 320,
    d: 'DANIEL MATIAS, 53, Queens',
  },
  {
    i: 321,
    d: 'JOSE PAEZ, 53',
  },
  {
    i: 322,
    d: 'JOSE ROSALES, 53, Staten Island',
  },
  {
    i: 323,
    d: 'JOSEPH SELBY, 53, Queens',
  },
  {
    i: 324,
    d: 'THERESA TORRES, 53',
  },
  {
    i: 325,
    d: 'ZLATKO VELESKI, 53, Queens',
  },
  {
    i: 326,
    d: 'MIGUEL PINEDA, 54, Queens',
    e: 'March 1, 2021',
  },
  {
    i: 327,
    d: 'GREGORY GARTRELL, 54, Queens',
    e: 'August 21, 2020',
  },
  {
    i: 328,
    d: 'LAWRENCE NIEUENKIRK, 54, Brooklyn',
    e: 'June 4, 2020',
  },
  {
    i: 329,
    d: 'RENEE FRENCH, 54, Manhattan',
    e: 'May 19, 2020',
  },
  {
    i: 330,
    d: 'ALAIN WALKER, 54',
    e: 'May 19, 2020',
  },
  {
    i: 331,
    d: 'KEVIN CRAWFORD, 54, Manhattan',
    e: 'May 15, 2020',
  },
  {
    i: 332,
    d: 'CHRISTOPHER B. MCDONNELL, 54',
    e: 'May 6, 2020',
  },
  {
    i: 333,
    d: 'AJAZ BASHIR MOHAMMED, 54, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Bashir_Ajaz_Mohammed.jpeg',
  },
  {
    i: 334,
    d: 'LEONEL TUSA MASAQUIZA, 54, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Leonel_Tusa_Masaquiza.jpeg',
  },
  {
    i: 335,
    d: 'KEVIN ROSSITER, 54, Staten Island',
    e: 'April 25, 2020',
  },
  {
    i: 336,
    d: 'CHARLES BURROWS, 54, Brooklyn',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Burrows.jpg',
  },
  {
    i: 337,
    d: 'VICTOR HUMBERTO HERAS, 54, Manhattan',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Victor_Heras.jpg',
  },
  {
    i: 338,
    d: 'MOHAMMED CHOWDHURY, 54, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 339,
    d: 'LOUIS S. BARCELO JR., 54, The Bronx',
    e: 'April 16, 2020',
  },
  {
    i: 340,
    d: 'KENNETH GREEN, 54, The Bronx',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Green.jpg',
  },
  {
    i: 341,
    d: 'ELGIN STEPHENSON, 54, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 342,
    d: 'KELLIE CHILDS, 54, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 343,
    d: 'MAGDA NAPOLEONI, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 344,
    d: 'MIRTA PEREZ, 54, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 345,
    d: 'ZISHA RITTERMAN, 54, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 346,
    d: 'DR. CIRINO R. ZAPPALA, 54',
    e: 'April 7, 2020',
  },
  {
    i: 347,
    d: 'HAL STUART COHEN, 54, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 348,
    d: 'IRWIN FELDMAN, 54, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 349,
    d: 'VALARIE FULTON, 54, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 350,
    d: 'THOMAS J. “TOMMY, TOM” HOGAN, 54, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 351,
    d: 'SANDRA SANTOS-VIZCAINO, 54, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 352,
    d: 'MARIA CARLA MERCADER, 54, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 353,
    d: 'JAMES MICHAEL VILLECCO, 54, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 354,
    d: 'ARTHUR C. HURWITZ, 54, Queens',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Hurwitz.jpg',
  },
  {
    i: 355,
    d: 'FRANK JEFFERSON BOWMAN JR., 54, Brooklyn',
  },
  {
    i: 356,
    d: 'DIEGO CHOUTE, 54, Brooklyn',
  },
  {
    i: 357,
    d: 'SAIFUL KHAN, 54, Queens',
  },
  {
    i: 358,
    d: 'WILLIAM SACKEY, 54, The Bronx',
  },
  {
    i: 359,
    d: 'JENNIFER BETH COTT, 55',
    e: 'February 4, 2021',
  },
  {
    i: 360,
    d: 'TRACEY M. MURCHISON, 55, Queens',
    e: 'July 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tracey_Murchison.jpg',
  },
  {
    i: 361,
    d: 'MARINA CEPEDA, 55, Queens',
    e: 'May 8, 2020',
  },
  {
    i: 362,
    d: 'KEVIN BOSTIC, 55, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 363,
    d: 'WALTER WATSON, 55, Manhattan',
    e: 'May 4, 2020',
  },
  {
    i: 364,
    d: 'MEDER TLATELPA BALBUENA, 55, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 365,
    d: 'MITCHELL ROSENWASSER, 55, Queens',
    e: 'April 26, 2020',
  },
  {
    i: 366,
    d: 'GUSTAVO PETUZ TAPIA, 55, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 367,
    d: 'MOHAMMAD EUSUP ALI, 55, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 368,
    d: 'PHILLIP DAVIS, 55, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 369,
    d: 'INEZ “MAMA T” GONZALEZ, 55, Staten Island',
    e: 'April 20, 2020',
  },
  {
    i: 370,
    d: 'DR. TRACI BELTON, 55, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 371,
    d: 'ANDRE “DRE” DEVORE, 55, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 372,
    d: 'FRANCISCO SAAVEDRA, 55, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 373,
    d: 'RICHARD LENIHAN, 55',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Lenihan.jpg',
  },
  {
    i: 374,
    d: 'MICHAEL A. MALLON, 55, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 375,
    d: 'OMARA FLORES, 55, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 376,
    d: 'ROBERT MOODY JR., 55, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 377,
    d: 'PAMELA ROSS, 55, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 378,
    d: 'AVREMY ZAKON, 55, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 379,
    d: 'GUMERCINDO “GUMO” ALICEA, 55, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 380,
    d: 'MIGUEL J. FELICIANO, 55, Queens',
  },
  {
    i: 381,
    d: 'ALGION LONDON, 55, The Bronx',
  },
  {
    i: 382,
    d: 'KHEMRAJ MAHADEO, 55, Brooklyn',
  },
  {
    i: 383,
    d: 'MARISE MICIAL, 55, Brooklyn',
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
    d: 'CESAR TORRES, 55',
  },
  {
    i: 387,
    d: 'JOSE VELEZ, 55',
  },
  {
    i: 388,
    d: "MICHAEL X. O'CONNOR, 56, Queens",
    e: 'March 15, 2021',
    h: "https://projects.thecity.nyc/covid-19-deaths-img/Michael_O'Connor.jpeg",
  },
  {
    i: 389,
    d: 'ARDETTE ARNOLD, 56, The Bronx',
    e: 'February 24, 2021',
  },
  {
    i: 390,
    d: 'DORIS KIRKLAND, 56, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    i: 391,
    d: 'JOSE MIGUEL CABRERA GARCIA, 56, The Bronx',
    e: 'May 16, 2020',
  },
  {
    i: 392,
    d: 'SVETLANA VINOKUR, 56, Brooklyn',
    e: 'May 1, 2020',
  },
  {
    i: 393,
    d: 'ADLIN R. THOMPSON, 56, Manhattan',
    e: 'April 24, 2020',
  },
  {
    i: 394,
    d: 'ROBERT GUIDA, 56, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 395,
    d: 'RODERICK PAULUS, 56, Brooklyn',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Roderick_Paulus.PNG',
  },
  {
    i: 396,
    d: 'BARRY PERSARD, 56, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 397,
    d: 'EMMA GOOLSBY, 56, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 398,
    d: 'ROBERT THOERING, 56, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Thoering.jpg',
  },
  {
    i: 399,
    d: 'JEFFREY ALSTON, 56, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 400,
    d: 'GILBERT “TORO” TORRES JR., 56, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 401,
    d: 'DONAHUE “DANNY” VARGAS, 56, The Bronx',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Donahue_Vargas.jpeg',
  },
  {
    i: 402,
    d: 'ANTONIETTA FLORIO, 56, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonietta_Florio.png',
  },
  {
    i: 403,
    d: 'JOSE FLORES, 56, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 404,
    d: 'ELLIS JAMES STEPHENS JR., 56, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 405,
    d: 'JOSE A. HERNANDEZ JR., 56, The Bronx',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Hernandez.jpg',
  },
  {
    i: 406,
    d: 'THANKACHAN MATHAI, 56, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thankachan_Mathai.jpg',
  },
  {
    i: 407,
    d: 'TIMOTHY OLAN MONTGOMERY, 56, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tim_Montgomery.jpg',
  },
  {
    i: 408,
    d: 'GARY CHERRY SR., 56, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 409,
    d: 'DARYL LABORDE, 56',
    e: 'April 4, 2020',
  },
  {
    i: 410,
    d: 'THOMAS J. “TOM” WATERS, 56, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 411,
    d: 'RABBI CHAIM YECHEZKEL SHRAGA DAHAN, 56, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 412,
    d: 'MOHAMMED JAFOR, 56, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 413,
    d: 'LEMUEL “BOYET” SISON, 56, Queens',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lemuel_Sison.jpg',
  },
  {
    i: 414,
    d: 'IRVING A. MALONEY, 56, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 415,
    d: 'AVA WALKER, 56, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 416,
    d: 'KEVIN GRAIANI, 56, The Bronx',
    e: 'March 30, 2020',
  },
  {
    i: 417,
    d: 'YITZCHOCK ZYLBERMINC, 56, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 418,
    d: 'DR. DOMINIC CARBONE, 56, Manhattan',
    e: 'March 23, 2020',
  },
  {
    i: 419,
    d: 'JAIME DE LA HOZ, 56, The Bronx',
    e: 'March 23, 2020',
  },
  {
    i: 420,
    d: 'ALEX MCCASKEY, 56, The Bronx',
    e: 'March 22, 2020',
  },
  {
    i: 421,
    d: 'DAVID PEREZ, 56, Manhattan',
    e: 'March 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez.jpg',
  },
  {
    i: 422,
    d: 'EDUARDO ANTONIO BECERRIL, 56, The Bronx',
  },
  {
    i: 423,
    d: 'ISHMAEL BURCH, 56',
  },
  {
    i: 424,
    d: 'NAZMUL HAQUE, 56, Queens',
  },
  {
    i: 425,
    d: 'CUONG LUU, 56, Queens',
  },
  {
    i: 426,
    d: 'EDWARD MUNGIN, 56, Brooklyn',
  },
  {
    i: 427,
    d: 'JACQUEL D. RYAN, 56, The Bronx',
  },
  {
    i: 428,
    d: 'YVETTE SHEFFER, 56, Brooklyn',
  },
  {
    i: 429,
    d: 'SUNG TRUONG, 56, Queens',
  },
  {
    i: 430,
    d: 'KENNETH WRIGHT, 56',
  },
  {
    i: 431,
    d: 'STANLEY DASH, 57, Brooklyn',
    e: 'May 29, 2021',
  },
  {
    i: 432,
    d: 'SANDY T GUNAR, 57, Manhattan',
    e: 'March 17, 2021',
  },
  {
    i: 433,
    d: 'MARÍA ELSA CENTENO, 57, The Bronx',
    e: 'May 26, 2020',
  },
  {
    i: 434,
    d: 'MELVIN RASCOE, 57, Queens',
    e: 'May 14, 2020',
  },
  {
    i: 435,
    d: 'SONIA YETMAN, 57, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 436,
    d: 'HOWARD THOMPSON, 57',
    e: 'April 30, 2020',
  },
  {
    i: 437,
    d: 'JOHNATHAN ADEWUMI, 57, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 438,
    d: 'MUDADA KABIR, 57, Brooklyn',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mudada_Kabir.jpg',
  },
  {
    i: 439,
    d: 'MACARIO QUIZHPI GALLEGOS, 57, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 440,
    d: 'ARYEH “LEIBEL” KATZ, 57, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 441,
    d: 'JULIO BARRIOS, 57, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 442,
    d: 'KAREN CARMELLO, 57',
    e: 'April 16, 2020',
  },
  {
    i: 443,
    d: 'LEWIS J. KIRSCH, 57',
    e: 'April 15, 2020',
  },
  {
    i: 444,
    d: 'HUI LIANG WEN, 57, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Hui_Liang_Wen.jpg',
  },
  {
    i: 445,
    d: 'PABLO CRUZ, 57, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 446,
    d: 'GABRIELLA “GABBY” HERNANDEZ, 57, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gabriella_Hernandez.jpeg',
  },
  {
    i: 447,
    d: 'FATIMA SCHMIDT, 57, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 448,
    d: 'CEYBIL “SWEET SABLE” JEFFERIES, 57, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 449,
    d: 'MARIA MINERVA MARTINEZ PUEBLA, 57, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 450,
    d: 'CONNIE JONES HAWKINS, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 451,
    d: 'ARTURO FRANCISCO HERNANDEZ, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 452,
    d: 'JAIME ARMANDO PINZON, 57, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 453,
    d: 'SATYRA LOUISE CATTENHEAD, 57, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 454,
    d: 'LINOSEE MOSLEY, 57, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 455,
    d: 'ERIC S. SOBEL, 57, Manhattan',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eric_Sobel.png',
  },
  {
    i: 456,
    d: 'SAL LOMBARDO, 57, Queens',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sal_Lombardo.jpg',
  },
  {
    i: 457,
    d: 'TARLACH MACNIALLAIS, 57, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 458,
    d: 'PATRICK PATOIR, 57, Brooklyn',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Patrick_Patoir.jpeg',
  },
  {
    i: 459,
    d: 'WILLIS CEPHUS “MARQUE” WASHINGTON JR., 57, Manhattan',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Willis_Washington.jpg',
  },
  {
    i: 460,
    d: 'EMMA L. GRIFFIN, 57, Brooklyn',
    e: 'March 21, 2020',
  },
  {
    i: 461,
    d: 'RICHARD E. WEBER JR., 57, Manhattan',
    e: 'March 19, 2020',
  },
  {
    i: 462,
    d: 'ERNESTO HERNANDEZ, 57, Brooklyn',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernesto_Hernandez.jpeg',
  },
  {
    i: 463,
    d: 'SAMUEL AKOPOV, 57, Brooklyn',
  },
  {
    i: 464,
    d: 'DERIK BRASWELL, 57, Queens',
  },
  {
    i: 465,
    d: 'DR. SUNDAY ESTEKYME, 57, The Bronx',
  },
  {
    i: 466,
    d: 'HECTOR GARCIA, 57',
  },
  {
    i: 467,
    d: 'SYLVIA LYONS, 57, The Bronx',
  },
  {
    i: 468,
    d: 'ARNETTE MITCHELL, 57, Brooklyn',
  },
  {
    i: 469,
    d: 'MOHAMMAD RAFIQ UDDIN, 57, Brooklyn',
  },
  {
    i: 470,
    d: 'MORDECHAI “MORDY” WEINER, 57, Brooklyn',
  },
  {
    i: 471,
    d: 'PEREL WEISS, 57, Brooklyn',
  },
  {
    i: 472,
    d: 'BUDLINO RAMIREZ, 58, The Bronx',
    e: 'June 6, 2020',
  },
  {
    i: 473,
    d: 'YAKARA BEAUVOIR, 58, Manhattan',
    e: 'May 20, 2020',
  },
  {
    i: 474,
    d: 'VENANCIO “BENNY” DIAZ, 58, Staten Island',
    e: 'April 30, 2020',
  },
  {
    i: 475,
    d: 'BENJAMIN WOLF “BEN” SCHAEFFER, 58, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 476,
    d: 'NICOLAS JIMENEZ, 58, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 477,
    d: 'JODY G. SETTLE, 58',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jody_Settle.jpg',
  },
  {
    i: 478,
    d: 'CALOGERO CASTROGIOVANNI, 58, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 479,
    d: 'ANDREW HOPPER, 58, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 480,
    d: 'CHARLENE ADRIEN NEALY, 58, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 481,
    d: 'DARRYL K. SWEENEY, 58, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 482,
    d: 'JUDY SAMPSON AVILEZ, 58, Brooklyn',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judy_Sampson_Avilez.jpg',
  },
  {
    i: 483,
    d: 'JOSE MARIA PALAGUACHI, 58, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 484,
    d: 'NELSON CRUZ, 58, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 485,
    d: 'CESAR MAURO SARMIENTO LOPEZ, 58, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 486,
    d: 'DR. REZA CHOWDURY, 58, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 487,
    d: 'GELBERT A. RIOS, 58, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 488,
    d: 'LEV GOLUBOV, 58, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 489,
    d: 'MARIA CORAZON CENTRON, 58, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 490,
    d: 'SHIRAJUL ISLAM, 58',
    e: 'April 4, 2020',
  },
  {
    i: 491,
    d: 'RABBI MIKHAEL COHEN, 58, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 492,
    d: 'FOSTER MOORE JR., 58, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 493,
    d: 'RALPH JOHNSON, 58, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 494,
    d: 'GWENDOLYN KING, 58',
    e: 'March 30, 2020',
  },
  {
    i: 495,
    d: 'YURIY KAPELEVICH, 58, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 496,
    d: 'RABBI CHAIM TZVI KONIKOV, 58, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 497,
    d: 'JULES TAYLOR JR., 58, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jules_Taylor.jpg',
  },
  {
    i: 498,
    d: 'ALEX BRUNO, 58, Brooklyn',
  },
  {
    i: 499,
    d: 'NACHUM COOPER, 58, Brooklyn',
  },
  {
    i: 500,
    d: 'PABLO CRIOLO, 58',
  },
  {
    i: 501,
    d: 'BABUL ISLAM, 58, Queens',
  },
  {
    i: 502,
    d: 'CAROL KING-GRANT, 58, Queens',
  },
  {
    i: 503,
    d: 'CAROLINE LEDDY, 58, Staten Island',
  },
  {
    i: 504,
    d: 'JULIO MEJIA, 58, Queens',
  },
  {
    i: 505,
    d: 'NESLY PAUL, 58, Brooklyn',
  },
  {
    i: 506,
    d: 'DANIEL PAVODANO-GULACK, 58, Manhattan',
  },
  {
    i: 507,
    d: 'CURTIS L. ROBERTSON JR., 58, Brooklyn',
  },
  {
    i: 508,
    d: 'SCOTT ROGERS, 58, Staten Island',
  },
  {
    i: 509,
    d: 'MERVIN SERAPHIN, 58, Queens',
  },
  {
    i: 510,
    d: 'ZAMAN ALI, 59, Queens',
    e: 'February 12, 2021',
  },
  {
    i: 511,
    d: 'FREDDY WILSON ALEMAN, 59, Queens',
    e: 'December 26, 2020',
  },
  {
    i: 512,
    d: 'MICHELLE JOHNSON, 59, The Bronx',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michelle_Johnson.jpeg',
  },
  {
    i: 513,
    d: 'FRANKY GONZALEZ, 59',
    e: 'May 15, 2020',
  },
  {
    i: 514,
    d: 'JOHN L. FERRI JR., 59, Manhattan',
    e: 'May 13, 2020',
  },
  {
    i: 515,
    d: 'MANUEL J. GUANAQUIZA, 59, Queens',
    e: 'May 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Guanaquiza.jpg',
  },
  {
    i: 516,
    d: 'ERWIN “TITO” LAMBRENTO, 59, Queens',
    e: 'May 9, 2020',
  },
  {
    i: 517,
    d: 'GEORGINA AGUIRRE, 59, Manhattan',
    e: 'May 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Georgina_Aguirre.jpg',
  },
  {
    i: 518,
    d: 'JAMES EDWARD DALY, 59, Staten Island',
    e: 'May 6, 2020',
  },
  {
    i: 519,
    d: 'MARK REMOLINO, 59, Staten Island',
    e: 'May 4, 2020',
  },
  {
    i: 520,
    d: 'JOHN CARILLO, 59',
    e: 'April 28, 2020',
  },
  {
    i: 521,
    d: 'ROY PIKSER, 59, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 522,
    d: 'LOURDES MAGO, 59, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 523,
    d: 'YVES SAJOUS, 59, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 524,
    d: 'VICTOR MANGAL, 59, Brooklyn',
    e: 'April 18, 2020',
  },
  {
    i: 525,
    d: 'LORENZO JACQUES THAGGARD, 59, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 526,
    d: 'MAUREEN PATRICIA LUNNEY, 59, Staten Island',
    e: 'April 16, 2020',
  },
  {
    i: 527,
    d: 'GREGORY HODGE, 59, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gregory_Hodge.PNG',
  },
  {
    i: 528,
    d: 'LUIS EDUARDO RIASCOS, 59, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Riascos.jpeg',
  },
  {
    i: 529,
    d: 'ALFREDO MENESES GONZALEZ, 59, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 530,
    d: 'MICHAEL FIELD, 59',
    e: 'April 8, 2020',
  },
  {
    i: 531,
    d: 'CURWIN KING, 59, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 532,
    d: 'DR. J. RONALD VERRIER, 59, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 533,
    d: 'THYCE MATTIS, 59, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 534,
    d: 'THOMAS SOTO, 59, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 535,
    d: 'STEVE JOSEPH RYBKIN, 59',
    e: 'April 5, 2020',
  },
  {
    i: 536,
    d: 'BRYSON KENT BOWMAN, 59',
    e: 'April 4, 2020',
  },
  {
    i: 537,
    d: 'MIGUEL GUAMAN, 59, Queens',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Guaman.jpg',
  },
  {
    i: 538,
    d: 'SYED RAHMAN, 59',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Syed_Rahman.jpg',
  },
  {
    i: 539,
    d: 'ANDREAS “ANDY” KOUTSOUDAKIS SR., 59, Staten Island',
    e: 'March 27, 2020',
  },
  {
    i: 540,
    d: 'RICHARD STEWART-JOHNSON, 59, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Johnson.jpg',
  },
  {
    i: 541,
    d: 'FLOYD CARDOZ, 59, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 542,
    d: 'LORENA BORJAS, 59, Queens',
    e: 'March 20, 2020',
  },
  {
    i: 543,
    d: 'LUIS ACOSTA, 59',
  },
  {
    i: 544,
    d: 'REMBERTO AGUILAR, 59, Queens',
  },
  {
    i: 545,
    d: 'ERNIE CHIU, 59, Queens',
  },
  {
    i: 546,
    d: 'WAYNE R. FINGALL, 59, Brooklyn',
  },
  {
    i: 547,
    d: 'SAMEER JALEEL, 59, Queens',
  },
  {
    i: 548,
    d: 'RONNIE JIMENO, 59, Brooklyn',
  },
  {
    i: 549,
    d: 'CATHERINE MOBILLE, 59, Staten Island',
  },
  {
    i: 550,
    d: 'ANUCHA PROMSGAN, 59',
  },
  {
    i: 551,
    d: 'JUAN RIVERA, 59, The Bronx',
  },
  {
    i: 552,
    d: 'ROBERT SARUTTO, 59, Staten Island',
  },
  {
    i: 553,
    d: 'PETER SCHURR, 59, Queens',
  },
  {
    i: 554,
    d: 'YITZCHOK STEINBERG, 59, Brooklyn',
  },
  {
    i: 555,
    d: 'TAPAN BARUA, 60, Manhattan',
    e: 'December 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tapan_Barua.jpg',
  },
  {
    i: 556,
    d: 'FAREEDA BEHARRY, 60, Queens',
    e: 'May 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Beharry.jpeg',
  },
  {
    i: 557,
    d: 'WAYNE STEELE, 60',
    e: 'May 20, 2020',
  },
  {
    i: 558,
    d: 'ANTHONY GRAFFIGNA, 60, Staten Island',
    e: 'May 9, 2020',
  },
  {
    i: 559,
    d: 'BRIAN KEITH SADDLER, 60',
    e: 'May 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brian_Saddler.png',
  },
  {
    i: 560,
    d: 'BRIAN SADDLER, 60',
    e: 'May 8, 2020',
  },
  {
    i: 561,
    d: 'PAT NICHOLLS, 60, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 562,
    d: 'MARY MARGARET MINERLY, 60, Queens',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mary_Minerly.jpg',
  },
  {
    i: 563,
    d: 'FRANCOIS NIEUWENDAM, 60, Manhattan',
    e: 'May 3, 2020',
  },
  {
    i: 564,
    d: 'RICHARD “RICKY” PEREZ, 60, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 565,
    d: 'SIGFRIDO SEPULVEDA, 60, Manhattan',
    e: 'April 29, 2020',
  },
  {
    i: 566,
    d: 'ALEX CARRAZANA, 60, Queens',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alex_Carrazana.jpg',
  },
  {
    i: 567,
    d: 'HORATIO JORDAN, 60',
    e: 'April 25, 2020',
  },
  {
    i: 568,
    d: 'IDRIS BEY, 60, Brooklyn',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Idris_Bey.PNG',
  },
  {
    i: 569,
    d: 'GARY SAMUELS, 60, Staten Island',
    e: 'April 22, 2020',
  },
  {
    i: 570,
    d: 'DIEGO AGRON, 60, Brooklyn',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Diego_Agron.jpg',
  },
  {
    i: 571,
    d: 'VIRDREE BURNS JR., 60, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 572,
    d: 'CARMINE DEFAZIO JR., 60, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 573,
    d: 'ALAA M. KHALIL, 60, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 574,
    d: 'MICHAEL THOMPSON SR., 60',
    e: 'April 17, 2020',
  },
  {
    i: 575,
    d: 'LEONARD EUGENE CARTER JR., 60, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 576,
    d: 'JOSEPH JURCZAK, 60, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 577,
    d: 'FERNANDO “NIC 707” MITEFF, 60, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 578,
    d: 'JOSEPH FLETCHER, 60, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Fletcher.JPG',
  },
  {
    i: 579,
    d: 'FRANK AMATO, 60, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 580,
    d: 'DON BENITO, 60, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 581,
    d: 'PAMELA EVETTE HAYNES, 60, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 582,
    d: 'MIGUEL CHUMPITAZ, 60, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 583,
    d: 'YAW A. ASANTE, 60, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 584,
    d: 'MICHAEL ANTHONY STEVENS SR., 60, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Stevens.jpg',
  },
  {
    i: 585,
    d: 'VINCENT J. “VINNIE” LIONTI, 60, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 586,
    d: 'NICANOR “NICK” BALTAZAR, 60, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 587,
    d: 'DR. FRANK GABRIN, 60, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 588,
    d: 'RUEL DEJESUS, 60, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 589,
    d: 'RABBI ARON HERSH KLEINMAN, 60, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 590,
    d: 'JUAN ANDRES OLLARVIDE, 60, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Ollarvide.jpg',
  },
  {
    i: 591,
    d: 'YISROEL MOSHE BAUM, 60, Brooklyn',
  },
  {
    i: 592,
    d: 'IQBAL HAQ BHUIYAN PRINCE, 60, Queens',
  },
  {
    i: 593,
    d: 'RABBI ELI BOTKNECHT, 60, Brooklyn',
  },
  {
    i: 594,
    d: 'ELIAR CENTENO, 60',
  },
  {
    i: 595,
    d: 'LAIDEZE CHARLES, 60, Brooklyn',
  },
  {
    i: 596,
    d: 'MOHAMMED HAQUE, 60',
  },
  {
    i: 597,
    d: 'AKMOL HUSSEIN (TANTU), 60, Brooklyn',
  },
  {
    i: 598,
    d: 'EMMANUEL “JAKE THE SNAKE” JACOB, 60, Brooklyn',
  },
  {
    i: 599,
    d: 'DR. ELI LANDAU, 60, Queens',
  },
  {
    i: 600,
    d: 'ALCENIO MENA, 60, Brooklyn',
  },
  {
    i: 601,
    d: 'JORGE MUNOZ, 60',
  },
  {
    i: 602,
    d: 'FRINE REYES, 60, Brooklyn',
  },
  {
    i: 603,
    d: 'CAROL RYER, 60, The Bronx',
  },
  {
    i: 604,
    d: 'RAMON SALVA, 60, Queens',
  },
  {
    i: 605,
    d: 'VENUS MCCOMBS-THREATTS, 61',
    e: 'May 24, 2021',
  },
  {
    i: 606,
    d: 'PROMELA SURI, 61, Queens',
    e: 'January 25, 2021',
  },
  {
    i: 607,
    d: 'DAVID M. BURNETT, 61, Brooklyn',
    e: 'January 22, 2021',
  },
  {
    i: 608,
    d: 'TRINIDAD CUEVAS, 61, Manhattan',
    e: 'December 26, 2020',
  },
  {
    i: 609,
    d: 'WILLIAM T. “BILL” MORRIS, 61, Queens',
    e: 'June 6, 2020',
  },
  {
    i: 610,
    d: 'DR. IVAN RODRIGUEZ SR., 61',
    e: 'May 25, 2020',
  },
  {
    i: 611,
    d: 'JOHN MCCORMACK, 61, Queens',
    e: 'May 20, 2020',
  },
  {
    i: 612,
    d: 'EDWIN GARCIA, 61, Manhattan',
    e: 'May 7, 2020',
  },
  {
    i: 613,
    d: 'STEWART ALAN TURNER, 61, Manhattan',
    e: 'April 27, 2020',
  },
  {
    i: 614,
    d: 'ANGEL PILLIGUA, 61, Queens',
    e: 'April 26, 2020',
  },
  {
    i: 615,
    d: 'RAINER “RAY” KILIAN, 61, Queens',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rainer_Kilian.jpeg',
  },
  {
    i: 616,
    d: 'CHERYL JOHNSON, 61, Queens',
    e: 'April 25, 2020',
  },
  {
    i: 617,
    d: 'RAUL AGUSTÍN CARMONA, 61, The Bronx',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Raul_Carmona.jpeg',
  },
  {
    i: 618,
    d: 'RONNIE CORDERO, 61',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ronnie_Cordero.jpg',
  },
  {
    i: 619,
    d: 'PAUL DOUGLAS GRAY, 61, The Bronx',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Paul_Gray.jpeg',
  },
  {
    i: 620,
    d: 'VANESSA BURKETT, 61, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 621,
    d: 'PATRICIA FUENTES, 61',
    e: 'April 17, 2020',
  },
  {
    i: 622,
    d: 'RICHARD W. CHIN, 61, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 623,
    d: 'MOHAMED RAHAMAN, 61, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 624,
    d: 'SANATTAN BALGOBIN, 61, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 625,
    d: 'WILLIAM HAYES, 61, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 626,
    d: 'ALISON DONOVAN, 61, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 627,
    d: 'BRUCE B. MILEY, 61, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 628,
    d: 'AZHAR KHAN, 61, Staten Island',
    e: 'April 7, 2020',
  },
  {
    i: 629,
    d: 'CHRISOPHER JOSEPH “CHRIS” COGNATO, 61, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 630,
    d: 'JAIME E. FUENTES, 61, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 631,
    d: 'MARIA VICTORIA “VICKY” LUCAS, 61, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Victoria_Lucas.jpg',
  },
  {
    i: 632,
    d: 'ISAIAH DE LA TORRE, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 633,
    d: 'DEBRA FERRARI, 61, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 634,
    d: 'LISA G. MACK, 61, Brooklyn',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lisa_Mack.jpg',
  },
  {
    i: 635,
    d: 'FERMIN MARTINEZ, 61, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 636,
    d: 'MADHVI AYA, 61, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    i: 637,
    d: 'VICTOR ZAPANA SR., 61, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 638,
    d: 'GIACOMINA BARR-BROWN, 61, The Bronx',
    e: 'March 26, 2020',
  },
  {
    i: 639,
    d: 'OLIVER CYRUS, 61, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 640,
    d: 'DELPHINE TAZAIR LEE, 61, Queens',
    e: 'March 22, 2020',
  },
  {
    i: 641,
    d: 'LARRY D. EDGEWORTH, 61, Manhattan',
    e: 'March 19, 2020',
  },
  {
    i: 642,
    d: 'SHARON BASCOM, 61, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sharon_Bascom.jpg',
  },
  {
    i: 643,
    d: 'SALVATORE ANDREOTTI, 61',
  },
  {
    i: 644,
    d: 'HUBERT BELGRAVE, 61, Queens',
  },
  {
    i: 645,
    d: 'LENORA CASSO, 61, Queens',
  },
  {
    i: 646,
    d: 'ROSITA ESTINFIL, 61, Brooklyn',
  },
  {
    i: 647,
    d: 'FERNANDO GALEANO, 61, Brooklyn',
  },
  {
    i: 648,
    d: 'JOANALEE GUINESS, 61',
  },
  {
    i: 649,
    d: 'PHYLLIS SUSAN HOLLEY, 61',
  },
  {
    i: 650,
    d: 'ROCCO LOMBARDO, 61, Brooklyn',
  },
  {
    i: 651,
    d: 'JOSE MAQUEDA, 61, Manhattan',
  },
  {
    i: 652,
    d: 'DANIEL SANCHEZ, 61, The Bronx',
  },
  {
    i: 653,
    d: 'CONCEPCION SILVA, 61, Brooklyn',
  },
  {
    i: 654,
    d: 'RICK A. UNTERBERG, 61, Manhattan',
  },
  {
    i: 655,
    d: 'JORGE VILLARROEL, 61, Queens',
  },
  {
    i: 656,
    d: 'BRIAN MARCUS, 62, Queens',
    e: 'April 24, 2021',
  },
  {
    i: 657,
    d: 'GURPAUL SINGH, 62, Queens',
    e: 'April 15, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gurpaul_Singh.jpeg',
  },
  {
    i: 658,
    d: 'GARY VENDITTI, 62, Staten Island',
    e: 'March 26, 2021',
  },
  {
    i: 659,
    d: 'SURESH AMBARAM RANA, 62',
    e: 'March 19, 2021',
  },
  {
    i: 660,
    d: 'ADOLFO MOTTA, 62, Queens',
    e: 'February 7, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Adolfo_Motta.jpg',
  },
  {
    i: 661,
    d: 'NINA MARIE FAVUZZA, 62, Queens',
    e: 'January 27, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Nina_Marie_Favuzza.png',
  },
  {
    i: 662,
    d: 'JOSHUA C. FAGIN, 62, Manhattan',
    e: 'November 24, 2020',
  },
  {
    i: 663,
    d: 'LOIDA TOBIAS, 62, Queens',
    e: 'June 30, 2020',
  },
  {
    i: 664,
    d: 'MARLYN M. VINUYA, 62, Queens',
    e: 'May 22, 2020',
  },
  {
    i: 665,
    d: 'JOSE AVILES VANEGAS, 62, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 666,
    d: 'EDUARDO L. GANCAYCO, 62, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 667,
    d: 'MICHAEL BORLAND, 62, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 668,
    d: 'DR. ARTHUR FRIEDMAN, 62',
    e: 'April 30, 2020',
  },
  {
    i: 669,
    d: 'DR., VERY REV. JAMES MAHONEY, 62, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 670,
    d: 'DR. JAMES MAHONEY, 62',
    e: 'April 27, 2020',
  },
  {
    i: 671,
    d: 'AZINET PUDPUD, 62, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 672,
    d: 'MIREYA VARGAS CARDONA, 62',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mireya_Cardona.jpg',
  },
  {
    i: 673,
    d: 'MIREYA ROMERO, 62, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 674,
    d: 'RAMSUNDER DWARKA, 62, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 675,
    d: 'MEZAC CHOSSON, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 676,
    d: 'DR. STEPHEN R. MARRONE, 62, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 677,
    d: 'YI GAO HUANG, 62, Queens',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Yi_Gao_Huang.jpg',
  },
  {
    i: 678,
    d: 'MARIE CAROLE ETIENNE, 62, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 679,
    d: 'ROZELLA MCFARLAN, 62, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 680,
    d: 'RABBI YAAKOV “YANKY” KORF, 62, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 681,
    d: 'LORNA MCEACHRON, 62, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 682,
    d: 'TOMMY SMITH III, 62, Staten Island',
    e: 'April 10, 2020',
  },
  {
    i: 683,
    d: 'MARCOS CASTRO, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marcos_Castro.jpg',
  },
  {
    i: 684,
    d: 'ABUL HOSSAIN, 62, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Abul_Hossain.JPG',
  },
  {
    i: 685,
    d: 'MEIR ECKSTEIN, 62, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 686,
    d: 'ALMA LILLIAN MARQUEZ, 62',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alma_Lillian_Marquez.jpeg',
  },
  {
    i: 687,
    d: 'DONNA DURKIN, 62, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 688,
    d: 'ANTHONY MEOLI, 62, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Meoli.jpg',
  },
  {
    i: 689,
    d: 'DR. JULIE BUTLER, 62, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 690,
    d: 'MARIA ESTHER PALAGUACHI CUZCO, 62, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 691,
    d: 'MAGDALENA RENTAS SÁNCHEZ, 62, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 692,
    d: 'JAIME “JIMMY” FERNANDO, 62, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 693,
    d: 'DEAN PATRICK WRZESZCZ, 62, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 694,
    d: 'FRANK ORSINI, 62',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frank_Orsini.jpg',
  },
  {
    i: 695,
    d: 'WILLIAM “BILLY” PLANTT, 62, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Plantt.JPG',
  },
  {
    i: 696,
    d: 'PETER EDWARD SCHAEFER, 62, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 697,
    d: 'RICHARD “RICHIE” SANTANGELO, 62, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 698,
    d: 'DENNIS C. DICKSON, 62, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 699,
    d: 'DENNIS C. DIXON, 62',
    e: 'March 26, 2020',
  },
  {
    i: 700,
    d: 'SUSANA LAUZAN, 62, The Bronx',
    e: 'February 3, 2020',
  },
  {
    i: 701,
    d: 'LUCHNER BENOIT, 62',
  },
  {
    i: 702,
    d: 'RODRIGO CALENO, 62, Queens',
  },
  {
    i: 703,
    d: 'MARIE GAGLIANO, 62, The Bronx',
  },
  {
    i: 704,
    d: 'TONY GREER, 62, Manhattan',
  },
  {
    i: 705,
    d: 'RAMON GUTIERREZ, 62, The Bronx',
  },
  {
    i: 706,
    d: 'JORGE JARA, 62, Queens',
  },
  {
    i: 707,
    d: 'YOSEF LEIB LAZAR, 62, Brooklyn',
  },
  {
    i: 708,
    d: 'MIRVIL LOUIS, 62',
  },
  {
    i: 709,
    d: 'EDGAR LUNA, 62, Queens',
  },
  {
    i: 710,
    d: 'MARIO PINNA, 62, Queens',
  },
  {
    i: 711,
    d: 'YITZCHOK TUVIA RUBIN, 62, Brooklyn',
  },
  {
    i: 712,
    d: 'ANTONIO STEELE, 62',
  },
  {
    i: 713,
    d: 'DAW KWUN YOON, 62',
  },
  {
    i: 714,
    d: 'CARLTON NAUGHTON SR., 63',
    e: 'February 24, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carlton_Naughton.jpeg',
  },
  {
    i: 715,
    d: 'MARIA LOURDES CABAN, 63, Queens',
    e: 'February 18, 2021',
  },
  {
    i: 716,
    d: 'MARISOL GUZMAN, 63, The Bronx',
    e: 'February 14, 2021',
  },
  {
    i: 717,
    d: 'LUIGI CAPORICCI, 63',
    e: 'December 11, 2020',
  },
  {
    i: 718,
    d: 'SEYMOUR “SY” COLLINS, 63, Staten Island',
    e: 'May 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Seymour_Collins.jpg',
  },
  {
    i: 719,
    d: 'EVELYN OCHOA-CELANO, 63',
    e: 'May 13, 2020',
  },
  {
    i: 720,
    d: 'MAVIS CHARLES, 63, Brooklyn',
    e: 'May 12, 2020',
  },
  {
    i: 721,
    d: 'CARLOS ALFREDO FERNANDEZ, 63, Queens',
    e: 'May 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carlos_Alfredo_Fernandez.jpg',
  },
  {
    i: 722,
    d: 'INGRID MOHAMMED WARNER, 63, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ingird_Warner.jpeg',
  },
  {
    i: 723,
    d: 'MANUEL A. TITO, 63, Queens',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Tito.jpg',
  },
  {
    i: 724,
    d: 'JOHN MARCHINI, 63, Queens',
    e: 'April 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Marchini.jpg',
  },
  {
    i: 725,
    d: 'LUIS FERNANDO MARULANDA, 63',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Fernando_Marulanda.png',
  },
  {
    i: 726,
    d: 'MENACHEM LOEFFLER, 63, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 727,
    d: 'MARIA GUIA “MAMA GUIA” CABILLON, 63, Brooklyn',
    e: 'April 26, 2020',
  },
  {
    i: 728,
    d: 'ROMEO OCAMPO “ROMY” AGTARAP, 63',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Romeo_Agtarap.jpg',
  },
  {
    i: 729,
    d: 'JOHN REDD, 63, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Redd.jpg',
  },
  {
    i: 730,
    d: 'DENNIS FOX, 63, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 731,
    d: 'ANTONIO SUAREZ, 63',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Suarez.jpg',
  },
  {
    i: 732,
    d: 'RHONDA GARVIN, 63, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 733,
    d: 'RABBI ALTER AVRAHAM SIMCHA FRIEDMAN, 63, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 734,
    d: 'ANDREA SANCHO, 63',
    e: 'April 11, 2020',
  },
  {
    i: 735,
    d: 'KAREN GARVIN, 63, The Bronx',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Karen_Garvin.jpg',
  },
  {
    i: 736,
    d: 'REMIGIO ROSALES FLORES, 63, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 737,
    d: 'GAETANA DESERTO, 63, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gaetana_Deserto.jpg',
  },
  {
    i: 738,
    d: 'SHARON KAUFMAN, 63, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 739,
    d: 'LOUISE SOUTHWORTH PASQUINCE, 63, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 740,
    d: 'LOUISE SOUTHWORTH-PASQUINCE, 63, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 741,
    d: 'PATRICIA A. BOND, 63, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 742,
    d: 'JUIO MIGENES, 63, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 743,
    d: 'PATRICK J. GLYNN, 63, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 744,
    d: 'SABRINA “BB” JEFFERSON, 63, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 745,
    d: 'CEDRIC ROBINSON, 63, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 746,
    d: 'OMAR PORTILLO, 63, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 747,
    d: 'RICHARD C. SEABERRY, 63, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Seaberry.jpg',
  },
  {
    i: 748,
    d: 'DAVID NOCERA, 63, Manhattan',
    e: 'March 26, 2020',
  },
  {
    i: 749,
    d: 'MAURICE BERGER, 63, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 750,
    d: 'AVROHOM SHIYA FREUND, 63, Brooklyn',
    e: 'March 20, 2020',
  },
  {
    i: 751,
    d: 'MATIS BLUM, 63, Queens',
  },
  {
    i: 752,
    d: 'ROSALIA CASTELLI, 63, Staten Island',
  },
  {
    i: 753,
    d: 'KAREN FELTON, 63, The Bronx',
  },
  {
    i: 754,
    d: 'RABBI YOSEF KALISH, 63, Brooklyn',
  },
  {
    i: 755,
    d: 'FRANK LEONG, 63',
  },
  {
    i: 756,
    d: 'JAMIYLAH A. MUHAMMAD, 63, Queens',
  },
  {
    i: 757,
    d: 'GABRIEL POLANCO, 63, Queens',
  },
  {
    i: 758,
    d: 'MEIR RAPAPORT, 63, Brooklyn',
  },
  {
    i: 759,
    d: 'DARLEY ROBINSON, 63',
  },
  {
    i: 760,
    d: 'IQBAL SHAIKH, 63, Queens',
  },
  {
    i: 761,
    d: 'LESLIE SOLIUS VERNERET, 63, Brooklyn',
  },
  {
    i: 762,
    d: 'FREDERICK KING, 64, Queens',
    e: 'February 6, 2021',
  },
  {
    i: 763,
    d: 'SHAMSUDDIN AHMED, 64, Queens',
    e: 'January 18, 2021',
  },
  {
    i: 764,
    d: 'THEODORE CAMPBELL, 64, The Bronx',
    e: 'January 9, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Theodore_Campbell.jpeg',
  },
  {
    i: 765,
    d: 'BERNITA ELAINE RAYFORD-KERSHAW, 64, Queens',
    e: 'January 9, 2021',
  },
  {
    i: 766,
    d: 'LUIS A. FIGUEROA, 64, Queens',
    e: 'May 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Figueroa.jpg',
  },
  {
    i: 767,
    d: 'ANTHONY ACHAN, 64, The Bronx',
    e: 'May 3, 2020',
  },
  {
    i: 768,
    d: 'MARIE ELIZABETH MELENDEZ, 64, Manhattan',
    e: 'May 1, 2020',
  },
  {
    i: 769,
    d: 'FRANK LEE, 64, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 770,
    d: 'GEDALYA SCHMALBERG, 64, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 771,
    d: 'ELI KLAUSNER, 64',
    e: 'April 13, 2020',
  },
  {
    i: 772,
    d: 'IRVING CRUZ, 64, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 773,
    d: 'ELISABETH “LIS” RUBERT, 64, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elisabeth_Rubert.jpg',
  },
  {
    i: 774,
    d: 'SANTIAGO R. CONDE, 64',
    e: 'April 11, 2020',
  },
  {
    i: 775,
    d: 'KAREN KELLY, 64, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 776,
    d: 'DEBORAH KORCZYNSKI, 64, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 777,
    d: 'YANICK ROSE BEAUBRUN, 64, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 778,
    d: 'JOSE OCHOA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 779,
    d: 'JORGE SALDARRIAGA, 64, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 780,
    d: 'HAL WILLNER, 64, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 781,
    d: 'STUART COHEN, 64, Staten Island',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stuart_Cohen.jpg',
  },
  {
    i: 782,
    d: 'ANA VALERIO, 64',
    e: 'April 3, 2020',
  },
  {
    i: 783,
    d: 'FRANK ABREU, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 784,
    d: 'MANUEL “VICTOR” CHAVEZ, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 785,
    d: 'DIANE PEARL MANNING, 64, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 786,
    d: 'JACOB CREDELL, 64, Brooklyn',
    e: 'March 31, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jacob_Credell.jpg',
  },
  {
    i: 787,
    d: 'DR. DOUG BASS, 64, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 788,
    d: 'MARTHA RIVAS, 64, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 789,
    d: 'MARIUS NARCISSE, 64, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 790,
    d: 'JOHNNY LEE BAYNES, 64, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 791,
    d: 'RICARDO CASTANEDA, 64, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 792,
    d: 'ELENA CÁCERES, 64, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 793,
    d: 'ROBERT HERMAN, 64, Manhattan',
    e: 'March 20, 2020',
  },
  {
    i: 794,
    d: 'BORUCH YAAKOV BLOCH, 64, Brooklyn',
  },
  {
    i: 795,
    d: 'LUIS CARDENAS, 64',
  },
  {
    i: 796,
    d: 'MARIANO CASTELLANOS, 64, The Bronx',
  },
  {
    i: 797,
    d: 'LEONA COHEN, 64, Brooklyn',
  },
  {
    i: 798,
    d: 'RABBI YECHEZKEL SHARAGA EIDLIS, 64, Brooklyn',
  },
  {
    i: 799,
    d: 'SOSYA REIZEL FRIEDMAN, 64, Brooklyn',
  },
  {
    i: 800,
    d: 'LEROY MARAGH, 64, The Bronx',
  },
  {
    i: 801,
    d: 'BENNIE MOORE, 64, Brooklyn',
  },
  {
    i: 802,
    d: 'LEROY NOEL, 64, Brooklyn',
  },
  {
    i: 803,
    d: 'RENNIE REID, 64, The Bronx',
  },
  {
    i: 804,
    d: 'DUROCHER SYLVAIN, 64, Brooklyn',
  },
  {
    i: 805,
    d: 'GREGORY TREADWELL, 64, The Bronx',
  },
  {
    i: 806,
    d: 'FRANCHETTE WOODLEY, 64, The Bronx',
  },
  {
    i: 807,
    d: "DAVID JOSPEH D'ERMILIO, 65",
    e: 'May 13, 2021',
  },
  {
    i: 808,
    d: 'DANIEL F. “DANNY” BAUER JR., 65, The Bronx',
    e: 'July 8, 2020',
  },
  {
    i: 809,
    d: 'SALVATORE “CAPPI” CAPOZUCCA, 65, Brooklyn',
    e: 'May 13, 2020',
  },
  {
    i: 810,
    d: 'ROBERT THOMAS FAHS, 65',
    e: 'May 7, 2020',
  },
  {
    i: 811,
    d: 'VICTOR PEI, 65',
    e: 'May 7, 2020',
  },
  {
    i: 812,
    d: 'DANIEL KARPUS, 65, Manhattan',
    e: 'May 5, 2020',
  },
  {
    i: 813,
    d: 'LUIS E. MARTINEZ, 65, Queens',
    e: 'May 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Martinez.jpg',
  },
  {
    i: 814,
    d: 'LAFAYETTE TERRELL, 65, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 815,
    d: 'LISA LOUISE MONTANINO, 65, Staten Island',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lisa_Louise_Montanino.png',
  },
  {
    i: 816,
    d: 'FERNANDO ZAPATA, 65, Queens',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fernando_Zapata.JPG',
  },
  {
    i: 817,
    d: 'EDWARD DESMOND KHELAWAN, 65, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 818,
    d: 'JANEE CHRISTIANSEN, 65, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 819,
    d: 'QUINTINO ORTEGA, 65, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 820,
    d: 'VICTORIA WILHELM, 65, Staten Island',
    e: 'April 18, 2020',
  },
  {
    i: 821,
    d: 'MOSHE EZRA ADLER, 65, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 822,
    d: 'MARIE CHARLOTTE DESTIN, 65, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 823,
    d: 'ALPIN SANCHO, 65',
    e: 'April 12, 2020',
  },
  {
    i: 824,
    d: 'ALEXANDER “ALEX” WEIR, 65, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 825,
    d: 'EILISH BOCHNER, 65, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 826,
    d: 'CARLOS CALDERON, 65, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 827,
    d: 'JOHN PHILLIP, 65, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 828,
    d: 'MARY ELLEN PORTER, 65, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 829,
    d: 'NAIM TOME, 65, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 830,
    d: 'ALEYAMMA JOHN, 65, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 831,
    d: 'ALI SHAIBI, 65, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 832,
    d: 'VALERIE WILSON, 65, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 833,
    d: 'PANAYIOTIS “PETER” PANAYIOTOU, 65, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Peter_Panayiotou.jpeg',
  },
  {
    i: 834,
    d: 'RULX DAGUS, 65, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 835,
    d: 'LYNFORD GEORGE CHAMBERS, 65, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 836,
    d: 'NELSON ROMERO, 65, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 837,
    d: 'STEPHANIE GASTON, 65, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 838,
    d: 'FLORENCIO ALMAZO “TIO” MORÁN, 65, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 839,
    d: 'JUAN LEONARDO TORRES, 65, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 840,
    d: 'GREGORIO CAMPIS, 65, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 841,
    d: 'PRISCILLA “SWEET PEA” CARROW, 65, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 842,
    d: 'GLORIA MARIA ESPERTIN, 65',
    e: 'March 29, 2020',
  },
  {
    i: 843,
    d: 'PETER PINTO, 65, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 844,
    d: 'RABBI YOSEF YITZCHOK GROSSMAN, 65, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 845,
    d: 'EDWARD FREDERICK DOTY, 65',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edward_Doty.jpeg',
  },
  {
    i: 846,
    d: 'YESHAYA ENGLARD, 65, Brooklyn',
    e: 'March 18, 2020',
  },
  {
    i: 847,
    d: 'ELIEZER “LAZER” BERGER, 65, Brooklyn',
  },
  {
    i: 848,
    d: 'RUTHANN COHEN-AIKENS, 65, Manhattan',
  },
  {
    i: 849,
    d: 'DAVID OR DOVID FISHER, 65, Brooklyn',
  },
  {
    i: 850,
    d: 'MERCEDES GARCIA, 65',
  },
  {
    i: 851,
    d: 'DEBRA GRIMSLEY, 65',
  },
  {
    i: 852,
    d: 'DEBORAH C. JOSEPH-SAUNDERS, 65, Staten Island',
  },
  {
    i: 853,
    d: 'NICHOLAS MATTEI, 65',
  },
  {
    i: 854,
    d: 'PIERREPAUL RODRIGUE, 65, Brooklyn',
  },
  {
    i: 855,
    d: 'GENARO SANCHEZ, 65',
  },
  {
    i: 856,
    d: 'CATHY WILLIAMS, 65',
  },
  {
    i: 857,
    d: 'MARSHAL “MARSH” GOLBERG, 66, Brooklyn',
    e: 'January 29, 2021',
  },
  {
    i: 858,
    d: 'STEPHEN MELNISZYN, 66, Queens',
    e: 'January 16, 2021',
  },
  {
    i: 859,
    d: 'GREGORY ANDREWS, 66, Manhattan',
    e: 'May 12, 2020',
  },
  {
    i: 860,
    d: 'HECTOR ROMAIN, 66, The Bronx',
    e: 'May 6, 2020',
  },
  {
    i: 861,
    d: 'ELOY CALIXTO ANDON, 66, Brooklyn',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eloy_Calixto_Andon.jpg',
  },
  {
    i: 862,
    d: 'LAURA DECKELMAN, 66, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 863,
    d: 'STANLEY HENESON, 66, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 864,
    d: 'PAUL DAVID CARY, 66',
    e: 'April 30, 2020',
  },
  {
    i: 865,
    d: 'SALVATORE MANCUSO, 66',
    e: 'April 30, 2020',
  },
  {
    i: 866,
    d: 'MAUREEN PORTIA ROBINSON-MORGAN, 66, The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maureen_Robinson_Morgan.png',
  },
  {
    i: 867,
    d: 'ELIZABETH QUINDE, 66, Queens',
    e: 'April 26, 2020',
  },
  {
    i: 868,
    d: 'CHARLES DEJESUS, 66, Queens',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_DeJesus.jpg',
  },
  {
    i: 869,
    d: 'VIVIAN MOSS VOELPEL, 66, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 870,
    d: 'DIMITRIY BOZHOVSKIY, 66',
    e: 'April 21, 2020',
  },
  {
    i: 871,
    d: 'FRANCES ROBERTA RUDLAND, 66, The Bronx',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Frances_Rudland1.jpg',
  },
  {
    i: 872,
    d: 'MARLINO T. CAGAS, 66, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 873,
    d: 'PHILIP FLORES, 66, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 874,
    d: 'NOACH DEAR, 66, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 875,
    d: 'MARIA ARAGON, 66, The Bronx',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Aragon.jpeg',
  },
  {
    i: 876,
    d: 'DOVID/ DUVID ARYEH SHOR, 66, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 877,
    d: 'MARTHA CORTES, 66, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 878,
    d: 'VALERIE FATA, 66',
    e: 'April 11, 2020',
  },
  {
    i: 879,
    d: 'STEPHEN JOEL HARDING, 66, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 880,
    d: 'DR. DAVID WALTER FINN, 66, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 881,
    d: 'RAYMOND VÁZQUEZ MUÑOZ, 66',
    e: 'April 7, 2020',
  },
  {
    i: 882,
    d: 'BRAHM KANCHIBHOTLA, 66, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 883,
    d: 'EUCARIO CARDOSO-PABLO, 66, The Bronx',
    e: 'April 5, 2020',
  },
  {
    i: 884,
    d: 'DR. YVES Y. ROSEUS, 66, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 885,
    d: 'MOHAMMAD SHAMSUZZOHA “PINTU” KHAN, 66, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 886,
    d: 'HAZEL PIA MIJARES, 66, Manhattan',
    e: 'March 30, 2020',
  },
  {
    i: 887,
    d: 'DR. MARK ALLEN RESPLER, 66, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 888,
    d: 'RUSTICO PASIG, 66, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rustico_Pasig.jpg',
  },
  {
    i: 889,
    d: 'ISAAC GRAHAM, 66, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 890,
    d: 'RICHARD AUSTIN JR., 66, Staten Island',
  },
  {
    i: 891,
    d: 'RABBI BENTZION BLUM, 66, Brooklyn',
  },
  {
    i: 892,
    d: 'ANATHOL DESAMOURS, 66, Brooklyn',
  },
  {
    i: 893,
    d: 'ARNULFO DORVILLE, 66, Brooklyn',
  },
  {
    i: 894,
    d: 'YAAKOV SHMUEL FREILACH, 66, Brooklyn',
  },
  {
    i: 895,
    d: 'ERLIN “FLINSTONE” GALARZA, 66, The Bronx',
  },
  {
    i: 896,
    d: 'YAAKOV YECHIEL GREENWALD, 66, Brooklyn',
  },
  {
    i: 897,
    d: 'YECHIEL MECHEL GROSS, 66, Brooklyn',
  },
  {
    i: 898,
    d: 'ANTHONY HERNANDEZ, 66, The Bronx',
  },
  {
    i: 899,
    d: 'DAVID JAMAL, 66, Brooklyn',
  },
  {
    i: 900,
    d: 'CLAUDIO MALAVE, 66, Manhattan',
  },
  {
    i: 901,
    d: 'CARL STANBURY, 66, Brooklyn',
  },
  {
    i: 902,
    d: 'GLENN FREDERIC VON NOSTITZ, 67, Brooklyn',
    e: 'February 10, 2021',
  },
  {
    i: 903,
    d: 'PAUL LINDNER, 67, Queens',
    e: 'January 10, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Paul_Lindner.png',
  },
  {
    i: 904,
    d: 'ANTHONY GENARO “TONY” CERULLO, 67, Brooklyn',
    e: 'January 7, 2021',
  },
  {
    i: 905,
    d: 'FERDINAND BENITEZ, 67, Staten Island',
    e: 'January 6, 2021',
  },
  {
    i: 906,
    d: 'MOHAMED NEZAAM HARUN, 67, Queens',
    e: 'January 3, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mohamed_Nezaam_Harun.jpeg',
  },
  {
    i: 907,
    d: 'JULIO I. MIRELES, 67, The Bronx',
    e: 'December 11, 2020',
  },
  {
    i: 908,
    d: 'ANNA LYRIST, 67, Queens',
    e: 'June 5, 2020',
  },
  {
    i: 909,
    d: 'MOHIBUR RAHMAN, 67, Queens',
    e: 'May 11, 2020',
  },
  {
    i: 910,
    d: 'JIM CHRISTOFOROU, 67',
    e: 'May 6, 2020',
  },
  {
    i: 911,
    d: 'GERARD SMITH, 67',
    e: 'May 1, 2020',
  },
  {
    i: 912,
    d: 'DAVID STONE, 67',
    e: 'April 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Stone.jpg',
  },
  {
    i: 913,
    d: 'VICTORIA LEON, 67',
    e: 'April 27, 2020',
  },
  {
    i: 914,
    d: 'ULLAH SHARIAT, 67, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 915,
    d: 'DR. BARRY WEBBER, 67, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 916,
    d: 'ANSTAY GODDARD, 67, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 917,
    d: 'MICHAEL DIMIN, 67, Brooklyn',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Dimin.JPG',
  },
  {
    i: 918,
    d: 'RUBY ATKINS, 67, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 919,
    d: 'TOIBA JUNGREIS, 67, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 920,
    d: 'DR. GARY SCLAR, 67, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 921,
    d: 'GISELE MENARD, 67, Queens',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gisele_Menard.jpg',
  },
  {
    i: 922,
    d: 'BEATRIZ SOLER, 67, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Beatriz_Soler.jpeg',
  },
  {
    i: 923,
    d: 'JOHN STEVEN “JOHNNY” FERRARI, 67, Staten Island',
    e: 'April 10, 2020',
  },
  {
    i: 924,
    d: 'PATRICIA HARRIET JACKSON, 67, The Bronx',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Patricia_Jackson.jpg',
  },
  {
    i: 925,
    d: 'ATAUR RAHMAN DEALER, 67, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 926,
    d: 'IRA STERN, 67, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 927,
    d: 'REV. NARCISO PATZAN, 67, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 928,
    d: 'ALPHONSE JUNIOR “J.R.” AGOVINO, 67, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alphonse_Agovino.jpeg',
  },
  {
    i: 929,
    d: 'STEVE HANN, 67, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 930,
    d: 'PATRICIA GEORGE, 67, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 931,
    d: 'ALFONSO ROBERTO CHANG, 67, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 932,
    d: 'ANTONIO CHECO, 67, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 933,
    d: 'MARC J. GOODMAN, 67, Manhattan',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marc_Goodman.jpg',
  },
  {
    i: 934,
    d: 'EDWIN VALENCIA, 67, Brooklyn',
    e: 'March 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edwin_Valencia.jpg',
  },
  {
    i: 935,
    d: 'SCOTT ELIJAH, 67',
    e: 'March 29, 2020',
  },
  {
    i: 936,
    d: 'LARRY WILLIAMS, 67, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 937,
    d: 'KEILA BLANK, 67, Brooklyn',
  },
  {
    i: 938,
    d: 'EMILIANO PADILLA, 67, Queens',
  },
  {
    i: 939,
    d: 'LINDA POPE, 67, The Bronx',
  },
  {
    i: 940,
    d: 'JAMES W. REEL JR., 67, Queens',
  },
  {
    i: 941,
    d: 'ZANVIL ROSS, 67, Brooklyn',
  },
  {
    i: 942,
    d: 'WILLIAM SHACKLEFORD, 67, Manhattan',
  },
  {
    i: 943,
    d: 'CLAUDIA SHIRLEY, 67, Brooklyn',
  },
  {
    i: 944,
    d: 'EMILIO YAGUAL, 67, Queens',
  },
  {
    i: 945,
    d: 'GEORGE MENEGATOS, 68, Queens',
    e: 'March 7, 2021',
  },
  {
    i: 946,
    d: 'LOURDES RIVERA, 68, Manhattan',
    e: 'January 20, 2021',
  },
  {
    i: 947,
    d: 'LOUIS J. KRUSZKA, 68, The Bronx',
    e: 'January 2, 2021',
  },
  {
    i: 948,
    d: 'CHAI SUTHAMMANONT, 68',
    e: 'May 26, 2020',
  },
  {
    i: 949,
    d: 'JOYCE C. REESE, 68',
    e: 'May 25, 2020',
  },
  {
    i: 950,
    d: 'ROSA VILLADA, 68, The Bronx',
    e: 'May 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosa_Villada.png',
  },
  {
    i: 951,
    d: 'LOTTIE LUCILLE GLADDEN, 68, Brooklyn',
    e: 'May 18, 2020',
  },
  {
    i: 952,
    d: 'MARIE YOLAINE BELIZAIRE, 68, Queens',
    e: 'May 14, 2020',
  },
  {
    i: 953,
    d: 'PHYLLIS ANN BURKETT, 68, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 954,
    d: 'JUAN M. CABAN, 68, The Bronx',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Juan_Caban.jpg',
  },
  {
    i: 955,
    d: 'MANUEL J. “MEME” ORTIZ, 68, Brooklyn',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Ortiz.jpg',
  },
  {
    i: 956,
    d: 'HUBEL ISIDRO ONOFRE CASTILLO, 68, Queens',
    e: 'April 29, 2020',
  },
  {
    i: 957,
    d: 'PATRICK IVOR GLASGOW, 68, Queens',
    e: 'April 28, 2020',
  },
  {
    i: 958,
    d: 'GARRY GREENBERG, 68, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 959,
    d: 'ALTAGRACIA ALVAREZ, 68, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 960,
    d: 'BIDYUT B. DAS, 68, Staten Island',
    e: 'April 21, 2020',
  },
  {
    i: 961,
    d: 'REV. BARBARA RICHARDSON, 68, Brooklyn',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Barbara_Richardson.jpg',
  },
  {
    i: 962,
    d: 'MARGARITA REYNEL DUMES, 68, The Bronx',
    e: 'April 20, 2020',
  },
  {
    i: 963,
    d: 'GARY JOHN SCHIAVI, 68, Staten Island',
    e: 'April 19, 2020',
  },
  {
    i: 964,
    d: 'RAFAEL ELI, 68, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 965,
    d: 'JAMAL UDDIN, 68, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 966,
    d: 'ANDREA RUIZ VELASCO, 68, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 967,
    d: 'CLAIRE GABRIELLE BIENAIME, 68, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 968,
    d: 'VINCENT CIRELLI “VINNY PEANUTS” SABATINO, 68, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 969,
    d: 'IRENA HARTELL, 68, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 970,
    d: 'BRUCE WEISENBERG, 68, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 971,
    d: 'JOEL DUNN, 68, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 972,
    d: 'GLORIA CHRISTINE GREEN, 68, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 973,
    d: 'ANA L. SANTANA, 68, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 974,
    d: 'LLOYD OSBORNE, 68, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 975,
    d: 'PHYLLIS ROBINSON, 68, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 976,
    d: 'KENNETH “KENNY” HENDERSON, 68, The Bronx',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Kenneth_Henderson.jpg',
  },
  {
    i: 977,
    d: 'ELENA GONZALEZ, 68, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 978,
    d: 'WILLIAM SKINNER, 68, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 979,
    d: 'RALPH T. GISMONDI, 68',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Gismondi.jpg',
  },
  {
    i: 980,
    d: 'KAZI HOSSAIN, 68, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 981,
    d: 'FREDERIKKE NESSA MEISTER, 68, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 982,
    d: 'ANDREA PEDOWITZ SMITH, 68, Brooklyn',
    e: 'April 5, 2020',
  },
  {
    i: 983,
    d: 'EZZARD “BURNHAM” CHRISTOPHER, 68, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ezzard_Christopher.jpg',
  },
  {
    i: 984,
    d: 'JOANN KULISH, 68, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 985,
    d: 'JENNIFER ROBIN ARNOLD, 68, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 986,
    d: 'VISAUD GOTAY, 68, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 987,
    d: 'HECTOR MOLINA, 68, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 988,
    d: 'MICHAEL A. SCURA, 68, Manhattan',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Scura.jpg',
  },
  {
    i: 989,
    d: 'ARTURO INTERIANO, 68, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 990,
    d: 'JOSE L. GONZALEZ, 68, Brooklyn',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_L_Gonzalez.jpg',
  },
  {
    i: 991,
    d: 'DELORES BOONE, 68, The Bronx',
  },
  {
    i: 992,
    d: 'MORDECHAI GOLDSTEIN, 68, Brooklyn',
  },
  {
    i: 993,
    d: 'YISROEL YAAKOV KAHN, 68, Brooklyn',
  },
  {
    i: 994,
    d: 'JORGE LOPEZ, 68',
  },
  {
    i: 995,
    d: 'ISIDRO MINDIOLAZA, 68, Queens',
  },
  {
    i: 996,
    d: 'MOSHE LEIB ROSENBERG, 68, Brooklyn',
  },
  {
    i: 997,
    d: 'RACHEL ROSENZWEIG, 68, Brooklyn',
  },
  {
    i: 998,
    d: 'MICHAEL SCURA, 68, Manhattan',
  },
  {
    i: 999,
    d: 'ZEV STERN, 68, Brooklyn',
  },
  {
    i: 1000,
    d: 'BENILDO TEXEIRA, 68, The Bronx',
  },
  {
    i: 1001,
    d: 'CORALIA “CORY” GALVEZ, 69, Manhattan',
    e: 'February 14, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Coralia_Galvez.jpg',
  },
  {
    i: 1002,
    d: 'RUTH ELAINE HAMMER, 69, Brooklyn',
    e: 'January 15, 2021',
  },
  {
    i: 1003,
    d: 'KOSTAV “GUS” STEFANOPOULOS, 69, Queens',
    e: 'January 9, 2021',
  },
  {
    i: 1004,
    d: 'HENRY ALLAN “KEITH” RIVERS, 69, Brooklyn',
    e: 'December 16, 2020',
  },
  {
    i: 1005,
    d: 'ALLEN Y. LEW, 69, Queens',
    e: 'June 23, 2020',
  },
  {
    i: 1006,
    d: 'JOSÉ JARAMILLO, 69, Queens',
    e: 'June 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Jaramillo.jpeg',
  },
  {
    i: 1007,
    d: 'DOMINICK J. BRANCATO, 69, Staten Island',
    e: 'May 21, 2020',
  },
  {
    i: 1008,
    d: 'JOHN PATRICK WHYTE, 69, Staten Island',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Whyte.jpg',
  },
  {
    i: 1009,
    d: 'JOEL S. GOLDBERG, 69, Staten Island',
    e: 'May 6, 2020',
  },
  {
    i: 1010,
    d: 'ERIC CHASANOFF, 69',
    e: 'May 5, 2020',
  },
  {
    i: 1011,
    d: 'CYNTHIA L. ADAMS, 69, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cynthia_L_Adams.jpeg',
  },
  {
    i: 1012,
    d: 'BIBI AYESHA, 69, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 1013,
    d: 'ROBERT JOSEPH CAVALLO, 69, Brooklyn',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Joseph_Cavello.jpeg',
  },
  {
    i: 1014,
    d: 'JUAN GONZALEZ-GARCIA, 69, Staten Island',
    e: 'April 26, 2020',
  },
  {
    i: 1015,
    d: 'MICHAEL CHARLES BYRNE, 69, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 1016,
    d: 'WINSTON STEPHEN SWAN, 69, The Bronx',
    e: 'April 24, 2020',
  },
  {
    i: 1017,
    d: 'THOMAS E. BELL, 69, The Bronx',
    e: 'April 22, 2020',
  },
  {
    i: 1018,
    d: 'GLADYS M. “NENA” SANCHEZ, 69, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 1019,
    d: 'PHILIP FOGLIA, 69, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 1020,
    d: 'SALVADOR CALDERON, 69, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 1021,
    d: 'CARMEN M. CALERO, 69, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Calero.jpeg',
  },
  {
    i: 1022,
    d: 'MARGARET BARRETO, 69, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1023,
    d: 'ARTURO MILLAN, 69, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 1024,
    d: 'JANET J. SMITH, 69, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1025,
    d: 'RAMON CARANDANG, 69, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1026,
    d: 'DR. JAY MARTIN GALST, 69, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Galst.jpg',
  },
  {
    i: 1027,
    d: 'ABBEY METZGER, 69, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1028,
    d: 'HARRICHAND PERSAUD, 69, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1029,
    d: 'MYLES COKER, 69, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1030,
    d: 'ANDREW “ANDY” GONZÁLEZ, 69, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 1031,
    d: 'CHARLES THORPE, 69, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Thorpe.jpg',
  },
  {
    i: 1032,
    d: 'IRIS NIEVES-MITCHELL, 69',
    e: 'April 6, 2020',
  },
  {
    i: 1033,
    d: 'ANTONIO DEL VALLE, 69, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1034,
    d: 'MARILU LOPEZ SANTIAGO, 69, Staten Island',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marilu_Santiago.jpg',
  },
  {
    i: 1035,
    d: 'KAMAL AHMED, 69, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 1036,
    d: 'MOSHE SHMIEL KLEIN, 69, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1037,
    d: 'BARRY PENN, 69',
    e: 'April 4, 2020',
  },
  {
    i: 1038,
    d: 'MECEO RAY MCEADDY, 69, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 1039,
    d: 'MICHAEL HANKINS, 69, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1040,
    d: 'PAULINE DELGADO, 69, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 1041,
    d: 'ALAN MERRILL, 69, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1042,
    d: 'MARK BLUM, 69, Manhattan',
    e: 'March 25, 2020',
  },
  {
    i: 1043,
    d: 'MERCEDES BURGOS, 69, Queens',
    e: 'March 18, 2020',
  },
  {
    i: 1044,
    d: 'CLAUDETTE BARR, 69, Staten Island',
  },
  {
    i: 1045,
    d: 'FRANCISCO CANARTE, 69, Queens',
  },
  {
    i: 1046,
    d: 'DEWAN AFJOL CHOWDHURY, 69',
  },
  {
    i: 1047,
    d: 'OLIVIA CRUM, 69, Queens',
  },
  {
    i: 1048,
    d: 'MOSHE MENDEL GLICK, 69, Brooklyn',
  },
  {
    i: 1049,
    d: 'RABBI MOSHE SHAUL HARFENES, 69, Brooklyn',
  },
  {
    i: 1050,
    d: 'OLSON HART, 69, The Bronx',
  },
  {
    i: 1051,
    d: 'BAMBANG HERMANTO, 69, Queens',
  },
  {
    i: 1052,
    d: 'PEARSON JORDAN, 69, Brooklyn',
  },
  {
    i: 1053,
    d: 'YITZHAK LEVY LEVYAWAMI, 69, Brooklyn',
  },
  {
    i: 1054,
    d: 'DOVID OLEWSKI, 69, Brooklyn',
  },
  {
    i: 1055,
    d: 'CESAR E. ORTIZ, 69, Staten Island',
  },
  {
    i: 1056,
    d: 'SHMIEL YITZCHOK RABI, 69, Brooklyn',
  },
  {
    i: 1057,
    d: 'ANDREA SEARS, 69, Brooklyn',
  },
  {
    i: 1058,
    d: 'YISROEL/YISRAEL SILBERSTEIN, 69, Brooklyn',
  },
  {
    i: 1059,
    d: 'JAMES LAWRENCE BUTTENWIESER, 70, Manhattan',
    e: 'March 17, 2021',
  },
  {
    i: 1060,
    d: 'ERNESTO “ERNIE” SANCHEZ, 70, Queens',
    e: 'March 6, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernesto_Sanchez.jpeg',
  },
  {
    i: 1061,
    d: 'KAREN C. FAULKNER, 70, Queens',
    e: 'December 16, 2020',
  },
  {
    i: 1062,
    d: 'DANIEL M. GARCIA, 70, The Bronx',
    e: 'June 4, 2020',
  },
  {
    i: 1063,
    d: 'LEIBEL LEDERMAN, 70',
    e: 'May 20, 2020',
  },
  {
    i: 1064,
    d: 'LUIS SANTOS, 70, Manhattan',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Luis_Santos.jpg',
  },
  {
    i: 1065,
    d: 'YONATAN BINYOMIN GOLDBERGER, 70, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    i: 1066,
    d: 'SAMUEL W. “SAM THE FENCE MAN” ARBEENY, 70, Staten Island',
    e: 'April 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Samuel_Arbeeny.png',
  },
  {
    i: 1067,
    d: 'CARLO NATHAN, 70, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1068,
    d: 'DR. YDELFONSO DECOO, 70, Manhattan',
    e: 'April 23, 2020',
  },
  {
    i: 1069,
    d: 'ELIYAHU MEIR BALLABON, 70, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1070,
    d: 'AHMED ALI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 1071,
    d: 'ALFREDO DOROJA “JUN” MESCALLADO JR., 70, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 1072,
    d: 'JOSEPH T. PELLETTERI, 70, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 1073,
    d: 'CARLOS “CANDALLO” ACEVEDO, 70, The Bronx',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carlos_Acevedo.png',
  },
  {
    i: 1074,
    d: 'PAUL JOSEPH “THE MAC ATTACK” MCELEARNEY, 70',
    e: 'April 15, 2020',
  },
  {
    i: 1075,
    d: 'VERONA FRASER, 70, Brooklyn',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Verona_Fraser.JPG',
  },
  {
    i: 1076,
    d: 'RAUL CAMBIAN, 70, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1077,
    d: 'PABLO GUSTAVO ROSAS, 70, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pablo_Rosas.jpeg',
  },
  {
    i: 1078,
    d: 'JOSEPH DANIEL VOLCY, 70, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Daniel_Volcy.jpeg',
  },
  {
    i: 1079,
    d: 'YOSEF BOKCHIN, 70, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1080,
    d: 'LIAQUAT MOHAMMED, 70, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Liaquat_Mohammed.png',
  },
  {
    i: 1081,
    d: 'CHARLES BERENGUER JR., 70, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1082,
    d: 'DR. TOMAS PATTUGALAN, 70, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 1083,
    d: 'ALEX KLEIN, 70',
    e: 'March 28, 2020',
  },
  {
    i: 1084,
    d: 'THOMAS “TOMMY” CARNEY, 70, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 1085,
    d: 'ERESMILDO CASTIBLANCO, 70, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1086,
    d: 'BEVERLY RUBOCK GRAY, 70, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Beverly_Gray.jpeg',
  },
  {
    i: 1087,
    d: 'FRANK P. LUMINI, 70, Staten Island',
    e: 'March 26, 2020',
  },
  {
    i: 1088,
    d: 'SHIRLEY ANN MILLER, 70, Manhattan',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Shirley_Ann_Miller.JPG',
  },
  {
    i: 1089,
    d: 'JUDY RICHHEIMER, 70, Manhattan',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judy_Richheimer.jpg',
  },
  {
    i: 1090,
    d: 'BETZALEL BERTRAM, 70, Brooklyn',
  },
  {
    i: 1091,
    d: 'RABBI WOLF (VOLF) BRAUN, 70, Brooklyn',
  },
  {
    i: 1092,
    d: 'RABBI MOSHE GREENWALD, 70, Brooklyn',
  },
  {
    i: 1093,
    d: 'REV. SIDNEY HARGRAVE, 70, The Bronx',
  },
  {
    i: 1094,
    d: 'RABBI DAVID JEMAL, 70, Brooklyn',
  },
  {
    i: 1095,
    d: 'SHAYA LETIMAN, 70, Brooklyn',
  },
  {
    i: 1096,
    d: 'SHIRLEY MILLER, 70',
  },
  {
    i: 1097,
    d: 'MANUEL MIZHQUIRI, 70, Queens',
  },
  {
    i: 1098,
    d: 'RABBI YISROEL MENACHEM ROSENBERG, 70, Brooklyn',
  },
  {
    i: 1099,
    d: 'ARLENE SIMON, 70',
  },
  {
    i: 1100,
    d: 'JOHN TURNER, 70, Staten Island',
  },
  {
    i: 1101,
    d: 'LORNA WILKINSON, 70, Queens',
  },
  {
    i: 1102,
    d: 'LEAH DOMBE, 71, Brooklyn',
    e: 'February 7, 2021',
  },
  {
    i: 1103,
    d: 'RUDY LAZAZZERA, 71, The Bronx',
    e: 'November 4, 2020',
  },
  {
    i: 1104,
    d: 'DAVID SACKOFF, 71, The Bronx',
    e: 'June 9, 2020',
  },
  {
    i: 1105,
    d: 'CHARLES KLEINBERG, 71, Brooklyn',
    e: 'May 22, 2020',
  },
  {
    i: 1106,
    d: 'RAFAEL LEONARD BLACK, 71, Brooklyn',
    e: 'May 15, 2020',
  },
  {
    i: 1107,
    d: 'RONALD VINCENT WAITE, 71, Staten Island',
    e: 'May 12, 2020',
  },
  {
    i: 1108,
    d: 'ROSE ZUBKO, 71, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    i: 1109,
    d: 'ELIZABETH LAMBERTY, 71, The Bronx',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_Lamberty.jpg',
  },
  {
    i: 1110,
    d: 'ANGELA ZEMAN, 71, Manhattan',
    e: 'April 30, 2020',
  },
  {
    i: 1111,
    d: 'MICHAEL A. COSTANZO, 71, Queens',
    e: 'April 29, 2020',
  },
  {
    i: 1112,
    d: 'NATHANIEL ROYALL JR., 71, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1113,
    d: 'MIGDALIA RODRIGUEZ, 71, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 1114,
    d: 'PIO COSTALES VELASCO, 71, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1115,
    d: 'LARRY DEVITO, 71, Brooklyn',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Larry_DeVito.JPG',
  },
  {
    i: 1116,
    d: 'JAY HYMAN, 71',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Hyman.jpg',
  },
  {
    i: 1117,
    d: 'GARY JAEGER, 71, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gary_Jaeger.jpg',
  },
  {
    i: 1118,
    d: 'VINCENT KELLEHER, 71, Staten Island',
    e: 'April 14, 2020',
  },
  {
    i: 1119,
    d: 'LORRAINE JOY BAGWELL, 71, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lorraine_Bagwell.JPG',
  },
  {
    i: 1120,
    d: 'MENACHEM NACHUM BRONSTEIN, 71, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1121,
    d: 'WILLIAM TROY, 71, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1122,
    d: 'MATEO RIVERA, 71, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 1123,
    d: 'MAHMOODA SHAHEEN, 71, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mahmooda_Shaheen.jpg',
  },
  {
    i: 1124,
    d: 'AUDREY ANNE HAYES, 71',
    e: 'April 7, 2020',
  },
  {
    i: 1125,
    d: 'MEHMOODA REHMAN, 71, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1126,
    d: 'HENRY ARTHUR JACKSON, 71, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1127,
    d: 'DESIREE MOORE, 71, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1128,
    d: 'HARVEY CHESTER FUCHS, 71',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harvey_Fuchs.jpg',
  },
  {
    i: 1129,
    d: 'ALEXANDRA SAKS, 71',
    e: 'April 3, 2020',
  },
  {
    i: 1130,
    d: 'CYNTHIA RICHARDSON HAYES, 71, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 1131,
    d: 'RABBI YAAKOV MORDECHAI WEINBERGER, 71, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 1132,
    d: 'MARTIN JOHN “DOUGIE” DOUGLAS, 71, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1133,
    d: 'SUSAN INGRAM, 71, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 1134,
    d: 'LEROY HAMMETT, 71, The Bronx',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Leroy_Hammett.jpeg',
  },
  {
    i: 1135,
    d: 'YVONNE FEDERICO, 71, Staten Island',
    e: 'March 29, 2020',
  },
  {
    i: 1136,
    d: 'CAROLYN FRAZIER, 71, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 1137,
    d: 'ANTONIO SOLOMON, 71, Queens',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Solomon.jpeg',
  },
  {
    i: 1138,
    d: 'MICHAEL DAVID SORKIN, 71, Manhattan',
    e: 'March 26, 2020',
  },
  {
    i: 1139,
    d: 'ROSEMARY “RORY” SISCO, 71, Queens',
    e: 'March 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Sisco.jpg',
  },
  {
    i: 1140,
    d: 'ELOY BENITEZ, 71, The Bronx',
  },
  {
    i: 1141,
    d: 'SHMUEL DEITEL, 71, Brooklyn',
  },
  {
    i: 1142,
    d: 'DOVID FARKASH, 71, Brooklyn',
  },
  {
    i: 1143,
    d: 'ZELIG GOTTLIEB, 71, Brooklyn',
  },
  {
    i: 1144,
    d: 'YVES LAFOND, 71, Queens',
  },
  {
    i: 1145,
    d: 'JOHN C. LEONARD, 71, The Bronx',
  },
  {
    i: 1146,
    d: 'FRANCESCO “FRANCO” LISI, 71',
  },
  {
    i: 1147,
    d: 'BOGDAN PALKA, 71, Brooklyn',
  },
  {
    i: 1148,
    d: 'JAMES PUYOL, 71, Brooklyn',
  },
  {
    i: 1149,
    d: 'MARK J. FITZPATRICK SR., 72, Staten Island',
    e: 'March 24, 2021',
  },
  {
    i: 1150,
    d: 'ROSARIO WRIGHT, 72, Queens',
    e: 'March 10, 2021',
  },
  {
    i: 1151,
    d: 'MALVINA KIZHNET, 72, Queens',
    e: 'February 11, 2021',
  },
  {
    i: 1152,
    d: 'CARMEN VAZQUEZ, 72, Brooklyn',
    e: 'January 27, 2021',
  },
  {
    i: 1153,
    d: 'GUILLERMO RIVERA, 72, The Bronx',
    e: 'January 22, 2021',
  },
  {
    i: 1154,
    d: 'OLGA MEMBRENO, 72, Queens',
    e: 'January 1, 2021',
  },
  {
    i: 1155,
    d: 'SUSAN BRODY, 72, Brooklyn',
    e: 'November 15, 2020',
  },
  {
    i: 1156,
    d: 'ANNETTA BANKS, 72, Queens',
    e: 'November 11, 2020',
  },
  {
    i: 1157,
    d: 'IAN FINKLE, 72, Brooklyn',
    e: 'October 16, 2020',
  },
  {
    i: 1158,
    d: 'DR. STEPHEN KAMHOLZ, 72, Brooklyn',
    e: 'June 11, 2020',
  },
  {
    i: 1159,
    d: 'ROBERTO S. TOBIAS SR., 72, Queens',
    e: 'May 30, 2020',
  },
  {
    i: 1160,
    d: 'DIANE M. SCHWAB, 72, Staten Island',
    e: 'May 8, 2020',
  },
  {
    i: 1161,
    d: 'BENJAMIN SMALLS, 72',
    e: 'May 7, 2020',
  },
  {
    i: 1162,
    d: 'RICHARD LITKOFSKY, 72, Brooklyn',
    e: 'May 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Richard_Litofsky.jpg',
  },
  {
    i: 1163,
    d: 'MARGARET ESSELBORN, 72, Staten Island',
    e: 'May 3, 2020',
  },
  {
    i: 1164,
    d: 'ELIYAHU CHAIM BRACH, 72, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1165,
    d: 'RABBI MOSHE ZAKLIKOFSKY, 72, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1166,
    d: 'LEON SANDY HODGE, 72, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1167,
    d: 'RABBI DON YOEL LEVY, 72, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1168,
    d: 'THELMA ESTEVEZ, 72, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1169,
    d: 'CARMEN PACHECO, 72',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Pacheco.JPG',
  },
  {
    i: 1170,
    d: 'NEMECIO MENDEZ, 72, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1171,
    d: 'EILEEN RUIZ, 72, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Eileen_Ruiz.jpg',
  },
  {
    i: 1172,
    d: 'ROBBY BROWNE, 72, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1173,
    d: 'ADAM KOVACS, 72, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1174,
    d: 'ESTELITA ATIENZA SOLOMON, 72, Queens',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Estelita_Solomon.jpeg',
  },
  {
    i: 1175,
    d: 'JOSEPH DONOFRIO, 72, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1176,
    d: 'DIANE L. RIEGGER, 72, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1177,
    d: 'RITA SCARSO, 72, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1178,
    d: 'JOAQUIN LEON, 72',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joaquin_Leon.jpeg',
  },
  {
    i: 1179,
    d: 'BEVERLY ARTZ, 72',
    e: 'April 7, 2020',
  },
  {
    i: 1180,
    d: 'MARY DILLARD-CARTER, 72, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1181,
    d: 'MICHAEL N. EDELMAN, 72, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1182,
    d: 'ELBA PABEY, 72, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1183,
    d: 'ELBA PABEY, 72, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1184,
    d: 'CONCEPCION ACOSTA, 72, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1185,
    d: 'GLORIA SMALL-JONES, 72, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1186,
    d: 'DOROTHY YUELLES, 72, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1187,
    d: 'RALPH PASTENA, 72, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1188,
    d: 'ROBERT CRAWFORD, 72, Manhattan',
    e: 'March 30, 2020',
  },
  {
    i: 1189,
    d: 'JOSEPH TRANCHINA, 72',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Tranchina.jpg',
  },
  {
    i: 1190,
    d: 'ALAN AARON FINDER, 72',
    e: 'March 24, 2020',
  },
  {
    i: 1191,
    d: 'JUDITH EVANGELINE BERNARD, 72, Queens',
  },
  {
    i: 1192,
    d: 'NORMAN BLOOMFIELD, 72, Brooklyn',
  },
  {
    i: 1193,
    d: 'JOHN CALDER, 72, Queens',
  },
  {
    i: 1194,
    d: 'REGINALD DOWDY, 72, Manhattan',
  },
  {
    i: 1195,
    d: 'ANN GRIER, 72',
  },
  {
    i: 1196,
    d: 'MESHILEM ISUR HERSHKO, 72, Brooklyn',
  },
  {
    i: 1197,
    d: 'YISROEL HOROWITZ, 72, Brooklyn',
  },
  {
    i: 1198,
    d: 'DR. LAWRENCE CARL KATZENSTEIN, 72',
  },
  {
    i: 1199,
    d: 'NOCHUM KLEIN, 72, Brooklyn',
  },
  {
    i: 1200,
    d: 'YENTA LAVY, 72, Brooklyn',
  },
  {
    i: 1201,
    d: 'LINDA ORTIZ, 72, Staten Island',
  },
  {
    i: 1202,
    d: 'GOLDIE THOMSON, 72, Brooklyn',
  },
  {
    i: 1203,
    d: 'JEAN BARBARA WEISMAN, 72, Brooklyn',
  },
  {
    i: 1204,
    d: 'AHARON WEISS, 72, Brooklyn',
  },
  {
    i: 1205,
    d: 'ANGELO OLIVERI, 73, Staten Island',
    e: 'March 11, 2021',
  },
  {
    i: 1206,
    d: 'JOHN LIEVANO, 73, Staten Island',
    e: 'February 24, 2021',
  },
  {
    i: 1207,
    d: 'YOUNG KWOK “CORKY” LEE, 73, Queens',
    e: 'January 27, 2021',
  },
  {
    i: 1208,
    d: 'JOSEPH MATERNA, 73, Staten Island',
    e: 'January 27, 2021',
  },
  {
    i: 1209,
    d: 'ANITA TERZIAN-TITUS, 73, Queens',
    e: 'January 20, 2021',
  },
  {
    i: 1210,
    d: 'MICHAEL WALLACE HERRON, 73',
    e: 'May 14, 2020',
  },
  {
    i: 1211,
    d: 'RONALD “RONNIE” MCKIE, 73, Brooklyn',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ronald_McKie.jpeg',
  },
  {
    i: 1212,
    d: 'RENEE DIAMOND, 73',
    e: 'May 11, 2020',
  },
  {
    i: 1213,
    d: 'HILLARY GREGG, 73, Queens',
    e: 'May 3, 2020',
  },
  {
    i: 1214,
    d: 'INDARJIT MARAJ, 73, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Indarjit_Maraj.jpg',
  },
  {
    i: 1215,
    d: 'GEORGIANNA GLOSE, 73, Brooklyn',
    e: 'April 28, 2020',
  },
  {
    i: 1216,
    d: 'LAURA TAYLOR HOWELL, 73, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 1217,
    d: 'ROSEMARY C. GUERRERO, 73, Queens',
    e: 'April 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Guerrero.jpeg',
  },
  {
    i: 1218,
    d: 'EMILIO SOSA, 73, The Bronx',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emilio_Sosa.jpg',
  },
  {
    i: 1219,
    d: 'MOSHE AUGENSTEIN, 73, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1220,
    d: 'ALAN SCHOENBERG, 73, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alan_Schoenberg.jpeg',
  },
  {
    i: 1221,
    d: 'CAROLE ANN HEWITT HAMILTON, 73',
    e: 'April 12, 2020',
  },
  {
    i: 1222,
    d: 'EDWARD MAZZA, 73, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 1223,
    d: 'JOE TORRES, 73, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 1224,
    d: 'ANTHONY C. DAZZO, 73, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_C_Dazzo.JPG',
  },
  {
    i: 1225,
    d: 'RICHARD J. GUASTELLA, 73, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1226,
    d: 'JOSE LUIS OTERO, 73, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 1227,
    d: 'STUART RICHARD COHEN, 73',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stuart_Richard_Cohen.jpg',
  },
  {
    i: 1228,
    d: 'STEVEN MARK EDWARDS, 73, Manhattan',
    e: 'April 8, 2020',
  },
  {
    i: 1229,
    d: 'LOLITA “LELY” TORRES, 73, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1230,
    d: 'FRANK STEARNS, 73, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1231,
    d: 'ARTHUR LACKER, 73',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Lacker.PNG',
  },
  {
    i: 1232,
    d: 'SHLOMO TZVI KONIG, 73, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1233,
    d: 'ALBERT “AL” PETROCELLI SR., 73, Staten Island',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Albert_Petrocelli.jpg',
  },
  {
    i: 1234,
    d: 'FELICIA CACERES, 73',
    e: 'April 1, 2020',
  },
  {
    i: 1235,
    d: 'MAXIMO UMAHAG, 73, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1236,
    d: 'DR. JAMES T. GOODRICH, 73',
    e: 'March 30, 2020',
  },
  {
    i: 1237,
    d: 'GEORGE R. MAIRA, 73, Staten Island',
    e: 'March 30, 2020',
  },
  {
    i: 1238,
    d: 'ALBA JULIANO, 73, Staten Island',
    e: 'March 25, 2020',
  },
  {
    i: 1239,
    d: 'ISMAEL CABRERA, 73, Queens',
    e: 'March 24, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ismael_Cabrera.jpg',
  },
  {
    i: 1240,
    d: 'ARNOLD FRANCIS OBEY, 73, Staten Island',
    e: 'March 22, 2020',
  },
  {
    i: 1241,
    d: 'ISABELLA ANN AXELROD, 73, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Isabella_Axelrod.jpg',
  },
  {
    i: 1242,
    d: 'YOSSI BORENSTEIN, 73, Brooklyn',
  },
  {
    i: 1243,
    d: 'LORRAINE CARLISLE, 73, The Bronx',
  },
  {
    i: 1244,
    d: 'RABBI BORUCH HERSH FEDER, 73, Brooklyn',
  },
  {
    i: 1245,
    d: 'TZVI DOV ITZKOWITZ, 73, Brooklyn',
  },
  {
    i: 1246,
    d: 'SALOMON A. LEGARDA SR., 73',
  },
  {
    i: 1247,
    d: 'FLORENCE LEVESQUE, 73, Manhattan',
  },
  {
    i: 1248,
    d: 'RABBI CHAIM MERTZ, 73, Brooklyn',
  },
  {
    i: 1249,
    d: 'KAITLYN L. PATTERSON, 73, The Bronx',
  },
  {
    i: 1250,
    d: 'YISRAEL ROCHLITZ, 73, Brooklyn',
  },
  {
    i: 1251,
    d: 'MALKA SCHMELTZER, 73, Brooklyn',
  },
  {
    i: 1252,
    d: 'GOLDA “GOLDIE” SHIFRIN, 73, Brooklyn',
  },
  {
    i: 1253,
    d: 'LUIS VILLARREAL, 73, Queens',
  },
  {
    i: 1254,
    d: 'DONATO JOSEPH CANNELLA, 74, Staten Island',
    e: 'March 4, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Donato_Joseph_Cannella.png',
  },
  {
    i: 1255,
    d: 'PEGGY WILTROUT, 74, Manhattan',
    e: 'February 25, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Peggy_Wiltrout.jpg',
  },
  {
    i: 1256,
    d: 'RAFAEL PICA, 74, Staten Island',
    e: 'February 23, 2021',
  },
  {
    i: 1257,
    d: 'JOEL REVZEN, 74',
    e: 'May 25, 2020',
  },
  {
    i: 1258,
    d: 'DAVID PEREZ, 74, The Bronx',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Perez2.jpg',
  },
  {
    i: 1259,
    d: 'CHRISTOS ARSENIS, 74, Queens',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Christos_Arsenis.png',
  },
  {
    i: 1260,
    d: 'GREGORY PENNY SR., 74, The Bronx',
    e: 'April 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gregory_Penny.jpg',
  },
  {
    i: 1261,
    d: 'FRANKLIN V. ORDOÑEZ, 74, The Bronx',
    e: 'April 28, 2020',
  },
  {
    i: 1262,
    d: 'ROBERT MALLER, 74, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1263,
    d: 'ROSEMARY GRILLO CLEMENTI, 74, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1264,
    d: 'EFRAIM DOVBER MAJESKI, 74, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1265,
    d: 'TEODORO MIRANDA, 74, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1266,
    d: 'JOSE BOLIVAR AREVALO, 74, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1267,
    d: 'FOOK SHEONG WONG, 74, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fook_Sheong_Wong.jpg',
  },
  {
    i: 1268,
    d: 'ARTHUR “ARTIE” NELSON, 74, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arthur_Nelson.jpeg',
  },
  {
    i: 1269,
    d: 'JOSEPH E. “JOE” JOYCE, 74, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 1270,
    d: 'CARMEN CRUZ, 74, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Cruz.jpg',
  },
  {
    i: 1271,
    d: 'LOUIS C. “MACGYVER” BARBATO JR., 74, Staten Island',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Barbato.jpg',
  },
  {
    i: 1272,
    d: 'ALBA MIRANDA, 74, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1273,
    d: 'IVONNE “SANDY” BENOIT, 74, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ivonne_Benoit.jpg',
  },
  {
    i: 1274,
    d: 'MARSHA KRAMER, 74, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1275,
    d: 'RODOLFO PEREZ “RUDY” ACEVEDO, 74, Queens',
    e: 'April 1, 2020',
  },
  {
    i: 1276,
    d: 'LOUISE FONTAO, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1277,
    d: 'JOHN “JACK” GREGORIE, 74, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1278,
    d: 'JERI ELLEN BILUS, 74, Manhattan',
    e: 'March 31, 2020',
  },
  {
    i: 1279,
    d: 'THEODORE “TED” MONETTE JR., 74',
    e: 'March 30, 2020',
  },
  {
    i: 1280,
    d: 'DAVID ALLEN WOLIN, 74',
    e: 'March 30, 2020',
  },
  {
    i: 1281,
    d: 'STUART BAKER, 74',
    e: 'March 29, 2020',
  },
  {
    i: 1282,
    d: 'FELIX ESCOTO, 74, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 1283,
    d: 'WILLIAM HELMREICH, 74',
    e: 'March 28, 2020',
  },
  {
    i: 1284,
    d: 'LUIS M. RICO, 74, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 1285,
    d: 'DAVID ERNST, 74',
  },
  {
    i: 1286,
    d: 'JOSE RODRIGUEZ MUÑOZ, 74, Brooklyn',
  },
  {
    i: 1287,
    d: 'BENIGNO “BENNY” PEREZ JR., 74, Queens',
  },
  {
    i: 1288,
    d: 'DR. BREDY PIERRE-LOUIS JR., 74',
  },
  {
    i: 1289,
    d: 'REMI “CHARLIE” BEAUSEJOUR, 75, Staten Island',
    e: 'April 8, 2021',
  },
  {
    i: 1290,
    d: 'MAE CHAKRABARTY, 75, Queens',
    e: 'December 21, 2020',
  },
  {
    i: 1291,
    d: 'JAMES C. THOMPSON, 75, Brooklyn',
    e: 'May 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_Thompson.jpg',
  },
  {
    i: 1292,
    d: 'JANINE SOLEIL, 75, Brooklyn',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Janine_Soleil.jpg',
  },
  {
    i: 1293,
    d: 'JAY GOLDSTEIN, 75, Manhattan',
    e: 'May 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jay_Goldstein.jpg',
  },
  {
    i: 1294,
    d: 'YOLANDA HUERTERO, 75, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 1295,
    d: 'THOMAS “TC” CRATER JR., 75, Queens',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Crater.png',
  },
  {
    i: 1296,
    d: 'DALE RICHARD PON, 75, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dale_Richard_Pon.jpg',
  },
  {
    i: 1297,
    d: 'FAREEDA ANN KADWANI, 75, The Bronx',
    e: 'April 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Fareeda_Ann_Kadwani.jpg',
  },
  {
    i: 1298,
    d: 'MARY SUE ZIMMERMAN IUCOPILLA, 75, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1299,
    d: 'LUIS RUIZ, 75, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 1300,
    d: 'FRANK TAORMINA, 75, Staten Island',
    e: 'April 24, 2020',
  },
  {
    i: 1301,
    d: 'YITZ “ADAM” FRIEDMAN, 75, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 1302,
    d: 'MOSHE STAMM, 75, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1303,
    d: 'ALFRED ANTHONY BAFUMI, 75, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1304,
    d: 'EDWARD LABOY, 75',
    e: 'April 14, 2020',
  },
  {
    i: 1305,
    d: 'ALICEN MCKEON, 75, Staten Island',
    e: 'April 13, 2020',
  },
  {
    i: 1306,
    d: 'MAVIS HAYWOOD, 75, Brooklyn',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mavis_Haywood.png',
  },
  {
    i: 1307,
    d: 'ESTHER STERN, 75, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1308,
    d: 'JUDITH L. COULSTON, 75, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1309,
    d: 'CHAYA MOTCHKIN, 75, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1310,
    d: 'CARMEN MANTO, 75, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1311,
    d: 'ARMAND D’AVIGNON, 75, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 1312,
    d: 'ROSELIO ANTONIA TAPIA, 75, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1313,
    d: 'GEORGE E. STONEY, 75',
    e: 'April 1, 2020',
  },
  {
    i: 1314,
    d: 'STEVE STEINER, 75, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1315,
    d: 'MARCO ANIBAL GORDILLO ULLOA, 75, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1316,
    d: 'ANA ISABEL HENAO, 75, Queens',
  },
  {
    i: 1317,
    d: 'ABIGIAL HERNANDEZ, 75, Brooklyn',
  },
  {
    i: 1318,
    d: 'RABBI SHLOMO TZVI KOENIG, 75, Brooklyn',
  },
  {
    i: 1319,
    d: 'CARLOS ORTIZ, 75, Brooklyn',
  },
  {
    i: 1320,
    d: 'DR. AZIZUR RAHMAN, 75, Manhattan',
  },
  {
    i: 1321,
    d: 'MEYER SCHEINBERG, 75, Brooklyn',
  },
  {
    i: 1322,
    d: 'RUCHEL GITEL SCHWARTZ, 75, Brooklyn',
  },
  {
    i: 1323,
    d: 'ALFRED COLOMBAN, 76, Manhattan',
    e: 'December 3, 2020',
  },
  {
    i: 1324,
    d: 'LORENA “LORI” MCDONALD, 76',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lori_McDonald.jpg',
  },
  {
    i: 1325,
    d: 'GUY A. LAVIGNERA, 76, Staten Island',
    e: 'May 5, 2020',
  },
  {
    i: 1326,
    d: 'RABBI CHAIM MOSHE STAUBER, 76, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    i: 1327,
    d: 'RICHARD “RICHIE” COMMESSO, 76, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 1328,
    d: 'BETTY GIBBS, 76, Brooklyn',
    e: 'April 27, 2020',
  },
  {
    i: 1329,
    d: 'MADELINE KRIPKE, 76, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 1330,
    d: 'DR. KENNETH LEWES, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1331,
    d: 'GORDON M. PRADL, 76, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1332,
    d: 'CARLOS ARTURO QUINTERO, 76, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 1333,
    d: 'LESTER JAMES, 76',
    e: 'April 16, 2020',
  },
  {
    i: 1334,
    d: 'VINCENT MESA, 76',
    e: 'April 15, 2020',
  },
  {
    i: 1335,
    d: 'PEDRO FLORES, 76, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Flores.jpeg',
  },
  {
    i: 1336,
    d: 'KELLY P. SMITH, 76',
    e: 'April 14, 2020',
  },
  {
    i: 1337,
    d: 'NIDIA OVALLE, 76, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1338,
    d: 'RUTH MAZYCK “DEACON CORBETT” CORBETT, 76, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ruth_Corbett.jpeg',
  },
  {
    i: 1339,
    d: 'EMMA LUQUIS, 76, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1340,
    d: 'JOEL LAWRENCE SHATZKY, 76, Brooklyn',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joel_Shatzky.jpg',
  },
  {
    i: 1341,
    d: 'GLADYS DIAZ, 76, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1342,
    d: 'DOROTHY BRUNETTI, 76, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1343,
    d: 'RICHARD J. STURGES, 76, Staten Island',
    e: 'April 2, 2020',
  },
  {
    i: 1344,
    d: 'MARYANN BAKER, 76, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 1345,
    d: 'PIETRO SCARSO, 76, Staten Island',
    e: 'March 31, 2020',
  },
  {
    i: 1346,
    d: 'SALVATORE “SAL” CAMPO, 76, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 1347,
    d: 'ANTHONY PETER BONELLI, 76, The Bronx',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Bonelli.JPG',
  },
  {
    i: 1348,
    d: 'JUDITH LOWIN, 76, The Bronx',
    e: 'March 21, 2020',
  },
  {
    i: 1349,
    d: 'MOHAMMAD IBRAHIM, 76, Brooklyn',
  },
  {
    i: 1350,
    d: 'EUGENIO REYES, 76, The Bronx',
  },
  {
    i: 1351,
    d: 'PRIMO REYES ROSALES, 76',
  },
  {
    i: 1352,
    d: 'J. EDWARD “ED” SHAW, 76',
  },
  {
    i: 1353,
    d: 'WILLIE WOOD, 76, The Bronx',
  },
  {
    i: 1354,
    d: 'THOMAS OWEN REILLY, 77, Staten Island',
    e: 'February 7, 2021',
  },
  {
    i: 1355,
    d: 'MARIA MELENDEZ, 77, The Bronx',
    e: 'February 4, 2021',
  },
  {
    i: 1356,
    d: 'ELLEN M. SINGLER, 77',
    e: 'January 31, 2021',
  },
  {
    i: 1357,
    d: 'THOMAS VERDILLO, 77, Brooklyn',
    e: 'December 27, 2020',
  },
  {
    i: 1358,
    d: 'MARC ZIMETBAUM, 77, Staten Island',
    e: 'December 20, 2020',
  },
  {
    i: 1359,
    d: 'JOHN CROWE, 77, The Bronx',
    e: 'December 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Crowe.jpg',
  },
  {
    i: 1360,
    d: 'MANOLIN RIVERA, 77, Queens',
    e: 'October 2, 2020',
  },
  {
    i: 1361,
    d: 'BETTY M. MCDONALD, 77, Queens',
    e: 'September 8, 2020',
  },
  {
    i: 1362,
    d: 'ALBERTO ROTTURA, 77, Manhattan',
    e: 'May 25, 2020',
  },
  {
    i: 1363,
    d: 'MICHAEL ANGEL BONANO, 77, Manhattan',
    e: 'May 6, 2020',
  },
  {
    i: 1364,
    d: 'MARIA FABBRICINI, 77, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1365,
    d: 'RITA D. MCLAUGHLIN SARLO, 77',
    e: 'April 25, 2020',
  },
  {
    i: 1366,
    d: 'MORDECHAI R. MARCUS, 77, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1367,
    d: 'BRILLA GARCES “TITA BRILLA” JARLDANE, 77, Brooklyn',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Brilla_Jarldane.jpg',
  },
  {
    i: 1368,
    d: 'EMELDA RODRIGUEZ, 77, Manhattan',
    e: 'April 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emelda_Rodriguez.jpg',
  },
  {
    i: 1369,
    d: 'CHRISTINA “TINA” DANIELO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Christina_Danielo.jpg',
  },
  {
    i: 1370,
    d: 'BLANCA CASTAÑO MERO, 77, Queens',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Blanca_Mero.jpg',
  },
  {
    i: 1371,
    d: 'ILLUYSHA AMINOV, 77, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Illuysha_Aminov.jpg',
  },
  {
    i: 1372,
    d: 'SOOKRAJ SOOKCHAN, 77, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1373,
    d: 'EDITH ROBINSON, 77, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1374,
    d: 'JORGE ERASMO ZAMBRANO ESPINOSA, 77, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 1375,
    d: 'MICHAEL J. CUMMINS, 77, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1376,
    d: 'STANLEY I. CHERA, 77, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1377,
    d: 'NATHANIEL “SONNY” JOHNSON, 77, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1378,
    d: 'JOSE MANUEL LUGO CASTRO, 77, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Manuel_Lugo_Castro.png',
  },
  {
    i: 1379,
    d: 'TREVOR HUGH CAMERON, 77, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1380,
    d: 'DAVID HOROWITZ, 77',
    e: 'April 6, 2020',
  },
  {
    i: 1381,
    d: 'WILLAMAE WILSON-MORRIS, 77, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1382,
    d: 'PHYLLIS ANNE THOMPSON, 77, Manhattan',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Thompson.JPG',
  },
  {
    i: 1383,
    d: 'DERYCK WILLIAMS, 77',
    e: 'April 5, 2020',
  },
  {
    i: 1384,
    d: 'WILBERT RAY “SCOTTIE” BURKETT, 77, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 1385,
    d: 'IRIS CRUZ, 77, Brooklyn',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Iris_Cruz.jpg',
  },
  {
    i: 1386,
    d: 'FOTIOS ANGELOPOULOS, 77, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1387,
    d: 'RABBI DOVID DON REISS, 77, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1388,
    d: 'JASON FUCHS, 77, The Bronx',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jason_Fuchs.jpg',
  },
  {
    i: 1389,
    d: 'YISROEL YECHEZKIEL PUTCHOK, 77, Brooklyn',
    e: 'March 26, 2020',
  },
  {
    i: 1390,
    d: 'AVROHOM YAAKOV FRIEDMAN, 77, Brooklyn',
  },
  {
    i: 1391,
    d: 'KHALID LABDUL AHAD, 77',
  },
  {
    i: 1392,
    d: 'OWEN LORD, 77, Brooklyn',
  },
  {
    i: 1393,
    d: 'DOVID BER SCHWARTZ, 77, Brooklyn',
  },
  {
    i: 1394,
    d: 'SUSAN H. SILVERMAN, 78, Manhattan',
    e: 'April 24, 2021',
  },
  {
    i: 1395,
    d: 'JOSEPH ANTHONY SZALKIEWICZ, 78, Staten Island',
    e: 'March 8, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Anthony_Szalkiewicz.jpeg',
  },
  {
    i: 1396,
    d: 'NOEL CARTER, 78, Queens',
    e: 'February 9, 2021',
  },
  {
    i: 1397,
    d: 'MARY S. FOULKS, 78, Brooklyn',
    e: 'December 26, 2020',
  },
  {
    i: 1398,
    d: "EILEEN O'SHEA CUMMINGS, 78, Staten Island",
    e: 'July 5, 2020',
  },
  {
    i: 1399,
    d: 'RAMESHCHANDRA JIVABHAI PATEL, 78, Queens',
    e: 'June 6, 2020',
  },
  {
    i: 1400,
    d: 'EULALIA COLON, 78, The Bronx',
    e: 'June 3, 2020',
  },
  {
    i: 1401,
    d: 'LINDA HANSEN, 78, Staten Island',
    e: 'May 15, 2020',
  },
  {
    i: 1402,
    d: 'DAVID JOSEPH BERNSTEIN, 78, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 1403,
    d: 'EDUARDO BUSTAMANTE, 78, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 1404,
    d: 'RAYMOND “RAY” HOOBLER, 78',
    e: 'April 29, 2020',
  },
  {
    i: 1405,
    d: 'GEORGE EDELSTEIN, 78, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1406,
    d: 'ARNOLD CHERRY, 78, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1407,
    d: 'SALLIE L. HILL, 78, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 1408,
    d: 'MARIO CÉSAR ROMERO, 78, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1409,
    d: 'RICHARD CURRIE, 78, Staten Island',
    e: 'April 16, 2020',
  },
  {
    i: 1410,
    d: 'VIRGINIA JACKSON, 78, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 1411,
    d: 'EDWIN SHOSTAK, 78, Manhattan',
    e: 'April 8, 2020',
  },
  {
    i: 1412,
    d: 'CATHERINE FONT, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1413,
    d: 'LAURELINA ORTIZ, 78, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1414,
    d: 'LINDA SILBERMAN, 78',
    e: 'April 7, 2020',
  },
  {
    i: 1415,
    d: 'MARGARETTA H. “MARGO” LUNDELL, 78, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1416,
    d: 'ZORIDA WHAID KHAN, 78, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1417,
    d: 'ANN CHEEVERS KOLB, 78, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1418,
    d: 'LEVI FAULK, 78, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1419,
    d: 'JANE ROSENTHAL, 78, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1420,
    d: 'JEAN ANDERSON, 78, The Bronx',
    e: 'March 31, 2020',
  },
  {
    i: 1421,
    d: 'MANUEL RODRIGUEZ QUINTERO, 78, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1422,
    d: 'STEPHEN A. COOPER, 78, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 1423,
    d: 'DR. WILLIAM TULIO DIVALE, 78, Queens',
  },
  {
    i: 1424,
    d: 'ADALILA M. ENGSONG, 78',
  },
  {
    i: 1425,
    d: 'ANAMARIA GARCIA, 78, Manhattan',
  },
  {
    i: 1426,
    d: 'ADEM HOT, 78, Queens',
  },
  {
    i: 1427,
    d: 'BOB KROTIN, 78, Brooklyn',
  },
  {
    i: 1428,
    d: 'MARGARET LAMBERT, 78, Manhattan',
  },
  {
    i: 1429,
    d: 'VINCENT MEAD, 78, The Bronx',
  },
  {
    i: 1430,
    d: 'EUNICE ODEN, 78, Brooklyn',
  },
  {
    i: 1431,
    d: 'AHARON ROKEACH, 78, Brooklyn',
  },
  {
    i: 1432,
    d: 'MEIR ROKEACH, 78, Brooklyn',
  },
  {
    i: 1433,
    d: 'ABRAHAM “AVI” SHARONI, 78, Staten Island',
  },
  {
    i: 1434,
    d: 'SAFRA SPILMAN, 78, Brooklyn',
  },
  {
    i: 1435,
    d: 'SANTA TORAL, 78, Brooklyn',
  },
  {
    i: 1436,
    d: 'JOYCE YVONNE ROBERTS, 79, Staten Island',
    e: 'February 12, 2021',
  },
  {
    i: 1437,
    d: 'MARY ANNE DELONG, 79, Queens',
    e: 'February 10, 2021',
  },
  {
    i: 1438,
    d: 'ANTHONY D. ROTUNNO, 79, Brooklyn',
    e: 'January 21, 2021',
  },
  {
    i: 1439,
    d: 'OLGA M. ZAYAS, 79, The Bronx',
    e: 'January 5, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Olga_M_Zayas.jpeg',
  },
  {
    i: 1440,
    d: 'JAMES J. “JIM” SMITH, 79, Staten Island',
    e: 'June 28, 2020',
  },
  {
    i: 1441,
    d: 'JOSE A. GUZMAN, 79, The Bronx',
    e: 'May 22, 2020',
  },
  {
    i: 1442,
    d: 'PURIM ISAKOV, 79, Brooklyn',
    e: 'May 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Purim_Isakov.jpg',
  },
  {
    i: 1443,
    d: 'BEATRICE “BEA” GRANBERG, 79, Staten Island',
    e: 'May 9, 2020',
  },
  {
    i: 1444,
    d: 'RUBY LAIWAN CHANG, 79, Manhattan',
    e: 'May 7, 2020',
  },
  {
    i: 1445,
    d: 'EDWARD HENRY, 79, Brooklyn',
    e: 'May 5, 2020',
  },
  {
    i: 1446,
    d: 'MICHAEL ARMSTRONG, 79, Brooklyn',
    e: 'May 4, 2020',
  },
  {
    i: 1447,
    d: 'HARRIET SIMONE MAIO, 79, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1448,
    d: 'CAROL CERABONE, 79, Manhattan',
    e: 'April 27, 2020',
  },
  {
    i: 1449,
    d: 'ADA FICARRA, 79',
    e: 'April 26, 2020',
  },
  {
    i: 1450,
    d: 'JULIO PIÑA, 79',
    e: 'April 25, 2020',
  },
  {
    i: 1451,
    d: 'ROSA SANCHEZ, 79, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1452,
    d: 'ELIZABETH “BETTY” MCCOLLUM, 79, Manhattan',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elizabeth_McCollum.jpeg',
  },
  {
    i: 1453,
    d: 'SUSAN BERMAN-LEVINE, 79',
    e: 'April 20, 2020',
  },
  {
    i: 1454,
    d: 'ARYEH “TATTY” NORENSBERG, 79, Brooklyn',
    e: 'April 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Aryeh_Norensberg.jpeg',
  },
  {
    i: 1455,
    d: 'GAETANO BARBIERI, 79, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 1456,
    d: 'RAFAEL NEGRON, 79, Brooklyn',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rafael_Negron.jpg',
  },
  {
    i: 1457,
    d: 'ROLANDO CHIRINOS, 79, Staten Island',
    e: 'April 17, 2020',
  },
  {
    i: 1458,
    d: 'EDWARD J. “ED” ANTONIO II, 79, Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edward_Antonio.jpg',
  },
  {
    i: 1459,
    d: 'NELSON MANUEL FRANKY, 79, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1460,
    d: 'RUTH M. WERRA, 79, Staten Island',
    e: 'April 11, 2020',
  },
  {
    i: 1461,
    d: 'ANNA SPARACINO, 79, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 1462,
    d: 'ALBA PEREA, 79, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1463,
    d: 'GLADYS E. CASTILLO, 79, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1464,
    d: 'CARMEN SILVA, 79, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Silva.jpg',
  },
  {
    i: 1465,
    d: 'DR. GUIDO VOLCOVICI, 79',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Guido_Volcovici.jpg',
  },
  {
    i: 1466,
    d: 'EDDY DAVIS, 79, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1467,
    d: 'EDDY DAVIS, 79, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1468,
    d: 'CELESTER BEASELY, 79, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1469,
    d: 'MARIANNE “PEACHY” HERLIHY, 79, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1470,
    d: 'JUN MAEDA, 79, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1471,
    d: 'ADA MAE VOID RIVERS, 79, The Bronx',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ada_Rivers.jpg',
  },
  {
    i: 1472,
    d: 'HELEN FORTE, 79, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1473,
    d: 'WALLACE VANPELT, 79, Staten Island',
    e: 'April 4, 2020',
  },
  {
    i: 1474,
    d: 'SOLOMON GREEN, 79, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 1475,
    d: 'GARY BARTUCCELLI, 79, Staten Island',
    e: 'March 31, 2020',
  },
  {
    i: 1476,
    d: 'BAO DUONG, 79',
    e: 'March 30, 2020',
  },
  {
    i: 1477,
    d: 'LEONARD D. IMPERIO, 79, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 1478,
    d: 'TUFAN BENER, 79, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1479,
    d: 'LOUIS ARLEO, 79, Queens',
  },
  {
    i: 1480,
    d: 'ESTHER HAAS/ HASS, 79, Brooklyn',
  },
  {
    i: 1481,
    d: 'LOIS SASSON, 80, Manhattan',
    e: 'December 30, 2021',
  },
  {
    i: 1482,
    d: 'ELLEN RAAB BIENSTOCK, 80, Manhattan',
    e: 'March 19, 2021',
  },
  {
    i: 1483,
    d: 'OLIVER G. “CADABA” CLARKE, 80, Brooklyn',
    e: 'February 19, 2021',
  },
  {
    i: 1484,
    d: 'RABBI STEPHEN C. LERNER, 80',
    e: 'January 27, 2021',
  },
  {
    i: 1485,
    d: 'PATRICIA G. HORAN, 80, Manhattan',
    e: 'December 30, 2020',
  },
  {
    i: 1486,
    d: 'GAIL SALLUSTRO, 80',
    e: 'December 13, 2020',
  },
  {
    i: 1487,
    d: 'GERARD ANDERSON KIRBY DUVILLIER, 80, Staten Island',
    e: 'June 25, 2020',
  },
  {
    i: 1488,
    d: 'NATHAN KOLODNEY, 80',
    e: 'May 24, 2020',
  },
  {
    i: 1489,
    d: 'WILLIAM FRANK “WILLIE” FELONG, 80, Staten Island',
    e: 'May 18, 2020',
  },
  {
    i: 1490,
    d: 'JOHN WALTER, 80, Queens',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Walter.jpg',
  },
  {
    i: 1491,
    d: 'MARK DANIEL GABOR, 80, Manhattan',
    e: 'May 9, 2020',
  },
  {
    i: 1492,
    d: 'CLARENCE JESSIE “SONNY” SPANN, 80, Brooklyn',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clarence_Spann.jpg',
  },
  {
    i: 1493,
    d: 'ELADIO LUCERO, 80',
    e: 'April 25, 2020',
  },
  {
    i: 1494,
    d: 'ESTEBAN MATOS, 80, Brooklyn',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Esteban_Matos.jpeg',
  },
  {
    i: 1495,
    d: 'OLGA ANCHUNDIA, 80, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 1496,
    d: 'ALEX LAYNE, 80, Manhattan',
    e: 'April 20, 2020',
  },
  {
    i: 1497,
    d: 'RABBI YEHUDA MICHOEL MEISELS, 80, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1498,
    d: 'SHOLEM ROSENBLUM, 80, Brooklyn',
    e: 'April 20, 2020',
  },
  {
    i: 1499,
    d: 'PATRICIA MCGOWAN, 80, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 1500,
    d: 'ROSEMARY SELL, 80',
    e: 'April 17, 2020',
  },
  {
    i: 1501,
    d: 'KATIA MARIA CAPELLAN, 80, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1502,
    d: 'CAROLE OCERA, 80, Staten Island',
    e: 'April 13, 2020',
  },
  {
    i: 1503,
    d: 'SHIRLEY CAMPBELL, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 1504,
    d: 'ALLEN L. HIRSCHMAN, 80, Manhattan',
    e: 'April 12, 2020',
  },
  {
    i: 1505,
    d: 'JOHN “YASHO” DEARDEN, 80, Brooklyn',
    e: 'April 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dearden.jpg',
  },
  {
    i: 1506,
    d: 'PHILIP RABIN, 80, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1507,
    d: 'AURELIO CASILLA, 80, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1508,
    d: 'HAROLD JOHN SOLOMON JR., 80, Staten Island',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Solomon.png',
  },
  {
    i: 1509,
    d: 'CAROLYN ANNA BENFANTE, 80, Staten Island',
    e: 'April 8, 2020',
  },
  {
    i: 1510,
    d: 'DNYNIA ARMSTRONG, 80, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1511,
    d: 'BIBI MAIMOON NEISHA KHAN, 80',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/BibiMaimoonNeisha_Khan.jpg',
  },
  {
    i: 1512,
    d: 'KATHLEEN ELIZABETH MCNULTY, 80, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1513,
    d: 'THAD H. PAIGE, 80, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 1514,
    d: 'ARTHUR FORTE, 80, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1515,
    d: "RONALD O'LOUGHLIN, 80, Brooklyn",
    e: 'March 31, 2020',
    h: "https://projects.thecity.nyc/covid-19-deaths-img/Ronald_O'Loughlin.png",
  },
  {
    i: 1516,
    d: 'BEIRISH BERGER, 80, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1517,
    d: 'MYRTLE POLLARD, 80, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1518,
    d: 'NELSON E. CUEVAS, 80, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1519,
    d: 'BARBARA J. HARKLESS, 80, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 1520,
    d: 'RAMON ALVARADO, 80, Manhattan',
  },
  {
    i: 1521,
    d: 'RAFAEL YITZCHOK ARANOFF, 80, Brooklyn',
  },
  {
    i: 1522,
    d: 'RAMONA DE LA HOZ, 80, The Bronx',
  },
  {
    i: 1523,
    d: 'FRANK GIAMBRONE, 80',
  },
  {
    i: 1524,
    d: 'DR. DONALD B. “DON” HOFFMAN, 80, The Bronx',
  },
  {
    i: 1525,
    d: 'DR. ABDUL MANNAN, 80',
  },
  {
    i: 1526,
    d: 'MYRIAM PEREZ, 80, Brooklyn',
  },
  {
    i: 1527,
    d: 'DR., REV. ANNIE L BAILEY, 81, Queens',
    e: 'March 24, 2021',
  },
  {
    i: 1528,
    d: 'WALTRAUD “VAL” REILLY, 81, Staten Island',
    e: 'March 10, 2021',
  },
  {
    i: 1529,
    d: 'THERON OSCAR WORTH, 81, Manhattan',
    e: 'January 19, 2021',
  },
  {
    i: 1530,
    d: 'THERON OSCAR WORTH JR., 81, Manhattan',
    e: 'January 19, 2021',
  },
  {
    i: 1531,
    d: 'ERIC JACOB BOWEN, 81, Queens',
    e: 'January 18, 2021',
  },
  {
    i: 1532,
    d: 'ROBERT JOHNSON, 81, Manhattan',
    e: 'June 14, 2020',
  },
  {
    i: 1533,
    d: 'JOAN S. RAINES, 81, Manhattan',
    e: 'May 17, 2020',
  },
  {
    i: 1534,
    d: 'SOFIA NEREIDA VARGAS COLLAZO, 81, The Bronx',
    e: 'May 11, 2020',
  },
  {
    i: 1535,
    d: 'OK J. CHOI, 81, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ok_Choi.jpeg',
  },
  {
    i: 1536,
    d: 'ROCHEL LEAH NEIMAN, 81, Brooklyn',
    e: 'May 2, 2020',
  },
  {
    i: 1537,
    d: 'ANTONIA REYNOSO, 81',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonia_Reynoso.jpeg',
  },
  {
    i: 1538,
    d: 'COURTNEY WARREN, 81, Brooklyn',
    e: 'April 15, 2020',
  },
  {
    i: 1539,
    d: 'EVELYN HARRIS, 81, Queens',
    e: 'April 14, 2020',
  },
  {
    i: 1540,
    d: 'PETROS “PETER” MICHAELS, 81, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1541,
    d: 'FANNY GELPIERYN, 81, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 1542,
    d: 'JOHN ANDERSON “JACK; QUIS” QUISENBERRY, 81, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1543,
    d: 'JOSEPH F. KELLY JR., 81, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1544,
    d: 'JOSEPH MIGLIUCCI, 81, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1545,
    d: 'MARIA SALAMAN, 81, The Bronx',
    e: 'April 1, 2020',
  },
  {
    i: 1546,
    d: 'PATRICIA BAKER, 81, Brooklyn',
  },
  {
    i: 1547,
    d: 'RABBI ASHER HEBER, 81, Brooklyn',
  },
  {
    i: 1548,
    d: 'RABBI SOLOMON “SHLOMO ELAZAR” WULLIGER, 81, Brooklyn',
  },
  {
    i: 1549,
    d: 'REV. LYNETTE WOODLAND LOVE, 82, Queens',
    e: 'June 2, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lynette_Woodland_Love.png',
  },
  {
    i: 1550,
    d: 'ROBERT TERRENCE STUCHBURY, 82, Brooklyn',
    e: 'March 22, 2021',
  },
  {
    i: 1551,
    d: 'PAUL A. BIENSTOCK, 82, Manhattan',
    e: 'March 6, 2021',
  },
  {
    i: 1552,
    d: 'JEFFREY PALEY, 82, Manhattan',
    e: 'February 27, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jeffrey_Paley.jpg',
  },
  {
    i: 1553,
    d: 'ROBERT LESLIE “BOB” AGNES, 82, Manhattan',
    e: 'January 9, 2021',
  },
  {
    i: 1554,
    d: 'DR. MADU RAO, 82',
    e: 'December 29, 2020',
  },
  {
    i: 1555,
    d: 'PIK CHI CHAN, 82, Queens',
    e: 'June 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pik_Chi_Chan.jpg',
  },
  {
    i: 1556,
    d: 'BARUCH HAVIV, 82',
    e: 'May 27, 2020',
  },
  {
    i: 1557,
    d: 'REV. HARRY DEAN BIGBY, 82, Manhattan',
    e: 'May 26, 2020',
  },
  {
    i: 1558,
    d: 'MIGUEL GELPI, 82, Manhattan',
    e: 'May 25, 2020',
  },
  {
    i: 1559,
    d: 'WILFRED HAYWOOD, 82, Brooklyn',
    e: 'May 25, 2020',
  },
  {
    i: 1560,
    d: 'JESUS BIENVENIDO SOSA ESTRADA, 82, Queens',
    e: 'May 23, 2020',
  },
  {
    i: 1561,
    d: 'ANA ORTIZ, 82, The Bronx',
    e: 'May 19, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ana_Ortiz.jpeg',
  },
  {
    i: 1562,
    d: 'ANTONIO PEPENELLA, 82, The Bronx',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Antonio_Pepenella.jpg',
  },
  {
    i: 1563,
    d: 'MICHAEL HALKIAS, 82, Brooklyn',
    e: 'May 6, 2020',
  },
  {
    i: 1564,
    d: 'ARNIM KIWI, 82, Queens',
    e: 'May 5, 2020',
  },
  {
    i: 1565,
    d: 'MICHAEL ELGIN, 82, Manhattan',
    e: 'April 30, 2020',
  },
  {
    i: 1566,
    d: 'ANNIE RUTH JOHNSON, 82, Manhattan',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Annie_Ruth_Johnson.jpg',
  },
  {
    i: 1567,
    d: 'ELSIE LOPEZ ESCOBAR, 82, Brooklyn',
    e: 'April 21, 2020',
  },
  {
    i: 1568,
    d: 'JAIME ASENCIO, 82, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 1569,
    d: 'JOSEPH “JOE” ALOE, 82, Manhattan',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joe_Aloe.jpeg',
  },
  {
    i: 1570,
    d: 'JULES G. VALESTIN, 82, Brooklyn',
    e: 'April 14, 2020',
  },
  {
    i: 1571,
    d: 'NATALIYA RUDNICHENKO, 82, Staten Island',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Nataliya_Rudnichenko.jpg',
  },
  {
    i: 1572,
    d: 'LUZ MARIA AROCHO MALDONADO, 82',
    e: 'April 11, 2020',
  },
  {
    i: 1573,
    d: 'WINSTON SILVERA, 82, The Bronx',
    e: 'April 11, 2020',
  },
  {
    i: 1574,
    d: 'JOSEPH C. “JOE” HENNESSY, 82, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 1575,
    d: 'LUCIEN GEORGE SR., 82',
    e: 'April 5, 2020',
  },
  {
    i: 1576,
    d: 'SEBASTIAN FRANCIS PEPI, 82',
    e: 'April 5, 2020',
  },
  {
    i: 1577,
    d: 'IVAN NO MIDDLE NAME SANTANA, 82, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1578,
    d: 'ALBERT KNICKERBOCKER “NICK” WEBSTER, 82, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1579,
    d: 'MIRIAM HOMNICK, 82, Brooklyn',
    e: 'March 29, 2020',
  },
  {
    i: 1580,
    d: 'ENRIQUE RIVERA RIVERA, 82, The Bronx',
    e: 'March 29, 2020',
  },
  {
    i: 1581,
    d: 'LUCIUS EWAN, 82, The Bronx',
    e: 'March 25, 2020',
  },
  {
    i: 1582,
    d: 'ERNEST “ERNIE” MORENCY, 82, Brooklyn',
    e: 'March 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ernest_Morency.jpg',
  },
  {
    i: 1583,
    d: 'ELSA GOMEZ, 82, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elsa_Gomez.jpg',
  },
  {
    i: 1584,
    d: 'TOBIAS NOBOA, 82, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Tobias_Noboa.png',
  },
  {
    i: 1585,
    d: 'ROSEMARY “ROSIE” TERIO, 82, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosemary_Terio.jpg',
  },
  {
    i: 1586,
    d: 'SCHNEUR ABER, 82, Brooklyn',
  },
  {
    i: 1587,
    d: 'JUAN “MIÑOSO” ARAUJO, 82, The Bronx',
  },
  {
    i: 1588,
    d: 'FRANCES H. BARRY, 82',
  },
  {
    i: 1589,
    d: 'WALTER BECKETT, 82, Brooklyn',
  },
  {
    i: 1590,
    d: 'IFGENIA “IFI” CARDENAS, 82, Manhattan',
  },
  {
    i: 1591,
    d: 'MORDECHAI LEIB “MOTTEL” CHEIN, 82, Brooklyn',
  },
  {
    i: 1592,
    d: 'LUCIANO GOMEZ, 82, Queens',
  },
  {
    i: 1593,
    d: 'LEAH KATZ, 82, Brooklyn',
  },
  {
    i: 1594,
    d: 'CAROL A. BARRANCA, 83, Brooklyn',
    e: 'May 17, 2021',
  },
  {
    i: 1595,
    d: 'MILDRED MAZZELLA, 83, Staten Island',
    e: 'February 24, 2021',
  },
  {
    i: 1596,
    d: 'JOSEPH F. MILAZZO, 83, Staten Island',
    e: 'January 30, 2021',
  },
  {
    i: 1597,
    d: 'BETTY ANN KIRCHHOFER, 83, Queens',
    e: 'January 22, 2021',
  },
  {
    i: 1598,
    d: 'MARGARITA CONCEPCION, 83, The Bronx',
    e: 'January 18, 2021',
  },
  {
    i: 1599,
    d: 'RICHARD T. ZAIB, 83, Queens',
    e: 'June 25, 2020',
  },
  {
    i: 1600,
    d: 'LOUIS MICHAEL AMOIA, 83',
    e: 'June 6, 2020',
  },
  {
    i: 1601,
    d: 'GERARD EVANS MANOLOVICI, 83',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gerard_Manolovici.jpg',
  },
  {
    i: 1602,
    d: 'HENRI M. GUERON, 83, Manhattan',
    e: 'May 1, 2020',
  },
  {
    i: 1603,
    d: 'EFRAIN MOLINA SR., 83, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 1604,
    d: 'DOROTHY MONTALVO, 83, Brooklyn',
    e: 'April 29, 2020',
  },
  {
    i: 1605,
    d: 'TIAN LIANG, 83, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1606,
    d: 'CLETUS STEWART, 83, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1607,
    d: 'MARIA ADIELA HERNANDEZ, 83, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Hernandez.jpeg',
  },
  {
    i: 1608,
    d: 'ELOUISE FENTY, 83, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1609,
    d: 'JAMES D. “JIM” REED, 83, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1610,
    d: 'STANLEY ALBERT, 83, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stanley_Albert.jpg',
  },
  {
    i: 1611,
    d: 'MENDEL DRIZIN, 83, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 1612,
    d: 'ELIAS LANE MELTON, 83, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Elias_Melton.jpeg',
  },
  {
    i: 1613,
    d: 'LILA CHARLOTTE SWEDELSON WEISSMAN, 83, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lila_Weissman.jpg',
  },
  {
    i: 1614,
    d: 'ROSALIE ACAMPORA, 83, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1615,
    d: 'RABBI YITZCHOK KAPLINSKY, 83, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 1616,
    d: 'CHARLES EDWARD “CHARLIE” BURKETT, 83, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Charles_Burkett.jpeg',
  },
  {
    i: 1617,
    d: 'RAFAEL ARCINIEGAS, 83, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 1618,
    d: 'KEVIN JOHN CAHILL, 83, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 1619,
    d: 'THOMAS CORI, 83, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 1620,
    d: 'WILLIAM NEGRON, 83, Brooklyn',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Negron.jpg',
  },
  {
    i: 1621,
    d: 'VIOLETA RIVERA, 83, The Bronx',
    e: 'April 2, 2020',
  },
  {
    i: 1622,
    d: 'RABBI YISROEL FRIEDMAN, 83, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 1623,
    d: 'ROBERT “BOB” ZOLNERZAK, 83, Brooklyn',
    e: 'March 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Zolnerzak.jpg',
  },
  {
    i: 1624,
    d: 'NICHOLAS A. GRIECO, 83, Staten Island',
    e: 'March 26, 2020',
  },
  {
    i: 1625,
    d: 'MICHAEL JOSEF “MIKE” LONGO, 83, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1626,
    d: 'DANILO RIVAS, 83, The Bronx',
  },
  {
    i: 1627,
    d: 'GERALD BRUSKIN, 84, Manhattan',
    e: 'December 13, 2020',
  },
  {
    i: 1628,
    d: 'PIA ALBANESE, 84, Staten Island',
    e: 'October 30, 2020',
  },
  {
    i: 1629,
    d: 'JANET DAVID, 84, Manhattan',
    e: 'October 16, 2020',
  },
  {
    i: 1630,
    d: 'MURIEL A. CALLENDER, 84, Brooklyn',
    e: 'May 3, 2020',
  },
  {
    i: 1631,
    d: 'OLGA VASQUEZ, 84, Manhattan',
    e: 'April 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Olga_Vasquez.jpg',
  },
  {
    i: 1632,
    d: 'KENNETH “SCATS” SCANLON, 84, Staten Island',
    e: 'April 29, 2020',
  },
  {
    i: 1633,
    d: 'DR. PETER I. PRESSMAN, 84, Manhattan',
    e: 'April 27, 2020',
  },
  {
    i: 1634,
    d: 'DOLORES ALTAGRACIA MENA, 84',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dolores_Mena.JPG',
  },
  {
    i: 1635,
    d: 'STANLEY KAPLAN, 84, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1636,
    d: 'HENRY GRIMES, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1637,
    d: 'MILENA JELINEK, 84, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1638,
    d: 'FAUSTINA MONZI SLOBODZIAN, 84, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1639,
    d: 'ARLENE SCHNEIDMAN, 84, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Arlene_Schneidman.jpeg',
  },
  {
    i: 1640,
    d: 'GIL “THE GODFATHER OF CARIBBEAN RADIO” BAILEY, 84, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1641,
    d: 'MICHAEL BESSER, 84, Queens',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Michael_Besser.jpg',
  },
  {
    i: 1642,
    d: 'RALPH WILLIAM MARTEL JR., 84, Manhattan',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ralph_Martel.jpeg',
  },
  {
    i: 1643,
    d: 'ARTHUR B. CORNFELD, 84, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1644,
    d: 'SAMUEL “SAM” HARGRESS JR., 84, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 1645,
    d: 'ROSA SERRANO, 84, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 1646,
    d: 'GABRIEL DE JESUS MARIN SERNA, 84, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1647,
    d: 'DONALD PHILIP MCCOMB, 84, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1648,
    d: 'JOSE H. RICO, 84, Queens',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jose_Rico.png',
  },
  {
    i: 1649,
    d: 'DONALD J. MILLER, 84, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1650,
    d: 'RABBI BRUCE GOLDMAN, 84, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1651,
    d: 'NORMA PEARL HASSEL, 84, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 1652,
    d: 'DOROTHY RUTH ALAJI YASIN, 84, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 1653,
    d: 'KOSTA KASIMIS, 84, Manhattan',
    e: 'March 30, 2020',
  },
  {
    i: 1654,
    d: 'RABBI MORDECHAI GURARY, 84, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1655,
    d: 'SALVATORE ROMEO, 84, Brooklyn',
    e: 'March 27, 2020',
  },
  {
    i: 1656,
    d: 'JOHN KNOX, 84, Queens',
    e: 'March 16, 2020',
  },
  {
    i: 1657,
    d: 'EDWARD MICKUS, 84, Brooklyn',
    e: 'March 12, 2020',
  },
  {
    i: 1658,
    d: 'RABBI SHIMON SUSHOLTZ, 84, Brooklyn',
    e: 'March 28, 1920',
  },
  {
    i: 1659,
    d: 'RABBI GEDALYA BELZ, 84, Brooklyn',
  },
  {
    i: 1660,
    d: 'CECILIA WANG “CC” HSU, 84, Manhattan',
  },
  {
    i: 1661,
    d: 'PATRICIA A. SCHMIDT, 84, Staten Island',
  },
  {
    i: 1662,
    d: 'ROCHEL LEAH ZAHLER, 84, Brooklyn',
  },
  {
    i: 1663,
    d: 'ARTHUR POMPOSELLO, 85, Manhattan',
    e: 'May 6, 2021',
  },
  {
    i: 1664,
    d: 'DR. MOHAMMAD SHAMSUL ISLAM, 85, The Bronx',
    e: 'February 26, 2021',
  },
  {
    i: 1665,
    d: 'BALA “RITA” SENNANDAN, 85, The Bronx',
    e: 'February 6, 2021',
  },
  {
    i: 1666,
    d: 'LUCIA “LUCY” BUTTERMARK, 85, Staten Island',
    e: 'January 25, 2021',
  },
  {
    i: 1667,
    d: 'IOLA DUNLAP, 85, Queens',
    e: 'January 22, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Iola_Dunlap.png',
  },
  {
    i: 1668,
    d: 'JOSEPH FERRIS, 85, Brooklyn',
    e: 'June 20, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joseph_Ferris.jpeg',
  },
  {
    i: 1669,
    d: 'EDWARD PAUL MCGUIRE, 85',
    e: 'May 15, 2020',
  },
  {
    i: 1670,
    d: 'RAFAEL DUMAN, 85, Brooklyn',
    e: 'May 7, 2020',
  },
  {
    i: 1671,
    d: 'CLIFTON HOWELL, 85, The Bronx',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clifton_Howell.jpg',
  },
  {
    i: 1672,
    d: 'KARN VIR SURI, 85, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 1673,
    d: 'STEPHEN DURNIN, 85, Queens',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Stephen_Durnin.jpeg',
  },
  {
    i: 1674,
    d: 'BETTY FRUNZI, 85, Staten Island',
    e: 'April 19, 2020',
  },
  {
    i: 1675,
    d: 'REV. GILBERT NOAH BURKETT, 85, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1676,
    d: 'ANDRES DIAZ, 85, Staten Island',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Andres_Diaz.jpeg',
  },
  {
    i: 1677,
    d: 'PAOLO GIUSTI, 85, Manhattan',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Paolo_Giusti.png',
  },
  {
    i: 1678,
    d: 'MARIO J. “PIPI” POBEGA, 85, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mario_Pobega.jpg',
  },
  {
    i: 1679,
    d: 'HARVEY FINKE, 85, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1680,
    d: 'ZEPHIRIN FELIX MAZILE, 85, Brooklyn',
    e: 'April 10, 2020',
  },
  {
    i: 1681,
    d: 'TACIA K. ARBONA, 85, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 1682,
    d: 'GERARD H. “GERRY” ROSENBERG, 85, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1683,
    d: 'MARIE PROTO, 85, Brooklyn',
    e: 'April 5, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marie_Proto.jpg',
  },
  {
    i: 1684,
    d: 'CHANDRAKANT F. SHETH, 85, Queens',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Chandrakant_Sheth.jpg',
  },
  {
    i: 1685,
    d: 'FRED KLEIN, 85, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1686,
    d: 'KENNETH NEWMAN, 85, Brooklyn',
    e: 'April 3, 2020',
  },
  {
    i: 1687,
    d: 'ED FULD, 85, Queens',
    e: 'March 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ed_Fuld.jpg',
  },
  {
    i: 1688,
    d: 'NATHAN ALLMAN, 85, Manhattan',
    e: 'March 22, 2020',
  },
  {
    i: 1689,
    d: 'DONALD C. BORBELL SR., 85, Brooklyn',
  },
  {
    i: 1690,
    d: 'NORMAN “NACHUM” DICK, 85, Brooklyn',
  },
  {
    i: 1691,
    d: 'MAZEL FINKENSTEIN, 85',
  },
  {
    i: 1692,
    d: 'CHAIM BER GRUNFELD, 85, Brooklyn',
  },
  {
    i: 1693,
    d: 'RABBI MOSHE KWALBRUN, 85, Queens',
  },
  {
    i: 1694,
    d: 'ARTURO F. NOLES, 85, Queens',
  },
  {
    i: 1695,
    d: 'RICHARD SONET, 86',
    e: 'December 28, 2021',
  },
  {
    i: 1696,
    d: 'MANH NGUYEN, 86, The Bronx',
    e: 'March 18, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manh_Nguyen.jpeg',
  },
  {
    i: 1697,
    d: 'JUAN ENRIQUEZ, 86',
    e: 'February 26, 2021',
  },
  {
    i: 1698,
    d: 'HUGH FREYER, 86, The Bronx',
    e: 'July 14, 2020',
  },
  {
    i: 1699,
    d: 'RICHARD G. KLEIN SR., 86, Staten Island',
    e: 'June 4, 2020',
  },
  {
    i: 1700,
    d: 'JOAN TERRERO, 86, The Bronx',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Joan_Terrero.jpg',
  },
  {
    i: 1701,
    d: 'MELITA ELIZABETH “FLYNN” BAKER, 86',
    e: 'April 30, 2020',
  },
  {
    i: 1702,
    d: 'ANTHONY RODRIGUEZ, 86',
    e: 'April 28, 2020',
  },
  {
    i: 1703,
    d: 'NOELIA HERNANDEZ CORDERO, 86, Manhattan',
    e: 'April 24, 2020',
  },
  {
    i: 1704,
    d: 'ARTHUR HIRSHKOWITZ, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1705,
    d: 'YAAKOV SCHWEI, 86, Brooklyn',
    e: 'April 24, 2020',
  },
  {
    i: 1706,
    d: 'MARIA L. ARECHUA, 86, Manhattan',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Arechua.png',
  },
  {
    i: 1707,
    d: 'LAURICE KASOW, 86, Queens',
    e: 'April 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Laurice_Kasow.jpg',
  },
  {
    i: 1708,
    d: 'IRIS CORNELIA LOVE, 86, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1709,
    d: 'GLORIA BARONE, 86, Brooklyn',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gloria_Barone.JPG',
  },
  {
    i: 1710,
    d: 'JACK SMITH, 86, Manhattan',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jack_Smith.png',
  },
  {
    i: 1711,
    d: 'ROBERT SALAME, 86',
    e: 'April 16, 2020',
  },
  {
    i: 1712,
    d: 'LILLIAN “LILY” DESANN-ZUNIGA, 86, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 1713,
    d: 'JOEL M. REED, 86',
    e: 'April 13, 2020',
  },
  {
    i: 1714,
    d: 'PEDRO FERNANDEZ UNAMUNO, 86, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 1715,
    d: "CLAUDE O'BRIEN, 86, Brooklyn",
    e: 'April 7, 2020',
  },
  {
    i: 1716,
    d: 'FELIPE ORTIZ, 86, Queens',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Felipe_Ortiz.jpeg',
  },
  {
    i: 1717,
    d: 'ARLENE STRINGER-CUEVAS, 86, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 1718,
    d: 'PATRICIA BOSWORTH, 86, Manhattan',
    e: 'April 2, 2020',
  },
  {
    i: 1719,
    d: 'MICHAEL A. FRIEDMAN, 86, Manhattan',
    e: 'March 24, 2020',
  },
  {
    i: 1720,
    d: 'ANTHONY “TONY” TERIO, 86, Queens',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Anthony_Terio.jpeg',
  },
  {
    i: 1721,
    d: 'CHAIM ALTER BRACH, 86, Brooklyn',
  },
  {
    i: 1722,
    d: 'VINICIO DONATO, 86, Queens',
  },
  {
    i: 1723,
    d: 'BULGER L. “IRV” IRVING JR., 86, Staten Island',
  },
  {
    i: 1724,
    d: 'ALFRED JOLLON, 86, Manhattan',
  },
  {
    i: 1725,
    d: 'WALTER T BAILEY, 87, Queens',
    e: 'March 21, 2021',
  },
  {
    i: 1726,
    d: 'RIVKAH FELDMAN, 87, Manhattan',
    e: 'February 2, 2021',
  },
  {
    i: 1727,
    d: 'ACCURSIO ZAGARA, 87, Brooklyn',
    e: 'December 25, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Accursio_Zagara.jpg',
  },
  {
    i: 1728,
    d: 'MAURICE LEITER, 87',
    e: 'June 8, 2020',
  },
  {
    i: 1729,
    d: 'BEVERLY ADER HOFFER, 87',
    e: 'June 5, 2020',
  },
  {
    i: 1730,
    d: 'AMALIO RODRIGUEZ, 87, The Bronx',
    e: 'May 28, 2020',
  },
  {
    i: 1731,
    d: 'IRVING HOPPENWASSER, 87, Brooklyn',
    e: 'May 17, 2020',
  },
  {
    i: 1732,
    d: 'EDITH ECKER, 87, Queens',
    e: 'May 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Edith_Ecker.jpg',
  },
  {
    i: 1733,
    d: 'MARIA ROSA PARRELLI, 87, Brooklyn',
    e: 'May 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/MariaRosa_Parrelli.jpeg',
  },
  {
    i: 1734,
    d: 'MARIA LENA PIERRE-LOUIS, 87, Brooklyn',
    e: 'May 1, 2020',
  },
  {
    i: 1735,
    d: 'CAROLE MAE KAYE, 87, Manhattan',
    e: 'April 26, 2020',
  },
  {
    i: 1736,
    d: 'MARY M. RIZZO, 87, Staten Island',
    e: 'April 22, 2020',
  },
  {
    i: 1737,
    d: 'WILLIAM E. HORNER, 87',
    e: 'April 19, 2020',
  },
  {
    i: 1738,
    d: 'DR. FREDERICK MENDELSOHN, 87, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1739,
    d: 'BABETTE SOLON HOLLISTER, 87, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 1740,
    d: 'RABBI YAAKOV MORDECHAI GOLDBERG, 87, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1741,
    d: 'THERESA “TERRY” COLLINS, 87, Queens',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Terry_Collins.png',
  },
  {
    i: 1742,
    d: 'ROSEMARIE AMEROSI, 87, Staten Island',
    e: 'April 9, 2020',
  },
  {
    i: 1743,
    d: 'ANITA FIAL, 87, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1744,
    d: 'PEDRO MUNIZ, 87, Manhattan',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Pedro_Muniz.JPG',
  },
  {
    i: 1745,
    d: 'ETTA B. ALSTON, 87, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Alston.jpg',
  },
  {
    i: 1746,
    d: 'LILA A. FENWICK, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1747,
    d: 'ANN YOUNGERMAN SMOLER, 87, Manhattan',
    e: 'April 4, 2020',
  },
  {
    i: 1748,
    d: 'GRACE HARRIS, 87, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 1749,
    d: 'STELLA PIPITONE, 87, Staten Island',
    e: 'April 3, 2020',
  },
  {
    i: 1750,
    d: 'ANGELO “POPPY” PIRO, 87, Staten Island',
    e: 'March 30, 2020',
  },
  {
    i: 1751,
    d: 'ANGIE ROSA, 87, Brooklyn',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Angie_Rosa.png',
  },
  {
    i: 1752,
    d: 'VITO J. DI BENEDETTO, 87, Staten Island',
    e: 'March 28, 2020',
  },
  {
    i: 1753,
    d: 'ANGIE ROSA, 87, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 1754,
    d: 'JOSEPH BROSTEK, 87, Queens',
    e: 'March 25, 2020',
  },
  {
    i: 1755,
    d: 'ALLAN SCHLANGER, 87, Brooklyn',
    e: 'March 13, 2020',
  },
  {
    i: 1756,
    d: 'PASQUALE BRUNO, 87, Brooklyn',
  },
  {
    i: 1757,
    d: 'BORUCH GELFAND, 87, Brooklyn',
  },
  {
    i: 1758,
    d: 'RABBI TZVI ABBA LERMAN, 87, Brooklyn',
  },
  {
    i: 1759,
    d: 'DR. ALFRED YASSKY, 87, Manhattan',
  },
  {
    i: 1760,
    d: 'SYLVIA NESTEL “GINGER” LIEF, 88, Manhattan',
    e: 'June 4, 2020',
  },
  {
    i: 1761,
    d: 'ELY COHEN, 88, Staten Island',
    e: 'May 24, 2020',
  },
  {
    i: 1762,
    d: 'DOROTHY L. WORRELL, 88, Staten Island',
    e: 'May 4, 2020',
  },
  {
    i: 1763,
    d: 'FAT CHAN, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1764,
    d: 'EDITH “BIG” RICHEMOND, 88, Brooklyn',
    e: 'April 25, 2020',
  },
  {
    i: 1765,
    d: 'MINDELLA LAMM, 88, Manhattan',
    e: 'April 16, 2020',
  },
  {
    i: 1766,
    d: 'EFTYHIA MENICO, 88, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 1767,
    d: 'ROSE MARY INFANTINO, 88, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rose_Mary_Infantino.jpg',
  },
  {
    i: 1768,
    d: 'MANUEL RIVERA, 88, Manhattan',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Manuel_Rivera.jpg',
  },
  {
    i: 1769,
    d: 'YNES KING, 88, The Bronx',
    e: 'April 13, 2020',
  },
  {
    i: 1770,
    d: 'MILDRED BARGEBUHR KUNIN, 88, The Bronx',
    e: 'April 11, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Mildred_Kunin.jpeg',
  },
  {
    i: 1771,
    d: 'ALEXANDER MEYERS, 88, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 1772,
    d: 'LUZMILA HERRERA, 88, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 1773,
    d: 'TULSA BALRAM, 88',
    e: 'April 8, 2020',
  },
  {
    i: 1774,
    d: 'ROCHEL FELICE BLAU, 88, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 1775,
    d: 'MOSHE HOMNICK, 88, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1776,
    d: 'ROBERT W. BARGHAAN, 88, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 1777,
    d: 'RICHARD RAINES, 88, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1778,
    d: 'DONALD FELDSTEIN, 88, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 1779,
    d: 'SIDNEY RUSS, 88, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1780,
    d: 'JEAN POLSKY WEITZ, 88, Brooklyn',
    e: 'April 4, 2020',
  },
  {
    i: 1781,
    d: 'JULIUS ADORNO JR., 88, The Bronx',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Julios_Adorno_Jr.jpg',
  },
  {
    i: 1782,
    d: 'HARVEY BAYARD, 88, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1783,
    d: 'LILLIAN STUGENSKY, 88, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 1784,
    d: 'VIRGINIA FAITH BARGHAAN, 88, Staten Island',
  },
  {
    i: 1785,
    d: 'MARTIN FLANZBAUM, 88, Staten Island',
  },
  {
    i: 1786,
    d: 'RABBI LEIBEL GRONER, 88, Brooklyn',
  },
  {
    i: 1787,
    d: 'RIVKA KELLNER, 88, Brooklyn',
  },
  {
    i: 1788,
    d: 'ERNEST H. SCHWARZ, 88, Staten Island',
  },
  {
    i: 1789,
    d: 'JAMES P.ATRICK BOYLE, 89, Queens',
    e: 'April 2, 2021',
  },
  {
    i: 1790,
    d: 'JOHN CANTWELL ZIEGLER, 89',
    e: 'March 4, 2021',
  },
  {
    i: 1791,
    d: 'PETER SEMLER, 89',
    e: 'March 2, 2021',
  },
  {
    i: 1792,
    d: 'DOMENICK CAVICCHIO, 89, Staten Island',
    e: 'February 21, 2021',
  },
  {
    i: 1793,
    d: 'PHILIP J. SMITH, 89, Manhattan',
    e: 'January 15, 2021',
  },
  {
    i: 1794,
    d: 'CARMEN PEREZ ABREU, 89, The Bronx',
    e: 'December 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Perez_Abreu.png',
  },
  {
    i: 1795,
    d: 'TILLETHA HYDE, 89, The Bronx',
    e: 'May 16, 2020',
  },
  {
    i: 1796,
    d: 'DIONYSIOS S. KOTSONIS, 89, Manhattan',
    e: 'May 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Dionysios_Kotsonis.JPG',
  },
  {
    i: 1797,
    d: 'JAMES “JIMMY” GLENN, 89, Manhattan',
    e: 'May 7, 2020',
  },
  {
    i: 1798,
    d: 'SADIE GAGLIANO, 89, Staten Island',
    e: 'May 5, 2020',
  },
  {
    i: 1799,
    d: 'HERBERT F. “HERB” FISCHER, 89, Staten Island',
    e: 'May 3, 2020',
  },
  {
    i: 1800,
    d: 'THOMAS ECKER, 89, Queens',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Thomas_Ecker.JPG',
  },
  {
    i: 1801,
    d: 'MARIA CRISTINA FIGUEROA, 89, Brooklyn',
    e: 'April 26, 2020',
  },
  {
    i: 1802,
    d: 'LINDY WILLIAM CRESCITELLI, 89, Staten Island',
    e: 'April 23, 2020',
  },
  {
    i: 1803,
    d: 'IRVING ENGELSON, 89, Manhattan',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Irving_Engelson.jpg',
  },
  {
    i: 1804,
    d: 'JOSEPH M. KISSANE, 89, Manhattan',
    e: 'April 19, 2020',
  },
  {
    i: 1805,
    d: 'ARLENE SAUNDERS, 89, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1806,
    d: 'GILDA VILLAMAN, 89, Manhattan',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Gilda_Villaman.JPG',
  },
  {
    i: 1807,
    d: 'CESAR AUGUSTO MORALES SR., 89, The Bronx',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Cesar_Morales.JPG',
  },
  {
    i: 1808,
    d: 'CARMEN NEREIDA MUNIZ, 89, Manhattan',
    e: 'April 12, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Carmen_Muniz.JPG',
  },
  {
    i: 1809,
    d: 'EDWARD D. KILLEA, 89, Staten Island',
    e: 'April 12, 2020',
  },
  {
    i: 1810,
    d: 'BARBARA GIORDANO “NANNY” CASSELLA, 89, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Barbara_Cassella.jpeg',
  },
  {
    i: 1811,
    d: 'PHYLLIS FIORAVANTI, 89, Queens',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Phyllis_Fioravanti.jpg',
  },
  {
    i: 1812,
    d: 'YAAKOV PERLOW, 89, Brooklyn',
    e: 'April 7, 2020',
  },
  {
    i: 1813,
    d: 'HELENE ALYON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1814,
    d: 'HELENE AYLON, 89, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1815,
    d: 'ROY DREISTADT, 89, Manhattan',
    e: 'April 5, 2020',
  },
  {
    i: 1816,
    d: 'MARY J. SAVINO, 89, Staten Island',
    e: 'April 5, 2020',
  },
  {
    i: 1817,
    d: 'CORINNE ROGATNICK, 89, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1818,
    d: 'TADASHI TSUFURA, 89, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1819,
    d: 'KYONG HE PARK, 89',
    e: 'March 28, 2020',
  },
  {
    i: 1820,
    d: 'ROBERT GREENBERGER, 89',
    e: 'March 23, 2020',
  },
  {
    i: 1821,
    d: 'FRANK AMATO, 89, Staten Island',
  },
  {
    i: 1822,
    d: 'BERNEL CONNELLY, 89, Queens',
  },
  {
    i: 1823,
    d: 'RAMON GONZALEZ, 89, Queens',
  },
  {
    i: 1824,
    d: 'HELEN MILLER, 89, Staten Island',
  },
  {
    i: 1825,
    d: 'NECHAMA POSNER, 89, Brooklyn',
  },
  {
    i: 1826,
    d: 'EUGENIA “GEÑA” LOPEZ, 90, Queens',
    e: 'January 17, 2021',
  },
  {
    i: 1827,
    d: 'NANCY MAIELLO, 90, Staten Island',
    e: 'January 10, 2021',
  },
  {
    i: 1828,
    d: 'MARTHA DIAZ, 90, Queens',
    e: 'May 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Martha_Diaz.jpg',
  },
  {
    i: 1829,
    d: 'LEONARD SBORDONE, 90, The Bronx',
    e: 'May 1, 2020',
  },
  {
    i: 1830,
    d: 'GERSHON MEIR, 90, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 1831,
    d: 'LENORE CORCORAN, 90, Queens',
    e: 'April 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lenore_Corcoran.jpg',
  },
  {
    i: 1832,
    d: 'EVA KONRAD HAWKINS, 90, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 1833,
    d: 'YUEN KAN HSU, 90, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 1834,
    d: 'LUCY NICOLELIS, 90, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lucy_Nicolelis.jpeg',
  },
  {
    i: 1835,
    d: 'MORTON WOLITZER, 90, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1836,
    d: 'BETTY JOBLOVE, 90, The Bronx',
    e: 'April 10, 2020',
  },
  {
    i: 1837,
    d: 'MIGUEL ANGEL CALDERON, 90, Manhattan',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miguel_Calderon.JPG',
  },
  {
    i: 1838,
    d: 'ONIELO DE LUZIO, 90, Staten Island',
    e: 'April 6, 2020',
  },
  {
    i: 1839,
    d: 'DR. HERMAN J. LEW, 90, Staten Island',
    e: 'April 1, 2020',
  },
  {
    i: 1840,
    d: 'GEDALYA KORF, 90, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 1841,
    d: 'SHMUEL LANDAU, 90, Brooklyn',
    e: 'March 30, 2020',
  },
  {
    i: 1842,
    d: 'MAXWELL M. MOZELL, 90, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1843,
    d: 'LUCILLE D. TAPPE, 90, Manhattan',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lucille_Tappe.png',
  },
  {
    i: 1844,
    d: 'BENNY AU, 90, Manhattan',
  },
  {
    i: 1845,
    d: 'MOLLIE “GRANDMA DUKES” GUSTINE, 90, Queens',
  },
  {
    i: 1846,
    d: 'BETZALEL KAHAN, 90, Brooklyn',
  },
  {
    i: 1847,
    d: 'GOLDA “GOLDY” KORN, 90, Brooklyn',
  },
  {
    i: 1848,
    d: 'YOSEF ZUNDEL MOTZEN, 90, Brooklyn',
  },
  {
    i: 1849,
    d: 'ANNE MUSTRULLU, 90',
  },
  {
    i: 1850,
    d: 'RABBI YESHAYA ROTH, 90, Brooklyn',
  },
  {
    i: 1851,
    d: 'MORDECHAI MENDEL WIEDER, 90, Brooklyn',
  },
  {
    i: 1852,
    d: 'RANDY LANCHNER, 91',
    e: 'March 14, 2021',
  },
  {
    i: 1853,
    d: 'JOHN HOYT STOOKEY, 91',
    e: 'January 31, 2021',
  },
  {
    i: 1854,
    d: 'JOAN COHEN, 91, Manhattan',
    e: 'January 28, 2021',
  },
  {
    i: 1855,
    d: 'JEROME DANIEL BENDER, 91, Brooklyn',
    e: 'January 4, 2021',
  },
  {
    i: 1856,
    d: 'JEROME “D.” BENDER, 91',
    e: 'January 4, 2021',
  },
  {
    i: 1857,
    d: 'MARIA C. IASIUOLO, 91, Staten Island',
    e: 'November 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Maria_Iasiuolo.jpg',
  },
  {
    i: 1858,
    d: 'ALEXANDER TABAROVSKY, 91, Brooklyn',
    e: 'May 18, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Alexander_Tabarovsky.png',
  },
  {
    i: 1859,
    d: 'HARRIET “HANI” GROSSMAN, 91, The Bronx',
    e: 'May 16, 2020',
  },
  {
    i: 1860,
    d: 'JOSEPH P. MURPHY, 91, Staten Island',
    e: 'May 16, 2020',
  },
  {
    i: 1861,
    d: 'JUDITH PATOCS, 91, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Judith_Patocs.jpg',
  },
  {
    i: 1862,
    d: 'HAROLD JAMES BLAKE, 91, Manhattan',
    e: 'May 10, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Blake.jpg',
  },
  {
    i: 1863,
    d: 'RABBI SHMUEL HOROWITZ, 91, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 1864,
    d: 'ANNA LEVINE, 91, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 1865,
    d: 'IRMA SANCHEZ, 91, Queens',
    e: 'April 21, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Irma_Sanchez.jpg',
  },
  {
    i: 1866,
    d: 'BARRY KAYE, 91, Manhattan',
    e: 'April 21, 2020',
  },
  {
    i: 1867,
    d: 'CANDIDA “CANDY” CARABALLO, 91, Queens',
    e: 'April 16, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Candida_Caraballo.jpg',
  },
  {
    i: 1868,
    d: 'NANCY M. ALLEN, 91',
    e: 'April 15, 2020',
  },
  {
    i: 1869,
    d: 'BENJAMIN “BEN” DIGIOVANNI, 91, Staten Island',
    e: 'April 15, 2020',
  },
  {
    i: 1870,
    d: 'WILLIAM H. “BILL” GERDTS, 91',
    e: 'April 14, 2020',
  },
  {
    i: 1871,
    d: 'JEANETTE “J FLO” MINCIELI, 91, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 1872,
    d: 'RICHARD DE LUCIA, 91, Brooklyn',
    e: 'April 11, 2020',
  },
  {
    i: 1873,
    d: 'THERESA ESTELLE MORRIS, 91, Brooklyn',
    e: 'April 6, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Theresa_Estelle_Morris.png',
  },
  {
    i: 1874,
    d: 'RAE LUCCHESE, 91, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 1875,
    d: 'ROSARIO GONZALEZ, 91, Manhattan',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Rosario_Gonzalez.png',
  },
  {
    i: 1876,
    d: 'SHMUEL HOCH, 91, Brooklyn',
    e: 'March 28, 2020',
  },
  {
    i: 1877,
    d: 'ROMI COHN, 91, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 1878,
    d: 'ANNETTE MARKS, 91, Manhattan',
    e: 'March 19, 2020',
  },
  {
    i: 1879,
    d: 'SARA MERMELSTEIN, 91, Brooklyn',
  },
  {
    i: 1880,
    d: 'YEHUDIS “JUDITH” SHUBERT-FINKELSTEIN, 91, Brooklyn',
  },
  {
    i: 1881,
    d: 'GEORGE E. WOLF, 92, Manhattan',
    e: 'June 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/George_Wolf.jpg',
  },
  {
    i: 1882,
    d: 'JUAN “KYCHY” GARCIA, 92, Manhattan',
    e: 'May 30, 2020',
  },
  {
    i: 1883,
    d: 'JOHN D. “POP POP” ANNETTA, 92, Staten Island',
    e: 'May 22, 2020',
  },
  {
    i: 1884,
    d: 'CHANDRAWATI GURDIYAL, 92, Queens',
    e: 'May 17, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Chandrawati_Gurdiyal.jpeg',
  },
  {
    i: 1885,
    d: 'PETER JOHN TOSO, 92, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 1886,
    d: 'BETTY SHAIN, 92, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1887,
    d: 'RAFAEL TEJEDA, 92, The Bronx',
    e: 'April 17, 2020',
  },
  {
    i: 1888,
    d: 'DR. HOOSHANG BEHROOZI, 92',
    e: 'April 16, 2020',
  },
  {
    i: 1889,
    d: 'MARGARET CIVERS, 92, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 1890,
    d: 'LAWRENCE “HAROLD” KRAMER, 92, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 1891,
    d: 'LEE KONITZ, 92, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1892,
    d: 'DR. ALBERT GOODGOLD, 92, Manhattan',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Albert_Goodgold.jpg',
  },
  {
    i: 1893,
    d: 'JEAN GERINGER, 92, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 1894,
    d: 'KHANA VOROVICH, 92, Brooklyn',
    e: 'April 7, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Khana_Vorovich.jpeg',
  },
  {
    i: 1895,
    d: 'GEORGE WILLIAM KELLY, 92, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 1896,
    d: 'REUBEN GUTOFF, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1897,
    d: 'YVONNE SHERWELL, 92, Manhattan',
    e: 'April 6, 2020',
  },
  {
    i: 1898,
    d: 'YVETTE DIAMOND, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1899,
    d: 'ABRAHAM A. RUBASHKIN, 92, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1900,
    d: 'AVRAHAM HAKOHEN “ROMI” COHN, 92, Brooklyn',
    e: 'March 24, 2020',
  },
  {
    i: 1901,
    d: 'WINIFRED FREDERICKS, 92, Staten Island',
  },
  {
    i: 1902,
    d: 'YOSEF HIRSCH, 92, Brooklyn',
  },
  {
    i: 1903,
    d: 'LEAH KLEIN, 92, Brooklyn',
  },
  {
    i: 1904,
    d: 'LEAH REICH, 92, Brooklyn',
  },
  {
    i: 1905,
    d: 'ALEXANDER ZUSHA/ZUSIA? ROSENBLUM, 92, Brooklyn',
  },
  {
    i: 1906,
    d: 'RAYMOND STRYPE, 92, Brooklyn',
  },
  {
    i: 1907,
    d: 'HERBERT SHAPIRO, 93, Manhattan',
    e: 'February 19, 2021',
  },
  {
    i: 1908,
    d: 'ANNA CORTES, 93',
    e: 'February 11, 2021',
  },
  {
    i: 1909,
    d: 'ROSS GRAHAM, 93, Manhattan',
    e: 'January 28, 2021',
  },
  {
    i: 1910,
    d: 'BESSIE MAE JEFFRESS, 93, Queens',
    e: 'May 15, 2020',
  },
  {
    i: 1911,
    d: 'NITA PIPPINS, 93, Manhattan',
    e: 'May 10, 2020',
  },
  {
    i: 1912,
    d: 'LIGIA “PITA” MENZIES, 93, Manhattan',
    e: 'May 9, 2020',
  },
  {
    i: 1913,
    d: 'JOHN RUVO, 93, The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Ruvo.jpg',
  },
  {
    i: 1914,
    d: 'VINCENZO GALLINA, 93, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1915,
    d: 'ROBERT BROGAN, 93, Queens',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Brogan.jpg',
  },
  {
    i: 1916,
    d: 'LILLIAN ECKSTEIN, 93',
    e: 'April 12, 2020',
  },
  {
    i: 1917,
    d: 'ELIEZER OSTREICHER, 93, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 1918,
    d: 'BERNARD “BERNIE” WEISSMAN, 93, Manhattan',
    e: 'April 9, 2020',
  },
  {
    i: 1919,
    d: 'JAMES L. HUTCHERSON, 93, Queens',
    e: 'April 8, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_L_Hutcherson.JPG',
  },
  {
    i: 1920,
    d: 'ALFRED SCHWARTZ, 93, The Bronx',
    e: 'April 8, 2020',
  },
  {
    i: 1921,
    d: 'IRVING BARASH, 93, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 1922,
    d: 'AGATHA FINA, 93, Brooklyn',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agatha_Fina.jpg',
  },
  {
    i: 1923,
    d: 'LOUIS JOSEPH CELI, 93, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1924,
    d: 'STEPHEN W. KANN, 93, Queens',
    e: 'March 30, 2020',
  },
  {
    i: 1925,
    d: 'JENNIE GRAZIANO, 93, Brooklyn',
    e: 'March 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Jennie_Graziano.jpg',
  },
  {
    i: 1926,
    d: 'MILDRED GLASER, 93, Queens',
  },
  {
    i: 1927,
    d: 'MOSHE GRUNWALD, 93, Brooklyn',
  },
  {
    i: 1928,
    d: 'RUCHEL/RACHEL KLEIN, 93, Brooklyn',
  },
  {
    i: 1929,
    d: 'FRADEL LEIFER, 93',
  },
  {
    i: 1930,
    d: 'SHIFRA SCHARF, 93, Brooklyn',
  },
  {
    i: 1931,
    d: 'SHEINDEL TEMPLER, 93, Brooklyn',
  },
  {
    i: 1932,
    d: 'RABBI AHARON MOSHE WEISS, 93, Brooklyn',
  },
  {
    i: 1933,
    d: 'ESTHER WEISSMAN, 93, Brooklyn',
  },
  {
    i: 1934,
    d: 'LEON FENICHEL, 94',
    e: 'May 26, 2021',
  },
  {
    i: 1935,
    d: 'LUBA WENGERSKY, 94, Brooklyn',
    e: 'February 27, 2021',
  },
  {
    i: 1936,
    d: 'CARMELINA CEBALLOS, 94, Brooklyn',
    e: 'February 23, 2021',
  },
  {
    i: 1937,
    d: 'FELICIA FRIEDMAN, 94, The Bronx',
    e: 'May 19, 2020',
  },
  {
    i: 1938,
    d: 'GEORGE CARAVAKIS, 94, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 1939,
    d: 'MARION M. GAVIN, 94, Brooklyn',
    e: 'April 9, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Marion_Gavin.JPG',
  },
  {
    i: 1940,
    d: 'JOSEPH JEROME SNEAD, 94, Queens',
    e: 'April 6, 2020',
  },
  {
    i: 1941,
    d: 'ANN KROSS, 94, The Bronx',
    e: 'April 3, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Ann_Kross.jpg',
  },
  {
    i: 1942,
    d: 'IRENE ZORFAS, 94, Manhattan',
    e: 'April 3, 2020',
  },
  {
    i: 1943,
    d: 'RABBI MOSHE YEHUDA GUBITZ, 94, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1944,
    d: 'BUCKY PIZZARELLI, 94',
    e: 'April 1, 2020',
  },
  {
    i: 1945,
    d: 'BERYL BERNAY, 94, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1946,
    d: 'WILLIAM WOLF, 94, Manhattan',
    e: 'March 28, 2020',
  },
  {
    i: 1947,
    d: 'JOYCE ELAINE PARKER, 94, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 1948,
    d: 'GOLDA BRACH, 94, Brooklyn',
  },
  {
    i: 1949,
    d: 'CHAYA SARAH GLUCK, 94, Brooklyn',
  },
  {
    i: 1950,
    d: 'MALKA KALMANOWITZ, 94, Brooklyn',
  },
  {
    i: 1951,
    d: 'GENESHA SOLOMON, 94, Brooklyn',
  },
  {
    i: 1952,
    d: 'YECHEZKEL SHRAGA WAGSHAL, 95, Brooklyn',
    e: 'April 30, 2020',
  },
  {
    i: 1953,
    d: 'STANLEY B. DREYER, 95, Manhattan',
    e: 'April 17, 2020',
  },
  {
    i: 1954,
    d: 'EMILY SAVITSKY, 95, Queens',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Emily_Savitsky.jpg',
  },
  {
    i: 1955,
    d: 'RACHEL DVOSHE ALTEIN, 95, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 1956,
    d: 'PHOEBE GLADSTONE, 95, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 1957,
    d: 'MOE “MOE THE BUTCHER” ALBANESE, 95',
    e: 'April 7, 2020',
  },
  {
    i: 1958,
    d: 'GRACE GRANTER, 95, Brooklyn',
    e: 'April 6, 2020',
  },
  {
    i: 1959,
    d: 'ROBERT J. WOLFSON, 95',
    e: 'April 4, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Robert_Wolfson.jpg',
  },
  {
    i: 1960,
    d: 'RABBI MORDECHAI DOVID RUBIN, 95, Brooklyn',
    e: 'April 2, 2020',
  },
  {
    i: 1961,
    d: 'MEIR ZEV SPITZER, 95, Brooklyn',
    e: 'April 1, 2020',
  },
  {
    i: 1962,
    d: 'MORTEZA KHOSROVA, 95, Queens',
    e: 'March 29, 2020',
  },
  {
    i: 1963,
    d: 'MARIA “MAYITO” COLÓN, 95, The Bronx',
  },
  {
    i: 1964,
    d: 'MR. AVROHOM KLEIN, 95, Brooklyn',
  },
  {
    i: 1965,
    d: 'MILTON STEINBERG, 96, The Bronx',
    e: 'January 14, 2021',
  },
  {
    i: 1966,
    d: 'JAMES A. HARPER, 96',
    e: 'December 31, 2020',
  },
  {
    i: 1967,
    d: 'LILIAN LAZAR, 96, Manhattan',
    e: 'May 3, 2020',
  },
  {
    i: 1968,
    d: 'ANNA PRIOLO RICCOBONO, 96, Staten Island',
    e: 'April 18, 2020',
  },
  {
    i: 1969,
    d: 'MIRIAM STOLZENBERG, 96, The Bronx',
    e: 'April 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miriam_Stolzenberg.JPG',
  },
  {
    i: 1970,
    d: 'JOSEPH TUSIANI, 96, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1971,
    d: 'ROBERT M. “BOB” WEINTRAUB, 96, Manhattan',
    e: 'March 29, 2020',
  },
  {
    i: 1972,
    d: 'SADIE MARTUCCI, 96, Queens',
    e: 'March 28, 2020',
  },
  {
    i: 1973,
    d: 'BLIMA SCHWARTZ, 96, Brooklyn',
  },
  {
    i: 1974,
    d: 'BERL SILBERSTEIN, 96, Brooklyn',
  },
  {
    i: 1975,
    d: 'EDWIN B WEINTRAUB, 97, The Bronx',
    e: 'April 7, 2021',
  },
  {
    i: 1976,
    d: 'AUSTIN I. LEMPIT, 97',
    e: 'December 22, 2020',
  },
  {
    i: 1977,
    d: 'BETTE DEWING, 97, Manhattan',
    e: 'September 5, 2020',
  },
  {
    i: 1978,
    d: 'ROLANDO ACOSTA, 97, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 1979,
    d: 'MOSHE MOSKOWITZ, 97, Brooklyn',
    e: 'April 19, 2020',
  },
  {
    i: 1980,
    d: 'JOSEPH FEINGOLD, 97, Manhattan',
    e: 'April 15, 2020',
  },
  {
    i: 1981,
    d: 'ROSLYN GREEN, 97, Manhattan',
    e: 'April 14, 2020',
  },
  {
    i: 1982,
    d: 'JERZY GLOWCZEWSKI, 97, Manhattan',
    e: 'April 13, 2020',
  },
  {
    i: 1983,
    d: 'WYNN HANDMAN, 97, Manhattan',
    e: 'April 11, 2020',
  },
  {
    i: 1984,
    d: 'BERTINA ELLIS, 97',
    e: 'April 8, 2020',
  },
  {
    i: 1985,
    d: 'ADELINE COPPOLA, 97, The Bronx',
  },
  {
    i: 1986,
    d: 'ELYA GELBERT, 97, Brooklyn',
  },
  {
    i: 1987,
    d: 'SARA (SURA) LISSAUER, 97, Brooklyn',
  },
  {
    i: 1988,
    d: 'LAURETTE B. NIERENBERG, 98',
    e: 'January 9, 2021',
  },
  {
    i: 1989,
    d: 'ANNA BUCCELLATO, 98, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 1990,
    d: 'ANNA MESSINA, 98',
    e: 'May 1, 2020',
  },
  {
    i: 1991,
    d: 'MOSHE BERKOWITZ, 98, Brooklyn',
    e: 'April 17, 2020',
  },
  {
    i: 1992,
    d: 'ETTA REBECCA BUSH, 98, Brooklyn',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Etta_Rebecca_Bush.png',
  },
  {
    i: 1993,
    d: 'HAROLD GROSSMAN, 98, The Bronx',
    e: 'April 13, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Harold_Grossman.jpg',
  },
  {
    i: 1994,
    d: 'RABBI YAAKOV YITZCHOK EICHORN, 98, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 1995,
    d: 'MARGARET DONAHUE, 98, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 1996,
    d: 'EVELYN BULCOCK, 98, Brooklyn',
    e: 'March 28, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Evelyn_Bullcock.jpeg',
  },
  {
    i: 1997,
    d: 'CANDIDA ROSA MOLINA, 99, Queens',
    e: 'January 19, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Candida_Rosa_Molina.jpeg',
  },
  {
    i: 1998,
    d: 'VITO BRANCATO, 99, Brooklyn',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Vito_Brancato.jpg',
  },
  {
    i: 1999,
    d: 'KLARA WEISZ, 99',
    e: 'April 3, 2020',
  },
  {
    i: 2000,
    d: 'LOUIS SCHMIDT, 99',
    e: 'March 30, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Louis_Schmidt.jpg',
  },
  {
    i: 2001,
    d: 'GUTA SHAPIRO, 99',
    e: 'March 27, 2020',
  },
  {
    i: 2002,
    d: 'AIDEL BUCHINGER, 99, Brooklyn',
  },
  {
    i: 2003,
    d: 'SHLOMO GOLDBERG, 99, Brooklyn',
  },
  {
    i: 2004,
    d: 'LOUIS MAIELLO, 100, Staten Island',
    e: 'January 14, 2021',
  },
  {
    i: 2005,
    d: 'MIRIAM “MIMI” KERPEN, 100, Brooklyn',
    e: 'December 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Miriam_Kerpen.jpg',
  },
  {
    i: 2006,
    d: 'PHILIP KAHN, 100',
    e: 'April 17, 2020',
  },
  {
    i: 2007,
    d: 'MADALINE ULICNY, 100, Queens',
    e: 'April 3, 2020',
  },
  {
    i: 2008,
    d: 'AVRAHAM SHMUEL ABRAMOVITZ SHMUEL ABRAMOVITZ, 100, Brooklyn',
  },
  {
    i: 2009,
    d: 'MARIE GRILLO, 101, Staten Island',
    e: 'January 29, 2021',
  },
  {
    i: 2010,
    d: 'SARAH FEUERWERKER, 101, Brooklyn',
  },
  {
    i: 2011,
    d: 'SYLVIA LIEBER, 102, Queens',
    e: 'January 25, 2021',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Sylvia_Lieber.png',
  },
  {
    i: 2012,
    d: 'ANGELA MARIE ROONEY, 103, The Bronx',
    e: 'May 27, 2020',
  },
  {
    i: 2013,
    d: 'PHYLLIS BEATRICE ANTONETZ, 103',
    e: 'April 17, 2020',
  },
  {
    i: 2014,
    d: 'MILLIE BELLE BERRY, 110, Manhattan',
    e: 'April 22, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Millie_Belle_Berry.jpg',
  },
  {
    i: 2015,
    d: 'LEE BROWN',
    e: 'March 2, 2021',
  },
  {
    i: 2016,
    d: 'JOHN SPUCHES',
    e: 'February 3, 2021',
  },
  {
    i: 2017,
    d: 'GLORIA DEL CARMEN QUIROZ SERNA',
    e: 'February 1, 2021',
  },
  {
    i: 2018,
    d: 'JEAN THOMPSON, Queens',
    e: 'January 29, 2021',
  },
  {
    i: 2019,
    d: 'GEORGE JANVIER, The Bronx',
    e: 'December 23, 2020',
  },
  {
    i: 2020,
    d: 'MARIA PAPAYIANNIA, Brooklyn',
    e: 'December 17, 2020',
  },
  {
    i: 2021,
    d: 'ANGELO LEOTTA, Staten Island',
    e: 'September 13, 2020',
  },
  {
    i: 2022,
    d: 'NEREIDA GONZALEZ, The Bronx',
    e: 'July 20, 2020',
  },
  {
    i: 2023,
    d: 'NICHOLAS WEST',
    e: 'June 25, 2020',
  },
  {
    i: 2024,
    d: 'NOE ORTIZ, The Bronx',
    e: 'June 6, 2020',
  },
  {
    i: 2025,
    d: 'WALTER MENDOZA, Queens',
    e: 'June 1, 2020',
  },
  {
    i: 2026,
    d: 'WILLIAM “BILLY” SCANLAN JR.',
    e: 'May 29, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/William_Scanlan.jpg',
  },
  {
    i: 2027,
    d: 'VIRGINIA BARRON TAYLOE',
    e: 'May 26, 2020',
  },
  {
    i: 2028,
    d: 'ARISTEO BOSQUES',
    e: 'May 25, 2020',
  },
  {
    i: 2029,
    d: 'MIGUEL ROLDAN, Queens',
    e: 'May 25, 2020',
  },
  {
    i: 2030,
    d: 'TENZING TSERING',
    e: 'May 24, 2020',
  },
  {
    i: 2031,
    d: 'DAVID LEE, Manhattan',
    e: 'May 22, 2020',
  },
  {
    i: 2032,
    d: 'MELODY REED, Manhattan',
    e: 'May 15, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Melody_Reed.jpg',
  },
  {
    i: 2033,
    d: 'RICARDO HILL',
    e: 'May 14, 2020',
  },
  {
    i: 2034,
    d: 'MARIE PETIT-HOMME',
    e: 'May 13, 2020',
  },
  {
    i: 2035,
    d: 'EVERARDO ARENAS, Queens',
    e: 'May 12, 2020',
  },
  {
    i: 2036,
    d: 'WILLANDE “ELVIS” VILME',
    e: 'May 12, 2020',
  },
  {
    i: 2037,
    d: 'NUPU FAKHRUZZAMAN, Queens',
    e: 'May 10, 2020',
  },
  {
    i: 2038,
    d: 'MARIA ZOILA GUAMAN, Brooklyn',
    e: 'May 8, 2020',
  },
  {
    i: 2039,
    d: 'KATHY CORNEJO',
    e: 'May 6, 2020',
  },
  {
    i: 2040,
    d: 'GEORGE SANTIAGO',
    e: 'May 6, 2020',
  },
  {
    i: 2041,
    d: 'ANGEL VARGAS, Queens',
    e: 'May 6, 2020',
  },
  {
    i: 2042,
    d: 'LUIS VANEGAS, Queens',
    e: 'May 4, 2020',
  },
  {
    i: 2043,
    d: 'MARGARITA UZHCA MIZHQUIRI, Queens',
    e: 'May 2, 2020',
  },
  {
    i: 2044,
    d: 'OMAR ROMERO, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 2045,
    d: 'IMELDA ZÁRATE, Queens',
    e: 'May 1, 2020',
  },
  {
    i: 2046,
    d: 'RAUL LUNA, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 2047,
    d: 'JOSE LUIS SANCHEZ PEREZ, Queens',
    e: 'April 30, 2020',
  },
  {
    i: 2048,
    d: 'ABRAHAM BALLINAS, Queens',
    e: 'April 29, 2020',
  },
  {
    i: 2049,
    d: 'GERMANO CELANT, Manhattan',
    e: 'April 29, 2020',
  },
  {
    i: 2050,
    d: 'CLINTON HINDS',
    e: 'April 29, 2020',
  },
  {
    i: 2051,
    d: 'ALEJANDRO MENDEZ, Staten Island',
    e: 'April 28, 2020',
  },
  {
    i: 2052,
    d: 'LAURA TAYLOR HOWELL, The Bronx',
    e: 'April 27, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Laura_TaylorHowell.jpg',
  },
  {
    i: 2053,
    d: 'KOFI GYAMI',
    e: 'April 27, 2020',
  },
  {
    i: 2054,
    d: 'ANAND SAHADEO, The Bronx',
    e: 'April 27, 2020',
  },
  {
    i: 2055,
    d: 'DAVID RIVERA JR., The Bronx',
    e: 'April 26, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/David_Rivera.jpeg',
  },
  {
    i: 2056,
    d: 'LAURO ACUNA',
    e: 'April 26, 2020',
  },
  {
    i: 2057,
    d: 'ANITA CRUMPTON',
    e: 'April 26, 2020',
  },
  {
    i: 2058,
    d: 'JULIA BROWN, The Bronx',
    e: 'April 25, 2020',
  },
  {
    i: 2059,
    d: 'JOSEPHINE HILL, Manhattan',
    e: 'April 25, 2020',
  },
  {
    i: 2060,
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 24, 2020',
  },
  {
    i: 2061,
    d: 'CLYDE WILLIAM HENRY, Brooklyn',
    e: 'April 23, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Clyde_William_Henry.jpg',
  },
  {
    i: 2062,
    d: 'ROSA CARABALLO, The Bronx',
    e: 'April 23, 2020',
  },
  {
    i: 2063,
    d: 'SALOME CAZARES, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 2064,
    d: 'HARVEY KNIGHT',
    e: 'April 23, 2020',
  },
  {
    i: 2065,
    d: 'CARLA MARCELO, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 2066,
    d: 'ROGER MUSCADI, Brooklyn',
    e: 'April 23, 2020',
  },
  {
    i: 2067,
    d: 'FELIX PUNO II',
    e: 'April 23, 2020',
  },
  {
    i: 2068,
    d: 'PEDRO SANCHEZ, Queens',
    e: 'April 23, 2020',
  },
  {
    i: 2069,
    d: 'CECIL HEWITT, Brooklyn',
    e: 'April 22, 2020',
  },
  {
    i: 2070,
    d: 'ANDRES MORALES, Queens',
    e: 'April 22, 2020',
  },
  {
    i: 2071,
    d: 'DANIEL CHAVEZ, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 2072,
    d: 'SEGUNDO ESPIRO GUAMAN, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 2073,
    d: 'LUZ DARY MEJIA QUICENO',
    e: 'April 21, 2020',
  },
  {
    i: 2074,
    d: 'GUILLERMO MENDOZA',
    e: 'April 21, 2020',
  },
  {
    i: 2075,
    d: 'DEODORO MONGE GUTIERREZ, Queens',
    e: 'April 21, 2020',
  },
  {
    i: 2076,
    d: 'CARLOS MORENO',
    e: 'April 21, 2020',
  },
  {
    i: 2077,
    d: 'ELIEZER SANTIAGO, The Bronx',
    e: 'April 21, 2020',
  },
  {
    i: 2078,
    d: 'ROBERT “STEVE THE BOOKMAN” STEVENS',
    e: 'April 21, 2020',
  },
  {
    i: 2079,
    d: 'SHARON WILLIAMS',
    e: 'April 21, 2020',
  },
  {
    i: 2080,
    d: 'RICARDO RAMOS CHAVEZ, Queens',
    e: 'April 20, 2020',
  },
  {
    i: 2081,
    d: 'JAY-NATALIE LA SANTA, The Bronx',
    e: 'April 20, 2020',
  },
  {
    i: 2082,
    d: 'ROMAN GUERRERO SALDIVAR',
    e: 'April 20, 2020',
  },
  {
    i: 2083,
    d: 'MANUEL R. JARA',
    e: 'April 19, 2020',
  },
  {
    i: 2084,
    d: 'EDUARDO MARTINEZ HERNANDEZ, The Bronx',
    e: 'April 19, 2020',
  },
  {
    i: 2085,
    d: 'SAW THEIN “SAM” MYINT',
    e: 'April 19, 2020',
  },
  {
    i: 2086,
    d: 'MANUEL MESIAS YUPA, Queens',
    e: 'April 19, 2020',
  },
  {
    i: 2087,
    d: 'SHARAN FERNANDEZ, The Bronx',
    e: 'April 18, 2020',
  },
  {
    i: 2088,
    d: 'MORENA TORREDES “TITA” JAVINES, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 2089,
    d: 'JASON LEWIS, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 2090,
    d: 'SHAH J. SARKAR, Queens',
    e: 'April 18, 2020',
  },
  {
    i: 2091,
    d: 'LUCIEN SZPIRO, Manhattan',
    e: 'April 18, 2020',
  },
  {
    i: 2092,
    d: 'MARCELO CAMPOS, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 2093,
    d: 'RICARDO CHILCHOA, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 2094,
    d: 'SUZETTE FACEY, Queens',
    e: 'April 17, 2020',
  },
  {
    i: 2095,
    d: 'MANUEL MONTEALEGRE, Queens',
    e: 'April 16, 2020',
  },
  {
    i: 2096,
    d: 'EILEEN STEWART, Brooklyn',
    e: 'April 16, 2020',
  },
  {
    i: 2097,
    d: 'HÉCTOR CASTILLO MENDEZ, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 2098,
    d: 'JULIO PACHECO, The Bronx',
    e: 'April 15, 2020',
  },
  {
    i: 2099,
    d: 'JACQUELINE “JACKIE” ROWE, Queens',
    e: 'April 15, 2020',
  },
  {
    i: 2100,
    d: 'JOHN DUNSTON JR., Queens',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/John_Dunston_Jr.png',
  },
  {
    i: 2101,
    d: 'LENIN “LENNY” PORTILLO, The Bronx',
    e: 'April 14, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Lenin_Portillo.jpg',
  },
  {
    i: 2102,
    d: 'ARTHUR ANDERSON',
    e: 'April 14, 2020',
  },
  {
    i: 2103,
    d: 'IRIS MILAGROS CANCEL',
    e: 'April 14, 2020',
  },
  {
    i: 2104,
    d: 'MARIA BERTHA GONZALEZ',
    e: 'April 14, 2020',
  },
  {
    i: 2105,
    d: 'EFRAIN MARTINEZ, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 2106,
    d: 'TONY TORRES, The Bronx',
    e: 'April 14, 2020',
  },
  {
    i: 2107,
    d: 'MARILYN ACLUFI, Brooklyn',
    e: 'April 13, 2020',
  },
  {
    i: 2108,
    d: 'ELPIDIO ASPIROZ, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 2109,
    d: 'ROBERTO BRAVO',
    e: 'April 13, 2020',
  },
  {
    i: 2110,
    d: 'ERNESTO “AUDIE” DELEON',
    e: 'April 13, 2020',
  },
  {
    i: 2111,
    d: 'MARIA E. “TELECO” GONZALEZ',
    e: 'April 13, 2020',
  },
  {
    i: 2112,
    d: 'NICHOLAS VEGA, Queens',
    e: 'April 13, 2020',
  },
  {
    i: 2113,
    d: 'DENNIS CERRATO, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 2114,
    d: 'THOMAS TECK KUWE CHAI, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 2115,
    d: 'RANULFO CORTEZ, Queens',
    e: 'April 12, 2020',
  },
  {
    i: 2116,
    d: 'LLOYD OSBOURNE, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 2117,
    d: 'ANTHONY “TONY” THOMAS, Brooklyn',
    e: 'April 12, 2020',
  },
  {
    i: 2118,
    d: 'ENRIQUE “JUNIOR” VEGA, The Bronx',
    e: 'April 12, 2020',
  },
  {
    i: 2119,
    d: 'WALTER L. ANCE, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2120,
    d: 'KEVIN FRETT',
    e: 'April 11, 2020',
  },
  {
    i: 2121,
    d: 'AL HAVELIN',
    e: 'April 11, 2020',
  },
  {
    i: 2122,
    d: 'JOSEMIQUEL “YOYA” HENRIQUEZ',
    e: 'April 11, 2020',
  },
  {
    i: 2123,
    d: 'LORENZO W. PINCAY, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2124,
    d: 'JOSE RAMON, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2125,
    d: 'MIGUEL TORRES, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2126,
    d: 'JOSE VILLAGRAN, Queens',
    e: 'April 11, 2020',
  },
  {
    i: 2127,
    d: 'DENISE COLBERT, Manhattan',
    e: 'April 10, 2020',
  },
  {
    i: 2128,
    d: 'GERMAN RAMALES FLORES',
    e: 'April 10, 2020',
  },
  {
    i: 2129,
    d: 'SANTOS JUAREZ, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 2130,
    d: 'HUGO VEGA, Queens',
    e: 'April 10, 2020',
  },
  {
    i: 2131,
    d: 'IRIS SHIRLENE LAKE, Brooklyn',
    e: 'April 9, 2020',
  },
  {
    i: 2132,
    d: 'JUSTICE NANA YAW NYANTAKYI, The Bronx',
    e: 'April 9, 2020',
  },
  {
    i: 2133,
    d: 'ANTONIA THORNE',
    e: 'April 9, 2020',
  },
  {
    i: 2134,
    d: 'MOISES VALENCIA, Queens',
    e: 'April 9, 2020',
  },
  {
    i: 2135,
    d: 'ANNA BLADES',
    e: 'April 8, 2020',
  },
  {
    i: 2136,
    d: 'JOSÉ R. CHABLA, Queens',
    e: 'April 8, 2020',
  },
  {
    i: 2137,
    d: 'EDDY MARQUEZ, Brooklyn',
    e: 'April 8, 2020',
  },
  {
    i: 2138,
    d: 'FREDDY FUENTES, Manhattan',
    e: 'April 7, 2020',
  },
  {
    i: 2139,
    d: 'GLORIA MINOR',
    e: 'April 7, 2020',
  },
  {
    i: 2140,
    d: 'HILDA RIVERA, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 2141,
    d: 'PAULINE WASHINGTON, The Bronx',
    e: 'April 7, 2020',
  },
  {
    i: 2142,
    d: 'MARIA ELENA ZHUMI, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 2143,
    d: 'MANUEL ZUNA, Queens',
    e: 'April 7, 2020',
  },
  {
    i: 2144,
    d: 'DEIDRE EDWARDS',
    e: 'April 6, 2020',
  },
  {
    i: 2145,
    d: 'WILLIE QUEZADA, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 2146,
    d: 'DR. MOHAMMAD IFTEKHAR UDDIN, The Bronx',
    e: 'April 6, 2020',
  },
  {
    i: 2147,
    d: 'GREGORY GRAHAM, Queens',
    e: 'April 5, 2020',
  },
  {
    i: 2148,
    d: 'ANGELA LEWIS',
    e: 'April 5, 2020',
  },
  {
    i: 2149,
    d: 'RAMON ROMAN',
    e: 'April 5, 2020',
  },
  {
    i: 2150,
    d: 'ANTHONY “TONY” CAGGIANO',
    e: 'April 4, 2020',
  },
  {
    i: 2151,
    d: 'DAVID RONALD CHRISTIAN, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 2152,
    d: 'RAFAEL TORRES CRUZ, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 2153,
    d: 'MAURILLO GUZMAN, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 2154,
    d: 'ANGEL LEON, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 2155,
    d: 'OBDULIA RIVERA, The Bronx',
    e: 'April 4, 2020',
  },
  {
    i: 2156,
    d: 'RUBEN RODRIGUEZ, Queens',
    e: 'April 4, 2020',
  },
  {
    i: 2157,
    d: 'LUIS ALBINO, The Bronx',
    e: 'April 3, 2020',
  },
  {
    i: 2158,
    d: 'ALEJANDRO BUSTAMANTE',
    e: 'April 3, 2020',
  },
  {
    i: 2159,
    d: 'PIERRE MOISE',
    e: 'April 3, 2020',
  },
  {
    i: 2160,
    d: 'VIDAL CRUZ, Staten Island',
    e: 'April 2, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Vidal_Cruz.jpg',
  },
  {
    i: 2161,
    d: 'CHARLES H. BEATTY, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 2162,
    d: 'KENNETH RICKETTS, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 2163,
    d: 'WALTER SCOTT, Queens',
    e: 'April 2, 2020',
  },
  {
    i: 2164,
    d: 'JAMES H. “SHAMUS” WEBER, Brooklyn',
    e: 'April 1, 2020',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/James_Weber.jpeg',
  },
  {
    i: 2165,
    d: 'ISMAEL ALMODOVAR, Brooklyn',
    e: 'March 31, 2020',
  },
  {
    i: 2166,
    d: 'ÁLVARO BONILLA, Queens',
    e: 'March 31, 2020',
  },
  {
    i: 2167,
    d: 'RAUL CLARKE',
    e: 'March 31, 2020',
  },
  {
    i: 2168,
    d: 'MD SHIPON HOSSAIN',
    e: 'March 29, 2020',
  },
  {
    i: 2169,
    d: 'MUTABBIR CHOWDHURY',
    e: 'March 28, 2020',
  },
  {
    i: 2170,
    d: 'YESENIA MARIA JIMENEZ, The Bronx',
    e: 'March 28, 2020',
  },
  {
    i: 2171,
    d: 'MAJUMDER SHAFIQUR RAHMAN',
    e: 'March 28, 2020',
  },
  {
    i: 2172,
    d: 'WILLIAM WOLF',
    e: 'March 28, 2020',
  },
  {
    i: 2173,
    d: 'BABUL AHMED, Queens',
    e: 'March 27, 2020',
  },
  {
    i: 2174,
    d: 'FELIPE “TITO” CARRION, The Bronx',
    e: 'March 27, 2020',
  },
  {
    i: 2175,
    d: 'IRENE WEISS',
    e: 'March 26, 2020',
  },
  {
    i: 2176,
    d: 'ALEXANDER GIGUEREDO',
    e: 'March 25, 2020',
  },
  {
    i: 2177,
    d: 'RAMON OSORIA, Queens',
    e: 'March 23, 2020',
  },
  {
    i: 2178,
    d: 'ALBERTO DIAZ',
    e: 'March 21, 2020',
  },
  {
    i: 2179,
    d: 'BARBARA E. BENJAMIN, Queens',
    e: 'March 20, 2020',
  },
  {
    i: 2180,
    d: 'PIERRE DESHAUTEURS, Staten Island',
    e: 'March 16, 2020',
  },
  {
    i: 2181,
    d: 'PIDIO LINARES, Queens',
    e: 'March 13, 2020',
  },
  {
    i: 2182,
    d: 'JAMES GREEN, The Bronx',
  },
  {
    i: 2183,
    d: 'AGUSTIN SALVADOR',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Agustin_Salvador.jpeg',
  },
  {
    i: 2184,
    d: 'JULIAN CLYDE WESTON, Brooklyn',
    h: 'https://projects.thecity.nyc/covid-19-deaths-img/Julian_Clyde_Weston.jpg',
  },
  {
    i: 2185,
    d: 'KWABENA ACHEAMPONG',
  },
  {
    i: 2186,
    d: 'EUGENE ADAMS',
  },
  {
    i: 2187,
    d: 'LUZ INES AGRAZAL',
  },
  {
    i: 2188,
    d: 'SERGIO AGUILAR',
  },
  {
    i: 2189,
    d: 'WILMAN AJILA, Queens',
  },
  {
    i: 2190,
    d: 'SHAFIQUL ALAM',
  },
  {
    i: 2191,
    d: 'ANGEL ALEJANDRO',
  },
  {
    i: 2192,
    d: 'ALI ALI',
  },
  {
    i: 2193,
    d: 'ISMAT ALI, Queens',
  },
  {
    i: 2194,
    d: 'HAZRAT ALI, Manhattan',
  },
  {
    i: 2195,
    d: 'KHANDAKER MOSADDEK ALI (SADEK), The Bronx',
  },
  {
    i: 2196,
    d: 'MICHELLE ALLEN, Brooklyn',
  },
  {
    i: 2197,
    d: 'RICARDO ALVARADO RIVAS',
  },
  {
    i: 2198,
    d: 'WILLIAM ANDERSON',
  },
  {
    i: 2199,
    d: 'CORNELL ANDERSON',
  },
  {
    i: 2200,
    d: 'WILLIE ANDERSON, The Bronx',
  },
  {
    i: 2201,
    d: 'GOVINDA ANDIAPPEN, Queens',
  },
  {
    i: 2202,
    d: 'SABINO ANDRADE',
  },
  {
    i: 2203,
    d: 'LESTER ANTHONY',
  },
  {
    i: 2204,
    d: 'SEGUNO ARCHIBALA',
  },
  {
    i: 2205,
    d: 'DONALD ARRINGTON',
  },
  {
    i: 2206,
    d: 'RODRIGO ASTUDIILLO',
  },
  {
    i: 2207,
    d: 'JOSEPH AUFRICHTIG, Brooklyn',
  },
  {
    i: 2208,
    d: 'RABBI MEIR YISROEL AZRYLEWITZ, Brooklyn',
  },
  {
    i: 2209,
    d: 'MUHAMMAD ALI BABUL, Queens',
  },
  {
    i: 2210,
    d: 'MIGEL BAEZ, Brooklyn',
  },
  {
    i: 2211,
    d: 'ALFRED BAGLEY',
  },
  {
    i: 2212,
    d: 'GWENDOLYN BAILEY',
  },
  {
    i: 2213,
    d: 'ROBERT BARLEY',
  },
  {
    i: 2214,
    d: 'SALVATORE BATTAGLIA',
  },
  {
    i: 2215,
    d: 'ETHEL BAUMANN',
  },
  {
    i: 2216,
    d: 'THOMAS BEALS',
  },
  {
    i: 2217,
    d: 'DONALD BEARD',
  },
  {
    i: 2218,
    d: 'KETTY BEAUBIEN, Brooklyn',
  },
  {
    i: 2219,
    d: 'JAHANARA BEGUM, Queens',
  },
  {
    i: 2220,
    d: 'MATTHEW BERENGUER, The Bronx',
  },
  {
    i: 2221,
    d: 'MARGARITA BERMUDEZ',
  },
  {
    i: 2222,
    d: 'GLADYS BARCELO BETANCOURT, The Bronx',
  },
  {
    i: 2223,
    d: 'DAVID BLAGROVE',
  },
  {
    i: 2224,
    d: 'JULIA BLANCAS',
  },
  {
    i: 2225,
    d: 'MANUEL BOITEL',
  },
  {
    i: 2226,
    d: 'MARTIN BOND',
  },
  {
    i: 2227,
    d: 'ROBERT BOOTH',
  },
  {
    i: 2228,
    d: 'MELQUIADES “PAUL” BRAVO',
  },
  {
    i: 2229,
    d: 'RANDY BROWN',
  },
  {
    i: 2230,
    d: 'CATHERINE BRUNO',
  },
  {
    i: 2231,
    d: 'FIORE BRUSCO',
  },
  {
    i: 2232,
    d: 'TYSUN BURGESS',
  },
  {
    i: 2233,
    d: 'JOHN BUTTNER',
  },
  {
    i: 2234,
    d: 'HECTOR CABANA, Queens',
  },
  {
    i: 2235,
    d: 'SAL CAPITUMMINO',
  },
  {
    i: 2236,
    d: 'ROBERTO CARDONA',
  },
  {
    i: 2237,
    d: 'FRAN CARROLL',
  },
  {
    i: 2238,
    d: 'SANTIAGO CASTRO',
  },
  {
    i: 2239,
    d: 'HENRY CASTRO, Queens',
  },
  {
    i: 2240,
    d: 'HENRY CASTRO',
  },
  {
    i: 2241,
    d: 'ULYSSESE “ULICES” CASTRO, Queens',
  },
  {
    i: 2242,
    d: 'ERESMILDO CATIBLANCO',
  },
  {
    i: 2243,
    d: 'JOSEPH CERAMI',
  },
  {
    i: 2244,
    d: 'JOSEPH CERIALE',
  },
  {
    i: 2245,
    d: 'LUCILLE CHAPMAN',
  },
  {
    i: 2246,
    d: 'EDWARD CHARLES, The Bronx',
  },
  {
    i: 2247,
    d: 'JOSE A FUENTES CHAVEZ',
  },
  {
    i: 2248,
    d: 'YEETANG CHEUNG',
  },
  {
    i: 2249,
    d: 'ERNIE CHUMPITAZ',
  },
  {
    i: 2250,
    d: 'MITTIE CLARK-JOHNSON, Brooklyn',
  },
  {
    i: 2251,
    d: 'RODOLFO COLON',
  },
  {
    i: 2252,
    d: 'CRISTIAN COLON',
  },
  {
    i: 2253,
    d: 'ROBERTO CORREA',
  },
  {
    i: 2254,
    d: 'PETER MICHAEL COSTA',
  },
  {
    i: 2255,
    d: 'CURTIS COVINGTON',
  },
  {
    i: 2256,
    d: 'CEASAR CRUZ',
  },
  {
    i: 2257,
    d: 'ZACARIAS DE LA CRUZ, Queens',
  },
  {
    i: 2258,
    d: 'GILDA CRUZ',
  },
  {
    i: 2259,
    d: 'CARLOS CRUZ',
  },
  {
    i: 2260,
    d: 'ZOILA CUZCO',
  },
  {
    i: 2261,
    d: 'JOHN DALESSANDRO',
  },
  {
    i: 2262,
    d: 'SALAJDIN DALIPI',
  },
  {
    i: 2263,
    d: 'WILBUR DAUGHTRY',
  },
  {
    i: 2264,
    d: 'HORACE DAVIS',
  },
  {
    i: 2265,
    d: 'CHARLOTTE DAVIS',
  },
  {
    i: 2266,
    d: 'LEONIDES DE JESUS, The Bronx',
  },
  {
    i: 2267,
    d: 'ANTONIA DIAZ',
  },
  {
    i: 2268,
    d: 'HORALIA PALESTINO DIAZ',
  },
  {
    i: 2269,
    d: 'ROLANDO DIAZ',
  },
  {
    i: 2270,
    d: 'FREDDY DIAZ',
  },
  {
    i: 2271,
    d: 'MIGUEL DIAZ',
  },
  {
    i: 2272,
    d: 'CRYSTAL DIXON',
  },
  {
    i: 2273,
    d: 'MICHELLE DONALDOSN, Manhattan',
  },
  {
    i: 2274,
    d: 'ESSIE DORSEY',
  },
  {
    i: 2275,
    d: 'EMILY DUNCAN, Brooklyn',
  },
  {
    i: 2276,
    d: 'JOHN HENRY EDINGER',
  },
  {
    i: 2277,
    d: 'ROBERT EDMOND, Brooklyn',
  },
  {
    i: 2278,
    d: 'WAYNE EDWARDS, Queens',
  },
  {
    i: 2279,
    d: 'JEAN EMILE, Brooklyn',
  },
  {
    i: 2280,
    d: 'ALFREDO ESPINAL, The Bronx',
  },
  {
    i: 2281,
    d: 'FELIX ESPINAL',
  },
  {
    i: 2282,
    d: 'ANGEL ESPINOZA',
  },
  {
    i: 2283,
    d: 'ALFREDO ESTRADA',
  },
  {
    i: 2284,
    d: 'ELMER ROMEL EUCEDA',
  },
  {
    i: 2285,
    d: 'VICTOR FATTORUSSO',
  },
  {
    i: 2286,
    d: 'JOSEPH FELDER',
  },
  {
    i: 2287,
    d: 'MIQUEL FELMINE',
  },
  {
    i: 2288,
    d: 'TAI-DRIN FENG',
  },
  {
    i: 2289,
    d: 'HARRY FERNANDEZ',
  },
  {
    i: 2290,
    d: 'LOUIS FERRER',
  },
  {
    i: 2291,
    d: 'BETTY FIGUEROA, The Bronx',
  },
  {
    i: 2292,
    d: 'VICENTA FLORES, Queens',
  },
  {
    i: 2293,
    d: 'CLEMENTINA MORA FLORES',
  },
  {
    i: 2294,
    d: 'URSULA FLOWERS, The Bronx',
  },
  {
    i: 2295,
    d: 'LIZ FONTANEZ',
  },
  {
    i: 2296,
    d: 'ALVIN FRAZIER',
  },
  {
    i: 2297,
    d: 'LEMUEL FRAZIER',
  },
  {
    i: 2298,
    d: 'WILLIE FREEMAN',
  },
  {
    i: 2299,
    d: 'CONCEPTIONE FUENTES',
  },
  {
    i: 2300,
    d: 'MOHAMMED GAFFAR',
  },
  {
    i: 2301,
    d: 'WILLIE FLORA GAINES, Queens',
  },
  {
    i: 2302,
    d: 'ELY GALAN, Brooklyn',
  },
  {
    i: 2303,
    d: 'FERNANDO GALLEGO',
  },
  {
    i: 2304,
    d: 'NECITAS GALURA',
  },
  {
    i: 2305,
    d: 'ANDRE GANTHIER',
  },
  {
    i: 2306,
    d: 'OLGA GARCIA, The Bronx',
  },
  {
    i: 2307,
    d: 'LEON GARRETT',
  },
  {
    i: 2308,
    d: 'SIMON WOLSEY GEORGE, The Bronx',
  },
  {
    i: 2309,
    d: 'HAROLD GERMAIN, Brooklyn',
  },
  {
    i: 2310,
    d: 'KENNETH GILLESPIE',
  },
  {
    i: 2311,
    d: 'HERSHUL GINN',
  },
  {
    i: 2312,
    d: 'GAIL GLASGOW',
  },
  {
    i: 2313,
    d: 'CAREN GOFF',
  },
  {
    i: 2314,
    d: 'SAUL GOMEZ, The Bronx',
  },
  {
    i: 2315,
    d: 'LUCIANO GOMEZ',
  },
  {
    i: 2316,
    d: 'MICHAEL GOMEZ',
  },
  {
    i: 2317,
    d: 'GIL GONZALES',
  },
  {
    i: 2318,
    d: 'JOSE MARTIN ROMERO GONZALEZ',
  },
  {
    i: 2319,
    d: 'MARIA GONZALEZ',
  },
  {
    i: 2320,
    d: 'DENNIS GOULDING, Brooklyn',
  },
  {
    i: 2321,
    d: 'HESTER GREEN, The Bronx',
  },
  {
    i: 2322,
    d: 'JACOB J. GREENBERG, Brooklyn',
  },
  {
    i: 2323,
    d: 'CLAUDE GREGOIRE',
  },
  {
    i: 2324,
    d: 'EUGENE GRIFFIN',
  },
  {
    i: 2325,
    d: 'JORGE GUAMAN',
  },
  {
    i: 2326,
    d: 'EDWIN GUAMAN, Queens',
  },
  {
    i: 2327,
    d: 'EDWIN P. GUAMAN',
  },
  {
    i: 2328,
    d: 'DANIEL GUILLERMO',
  },
  {
    i: 2329,
    d: 'JOSE GUTIERREZ',
  },
  {
    i: 2330,
    d: 'HUGO GUTIERREZ',
  },
  {
    i: 2331,
    d: 'SHMUEL HAKOHEN MILLER, Brooklyn',
  },
  {
    i: 2332,
    d: 'RONALD HALL',
  },
  {
    i: 2333,
    d: 'EARL HARRIS',
  },
  {
    i: 2334,
    d: 'CHARLES HARRIS',
  },
  {
    i: 2335,
    d: 'JANET HEADLEY',
  },
  {
    i: 2336,
    d: 'ALVIN HENDRICKS',
  },
  {
    i: 2337,
    d: 'MARCOS HERRERA',
  },
  {
    i: 2338,
    d: 'CARLOS ANDRADE HIDALGO',
  },
  {
    i: 2339,
    d: 'LIONEL HOGAN, Queens',
  },
  {
    i: 2340,
    d: 'ED HOLDER, Brooklyn',
  },
  {
    i: 2341,
    d: 'ANNABEL HOWELL, Brooklyn',
  },
  {
    i: 2342,
    d: 'MONIRUL HUDA, Queens',
  },
  {
    i: 2343,
    d: 'MOHAMMAD ZAKIR HUSSEIN, Queens',
  },
  {
    i: 2344,
    d: 'MARTIN IBARRA',
  },
  {
    i: 2345,
    d: 'PIETRO FABRICIO IDROVO VAZA, Queens',
  },
  {
    i: 2346,
    d: 'LEROI ISOM',
  },
  {
    i: 2347,
    d: 'CHRIS JACKOWSKI',
  },
  {
    i: 2348,
    d: 'RUSSELL JACKSON',
  },
  {
    i: 2349,
    d: 'MARIE JACQUES, The Bronx',
  },
  {
    i: 2350,
    d: 'CLAUDE JAMES, The Bronx',
  },
  {
    i: 2351,
    d: 'JESSICA JARAMILLO, Queens',
  },
  {
    i: 2352,
    d: 'NELSON JENKINS',
  },
  {
    i: 2353,
    d: 'FRANCISCO ARIZA JIMENEZ, Queens',
  },
  {
    i: 2354,
    d: 'CARLYLE JOHNSON',
  },
  {
    i: 2355,
    d: 'NOREEN JOHNSON',
  },
  {
    i: 2356,
    d: 'SHELLY JOHNSON',
  },
  {
    i: 2357,
    d: 'JOAN JOHNSON',
  },
  {
    i: 2358,
    d: 'JAMES JONES',
  },
  {
    i: 2359,
    d: 'JOHN JONES',
  },
  {
    i: 2360,
    d: 'DONALD JONES, Manhattan',
  },
  {
    i: 2361,
    d: 'LELAND JORDAN',
  },
  {
    i: 2362,
    d: 'JOHNNY JOYNER',
  },
  {
    i: 2363,
    d: 'ROGELIO JUSTIANIANO SR.',
  },
  {
    i: 2364,
    d: 'LEIBEL KATZ, Brooklyn',
  },
  {
    i: 2365,
    d: 'ALEXANDER KAUDERS, Brooklyn',
  },
  {
    i: 2366,
    d: 'ADVOCATE HAYAT ALI KHAN, Queens',
  },
  {
    i: 2367,
    d: 'MABIA KHATUN, The Bronx',
  },
  {
    i: 2368,
    d: 'SYED KHATUN, Queens',
  },
  {
    i: 2369,
    d: 'DEBORAH KING',
  },
  {
    i: 2370,
    d: 'SHIMON YEHOSHUA KLUGER, Brooklyn',
  },
  {
    i: 2371,
    d: 'FELICIA KNIGHT',
  },
  {
    i: 2372,
    d: 'PATRICK ANTONIO KNIGHT, The Bronx',
  },
  {
    i: 2373,
    d: 'SOOKNARINE LACHMINARAIN',
  },
  {
    i: 2374,
    d: 'EMANUEL LAGATTA',
  },
  {
    i: 2375,
    d: 'LUIS LEBRON',
  },
  {
    i: 2376,
    d: 'KEVIN LEE, Brooklyn',
  },
  {
    i: 2377,
    d: 'JOSE LEMA, Queens',
  },
  {
    i: 2378,
    d: 'MANUEL LIMA',
  },
  {
    i: 2379,
    d: 'SHIRLEY LINDSEY',
  },
  {
    i: 2380,
    d: 'LOUISE LLOYD, Brooklyn',
  },
  {
    i: 2381,
    d: 'LIDIA LOPEZ',
  },
  {
    i: 2382,
    d: 'ALBERTO LUCERO',
  },
  {
    i: 2383,
    d: 'ESTHER MAC, The Bronx',
  },
  {
    i: 2384,
    d: 'ANGEL MANUEL MAISONET, The Bronx',
  },
  {
    i: 2385,
    d: 'ANTHONY MALLANO, The Bronx',
  },
  {
    i: 2386,
    d: 'MARK MALONE',
  },
  {
    i: 2387,
    d: 'GARY MARBURY',
  },
  {
    i: 2388,
    d: 'MENDEL MARGULIS, Brooklyn',
  },
  {
    i: 2389,
    d: 'RAUL MARRERO',
  },
  {
    i: 2390,
    d: 'ALE MARTIN, Queens',
  },
  {
    i: 2391,
    d: 'JORGE SAN MARTIN',
  },
  {
    i: 2392,
    d: 'ALFREDO MARTINEZ, Queens',
  },
  {
    i: 2393,
    d: 'MARIA MINERVA MARTINEZ, Queens',
  },
  {
    i: 2394,
    d: 'CARMEN MARTINEZ, The Bronx',
  },
  {
    i: 2395,
    d: 'FORTUNATO MARTINEZ',
  },
  {
    i: 2396,
    d: 'OLIVERIO DANIEL MARÍN LÓPEZ',
  },
  {
    i: 2397,
    d: 'PATRICIA MASON, Brooklyn',
  },
  {
    i: 2398,
    d: 'HAROLD MAYS',
  },
  {
    i: 2399,
    d: 'JOHN MCDONALD',
  },
  {
    i: 2400,
    d: 'NICOLA MCINTYRE, Brooklyn',
  },
  {
    i: 2401,
    d: 'HEARLY MCKINNON',
  },
  {
    i: 2402,
    d: 'ENOS MCKOY',
  },
  {
    i: 2403,
    d: 'DORIS MCRAE, The Bronx',
  },
  {
    i: 2404,
    d: 'JUAN MEDINA',
  },
  {
    i: 2405,
    d: 'YOSEF MEHLER, Brooklyn',
  },
  {
    i: 2406,
    d: 'MARIA MENDOZA',
  },
  {
    i: 2407,
    d: 'ISHAQ MIAH, Queens',
  },
  {
    i: 2408,
    d: 'STEVEN MICHAEL',
  },
  {
    i: 2409,
    d: 'EVERETT MILES',
  },
  {
    i: 2410,
    d: 'MARIA MERCEDES MILLAN, The Bronx',
  },
  {
    i: 2411,
    d: 'MIRIAM MILLER, Brooklyn',
  },
  {
    i: 2412,
    d: 'JAMES MILTON',
  },
  {
    i: 2413,
    d: 'JOSE RICARDO “RIVERA” MINAN',
  },
  {
    i: 2414,
    d: 'EDUARDO MIRANDA',
  },
  {
    i: 2415,
    d: 'ORLANDO MONCADA',
  },
  {
    i: 2416,
    d: 'CARLOS MONCAYO',
  },
  {
    i: 2417,
    d: 'MARIA GARCIA MONTALBAN',
  },
  {
    i: 2418,
    d: 'HARRY MONTALVO',
  },
  {
    i: 2419,
    d: 'AGUSTIN MONTANEZ',
  },
  {
    i: 2420,
    d: 'HELEN MOODY',
  },
  {
    i: 2421,
    d: 'WILLIE MOORE',
  },
  {
    i: 2422,
    d: 'GLENTON MOORE, Brooklyn',
  },
  {
    i: 2423,
    d: 'JORGE O. MORALES, Queens',
  },
  {
    i: 2424,
    d: 'IMELDA MORENO-LUCERO',
  },
  {
    i: 2425,
    d: 'VIVIAN MOSS VOELPEL',
  },
  {
    i: 2426,
    d: 'ALBERT MUNGIN',
  },
  {
    i: 2427,
    d: 'JOSHUA W. MUNOZ, The Bronx',
  },
  {
    i: 2428,
    d: 'PEDRO MÁRQUEZ',
  },
  {
    i: 2429,
    d: 'HANSARAJ NANKISSURE, Queens',
  },
  {
    i: 2430,
    d: 'MARGARET ADAM NAREL, The Bronx',
  },
  {
    i: 2431,
    d: 'BENNY NASTASI',
  },
  {
    i: 2432,
    d: 'WENDEL NAVARRO',
  },
  {
    i: 2433,
    d: 'MICHAEL NELSON',
  },
  {
    i: 2434,
    d: 'FRANCISCO NÚÑEZ',
  },
  {
    i: 2435,
    d: "MICHAEL O'HAGAN",
  },
  {
    i: 2436,
    d: 'BLANCA “BLANQUITA” OLIVA TABORDA',
  },
  {
    i: 2437,
    d: 'BENJAMIN ONODU, Queens',
  },
  {
    i: 2438,
    d: 'KENNY ORTEGA',
  },
  {
    i: 2439,
    d: 'SUCY ORTIZ',
  },
  {
    i: 2440,
    d: 'FRANCISCO PACHECO',
  },
  {
    i: 2441,
    d: 'LUZ PALOMINO, Queens',
  },
  {
    i: 2442,
    d: 'ORLANDO PARRA',
  },
  {
    i: 2443,
    d: 'GIRISH PATEL',
  },
  {
    i: 2444,
    d: 'SERGE PAUL',
  },
  {
    i: 2445,
    d: 'VICENTE PAVIA, Staten Island',
  },
  {
    i: 2446,
    d: 'DOMINGO PEREZ RIVERA',
  },
  {
    i: 2447,
    d: 'DAVID PERSAUD',
  },
  {
    i: 2448,
    d: 'MICHAEL PETERSON',
  },
  {
    i: 2449,
    d: 'ADRIAN PHILLIPS',
  },
  {
    i: 2450,
    d: 'CINDY PICOU, Brooklyn',
  },
  {
    i: 2451,
    d: 'LIVETTE PLAN, Queens',
  },
  {
    i: 2452,
    d: 'JAMES POWERS, Queens',
  },
  {
    i: 2453,
    d: 'MAGGIE PRICE',
  },
  {
    i: 2454,
    d: 'URIAH PRYCE',
  },
  {
    i: 2455,
    d: 'FIDEL I. PULAGRIN',
  },
  {
    i: 2456,
    d: 'MANUEL SALVADOR PUMA',
  },
  {
    i: 2457,
    d: 'LUCY “MAMA” QUESADA, The Bronx',
  },
  {
    i: 2458,
    d: 'MOHAMMED RAHMAN, Queens',
  },
  {
    i: 2459,
    d: 'JOSE RAMOS, The Bronx',
  },
  {
    i: 2460,
    d: 'ANTONIA RAMOS',
  },
  {
    i: 2461,
    d: 'STEVE RANNAZZISI',
  },
  {
    i: 2462,
    d: 'TAZIN RASHED',
  },
  {
    i: 2463,
    d: 'HARUNUR RASHID, Queens',
  },
  {
    i: 2464,
    d: 'WESTLY REED',
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
    d: 'LEROY RIDDICK',
  },
  {
    i: 2469,
    d: 'MIGUEL RIVERA',
  },
  {
    i: 2470,
    d: 'RONALD ROBINSON',
  },
  {
    i: 2471,
    d: 'J.C. ROBINSON',
  },
  {
    i: 2472,
    d: 'WILLIAM RODRIGUEZ',
  },
  {
    i: 2473,
    d: 'OSCAR RODRIGUEZ',
  },
  {
    i: 2474,
    d: 'HUMBERTO RODRIGUEZ, Brooklyn',
  },
  {
    i: 2475,
    d: 'ANAVELIO RODRIGUEZ',
  },
  {
    i: 2476,
    d: 'STEVE J. RODRIGUEZ, Queens',
  },
  {
    i: 2477,
    d: 'MIGUEL RODRIGUEZ, Queens',
  },
  {
    i: 2478,
    d: 'EDWIN RODRIGUEZ',
  },
  {
    i: 2479,
    d: 'ROBERTO RODRIGUEZ',
  },
  {
    i: 2480,
    d: 'THOMAS RODRIGUEZ',
  },
  {
    i: 2481,
    d: 'EDDY RODRÍGUEZ',
  },
  {
    i: 2482,
    d: 'ROMAXI ROJAS',
  },
  {
    i: 2483,
    d: 'FRANKLIN ROLANDO',
  },
  {
    i: 2484,
    d: 'JOSÉ MARTÍN ROMERO GONZÁLEZ',
  },
  {
    i: 2485,
    d: 'RAYMOND ROSA',
  },
  {
    i: 2486,
    d: 'MARIO ROSA',
  },
  {
    i: 2487,
    d: 'MARIA MERCEDES ROSARIO, The Bronx',
  },
  {
    i: 2488,
    d: 'PETER ROSCONI, Brooklyn',
  },
  {
    i: 2489,
    d: 'MARVIN ROSENFELD',
  },
  {
    i: 2490,
    d: 'ABDUR ROUF, The Bronx',
  },
  {
    i: 2491,
    d: 'JOHNNY SABATER',
  },
  {
    i: 2492,
    d: 'BAQIR GILANI SAHIBZADA',
  },
  {
    i: 2493,
    d: 'WILLIAM SALES',
  },
  {
    i: 2494,
    d: 'JOSE SALMERON, Queens',
  },
  {
    i: 2495,
    d: 'JORGE SAN MARTIN, Queens',
  },
  {
    i: 2496,
    d: 'JULIO SANCHEZ',
  },
  {
    i: 2497,
    d: 'RICHARD MAURICIO SALINAS SANCHEZ',
  },
  {
    i: 2498,
    d: 'MARIA TERESA SANGUINETTI, The Bronx',
  },
  {
    i: 2499,
    d: 'EDWIN SANTIAGO',
  },
  {
    i: 2500,
    d: 'MING SANTO',
  },
  {
    i: 2501,
    d: 'MENACHEM MENDEL SCHLEISINGER, Brooklyn',
  },
  {
    i: 2502,
    d: 'ZVI YEHUDA SCHMIDT, Brooklyn',
  },
  {
    i: 2503,
    d: 'PAUL SEBASTIAN',
  },
  {
    i: 2504,
    d: 'YVES MANUEL SEGUI',
  },
  {
    i: 2505,
    d: 'ERNST SEVERE, Brooklyn',
  },
  {
    i: 2506,
    d: 'CHAIM SHROOT, Brooklyn',
  },
  {
    i: 2507,
    d: 'RIVKA RACHEL SICHERMAN, Brooklyn',
  },
  {
    i: 2508,
    d: 'JOHN SIEGEL',
  },
  {
    i: 2509,
    d: 'AARON SILBERSTEIN, Brooklyn',
  },
  {
    i: 2510,
    d: 'QUINSEY SIMPSON',
  },
  {
    i: 2511,
    d: 'REGINALD SMALL',
  },
  {
    i: 2512,
    d: 'CORRINE SMITH',
  },
  {
    i: 2513,
    d: 'JUDITH SMITH',
  },
  {
    i: 2514,
    d: 'SHARON SOCKWELL',
  },
  {
    i: 2515,
    d: 'EVE STEIN',
  },
  {
    i: 2516,
    d: 'RALPH STEINBERG',
  },
  {
    i: 2517,
    d: 'DUANE EDWARD STEWART, The Bronx',
  },
  {
    i: 2518,
    d: 'RAYMOND SUGRIM',
  },
  {
    i: 2519,
    d: 'SYLVAN SYLVESTER, Brooklyn',
  },
  {
    i: 2520,
    d: 'WILLIAM THOMAS, Manhattan',
  },
  {
    i: 2521,
    d: 'GENOVEVO “GENO” TLACZANI, Queens',
  },
  {
    i: 2522,
    d: 'MORENA TORREDES JAVINES',
  },
  {
    i: 2523,
    d: 'PEDRO TORRES',
  },
  {
    i: 2524,
    d: 'MIGUEL ANTONIO TORRES',
  },
  {
    i: 2525,
    d: 'MILLIE TORRES, The Bronx',
  },
  {
    i: 2526,
    d: 'JULIO TORRES',
  },
  {
    i: 2527,
    d: 'CARLOS TORRES',
  },
  {
    i: 2528,
    d: 'HECTOR TORREZ, Brooklyn',
  },
  {
    i: 2529,
    d: 'LIEM TRAN, Manhattan',
  },
  {
    i: 2530,
    d: 'TOMMY TRAWICK',
  },
  {
    i: 2531,
    d: 'JOSE TRINIDAD',
  },
  {
    i: 2532,
    d: 'WARREN TUCKER',
  },
  {
    i: 2533,
    d: 'DAWN TYSON',
  },
  {
    i: 2534,
    d: 'GIYASH UDDIN, The Bronx',
  },
  {
    i: 2535,
    d: 'ENAM UDDIN',
  },
  {
    i: 2536,
    d: 'MOHAMMAD OZI ULLAH (KUKON), Brooklyn',
  },
  {
    i: 2537,
    d: 'JOSÉ URUCHIMA, Queens',
  },
  {
    i: 2538,
    d: 'JAMILET VALENTE',
  },
  {
    i: 2539,
    d: 'SIRIACO ROLANDO VASQUEZ',
  },
  {
    i: 2540,
    d: 'SIRIACO ORLANDO VASQUEZ',
  },
  {
    i: 2541,
    d: 'JOSHUA VASQUEZ',
  },
  {
    i: 2542,
    d: 'JOSE G. VASQUEZ-HERRE',
  },
  {
    i: 2543,
    d: 'ALFREDO VEGAS',
  },
  {
    i: 2544,
    d: 'GREGORIO VELEZ',
  },
  {
    i: 2545,
    d: 'JULIAN MUNIZ VIDALS',
  },
  {
    i: 2546,
    d: 'GIROLAMO VILLAGGIO',
  },
  {
    i: 2547,
    d: 'DAVID VINE',
  },
  {
    i: 2548,
    d: 'JOSÉ VÁZQUEZ',
  },
  {
    i: 2549,
    d: 'DEWAINE WALTERS, The Bronx',
  },
  {
    i: 2550,
    d: 'PAUL WALTERS',
  },
  {
    i: 2551,
    d: 'JOCELYN WALTON',
  },
  {
    i: 2552,
    d: 'NAVIL WARREN',
  },
  {
    i: 2553,
    d: 'LORETTA WASHINGTON',
  },
  {
    i: 2554,
    d: 'EVELYN WATKINS',
  },
  {
    i: 2555,
    d: 'JAMES WATKINS',
  },
  {
    i: 2556,
    d: 'STEVEN WIGGINS, Queens',
  },
  {
    i: 2557,
    d: 'HEIDY WILCOX',
  },
  {
    i: 2558,
    d: 'JANET WILKES',
  },
  {
    i: 2559,
    d: 'PHILLIP WILLIAMS',
  },
  {
    i: 2560,
    d: 'KEVIN WILLIAMS',
  },
  {
    i: 2561,
    d: 'PETAL WILLIAMS RICHARDS',
  },
  {
    i: 2562,
    d: 'DORA WILSON',
  },
  {
    i: 2563,
    d: 'JOE WONG, Brooklyn',
  },
  {
    i: 2564,
    d: 'MING WONG, Brooklyn',
  },
  {
    i: 2565,
    d: 'JESUS “JAY” WONG',
  },
  {
    i: 2566,
    d: 'DENNIS ANTHONY WONGSANG',
  },
  {
    i: 2567,
    d: 'DONALD WOODSON',
  },
  {
    i: 2568,
    d: 'DAWN WORTHINGTON, Staten Island',
  },
  {
    i: 2569,
    d: 'CALVIN WRIGHT, The Bronx',
  },
  {
    i: 2570,
    d: 'MAI YING “SEAGULL” WU',
  },
  {
    i: 2571,
    d: 'ZALMAN YAAKOV, Brooklyn',
  },
  {
    i: 2572,
    d: 'DOVID MEIR YAKOV, Brooklyn',
  },
  {
    i: 2573,
    d: 'ALEXANDER YOUNG',
  },
  {
    i: 2574,
    d: 'ROBERT YOUNG',
  },
  {
    i: 2575,
    d: 'SARINA ZALMANOVICH, Queens',
  },
  {
    i: 2576,
    d: 'CARMEN ZAPATA, Brooklyn',
  },
  {
    i: 2577,
    d: 'JULIO ZHICAY, Queens',
  },
  {
    i: 2578,
    d: 'EDWIN ZHUNIO',
  },
  {
    i: 2579,
    d: 'WILLY ZUMARAN, Queens',
  },
  {
    i: 2580,
    d: 'MANUEL “MAX” ZUNIGA',
  },
  {
    i: 2581,
    d: 'SCOTT ZWIREN, Brooklyn',
  },
];

module.exports = { a_refs };
