const dataExample = [
          {
              "Etd_Id": "B185DAB0-0988-4D18-A970-CB54C9380E33",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "NDIAYE",
              "Etd_Prenom": "FATIMA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-07-19T00:00:00.000Z",
              "Etd_LieuNaissance": "DAKAR",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MBACKE",
              "Etd_Remarque": "CM1C-Registre 2155",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "022E0C1C-470A-4A92-904B-45B62C8345AE",
                      "Etd_Id": "B185DAB0-0988-4D18-A970-CB54C9380E33",
                      "Tut_Id": "00A588C6-258B-41A0-A711-04D76C99028D",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "00A588C6-258B-41A0-A711-04D76C99028D",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "ADAMA NDIAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771479051",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "EFAE5647-C65C-4509-BCBD-5E2EF0DF94C7",
                      "Etd_Id": "B185DAB0-0988-4D18-A970-CB54C9380E33",
                      "Tut_Id": "1B79975E-4D76-4424-8534-5D295D771E8A",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "1B79975E-4D76-4424-8534-5D295D771E8A",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDIAYE",
                          "Tut_Prenom": "MASSELE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771479051",
                          "Tut_Mail": "771479051",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "F0151303-2806-4E92-9AE4-3D81E420B717",
                          "Etd_Id": "B185DAB0-0988-4D18-A970-CB54C9380E33",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "1A8880F3-281D-4710-ABDC-AF6342A9C4CE",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "FALL",
              "Etd_Prenom": "MOULKHOUTE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-07-28T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "NDAM",
              "Etd_Remarque": "CM1C-Registre 2138",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "2ED57910-A817-4D63-B9D1-52A599E6A557",
                      "Etd_Id": "1A8880F3-281D-4710-ABDC-AF6342A9C4CE",
                      "Tut_Id": "BC007BE2-86E5-41A9-ACDA-053AE1DC8744",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "BC007BE2-86E5-41A9-ACDA-053AE1DC8744",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE AMY FALL",
                          "Tut_Adresse": null,
                          "Tut_Tel": "777690073",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "2A186B4A-091F-42E7-BCF3-0CB614C37054",
                      "Etd_Id": "1A8880F3-281D-4710-ABDC-AF6342A9C4CE",
                      "Tut_Id": "E6F1DCB7-8CC5-4E49-B636-E21833F3ED00",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "E6F1DCB7-8CC5-4E49-B636-E21833F3ED00",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "FALL",
                          "Tut_Prenom": "CHEIBANE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "709769162",
                          "Tut_Mail": "777690073",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "56025C41-717F-4AF2-A575-88F40D5784E3",
                          "Etd_Id": "1A8880F3-281D-4710-ABDC-AF6342A9C4CE",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "7E3E9FDB-8E2D-4F7A-BCE9-40F0BBCAD2C1",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "THIAM",
              "Etd_Prenom": "MAME DIARRA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-10-05T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "NDAM",
              "Etd_Remarque": "CM1C-Registre 2142",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "630EA3B2-EB1F-4002-9166-2FF03E24ECE6",
                      "Etd_Id": "7E3E9FDB-8E2D-4F7A-BCE9-40F0BBCAD2C1",
                      "Tut_Id": "BA6C8EA9-C9B5-4268-8BDA-09A1B329CE52",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "BA6C8EA9-C9B5-4268-8BDA-09A1B329CE52",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "KHADY TALL",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775509469",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "FAEE4D69-B71F-4745-95EE-8F3DD3B5B8BA",
                      "Etd_Id": "7E3E9FDB-8E2D-4F7A-BCE9-40F0BBCAD2C1",
                      "Tut_Id": "683C023A-ACE0-453B-9C94-423A03DDDCDF",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "683C023A-ACE0-453B-9C94-423A03DDDCDF",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "THIAM",
                          "Tut_Prenom": "MBACKE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776412077",
                          "Tut_Mail": "775509469",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "BFF1889B-2391-4220-B566-8C7F37B2D6D1",
                          "Etd_Id": "7E3E9FDB-8E2D-4F7A-BCE9-40F0BBCAD2C1",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "8BB956F2-2964-4D4B-A422-1F629D7E0CA6",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "SYLLA",
              "Etd_Prenom": "MAME DIARRA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-09-09T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "HELIPORT",
              "Etd_Remarque": "CM1C-Registre 2133",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "0AE352E7-B4C0-4DBC-A001-5AF87D6912F1",
                      "Etd_Id": "8BB956F2-2964-4D4B-A422-1F629D7E0CA6",
                      "Tut_Id": "9C8FDD45-0683-4AAD-BA74-0B300D25C326",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "9C8FDD45-0683-4AAD-BA74-0B300D25C326",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME DIARRA DIENG",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775010301",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "29FE2309-0B1E-4067-80A6-08265AD59A3D",
                      "Etd_Id": "8BB956F2-2964-4D4B-A422-1F629D7E0CA6",
                      "Tut_Id": "DFECE48F-1328-46D6-9B05-A866A1617C7E",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "DFECE48F-1328-46D6-9B05-A866A1617C7E",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "SYLLA",
                          "Tut_Prenom": "EL HADJI FALLOU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776387438",
                          "Tut_Mail": "775010301",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "297859E7-3E98-4A11-B2F3-459DB5AD75C7",
                          "Etd_Id": "8BB956F2-2964-4D4B-A422-1F629D7E0CA6",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "4A0118D1-CFB2-4334-9B50-36AD110F7A27",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIOP",
              "Etd_Prenom": "SOKHNA MAI",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2008-08-07T00:00:00.000Z",
              "Etd_LieuNaissance": "GUEDIAWAYE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2116",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "6C337A2F-5B89-4C0D-94FB-3B50A20BA617",
                      "Etd_Id": "4A0118D1-CFB2-4334-9B50-36AD110F7A27",
                      "Tut_Id": "C2433E25-B798-4707-88E7-0CD022822F9E",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "C2433E25-B798-4707-88E7-0CD022822F9E",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "SOKHNA DIAW",
                          "Tut_Adresse": null,
                          "Tut_Tel": "784794949",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "68D7512E-36B5-4B0A-A886-5FB9685F39B6",
                      "Etd_Id": "4A0118D1-CFB2-4334-9B50-36AD110F7A27",
                      "Tut_Id": "0AF52986-AE72-4881-B086-7A28355934CD",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "0AF52986-AE72-4881-B086-7A28355934CD",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIOP",
                          "Tut_Prenom": "BASSIROU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "770516202",
                          "Tut_Mail": "784794949",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "8A061C4E-D46D-4514-B5A3-D6D659DF0DAE",
                          "Etd_Id": "4A0118D1-CFB2-4334-9B50-36AD110F7A27",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "9AE0A90B-5D3A-40B7-A1D2-1CE20C3506E8",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "DIENG",
              "Etd_Prenom": "MOUHAMADOU MOUSTAPHA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-08-23T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DIANATOUL",
              "Etd_Remarque": "CM1C-Registre 2152",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "860C4004-9F23-435A-8B34-4EC4001ED681",
                      "Etd_Id": "9AE0A90B-5D3A-40B7-A1D2-1CE20C3506E8",
                      "Tut_Id": "8474697C-E030-440C-AC1C-0FB800731926",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "8474697C-E030-440C-AC1C-0FB800731926",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "DENISE DIOP",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774483469",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "F2920673-ED1D-4B28-ACFD-465F77613558",
                      "Etd_Id": "9AE0A90B-5D3A-40B7-A1D2-1CE20C3506E8",
                      "Tut_Id": "7D7F674C-0953-4357-A87A-8D3418552E5C",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "7D7F674C-0953-4357-A87A-8D3418552E5C",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIENG",
                          "Tut_Prenom": "MOMAR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773186660",
                          "Tut_Mail": "774483469",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "ABF1438A-5387-4EB3-AFA3-1CC053DB1995",
                          "Etd_Id": "9AE0A90B-5D3A-40B7-A1D2-1CE20C3506E8",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "E1732A2F-084A-43E9-8AC1-A644B63BBFCA",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "SEYE",
              "Etd_Prenom": "SOKHNA MARIEMOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-09-29T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU KHOUDOSS",
              "Etd_Remarque": "CM1C-Registre 2102",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "A929E405-F5F0-4DD8-9128-3C7CAAA51C70",
                      "Etd_Id": "E1732A2F-084A-43E9-8AC1-A644B63BBFCA",
                      "Tut_Id": "7D970676-002A-43F6-A29C-10A988C4DF23",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "7D970676-002A-43F6-A29C-10A988C4DF23",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME FATY NDIAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "763140034",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "FA953587-AC42-4CC3-BE77-236362148FD6",
                      "Etd_Id": "E1732A2F-084A-43E9-8AC1-A644B63BBFCA",
                      "Tut_Id": "4160F6D2-082D-43F6-A371-30CBCAB6D2FD",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "4160F6D2-082D-43F6-A371-30CBCAB6D2FD",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "SEYE",
                          "Tut_Prenom": "OUMAR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774222206",
                          "Tut_Mail": "763140034",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "0CC445B9-E80B-4B23-B045-E6837C5DE28B",
                          "Etd_Id": "E1732A2F-084A-43E9-8AC1-A644B63BBFCA",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "9D7E1862-21E3-410B-9CBF-35935DF369BC",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIOP",
              "Etd_Prenom": "THIANE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-07-30T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "HLM",
              "Etd_Remarque": "CM1C-Registre 2136",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "ADEC428F-BF18-4A12-A983-17D1497E4676",
                      "Etd_Id": "9D7E1862-21E3-410B-9CBF-35935DF369BC",
                      "Tut_Id": "D09DF05E-BA70-4D5E-8514-1186A8EAA7D3",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "D09DF05E-BA70-4D5E-8514-1186A8EAA7D3",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIOP",
                          "Tut_Prenom": "MAKHTAR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "772553592",
                          "Tut_Mail": "776412102",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "E85A9C91-7BDC-466F-B235-379B4797B2F5",
                      "Etd_Id": "9D7E1862-21E3-410B-9CBF-35935DF369BC",
                      "Tut_Id": "435A2C47-802E-4C74-8373-C387CE17D67E",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "435A2C47-802E-4C74-8373-C387CE17D67E",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "AMY NOGAYE DIOP",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776412102",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "5E6B7B50-6E5F-45DB-A2CF-ADCCF0ADEE06",
                          "Etd_Id": "9D7E1862-21E3-410B-9CBF-35935DF369BC",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "2ABC1D0D-0091-4A7B-9D53-EBD3B736D375",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIBA",
              "Etd_Prenom": "NDEYE NDAO",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-03-18T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MINAME",
              "Etd_Remarque": "CM1C-Registre 2122",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "B794C606-970A-4304-B18E-B3803F0DA759",
                      "Etd_Id": "2ABC1D0D-0091-4A7B-9D53-EBD3B736D375",
                      "Tut_Id": "701139F5-0299-4A68-9CC4-12D2C4B2C569",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "701139F5-0299-4A68-9CC4-12D2C4B2C569",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIBA",
                          "Tut_Prenom": "MAMADOU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "77 414 32 00",
                          "Tut_Mail": "781615978",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "E518445A-73DD-41FD-9C7B-BC80DAC32E24",
                      "Etd_Id": "2ABC1D0D-0091-4A7B-9D53-EBD3B736D375",
                      "Tut_Id": "B04F1CC7-3AC7-4CC6-B6EA-DF1B88AF73C7",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "B04F1CC7-3AC7-4CC6-B6EA-DF1B88AF73C7",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE FATOU FALL",
                          "Tut_Adresse": null,
                          "Tut_Tel": "781615978",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "AE1FF598-F475-4F90-95F7-7E8BC6197CEE",
                          "Etd_Id": "2ABC1D0D-0091-4A7B-9D53-EBD3B736D375",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "D42701CA-5116-49E3-A0A5-1C236C53BA02",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "AGNE",
              "Etd_Prenom": "SERIGNE FALLOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-10-26T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "HELIPORT",
              "Etd_Remarque": "CM1C-Registre 2105",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "DE90CDA0-BB1E-4C4C-93CE-D15A631634BA",
                      "Etd_Id": "D42701CA-5116-49E3-A0A5-1C236C53BA02",
                      "Tut_Id": "1DA8F842-828E-4F66-9570-15D176339457",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "1DA8F842-828E-4F66-9570-15D176339457",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME DIARRA BOUSSO NDAO",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775230009",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "F63D2883-EEA5-411B-82A8-1B940246C047",
                      "Etd_Id": "D42701CA-5116-49E3-A0A5-1C236C53BA02",
                      "Tut_Id": "37F17159-AAEC-45B3-999C-4A180E41BDDA",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "37F17159-AAEC-45B3-999C-4A180E41BDDA",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "AGNE",
                          "Tut_Prenom": "AMADOU SAMBA DAFA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775731386",
                          "Tut_Mail": "775230009",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "72294EFC-14CB-4D5E-B7E8-75549120407C",
                          "Etd_Id": "D42701CA-5116-49E3-A0A5-1C236C53BA02",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "91E5D99D-6AAC-4AF7-913F-7C3E3A70AF85",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "NDIAYE",
              "Etd_Prenom": "COUMBA BAKHAO",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-05-20T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU TANZIL",
              "Etd_Remarque": "CM1C-Registre 2120",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "52794994-3DC5-4A76-89FA-CD7375F0E931",
                      "Etd_Id": "91E5D99D-6AAC-4AF7-913F-7C3E3A70AF85",
                      "Tut_Id": "592FA33C-01EB-486E-8AAC-19E66D2EC226",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "592FA33C-01EB-486E-8AAC-19E66D2EC226",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDIAYE",
                          "Tut_Prenom": "ALIOUNE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776087777",
                          "Tut_Mail": "775125868",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "045523E9-9ECD-440A-943A-E7606B7C52FF",
                      "Etd_Id": "91E5D99D-6AAC-4AF7-913F-7C3E3A70AF85",
                      "Tut_Id": "4026FD93-2F05-4B5F-8CCF-423EA96AA189",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "4026FD93-2F05-4B5F-8CCF-423EA96AA189",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE MATY GUEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775125868",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "2B025B76-F62C-4BF7-AA7A-4E79A740CA34",
                          "Etd_Id": "91E5D99D-6AAC-4AF7-913F-7C3E3A70AF85",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "340B7A56-DFCE-41DD-8AB1-5E405238F53E",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "GAYE",
              "Etd_Prenom": "KHADY",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-11-11T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MANAN",
              "Etd_Remarque": "CM1C-Registre 2143",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "76239FA8-1432-4428-91B2-D27822B2E285",
                      "Etd_Id": "340B7A56-DFCE-41DD-8AB1-5E405238F53E",
                      "Tut_Id": "0CA68060-E0CD-4921-8898-1DF8C557BA38",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "0CA68060-E0CD-4921-8898-1DF8C557BA38",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "GAYE",
                          "Tut_Prenom": "SERIGNE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "763567845",
                          "Tut_Mail": "776723953",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "274729B4-EE0A-490C-B9A6-DD5AEEC8BFC9",
                      "Etd_Id": "340B7A56-DFCE-41DD-8AB1-5E405238F53E",
                      "Tut_Id": "EBCBF896-9B41-42CA-987F-61239C25FDAA",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "EBCBF896-9B41-42CA-987F-61239C25FDAA",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "BOUSSO GAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776723953",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "EB47A210-0CB9-4369-8CCC-1BFBF74901F6",
                          "Etd_Id": "340B7A56-DFCE-41DD-8AB1-5E405238F53E",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "286BBCD8-27F8-40F7-A8F6-9BFA0A376D9D",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "MBATHIE",
              "Etd_Prenom": "MOURTALLA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
              "Etd_LieuNaissance": "",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "SOURAH",
              "Etd_Remarque": "CM1C-Registre 2125",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "C27559CA-985C-416B-BDF3-F62164C40ED0",
                      "Etd_Id": "286BBCD8-27F8-40F7-A8F6-9BFA0A376D9D",
                      "Tut_Id": "5D7E3CD0-EBC9-4362-8016-273920C3DFB9",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "5D7E3CD0-EBC9-4362-8016-273920C3DFB9",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "MBATHIE",
                          "Tut_Prenom": "SIDY",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775113453",
                          "Tut_Mail": "777623779",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "4BC0B663-8589-4CAD-AFBB-40717195F0C6",
                      "Etd_Id": "286BBCD8-27F8-40F7-A8F6-9BFA0A376D9D",
                      "Tut_Id": "7C32C73D-A507-49FA-8D93-B99640B14069",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "7C32C73D-A507-49FA-8D93-B99640B14069",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "OUMY KANE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "777623779",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "DB1BBB8E-8054-4CCA-995A-E4C72E58D002",
                          "Etd_Id": "286BBCD8-27F8-40F7-A8F6-9BFA0A376D9D",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "91A3063F-3904-4922-97F6-FCF84B3DBE44",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "FALL",
              "Etd_Prenom": "NDEYE YACINE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-10-05T00:00:00.000Z",
              "Etd_LieuNaissance": "GUEDIAWAYE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "NDAM",
              "Etd_Remarque": "CM1C-Registre 2154",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "00E9D773-DE8C-4594-BABD-2CCD0A6381BC",
                      "Etd_Id": "91A3063F-3904-4922-97F6-FCF84B3DBE44",
                      "Tut_Id": "C81D3376-E83C-4557-9EFF-27AFEEF66A4A",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "C81D3376-E83C-4557-9EFF-27AFEEF66A4A",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "SEYNABOU TOURE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "781226649",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "BE21262F-90F6-4A43-9845-03498488827E",
                      "Etd_Id": "91A3063F-3904-4922-97F6-FCF84B3DBE44",
                      "Tut_Id": "AB036C94-75B1-4877-93BF-6A02C82A8489",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "AB036C94-75B1-4877-93BF-6A02C82A8489",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "FALL",
                          "Tut_Prenom": "KHALY",
                          "Tut_Adresse": null,
                          "Tut_Tel": "783139059",
                          "Tut_Mail": "781226649",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "88A1CD44-622F-4A29-BF0B-F42CA61829DC",
                          "Etd_Id": "91A3063F-3904-4922-97F6-FCF84B3DBE44",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "B5F5CAAF-F4AC-4F5D-80DC-A3F1F6883DA2",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "NDOYE",
              "Etd_Prenom": "MATY",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-12-20T00:00:00.000Z",
              "Etd_LieuNaissance": "YEUMBEUL",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "NDAM",
              "Etd_Remarque": "CM1C-Registre 2106",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "89169F66-BC49-4DF5-BBF9-31D656A545C0",
                      "Etd_Id": "B5F5CAAF-F4AC-4F5D-80DC-A3F1F6883DA2",
                      "Tut_Id": "06E5395C-48A0-4731-AB26-2A28CD00D051",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "06E5395C-48A0-4731-AB26-2A28CD00D051",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "FATOU DIOP",
                          "Tut_Adresse": null,
                          "Tut_Tel": "781547882",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "1AD3631F-CCE2-4C5F-AE46-F59BC54A6E6A",
                      "Etd_Id": "B5F5CAAF-F4AC-4F5D-80DC-A3F1F6883DA2",
                      "Tut_Id": "D82B5608-C23D-472B-BC55-6FFCE2BDD6D5",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "D82B5608-C23D-472B-BC55-6FFCE2BDD6D5",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDOYE",
                          "Tut_Prenom": "MAKANE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773010561",
                          "Tut_Mail": "781547882",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "57D1EDC9-C260-4DDB-9EC8-5D08800886FC",
                          "Etd_Id": "B5F5CAAF-F4AC-4F5D-80DC-A3F1F6883DA2",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "9DDD3D17-450D-40F7-9086-3CEC428BAA94",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "TOURE",
              "Etd_Prenom": "SOKHNA MBENE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-04-26T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU KHOUDOSS",
              "Etd_Remarque": "CM1C-Registre 2135",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "A2935A86-C56F-4F98-885C-6A1823A1446F",
                      "Etd_Id": "9DDD3D17-450D-40F7-9086-3CEC428BAA94",
                      "Tut_Id": "28D48269-7230-49E1-A10E-2BF185E9CAE4",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "28D48269-7230-49E1-A10E-2BF185E9CAE4",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "TOURE",
                          "Tut_Prenom": "SERIGNE FASS",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775485060",
                          "Tut_Mail": "773129898",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "14FF9C8F-408E-4F97-A10D-0A893D7FF4A6",
                      "Etd_Id": "9DDD3D17-450D-40F7-9086-3CEC428BAA94",
                      "Tut_Id": "C272C6FE-68DF-4B58-9121-E921BF1C10B4",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "C272C6FE-68DF-4B58-9121-E921BF1C10B4",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "S.AIDA DIAKHATE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773129898",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "A11BD003-835D-406C-A245-AF977A4D5654",
                          "Etd_Id": "9DDD3D17-450D-40F7-9086-3CEC428BAA94",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "5DC65313-BCA0-41BE-95B6-76EFF05EC9D8",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIOP",
              "Etd_Prenom": "ALIMA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-05-11T00:00:00.000Z",
              "Etd_LieuNaissance": "DAKAR",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MINAME",
              "Etd_Remarque": "CM1C-Registre 2131",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "14412347-172B-4F06-892A-20D5F98CD05F",
                      "Etd_Id": "5DC65313-BCA0-41BE-95B6-76EFF05EC9D8",
                      "Tut_Id": "EC9D450A-8FE8-46B4-8E49-2FBC60E3F6F9",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "EC9D450A-8FE8-46B4-8E49-2FBC60E3F6F9",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "AISSATOU DIBA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "770200000",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "0FE52432-9021-40F7-B3EF-5C17E355A494",
                      "Etd_Id": "5DC65313-BCA0-41BE-95B6-76EFF05EC9D8",
                      "Tut_Id": "D92931E5-5D38-4300-AFD1-4519803FBBD0",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "D92931E5-5D38-4300-AFD1-4519803FBBD0",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIOP",
                          "Tut_Prenom": "OUSMANE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "785349460",
                          "Tut_Mail": "770200000",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "1DFDFCDD-6723-484C-8059-948ACF042121",
                          "Etd_Id": "5DC65313-BCA0-41BE-95B6-76EFF05EC9D8",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "B1A13271-8D45-4E67-8E4F-5CF3ADB7D1CF",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIOUF",
              "Etd_Prenom": "KHADY DIAGNE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-10-06T00:00:00.000Z",
              "Etd_LieuNaissance": "BRESIL",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MINAME",
              "Etd_Remarque": "CM1C-Registre 2132",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "C10490DE-1BA3-45E5-8F65-F03A6C79B44A",
                      "Etd_Id": "B1A13271-8D45-4E67-8E4F-5CF3ADB7D1CF",
                      "Tut_Id": "E6D550F9-65C9-4D44-88E9-334DAB5AD323",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "E6D550F9-65C9-4D44-88E9-334DAB5AD323",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIOUF",
                          "Tut_Prenom": "MAME MOR BATOR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "779008922",
                          "Tut_Mail": "778500239",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "FA162895-56D3-447F-8776-79258A0943AD",
                      "Etd_Id": "B1A13271-8D45-4E67-8E4F-5CF3ADB7D1CF",
                      "Tut_Id": "359F567A-7BC0-46B0-92AB-8B18459982C4",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "359F567A-7BC0-46B0-92AB-8B18459982C4",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "YACINE MBOW",
                          "Tut_Adresse": null,
                          "Tut_Tel": "778500239",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "5DEDD1E6-2A83-4D94-92CA-BC2F14786F13",
                          "Etd_Id": "B1A13271-8D45-4E67-8E4F-5CF3ADB7D1CF",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "ADEB5C80-A058-4C74-82B2-FEF0B5D382FB",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "SECK",
              "Etd_Prenom": "FATIMA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-01-02T00:00:00.000Z",
              "Etd_LieuNaissance": "DAKAR",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "GARAGE DAROU",
              "Etd_Remarque": "CM1C-Registre 2139",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "BC4B536F-DB10-4710-80A5-3390BD2AD662",
                      "Etd_Id": "ADEB5C80-A058-4C74-82B2-FEF0B5D382FB",
                      "Tut_Id": "AA7EE563-6338-4174-990F-3668E9D54E1F",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "AA7EE563-6338-4174-990F-3668E9D54E1F",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "SECK",
                          "Tut_Prenom": "KHADIM",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773228727",
                          "Tut_Mail": "773228727",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "297A0A7B-44C4-40AD-86B2-EA6D1A440B56",
                      "Etd_Id": "ADEB5C80-A058-4C74-82B2-FEF0B5D382FB",
                      "Tut_Id": "DB1EEE34-7441-4EEB-BAB6-A58AD6B8F533",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "DB1EEE34-7441-4EEB-BAB6-A58AD6B8F533",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE FATOU SECK",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773228727",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "4D9030F9-F021-45C7-9845-7C9E684F3B81",
                          "Etd_Id": "ADEB5C80-A058-4C74-82B2-FEF0B5D382FB",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "6BACD3ED-78AA-42C3-A2E8-84E5DC3E438A",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "MBOW",
              "Etd_Prenom": "SERIGNE FALLOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-05-27T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MBACKE GAWANE",
              "Etd_Remarque": "CM1C-Registre 2147",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "7E0D8C4B-2516-4E6C-A332-0F01E74F5531",
                      "Etd_Id": "6BACD3ED-78AA-42C3-A2E8-84E5DC3E438A",
                      "Tut_Id": "57A8DE82-333C-4893-AF44-39DD7922A69D",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "57A8DE82-333C-4893-AF44-39DD7922A69D",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "DITY DIONGUE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775638610",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "F70FAE6B-842F-4C0D-937A-4423CC17293E",
                      "Etd_Id": "6BACD3ED-78AA-42C3-A2E8-84E5DC3E438A",
                      "Tut_Id": "627E802C-0FEC-4E70-B4B9-8A91ADA54F61",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "627E802C-0FEC-4E70-B4B9-8A91ADA54F61",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "MBOW",
                          "Tut_Prenom": "SERIGNE MBACKE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "779159690",
                          "Tut_Mail": "775638610",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "9756C3B5-CDA0-4641-971F-CEBD412B6563",
                          "Etd_Id": "6BACD3ED-78AA-42C3-A2E8-84E5DC3E438A",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "68ED12EB-3B59-40D1-B4D1-B73D0C4CEAD1",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIAGNE",
              "Etd_Prenom": "MAME DIARRA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-01-04T00:00:00.000Z",
              "Etd_LieuNaissance": "RIMINI",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2103",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "551BFC1D-62B9-45AC-AE1A-2A31816B4C08",
                      "Etd_Id": "68ED12EB-3B59-40D1-B4D1-B73D0C4CEAD1",
                      "Tut_Id": "09E33E78-48A9-4028-9134-3B75D86EA18D",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "09E33E78-48A9-4028-9134-3B75D86EA18D",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "SODA SUEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "772142226",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "B62656D9-242C-4BE4-A5D0-5320A396CBDB",
                      "Etd_Id": "68ED12EB-3B59-40D1-B4D1-B73D0C4CEAD1",
                      "Tut_Id": "FA3C0C5B-BD78-4E90-B446-6174675A2511",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "FA3C0C5B-BD78-4E90-B446-6174675A2511",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIAGNE",
                          "Tut_Prenom": "OMAR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771793919",
                          "Tut_Mail": "772142226",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "A520B0A0-C32D-403C-984B-312275E394F7",
                          "Etd_Id": "68ED12EB-3B59-40D1-B4D1-B73D0C4CEAD1",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "1020942F-A4E2-46B6-9016-A5687C5BE1A7",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIOP",
              "Etd_Prenom": "SOPHIE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-10-29T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "TOUBA MOSQUE",
              "Etd_Remarque": "CM1C-Registre 2121",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "BAE1517B-F4A2-461C-9FC2-FBD1D35E4F0E",
                      "Etd_Id": "1020942F-A4E2-46B6-9016-A5687C5BE1A7",
                      "Tut_Id": "DCC309B4-D945-4620-8499-46644AD3E72D",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "DCC309B4-D945-4620-8499-46644AD3E72D",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE MBACKE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776655588",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "0A94254D-968A-43C6-BD14-92CB8494CC3A",
                      "Etd_Id": "1020942F-A4E2-46B6-9016-A5687C5BE1A7",
                      "Tut_Id": "1E647E04-11EB-4284-8983-A4FF0070A57F",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "1E647E04-11EB-4284-8983-A4FF0070A57F",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIOP",
                          "Tut_Prenom": "EL HADJI",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776333222",
                          "Tut_Mail": "776655588",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "8D5D07CC-1D8F-4223-8100-F11B89A7241A",
                          "Etd_Id": "1020942F-A4E2-46B6-9016-A5687C5BE1A7",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "66C4B80C-8999-43D2-A256-2C035E9A06AC",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "NDIAYE",
              "Etd_Prenom": "NDEYE FATOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-03-08T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MADIYANA",
              "Etd_Remarque": "CM1C-Registre 2111",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "5581B855-ECDC-4942-B820-AF1FD7298C85",
                      "Etd_Id": "66C4B80C-8999-43D2-A256-2C035E9A06AC",
                      "Tut_Id": "B967B04B-CC72-4205-A066-4969D4408B70",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "B967B04B-CC72-4205-A066-4969D4408B70",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME ANTA SECK GUEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "781205729",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "4C9DC3E3-096B-4DD7-80D6-66513A4B8100",
                      "Etd_Id": "66C4B80C-8999-43D2-A256-2C035E9A06AC",
                      "Tut_Id": "052B3F84-4894-4C91-B895-78CDE30ED4BE",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "052B3F84-4894-4C91-B895-78CDE30ED4BE",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDIAYE",
                          "Tut_Prenom": "SERIGNE MODOU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773444442",
                          "Tut_Mail": "781205729",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "186225B7-5E80-41B7-A8C1-60BC587AFB64",
                          "Etd_Id": "66C4B80C-8999-43D2-A256-2C035E9A06AC",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "36F18B21-5FEB-4064-9BF8-422A45DE6062",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "NDOUR",
              "Etd_Prenom": "ABDOU KHADRE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-04-28T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2127",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "DE9715E8-AA51-42B2-BE86-47070CB15C9A",
                      "Etd_Id": "36F18B21-5FEB-4064-9BF8-422A45DE6062",
                      "Tut_Id": "9E47B763-10B4-418C-A1F5-4B9D5E4C8542",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "9E47B763-10B4-418C-A1F5-4B9D5E4C8542",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDOUR",
                          "Tut_Prenom": "OMAR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774563752",
                          "Tut_Mail": "773522511",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "9FEB1C94-B374-4687-AF4B-A778189FC12B",
                      "Etd_Id": "36F18B21-5FEB-4064-9BF8-422A45DE6062",
                      "Tut_Id": "4F47D285-69A9-48B6-8ADA-DEADCCDAB18A",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "4F47D285-69A9-48B6-8ADA-DEADCCDAB18A",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "DABA FAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773522511",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "17E5DE0B-CF7C-401A-A3C5-C38C754478D1",
                          "Etd_Id": "36F18B21-5FEB-4064-9BF8-422A45DE6062",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "C834E0D5-CD33-4429-B3C3-6EB1F8CDA864",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "LO",
              "Etd_Prenom": "MOUHAMET",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-12-18T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MANANE",
              "Etd_Remarque": "CM1C-Registre 2146",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "CFEA7856-C01B-4ABC-8705-296BD89EDFC8",
                      "Etd_Id": "C834E0D5-CD33-4429-B3C3-6EB1F8CDA864",
                      "Tut_Id": "6CA9D887-4933-4F49-B9CB-4C8C13518BEC",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "6CA9D887-4933-4F49-B9CB-4C8C13518BEC",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "THIOUBA NDIAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "778447980",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "D20ED41A-DCF7-4E56-BC5A-27068581B597",
                      "Etd_Id": "C834E0D5-CD33-4429-B3C3-6EB1F8CDA864",
                      "Tut_Id": "777DD6C7-A2A5-49DB-88C9-E9FA01473978",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "777DD6C7-A2A5-49DB-88C9-E9FA01473978",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "LO",
                          "Tut_Prenom": "CHEIKHOUNA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771981038",
                          "Tut_Mail": "778447980",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "14D13BB6-A55C-4AFF-94EB-FF83F083D419",
                          "Etd_Id": "C834E0D5-CD33-4429-B3C3-6EB1F8CDA864",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "0DC1169D-F7EE-4A42-BB9B-FA7BAE078EA3",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIOP",
              "Etd_Prenom": "COURA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2010-10-26T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MBACKE DIMB",
              "Etd_Remarque": "CM1C-Registre 2108",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "13AF29D3-3025-4C0B-B3A5-C980E2C0508A",
                      "Etd_Id": "0DC1169D-F7EE-4A42-BB9B-FA7BAE078EA3",
                      "Tut_Id": "5313E87E-FF54-4396-801D-4F27C4524EC7",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "5313E87E-FF54-4396-801D-4F27C4524EC7",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIOP",
                          "Tut_Prenom": "DAME",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771848454",
                          "Tut_Mail": "774011160",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "4E0DFCDF-A3A2-4225-8DDC-2D38855983CD",
                      "Etd_Id": "0DC1169D-F7EE-4A42-BB9B-FA7BAE078EA3",
                      "Tut_Id": "E3E21182-F20C-4C68-BDB1-B061C185CD5B",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "E3E21182-F20C-4C68-BDB1-B061C185CD5B",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE FATOU DIOP",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774011160",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "229B4B18-828F-41B7-AC0F-664BB3A4191B",
                          "Etd_Id": "0DC1169D-F7EE-4A42-BB9B-FA7BAE078EA3",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "B8918FDD-D4FA-4B2B-A5CE-FC8139EB882E",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "MBACKE",
              "Etd_Prenom": "SOKHNA MAI",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-09-30T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "NDAMATOU",
              "Etd_Remarque": "CM1C-Registre 2145",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "AC28FD4E-D9BF-43A9-9979-7727221B7A00",
                      "Etd_Id": "B8918FDD-D4FA-4B2B-A5CE-FC8139EB882E",
                      "Tut_Id": "79FF9EC6-DD73-4108-BD74-56161BE53B95",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "79FF9EC6-DD73-4108-BD74-56161BE53B95",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE FATOU SARR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "772662971",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "04296ACE-80D6-4A69-A9F0-44C3CB3AEE16",
                      "Etd_Id": "B8918FDD-D4FA-4B2B-A5CE-FC8139EB882E",
                      "Tut_Id": "3CFCE233-6AA0-44D1-84E3-EC3E6A05F2BC",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "3CFCE233-6AA0-44D1-84E3-EC3E6A05F2BC",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "MBACKE",
                          "Tut_Prenom": "SERIGNE MODOU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774518236",
                          "Tut_Mail": "772662971",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "14CCCC24-5709-4F4D-BA6F-E16A1B382E0E",
                          "Etd_Id": "B8918FDD-D4FA-4B2B-A5CE-FC8139EB882E",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "629137AD-8FB6-4AAD-981D-749DAB79BF4A",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "FAYE",
              "Etd_Prenom": "FATIMATOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-09-08T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DIANATOUL",
              "Etd_Remarque": "CM1C-Registre 2153",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "54DE2463-B96E-4EB3-B344-8399314FC552",
                      "Etd_Id": "629137AD-8FB6-4AAD-981D-749DAB79BF4A",
                      "Tut_Id": "FA080020-1C2F-41B5-918C-5793A09C68D3",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "FA080020-1C2F-41B5-918C-5793A09C68D3",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "FAYE",
                          "Tut_Prenom": "CHEIKHOUNA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "784555019",
                          "Tut_Mail": "775347729",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "98867534-8CF5-4445-A356-B20CBC33413A",
                      "Etd_Id": "629137AD-8FB6-4AAD-981D-749DAB79BF4A",
                      "Tut_Id": "3A6E5FBE-B9BA-49C8-8F03-C5267D3D9D57",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "3A6E5FBE-B9BA-49C8-8F03-C5267D3D9D57",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "SOUADOU MBOW",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775347729",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "A4AE17A2-BC35-4243-80BF-EE60AB49D279",
                          "Etd_Id": "629137AD-8FB6-4AAD-981D-749DAB79BF4A",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "AE09C704-9552-4BDA-A454-F9D847FA0791",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "KANE",
              "Etd_Prenom": "BOUSSO",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
              "Etd_LieuNaissance": "",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "",
              "Etd_Remarque": "CM1C-Registre 2128",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "293CC7F9-E12A-4A06-9CD9-EFFE7DA9603E",
                      "Etd_Id": "AE09C704-9552-4BDA-A454-F9D847FA0791",
                      "Tut_Id": "3A86D425-CA21-4875-BE1E-58B9837B23C9",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "3A86D425-CA21-4875-BE1E-58B9837B23C9",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "KHADY KA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771584497",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "A01143C3-3376-46A4-B293-C72EC6CDEF86",
                      "Etd_Id": "AE09C704-9552-4BDA-A454-F9D847FA0791",
                      "Tut_Id": "B6D3B27F-4F44-41AB-B0E7-9E2ACF8A2BE9",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "B6D3B27F-4F44-41AB-B0E7-9E2ACF8A2BE9",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "KANE",
                          "Tut_Prenom": "BASSIROU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "",
                          "Tut_Mail": "771584497",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "5EA399EE-B10A-4D50-AB02-D41EE2DD38ED",
                          "Etd_Id": "AE09C704-9552-4BDA-A454-F9D847FA0791",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "A61B1306-A58D-489E-9FD1-83F82A07F757",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "MBACKE",
              "Etd_Prenom": "SOPHI",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-11-15T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MBACKE KHEWAR",
              "Etd_Remarque": "CM1C-Registre 2114",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "B1DE14DF-2FE2-46EB-B485-5EC771E5E4D3",
                      "Etd_Id": "A61B1306-A58D-489E-9FD1-83F82A07F757",
                      "Tut_Id": "422A31BD-1C09-4ABF-83E8-619CC3C199A7",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "422A31BD-1C09-4ABF-83E8-619CC3C199A7",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "AWA MBACKE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774108593",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "B147EB32-203F-4E90-A1A1-595BC81AA27C",
                      "Etd_Id": "A61B1306-A58D-489E-9FD1-83F82A07F757",
                      "Tut_Id": "11E16F11-F35E-49B2-A4B3-F91A7E2F5F34",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "11E16F11-F35E-49B2-A4B3-F91A7E2F5F34",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "MBACKE",
                          "Tut_Prenom": "EL HADJI FALLOU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774925913",
                          "Tut_Mail": "774108593",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "10EF17A4-CE9F-41B7-8395-FA544866253F",
                          "Etd_Id": "A61B1306-A58D-489E-9FD1-83F82A07F757",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "244D4446-B38F-49F4-A3DF-4C0E663C96D9",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "SOW",
              "Etd_Prenom": "ADJIA MOKHTAR",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-09-21T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "NDAM",
              "Etd_Remarque": "CM1C-Registre 2107",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "277F7939-1544-4F64-B380-F9D5E6C0B9C2",
                      "Etd_Id": "244D4446-B38F-49F4-A3DF-4C0E663C96D9",
                      "Tut_Id": "2DF074CE-D12B-413D-A267-62A2271B5FA3",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "2DF074CE-D12B-413D-A267-62A2271B5FA3",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "SOW",
                          "Tut_Prenom": "THIERNO MANSOUR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "779310497",
                          "Tut_Mail": "775224729",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "5C91A565-9373-4221-B194-B75AEF77E811",
                      "Etd_Id": "244D4446-B38F-49F4-A3DF-4C0E663C96D9",
                      "Tut_Id": "1E843D95-5AC6-4416-ACCD-73F144D66105",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "1E843D95-5AC6-4416-ACCD-73F144D66105",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "KHADIDIA TOURE KANE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775224729",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "D8303C5A-1212-4E2A-B620-082B194B410F",
                          "Etd_Id": "244D4446-B38F-49F4-A3DF-4C0E663C96D9",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "C6852002-3C82-453C-9A04-1B20181B501D",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "NDIAYE",
              "Etd_Prenom": "SEYNABOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-02-10T00:00:00.000Z",
              "Etd_LieuNaissance": "PESCARA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU KHOUDOSS",
              "Etd_Remarque": "CM1C-Registre 2104",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "E063D09D-2DDC-4DF7-846E-76B31279113B",
                      "Etd_Id": "C6852002-3C82-453C-9A04-1B20181B501D",
                      "Tut_Id": "D82F6D7A-979F-4DA6-923B-6A419B88D7B0",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "D82F6D7A-979F-4DA6-923B-6A419B88D7B0",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MOUSLY LO",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774144277",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "565107D1-826E-4C5D-B20B-601773F697FC",
                      "Etd_Id": "C6852002-3C82-453C-9A04-1B20181B501D",
                      "Tut_Id": "3BA7D62F-6FFC-46AE-A26E-CE57854ACC79",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "3BA7D62F-6FFC-46AE-A26E-CE57854ACC79",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDIAYE",
                          "Tut_Prenom": "CHEIKH MBAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "765305868",
                          "Tut_Mail": "774144277",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "5C828426-4D17-44EA-87AD-E4394251178F",
                          "Etd_Id": "C6852002-3C82-453C-9A04-1B20181B501D",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "1E430748-2FE0-476B-BBE8-E7EC58E06AF1",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "NDIAYE",
              "Etd_Prenom": "ELHADJI FALLOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-03-11T00:00:00.000Z",
              "Etd_LieuNaissance": "DIOURBEL",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2101",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "2F153114-0FBA-4D93-A56D-A70588FBBA3B",
                      "Etd_Id": "1E430748-2FE0-476B-BBE8-E7EC58E06AF1",
                      "Tut_Id": "8A29F56F-0422-45AC-9C7C-6D65A1ED5EE9",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "8A29F56F-0422-45AC-9C7C-6D65A1ED5EE9",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "KHADY FARY DIOUF",
                          "Tut_Adresse": null,
                          "Tut_Tel": "777539562",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "A9FDBF5E-B8A8-4FCC-AD30-68F136813D15",
                      "Etd_Id": "1E430748-2FE0-476B-BBE8-E7EC58E06AF1",
                      "Tut_Id": "857F29F2-8547-47ED-A034-F2EBD3BEF3BD",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "857F29F2-8547-47ED-A034-F2EBD3BEF3BD",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDIAYE",
                          "Tut_Prenom": "THIERNO",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773529040",
                          "Tut_Mail": "777539562",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "89ED2E61-E418-479B-98BF-BC673A1B08ED",
                          "Etd_Id": "1E430748-2FE0-476B-BBE8-E7EC58E06AF1",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "7BE6C4D0-64E0-42DF-A6B5-E1F145AD25BE",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
              "Etd_Nom": "MBAYE",
              "Etd_Prenom": "MAIMOUNA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
              "Etd_LieuNaissance": "",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "",
              "Etd_Remarque": "CM1C-Registre 2115",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                  "Sex_Nom": "Undefined",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "219E5F1F-E03E-494C-A1A4-CC4436DE1AC5",
                      "Etd_Id": "7BE6C4D0-64E0-42DF-A6B5-E1F145AD25BE",
                      "Tut_Id": "CA231B58-7B65-4AE5-A59F-7390DA5AC6E5",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "CA231B58-7B65-4AE5-A59F-7390DA5AC6E5",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "MBAYE",
                          "Tut_Prenom": "",
                          "Tut_Adresse": null,
                          "Tut_Tel": "772518802",
                          "Tut_Mail": "",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "7FA480EE-BBD7-4812-AAC3-64B7EDABF074",
                      "Etd_Id": "7BE6C4D0-64E0-42DF-A6B5-E1F145AD25BE",
                      "Tut_Id": "4608A6BA-A7FD-4F6B-B2BA-F3AA75E9ED0B",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "4608A6BA-A7FD-4F6B-B2BA-F3AA75E9ED0B",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "",
                          "Tut_Adresse": null,
                          "Tut_Tel": "",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "E3DC35E1-2626-4C0C-AB53-65F107674C92",
                          "Etd_Id": "7BE6C4D0-64E0-42DF-A6B5-E1F145AD25BE",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "0CAF9A72-C618-48CC-83ED-06884A2AA023",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "FEDIOR",
              "Etd_Prenom": "MAME AWA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-04-23T00:00:00.000Z",
              "Etd_LieuNaissance": "Touba",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2141",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "3BDE250E-F0C3-43CD-A458-6B027D0AA270",
                      "Etd_Id": "0CAF9A72-C618-48CC-83ED-06884A2AA023",
                      "Tut_Id": "D1B3DE5D-A623-4B75-B8F9-77BEDA2EBE4D",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "D1B3DE5D-A623-4B75-B8F9-77BEDA2EBE4D",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "FEDIOR",
                          "Tut_Prenom": "BATHIE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "761418019",
                          "Tut_Mail": "782954476",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "CC1E12CC-E8EC-48F5-B9BE-01CE9FA9B8B5",
                      "Etd_Id": "0CAF9A72-C618-48CC-83ED-06884A2AA023",
                      "Tut_Id": "1AB87210-2A06-4F70-B7B8-B8DBE73E3B7E",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "1AB87210-2A06-4F70-B7B8-B8DBE73E3B7E",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "KHADY DIOP",
                          "Tut_Adresse": null,
                          "Tut_Tel": "782954476",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "C7CF3DF0-DAC2-4DA2-BFE9-E1EDD91850EE",
                          "Etd_Id": "0CAF9A72-C618-48CC-83ED-06884A2AA023",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "362578FA-BE50-4161-A96D-B482058CB14F",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "LO",
              "Etd_Prenom": "SOKHNA SAFIETOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-03-14T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "TOUBA 28",
              "Etd_Remarque": "CM1C-Registre 2140",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "D0FE0EC1-07C7-4283-8AEB-837AE2856F86",
                      "Etd_Id": "362578FA-BE50-4161-A96D-B482058CB14F",
                      "Tut_Id": "C63D0F87-B5A0-4582-981A-77E1452F0B16",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "C63D0F87-B5A0-4582-981A-77E1452F0B16",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME MAGUETTE LO",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774376270",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "768C8916-667C-4473-9F10-9B2F7DD51B95",
                      "Etd_Id": "362578FA-BE50-4161-A96D-B482058CB14F",
                      "Tut_Id": "46ACF50E-EB4C-48F2-9CA9-FA0580717E0F",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "46ACF50E-EB4C-48F2-9CA9-FA0580717E0F",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "LO",
                          "Tut_Prenom": "BASSIROU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "764698820",
                          "Tut_Mail": "774376270",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "1EB559F2-0D5F-4F91-85D3-C543CDB2F9E5",
                          "Etd_Id": "362578FA-BE50-4161-A96D-B482058CB14F",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "6321A11B-1BB6-43FD-8987-7EF56F88D7F2",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "SOW",
              "Etd_Prenom": "THIERNO AHMADOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-12-24T00:00:00.000Z",
              "Etd_LieuNaissance": "DIOURBEL",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "KEUR NIANG",
              "Etd_Remarque": "CM1C-Registre 2137",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "59AAD76F-CEBC-4A0B-8979-530023350DC0",
                      "Etd_Id": "6321A11B-1BB6-43FD-8987-7EF56F88D7F2",
                      "Tut_Id": "9056CB97-AEFC-444D-8C6D-82595458A128",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "9056CB97-AEFC-444D-8C6D-82595458A128",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "SOW",
                          "Tut_Prenom": "MOUSSA ABDOULAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776304069",
                          "Tut_Mail": "776893976",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "656CDCDE-747E-4E57-A0CA-F4079A81C142",
                      "Etd_Id": "6321A11B-1BB6-43FD-8987-7EF56F88D7F2",
                      "Tut_Id": "0DFAAD70-B4DE-4ADE-AD1E-E9B30D6BE0BA",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "0DFAAD70-B4DE-4ADE-AD1E-E9B30D6BE0BA",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "AISSATA BA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776893976",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "C243E0B1-2D0E-4A16-AF2C-C94D65C2A49F",
                          "Etd_Id": "6321A11B-1BB6-43FD-8987-7EF56F88D7F2",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "8017ECB8-DF2F-48E0-80C0-7C332B9F5AC5",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "DIATTARA",
              "Etd_Prenom": "MOUSTAPHA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-04-26T00:00:00.000Z",
              "Etd_LieuNaissance": "FATICK",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2144",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "9EAA2C14-64F7-46B0-9DD0-74BB74BBAD66",
                      "Etd_Id": "8017ECB8-DF2F-48E0-80C0-7C332B9F5AC5",
                      "Tut_Id": "4502EDDF-0EAC-4F7C-BE29-8294347F17E7",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "4502EDDF-0EAC-4F7C-BE29-8294347F17E7",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIATTARA",
                          "Tut_Prenom": "MATAR NDOUMBE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775437549",
                          "Tut_Mail": "771639350",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "73CB8DB1-DEE5-47DE-AB86-349C07E261A4",
                      "Etd_Id": "8017ECB8-DF2F-48E0-80C0-7C332B9F5AC5",
                      "Tut_Id": "5ADCC34D-5C3A-4B90-A72F-93218ECDCF7B",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "5ADCC34D-5C3A-4B90-A72F-93218ECDCF7B",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE MOUSLY DIATTARA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771639350",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "CDD81B53-B33C-4D8B-98E7-DA3CE3E03910",
                          "Etd_Id": "8017ECB8-DF2F-48E0-80C0-7C332B9F5AC5",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "1ADCE577-6879-45D6-872F-28FC7A1C0C24",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "NDIAYE",
              "Etd_Prenom": "MAME BOUSSO",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-04-03T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MADIYANA",
              "Etd_Remarque": "CM1C-Registre 2110",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "D4805309-AA79-4A64-A85F-225A20BD875F",
                      "Etd_Id": "1ADCE577-6879-45D6-872F-28FC7A1C0C24",
                      "Tut_Id": "8D696C49-95B8-4019-B5A8-8C4E65734153",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "8D696C49-95B8-4019-B5A8-8C4E65734153",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDIAYE",
                          "Tut_Prenom": "SERIGNE MODOU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773444442",
                          "Tut_Mail": "781205729",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "0E838BFA-5DD5-4433-A252-42CE602D4D8F",
                      "Etd_Id": "1ADCE577-6879-45D6-872F-28FC7A1C0C24",
                      "Tut_Id": "2DA55504-D553-4206-AEAC-B13B17037F52",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "2DA55504-D553-4206-AEAC-B13B17037F52",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME ANTA SECK GUEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "781205729",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "216D6AD7-16EC-4175-8137-CBD0DF815CDF",
                          "Etd_Id": "1ADCE577-6879-45D6-872F-28FC7A1C0C24",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "5A35E3CC-393E-424D-84BF-9DE342E7D072",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIAKHATE",
              "Etd_Prenom": "BINETA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-08-08T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "GARE BOU MAG",
              "Etd_Remarque": "CM1C-Registre 2119",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "B7D9FD2B-8999-40BF-82D4-9F232A726813",
                      "Etd_Id": "5A35E3CC-393E-424D-84BF-9DE342E7D072",
                      "Tut_Id": "517B349D-0389-40F8-8E59-8E3D75AB141E",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "517B349D-0389-40F8-8E59-8E3D75AB141E",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIAKHATE",
                          "Tut_Prenom": "MOUSSA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776871155",
                          "Tut_Mail": "704056250",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "71739FDF-B6AF-433C-9ABE-D76DCDACD209",
                      "Etd_Id": "5A35E3CC-393E-424D-84BF-9DE342E7D072",
                      "Tut_Id": "9CD9F57E-800B-41DE-9591-E038FEE6FE3D",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "9CD9F57E-800B-41DE-9591-E038FEE6FE3D",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "FATOU SYLLA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "704056250",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "38DA9847-5175-4418-ACD3-20DAEBB7CAD8",
                          "Etd_Id": "5A35E3CC-393E-424D-84BF-9DE342E7D072",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "06FB63AE-3844-44EB-AFA3-668CEA9E5850",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "GUEYE",
              "Etd_Prenom": "ADJI SOUKEYE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-07-10T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNAN",
              "Etd_Remarque": "CM1C-Registre 2113",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "ACDAFBEE-2762-488A-8A3F-D81D49AE01EE",
                      "Etd_Id": "06FB63AE-3844-44EB-AFA3-668CEA9E5850",
                      "Tut_Id": "4939CE7E-380E-43C2-85E4-8E83E9CD73E5",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "4939CE7E-380E-43C2-85E4-8E83E9CD73E5",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "ANTA GUEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "762821655",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "E8B02C62-9295-4B77-A2A7-914DE52C28A4",
                      "Etd_Id": "06FB63AE-3844-44EB-AFA3-668CEA9E5850",
                      "Tut_Id": "61AEFE44-0DB5-4C6C-B552-AB4CAB7502F9",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "61AEFE44-0DB5-4C6C-B552-AB4CAB7502F9",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "GUEYE",
                          "Tut_Prenom": "ABDOUKHADRE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "763305500",
                          "Tut_Mail": "762821655",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "A9B3AD20-689F-4E6E-9E73-59AA8C6DE092",
                          "Etd_Id": "06FB63AE-3844-44EB-AFA3-668CEA9E5850",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "5F55AB33-16D6-4AE6-B8CF-2C079B4EE4BF",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "SYLL",
              "Etd_Prenom": "NDEYE FATOU",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-02-12T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU KHOUDOSS",
              "Etd_Remarque": "CM1C-Registre 2150",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "B3C3403B-E6FB-42FA-AE7C-43115CE6F572",
                      "Etd_Id": "5F55AB33-16D6-4AE6-B8CF-2C079B4EE4BF",
                      "Tut_Id": "C7157AD8-54B3-4DF1-8FE4-966D0F1DF601",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "C7157AD8-54B3-4DF1-8FE4-966D0F1DF601",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "AMY SYLL",
                          "Tut_Adresse": null,
                          "Tut_Tel": "766717200",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "7008EAD1-B76E-4570-A3F0-474BF306D1CD",
                      "Etd_Id": "5F55AB33-16D6-4AE6-B8CF-2C079B4EE4BF",
                      "Tut_Id": "BA657947-D684-4219-8A1D-B1BF050B790D",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "BA657947-D684-4219-8A1D-B1BF050B790D",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "SYLL",
                          "Tut_Prenom": "MA FALL",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774285426",
                          "Tut_Mail": "766717200",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "7FF2B38E-139B-4D44-90C2-D4FC0A8DE056",
                          "Etd_Id": "5F55AB33-16D6-4AE6-B8CF-2C079B4EE4BF",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "7587C279-BC93-4160-8BCC-A5E71392A03C",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIBA",
              "Etd_Prenom": "NDACK",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-12-05T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MINAME",
              "Etd_Remarque": "CM1C-Registre 2123",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "F0377AA5-2ED9-49D6-90E6-52437A221342",
                      "Etd_Id": "7587C279-BC93-4160-8BCC-A5E71392A03C",
                      "Tut_Id": "1D2710DC-AE7B-4659-B0D1-9AE3DDDD09CE",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "1D2710DC-AE7B-4659-B0D1-9AE3DDDD09CE",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIBA",
                          "Tut_Prenom": "SERIGNE MBACKE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "784515021",
                          "Tut_Mail": "772300808",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "9DA7F1D6-F83F-4692-984E-0857DE4785FC",
                      "Etd_Id": "7587C279-BC93-4160-8BCC-A5E71392A03C",
                      "Tut_Id": "551822CC-7FB3-4453-83D8-D0C85C9779B9",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "551822CC-7FB3-4453-83D8-D0C85C9779B9",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "SOKHNA BEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "772300808",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "BA527D78-C186-43F7-B333-6D1A9599F060",
                          "Etd_Id": "7587C279-BC93-4160-8BCC-A5E71392A03C",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "1ACFCBE1-6D50-40CD-A644-A1802DD190A1",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "DIENG",
              "Etd_Prenom": "IBRAHIMA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2011-04-06T00:00:00.000Z",
              "Etd_LieuNaissance": "DAKAR",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2134",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "93285B61-7395-4E9D-B3F5-C3B475165429",
                      "Etd_Id": "1ACFCBE1-6D50-40CD-A644-A1802DD190A1",
                      "Tut_Id": "9B5C642F-F438-430F-A3E6-9E1BDEAA4CD9",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "9B5C642F-F438-430F-A3E6-9E1BDEAA4CD9",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIENG",
                          "Tut_Prenom": "MBAYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776193841",
                          "Tut_Mail": "777266568",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "BD9922D7-BBBB-4AEA-9512-BAF63430D74E",
                      "Etd_Id": "1ACFCBE1-6D50-40CD-A644-A1802DD190A1",
                      "Tut_Id": "F45172B7-BC8B-49D1-991B-ADFD266ED3B3",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "F45172B7-BC8B-49D1-991B-ADFD266ED3B3",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "FATIM DIAGNE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "777266568",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "EAD3483D-3E5D-4CC2-AF03-F02F26971E72",
                          "Etd_Id": "1ACFCBE1-6D50-40CD-A644-A1802DD190A1",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "684E1E05-E4BC-4652-B2D5-23D70248D7A0",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIA",
              "Etd_Prenom": "MAME DIARRA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-01-01T00:00:00.000Z",
              "Etd_LieuNaissance": "LIBREVILLE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "TALLY BOU BESS",
              "Etd_Remarque": "CM1C-Registre 2149",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "07C59288-C66B-449E-B215-652E0A5D7244",
                      "Etd_Id": "684E1E05-E4BC-4652-B2D5-23D70248D7A0",
                      "Tut_Id": "25929765-DC63-46D4-8D1C-A262159C88C7",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "25929765-DC63-46D4-8D1C-A262159C88C7",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIA",
                          "Tut_Prenom": "MBACKE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776817124",
                          "Tut_Mail": "776817124",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "EE475AE7-4ADB-42B5-839D-6960BC38ED25",
                      "Etd_Id": "684E1E05-E4BC-4652-B2D5-23D70248D7A0",
                      "Tut_Id": "07F6272D-E083-458A-BF4C-B9247DF889DB",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "07F6272D-E083-458A-BF4C-B9247DF889DB",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME DIARAR GUEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "776817124",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "EEE3932B-2E1D-432E-B164-719656000C15",
                          "Etd_Id": "684E1E05-E4BC-4652-B2D5-23D70248D7A0",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "5DBE28AE-16CC-496F-A2BD-3FFECB3C39DF",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "SARRE",
              "Etd_Prenom": "CHEIKHOUNA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
              "Etd_LieuNaissance": "",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2126",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "00FEDE31-C30D-42DE-AAB9-99A7B9EC6956",
                      "Etd_Id": "5DBE28AE-16CC-496F-A2BD-3FFECB3C39DF",
                      "Tut_Id": "838CBC97-A100-407D-9870-A2E0878EB707",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "838CBC97-A100-407D-9870-A2E0878EB707",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE FATOU THIAM",
                          "Tut_Adresse": null,
                          "Tut_Tel": "786025376",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "831A6567-7BE0-4F2A-AE79-5301F7648E18",
                      "Etd_Id": "5DBE28AE-16CC-496F-A2BD-3FFECB3C39DF",
                      "Tut_Id": "953112C9-2500-4B68-8457-BE1E64F87C6F",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "953112C9-2500-4B68-8457-BE1E64F87C6F",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "SARRE",
                          "Tut_Prenom": "OUSSEYNOU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "778368788",
                          "Tut_Mail": "786025376",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "F0EE1E34-17A9-43F9-B453-E3903AC6B1EF",
                          "Etd_Id": "5DBE28AE-16CC-496F-A2BD-3FFECB3C39DF",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "C0554CC5-4117-4607-8472-5D782FBA3700",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "LOUM",
              "Etd_Prenom": "MOR",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2014-10-25T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MBACKE",
              "Etd_Remarque": "CM1C-Registre 2118",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "B58B913D-E357-427D-B5E8-6139A4C94F3F",
                      "Etd_Id": "C0554CC5-4117-4607-8472-5D782FBA3700",
                      "Tut_Id": "251421AD-4DDD-452F-8D85-A59C9128C5BC",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "251421AD-4DDD-452F-8D85-A59C9128C5BC",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "LOUM",
                          "Tut_Prenom": "MOR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "765232064",
                          "Tut_Mail": "768782403",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "E25AA8BA-D77D-4B8F-9574-54211B380B4C",
                      "Etd_Id": "C0554CC5-4117-4607-8472-5D782FBA3700",
                      "Tut_Id": "E852F196-6B00-4798-A5CE-EF132522D815",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "E852F196-6B00-4798-A5CE-EF132522D815",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "BANE NIANG",
                          "Tut_Adresse": null,
                          "Tut_Tel": "768782403",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "4B0ADB3B-EFBD-4D4F-832F-F58C9F2BFCD0",
                          "Etd_Id": "C0554CC5-4117-4607-8472-5D782FBA3700",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "E17857CE-E50C-44C6-83D3-E1C07F535B0B",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIOP",
              "Etd_Prenom": "SOKHNA MAGUETTE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2008-08-07T00:00:00.000Z",
              "Etd_LieuNaissance": "GUEDIAWAYE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2117",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "30E14527-A816-43CC-B7AB-3800244D5594",
                      "Etd_Id": "E17857CE-E50C-44C6-83D3-E1C07F535B0B",
                      "Tut_Id": "1C907F30-688B-4116-956E-A8219E81B9BD",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "1C907F30-688B-4116-956E-A8219E81B9BD",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIOP",
                          "Tut_Prenom": "BASSIROU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "770516202",
                          "Tut_Mail": "784794949",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "79A47C6D-2913-4E54-98CB-FA3A7ECA4EA3",
                      "Etd_Id": "E17857CE-E50C-44C6-83D3-E1C07F535B0B",
                      "Tut_Id": "AEEDBF5E-9663-4BE2-8EC5-C695D198C2B5",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "AEEDBF5E-9663-4BE2-8EC5-C695D198C2B5",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "SOKHNA DIAW",
                          "Tut_Adresse": null,
                          "Tut_Tel": "784794949",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "73816970-6F7A-4A14-904B-F716D47CA034",
                          "Etd_Id": "E17857CE-E50C-44C6-83D3-E1C07F535B0B",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "74C1AAEE-EF18-4825-9300-A617EC10CEC1",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "DIAGNE",
              "Etd_Prenom": "CHEIKH BAMBA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2012-06-08T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2112",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "EAF1B2D8-D5EC-4CFD-899F-9738D967A409",
                      "Etd_Id": "74C1AAEE-EF18-4825-9300-A617EC10CEC1",
                      "Tut_Id": "701C8CAF-5DF8-428B-A313-AD48551F042C",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "701C8CAF-5DF8-428B-A313-AD48551F042C",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIAGNE",
                          "Tut_Prenom": "SOULEYMANE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774406598",
                          "Tut_Mail": "779076990",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "3EFA664F-4706-4105-9D85-0E5892E8A63E",
                      "Etd_Id": "74C1AAEE-EF18-4825-9300-A617EC10CEC1",
                      "Tut_Id": "FE3727BC-A5AE-42F2-9401-FA3B5D006189",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "FE3727BC-A5AE-42F2-9401-FA3B5D006189",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "NDEYE COURA NIANG",
                          "Tut_Adresse": null,
                          "Tut_Tel": "779076990",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "51188DEB-0331-4AA2-84B8-F2A5E02F4651",
                          "Etd_Id": "74C1AAEE-EF18-4825-9300-A617EC10CEC1",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "3A278C17-B852-4374-BB74-A29EC3F66C73",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIAW",
              "Etd_Prenom": "ARAME",
              "Etd_Matricule": "ARAD19122009",
              "Etd_Photo": null,
              "Etd_DateNaissance": "2009-12-19T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MANAN",
              "Etd_Remarque": "CM1C-Registre 2109",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "7F631876-7F7A-4865-8FCC-53ACF2433C55",
                      "Etd_Id": "3A278C17-B852-4374-BB74-A29EC3F66C73",
                      "Tut_Id": "345CD1E7-0ECF-441B-A861-B6E37D3B304B",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "345CD1E7-0ECF-441B-A861-B6E37D3B304B",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "SODA THIAM",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773862306",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "DA204399-F12A-4FFA-A871-238970AD401E",
                      "Etd_Id": "3A278C17-B852-4374-BB74-A29EC3F66C73",
                      "Tut_Id": "C89F6966-A0F4-4E58-85E4-C4EC3410DD56",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "C89F6966-A0F4-4E58-85E4-C4EC3410DD56",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIAW",
                          "Tut_Prenom": "ALLA COUMBA",
                          "Tut_Adresse": null,
                          "Tut_Tel": "766585034",
                          "Tut_Mail": "773862306",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "04AD3335-A26A-4E26-9FA2-BE940E4CE247",
                          "Etd_Id": "3A278C17-B852-4374-BB74-A29EC3F66C73",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "F64023BC-B09B-4824-9E36-FDCE9EBA1CD9",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "MBOUP",
              "Etd_Prenom": "MAME DIARRA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
              "Etd_LieuNaissance": "",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MARNANE",
              "Etd_Remarque": "CM1C-Registre 2129",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "DB8BD7C1-813F-4FE5-A83F-DEBF0B5F649B",
                      "Etd_Id": "F64023BC-B09B-4824-9E36-FDCE9EBA1CD9",
                      "Tut_Id": "CA8BCC92-CC55-4F7F-9A5D-BCC047B8AEDF",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "CA8BCC92-CC55-4F7F-9A5D-BCC047B8AEDF",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "MBOUP",
                          "Tut_Prenom": "BASSIROU",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775312876",
                          "Tut_Mail": "762704493",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "7E5D75B2-E2B3-459E-9188-08F3EF84D283",
                      "Etd_Id": "F64023BC-B09B-4824-9E36-FDCE9EBA1CD9",
                      "Tut_Id": "8EA6C7B4-149D-48F7-ADA2-F7213749F380",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "8EA6C7B4-149D-48F7-ADA2-F7213749F380",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MBACKE MBENGUE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "762704493",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "6CB2CAEC-0F4E-4E84-B259-D817D9E1D406",
                          "Etd_Id": "F64023BC-B09B-4824-9E36-FDCE9EBA1CD9",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "636D8717-68EB-4854-A45C-86E0107EF927",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "NDIAYE",
              "Etd_Prenom": "SEYDINA MOUHAMED",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-02-07T00:00:00.000Z",
              "Etd_LieuNaissance": "DAKAR",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "MBACKE",
              "Etd_Remarque": "CM1C-Registre 2148",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "92AF47B8-B1AD-4DFC-AD34-96089DB5D7F4",
                      "Etd_Id": "636D8717-68EB-4854-A45C-86E0107EF927",
                      "Tut_Id": "19D03485-42E1-48B1-861B-C1F8451F29B3",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "19D03485-42E1-48B1-861B-C1F8451F29B3",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "NDIAYE",
                          "Tut_Prenom": "ALIOUNE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "771835546",
                          "Tut_Mail": "774482838",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "DC32BCC4-53BF-4BE9-8254-E91F66732C83",
                      "Etd_Id": "636D8717-68EB-4854-A45C-86E0107EF927",
                      "Tut_Id": "57C56FEB-3CF5-43B7-86B2-DC0E48F94C3B",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "57C56FEB-3CF5-43B7-86B2-DC0E48F94C3B",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "ADJIA MASSAMBA GUEYE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774482838",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "21D10BF8-3058-4E4D-AFE2-EDB69FE3373A",
                          "Etd_Id": "636D8717-68EB-4854-A45C-86E0107EF927",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "0476F81B-5BFA-417B-B6C6-6BBC7D57A872",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "DIBA",
              "Etd_Prenom": "NDIOBA",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-04-05T00:00:00.000Z",
              "Etd_LieuNaissance": "TOUBA",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DAROU MINAME",
              "Etd_Remarque": "CM1C-Registre 2124",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "3C06D567-D78A-4FF7-89E9-9C3042D8D07F",
                      "Etd_Id": "0476F81B-5BFA-417B-B6C6-6BBC7D57A872",
                      "Tut_Id": "748BED6C-0CBB-418D-8AB7-C32BCE75069E",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "748BED6C-0CBB-418D-8AB7-C32BCE75069E",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIBA",
                          "Tut_Prenom": "CHEIKH",
                          "Tut_Adresse": null,
                          "Tut_Tel": "784515021",
                          "Tut_Mail": "772300808",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "1482CCE6-0210-455C-9D8C-8DAAE4A5F50A",
                      "Etd_Id": "0476F81B-5BFA-417B-B6C6-6BBC7D57A872",
                      "Tut_Id": "876B21A7-8EC5-4699-83E7-EF034400A62F",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "876B21A7-8EC5-4699-83E7-EF034400A62F",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME BOUSSO DIOP",
                          "Tut_Adresse": null,
                          "Tut_Tel": "772300808",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "375E1B56-E108-41CC-9A0E-FE182B9E6932",
                          "Etd_Id": "0476F81B-5BFA-417B-B6C6-6BBC7D57A872",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "4546DFEC-A12F-4CFE-B790-CA68B7A125FB",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
              "Etd_Nom": "DIENG",
              "Etd_Prenom": "ABDOURAHMANE",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "2013-08-23T00:00:00.000Z",
              "Etd_LieuNaissance": "MBACKE",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "DIANATOUL",
              "Etd_Remarque": "CM1C-Registre 2151",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                  "Sex_Nom": "Masculin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "2F1F5C45-0AF7-421A-B96E-6F8D5F108A40",
                      "Etd_Id": "4546DFEC-A12F-4CFE-B790-CA68B7A125FB",
                      "Tut_Id": "5595B4F8-ACED-45C6-994A-D124C19459C9",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "5595B4F8-ACED-45C6-994A-D124C19459C9",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "DIENG",
                          "Tut_Prenom": "MOMAR",
                          "Tut_Adresse": null,
                          "Tut_Tel": "773186660",
                          "Tut_Mail": "774483469",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "61B6EEFF-949F-4040-8C80-4A5F0ABBA2AB",
                      "Etd_Id": "4546DFEC-A12F-4CFE-B790-CA68B7A125FB",
                      "Tut_Id": "6E593086-80B3-4BA0-A823-E05AC20014CC",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "6E593086-80B3-4BA0-A823-E05AC20014CC",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "DENISE DIOP",
                          "Tut_Adresse": null,
                          "Tut_Tel": "774483469",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "6A983436-6419-48BE-831C-8D0FB7239D86",
                          "Etd_Id": "4546DFEC-A12F-4CFE-B790-CA68B7A125FB",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          },
          {
              "Etd_Id": "556E6B41-6221-4A11-895A-57E9FA419A2F",
              "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
              "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
              "Etd_Nom": "LO",
              "Etd_Prenom": "SOKHNA MOUSLY",
              "Etd_Matricule": null,
              "Etd_Photo": null,
              "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
              "Etd_LieuNaissance": "",
              "Etd_CIN": null,
              "Etd_Tel": null,
              "Etd_Mail": null,
              "Etd_Adresse": "NDAM",
              "Etd_Remarque": "CM1C-Registre 2130",
              "Etd_DateInscription": null,
              "sexeEtudiant": {
                  "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                  "Sex_Nom": "Feminin",
                  "Sex_Description": null
              },
              "etudiantTuteurs": [
                  {
                      "EtdTuteur_Id": "54EB4D7C-8B92-41FC-9AAA-7FE8DF042006",
                      "Etd_Id": "556E6B41-6221-4A11-895A-57E9FA419A2F",
                      "Tut_Id": "7C044AE4-8B74-4786-974A-F56A05D60888",
                      "LienParente": "Pére",
                      "EtdTuteur_ParDefault": true,
                      "TuteurEtudiant": {
                          "Tut_Id": "7C044AE4-8B74-4786-974A-F56A05D60888",
                          "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                          "Ecole_Id": null,
                          "Tut_Nom": "LO",
                          "Tut_Prenom": "IBRAHIMA KHALIL",
                          "Tut_Adresse": null,
                          "Tut_Tel": "775564299",
                          "Tut_Mail": "766401714",
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  },
                  {
                      "EtdTuteur_Id": "6EB2FE5F-0153-4047-829A-6F88C35F9C4F",
                      "Etd_Id": "556E6B41-6221-4A11-895A-57E9FA419A2F",
                      "Tut_Id": "A719FEC2-89F8-4A1B-9486-FE17C084D675",
                      "LienParente": "Mère",
                      "EtdTuteur_ParDefault": false,
                      "TuteurEtudiant": {
                          "Tut_Id": "A719FEC2-89F8-4A1B-9486-FE17C084D675",
                          "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                          "Ecole_Id": null,
                          "Tut_Nom": null,
                          "Tut_Prenom": "MAME BOUSSO MBACKE",
                          "Tut_Adresse": null,
                          "Tut_Tel": "766401714",
                          "Tut_Mail": null,
                          "Tut_CIN": null,
                          "Tut_Profession": null
                      }
                  }
              ],
              "ecoleEtudiant": {
                  "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                  "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
              },
              "classesEtudiant": [
                  {
                      "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B",
                      "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                      "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                      "EtudiantClasseAnnee": {
                          "EtdClasseAnn_Id": "827F98CD-FE0D-45BB-B360-77B5326191E2",
                          "Etd_Id": "556E6B41-6221-4A11-895A-57E9FA419A2F",
                          "ClasseAnn_Id": "688242D1-27F4-45E9-A67D-D62076C2492B"
                      },
                      "matieresClasseAnnee": [],
                      "AnneeClasse": {
                          "Cls_Id": "5B35EDB2-484B-4898-B9F1-4065BE1B2B46",
                          "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                          "Cls_Nom": "CM1-C",
                          "Classe_Description": null
                      }
                  }
              ]
          }
      ];


export default dataExample;