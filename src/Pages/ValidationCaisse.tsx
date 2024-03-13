
import React, { useEffect, useState } from "react";

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

import { NumericFormat } from "react-number-format";
import { SplitButton } from 'primereact/splitbutton';
import { MenuItem,MenuItemCommandEvent} from 'primereact/menuitem';
import {Type,Caisse} from "../data";

export default function ValidationCaisse() {
  const [selectedTypeCaisse, setSelectedTypeCaisse] = useState<Type | null>(
    null
  );

  const [selectedCaisse, setSelectedCaisse] = useState<Type | null | undefined>(
    null
  );
  const [Caisse, setCaisse] = useState<Caisse>();
  const [dates, setDates] = useState<Nullable<(Date | null)[]>>(null);
  const [date, setDate] = useState<Nullable<Date | null>>(null);
  const [selectedSortie, setSelectedSortie] = useState<Type | null | undefined>(
    null
  );
  const [selectedTypeope, setSelectedTypeope] = useState<Type | null>(null);
  const [selectedPersonne, setSelectedPersonne] = useState<
    Type[] | null | undefined
  >([]);
  const [selectedNotif, setSelectedNotif] = useState<Type | null | undefined>(
    null
  );
  const [selectedLibelle, setSelectedLibelle] = useState<string | undefined>(
    ""
  );
  const [status, setStatus] = useState<string | undefined>(
    "en attente"
  );
  const [selectedMontant, setSelectedMontant] = useState<string | undefined>(

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

      const productToUpdate = products.find(
        (product) => product.libelle === Caisse.libelle
      );

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
          status:status,
        };

        const updatedProducts = products.map((product) => {
          if (product === productToUpdate) {
            return updatedProduct;
          }
          return product;
        });

        setProducts(updatedProducts);
      }
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

        status:status,

      };

      setProducts((prevData) => [...prevData, newCaisse]);
    }

    setSelectedCaisse(null);
    setSelectedLibelle("");

    setSelectedMontant("");

    setSelectedNotif(null);
    setSelectedPersonne(null);
    setSelectedSortie(null);
    setDate(null);
  };

  const actionBodyTemplate = (rowData: Caisse) => {
    return (
      <React.Fragment>

        <Button
          icon="pi pi-trash"
          rounded
          text
          severity="danger"
          onClick={() => deleteSelectedProducts(rowData)}
          style={{ width: "22px", height: "22px" }}
        />
      </React.Fragment>
    );
  };
  const items: MenuItem[] = [
    {
        label: 'Validée',
        
    },
    {
        label: 'Rejetée',
       
    },
];

const statusBodyTemplate = (rowData: Caisse, index: any) => {
  const onStatusChange = (event: MenuItemCommandEvent) => {
    const label = event.item.label;
    const updatedProducts = [...products];
    const updatedProduct = updatedProducts.find((product) => {
      return JSON.stringify(product) === JSON.stringify(rowData);
    });
    if (updatedProduct) {
      updatedProduct.status = label; 
    }
    
      setProducts(updatedProducts);
    
  };
  const menuItems: MenuItem[]  = items.map((item) => ({
    label: item.label,
    command: onStatusChange,
  }));

  return (
    <React.Fragment>
      <SplitButton
        label={rowData.status}
        severity={rowData.status === 'Validée' ? 'info' : rowData.status === 'Rejetée' ? 'danger' : 'secondary'}
        icon={rowData.status === 'Validée' ? 'pi pi-check-circle' : rowData.status === 'Rejetée' ? 'pi pi-times-circle' : 'pi pi-info-circle'}
        model={menuItems}
      />
    </React.Fragment>
  );
};


  const deleteSelectedProducts = (caisse: Caisse) => {
    let _products = products.filter((val) => val.libelle !== caisse.libelle);
    setProducts(_products);
  };

  const onRowSelect = (event: any) => {
    const Caisse = event.data;
    const selectedCaisseValue = caisse.find(
      (item) => item.name === Caisse?.caisse
    );
    const selectedNotifValue = notif.find(
      (item) => item.name === Caisse?.notif
    );
    if (Caisse.profil !== undefined) {
      const selectedPersonneValues = personne?.filter((item) =>
        Caisse?.profil.includes(item.name)
      );
      setSelectedPersonne(selectedPersonneValues);
    } else {
      setSelectedPersonne(null);
    }

    const selectedSortieValue = sortie.find(
      (item) => item.name === Caisse?.type
    );

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

              <label>Type de demande</label>

              <Dropdown
                className="input-style class text-color  p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder={typeope[0].name}
                value={selectedTypeope}
                onChange={(e) => setSelectedTypeope(e.value)}
                options={typeope}
                optionLabel="name"
              />
            </div>

            <div className="field col-6 md:col-3 lg:col-3">

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

            <div className="field col-6 md:col-3 lg:col-3 mt-3">

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

                className="input-style text-color px-2  border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"

                placeholder="Caisse"
                value={selectedCaisse}
                onChange={(e) => setSelectedCaisse(e.value)}
                options={caisse}
                optionLabel="name"
              />
            </div>
            <div
              className={`field col-6 ${

                isInputActive ? "md:col-2 lg:col-2" : "md:col-3 lg:col-3"

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


            <div className={"field col-6 md:col-2 lg:col-2"}>
              <NumericFormat
                thousandSeparator={" "}
                allowNegative={false}
                min={0}
                className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
                placeholder="Montant"
                value={selectedMontant !== undefined ? selectedMontant : ""}
                onValueChange={({ value }: { value: string }) =>
                  setSelectedMontant(value !== "" ? value : undefined)
                }

              />
            </div>
            <div className="field col-6 md:col-2 lg:col-2">
              <Dropdown
                editable

                className="input-style text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"

                placeholder={notif[0].name}
                value={selectedNotif}
                onChange={handleNotifChange}
                options={notif}
                optionLabel="name"
              />
            </div>


            <div
              className={`flex col-6 ${
                isInputActive ? "md:col-3 lg:col-3" : "md:col-2 lg:col-2"

              }`}
            >
              {isInputActive && (
                <MultiSelect

                  className={`input-style text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full ${
                    isInputActive ? "mr-3" : "mr-0 disabled-background"

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

                label="Valider"

                className="buton-check mt-1 w-full border-1 border-solid surface-border border-round"
              />
            </div>
          </form>
          <DataTable
            value={products}
            selectionMode="single"
            selection={Caisse!}
            onSelectionChange={(e) => setCaisse(e.value)}

            paginator={products.length > 5}

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

            <Column
              field="date"
              header="Date"
              body={(rowData) =>
                rowData.date ? rowData.date.toLocaleDateString() : ""
              }

              style={{ width: "10%" }}

            />
            <Column
              field="libelle"
              header="Libelle"

              style={{ width: "25%" }}
            ></Column>
            <Column
              field="montant"
              header="Montant"
            ></Column>
            <Column
              field="caisse"
              header="Caisse"
            ></Column>
            <Column
              field="notif"
              header="Notif"
            ></Column>
            <Column
              field="profil"
              header="Profil"
              style={{ width: "15%" }}
            ></Column>
            <Column
              field="status"
              header="Status"
              style={{ width: "15%",paddingLeft:"0px"}}
              body={statusBodyTemplate}
            ></Column>

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
