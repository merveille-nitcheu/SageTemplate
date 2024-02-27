import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import LandingPage from "../Pages/LandingPage";
import { useNavigate, useParams } from "react-router-dom";
import { Toolbar } from "primereact/toolbar";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Panel } from "primereact/panel";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import AddProduct from "./AddProduct";
import TopContent from "./TopContent";
import { SplitButton } from "primereact/splitbutton";
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


export default function EditProduct() {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState<Product>({});
  const [products, setProducts] = useState<Product[]>(prod);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [ShowProduct, setShowProduct] = useState<Product[]>();
  const items = [
    {
      label: "Analytique",
    },
    {
      label: "Registre",
    },
    {
      label: "Visualisation piece",
    },
    {
      label: "Informations libres",
    },
    {
      label: "Lettrage",
      disabled: !!selectedProduct,
    },
    {
      label: "Interrogations genérales",
    },
    {
      label: "Interrogations tiers",
      disabled: !!selectedProduct,
    },
    {
      label: "Documents attachés",
    },
  ];

  useEffect(() => {
    if (params) {
      let _product = products.filter((val) => val.type === params.type);
      setShowProduct(_product);
    }
  }, [products]);

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-5">
        <SplitButton
          label="Actions"
          icon="pi pi-cog"
          model={items}
          size="small"
          className="buton"
          disabled={!selectedProduct}
          style={{ backgroundColor: "#3b82f6" }}
        />
        <Button
          label="Ouvrir"
          className="buton p-button-help"
          disabled={!selectedProduct}
          style={{ backgroundColor: "#3b82f6", border: "none" }}
          onClick={() => navigate(`/editproduct/${selectedProduct?.type}`)}
        />
      </div>
    );
  };

  /* const onRowSelect = (event: any) => {
    const selectedProduct = event.data;

    navigate(`/editproduct/${selectedProduct.type}`);
  }; */

  return (
    <LandingPage>
      <Panel header="Saisie de journaux">
        <Fieldset
          style={{
            paddingBlock: "10px",
            paddingTop: "25px",
            marginTop: "-20px",
          }}
        >
          <TopContent selectedProduct={selectedProduct} />
        </Fieldset>
        <Fieldset legend="Ajouter" style={{ marginBlock: "10px" }}>
          <AddProduct
            product={product}
            setProduct={setProduct}
            products={products}
            setProducts={setProducts}
            selectedProduct={selectedProduct}
            setSelectedProduct={setSelectedProduct}
          />
        </Fieldset>

        <Fieldset legend="Liste">
          <Toolbar
            style={{
              padding: "0px",
              height: "50px",
              background: "transparent",
              border: "none",
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
            tableStyle={{
              minWidth: "50rem",
              fontSize: "small",
              marginBlock: "-10px",
            }}
            scrollable
            scrollHeight="400px"
          >
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
