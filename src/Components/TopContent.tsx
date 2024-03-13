import React, { useState } from "react";
import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { useNavigate } from "react-router-dom";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { ListBox, ListBoxChangeEvent } from "primereact/listbox";
import { Producte} from "../data";

interface Libelle {
  name: string;
  code: string;
}

interface VisibilityProps {
  selectedProduct?: Producte;
}
const libelle: Libelle[] = [
  { name: "Acompte/facture", code: "ACC" },
  { name: "Cheque n°", code: "CHEQ" },
  { name: "Facture", code: "FAC" },
  { name: "Reglement facture", code: "REG" },
];
export default function TopContent(props: VisibilityProps) {
  const navigate = useNavigate();
  const [selectedLibelle, setSelectedLibelle] = useState<Libelle | null>(null);

  const messageLibelle = () => {
    return (
      <div
        className="card flex justify-content-center"
        style={{ fontSize: "small" }}
      >
        <ListBox
          value={selectedLibelle}
          onChange={(e: ListBoxChangeEvent) => setSelectedLibelle(e.value)}
          options={libelle}
          optionLabel="name"
          className="w-full md:w-14rem"
        />
      </div>
    );
  };

  const Libelle = () => {
    confirmDialog({
      message: messageLibelle,
      header: "Selection d'un libellé",
      defaultFocus: "accept",
    });
  };

  const itemscontent: MenuItem[] = [
    {
      label: "Fonctions",
      icon: "pi pi-cog",
      items: [
        {
          label: "Equilibrer",
          disabled: !!props.selectedProduct,
        },
        {
          separator: true,
        },
        {
          label: "Imprimer",
        },
        {
          separator: true,
        },
        {
          label: "Libellé",
          command: () => Libelle(),
        },
        {
          separator: true,
        },
        {
          label: "Atteindre",
          command: () => Libelle(),
        },
      ],
    },
    {
      label: "Equilibrer",
      disabled: !!props.selectedProduct,
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
        model={itemscontent}
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
            <span className="span-style">Ancien solde </span>
            <span className="span-style">300 000 </span>
            <span className="span-style">500 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className="span-style">Totaux journal </span>
            <span className="span-style">300 000 </span>
            <span className="span-style">200 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className="span-style">Nouveau solde </span>
            <span className="span-style">300 000 </span>
            <span className="span-style">200 000 </span>
          </div>
        </Card>
      </div>
        <Divider layout="vertical" />

        <Card style={{ width: "80%", fontSize: "small" }}>
          <div style={{ display: "flex" }}>
            <span className="span-style">Ancien solde </span>
            <span className="span-style">300 000 </span>
            <span className="span-style">500 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className="span-style">Totaux journal </span>
            <span className="span-style">300 000 </span>
            <span className="span-style">200 000 </span>
          </div>
          <Divider layout="horizontal" />
          <div style={{ display: "flex" }}>
            <span className="span-style">Nouveau solde </span>
            <span className="span-style">300 000 </span>
            <span className="span-style">200 000 </span>
          </div>
        </Card>
      </div>

      <ConfirmDialog />
    </div>
  );
      <ConfirmDialog />
    </div>
  );
}
