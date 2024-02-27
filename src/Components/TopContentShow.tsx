<<<<<<< HEAD
=======

>>>>>>> master
import React from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
<<<<<<< HEAD
import { Producte} from "../data";



interface VisibilityProps {
  selectedProduct?: Producte;
}

const itemsshow: MenuItem[] = [
  {
    label: "Fonctions",
    icon: "pi pi-cog",
    items: [
      {
        label: "Automatique",
      },
      {
        separator: true,
      },
      {
        label: "Pointer",
      },
      {
        separator: true,
      },
      {
        label: "Annuler",
      },
      {
        separator: true,
      },
      {
        label: "Atteindre",
      },
      {
        separator: true,
      },
      {
        label: "Traitement",
      },
      {
        separator: true,
      },
      {
        label: "Calculer",
      },
      {
        separator: true,
      },
      {
        label: "Imprimer",
      },
    ],
  },
  {
    label: "Automatique",
  },
  {
    label: "Pointer",
  },
  {
    label: "Traitement",
  },
  {
    label: "Imprimer",
    icon: "pi pi-file",
  },
  {
    separator: true,
  },
];
export default function TopContentShow(props: VisibilityProps) {

  return (
    <div>
      <Menubar
        model={itemsshow}
=======

interface Product {
  jour?: string;
  piece?: string;
  reference?: string;
  facture?: string;
  type?: number;
  compte_general?: string;
  compte_tiers?: string;
  libelle_ecriture?: string;
  date_echeance?: string;
  position_journal?: string;
  debit?: string;
  credit?: string;
}
interface VisibilityProps {
  selectedProduct?: Product;
}
export default function TopContentShow(props: VisibilityProps) {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: "Fonctions",
      icon: "pi pi-cog",
      items: [
        {
          label: "Automatique",
        },
        {
          separator: true,
        },
        {
          label: "Pointer",
        },
        {
          separator: true,
        },
        {
          label: "Annuler",
        },
        {
          separator: true,
        },
        {
          label: "Atteindre",
        },
        {
          separator: true,
        },
        {
          label: "Traitement",
        },
        {
          separator: true,
        },
        {
          label: "Calculer",
        },
        {
          separator: true,
        },
        {
          label: "Imprimer",
        },
      ],
    },
    {
      label: "Automatique",
    },
    {
        label: "Pointer",
    },
    {
        label: "Traitement",
    },
    {
      label: "Imprimer",
      icon: "pi pi-file",
    },
    {
      separator: true,
    },
  ];
  return (
    <div>
      <Menubar
        model={items}
>>>>>>> master
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "small",
          height: "20px",
          padding: "0px",
        }}
      />
      <div
        className="card flex justify-content-center"
        style={{ display: "flex", fontSize: "small", marginBlock: "20PX" }}
      >
        <div style={{ display: "inline-grid", marginRight: "20px" }}>
          <>
            <label htmlFor="modele">Modele de saisie: </label>
            <InputText
              id="modele"
              aria-describedby="modele"
              className="input-style p-inputtext-sm"
            />
          </>
          <>
            <label htmlFor="compte">Compte: </label>
            <InputText
              id="compte"
              aria-describedby="compte"
              className="input-style p-inputtext-sm"
              disabled
            />
          </>
        </div>

        <Divider layout="vertical" />

        <Card style={{ width: "80%", fontSize: "small" }}>
          <div style={{ display: "flex" }}>
<<<<<<< HEAD
            <span className="span-style">Solde Lettrage </span>
            <span className="span-style">300 000 </span>
            <span className="span-style">500 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className="span-style">Totaux</span>
            <span className="span-style">300 000 </span>
            <span className="span-style">200 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className="span-style">Solde Compte</span>
            <span className="span-style">300 000 </span>
            <span className="span-style">200 000 </span>
=======
            <span className = 'span-style'>Solde Lettrage </span>
            <span className = 'span-style'>300 000 </span>
            <span className = 'span-style'>500 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className = 'span-style'>Totaux</span>
            <span className = 'span-style'>300 000 </span>
            <span className = 'span-style'>200 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className = 'span-style'>Solde Compte</span>
            <span className = 'span-style'>300 000 </span>
            <span className = 'span-style'>200 000 </span>
>>>>>>> master
          </div>
        </Card>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> master
