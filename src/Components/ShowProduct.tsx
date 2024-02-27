import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LandingPage from "../Pages/LandingPage";
import { useNavigate, useParams } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { FilterMatchMode } from "primereact/api";
import { SplitButton } from "primereact/splitbutton";
import TopContentShow from "./TopContentShow";
import { prod } from "../data";

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

const type: Type[] = [
  { name: "Toutes les ecritures", code: null },
  { name: "Ecritures lettrées", code: 1 },
  { name: "Ecritures non lettrées", code: 2 },
];


const items = [
  {
    label: "Voir les registres associés",
  },
  {
    label: "Visualiser la piece",
  },
  {
    label: "Visionner les documents rattachés",
  },
];

export default function ShowProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState<Product>({});
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [products, setProducts] = useState<Product[]>(prod);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [ShowProduct, setShowProduct] = useState<Product[]>();

  useEffect(() => {
    if (params) {
      let _product = products.filter((val) => val.type === params.type);
      setShowProduct(_product);
    }
  }, [products]);

  const [filters, setFilters] = useState<DataTableFilterMeta>({
    type: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const onGlobalFilterChange = (e: DropdownChangeEvent) => {
    const { code } = e.target.value;
    let _filters = { ...filters };
    // @ts-ignore
    _filters["type"].value = code;

    setFilters(_filters);
    setSelectedType(e.value);
  };

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-5">
        <SplitButton
          label="Actions"
          icon="pi pi-cog"
          model={items}
          size="small"
          className="buton"
          style={{ backgroundColor: "#3b82f6" }}
        />

        <Dropdown
          value={selectedType}
          onChange={(e: DropdownChangeEvent) => onGlobalFilterChange(e)}
          options={type}
          optionLabel="name"
          className="buton w-full md:w-14rem"
          placeholder="Selectionner les ecritures"
          style={{ marginRight: "20px" }}
        />
      </div>
    );
  };

  const onRowSelect = (event: any) => {
    const selectedProduct = event.data;

    navigate(`/editproduct/${selectedProduct.type}`);
  };

  return (
    <LandingPage>
      <Panel header="Saisie de journaux">
        <Fieldset legend={"Journal: " + ShowProduct?.[0]?.reference}>
          <TopContentShow selectedProduct={selectedProduct} />
        </Fieldset>

        <Fieldset legend="Liste">
          <Toolbar
            style={{
              padding: "0px",
              height: "50px",
              background: "transparent",
              border: "none",
              marginBottom: "10px",
            }}
            left={leftToolbarTemplate}
          />
          <DataTable
            value={products}
            selectionMode="single"
            selection={selectedProduct!}
            onSelectionChange={(e) => setSelectedProduct(e.value)}
            paginator
            rows={5}
            onRowSelect={onRowSelect}
            filters={filters}
            globalFilterFields={["type"]}
            emptyMessage="Pas de Produits disponibles."
            tableStyle={{
              minWidth: "50rem",
              fontSize: "small",
              marginBlock: "-10px",
            }}
          >
            <Column field="reference" header="Code"></Column>
            <Column field="reference" header="Date"></Column>
            <Column field="reference" header="Jour"></Column>
            <Column field="reference" header="N°piece"></Column>
            <Column field="reference" header="N°facture"></Column>
            <Column field="reference" header="Référence"></Column>
            <Column field="reference" header="N°compte général"></Column>
            <Column field="reference" header="N°compte tiers"></Column>
            <Column field="reference" header="Libellé écriture"></Column>
            <Column field="reference" header="Date echeance"></Column>
            <Column field="reference" header="Position journal"></Column>
            <Column field="reference" header="Débit"></Column>
            <Column field="reference" header="Crédit"></Column>
          </DataTable>
        </Fieldset>
      </Panel>
    </LandingPage>
  );
}
