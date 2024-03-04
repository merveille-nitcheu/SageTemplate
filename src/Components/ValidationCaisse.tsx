import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LandingPage from "./LandingPage";
import { useNavigate, useParams } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import { MultiSelect, MultiSelectChangeEvent } from "primereact/multiselect";
import { InputText } from "primereact/inputtext";
import { SplitButton } from "primereact/splitbutton";

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
  setProduct?: Dispatch<SetStateAction<Product>>;
  product?: Product;
  products?: Product[];
  setProducts?: Dispatch<SetStateAction<Product[]>>;
  setSelectedProduct?: Dispatch<SetStateAction<Product>>;
  selectedProduct?: Product;
}

interface Type {
  name?: string;
  code: number | null;
}
const typeope: Type[] = [
  { name: "Tous", code: null },
  { name: "Sortie", code: 1 },
  { name: "Entrées", code: 2 },
  { name: "Fond de Caisse", code: 3 },
  { name: "Transfert de caisse", code: 4 },
  { name: "Versement bancaire", code: 5 },
];
const caisse: Type[] = [{ name: "Tous", code: null }];
const sortie: Type[] = [{ name: "Tous", code: null }];
const TypeCaisse: Type[] = [{ name: "Tous", code: null }];

const mvt: Type[] = [
  { name: "10100000 - Capital", code: null },
  { name: "10400000 - Primes liées au capital social", code: 1 },
  { name: "10500000 - Ecart de réévaluation", code: 2 },
];

const personne: Type[] = [
  { name: "Atabe", code: 1 },
  { name: "SIAKAM", code: 2 },
];

const notif: Type[] = [
  { name: "Aucun", code: null },
  { name: "Mail", code: 2 },
  { name: "Sms", code: 3 },
];
const produit: Product[] = [
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 1,
    compte_general: "Bamboo Watch",
    compte_tiers: "Bamboo Watch",
    libelle_ecriture: "Bamboo Watch",
    date_echeance: "Bamboo Watch",
    position_journal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 2,
    compte_general: "Bamboo Watch",
    compte_tiers: "Bamboo Watch",
    libelle_ecriture: "Bamboo Watch",
    date_echeance: "Bamboo Watch",
    position_journal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 3,
    compte_general: "Bamboo Watch",
    compte_tiers: "Bamboo Watch",
    libelle_ecriture: "Bamboo Watch",
    date_echeance: "Bamboo Watch",
    position_journal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 4,
    compte_general: "Bamboo Watch",
    compte_tiers: "Bamboo Watch",
    libelle_ecriture: "Bamboo Watch",
    date_echeance: "Bamboo Watch",
    position_journal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 5,
    compte_general: "Bamboo Watch",
    compte_tiers: "Bamboo Watch",
    libelle_ecriture: "Bamboo Watch",
    date_echeance: "Bamboo Watch",
    position_journal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 6,
    compte_general: "Bamboo Watch",
    compte_tiers: "Bamboo Watch",
    libelle_ecriture: "Bamboo Watch",
    date_echeance: "Bamboo Watch",
    position_journal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
];

export default function ValidationCaisse() {
  const navigate = useNavigate();
  const params = useParams();
  const [selectedTypeCaisse, setSelectedTypeCaisse] = useState<Type | null>(
    null
  );
  const [selectedCaisse, setSelectedCaisse] = useState<Type | null>(null);
  const [selectedSortie, setSelectedSortie] = useState<Type | null>(null);
  const [selectedMvt, setSelectedMvt] = useState<Type | null>(null);
  const [selectedTypeope, setSelectedTypeope] = useState<Type | null>(null);
  const [selectedPersonne, setSelectedPersonne] = useState<Type | null>(null);
  const [selectedNotif, setSelectedNotif] = useState<Type | null>(null);
  const [product, setProduct] = useState<Product>({});
  const [products, setProducts] = useState<Product[]>(produit);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [ShowProduct, setShowProduct] = useState<Product[]>();
  const [isInputActive, setIsInputActive] = useState(false);

  useEffect(() => {
    if (params) {
      let _product = products.filter((val) => val.type === params.type);
      setShowProduct(_product);
    }
  }, [products]);

  const onRowSelect = (event: any) => {
    const selectedProduct = event.data;

    navigate(`/editproduct/${selectedProduct.type}`);
  };

  const handleNotifChange = (e: DropdownChangeEvent) => {
    const selectedValue = e.value;
    setSelectedNotif(selectedValue);
    console.log(selectedValue.code);
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
                placeholder={TypeCaisse[0].name}
                value={selectedTypeCaisse}
                onChange={(e) => setSelectedTypeCaisse(e.value)}
                options={TypeCaisse}
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
          <div
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
          </div>
          <DataTable
            selectionMode="single"
            selection={selectedProduct!}
            onSelectionChange={(e) => setSelectedProduct(e.value)}
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
            <Column field="reference" header="N°"></Column>
            <Column field="reference" header="N°piece"></Column>
            <Column field="reference" header="Date"></Column>
            <Column field="reference" header="Libelle"></Column>
            <Column field="reference" header="Montant"></Column>
            <Column field="reference" header="Caisse"></Column>
            <Column field="reference" header="Caissier"></Column>
            <Column field="reference" header="Type"></Column>
          </DataTable>
        </Fieldset>
      </Panel>
    </LandingPage>
  );
}
