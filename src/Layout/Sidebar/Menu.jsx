export const MENUITEMS = [
  // Général
  // {
  //   menutitle: "General",
  //   menucontent: "Ready to use Apps",
  //   Items: [
  //     {
  //       icon: "sample-page",
  //       badge2: true,
  //       active: false,
  //       path: `${process.env.PUBLIC_URL}/roles`,
  //       title: "Roles",
  //       type: "link",
  //       role: "general", // Accessible uniquement par le rôle "Général"
  //     },
  //   ],
  // },

  // Enseignant
  {
    menutitle: "Enseignant",
    menucontent: "Ready to use Apps",
    Items: [
      { path: `${process.env.PUBLIC_URL}/enseignant/emploi-du-temps`, type: "link", title: "Emploi du temps", icon: "knowledgebase" },
      {
        title: "Présences",
        icon: "project",
        type: "sub",
        badge: "badge badge-light-secondary",
        badgetxt: "New",
        active: false,
        role: "enseignant", // Accessible uniquement par le rôle "Enseignant"
        children: [
          {
            path: `${process.env.PUBLIC_URL}/enseignant/presences`,
            type: "link",
            title: "Saisie des Présences",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/enseignant/rapport-presences`,
          //   type: "link",
          //   title: "Rapport de Présences",
          // },
        ],
      },
      {
        title: "Notes",
        icon: "project",
        type: "sub",
        badge: "badge badge-light-secondary",
        badgetxt: "New",
        active: false,
        children: [
          // {
          //   path: `${process.env.PUBLIC_URL}/enseignant/saisienotes`,
          //   type: "link",
          //   title: "Saisie des Notes",
          // },
          {
            path: `${process.env.PUBLIC_URL}/enseignant/saisienotes2`,
            type: "link",
            title: "Saisie des Notes",
          },
          // {
          //   path: `${process.env.PUBLIC_URL}/enseignant/consultation-saisienotes`,
          //   type: "link",
          //   title: "Consultation des Notes",
          // },
        ],
      },
    ],
  },

  // Administrateur
  {
    menutitle: "Administrateur",
    menucontent: "Admin-specific menus",
    Items: [
      {
        title: "Dashboard",
        icon: "charts",
        type: "link",
        path: `${process.env.PUBLIC_URL}/administration/dashboard-general`,
        role: "administrateur", // Accessible uniquement par le rôle "Administrateur"
      },
      {
        title: "Gestion des classes",
        icon: "editors",
        type: "link",
        path: `${process.env.PUBLIC_URL}/administration/gestion-classes`,
        role: "administrateur", // Accessible uniquement par le rôle "Administrateur"
      },
      {
        title: "Gestion des salles",
        icon: "editors",
        type: "link",
        path: `${process.env.PUBLIC_URL}/administration/gestion-salles`,
        role: "administrateur", // Accessible uniquement par le rôle "Administrateur"
      },
      {
        title: "Maquettes pedagogiques",
        icon: "editors",
        type: "link",
        path: `${process.env.PUBLIC_URL}/administration/maquette-pedagogique`,
        role: "administrateur", // Accessible uniquement par le rôle "Administrateur"
      },
      {
        title: "Gestion des cours",
        icon: "editors",
        type: "link",
        path: `${process.env.PUBLIC_URL}/administration/gestion-cours`,
        role: "administrateur", // Accessible uniquement par le rôle "Administrateur"
      },
      {
        title: "Gestion Evaluations",
        icon: "editors",
        type: "link",
        path: `${process.env.PUBLIC_URL}/administration/gestion-evaluation`,
        role: "administrateur", // Accessible uniquement par le rôle "Administrateur"
      },
      // {
      //   title: "Gestion des utilisateurs",
      //   icon: "user",
      //   type: "link",
      //   path: `${process.env.PUBLIC_URL}/admin/users`,
      //   role: "administrateur", // Accessible uniquement par le rôle "Administrateur"
      // },
    ],
  },

  // Parent
  {
    menutitle: "Parent",
    menucontent: "Parent-specific menus",
    Items: [
      {
        title: "Progression des élèves",
        icon: "table",
        type: "link",
        path: `${process.env.PUBLIC_URL}/parent/progression`,
        role: "parent", // Accessible uniquement par le rôle "Parent"
      },
    ],
  },
];
