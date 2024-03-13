import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";

export default function MenuBar() {
  const navigate = useNavigate();

<<<<<<< HEAD
  const itemsmenu: MenuItem[] = [
=======
  const items: MenuItem[] = [
>>>>>>> master
    {
      label: "Fichier",
      icon: "pi pi-file",
    },
    {
      label: "Edition",
    },
    {
      separator: true,
    },
    {
      label: "Structure",
    },
    {
      label: "Traitement",
      icon: "pi pi-cog",
      items: [
        {
          label: "Saisie par piece",
        },
        {
          separator: true,
        },
        {
          label: "Journaux de saisie",
          command: () => navigate("/journaux"),
        },
      ],
    },
    {
      label: "Etat",
    },
    {
      label: "Fenetre",
    },
    {
      label: "Tresorerie",
      items: [
        {
          label: "Demande de validation",
          command: () => navigate("/validation_caisse"),
        },
        {
          separator: true,
        },
        {
          label: "Caisse",
        },
      ],
    },
  ];
  return (
    <div>
<<<<<<< HEAD
      <Menubar model={itemsmenu} className="style-class" />
=======
      <Menubar model={items} className="style-class" />
>>>>>>> master
    </div>
  );
}
