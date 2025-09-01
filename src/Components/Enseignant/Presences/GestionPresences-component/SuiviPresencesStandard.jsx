import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import DataTable from 'react-data-table-component';
import { Btn, H4 } from '../../../../AbstractElements';

const studentTableColumns = (handleStatusChange, handleRetardChange) => [
    {
        name: 'Matricule',
        selector: row => row.Etd_Remarque, // Etd_Matricule
        sortable: true,
    },
    {
        name: 'Nom',
        selector: row => row.Etd_Nom,
        sortable: true,
    },
    {
        name: 'Prénom',
        selector: row => row.Etd_Prenom,
        sortable: true,
    },
    {
        name: 'Classe',
        selector: row => 
            row.classesEtudiant && 
            Array.isArray(row.classesEtudiant) && 
            row.classesEtudiant[0]?.AnneeClasse 
                ? row.classesEtudiant[0].AnneeClasse.Cls_Nom 
                : 'Non défini',
        sortable: true,
    },
    {
        name: 'Statut',
        cell: row => (
            <select
                className="form-select"
                value={row.statut || 'Présent'}
                onChange={(e) => handleStatusChange(row.Etd_Id, e.target.value)}
            >
                <option value="Présent">Présent</option>
                <option value="Absent">Absent</option>
                <option value="Distanciel">Distanciel</option>
                <option value="Retard">Retard</option>
                <option value="Exclu">Exclu</option>
                <option value="Dispensé">Dispensé</option>
            </select>
        ),
    },
    {
        name: 'Minutes de Retard',
        cell: row =>
            row.statut === 'Retard' || row.statut === 'Exclu' ? (
                <input
                    type="number"
                    className="form-control"
                    value={row.retard || ''}
                    onChange={(e) => handleRetardChange(row.Etd_Id, e.target.value)}
                    placeholder="Minutes"
                    min="1"
                />
            ) : (
                '-'
            ),
    },
];

// const studentData = [
//     { id: 1, matricule: '20231001', nom: 'Dupont', prenom: 'Jean', classe: '3A' },
//     { id: 2, matricule: '20231002', nom: 'Durand', prenom: 'Marie', classe: '4B' },
//     { id: 3, matricule: '20231003', nom: 'Morel', prenom: 'Luc', classe: '5C' },
//     { id: 4, matricule: '20231004', nom: 'Fabre', prenom: 'Sophie', classe: '2D' },
// ];

