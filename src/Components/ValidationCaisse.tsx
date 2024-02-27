import React, { useState } from "react";
import LandingPage from "../Pages/LandingPage";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { typeope,notif,caisse,sortie,personne,typeCaisse } from "../data";


interface Caisse {
  numero?: string;
  piece?: string;
  date?: string;
  libelle?: string;
  montant?: number;
  caisse?: string;
  notif?: string;
  profil?: string;
  type?: string;
}

interface Type {
  name?: string;
  code: number | null;
}


export default function ValidationCaisse() {
  const [selectedTypeCaisse, setSelectedTypeCaisse] = useState<Type | null>(
    null
  );
  const [selectedCaisse, setSelectedCaisse] = useState<Type | null>(null);
  const [selectedSortie, setSelectedSortie] = useState<Type | null>(null);
  const [selectedTypeope, setSelectedTypeope] = useState<Type | null>(null);
  const [selectedPersonne, setSelectedPersonne] = useState<Type[] | null>([]);
  const [selectedNotif, setSelectedNotif] = useState<Type | null>(null);
  const [selectedLibelle, setSelectedLibelle] = useState<string | undefined>(
    ""
  );
  const [selectedMontant, setSelectedMontant] = useState<number | undefined>(
    undefined
  );
  const [products, setProducts] = useState<Caisse[]>([]);
  const [isInputActive, setIsInputActive] = useState(false);

  const handleNotifChange = (e: DropdownChangeEvent) => {
    const selectedValue = e.value;
    setSelectedNotif(selectedValue);
    if (
      selectedValue &&
      (selectedValue.code === 2 || selectedValue.code === 3)
    ) {
      setIsInputActive(true);
    } else {
      setIsInputActive(false);
      setSelectedPersonne(null);
    }
  };
  const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCaisse: Caisse = {
      numero: "26",
      piece: "290873",
      date: formattedDate,
      libelle: selectedLibelle,
      montant: selectedMontant,
      caisse: selectedCaisse?.name,
      notif: selectedNotif?.name,
      profil: selectedPersonne?.map((item) => item.name).join(", "),
      type: selectedSortie?.name,
    };

    setProducts((prevData) => [...prevData, newCaisse]);
    setSelectedCaisse(null);
    setSelectedLibelle("");
    setSelectedMontant(0);
    setSelectedNotif(null);
    setSelectedPersonne(null);
    setSelectedSortie(null);
  };
  return (
    <LandingPage>
      <Panel header="Validation Caisse">
        <Fieldset legend="Ajouter" style={{ marginTop: "-30px" }}>
          <div
            className="formgrid grid text-xs"
            style={{ marginBottom: "-20px", marginTop: "10px" }}
          >
            <div className="field col-6 md:col-3 lg:col-3">
              <label>CAISSE</label>

              <Dropdown
                className="input-style class text-color  p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder={typeCaisse[0].name}
                value={selectedTypeCaisse}
                onChange={(e) => setSelectedTypeCaisse(e.value)}
                options={typeCaisse}
                optionLabel="name"
              />
            </div>
            <div className="field col-6 md:col-3 lg:col-3">
              <label>Type d'operations</label>
              <Dropdown
                className="input-style class text-color  p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder={typeope[0].name}
                value={selectedTypeope}
                onChange={(e) => setSelectedTypeope(e.value)}
                options={typeope}
                optionLabel="name"
              />
            </div>
            <div className="field col-6 md:col-2 lg:col-2">
              <label>Periode</label>
              <input
                id="lastname2"
                type="text"
                className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              />
            </div>
            <div className="field col-6 md:col-2 lg:col-2 mt-3">
              <Button label="Imprimer" className="buton-input w-full " />
            </div>
            <div className="field col-6 md:col-2 lg:col-2 mt-3">
              <Button label="Rechercher" className="buton-input w-full" />
            </div>
          </div>
        </Fieldset>

        <Fieldset legend="Liste">
          <form
            onSubmit={handleSubmit}
            className="formgrid grid text-xs"
            style={{ marginBottom: "-10px" }}
          >
            <div className="field col-6 md:col-2 lg:col-2">
              <Dropdown
                editable
                className="input-style text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder="Caisse"
                value={selectedCaisse}
                onChange={(e) => setSelectedCaisse(e.value)}
                options={caisse}
                optionLabel="name"
              />
            </div>
            <div
              className={`field col-6 ${
                !isInputActive ? "md:col-3 lg:col-3" : " md:col-2 lg:col-2"
              }`}
            >
              <input
                type="text"
                className="input-style text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder="Libelle"
                value={selectedLibelle}
                onChange={(e) => setSelectedLibelle(e.target.value)}
              />
            </div>
            <div className="field col-6 md:col-2 lg:col-2 ">
              <Dropdown
                editable
                className="input-style  text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder="Sortie"
                value={selectedSortie}
                onChange={(e) => setSelectedSortie(e.value)}
                options={sortie}
                optionLabel="name"
              />
            </div>
            <div
              className={`field col-6 ${
                !isInputActive ? "md:col-2 lg:col-2" : " md:col-1 lg:col-1"
              }`}
            >
              <input
                type="number"
                min={0}
                className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder="Montant"
                value={selectedMontant}
                onChange={(e) => setSelectedMontant(Number(e.target.value))}
              />
            </div>
            <div className="field col-6 md:col-2 lg:col-2">
              <Dropdown
                editable
                className="input-style  text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder={notif[0].name}
                value={selectedNotif}
                onChange={handleNotifChange}
                options={notif}
                optionLabel="name"
              />
            </div>
            <div
              className={`flex col-6 ${
                !isInputActive ? "md:col-1 lg:col-1" : " md:col-3 lg:col-3"
              }`}
            >
              {isInputActive && (
                <MultiSelect
                  className={`input-style text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full ${
                    isInputActive ? "" : "disabled-background"
                  }`}
                  value={selectedPersonne}
                  onChange={(e: MultiSelectChangeEvent) =>
                    setSelectedPersonne(e.value)
                  }
                  display="chip"
                  placeholder="Adressé à "
                  disabled={!isInputActive}
                  options={personne}
                  optionLabel="name"
                />
              )}
              <Button
                label="Valider"
                icon="pi pi-check-square"
                className="buton-check mt-1 w-full border-1 border-solid surface-border border-round"
              />
            </div>
          </form>
          <DataTable
            value={products}
            paginator
            rows={5}
            tableStyle={{
              minWidth: "50rem",
              fontSize: "small",
              marginBlock: "-10px",
            }}
            scrollable
            scrollHeight="400px"
          >
            <Column field="numero" header="N°"></Column>
            <Column field="piece" header="N°piece"></Column>
            <Column field="date" header="Date"></Column>
            <Column
              field="libelle"
              header="Libelle"
              style={{ width: "20%" }}
            ></Column>
            <Column field="montant" header="Montant"></Column>
            <Column
              field="caisse"
              header="Caisse"
              style={{ width: "10%" }}
            ></Column>
            <Column field="notif" header="Notif"></Column>
            <Column field="profil" header="Profil"></Column>
            <Column field="type" header="Type"></Column>
          </DataTable>
        </Fieldset>
      </Panel>
    </LandingPage>
  );
}
