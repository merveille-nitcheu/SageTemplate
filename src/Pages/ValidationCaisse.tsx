import React, { useState } from "react";
import LandingPage from "./LandingPage";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { Nullable } from "primereact/ts-helpers";
import { typeope, notif, caisse, sortie, personne, typeCaisse } from "../data";

interface Caisse {
  numero?: number;
  piece?: string;
  date?: Date | null | undefined;
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
  const [selectedCaisse, setSelectedCaisse] = useState<Type | null| undefined>(null);
  const [Caisse, setCaisse] = useState<Caisse>();
  const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);
  const [date, setDate] = useState<Nullable<Date | null>>(null);
  const [selectedSortie, setSelectedSortie] = useState<Type | null| undefined>(null);
  const [selectedTypeope, setSelectedTypeope] = useState<Type | null>(null);
  const [selectedPersonne, setSelectedPersonne] = useState<Type[] | null| undefined>([]);
  const [selectedNotif, setSelectedNotif] = useState<Type | null| undefined>(null);
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

    if (Caisse) {

     const productToUpdate = products.find((product) => product.libelle === Caisse.libelle);

  if (productToUpdate) {
    const updatedProduct = {
      ...productToUpdate,
      date: date,
        libelle: selectedLibelle,
        montant: selectedMontant,
        caisse: selectedCaisse?.name,
        notif: selectedNotif?.name,
        profil: selectedPersonne?.map((item) => item.name).join(", "),
        type: selectedSortie?.name,
    };

   const updatedProducts = products.map((product) => {
      if (product === productToUpdate) {
        return updatedProduct;
      }
      return product;
    });

   setProducts(updatedProducts);
    ;} 
    
  
  } else {
      let i = 1;
      const newCaisse: Caisse = {
        numero: i + 1,
        piece: "290873",
        date: date,
        libelle: selectedLibelle,
        montant: selectedMontant,
        caisse: selectedCaisse?.name,
        notif: selectedNotif?.name,
        profil: selectedPersonne?.map((item) => item.name).join(", "),
        type: selectedSortie?.name,
      };

      setProducts((prevData) => [...prevData, newCaisse]);
    }

    setSelectedCaisse(null);
    setSelectedLibelle("");
    setSelectedMontant(0);
    setSelectedNotif(null);
    setSelectedPersonne(null);
    setSelectedSortie(null);
    setDate(null);
  };

  const actionBodyTemplate = (rowData: Caisse) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-trash" rounded text severity="danger" onClick={() => deleteSelectedProducts(rowData)}
          style={{ width: "22px", height: "22px" }}/>
      </React.Fragment>
    );
  };

  const deleteSelectedProducts = (caisse: Caisse) => {
    let _products = products.filter((val) => val.libelle !== caisse.libelle);
    setProducts(_products);
  };

  const onRowSelect = (event: any) => {
    const Caisse = event.data;
    const selectedCaisseValue = caisse.find((item) => item.name === Caisse?.caisse);
  const selectedNotifValue = notif.find((item) => item.name === Caisse?.notif);
  if (Caisse.profil !== undefined) {
    const selectedPersonneValues = personne?.filter((item) => Caisse?.profil.includes(item.name));
    setSelectedPersonne(selectedPersonneValues);
    
  } else {

    setSelectedPersonne(null);
    
  }
  

  const selectedSortieValue = sortie.find((item) => item.name === Caisse?.type);

  setSelectedCaisse(selectedCaisseValue);
  setSelectedLibelle(Caisse?.libelle);
  setSelectedMontant(Caisse?.montant);
  setSelectedNotif(selectedNotifValue);
 
  setSelectedSortie(selectedSortieValue);
  setDate(Caisse?.date);
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
              <Calendar
                value={dates}
                onChange={(e) => setDates(e.value)}
                selectionMode="range"
                readOnlyInput
                style={{ height: "21px", marginTop: "0.87rem" }}
                placeholder={formattedDate}
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
            <div className="field col-6 md:col-1 lg:col-1">
              <Calendar
                value={date}
                onChange={(e) => setDate(e.value)}
                style={{ height: "21px", marginTop: "0.87rem" }}
                dateFormat="dd/mm/yy"
                placeholder={formattedDate}
              />
            </div>

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
                !isInputActive ? "md:col-2 lg:col-2" : " md:col-2 lg:col-2"
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
                !isInputActive ? "md:col-1 lg:col-1" : " md:col-2 lg:col-2"
              }`}
            >
              {isInputActive && (
                <MultiSelect
                  className={`input-style adress text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full ${
                    isInputActive ? "" : "disabled-background"
                  }`}
                  value={selectedPersonne}
                  /* value={(selectedPersonne && selectedPersonne.length > 0) ? selectedPersonne : (Caisse?.profil ? [Caisse.profil] : [])} */
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
                label="OK"
                icon="pi pi-check-square"
                className="buton-check mt-1 w-full border-1 border-solid surface-border border-round"
              />
            </div>
          </form>
          <DataTable
            value={products}
            selectionMode="single"
            selection={Caisse!}
            onSelectionChange={(e) => setCaisse(e.value)}
            paginator
            rows={5}
            onRowSelect={onRowSelect}
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
            <Column
              field="date"
              header="Date"
              body={(rowData) =>
                rowData.date ? rowData.date.toLocaleDateString() : ""
              }
            />
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
            <Column
              body={actionBodyTemplate}
              exportable={false}
              className="custom-row"
            ></Column>
          </DataTable>
        </Fieldset>
      </Panel>
    </LandingPage>
  );
}