const DataTableComponent = ({ selectedProfesseurId }) => {
    console.log("selectedProfesseurId", selectedProfesseurId);

    const [data, setData] = useState([]);

    useEffect(() => {
      const getEnseignants = async () => {
        try {
        //   const resp = await axios.get(
        //     `http://localhost:3002/api/etudiants/details/3FA85F64-5717-4562-B3FC-2C963F66AFA6`
        //   );

        const dataExemple = [
            {
                "Etd_Id": "0A7334B6-016A-49DB-88CC-0020E9AAD51A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIAW",
                "Etd_Prenom": "OMAR",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-09-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "",
                "Etd_Remarque": "CM2D-Registre 2599",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829",
                        "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "9D7D0590-1D40-4B45-A09E-E9F33C6E37A9",
                            "Etd_Id": "0A7334B6-016A-49DB-88CC-0020E9AAD51A",
                            "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "FC678AC2-8AF9-4A54-847E-00249E9F6D84",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "LO",
                "Etd_Prenom": "AHMADOU BAMBA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-01-16T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOU",
                "Etd_Remarque": "CM2C-Registre 2506",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": []
            },
            {
                "Etd_Id": "DAC09DEA-1281-4206-811E-00254F52C8E5",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NIANG",
                "Etd_Prenom": "SERIGNE MODOU MOUSTAPHA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-10-17T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MADYANA",
                "Etd_Remarque": "6eA-Registre 3379",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "E0536096-1F95-413B-9AF8-A51DEBCE8EAE",
                            "Etd_Id": "DAC09DEA-1281-4206-811E-00254F52C8E5",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "475601E7-2C2E-489F-AEFC-002891D86FEC",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "EL HADJI COUMBA DIOUF",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-06-07T00:00:00.000Z",
                "Etd_LieuNaissance": "ROSE BETHIO",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU TANZIL",
                "Etd_Remarque": "CE1C-Registre 1422",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "D3DB69B4-C416-4E18-9652-F4A7757B8013",
                        "Cls_Id": "6183EB20-E923-450D-A79B-774609287C11",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "D98C4DB4-7086-4CC4-8746-836D2C4DF8B5",
                            "Etd_Id": "475601E7-2C2E-489F-AEFC-002891D86FEC",
                            "ClasseAnn_Id": "D3DB69B4-C416-4E18-9652-F4A7757B8013"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "6183EB20-E923-450D-A79B-774609287C11",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "55AF349D-4C65-4C89-BB2A-003DC3635693",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SADIO",
                "Etd_Prenom": "MOUHAMED",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-01-11T00:00:00.000Z",
                "Etd_LieuNaissance": "kaolack",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MANAN",
                "Etd_Remarque": "CE2B-Registre 1687",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7",
                        "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A2C76F7B-D783-4750-842A-A3B6040409D4",
                            "Etd_Id": "55AF349D-4C65-4C89-BB2A-003DC3635693",
                            "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "207D5569-B2D9-4154-992D-00400963D53F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOMBOKHO",
                "Etd_Prenom": "AIDA DIOP",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-12-16T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "CM2A-Registre 2389",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829",
                        "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B6CAB9FD-7A49-481A-BA55-FCE2965E984F",
                            "Etd_Id": "207D5569-B2D9-4154-992D-00400963D53F",
                            "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "CD456E3A-37D2-41B3-9AC7-00497E1FF30D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "TOURE",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-02-09T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDIENE",
                "Etd_Remarque": "CM1A-Registre 1958",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062",
                        "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "5D8CE2B0-01DC-45FF-BBF9-41A9384697C2",
                            "Etd_Id": "CD456E3A-37D2-41B3-9AC7-00497E1FF30D",
                            "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4C7F97F7-24CD-47EB-ADE7-00509970BEB1",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "MBAYE",
                "Etd_Prenom": "BAYE ABDOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "CM2C-Registre 2508",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1",
                        "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "C58A1E56-FFE9-4EBB-8B12-B4B3495F7378",
                            "Etd_Id": "4C7F97F7-24CD-47EB-ADE7-00509970BEB1",
                            "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "39728614-38D7-4E81-9355-0070BC1284DD",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MOUHAMED NABY MOUSTAPHA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-05-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "PALLENE",
                "Etd_Remarque": "5eC-Registre 3875",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B",
                        "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B3BFF3C9-E219-499A-A24D-E3BBFA4B3F97",
                            "Etd_Id": "39728614-38D7-4E81-9355-0070BC1284DD",
                            "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "67D878CE-B695-4C4E-9584-0083F7533C23",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "THIAM",
                "Etd_Prenom": "MAME MAREME",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-10-10T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "CE2B-Registre 1689",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7",
                        "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A7C3B644-BCC1-4650-B949-634C11C503A8",
                            "Etd_Id": "67D878CE-B695-4C4E-9584-0083F7533C23",
                            "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "8FB98575-B41C-4BAE-BB7B-00AA9212A1D2",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "SERIGNE MOURTALLA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-08-15T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CID-Registre 751",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46",
                        "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A30FBF8E-3FAB-46D5-AA73-DD4C47C07B13",
                            "Etd_Id": "8FB98575-B41C-4BAE-BB7B-00AA9212A1D2",
                            "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4F305260-46A5-42A9-8A7F-00ED5B497142",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "KHOUMA",
                "Etd_Prenom": "KHADY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-12-31T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CPB-Registre 1005",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4FA3FB2F-FDB5-4BA6-9B3D-673B7CC754FC",
                            "Etd_Id": "4F305260-46A5-42A9-8A7F-00ED5B497142",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DF341F36-4AB3-429C-B754-00F0998C2151",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NIANG",
                "Etd_Prenom": "SODA SECK",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2020-09-07T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "MSB-Registre 261",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "4AD050FD-2196-4216-9B79-B8A1D4F83010",
                        "Cls_Id": "3F3F939E-00DD-4F2F-B3AC-A7C946EA8AA0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "8B1E7725-2D5A-420F-B787-316B91D3EF89",
                            "Etd_Id": "DF341F36-4AB3-429C-B754-00F0998C2151",
                            "ClasseAnn_Id": "4AD050FD-2196-4216-9B79-B8A1D4F83010"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "3F3F939E-00DD-4F2F-B3AC-A7C946EA8AA0",
                            "Niv_Id": "9A5EF238-A019-4512-998B-0A4AE5747160",
                            "Cls_Nom": "MOYENNE SECTION-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "90F33DC3-EDE2-4DDD-B5A3-00FCCCE95D3C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "CISSE",
                "Etd_Prenom": "FATOUMATOU ZAHRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-07-14T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "5eB-Registre 3735",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "9A3D81B1-76A4-4410-8AB9-689FCF6EAC47",
                        "Cls_Id": "38F4A43E-7825-48A6-9EAC-24B306F6A6BA",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "156026C9-871D-4D9C-BFF8-569DD9606E29",
                            "Etd_Id": "90F33DC3-EDE2-4DDD-B5A3-00FCCCE95D3C",
                            "ClasseAnn_Id": "9A3D81B1-76A4-4410-8AB9-689FCF6EAC47"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "38F4A43E-7825-48A6-9EAC-24B306F6A6BA",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "628D988D-59E4-40FD-97A4-0108A87913C9",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "CISSE",
                "Etd_Prenom": "PAPE MATAR",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-09-24T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CIB-Registre 561",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0",
                        "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4360F2BC-A188-4136-B382-7DC0FF6BCB93",
                            "Etd_Id": "628D988D-59E4-40FD-97A4-0108A87913C9",
                            "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "F7F02633-82D5-4F9F-9AC7-012A8AA3F994",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "LEYE",
                "Etd_Prenom": "ABDOU AZIZ",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-10-29T00:00:00.000Z",
                "Etd_LieuNaissance": "GUEDIAWAYE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "YONOU DAROU",
                "Etd_Remarque": "M1A-Registre 2781",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF",
                        "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "EB0711CA-0F22-4C43-A75A-185D0A8D2762",
                            "Etd_Id": "F7F02633-82D5-4F9F-9AC7-012A8AA3F994",
                            "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-A (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "D969C52A-669D-4D68-88FB-014B9BCB8AAD",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIENE",
                "Etd_Prenom": "SODA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDIENE",
                "Etd_Remarque": "6eC-Registre 3554",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4027BD19-A28A-4A92-9831-11F32C11AFA6",
                            "Etd_Id": "D969C52A-669D-4D68-88FB-014B9BCB8AAD",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C9A89D8E-DD8E-45F4-A897-0177837A805D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "CHEIKH MOUHAMED FADAL",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-08-10T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOUL",
                "Etd_Remarque": "M2C-Registre 3241",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E",
                        "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "036A48C8-0C3C-4E3B-BD93-713AFC35AE89",
                            "Etd_Id": "C9A89D8E-DD8E-45F4-A897-0177837A805D",
                            "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2C (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "A2FACBF5-D814-4B7C-A8D1-017CC7E78D5A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "THIOUNE",
                "Etd_Prenom": "SERIGNE SALIOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-11-13T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "6eB-Registre 3475",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "23EA5F97-DF48-424C-96C2-48C359AB4368",
                            "Etd_Id": "A2FACBF5-D814-4B7C-A8D1-017CC7E78D5A",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "3586F680-497D-41B7-9785-01812620D198",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DRAME",
                "Etd_Prenom": "KHODIA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-04-27T00:00:00.000Z",
                "Etd_LieuNaissance": "BOUCHRA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNAN",
                "Etd_Remarque": "CM1D-Registre 2230",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3",
                        "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F45BCA08-2868-464F-9F7A-EAB217575581",
                            "Etd_Id": "3586F680-497D-41B7-9785-01812620D198",
                            "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-D",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "D334FFAC-E548-43AB-BE16-018BBEFDC073",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "WADE",
                "Etd_Prenom": "SALIOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-12-21T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "CE2C-Registre 1780",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "BD564928-D9B8-4EF7-B6BF-C9AD375142E1",
                        "Cls_Id": "E922A652-AD7B-409E-A416-C52AC01E83D7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B371F0B3-BFFE-41DC-808A-2CC8B44686E6",
                            "Etd_Id": "D334FFAC-E548-43AB-BE16-018BBEFDC073",
                            "ClasseAnn_Id": "BD564928-D9B8-4EF7-B6BF-C9AD375142E1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E922A652-AD7B-409E-A416-C52AC01E83D7",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "71A33D9D-3E9A-49C9-8F0F-019F50996FC3",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "TORANI",
                "Etd_Prenom": "KHOUDIA HEMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-01-26T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSSS",
                "Etd_Remarque": "5eB-Registre 3783",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "9A3D81B1-76A4-4410-8AB9-689FCF6EAC47",
                        "Cls_Id": "38F4A43E-7825-48A6-9EAC-24B306F6A6BA",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DC29C00C-FA0F-4229-A72B-98EE34E3DFE9",
                            "Etd_Id": "71A33D9D-3E9A-49C9-8F0F-019F50996FC3",
                            "ClasseAnn_Id": "9A3D81B1-76A4-4410-8AB9-689FCF6EAC47"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "38F4A43E-7825-48A6-9EAC-24B306F6A6BA",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "49211688-883F-4CEF-B7EA-01A90D7AC0A3",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "AMAR",
                "Etd_Prenom": "MOUHAMED FADAL",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-02-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "CE1D-Registre 1471",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "74883D9E-D6A8-44DB-AA95-143BF4BF2019",
                        "Cls_Id": "67DAC720-1303-40EE-BEF3-9ADFD3D8FD78",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "0DCB1C79-1B44-47EB-9BE1-AEA895852E7C",
                            "Etd_Id": "49211688-883F-4CEF-B7EA-01A90D7AC0A3",
                            "ClasseAnn_Id": "74883D9E-D6A8-44DB-AA95-143BF4BF2019"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "67DAC720-1303-40EE-BEF3-9ADFD3D8FD78",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "51D5127A-B64D-4BC5-A804-01C460E2042D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDOUR",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2020-08-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "MSA-Registre 197",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41",
                        "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "7A228929-BAA4-4F3E-9A7A-EB385C7A72EF",
                            "Etd_Id": "51D5127A-B64D-4BC5-A804-01C460E2042D",
                            "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                            "Niv_Id": "9A5EF238-A019-4512-998B-0A4AE5747160",
                            "Cls_Nom": "MOYENNE SECTION-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "24BD9D84-64D5-4EA4-ABBF-01DBD59D7058",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "EL HADJI FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-07-31T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SONATEL",
                "Etd_Remarque": "M3A-Registre 2326",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5BDDE3FF-7341-444B-9962-65D9C79B61BE",
                        "Cls_Id": "69E4EC9B-7039-4767-ABEF-CD2983177202",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "9BC16D80-75F5-4864-911B-461C3AC40B72",
                            "Etd_Id": "24BD9D84-64D5-4EA4-ABBF-01DBD59D7058",
                            "ClasseAnn_Id": "5BDDE3FF-7341-444B-9962-65D9C79B61BE"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "69E4EC9B-7039-4767-ABEF-CD2983177202",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "M3 A (CM1- CM2 -E) ",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "6FB202FB-3AC9-4E76-8C23-01F58D563C57",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBAYE",
                "Etd_Prenom": "FATOU LEYE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-01-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "ALIEU",
                "Etd_Remarque": "CID-Registre 746",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46",
                        "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "5930EDB0-65EA-4DEA-8F28-B9F1456BC8D6",
                            "Etd_Id": "6FB202FB-3AC9-4E76-8C23-01F58D563C57",
                            "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "47ED8A49-2A6A-467C-B5D5-0208619536E5",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "AMINATA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-11-18T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "nguiranene",
                "Etd_Remarque": "CIA-Registre 470",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "47D4B354-EE56-407A-A45D-D36A54B9F6D4",
                        "Cls_Id": "245AA200-4A87-46A7-9380-337C102B3F76",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "303CFF62-E24F-43F1-9A0D-19C1E0016926",
                            "Etd_Id": "47ED8A49-2A6A-467C-B5D5-0208619536E5",
                            "ClasseAnn_Id": "47D4B354-EE56-407A-A45D-D36A54B9F6D4"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "245AA200-4A87-46A7-9380-337C102B3F76",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "5D4462EC-4A7D-44D5-8C2E-020F61E64DF2",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "BOUSSO",
                "Etd_Prenom": "SOKHNA DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-08-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA MOSQUEE",
                "Etd_Remarque": "M2B-Registre 3157",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3FB53002-6477-4B83-B89B-269FF9DAFCB7",
                        "Cls_Id": "D68E5052-6251-427F-8BFF-2CC12E0912EA",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "9A2DE133-7511-41AE-BE11-1C2815363E98",
                            "Etd_Id": "5D4462EC-4A7D-44D5-8C2E-020F61E64DF2",
                            "ClasseAnn_Id": "3FB53002-6477-4B83-B89B-269FF9DAFCB7"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D68E5052-6251-427F-8BFF-2CC12E0912EA",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2B (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "929DF690-0B38-4382-8045-021B8AE0D5DB",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "KHALIL",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-06-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GOUY SEW",
                "Etd_Remarque": "M1A-Registre 2784",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF",
                        "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "75C8074D-3239-4015-9808-36561FDE73CE",
                            "Etd_Id": "929DF690-0B38-4382-8045-021B8AE0D5DB",
                            "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-A (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "165207E6-5BA1-49CF-8F02-022057BFF0BF",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "LO",
                "Etd_Prenom": "KHADY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-08-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CE2D-Registre 1700",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650",
                        "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "BF36201C-2426-46D2-A97D-AE6861D9B711",
                            "Etd_Id": "165207E6-5BA1-49CF-8F02-022057BFF0BF",
                            "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "D09954D0-79D3-48B4-B2E2-0227F3B26810",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "BOUSSO",
                "Etd_Prenom": "SOKHNA WALO",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-10-11T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GUEDE",
                "Etd_Remarque": "M2A-Registre 3062",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "238B412F-BB76-47CE-B6D8-50F4C78C8DE9",
                        "Cls_Id": "D1BEBE40-BA42-401B-B01A-2BDF9A47545A",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4895CCCE-62F2-424E-B6C1-D02CC9849B30",
                            "Etd_Id": "D09954D0-79D3-48B4-B2E2-0227F3B26810",
                            "ClasseAnn_Id": "238B412F-BB76-47CE-B6D8-50F4C78C8DE9"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D1BEBE40-BA42-401B-B01A-2BDF9A47545A",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2A (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "FEC70D92-C274-499A-81C5-0240C1A0AA09",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SECK",
                "Etd_Prenom": "CHEIKHOUL KHADIM",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2020-11-08T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA 28",
                "Etd_Remarque": "PSB-Registre 121",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "33BDA512-3A34-4FC9-BF70-0AB06C172C11",
                        "Cls_Id": "0FCAE7B3-9A39-433A-9DE0-3B98FDFBBC5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "C3D0E250-D1E5-435A-A858-15420F044ABD",
                            "Etd_Id": "FEC70D92-C274-499A-81C5-0240C1A0AA09",
                            "ClasseAnn_Id": "33BDA512-3A34-4FC9-BF70-0AB06C172C11"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "0FCAE7B3-9A39-433A-9DE0-3B98FDFBBC5B",
                            "Niv_Id": "A2916F64-E243-4DF5-B19C-7237E1473E3A",
                            "Cls_Nom": "PETITE SECTION-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "90CB5D17-806D-4117-A1F6-02CA1C2E0D6F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NIANG",
                "Etd_Prenom": "NDEYE KHADY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNAN",
                "Etd_Remarque": "CE2B-Registre 1701",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7",
                        "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "BDE339E4-2C97-41BF-A74C-DF6B2E8531A0",
                            "Etd_Id": "90CB5D17-806D-4117-A1F6-02CA1C2E0D6F",
                            "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AEC4491D-37C7-499B-BFC8-02F939DDBD22",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "IBRAHIMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-12-11T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GARE BOU NDAW",
                "Etd_Remarque": "4eD-Registre 4173",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062",
                        "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "6FFAAEFB-1ACC-49B7-9DCA-4E82965D214F",
                            "Etd_Id": "AEC4491D-37C7-499B-BFC8-02F939DDBD22",
                            "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "2EBACB3C-878F-4FFF-B0F0-0311A2242957",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "MAME MAREME",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-09-08T00:00:00.000Z",
                "Etd_LieuNaissance": "DIOURBEL",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA2",
                "Etd_Remarque": "CPB-Registre 1008",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "5C5F4BDF-0ADA-4E4C-8D2E-002791C3020F",
                            "Etd_Id": "2EBACB3C-878F-4FFF-B0F0-0311A2242957",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "3387BAF8-D015-4D2B-A7F2-03364071EF4F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "LO",
                "Etd_Prenom": "BAYE DAME",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-05-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GOUYE MBIND",
                "Etd_Remarque": "5eC-Registre 3874",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B",
                        "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DF885163-C328-4337-843A-306A92449B9E",
                            "Etd_Id": "3387BAF8-D015-4D2B-A7F2-03364071EF4F",
                            "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1D67E5E4-FEFD-4DE2-BACE-0365BED28C08",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "MAME FATY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-06-30T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA NDIAREME",
                "Etd_Remarque": "CM1D-Registre 2256",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3",
                        "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F588E164-0A18-41BC-8619-12D84160D6E7",
                            "Etd_Id": "1D67E5E4-FEFD-4DE2-BACE-0365BED28C08",
                            "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-D",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AB5D62B9-6539-4000-BAF6-037F3BBD6ACA",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "MOUSTAPHA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-08-07T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "CORNICHE BELEL",
                "Etd_Remarque": "4eD-Registre 4218",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062",
                        "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "5DC5AD2B-5C37-4884-AD73-778282E3E46A",
                            "Etd_Id": "AB5D62B9-6539-4000-BAF6-037F3BBD6ACA",
                            "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C39235C0-6CD9-4AD2-AA74-038F670EF948",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "MBAYE",
                "Etd_Prenom": "SERIGNE BABACAR",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "6eB-Registre 3464",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "3871FFCD-0B37-40EA-9CB1-968DEC824504",
                            "Etd_Id": "C39235C0-6CD9-4AD2-AA74-038F670EF948",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AC63CFE7-DC46-4F4D-B825-03A871C008D9",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "BINTOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-02-05T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SONATEL",
                "Etd_Remarque": "M2B-Registre 3163",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3FB53002-6477-4B83-B89B-269FF9DAFCB7",
                        "Cls_Id": "D68E5052-6251-427F-8BFF-2CC12E0912EA",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4DCE8CA7-E3AB-4C57-9FCC-5D4A32F066B5",
                            "Etd_Id": "AC63CFE7-DC46-4F4D-B825-03A871C008D9",
                            "ClasseAnn_Id": "3FB53002-6477-4B83-B89B-269FF9DAFCB7"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D68E5052-6251-427F-8BFF-2CC12E0912EA",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2B (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "83B2F71A-7851-4E40-B035-03E08384B7D0",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "CHEIKHOUL KHADIM",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-07-31T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "GSB-Registre 380",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "49C628D6-15D8-44CF-AB6A-17C139AC3E62",
                        "Cls_Id": "50C716E3-DEDD-4DC2-9C5F-539A2FAD62BC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F9DDC5CC-D497-4BD4-8D56-E7935B17D040",
                            "Etd_Id": "83B2F71A-7851-4E40-B035-03E08384B7D0",
                            "ClasseAnn_Id": "49C628D6-15D8-44CF-AB6A-17C139AC3E62"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "50C716E3-DEDD-4DC2-9C5F-539A2FAD62BC",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "D414D788-9EA9-4EDB-892C-03F036D4D254",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "THIAKH",
                "Etd_Prenom": "ADJI MAGUETTE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-12-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU RAHMANE",
                "Etd_Remarque": "M2C-Registre 3219",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E",
                        "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "AE4559AD-505F-4E0E-B65D-0650A8C4065E",
                            "Etd_Id": "D414D788-9EA9-4EDB-892C-03F036D4D254",
                            "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2C (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "7313DFDE-C3FE-4D47-B527-0409102976F4",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SOURANG",
                "Etd_Prenom": "MAGUETTE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-07-31T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOU",
                "Etd_Remarque": "M1A-Registre 2765",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF",
                        "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "D2F6049D-D863-4DF9-8B23-09254534FE04",
                            "Etd_Id": "7313DFDE-C3FE-4D47-B527-0409102976F4",
                            "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-A (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "CB0FE100-85F3-4DE3-867D-0410A17CFD47",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "CODOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-10-06T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "6eA-Registre 3365",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF",
                        "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DDE12605-6641-4CE0-86E2-FC3BB00B95CD",
                            "Etd_Id": "CB0FE100-85F3-4DE3-867D-0410A17CFD47",
                            "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "712DFC76-C205-4538-A74A-0427B63B2FC8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "BAUBION",
                "Etd_Prenom": "MARIAMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-08-11T00:00:00.000Z",
                "Etd_LieuNaissance": "EVREAUX",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "ALIEU",
                "Etd_Remarque": "CPA-Registre 900",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "AABB2807-FD58-41DF-BBD2-AF18DDA4C1B1",
                        "Cls_Id": "A7B7DF9F-938E-4AA7-8655-F8F96C6F36AB",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "43F0438A-40B8-4315-9003-DD486D2FB6B9",
                            "Etd_Id": "712DFC76-C205-4538-A74A-0427B63B2FC8",
                            "ClasseAnn_Id": "AABB2807-FD58-41DF-BBD2-AF18DDA4C1B1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "A7B7DF9F-938E-4AA7-8655-F8F96C6F36AB",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C95F315D-E36F-419E-8017-045A4D5630DA",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIONGUE",
                "Etd_Prenom": "MARIAMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-07-23T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE PALLENE",
                "Etd_Remarque": "CIB-Registre 551",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0",
                        "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "74F29AC5-1555-47CD-B3B4-184723FADFEE",
                            "Etd_Id": "C95F315D-E36F-419E-8017-045A4D5630DA",
                            "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "EADE6315-66B9-437A-A0DA-04C619778EDC",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIAW",
                "Etd_Prenom": "NDEYE FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-01-08T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CE2D-Registre 1836",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650",
                        "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "D1E5E869-3452-40BA-A55C-A809EFCD4784",
                            "Etd_Id": "EADE6315-66B9-437A-A0DA-04C619778EDC",
                            "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "25BF264E-6A6F-4C52-BF68-05250931FFE6",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "CHEIKHOUNA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "YONOU DAROU",
                "Etd_Remarque": "M1C-Registre 2940",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "CC739C28-EC29-4258-9194-3CF3AF2DF37F",
                        "Cls_Id": "2DE43BE7-896C-478E-858F-3B608860AB4B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "57A7A089-7EE6-48FE-BCF8-2C6F615CCC3A",
                            "Etd_Id": "25BF264E-6A6F-4C52-BF68-05250931FFE6",
                            "ClasseAnn_Id": "CC739C28-EC29-4258-9194-3CF3AF2DF37F"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "2DE43BE7-896C-478E-858F-3B608860AB4B",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-C (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4FAE5BB6-7FDC-4387-93E4-0529D920488B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MOR",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHARA",
                "Etd_Remarque": "CPB-Registre 993",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A8AC2811-62B4-4EC9-AEA0-D2309CB467E8",
                            "Etd_Id": "4FAE5BB6-7FDC-4387-93E4-0529D920488B",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AFA1E5F5-62AC-493A-BF9E-054098090020",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "THIAM",
                "Etd_Prenom": "MAME CHEIKH ANTA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-02-14T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNAN",
                "Etd_Remarque": "M2C-Registre 3225",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E",
                        "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "2ED65E19-A06E-41A4-8A64-322FE61924AD",
                            "Etd_Id": "AFA1E5F5-62AC-493A-BF9E-054098090020",
                            "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2C (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "7EDDA4CD-ECFB-4477-891F-05439949DA35",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "NDEYE COURA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-07-27T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CE2D-Registre 1842",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650",
                        "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "40555A75-5A16-4DCD-B76D-68918937864B",
                            "Etd_Id": "7EDDA4CD-ECFB-4477-891F-05439949DA35",
                            "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "229576A8-8855-4949-A0F6-0558E299E152",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "SOKHNA MOUSLYMATOU MODOU BARA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-09-10T00:00:00.000Z",
                "Etd_LieuNaissance": "Dakar",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CE2A-Registre 1594",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49",
                        "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A947DAF3-0529-41B4-83E2-7B4A9180EC74",
                            "Etd_Id": "229576A8-8855-4949-A0F6-0558E299E152",
                            "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "91566056-A704-4BE9-A24C-0560FFC96A45",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-02-07T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GARE BOU MACK",
                "Etd_Remarque": "CE2A-Registre 1624",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49",
                        "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "10233FB3-4256-49AD-BE0B-E8F255F70951",
                            "Etd_Id": "91566056-A704-4BE9-A24C-0560FFC96A45",
                            "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "3DDF9218-55AA-447A-BD97-056937DEFCEE",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIATTARA",
                "Etd_Prenom": "SOKHNA MOUSLY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-10-16T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "3eC-Registre 4387",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378",
                        "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "CB7E47E3-5AC5-459B-8536-BDD2F6BB9CD5",
                            "Etd_Id": "3DDF9218-55AA-447A-BD97-056937DEFCEE",
                            "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "5FF7205C-B2B9-4314-94CB-056D7A6037F8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIAW",
                "Etd_Prenom": "SOKHNA AMY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-02-13T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIEMOUL",
                "Etd_Remarque": "CE2A-Registre 1609",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49",
                        "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "643D536B-25AA-4969-867B-81A33A7253BB",
                            "Etd_Id": "5FF7205C-B2B9-4314-94CB-056D7A6037F8",
                            "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "5C6B1E73-267A-4B6D-87F5-057A235E7CD3",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "MOUHSINATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-05-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "CE1D-Registre 1490",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "74883D9E-D6A8-44DB-AA95-143BF4BF2019",
                        "Cls_Id": "67DAC720-1303-40EE-BEF3-9ADFD3D8FD78",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "282A4411-550F-4A49-8374-E758C49061F1",
                            "Etd_Id": "5C6B1E73-267A-4B6D-87F5-057A235E7CD3",
                            "ClasseAnn_Id": "74883D9E-D6A8-44DB-AA95-143BF4BF2019"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "67DAC720-1303-40EE-BEF3-9ADFD3D8FD78",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C6CDAE60-A407-4561-B86C-05841F332A9B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "WALO",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-09-21T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "M1B-Registre 2859",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B",
                        "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "44ACA05E-D56E-4380-A027-47CDDA8F3545",
                            "Etd_Id": "C6CDAE60-A407-4561-B86C-05841F332A9B",
                            "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-B (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "EB6CDF60-CCC5-4575-B9CE-059593EBC4D8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "NDEYE FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-11-19T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "CPC-Registre 1097",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B",
                        "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "0297B40D-A552-4BAC-A619-65D0079434A2",
                            "Etd_Id": "EB6CDF60-CCC5-4575-B9CE-059593EBC4D8",
                            "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "8B8759DE-D6CC-44C4-A3D2-05A909E86A92",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-08-29T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "M2C-Registre 3220",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E",
                        "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "09B1CDB4-8FD1-481F-A011-5C67DBBF75A4",
                            "Etd_Id": "8B8759DE-D6CC-44C4-A3D2-05A909E86A92",
                            "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2C (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "63ED8C22-F00A-49A1-9EE0-05B9A525DA6B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SECK",
                "Etd_Prenom": "SOKHNA MAI",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-12-02T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SOURAH",
                "Etd_Remarque": "CID-Registre 730",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46",
                        "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DBF85C6D-F05B-40DB-99E8-A278B66E4252",
                            "Etd_Id": "63ED8C22-F00A-49A1-9EE0-05B9A525DA6B",
                            "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "61B70604-F6C0-4005-ADE5-05CA5BF04C68",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "SERIGNE MOURTALLA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-12-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU TANZIL",
                "Etd_Remarque": "M1B-Registre 2862",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B",
                        "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "41FFB7C3-41F3-45DE-8271-0E6D554331E8",
                            "Etd_Id": "61B70604-F6C0-4005-ADE5-05CA5BF04C68",
                            "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-B (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "8D0A82F9-3F97-4ADF-B39C-05CE168861B0",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MOUHAMED",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-04-06T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA 1",
                "Etd_Remarque": "M2A-Registre 3071",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "238B412F-BB76-47CE-B6D8-50F4C78C8DE9",
                        "Cls_Id": "D1BEBE40-BA42-401B-B01A-2BDF9A47545A",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4A56F5EB-6D0C-4A0C-A73B-6E18F58C1967",
                            "Etd_Id": "8D0A82F9-3F97-4ADF-B39C-05CE168861B0",
                            "ClasseAnn_Id": "238B412F-BB76-47CE-B6D8-50F4C78C8DE9"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D1BEBE40-BA42-401B-B01A-2BDF9A47545A",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2A (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "59AAF49F-4CD6-4193-AF5C-05EEB7EFCA25",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "BITEYE",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-12-11T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "6eB-Registre 3483",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "9E4A97E1-93CD-402B-AE12-DDD891D34D1D",
                            "Etd_Id": "59AAF49F-4CD6-4193-AF5C-05EEB7EFCA25",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "876E88C5-BC0A-4B41-BDDC-0634126C11E7",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "CHEIKH",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-09-19T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "CM2A-Registre 2381",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829",
                        "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "3C3EF358-D604-4075-82D1-A0ABF75548C0",
                            "Etd_Id": "876E88C5-BC0A-4B41-BDDC-0634126C11E7",
                            "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "266F21CA-DDCC-4DD9-9F85-063447DEC8D4",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "KANE",
                "Etd_Prenom": "DIOULDÉ",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-10-23T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "6eA-Registre 3385",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF",
                        "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "237AE3F9-23B2-4ACC-A29D-8D8E6E65E3E5",
                            "Etd_Id": "266F21CA-DDCC-4DD9-9F85-063447DEC8D4",
                            "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "D5D207F5-CE3A-48DF-8E41-06483CC99F9E",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "BADIANE",
                "Etd_Prenom": "NDEYE FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-01-29T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNAN",
                "Etd_Remarque": "5eA-Registre 3728",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063",
                        "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "8E5E1FC9-1885-4500-B744-32E3CE4B7940",
                            "Etd_Id": "D5D207F5-CE3A-48DF-8E41-06483CC99F9E",
                            "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C2981BD2-A817-4C21-B04A-06622E2D04D1",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NIANG",
                "Etd_Prenom": "ADJIA MARIAMA MARA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-11-23T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CPB-Registre 1004",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "19A2F1EF-E5D7-4498-B5AB-AA70D2FEA62A",
                            "Etd_Id": "C2981BD2-A817-4C21-B04A-06622E2D04D1",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "37DC5BAA-6667-4F42-82DF-067581B5E2DE",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBOUP",
                "Etd_Prenom": "YAYE BETY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-06-23T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "CPC-Registre 1081",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B",
                        "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "091A1D30-4FBE-47B2-8DB6-6331C0557A54",
                            "Etd_Id": "37DC5BAA-6667-4F42-82DF-067581B5E2DE",
                            "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-C",
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
                "Etd_Id": "A2AA528E-3284-4684-8DE6-0693C7152C2F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-12-14T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TINDODY",
                "Etd_Remarque": "6eC-Registre 3546",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "77B0F234-1D23-4C22-A82F-8B647483F141",
                            "Etd_Id": "A2AA528E-3284-4684-8DE6-0693C7152C2F",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "9B727D5F-F92D-43D8-A054-06DE1258B377",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "NDEYE DEBO",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-08-12T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "",
                "Etd_Remarque": "CPC-Registre 1142",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B",
                        "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "027A4A9F-9503-4F75-954F-A2BC9780BB3C",
                            "Etd_Id": "9B727D5F-F92D-43D8-A054-06DE1258B377",
                            "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "ADEA31F9-E313-4307-9A37-0703A3C5013D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SECK",
                "Etd_Prenom": "FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-12-31T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "M2A-Registre 3075",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "238B412F-BB76-47CE-B6D8-50F4C78C8DE9",
                        "Cls_Id": "D1BEBE40-BA42-401B-B01A-2BDF9A47545A",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F60854CC-2049-49DD-87CE-7CA5AE6EFCF0",
                            "Etd_Id": "ADEA31F9-E313-4307-9A37-0703A3C5013D",
                            "ClasseAnn_Id": "238B412F-BB76-47CE-B6D8-50F4C78C8DE9"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D1BEBE40-BA42-401B-B01A-2BDF9A47545A",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2A (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "2EFD0278-98C1-4B60-B0E0-0709FF4A0DCC",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "ADJA GARMY MBENGUE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-07-26T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU SALAM",
                "Etd_Remarque": "CM1B-Registre 2072",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "EFB78760-0D89-4B4A-9AFD-9B4CD21B22DE",
                        "Cls_Id": "B559DE9E-5D83-47A1-BF00-63FB4CC579F8",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "C821D349-2118-4D9B-AF2D-D887714E262D",
                            "Etd_Id": "2EFD0278-98C1-4B60-B0E0-0709FF4A0DCC",
                            "ClasseAnn_Id": "EFB78760-0D89-4B4A-9AFD-9B4CD21B22DE"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "B559DE9E-5D83-47A1-BF00-63FB4CC579F8",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AA837CBA-A1DD-4A02-838A-0714B5CB16F7",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "LO",
                "Etd_Prenom": "BOUSSO BALY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-01-24T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GOUY MBIND",
                "Etd_Remarque": "3eB-Registre 4338",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8",
                        "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A06BD9AB-1E90-409A-BF12-27B1AF466EE6",
                            "Etd_Id": "AA837CBA-A1DD-4A02-838A-0714B5CB16F7",
                            "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "7556FB0C-47ED-4C1E-8032-07160E71D79C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "LY",
                "Etd_Prenom": "FATIMATA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-08-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SONATEL",
                "Etd_Remarque": "CPC-Registre 1088",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B",
                        "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B939668F-0231-4D16-BEBA-41613EB40C52",
                            "Etd_Id": "7556FB0C-47ED-4C1E-8032-07160E71D79C",
                            "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "9A7BEFFD-CAE4-467D-9E8F-072E554BFCB2",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "DABA ROKHAYATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-10-23T00:00:00.000Z",
                "Etd_LieuNaissance": "Italie",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "",
                "Etd_Remarque": "CE2D-Registre 1869",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650",
                        "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "80FF7E7D-C797-4754-9A1B-04E22724B770",
                            "Etd_Id": "9A7BEFFD-CAE4-467D-9E8F-072E554BFCB2",
                            "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "493F79A3-3349-407E-892C-0774813FC829",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "MARIAMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-12-25T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOU",
                "Etd_Remarque": "6eC-Registre 3516",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "5DA0390A-941C-460A-BA02-669B5F8D7C2F",
                            "Etd_Id": "493F79A3-3349-407E-892C-0774813FC829",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "5480C462-4306-4189-91DE-079228CD77A3",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLL",
                "Etd_Prenom": "ANTA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2008-11-26T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "3eD-Registre 4487",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "908196D1-0ADF-41D5-8FF7-5E7533F975E9",
                        "Cls_Id": "3B93E8C4-7B69-497E-A301-AE6088151998",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "508FF944-BB68-4578-8296-513F8AE09B8F",
                            "Etd_Id": "5480C462-4306-4189-91DE-079228CD77A3",
                            "ClasseAnn_Id": "908196D1-0ADF-41D5-8FF7-5E7533F975E9"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "3B93E8C4-7B69-497E-A301-AE6088151998",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "E56E5666-532B-4DBA-A406-07956D8183FD",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "NDEYE AMY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-04-10T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "CPA-Registre 928",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "AABB2807-FD58-41DF-BBD2-AF18DDA4C1B1",
                        "Cls_Id": "A7B7DF9F-938E-4AA7-8655-F8F96C6F36AB",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F21A7588-88B9-48D9-BAFC-3E2A22FD24CD",
                            "Etd_Id": "E56E5666-532B-4DBA-A406-07956D8183FD",
                            "ClasseAnn_Id": "AABB2807-FD58-41DF-BBD2-AF18DDA4C1B1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "A7B7DF9F-938E-4AA7-8655-F8F96C6F36AB",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4B3051BC-E541-425A-9A8B-07B3F4639C97",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDIAYE ",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": "SERN2412-1",
                "Etd_Photo": null,
                "Etd_DateNaissance": "2007-12-15T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": "777901307",
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": null,
                "Etd_DateInscription": "2024-12-02",
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B",
                        "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "90E704B2-7C4F-4423-8D9A-326E6103206A",
                            "Etd_Id": "4B3051BC-E541-425A-9A8B-07B3F4639C97",
                            "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-B (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "15D74FE6-01D5-4499-898A-07D9CB4A28E4",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MOUHAMADOU MOUSTAPHA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-10-12T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "4eD-Registre 4183",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062",
                        "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "7789C67A-3D93-4F20-80CF-6631580042B3",
                            "Etd_Id": "15D74FE6-01D5-4499-898A-07D9CB4A28E4",
                            "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "EE088D1D-F275-46C3-943E-0801F79C3A83",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "KEITA",
                "Etd_Prenom": "NDEYE AWA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-01-28T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "BOFFELE",
                "Etd_Remarque": "5eA-Registre 3760",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063",
                        "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "849A19EC-51D8-4761-BC8D-E9A3E650939B",
                            "Etd_Id": "EE088D1D-F275-46C3-943E-0801F79C3A83",
                            "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "0A87D8FA-1CC3-4906-A0F9-0835CC722799",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIATTARA",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-08-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "4eC-Registre 4122",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875",
                        "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "C30DE0C2-A605-4160-9330-48DD2F2E05F6",
                            "Etd_Id": "0A87D8FA-1CC3-4906-A0F9-0835CC722799",
                            "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "9E361027-FB47-42DE-87FF-08A6F3B5872B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SECK",
                "Etd_Prenom": "NDIAYA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-11-10T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CM1D-Registre 2192",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3",
                        "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "C11A70AD-07B1-4830-B9FD-B93F03F599C5",
                            "Etd_Id": "9E361027-FB47-42DE-87FF-08A6F3B5872B",
                            "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-D",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "40BE85A3-2834-45AA-80F5-08AEF0D89D79",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SECK",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2006-12-03T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GARAGE DAROU",
                "Etd_Remarque": "6M-Registre 3621",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "7BF60D58-1199-4BD4-B8BE-7240B90B1043",
                        "Cls_Id": "E061A470-8D5F-43FC-B16E-7EA4A871D6B4",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "AE94D3AF-973D-4646-B7E1-33EE29F71134",
                            "Etd_Id": "40BE85A3-2834-45AA-80F5-08AEF0D89D79",
                            "ClasseAnn_Id": "7BF60D58-1199-4BD4-B8BE-7240B90B1043"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E061A470-8D5F-43FC-B16E-7EA4A871D6B4",
                            "Niv_Id": "6B23EA68-F455-4759-9495-BF21B435EB72",
                            "Cls_Nom": "6 MADILISSE",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AC6ABE3E-3CC3-4799-A13C-090C97539E7F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GOUMBALLE",
                "Etd_Prenom": "MOUHAMED",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-09-14T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA 2",
                "Etd_Remarque": "CID-Registre 749",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46",
                        "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "95C6AF5D-0BA3-45C0-B126-2907F880841D",
                            "Etd_Id": "AC6ABE3E-3CC3-4799-A13C-090C97539E7F",
                            "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "706B36A6-84A1-48B0-B883-0930D6D51779",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SEYE",
                "Etd_Prenom": "EL HADJI CHEIKH BAMBA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-08-22T00:00:00.000Z",
                "Etd_LieuNaissance": "Touba",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA NDIAREM",
                "Etd_Remarque": "CM1A-Registre 1984",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062",
                        "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4C873B66-B175-45EE-B0E0-12A4507F437C",
                            "Etd_Id": "706B36A6-84A1-48B0-B883-0930D6D51779",
                            "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "9299503A-C57D-4424-A8F4-0942380F904C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "BOUSSO",
                "Etd_Prenom": "SOKHNA KHADIJATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-09-03T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GUEDEE",
                "Etd_Remarque": "M1A-Registre 2755",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF",
                        "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "768E6341-732B-4302-BAE4-089C5D84EECE",
                            "Etd_Id": "9299503A-C57D-4424-A8F4-0942380F904C",
                            "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-A (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "7FBA67D6-D6E7-4061-B09D-0962D09C92E7",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOUM",
                "Etd_Prenom": "SERIGNE MOUSTAPHA THIEYTOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-06-08T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "3eC-Registre 4380",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378",
                        "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "2495F23F-ED3F-45E9-8DB0-27CF9EA03BDD",
                            "Etd_Id": "7FBA67D6-D6E7-4061-B09D-0962D09C92E7",
                            "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "A5D744FA-7505-425B-B1BD-096389C39B77",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "LOUM",
                "Etd_Prenom": "KHOUDIA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-05-26T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA 28",
                "Etd_Remarque": "CE2A-Registre 1621",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49",
                        "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "8FA78304-626B-4B5E-B723-E9C64964DF8E",
                            "Etd_Id": "A5D744FA-7505-425B-B1BD-096389C39B77",
                            "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "BBF0C494-2F37-43D1-9E08-0965FFB9D1A8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "ALIOUNE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-10-07T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "GSB-Registre 377",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "49C628D6-15D8-44CF-AB6A-17C139AC3E62",
                        "Cls_Id": "50C716E3-DEDD-4DC2-9C5F-539A2FAD62BC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "0E1B90CC-5E39-4077-8757-6974F45C1520",
                            "Etd_Id": "BBF0C494-2F37-43D1-9E08-0965FFB9D1A8",
                            "ClasseAnn_Id": "49C628D6-15D8-44CF-AB6A-17C139AC3E62"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "50C716E3-DEDD-4DC2-9C5F-539A2FAD62BC",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "423CB1AD-53BB-483C-A9E3-098221FAA3E3",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-10-02T00:00:00.000Z",
                "Etd_LieuNaissance": "Touba",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CE2D-Registre 1860",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650",
                        "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DC2ACEDF-7E0B-4AF0-B96C-031C79184841",
                            "Etd_Id": "423CB1AD-53BB-483C-A9E3-098221FAA3E3",
                            "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "0D9D8C6B-C4BB-4A77-8735-09899EE25D8B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "BINTOU RABY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-10-23T00:00:00.000Z",
                "Etd_LieuNaissance": "NIAMEY",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GUEDEE",
                "Etd_Remarque": "CPC-Registre 1083",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B",
                        "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DAA03BBC-06F2-4E0C-9407-33F350EB4E01",
                            "Etd_Id": "0D9D8C6B-C4BB-4A77-8735-09899EE25D8B",
                            "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "3210D025-292F-40F3-92A0-098A5B070B04",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDONG",
                "Etd_Prenom": "CHEIKH",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-02-08T00:00:00.000Z",
                "Etd_LieuNaissance": "TAMBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAME",
                "Etd_Remarque": "CPB-Registre 988",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "96F37583-D8BD-4F20-94FC-8FFECA16DD31",
                            "Etd_Id": "3210D025-292F-40F3-92A0-098A5B070B04",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1C5AA042-B575-4AB6-B6D1-09965209619D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "SOKHNA MBENE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-04-17T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU TANZIL",
                "Etd_Remarque": "M1B-Registre 2875",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B",
                        "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "BB401FFE-4838-46A8-9EFE-85E6DCBE52A3",
                            "Etd_Id": "1C5AA042-B575-4AB6-B6D1-09965209619D",
                            "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-B (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AAFC9E07-B052-4F2D-B9FB-099BAF95F0D5",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SALL",
                "Etd_Prenom": "SERIGNE SALIOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-09-16T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOU",
                "Etd_Remarque": "CPA-Registre 903",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "AABB2807-FD58-41DF-BBD2-AF18DDA4C1B1",
                        "Cls_Id": "A7B7DF9F-938E-4AA7-8655-F8F96C6F36AB",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "0A39D6CF-D71A-4437-BA8C-BD5D356232EB",
                            "Etd_Id": "AAFC9E07-B052-4F2D-B9FB-099BAF95F0D5",
                            "ClasseAnn_Id": "AABB2807-FD58-41DF-BBD2-AF18DDA4C1B1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "A7B7DF9F-938E-4AA7-8655-F8F96C6F36AB",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "85834512-F075-4230-AFC8-09B5EEEF592B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "EL HADJI MATAR",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-09-24T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "PALENE",
                "Etd_Remarque": "CM2D-Registre 2241",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "524D2D14-1851-468A-9B5F-769D7C0AD043",
                        "Cls_Id": "996B1BC0-0985-4D79-A09E-E3216BB323D5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "5E3A4091-00F3-4BD2-8C8C-C504766B54EA",
                            "Etd_Id": "85834512-F075-4230-AFC8-09B5EEEF592B",
                            "ClasseAnn_Id": "524D2D14-1851-468A-9B5F-769D7C0AD043"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "996B1BC0-0985-4D79-A09E-E3216BB323D5",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "D8B707CD-0050-42B7-B410-09CE2505E787",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "THIAM",
                "Etd_Prenom": "SODA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-09-20T00:00:00.000Z",
                "Etd_LieuNaissance": "Touba",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KEUR NIANG",
                "Etd_Remarque": "CM2B-Registre 2439",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "8D766850-28FC-4AC9-88EF-49B4230A686A",
                        "Cls_Id": "971D2040-E7AA-4C37-BFC7-8B97A2B7BB2A",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B11576B4-8414-4D94-AB88-271D8D06A898",
                            "Etd_Id": "D8B707CD-0050-42B7-B410-09CE2505E787",
                            "ClasseAnn_Id": "8D766850-28FC-4AC9-88EF-49B4230A686A"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "971D2040-E7AA-4C37-BFC7-8B97A2B7BB2A",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DC84FCAA-F933-4A5B-960C-09D1D8B85F39",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOUF",
                "Etd_Prenom": "CHEIKHOUNA MBACKE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-02-04T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CM2A-Registre 2356",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829",
                        "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "41C483BF-CBD7-4692-B3E3-F59FD1BF66DA",
                            "Etd_Id": "DC84FCAA-F933-4A5B-960C-09D1D8B85F39",
                            "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "03F71AEC-6C19-44A4-8EFF-09D5F2AE04A1",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIA",
                "Etd_Prenom": "DIATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-11-08T00:00:00.000Z",
                "Etd_LieuNaissance": "NDONDOL",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOU",
                "Etd_Remarque": "CPB-Registre 981",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "6495D00E-D43C-4DBE-AA6C-EE767149EDEF",
                            "Etd_Id": "03F71AEC-6C19-44A4-8EFF-09D5F2AE04A1",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4BCCCA53-C6CC-4CF5-B3DE-0A1CAD73983F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBAYE",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-03-02T00:00:00.000Z",
                "Etd_LieuNaissance": "DIOURBEL",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GOUYE ZIARE",
                "Etd_Remarque": "CM2C-Registre 2537",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1",
                        "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "E4FE073D-2636-48FF-B5B5-A064A21D9073",
                            "Etd_Id": "4BCCCA53-C6CC-4CF5-B3DE-0A1CAD73983F",
                            "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "92358D33-28AD-4473-A218-0A221416E699",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "MBATHIE",
                "Etd_Prenom": "CHEIKHOUNA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2008-02-03T00:00:00.000Z",
                "Etd_LieuNaissance": "Touba",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SOURAH",
                "Etd_Remarque": "4eD-Registre 4226",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062",
                        "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "6AA0D9CF-D2C6-45A2-8E5E-65BCD20A14A1",
                            "Etd_Id": "92358D33-28AD-4473-A218-0A221416E699",
                            "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "24E63514-1FB7-4008-9AF2-0A4BD99B707A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "MBAYE",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-11-01T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "M1B-Registre 2866",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B",
                        "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "5384AB49-9ECA-4AB4-9B8D-BD0BEE3599C3",
                            "Etd_Id": "24E63514-1FB7-4008-9AF2-0A4BD99B707A",
                            "ClasseAnn_Id": "A6048F46-C2DD-41B5-8D3A-FB44915C557B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1730A2D7-866F-4A88-9915-450D19381049",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-B (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "030E27BE-73A5-4D9E-A8F6-0A5A441419A8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "SOKHNA MAI",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-11-26T00:00:00.000Z",
                "Etd_LieuNaissance": "Touba",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GUEDE",
                "Etd_Remarque": "CM2A-Registre 2374",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829",
                        "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "0CAFDE46-22B6-49EC-83EC-5274B19B9712",
                            "Etd_Id": "030E27BE-73A5-4D9E-A8F6-0A5A441419A8",
                            "ClasseAnn_Id": "F531CFBD-FE6C-4D2E-B995-8CA0D00F7829"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D3DB40E4-9365-401B-8F75-F1A45A71E533",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "ED6C2EC7-76BB-4450-B1EC-0A6DA35C9EFE",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "THIAM",
                "Etd_Prenom": "FATOU KINE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-10-29T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "",
                "Etd_Remarque": "CIC-Registre 690",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "30BF12D3-B208-416F-9D38-93CB175F5797",
                        "Cls_Id": "C94C2871-5356-4EA6-81AF-A63719251E85",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "999951C0-FF1A-4A20-9A5A-C37048B03775",
                            "Etd_Id": "ED6C2EC7-76BB-4450-B1EC-0A6DA35C9EFE",
                            "ClasseAnn_Id": "30BF12D3-B208-416F-9D38-93CB175F5797"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C94C2871-5356-4EA6-81AF-A63719251E85",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "6D7B1834-AFD6-4D95-A66B-0A9D0B4DDCF2",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "CHEIKHOUNA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-04-04T00:00:00.000Z",
                "Etd_LieuNaissance": "Touba",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "darou marnane",
                "Etd_Remarque": "CM1A-Registre 1965",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062",
                        "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "1C03204C-EBE0-4335-84BF-98F540172B67",
                            "Etd_Id": "6D7B1834-AFD6-4D95-A66B-0A9D0B4DDCF2",
                            "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "7E2FB51E-F519-4510-B554-0ACF8031897C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "LO",
                "Etd_Prenom": "CHEIKH AHMADOU BAMBA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2021-04-11T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "HELIPORT",
                "Etd_Remarque": "PSA-Registre 22",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C546480B-5A98-4E36-AF91-D301D7FCE68D",
                        "Cls_Id": "C15680BC-E9A5-45D3-A6FB-4F781ADE9DF9",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F7B28105-8B81-4688-964B-1949B33A7C26",
                            "Etd_Id": "7E2FB51E-F519-4510-B554-0ACF8031897C",
                            "ClasseAnn_Id": "C546480B-5A98-4E36-AF91-D301D7FCE68D"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C15680BC-E9A5-45D3-A6FB-4F781ADE9DF9",
                            "Niv_Id": "A2916F64-E243-4DF5-B19C-7237E1473E3A",
                            "Cls_Nom": "PETITE SECTION-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "36B6A737-484D-4C27-B111-0ADF036A97CF",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIENG",
                "Etd_Prenom": "SOKHNA MATY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-12-26T00:00:00.000Z",
                "Etd_LieuNaissance": "GUEDIAWAYE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KEUR NIANG",
                "Etd_Remarque": "CM2D-Registre 2597",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "524D2D14-1851-468A-9B5F-769D7C0AD043",
                        "Cls_Id": "996B1BC0-0985-4D79-A09E-E3216BB323D5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B064BC07-24D5-4FF3-A6BB-13FB2CF06E06",
                            "Etd_Id": "36B6A737-484D-4C27-B111-0ADF036A97CF",
                            "ClasseAnn_Id": "524D2D14-1851-468A-9B5F-769D7C0AD043"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "996B1BC0-0985-4D79-A09E-E3216BB323D5",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "EC1BC906-6ED6-4C1A-BC0F-0AEF1BA0475D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "THIAM",
                "Etd_Prenom": "NDEYE MAGUETTE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-06-19T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA28",
                "Etd_Remarque": "GSA-Registre 335",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731",
                        "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "EEFD7E02-B0E0-4B52-8A29-956C7CBE8986",
                            "Etd_Id": "EC1BC906-6ED6-4C1A-BC0F-0AEF1BA0475D",
                            "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "39CD0DF0-D416-44DA-879A-0AFD18EE2383",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "FATMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2020-01-10T00:00:00.000Z",
                "Etd_LieuNaissance": "CASABLANCA MARO",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "THIAWENE",
                "Etd_Remarque": "MSA-Registre 191",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41",
                        "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A345F735-9E79-4709-AE90-F2FDED34FBF5",
                            "Etd_Id": "39CD0DF0-D416-44DA-879A-0AFD18EE2383",
                            "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                            "Niv_Id": "9A5EF238-A019-4512-998B-0A4AE5747160",
                            "Cls_Nom": "MOYENNE SECTION-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DB47A6B9-91F2-4706-97F2-0B0E1B5C98D8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "NDEYE LAMINE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-12-12T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GNARY ETAGE",
                "Etd_Remarque": "5eA-Registre 3723",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063",
                        "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "41DF9480-CA5F-4B3A-B180-D4C06E6E0221",
                            "Etd_Id": "DB47A6B9-91F2-4706-97F2-0B0E1B5C98D8",
                            "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "07BF23B4-972E-466B-819B-0B0FB54C2BDD",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "SAMB",
                "Etd_Prenom": "ADJA MAREME",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-09-18T00:00:00.000Z",
                "Etd_LieuNaissance": "HALTOU GOUYAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CE1C-Registre 1517",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "D3DB69B4-C416-4E18-9652-F4A7757B8013",
                        "Cls_Id": "6183EB20-E923-450D-A79B-774609287C11",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "E39FC2FF-1867-46DA-BD36-E9345A3F347E",
                            "Etd_Id": "07BF23B4-972E-466B-819B-0B0FB54C2BDD",
                            "ClasseAnn_Id": "D3DB69B4-C416-4E18-9652-F4A7757B8013"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "6183EB20-E923-450D-A79B-774609287C11",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1DBF7B92-29C8-43B8-9D95-0B1F8C2974ED",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "SERIGNE SALIOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-11-28T00:00:00.000Z",
                "Etd_LieuNaissance": "Mbacké",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBOUSSOBE",
                "Etd_Remarque": "6eB-Registre 3488",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "E98B0918-3F12-41D3-AB93-DC94C6A39E83",
                            "Etd_Id": "1DBF7B92-29C8-43B8-9D95-0B1F8C2974ED",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "991F5AA4-6C2F-45E6-9D51-0B23F31E0198",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NIANG",
                "Etd_Prenom": "PAPE CHEIKH ALIOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-10-26T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE PALENE",
                "Etd_Remarque": "6eB-Registre 3449",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "C0A450C9-FBBA-4EFB-A2BD-6F7678CF8C13",
                            "Etd_Id": "991F5AA4-6C2F-45E6-9D51-0B23F31E0198",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "9A6889A7-CBE0-44D0-98C4-0B480CCD3966",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "SOKHNA BINETOU ( MOR)",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-10-06T00:00:00.000Z",
                "Etd_LieuNaissance": "OUAKAM",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "3eC-Registre 4394",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378",
                        "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "49CB76B9-AF8B-4B1E-AB30-0F620A920E66",
                            "Etd_Id": "9A6889A7-CBE0-44D0-98C4-0B480CCD3966",
                            "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4582ABA1-22E4-421C-9635-0B4A74D43F53",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "KHADIM",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-10-17T00:00:00.000Z",
                "Etd_LieuNaissance": "NDANDE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "HLM",
                "Etd_Remarque": "CM2C-Registre 2526",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1",
                        "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "1A9A42EB-B011-4F34-B935-7E587F655C4F",
                            "Etd_Id": "4582ABA1-22E4-421C-9635-0B4A74D43F53",
                            "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "5A203713-B18F-4D01-9C67-0B4FF07C2E67",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "CAMARA",
                "Etd_Prenom": "NOUHA BIRI",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-12-16T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDOYENE",
                "Etd_Remarque": "CIB-Registre 556",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0",
                        "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B4F7C0C2-5D34-4F68-A65D-5BE5E3C8DA5C",
                            "Etd_Id": "5A203713-B18F-4D01-9C67-0B4FF07C2E67",
                            "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "3A900466-A7B2-4A9C-B13A-0B65FCAC3FCC",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "CISSE",
                "Etd_Prenom": "NDEYE COUMBA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE KHEWAR",
                "Etd_Remarque": "CPD-Registre 1136",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A061C541-DF47-4DB7-92C8-40EE8980D52E",
                        "Cls_Id": "93567137-0F6A-4BC4-8236-D80BC4F85348",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "3BA723CC-F878-4352-B2F2-1EA40E9F68FC",
                            "Etd_Id": "3A900466-A7B2-4A9C-B13A-0B65FCAC3FCC",
                            "ClasseAnn_Id": "A061C541-DF47-4DB7-92C8-40EE8980D52E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "93567137-0F6A-4BC4-8236-D80BC4F85348",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1DED2287-06D0-4AF2-AE44-0B68A0291299",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "FATIMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-03-03T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "GSA-Registre 306",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731",
                        "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "2A3BE0D6-FB44-445B-9C10-FC345CF4F9DC",
                            "Etd_Id": "1DED2287-06D0-4AF2-AE44-0B68A0291299",
                            "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "ECC921BB-77FC-4BDF-B74F-0BC7C583FF1A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GUEYE",
                "Etd_Prenom": "ASTOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2006-12-27T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "M2B-Registre 3169",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3FB53002-6477-4B83-B89B-269FF9DAFCB7",
                        "Cls_Id": "D68E5052-6251-427F-8BFF-2CC12E0912EA",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "1ABD8A7E-3606-4728-8780-10D10E4915D5",
                            "Etd_Id": "ECC921BB-77FC-4BDF-B74F-0BC7C583FF1A",
                            "ClasseAnn_Id": "3FB53002-6477-4B83-B89B-269FF9DAFCB7"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D68E5052-6251-427F-8BFF-2CC12E0912EA",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2B (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "8F9D005F-AA16-4272-92AE-0BF55CBB0611",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SAMB",
                "Etd_Prenom": "PENDA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-04-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAME",
                "Etd_Remarque": "4eC-Registre 4116",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875",
                        "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DD7FC4BF-E179-4948-9D98-02C4E53CE65E",
                            "Etd_Id": "8F9D005F-AA16-4272-92AE-0BF55CBB0611",
                            "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1A639D25-99E4-4AF5-9E3F-0C081F82731F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MOUHAMED",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-08-31T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "GSA-Registre 313",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731",
                        "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "33DBF231-A5E0-42DC-A16B-3B64D2E9A598",
                            "Etd_Id": "1A639D25-99E4-4AF5-9E3F-0C081F82731F",
                            "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "05CDE9B7-1BCA-4825-931C-0C269B193813",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NIANG",
                "Etd_Prenom": "SERIGNE FALLOU (MOR)",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-03-06T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA MOSQUEE",
                "Etd_Remarque": "6eC-Registre 3527",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "400C2F66-AE6E-42E5-9EB9-6BCB465CBE84",
                            "Etd_Id": "05CDE9B7-1BCA-4825-931C-0C269B193813",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "0CF87FB4-3524-4FB6-80BC-0C26B74DF4F8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "SOKHNA ADJI BOUSSO",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-09-19T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "CE2C-Registre 1778",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "BD564928-D9B8-4EF7-B6BF-C9AD375142E1",
                        "Cls_Id": "E922A652-AD7B-409E-A416-C52AC01E83D7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "43FFE0FD-0913-44C6-970D-649AE2A56EB1",
                            "Etd_Id": "0CF87FB4-3524-4FB6-80BC-0C26B74DF4F8",
                            "ClasseAnn_Id": "BD564928-D9B8-4EF7-B6BF-C9AD375142E1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E922A652-AD7B-409E-A416-C52AC01E83D7",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1C94B3D2-23EC-4E09-BCBC-0C274FA66281",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "THIAM",
                "Etd_Prenom": "SEYDINA MOUHAMED",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-09-19T00:00:00.000Z",
                "Etd_LieuNaissance": "PIKINE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CE2A-Registre 1611",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49",
                        "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "91AF24FB-8293-4738-85E0-9A60F9F3820F",
                            "Etd_Id": "1C94B3D2-23EC-4E09-BCBC-0C274FA66281",
                            "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4FE29A90-4878-4A2C-9A72-0C37788C930A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2020-11-20T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "PSA-Registre 21",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C546480B-5A98-4E36-AF91-D301D7FCE68D",
                        "Cls_Id": "C15680BC-E9A5-45D3-A6FB-4F781ADE9DF9",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "3AD6A546-C17B-4756-A82C-823D9FA45BC3",
                            "Etd_Id": "4FE29A90-4878-4A2C-9A72-0C37788C930A",
                            "ClasseAnn_Id": "C546480B-5A98-4E36-AF91-D301D7FCE68D"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C15680BC-E9A5-45D3-A6FB-4F781ADE9DF9",
                            "Niv_Id": "A2916F64-E243-4DF5-B19C-7237E1473E3A",
                            "Cls_Nom": "PETITE SECTION-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "0B9BBEF9-D3EF-4773-A3E7-0C673CF3C163",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "WADE",
                "Etd_Prenom": "CHEIKH",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-05-08T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU TANZIL",
                "Etd_Remarque": "3eD-Registre 4473",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "908196D1-0ADF-41D5-8FF7-5E7533F975E9",
                        "Cls_Id": "3B93E8C4-7B69-497E-A301-AE6088151998",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A0C40E58-CBD8-47BF-AC4B-B8DC4972E66D",
                            "Etd_Id": "0B9BBEF9-D3EF-4773-A3E7-0C673CF3C163",
                            "ClasseAnn_Id": "908196D1-0ADF-41D5-8FF7-5E7533F975E9"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "3B93E8C4-7B69-497E-A301-AE6088151998",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "8AF48A0D-8DEB-4C22-BE74-0CA5755A755E",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "KAIRE",
                "Etd_Prenom": "MAME MODOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2008-04-03T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU SALAM",
                "Etd_Remarque": "M2C-Registre 3258",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E",
                        "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "FCB2233F-353F-4FAE-9552-16C4188AD3B9",
                            "Etd_Id": "8AF48A0D-8DEB-4C22-BE74-0CA5755A755E",
                            "ClasseAnn_Id": "2D302E3E-50D4-43C5-8B6A-915B4D94092E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "E9144FD2-1B6D-44B8-885F-0BD6B3D1C674",
                            "Niv_Id": "B7ED514E-EE0C-4826-BEF4-C94940CB2D68",
                            "Cls_Nom": "MADIALISSE 2C (CE1-CE2)",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "B266829B-B916-4B05-A4A2-0CC1289A9102",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBENGUE",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-11-16T00:00:00.000Z",
                "Etd_LieuNaissance": "PIKINE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "HELIPORT",
                "Etd_Remarque": "CE1B-Registre 1352",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "EC25EC42-A4ED-423F-8D5F-A8A9A5EC1C2E",
                        "Cls_Id": "5916054D-E8FD-4195-8252-1DCACCEBCFC0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "72E6D685-FF1F-4BF0-9C2D-AEB3CB95BFDB",
                            "Etd_Id": "B266829B-B916-4B05-A4A2-0CC1289A9102",
                            "ClasseAnn_Id": "EC25EC42-A4ED-423F-8D5F-A8A9A5EC1C2E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5916054D-E8FD-4195-8252-1DCACCEBCFC0",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "CFE7E087-7C16-4347-81B0-0D09A17C7D26",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "CANDE",
                "Etd_Prenom": "NDEYE KHADY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-11-28T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "",
                "Etd_Remarque": "CPB-Registre 1032",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "289F07AC-FE7D-4F87-B7BF-3BD8D92658F1",
                            "Etd_Id": "CFE7E087-7C16-4347-81B0-0D09A17C7D26",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "A9839E5E-7AC5-4B94-AE19-0D187FF8311F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "SEYNABOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-05-29T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "5eA-Registre 3745",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063",
                        "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A71BEF43-EDBA-4E46-86AE-C6A3273D21F8",
                            "Etd_Id": "A9839E5E-7AC5-4B94-AE19-0D187FF8311F",
                            "ClasseAnn_Id": "8E15BA2E-8A35-4202-8610-4ACAD6BAA063"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "F620BE1E-B88D-4D5D-94FF-5748F0F35905",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "94DCA366-B032-499D-8D39-0D3A141E297C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "GAYE",
                "Etd_Prenom": "CHEIKHOUNA KHADIM",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-09-24T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SOURAH",
                "Etd_Remarque": "M1A-Registre 2768",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF",
                        "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F59692F1-2AA8-4EBD-AF1D-170C3BB36455",
                            "Etd_Id": "94DCA366-B032-499D-8D39-0D3A141E297C",
                            "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-A (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "EACDDD5B-96C6-48BF-82FE-0D8AD021F846",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NIANG",
                "Etd_Prenom": "BAYE SERIGNE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-10-02T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA NDIAREME",
                "Etd_Remarque": "CE2D-Registre 1856",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650",
                        "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "8411D37E-FA06-4CB7-84E5-1BFA3BB94087",
                            "Etd_Id": "EACDDD5B-96C6-48BF-82FE-0D8AD021F846",
                            "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "FDAF56A6-9C44-4141-B03D-0DBC70251850",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GAYE",
                "Etd_Prenom": "SOKHNA FATY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-01-24T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "3eB-Registre 4316",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8",
                        "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "2BF10214-7CA3-480E-B415-EB16D618A692",
                            "Etd_Id": "FDAF56A6-9C44-4141-B03D-0DBC70251850",
                            "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "0219F2CC-7D52-4DC1-9A05-0DD099953E10",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIAKHATE",
                "Etd_Prenom": "NDEYE FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-08-01T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNAN",
                "Etd_Remarque": "CE1A-Registre 1276",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                        "Cls_Id": "7DBE7033-1CE8-46AC-98FC-1592512958BC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "38DFA677-2C2C-40B2-99D7-F511168D6210",
                            "Etd_Id": "0219F2CC-7D52-4DC1-9A05-0DD099953E10",
                            "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67"
                        },
                        "matieresClasseAnnee": [
                            {
                                "ClsAnnMat_Id": "4FC6852F-3F30-4F77-AC80-2A6496DDEF41",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "è-uè-u-èu-èu-",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "D5C88D2F-38D2-49B6-B593-5C2C15117236",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation 2",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "97A5F933-31BE-40E2-B631-67DA4B9F6F41",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "dsqdssqd",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "4E52546D-3F87-4712-BFC1-8BD5AEFD747C",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "lkjhgfds",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "304A3941-9C6F-4D66-9A4D-8D450F4B603C",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "ytretr",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "08A7F190-AE2D-4788-B215-A128836ABC9E",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "poijhgf",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "255F4F40-9821-4B84-A519-A1AC126ECEF1",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "feeeeeee",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "BBCD0813-E85C-4625-87F9-BFE2153ED4EA",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation 3",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "E7D909F0-DB8A-4BFA-AAE0-C0A8CCA173FC",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": null,
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "E666EAC5-30C2-41BD-83E0-EC9BCB6010C4",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "aaaaaaaaaa",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "860D0FC4-69A9-4F72-AEDF-FD1B0D610D06",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            }
                        ],
                        "AnneeClasse": {
                            "Cls_Id": "7DBE7033-1CE8-46AC-98FC-1592512958BC",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DA7CF3AE-0151-479B-9487-0DF45EE82A20",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "SECK",
                "Etd_Prenom": "NDEYE SOKHNA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "HELIPORT",
                "Etd_Remarque": "CPB-Registre 1035",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "805AC438-7FA2-48FF-918B-565DBF0507D6",
                            "Etd_Id": "DA7CF3AE-0151-479B-9487-0DF45EE82A20",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "A30360F2-4131-4C3E-B761-0DFEE129E3B2",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "NDEYE FATMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-10-03T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOUL",
                "Etd_Remarque": "CE2A-Registre 1596",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49",
                        "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "D2F44912-A085-48A7-B266-A4B7D6AA2FE6",
                            "Etd_Id": "A30360F2-4131-4C3E-B761-0DFEE129E3B2",
                            "ClasseAnn_Id": "201E622C-E3BD-435D-A955-A2FED5674B49"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C7FD976-D0FE-4DAD-AB68-9B748E6373DC",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DE0250B8-88E3-49CE-89B8-0E228282CFA9",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SEYE",
                "Etd_Prenom": "MAME KHARY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-12-26T00:00:00.000Z",
                "Etd_LieuNaissance": "WARACK",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "LOYENE",
                "Etd_Remarque": "CM2C-Registre 2512",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1",
                        "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "2AC79FE6-DDBC-478B-8876-D9CAB7632D16",
                            "Etd_Id": "DE0250B8-88E3-49CE-89B8-0E228282CFA9",
                            "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DBDC26F8-4BBD-40C9-A7AF-0E689E006070",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "LO",
                "Etd_Prenom": "SERIGNE SALIOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-09-26T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOU",
                "Etd_Remarque": "3eB-Registre 4351",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8",
                        "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "BF2A3CCA-5F3C-490B-A6C3-03833F7F8CD0",
                            "Etd_Id": "DBDC26F8-4BBD-40C9-A7AF-0E689E006070",
                            "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "F5E1F234-144D-4665-99AF-0E6F9002CC85",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "ASTOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2015-01-23T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CM1A-Registre 1987",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062",
                        "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "702ACB33-EF33-4406-8EE8-F2A35BC4F8D3",
                            "Etd_Id": "F5E1F234-144D-4665-99AF-0E6F9002CC85",
                            "ClasseAnn_Id": "3ADA11FF-D9A9-4439-BB86-062116EE4062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "037D38D4-DAC6-45DA-8889-F740FABA5B2C",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "4399F0DF-A573-4392-9211-0E7FDC5B5F1A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SENE",
                "Etd_Prenom": "MOUHAMADOU MOURTALLA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2008-10-16T00:00:00.000Z",
                "Etd_LieuNaissance": "NDIANE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "3eC-Registre 4399",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378",
                        "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4828981B-DC3E-40C5-8172-A33E8900946C",
                            "Etd_Id": "4399F0DF-A573-4392-9211-0E7FDC5B5F1A",
                            "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "90B79607-7115-4005-8ED8-0E841A4786DF",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "LO",
                "Etd_Prenom": "BINETOU CHEIKHOUNA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-04-24T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNAN",
                "Etd_Remarque": "CE1A-Registre 1283",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                        "Cls_Id": "7DBE7033-1CE8-46AC-98FC-1592512958BC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "61A98DDD-AF1D-4DB4-A086-DF46CEC26C99",
                            "Etd_Id": "90B79607-7115-4005-8ED8-0E841A4786DF",
                            "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67"
                        },
                        "matieresClasseAnnee": [
                            {
                                "ClsAnnMat_Id": "4FC6852F-3F30-4F77-AC80-2A6496DDEF41",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "è-uè-u-èu-èu-",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "D5C88D2F-38D2-49B6-B593-5C2C15117236",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation 2",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "97A5F933-31BE-40E2-B631-67DA4B9F6F41",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "dsqdssqd",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "4E52546D-3F87-4712-BFC1-8BD5AEFD747C",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "lkjhgfds",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "304A3941-9C6F-4D66-9A4D-8D450F4B603C",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "ytretr",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "08A7F190-AE2D-4788-B215-A128836ABC9E",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "poijhgf",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "255F4F40-9821-4B84-A519-A1AC126ECEF1",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "feeeeeee",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "BBCD0813-E85C-4625-87F9-BFE2153ED4EA",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation 3",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "E7D909F0-DB8A-4BFA-AAE0-C0A8CCA173FC",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": null,
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "E666EAC5-30C2-41BD-83E0-EC9BCB6010C4",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "aaaaaaaaaa",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "860D0FC4-69A9-4F72-AEDF-FD1B0D610D06",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            }
                        ],
                        "AnneeClasse": {
                            "Cls_Id": "7DBE7033-1CE8-46AC-98FC-1592512958BC",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "5E224C86-EB4A-4D55-BDD1-0E8DF8B07CA1",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLL",
                "Etd_Prenom": "BOUSSO BALLY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-04-22T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU SALAM",
                "Etd_Remarque": "CM1B-Registre 2057",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "EFB78760-0D89-4B4A-9AFD-9B4CD21B22DE",
                        "Cls_Id": "B559DE9E-5D83-47A1-BF00-63FB4CC579F8",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "6FEF6754-EA4F-4483-AECA-D9DD5B87ED3F",
                            "Etd_Id": "5E224C86-EB4A-4D55-BDD1-0E8DF8B07CA1",
                            "ClasseAnn_Id": "EFB78760-0D89-4B4A-9AFD-9B4CD21B22DE"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "B559DE9E-5D83-47A1-BF00-63FB4CC579F8",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "A2469D27-420F-4630-B793-0E9965345C72",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "WAGNE",
                "Etd_Prenom": "AICHA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-08-10T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SONATEL",
                "Etd_Remarque": "CIC-Registre 684",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "30BF12D3-B208-416F-9D38-93CB175F5797",
                        "Cls_Id": "C94C2871-5356-4EA6-81AF-A63719251E85",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "02456226-569E-418E-A2BF-4A77D7495375",
                            "Etd_Id": "A2469D27-420F-4630-B793-0E9965345C72",
                            "ClasseAnn_Id": "30BF12D3-B208-416F-9D38-93CB175F5797"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C94C2871-5356-4EA6-81AF-A63719251E85",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "AEB2650C-28A4-447B-8788-0E9F3616D022",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIAGNE",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2008-11-04T00:00:00.000Z",
                "Etd_LieuNaissance": "PIKINE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "3eD-Registre 4506",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "908196D1-0ADF-41D5-8FF7-5E7533F975E9",
                        "Cls_Id": "3B93E8C4-7B69-497E-A301-AE6088151998",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B0D75577-F1F8-4668-93A6-544C38EDCF18",
                            "Etd_Id": "AEB2650C-28A4-447B-8788-0E9F3616D022",
                            "ClasseAnn_Id": "908196D1-0ADF-41D5-8FF7-5E7533F975E9"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "3B93E8C4-7B69-497E-A301-AE6088151998",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "F3054394-DD5B-4637-8358-0EBB4C8EA20C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "MAME FATY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-04-05T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SONATEL",
                "Etd_Remarque": "M3A-Registre 2314",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5BDDE3FF-7341-444B-9962-65D9C79B61BE",
                        "Cls_Id": "69E4EC9B-7039-4767-ABEF-CD2983177202",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "9F5266A9-D824-483E-ABE1-2B080743B402",
                            "Etd_Id": "F3054394-DD5B-4637-8358-0EBB4C8EA20C",
                            "ClasseAnn_Id": "5BDDE3FF-7341-444B-9962-65D9C79B61BE"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "69E4EC9B-7039-4767-ABEF-CD2983177202",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "M3 A (CM1- CM2 -E) ",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "746F2567-0C2C-498B-AA9F-0EEAF2F4ADF5",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIENG",
                "Etd_Prenom": "NDEYE MAREME",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2021-03-10T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "GSB-Registre 399",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "49C628D6-15D8-44CF-AB6A-17C139AC3E62",
                        "Cls_Id": "50C716E3-DEDD-4DC2-9C5F-539A2FAD62BC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B6FD91C0-E760-4B00-A37D-7C10E804594D",
                            "Etd_Id": "746F2567-0C2C-498B-AA9F-0EEAF2F4ADF5",
                            "ClasseAnn_Id": "49C628D6-15D8-44CF-AB6A-17C139AC3E62"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "50C716E3-DEDD-4DC2-9C5F-539A2FAD62BC",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "BCD31F8B-4857-446A-9529-0F09A7F8D1F6",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "GAYE",
                "Etd_Prenom": "PAPE ABDOULAYE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-03-25T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANTOU",
                "Etd_Remarque": "CPC-Registre 1064",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B",
                        "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F2D5AECB-2399-4525-B2AE-1B3542E734F6",
                            "Etd_Id": "BCD31F8B-4857-446A-9529-0F09A7F8D1F6",
                            "ClasseAnn_Id": "0F35B432-977E-46C1-928F-BF6F323B645B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C6006D2F-E064-4EC4-B067-298429F7E5F7",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "72E7E21C-51B9-40D9-83BD-0F0A5488BF29",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "KHOUMA",
                "Etd_Prenom": "ASTOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-09-14T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "SOURAH",
                "Etd_Remarque": "M1C-Registre 2899",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "CC739C28-EC29-4258-9194-3CF3AF2DF37F",
                        "Cls_Id": "2DE43BE7-896C-478E-858F-3B608860AB4B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "964ED549-3908-41BF-AC66-2018970F984C",
                            "Etd_Id": "72E7E21C-51B9-40D9-83BD-0F0A5488BF29",
                            "ClasseAnn_Id": "CC739C28-EC29-4258-9194-3CF3AF2DF37F"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "2DE43BE7-896C-478E-858F-3B608860AB4B",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-C (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "64A1F146-52D0-48CE-9EE2-0F2209E4D866",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "THIAM",
                "Etd_Prenom": "BOUSSO",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2008-09-20T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "3eB-Registre 4328",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8",
                        "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "FFC3E5E0-82AC-4E0B-A588-64E37397B771",
                            "Etd_Id": "64A1F146-52D0-48CE-9EE2-0F2209E4D866",
                            "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "2CD0966D-6B0B-4BB3-BC75-0F29A6619070",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBOUP",
                "Etd_Prenom": "MATY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2013-11-20T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "HLM",
                "Etd_Remarque": "6eB-Registre 3471",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "1C9C84B6-34E1-46EA-8D6A-752CB10C9490",
                            "Etd_Id": "2CD0966D-6B0B-4BB3-BC75-0F29A6619070",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "85276C5A-92B2-4BAF-9B86-0F2F430C78CC",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "CISSE",
                "Etd_Prenom": "MBENE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-09-19T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GARE BOU NDAW",
                "Etd_Remarque": "CID-Registre 731",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46",
                        "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "50A6BAEF-0A32-4CB3-B5C3-C54A0BD22140",
                            "Etd_Id": "85276C5A-92B2-4BAF-9B86-0F2F430C78CC",
                            "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "333280FC-06CF-4527-879B-0F52D0AFC753",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "TINE",
                "Etd_Prenom": "MOUHAMED",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-06-12T00:00:00.000Z",
                "Etd_LieuNaissance": "KEUR MASSAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA 28",
                "Etd_Remarque": "CIB-Registre 544",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0",
                        "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4F1C3462-2D3F-448A-8E40-09B83AD1449F",
                            "Etd_Id": "333280FC-06CF-4527-879B-0F52D0AFC753",
                            "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "32603B89-766C-4F6B-B4C9-0F544F9C9120",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SAMB",
                "Etd_Prenom": "ADJI COUMBA MBOR",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-07-06T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA MOSQUEE",
                "Etd_Remarque": "6eA-Registre 3414",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF",
                        "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "01AE27AC-AB76-48D3-8256-7AAF3F102C23",
                            "Etd_Id": "32603B89-766C-4F6B-B4C9-0F544F9C9120",
                            "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "68C1B9C3-3285-40EC-826D-0F6ED35659F9",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "DIOR",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-12-27T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA DIAREME",
                "Etd_Remarque": "3eA-Registre 4254",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "B7E92F28-EB91-4ABC-A8FA-A32655C12F96",
                        "Cls_Id": "9AE63848-FE0B-4DC7-BD17-AD0507114BF1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "237ED96E-65BA-4BF3-9ABB-2F7BBEE90DCB",
                            "Etd_Id": "68C1B9C3-3285-40EC-826D-0F6ED35659F9",
                            "ClasseAnn_Id": "B7E92F28-EB91-4ABC-A8FA-A32655C12F96"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "9AE63848-FE0B-4DC7-BD17-AD0507114BF1",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "5A3E333B-0068-4B2B-B20C-0F85DDA37140",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SOURANG",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-12-11T00:00:00.000Z",
                "Etd_LieuNaissance": "BRESSIA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAM",
                "Etd_Remarque": "5eB-Registre 3803",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "9A3D81B1-76A4-4410-8AB9-689FCF6EAC47",
                        "Cls_Id": "38F4A43E-7825-48A6-9EAC-24B306F6A6BA",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "8FA4A707-59C5-425B-B42C-1E9BCF17C1D3",
                            "Etd_Id": "5A3E333B-0068-4B2B-B20C-0F85DDA37140",
                            "ClasseAnn_Id": "9A3D81B1-76A4-4410-8AB9-689FCF6EAC47"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "38F4A43E-7825-48A6-9EAC-24B306F6A6BA",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "94FC272B-B08C-4868-AA46-0F8CB53F20D6",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-11-22T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA HLM",
                "Etd_Remarque": "CM1D-Registre 2195",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3",
                        "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DF635134-5F8E-49F8-9059-4926F65AE824",
                            "Etd_Id": "94FC272B-B08C-4868-AA46-0F8CB53F20D6",
                            "ClasseAnn_Id": "0A7D6FE2-3AFA-4C41-96E0-588DD0FCBCE3"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "0180F218-AC0C-48DF-899C-FB1AF2472DAF",
                            "Niv_Id": "52748191-7FC0-49AD-9B0F-2CA862FF1E32",
                            "Cls_Nom": "CM1-D",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "645D4A8C-DB76-4FE6-9B1B-0FAF36317984",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "AISSATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-06-25T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CM2B-Registre 2461",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "8D766850-28FC-4AC9-88EF-49B4230A686A",
                        "Cls_Id": "971D2040-E7AA-4C37-BFC7-8B97A2B7BB2A",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "865B9DBA-F591-495D-AD73-0DCA97859DF9",
                            "Etd_Id": "645D4A8C-DB76-4FE6-9B1B-0FAF36317984",
                            "ClasseAnn_Id": "8D766850-28FC-4AC9-88EF-49B4230A686A"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "971D2040-E7AA-4C37-BFC7-8B97A2B7BB2A",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "35B5BA7F-8D60-47A4-8B6A-0FB3EEC95317",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIEYE",
                "Etd_Prenom": "ADAMA CAMARA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-04-22T00:00:00.000Z",
                "Etd_LieuNaissance": "SAINT LOUIS",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA 28",
                "Etd_Remarque": "4eB-Registre 4062",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "9F2EA890-3F86-441C-BEE9-4BFD1075D0AC",
                        "Cls_Id": "DA2E6671-8CBA-45C8-B7E4-DA951B0B6BD9",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "CBFD2662-B877-4B8B-BD01-9FB28CE0284D",
                            "Etd_Id": "35B5BA7F-8D60-47A4-8B6A-0FB3EEC95317",
                            "ClasseAnn_Id": "9F2EA890-3F86-441C-BEE9-4BFD1075D0AC"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "DA2E6671-8CBA-45C8-B7E4-DA951B0B6BD9",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "7114D60C-2548-4B21-8747-0FD5103974BF",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GAYE",
                "Etd_Prenom": "KHOUREDIA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-06-13T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAME",
                "Etd_Remarque": "4eA-Registre 3974",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "42E8C795-98CF-4ABB-B408-3689F7AC7135",
                        "Cls_Id": "5C9FC276-8241-4D33-AFB3-D95A4DEB0BC5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "14332E04-7FE1-4E1B-8AE0-93A0DF075C19",
                            "Etd_Id": "7114D60C-2548-4B21-8747-0FD5103974BF",
                            "ClasseAnn_Id": "42E8C795-98CF-4ABB-B408-3689F7AC7135"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5C9FC276-8241-4D33-AFB3-D95A4DEB0BC5",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "A1FB4411-E1C9-41A9-AD2E-0FF223FBFFAD",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "FAYE",
                "Etd_Prenom": "NDEYE MANE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2020-05-31T00:00:00.000Z",
                "Etd_LieuNaissance": "NDOUNDOKH",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA 28",
                "Etd_Remarque": "GSA-Registre 325",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731",
                        "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F35B2C50-4662-4635-AB07-0AA73E694997",
                            "Etd_Id": "A1FB4411-E1C9-41A9-AD2E-0FF223FBFFAD",
                            "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "B2AAB9A4-2036-45EF-9FD5-10173F40DD10",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "SALL",
                "Etd_Prenom": "SODA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GARAGE DAROU",
                "Etd_Remarque": "CPB-Registre 1034",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "9B73CB70-CE53-4E7D-99DC-4F88D28A900A",
                            "Etd_Id": "B2AAB9A4-2036-45EF-9FD5-10173F40DD10",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "23B20417-4539-44E2-A3C6-1018503E4449",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "MATY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-03-03T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA NDIAREME",
                "Etd_Remarque": "M1A-Registre 2793",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF",
                        "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "C0DB5041-E993-4757-A36A-97DD3DA774D2",
                            "Etd_Id": "23B20417-4539-44E2-A3C6-1018503E4449",
                            "ClasseAnn_Id": "341AC7C4-DC59-4D3C-9B9D-897A3DFEA9EF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "959064F5-B9F0-444D-AE1E-677AAE2F0DE0",
                            "Niv_Id": "48BBF3C4-E327-4EC9-BCE0-649794CE8F77",
                            "Cls_Nom": "MADIALISSE 1-A (CI-CP)",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "0486C0D5-987B-4A89-8B4C-102E20A30B10",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "WAGNE",
                "Etd_Prenom": "FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-06-02T00:00:00.000Z",
                "Etd_LieuNaissance": "KAOLACK",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TALLY BOU BESS",
                "Etd_Remarque": "CID-Registre 776",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46",
                        "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "905045DC-AAAA-42FE-902D-A936B1C07D3E",
                            "Etd_Id": "0486C0D5-987B-4A89-8B4C-102E20A30B10",
                            "ClasseAnn_Id": "3EB9F2C0-D020-476E-A198-FB461B27BA46"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "D5ED77E7-D830-4071-B59E-9E4A0A4DABD1",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "93233916-F79C-4D19-A603-103721D7D95D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SEYE",
                "Etd_Prenom": "NDEYE FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-11-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CE2D-Registre 1852",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650",
                        "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "42EF6860-849F-4EBF-BBF6-B41CA989B1AC",
                            "Etd_Id": "93233916-F79C-4D19-A603-103721D7D95D",
                            "ClasseAnn_Id": "5EBA0183-4B1A-46A5-BB76-2D5C572E7650"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1EB7FF92-5BD0-4BCE-8EDE-EAA65B151B51",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "7A24E6C3-2EF4-4448-BE1F-103DAB319437",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "KANE",
                "Etd_Prenom": "AWA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2014-11-25T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MANAN",
                "Etd_Remarque": "CE1B-Registre 1381",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "EC25EC42-A4ED-423F-8D5F-A8A9A5EC1C2E",
                        "Cls_Id": "5916054D-E8FD-4195-8252-1DCACCEBCFC0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "26615849-D719-4298-BB9F-9FAF2572B25C",
                            "Etd_Id": "7A24E6C3-2EF4-4448-BE1F-103DAB319437",
                            "ClasseAnn_Id": "EC25EC42-A4ED-423F-8D5F-A8A9A5EC1C2E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5916054D-E8FD-4195-8252-1DCACCEBCFC0",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "51187BFA-5593-41E6-9846-103FBDE96816",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "KHOUMA",
                "Etd_Prenom": "SOKHNA MAÏ",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-08-25T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CPD-Registre 1157",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A061C541-DF47-4DB7-92C8-40EE8980D52E",
                        "Cls_Id": "93567137-0F6A-4BC4-8236-D80BC4F85348",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "FCEFC271-0807-4370-9EA4-500D742643BC",
                            "Etd_Id": "51187BFA-5593-41E6-9846-103FBDE96816",
                            "ClasseAnn_Id": "A061C541-DF47-4DB7-92C8-40EE8980D52E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "93567137-0F6A-4BC4-8236-D80BC4F85348",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1A5FD09F-B473-4E96-95A7-107825F2D35B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "NDEYE FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-08-31T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "6eC-Registre 3547",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "28E9A6AB-BBCA-44D5-B7B6-50D3F3A89845",
                            "Etd_Id": "1A5FD09F-B473-4E96-95A7-107825F2D35B",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DA0FAA54-0859-41A6-A660-108AB7E11F2C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "SERIGNE MOUSTAPHA BASSIROU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2008-04-30T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA2",
                "Etd_Remarque": "4eD-Registre 4223",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062",
                        "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "36B976E4-7162-47EA-AA13-1D645F7F8376",
                            "Etd_Id": "DA0FAA54-0859-41A6-A660-108AB7E11F2C",
                            "ClasseAnn_Id": "C5D7001B-AEE0-4CBD-A7E9-0ED05B1BB062"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "CCE9C4E6-305E-4886-862A-F1B249F47C92",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C5C6F906-1A8D-4EC2-842B-108BC0D1B20A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIAGNE",
                "Etd_Prenom": "DIARIATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2020-07-01T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA MOSQUEE",
                "Etd_Remarque": "MSB-Registre 345",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "4AD050FD-2196-4216-9B79-B8A1D4F83010",
                        "Cls_Id": "3F3F939E-00DD-4F2F-B3AC-A7C946EA8AA0",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "CC1C7EC5-9875-4E4E-B9C5-C435A86215E4",
                            "Etd_Id": "C5C6F906-1A8D-4EC2-842B-108BC0D1B20A",
                            "ClasseAnn_Id": "4AD050FD-2196-4216-9B79-B8A1D4F83010"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "3F3F939E-00DD-4F2F-B3AC-A7C946EA8AA0",
                            "Niv_Id": "9A5EF238-A019-4512-998B-0A4AE5747160",
                            "Cls_Nom": "MOYENNE SECTION-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "16264335-A7F3-48F0-BE2C-109B54ABFCC9",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "LO",
                "Etd_Prenom": "SERIGNE MBACKE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2021-06-26T00:00:00.000Z",
                "Etd_LieuNaissance": "DIOURBEL",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "THIAWENE",
                "Etd_Remarque": "PSC-Registre 290",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "92376B65-47E7-4EEA-9190-0B867E9A4631",
                        "Cls_Id": "F6A430F2-308B-46AF-8360-498DD8536D81",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "12A4DFA8-DEF3-410E-9DDE-E4847D51E321",
                            "Etd_Id": "16264335-A7F3-48F0-BE2C-109B54ABFCC9",
                            "ClasseAnn_Id": "92376B65-47E7-4EEA-9190-0B867E9A4631"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "F6A430F2-308B-46AF-8360-498DD8536D81",
                            "Niv_Id": "9A5EF238-A019-4512-998B-0A4AE5747160",
                            "Cls_Nom": "MOYENNE SECTION C",
                            "Classe_Description": ""
                        }
                    }
                ]
            },
            {
                "Etd_Id": "D9A8334D-66C2-4AB1-9683-109CAE3EF5F6",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "TOURE",
                "Etd_Prenom": "OUMY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-06-04T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA MOSQUEE",
                "Etd_Remarque": "4eB-Registre 4023",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "9F2EA890-3F86-441C-BEE9-4BFD1075D0AC",
                        "Cls_Id": "DA2E6671-8CBA-45C8-B7E4-DA951B0B6BD9",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "AEFCF416-DE34-432E-8EF9-8313AA051C17",
                            "Etd_Id": "D9A8334D-66C2-4AB1-9683-109CAE3EF5F6",
                            "ClasseAnn_Id": "9F2EA890-3F86-441C-BEE9-4BFD1075D0AC"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "DA2E6671-8CBA-45C8-B7E4-DA951B0B6BD9",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C444B8DA-B21B-4799-A096-10A179A70129",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBAYE",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-09-02T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TALLY BOU BESS",
                "Etd_Remarque": "CPB-Registre 977",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B",
                        "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F7B6D118-8E72-40F7-9264-0595AD06481F",
                            "Etd_Id": "C444B8DA-B21B-4799-A096-10A179A70129",
                            "ClasseAnn_Id": "E5185541-2DE8-4389-864D-BED4D98B0D0B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "FDB5D8CC-2854-47C8-B121-AC31BD601B5B",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C7BB9BEB-C8AA-490F-9A88-10BB5C57BA5B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "MAME KHARY LEYE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-12-31T00:00:00.000Z",
                "Etd_LieuNaissance": "Touba",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU HANLIBOUL KHABIR",
                "Etd_Remarque": "4eA-Registre 3986",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "42E8C795-98CF-4ABB-B408-3689F7AC7135",
                        "Cls_Id": "5C9FC276-8241-4D33-AFB3-D95A4DEB0BC5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "E7BC544F-DA71-4B92-931B-A4D10A272770",
                            "Etd_Id": "C7BB9BEB-C8AA-490F-9A88-10BB5C57BA5B",
                            "ClasseAnn_Id": "42E8C795-98CF-4ABB-B408-3689F7AC7135"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5C9FC276-8241-4D33-AFB3-D95A4DEB0BC5",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "95CEF5FB-8CA8-49BC-BBDC-10BEB60D5DE8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "MAME DIARRA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-09-13T00:00:00.000Z",
                "Etd_LieuNaissance": "RUFISQUE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "CIB-Registre 599",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0",
                        "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "7C016A8A-21F9-43BE-843B-B44E7396858D",
                            "Etd_Id": "95CEF5FB-8CA8-49BC-BBDC-10BEB60D5DE8",
                            "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "03DAD883-0970-43C0-9B48-10D71E6677F7",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "FATOUMATA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2017-01-27T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CIB-Registre 559",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0",
                        "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "672A500B-E685-4FA7-9E7D-87FEF0249886",
                            "Etd_Id": "03DAD883-0970-43C0-9B48-10D71E6677F7",
                            "ClasseAnn_Id": "2D703ECD-7108-4A0A-8B25-4B2ABE492EE0"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8360D793-5A8E-4A8C-9DBF-0785E5F9648F",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "378D99E9-99AE-48E5-88F3-10E85394FD93",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOUF",
                "Etd_Prenom": "MATY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-11-25T00:00:00.000Z",
                "Etd_LieuNaissance": "VITERBO",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA NDIAREME",
                "Etd_Remarque": "6eC-Registre 3513",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "D9D7232E-E8DE-4498-9A2C-68D6EB1E2DDE",
                            "Etd_Id": "378D99E9-99AE-48E5-88F3-10E85394FD93",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "F4B3C365-259B-4D51-A020-10F423294040",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "AMY COLLE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-02-01T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "BOFFEL",
                "Etd_Remarque": "CIA-Registre 478",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "47D4B354-EE56-407A-A45D-D36A54B9F6D4",
                        "Cls_Id": "245AA200-4A87-46A7-9380-337C102B3F76",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "21199F04-50FE-4B3B-9F03-DDEF6502B342",
                            "Etd_Id": "F4B3C365-259B-4D51-A020-10F423294040",
                            "ClasseAnn_Id": "47D4B354-EE56-407A-A45D-D36A54B9F6D4"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "245AA200-4A87-46A7-9380-337C102B3F76",
                            "Niv_Id": "3ECED154-E370-4F0E-9E0E-3776B8A5F9E7",
                            "Cls_Nom": "CI-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "E0905233-5A16-44E4-B7DB-110A7E9E4CF6",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "GOUMBALLA",
                "Etd_Prenom": "FARIMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-10-14T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KHAIRA",
                "Etd_Remarque": "6eC-Registre 3538",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "6C53358A-34B5-4A0F-9706-5EA9096E72CA",
                            "Etd_Id": "E0905233-5A16-44E4-B7DB-110A7E9E4CF6",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "47074809-197C-4611-8EB2-110BE56B481B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "SAMB",
                "Etd_Prenom": "GORA AYA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2021-10-26T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "PSA-Registre 17",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "C546480B-5A98-4E36-AF91-D301D7FCE68D",
                        "Cls_Id": "C15680BC-E9A5-45D3-A6FB-4F781ADE9DF9",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "B4C8CD3B-0378-4C2D-A62C-53EE41D6F33F",
                            "Etd_Id": "47074809-197C-4611-8EB2-110BE56B481B",
                            "ClasseAnn_Id": "C546480B-5A98-4E36-AF91-D301D7FCE68D"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C15680BC-E9A5-45D3-A6FB-4F781ADE9DF9",
                            "Niv_Id": "A2916F64-E243-4DF5-B19C-7237E1473E3A",
                            "Cls_Nom": "PETITE SECTION-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "971A2788-C07C-4F65-AA7D-112E69F3137D",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MAME DIARRA (MOR)",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-03-25T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "KEUR BAYE LAHAD",
                "Etd_Remarque": "4eC-Registre 4149",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875",
                        "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "6149EC4D-BA8D-40C9-914B-F0431D60D9D2",
                            "Etd_Id": "971A2788-C07C-4F65-AA7D-112E69F3137D",
                            "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "767A547D-0A8D-4FA8-A322-113E809CF0D8",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "AMAR",
                "Etd_Prenom": "PAPE MAGOUMBA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-12-12T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "khaira 2",
                "Etd_Remarque": "3eA-Registre 4324",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "B7E92F28-EB91-4ABC-A8FA-A32655C12F96",
                        "Cls_Id": "9AE63848-FE0B-4DC7-BD17-AD0507114BF1",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "DFF10313-893B-4D5A-9D56-FE1D1AA50113",
                            "Etd_Id": "767A547D-0A8D-4FA8-A322-113E809CF0D8",
                            "ClasseAnn_Id": "B7E92F28-EB91-4ABC-A8FA-A32655C12F96"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "9AE63848-FE0B-4DC7-BD17-AD0507114BF1",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "8630FA52-73F4-47EA-AD0A-114FDE70F3AD",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOUF",
                "Etd_Prenom": "BAYE ABDOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-07-20T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "MSA-Registre 193",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41",
                        "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F2E31670-945E-4BA5-87FD-AD4C4300CC87",
                            "Etd_Id": "8630FA52-73F4-47EA-AD0A-114FDE70F3AD",
                            "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                            "Niv_Id": "9A5EF238-A019-4512-998B-0A4AE5747160",
                            "Cls_Nom": "MOYENNE SECTION-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DDD11AC5-D652-4C05-9912-115DA0847E35",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "CHEIKH BACHIROU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2018-12-20T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MINAME",
                "Etd_Remarque": "GSA-Registre 319",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731",
                        "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "74D606EC-A9DD-442C-ABE8-D655BB43FE61",
                            "Etd_Id": "DDD11AC5-D652-4C05-9912-115DA0847E35",
                            "ClasseAnn_Id": "6B1C40E1-C954-40C3-8B73-F4E03E36C731"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "523214DC-F413-460A-B08F-8A2D946C0723",
                            "Niv_Id": "ED2691EF-3257-459C-A6D2-1F7BC2590F06",
                            "Cls_Nom": "GRANDE SECTION -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "46697838-E5BF-4125-B66E-115E1A986FB0",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "NDEYE MARA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2019-11-11T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MINAME",
                "Etd_Remarque": "MSA-Registre 195",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41",
                        "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F8A69844-0CD1-4E3E-938F-533F9C048F16",
                            "Etd_Id": "46697838-E5BF-4125-B66E-115E1A986FB0",
                            "ClasseAnn_Id": "3DCA5677-EE28-4B4B-A323-292215765F41"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C4DBBB7F-8B7E-4BB0-8702-5152C27E5B06",
                            "Niv_Id": "9A5EF238-A019-4512-998B-0A4AE5747160",
                            "Cls_Nom": "MOYENNE SECTION-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "41525887-F4EE-40DE-BEA5-11856E85F39C",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "DABA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-02-03T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAME",
                "Etd_Remarque": "6eB-Registre 3462",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38",
                        "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "EC1AC7FD-7954-4AC2-A8C6-EEA978217FEA",
                            "Etd_Id": "41525887-F4EE-40DE-BEA5-11856E85F39C",
                            "ClasseAnn_Id": "3B4FAD17-1F8C-43B5-A227-90BBD6098E38"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "7490BF02-2E99-427E-948F-D900BF0B7224",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "6E8322E4-75DE-4ACB-8297-1193834622A9",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "DIAWARA",
                "Etd_Prenom": "AISSATOU LESS",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2021-01-22T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "MBACKE",
                "Etd_Remarque": "PSA-Registre 14",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": []
            },
            {
                "Etd_Id": "FFAE7F38-D7B4-4630-820C-11B441967DEF",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOUF",
                "Etd_Prenom": "CHEIKH ABDOU LAHAT MBACKE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-05-14T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "CE1A-Registre 1263",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                        "Cls_Id": "7DBE7033-1CE8-46AC-98FC-1592512958BC",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "448195FD-6267-4518-8F02-EB5C44701AE9",
                            "Etd_Id": "FFAE7F38-D7B4-4630-820C-11B441967DEF",
                            "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67"
                        },
                        "matieresClasseAnnee": [
                            {
                                "ClsAnnMat_Id": "4FC6852F-3F30-4F77-AC80-2A6496DDEF41",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "è-uè-u-èu-èu-",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "D5C88D2F-38D2-49B6-B593-5C2C15117236",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation 2",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "97A5F933-31BE-40E2-B631-67DA4B9F6F41",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "dsqdssqd",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "4E52546D-3F87-4712-BFC1-8BD5AEFD747C",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "lkjhgfds",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "304A3941-9C6F-4D66-9A4D-8D450F4B603C",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "ytretr",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "08A7F190-AE2D-4788-B215-A128836ABC9E",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "poijhgf",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "255F4F40-9821-4B84-A519-A1AC126ECEF1",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": "feeeeeee",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "BBCD0813-E85C-4625-87F9-BFE2153ED4EA",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation 3",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "E7D909F0-DB8A-4BFA-AAE0-C0A8CCA173FC",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "34C1F885-84AB-4476-BB14-3EA1B0D1FE00",
                                "Description": null,
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "E666EAC5-30C2-41BD-83E0-EC9BCB6010C4",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                "Ens_Id": "4A6007CC-380A-452C-BEA7-9E2A8C48D3B7",
                                "Description": "aaaaaaaaaa",
                                "matiere": {
                                    "Mat_Id": "E9C39C09-1601-40FA-81D4-C91CABFC8CE2",
                                    "Mat_Nom": "CEM1-Matiere 1",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "77F343D8-EDBD-4276-AA19-ACFEF51E852D",
                                        "Dom_Nom": "Domaine5"
                                    }
                                }
                            },
                            {
                                "ClsAnnMat_Id": "860D0FC4-69A9-4F72-AEDF-FD1B0D610D06",
                                "ClasseAnn_Id": "231F0E1A-F3A1-466B-B5D7-0C3D96307D67",
                                "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                "Ens_Id": "EB9D8698-DADF-47C5-8341-D4F90ECB6BA0",
                                "Description": "test affectation",
                                "matiere": {
                                    "Mat_Id": "195617EE-48EF-4CEF-8F77-026833EC97E8",
                                    "Mat_Nom": "CEM1-Matiere 2",
                                    "niveauMatiere": {
                                        "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                                        "Niv_Nom": "CE1 "
                                    },
                                    "domaineMatiere": {
                                        "Dom_Id": "E6C90EE5-BD31-4582-BCE3-5F6286E99BA5",
                                        "Dom_Nom": "Domaine1"
                                    }
                                }
                            }
                        ],
                        "AnneeClasse": {
                            "Cls_Id": "7DBE7033-1CE8-46AC-98FC-1592512958BC",
                            "Niv_Id": "66339F59-EF93-411E-9DBF-D7EF8FE3E6F6",
                            "Cls_Nom": "CE1 -A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "504529DC-FF2E-46B2-9E42-11BA270928F3",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "GAYE",
                "Etd_Prenom": "ABDOU LAHAD",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2006-10-15T00:00:00.000Z",
                "Etd_LieuNaissance": "MBACKE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU TANZIL",
                "Etd_Remarque": "3eC-Registre 4395",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378",
                        "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "1FA44D67-9BE2-4EF4-BE88-0F4188A5A7A4",
                            "Etd_Id": "504529DC-FF2E-46B2-9E42-11BA270928F3",
                            "ClasseAnn_Id": "E492B5DA-8962-40E4-A7D8-519DFFF48378"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5024E25C-1377-4180-97AC-2BB04E0A8B3E",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "F0BEF6F7-63B8-4926-81D8-11C146F59D4B",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOP",
                "Etd_Prenom": "MODOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "1899-12-30T00:00:00.000Z",
                "Etd_LieuNaissance": "",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "BARAB BA",
                "Etd_Remarque": "CPD-Registre 1131",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "A061C541-DF47-4DB7-92C8-40EE8980D52E",
                        "Cls_Id": "93567137-0F6A-4BC4-8236-D80BC4F85348",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "474DED69-90C6-493A-BE89-C31FC6C2514E",
                            "Etd_Id": "F0BEF6F7-63B8-4926-81D8-11C146F59D4B",
                            "ClasseAnn_Id": "A061C541-DF47-4DB7-92C8-40EE8980D52E"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "93567137-0F6A-4BC4-8236-D80BC4F85348",
                            "Niv_Id": "40D5F8FA-E50D-4D61-8603-F7B4207E16AE",
                            "Cls_Nom": "CP-D",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "75ABEAAD-D209-4BB4-8A77-11C1D21EC28A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "DIOUF",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-03-20T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MINAM",
                "Etd_Remarque": "5eC-Registre 3877",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B",
                        "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "15270244-6C3F-42A6-9DD1-34878379F92E",
                            "Etd_Id": "75ABEAAD-D209-4BB4-8A77-11C1D21EC28A",
                            "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "9A43ED4D-7925-44CC-B1A3-11CF0429841E",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "SYLLA",
                "Etd_Prenom": "FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2011-09-11T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU KHOUDOSS",
                "Etd_Remarque": "5eC-Registre 3856",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B",
                        "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "FF9EBB8F-1968-48F9-9BB3-CBDC8E1A9806",
                            "Etd_Id": "9A43ED4D-7925-44CC-B1A3-11CF0429841E",
                            "ClasseAnn_Id": "7E294C18-21DB-4D43-A0F1-8CB43CB6BE2B"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "5B45FBF7-6E32-485A-8B1C-CBE99D60DA5F",
                            "Niv_Id": "ABC93CE4-1149-460F-8E07-59E9E334219A",
                            "Cls_Nom": "5e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "558A001E-FC25-4A25-982B-11D6AB0E18AD",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "NDIAYE",
                "Etd_Prenom": "NDEYE COUNTA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2009-06-02T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CM2C-Registre 2342",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1",
                        "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "338D8428-F75E-476D-AB89-D834FDE713A2",
                            "Etd_Id": "558A001E-FC25-4A25-982B-11D6AB0E18AD",
                            "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "2BE90C1D-6714-4F4D-A3AF-11E6A6C12F3F",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "NDAO",
                "Etd_Prenom": "ABO MBACKE",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-11-18T00:00:00.000Z",
                "Etd_LieuNaissance": "DAKAR",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CM2C-Registre 2530",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1",
                        "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "A7485DFD-F051-4367-8981-DFCC8CA9ED01",
                            "Etd_Id": "2BE90C1D-6714-4F4D-A3AF-11E6A6C12F3F",
                            "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "C40CF7B2-1038-4CD1-B812-11ED98F08D73",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "D2821B37-77E9-4B20-B67E-5995ADBD825E",
                "Etd_Nom": "FALL",
                "Etd_Prenom": "SERIGNE FALLOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2005-02-18T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "4EC-Registre 4144",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875",
                        "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "4940E6D4-4B18-4C1A-89D5-9A771E50DC58",
                            "Etd_Id": "C40CF7B2-1038-4CD1-B812-11ED98F08D73",
                            "ClasseAnn_Id": "59B551F5-C4E0-4ECE-AF55-D3E1C00C4875"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1279EAE9-2BEA-465C-A711-45924EB9D9F7",
                            "Niv_Id": "6F0BC55A-BB2D-4DAD-A2FB-2E58BEAF3EF7",
                            "Cls_Nom": "4e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "6D5EA28F-AC24-4AC5-8A19-11FD15CB4D31",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "SOKHNA ALIMATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-03-27T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "TOUBA MOSQUEE",
                "Etd_Remarque": "6eA-Registre 3364",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF",
                        "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "FFDC43AD-F2B2-4331-B33B-0044CD8F8543",
                            "Etd_Id": "6D5EA28F-AC24-4AC5-8A19-11FD15CB4D31",
                            "ClasseAnn_Id": "950BE88D-AB7D-4047-9EAD-1D0DF34A76BF"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "083F8081-73AB-4035-B791-F6F703A6B3DB",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-A",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "DF5CDC8E-FFBF-4DEF-83D2-12271FBCEA1A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "WADE",
                "Etd_Prenom": "MAME FATOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2012-05-03T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DIANATOU",
                "Etd_Remarque": "6eC-Registre 3540",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C",
                        "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "36E705AA-1B6A-4D19-B7EE-B514D2F54550",
                            "Etd_Id": "DF5CDC8E-FFBF-4DEF-83D2-12271FBCEA1A",
                            "ClasseAnn_Id": "FA064D69-DCFA-4BD9-A9B6-3E03CD5FAF0C"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "1C87D9E8-815E-4F5E-B0F2-EF30253DF3F3",
                            "Niv_Id": "85BE97EA-6F84-4EF0-8CAA-C727D096320A",
                            "Cls_Nom": "6e-C",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "1CB799DB-9055-4A39-A253-1232EE8BB69A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "MBACKE",
                "Etd_Prenom": "SOKHNA BINETOU",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-09-13T00:00:00.000Z",
                "Etd_LieuNaissance": "RUFISQUE",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "NDAME",
                "Etd_Remarque": "3eB-Registre 4347",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8",
                        "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "F6F2A236-8B59-49CB-9B1B-9115BC722402",
                            "Etd_Id": "1CB799DB-9055-4A39-A253-1232EE8BB69A",
                            "ClasseAnn_Id": "D8F67C89-2340-47B4-A78C-8952C118B7A8"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "C168EA83-BB04-4FAC-BC17-4DB58E1C7E07",
                            "Niv_Id": "E756FD83-524A-4CEF-BC68-2436B17D8C06",
                            "Cls_Nom": "3e-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "871A1B5A-DBCA-435E-8451-123E734B633A",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "E603DABF-4159-4E0B-BEF4-C8339DA8C5CC",
                "Etd_Nom": "MARONE",
                "Etd_Prenom": "ANGEL ACHOURA BALY",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2016-01-02T00:00:00.000Z",
                "Etd_LieuNaissance": "TOUBA",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "DAROU MARNANE",
                "Etd_Remarque": "CE2B-Registre 1715",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7",
                        "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "871E7D45-A829-4F53-8C70-7F3868F4D772",
                            "Etd_Id": "871A1B5A-DBCA-435E-8451-123E734B633A",
                            "ClasseAnn_Id": "1B0D9B86-F7F5-43DC-B27A-8C060596F1E7"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "238E25B0-3ADF-40C5-BA53-D6F1A46D3BA5",
                            "Niv_Id": "54C0E21F-EA40-4CB4-BE92-6E4D181B9509",
                            "Cls_Nom": "CE2-B",
                            "Classe_Description": null
                        }
                    }
                ]
            },
            {
                "Etd_Id": "A5DFA9F1-71AB-4B18-8893-12424ED196F9",
                "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                "Sex_Id": "5CBDA9A3-22A9-49F1-873D-5FB23E0D1156",
                "Etd_Nom": "LO",
                "Etd_Prenom": "FATIMA",
                "Etd_Matricule": null,
                "Etd_Photo": null,
                "Etd_DateNaissance": "2010-09-25T00:00:00.000Z",
                "Etd_LieuNaissance": "GOLF SUD",
                "Etd_CIN": null,
                "Etd_Tel": null,
                "Etd_Mail": null,
                "Etd_Adresse": "GOUYE MBIND",
                "Etd_Remarque": "CM2C-Registre 2689",
                "Etd_DateInscription": null,
                "ecoleEtudiant": {
                    "Ecole_Id": "3FA85F64-5717-4562-B3FC-2C963F66AFA6",
                    "Ecole_Nom": "Tazawoudous Sikhar Keur Badiène Maï"
                },
                "classesEtudiant": [
                    {
                        "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1",
                        "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                        "Ann_Id": "B90DB743-CB04-4953-AD80-E3714CA6E891",
                        "EtudiantClasseAnnee": {
                            "EtdClasseAnn_Id": "277D7663-F8B9-4675-826D-FB0B70871699",
                            "Etd_Id": "A5DFA9F1-71AB-4B18-8893-12424ED196F9",
                            "ClasseAnn_Id": "58686D4A-1488-4287-91D8-9F592F92A6C1"
                        },
                        "matieresClasseAnnee": [],
                        "AnneeClasse": {
                            "Cls_Id": "8424ADE4-A8F9-4EDC-93B9-182DA8EEDE9E",
                            "Niv_Id": "9AD8BDA1-2115-4EA6-A945-B98BF9A014E7",
                            "Cls_Nom": "CM2 -C",
                            "Classe_Description": null
                        }
                    }
                ]
            }
        ];

          setData(dataExemple);
        } catch (error) {
          console.error("Erreur lors de la récupération des enseignants:", error);
        }
      };
      getEnseignants();
    }, []);

    const handleStatusChange = (Etd_Id, status) => {
        setData(prevData =>
            prevData.map(student =>
                student.Etd_Id === Etd_Id ? { ...student, statut: status, retard: status === 'Retard' ? student.retard : null } : student
            )
        );
    };

    const handleRetardChange = (Etd_Id, minutes) => {
        setData(prevData =>
            prevData.map(student =>
                student.Etd_Id === Etd_Id ? { ...student, retard: minutes } : student
            )
        );
    };

    // const handleSubmit = () => {
    //     console.log('Données soumises :', data);
    //     alert('Données enregistrées !');
    // };

    const handleSubmit = async () => {
        const formattedData = data.map(student => ({
          Etd_Id: student.Etd_Id, // ID de l'étudiant
          Ens_Id: selectedProfesseurId, 
          Ecole_Id: "", 
          Mat_Id: "", 
          EtdClasseAnn_Id: student.classesEtudiant[0]?.EtudiantClasseAnnee?.EtdClasseAnn_Id, // Association classe-étudiant
          ClsAnnMat_Id: student.classesEtudiant[0]?.ClasseAnn_Id, // Matière associée
          Presence_Status: student.statut || 'Présent', // Statut de présence
          Presence_Justification: student.retard ? `${student.retard} minutes` : null, // Justification
          Date_Presence: new Date().toISOString().split('T')[0], // Date actuelle
        }));
      
        console.log('Données soumises :', formattedData);
      
        try {
          const response = await axios.post('http://localhost:3002/api/enseignants/presences', formattedData);
          alert('Données enregistrées avec succès !');
          console.log(response.data);
        } catch (error) {
          console.error('Erreur lors de l\'enregistrement des présences :', error);
          alert('Une erreur est survenue lors de l\'enregistrement des données.');
        }
      };
    

    return (
        <Fragment>
            <H4 attrH4={{ className: 'text-muted my-3' }}>Gestion des Présences</H4>
            <DataTable
                data={data}
                columns={studentTableColumns(handleStatusChange, handleRetardChange)}
                striped
                pagination
            />
            <div className="d-flex justify-content-end mt-3">
                <Btn attrBtn={{ color: 'success', onClick: handleSubmit }}>
                    Enregistrer les Présences
                </Btn>
            </div>
        </Fragment>
    );
};

export default DataTableComponent;
