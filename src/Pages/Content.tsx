import React, { Dispatch, SetStateAction, useState, useRef } from "react";
import { Toolbar } from "primereact/toolbar";
import { Button } from "primereact/button";
import { DataTable, DataTableFilterMeta } from "primereact/datatable";
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { Fieldset } from "primereact/fieldset";
import { Panel } from "primereact/panel";
import { Dialog } from "primereact/dialog";
import { useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import { produit, type ,Product,Type} from "../data";



export default function Content() {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [rowClick, setRowClick] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>(produit);
  const [deleteProductDialog, setDeleteProductDialog] =
    useState<boolean>(false);
  const [deleteProductsDialog, setDeleteProductsDialog] =
    useState<boolean>(false);
  const [product, setProduct] = useState<Product>({});
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const dt = useRef<DataTable<Product[]>>(null);
  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const [filters, setFilters] = useState<DataTableFilterMeta>({
    type: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const onGlobalFilterChange = (e: DropdownChangeEvent) => {
    const { code } = e.target.value;
    const _filters = { ...filters };
    // @ts-ignore
    _filters["type"].value = code;

    setFilters(_filters);
    setSelectedType(e.value);
  };

  const editProduct = (product: Product) => {
    navigate(`/addproduct/${product.type}`);
  };

  const onRowSelect = (event: any) => {
    const selectedProduct = event.data;

    navigate(`/addproduct/${selectedProduct.type}`);
  };

  const confirmDeleteProduct = (product: Product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const actionBodyTemplate = (rowData: Product) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-eye"
          rounded
          outlined
          className="mr-2"
          onClick={() => editProduct(rowData)}
          style={{ width: "35px", height: "35px", marginRight: "20px" }}
        />
        <Button
          icon="pi pi-trash"
          rounded
          outlined
          severity="danger"
          onClick={() => confirmDeleteProduct(rowData)}
          style={{ width: "35px", height: "35px" }}
        />
      </React.Fragment>
    );
  };
  const deleteProduct = (product: Product) => {
    const _products = products.filter((val) => val.type !== product.type);
    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct({});
  };

  const deleteSelectedProducts = () => {
    const _products = products.filter((val) => !selectedProducts.includes(val));
    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts([]);
  };
  const leftToolbarTemplate = () => {
    return (
      <div className="responsive flex flex-wrap ">
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          onClick={confirmDeleteSelected}
          disabled={!selectedProducts || !selectedProducts.length}
          className="buton responsive-button"
        />
        <Button
          label="Export"
          icon="pi pi-upload"
          className="buton p-button-help responsive-button"
          onClick={exportCSV}
          style={{ backgroundColor: "#3b82f6", border: "none" }}
        />
      </div>
    );
  };
  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };

  const rightToolbarTemplate = () => {
    return (
      <Dropdown
        value={selectedType}
        onChange={(e: DropdownChangeEvent) => onGlobalFilterChange(e)}
        options={type}
        optionLabel="name"
        className="buton  w-full md:w-14rem"
        placeholder="Selectionner un type"
        style={{ marginRight: "20px" }}
      />
    );
  };
  const deleteProductDialogFooter = (product: Product) => (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={() => deleteProduct(product)}
      />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button
        label="No"
        icon="pi pi-times"
        outlined
        onClick={hideDeleteProductsDialog}
      />
      <Button
        label="Yes"
        icon="pi pi-check"
        severity="danger"
        onClick={deleteSelectedProducts}
      />
    </React.Fragment>
  );
  const rowClass = () => {
    return {
      "custom-row": true,
    };
  };

  return (
    <LandingPage>
      <>
        <Panel header="Saisie de journaux">
          <Fieldset
            style={{ padding: "0px", paddingTop: "20px", marginTop: "-20px" }}
          >
            <Toolbar
              style={{
                padding: "0px",
                height: "50px",
                background: "transparent",
                border: "none",
              }}
              left={leftToolbarTemplate}
              right={rightToolbarTemplate}
            />
          </Fieldset>
          <Fieldset legend="ligne" style={{ marginTop: "8px" }}>
            <DataTable
              ref={dt}
              value={products}
              rowClassName={rowClass}
              paginator
              rows={6}
              selectionMode={rowClick ? null : "checkbox"}
              selection={selectedProducts}
              onSelectionChange={(e: { value: any[] }) =>
                setSelectedProducts(e.value)
              }
              tableStyle={{ maxWidth: "80rem" }}
              onRowSelect={onRowSelect}
              className="custom-row"
              filters={filters}
              globalFilterFields={["type"]}
              emptyMessage="Pas de Produits disponibles."
              scrollable
              scrollHeight="400px"
            >
              <Column
                selectionMode="multiple"
                exportable={false}
                headerStyle={{ width: "3rem" }}
                className="custom-row"
              ></Column>
              <Column
                field="position"
                header="Position"
                className="custom-row"
              ></Column>

              <Column
                field="periode"
                header="Période"
                className="custom-row"
              ></Column>
              <Column
                field="code"
                header="Code"
                className="custom-row"
              ></Column>
              <Column
                field="description"
                header="Intitulé du journal"
                className="custom-row"
              ></Column>
              <Column
                body={actionBodyTemplate}
                exportable={false}
                className="custom-row"
              ></Column>
            </DataTable>
          </Fieldset>
        </Panel>
        <Dialog
          visible={deleteProductDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductDialogFooter(product)}
          onHide={hideDeleteProductDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem", marginRight: "15px" }}
            />
            {product && (
              <span>
                Voulez vous supprimer le produit <b>{product.description}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog
          visible={deleteProductsDialog}
          style={{ width: "32rem" }}
          breakpoints={{ "960px": "75vw", "641px": "90vw" }}
          header="Confirm"
          modal
          footer={deleteProductsDialogFooter}
          onHide={hideDeleteProductsDialog}
        >
          <div className="confirmation-content">
            <i
              className="pi pi-exclamation-triangle mr-3"
              style={{ fontSize: "2rem", marginRight: "10px" }}
            />
            {product && (
              <span>Voulez vous suprimer les elements selectionnés?</span>
            )}
          </div>
        </Dialog>
      </>
    </LandingPage>
  );
}
