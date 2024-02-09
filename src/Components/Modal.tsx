import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DataTable,  DataTableSelectAllChangeEvent, } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Toolbar } from 'primereact/toolbar';
import { InputText } from 'primereact/inputtext';

interface VisibilityProps {
    visible: boolean;
    setVisible: Dispatch<SetStateAction<boolean>>;
  }

interface Product {
    id?: string;
    code?: string;
    position?: string;
    periode?: string;
    description?: string;
  }



export default function Modal(props: VisibilityProps) {

  const [products, setProducts] = useState<Product[]>([]);
  const [productDialog, setProductDialog] = useState<boolean>(false);
  const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({});
  const [selectAll, setSelectAll] = useState<boolean>(false);
 

  const [totalRecords, setTotalRecords] = useState<number>(0);
  const produit: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',


    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
    },
  ];
  const dt = useRef<DataTable<Product[]>>(null);
  // const [statuses] = useState<string[]>(['Ouverts', 'Non ouverts', 'Non imprimés', 'Non cloturés totalement', 'Imprimés','Non imprimés et non cloturés totalement','Cloturés totalemnt','Non imprimés et cloturés totalem']);


  const footerContent = (
    <div>
      <Button label="Fermer" icon="pi pi-times" onClick={() => props.setVisible(false)} autoFocus />
    </div>
  );

  const exportCSV = () => {
    dt.current?.exportCSV();
  };

  const hideDeleteProductDialog = () => {
    setDeleteProductDialog(false);
  };

  const hideDeleteProductsDialog = () => {
    setDeleteProductsDialog(false);
  };
  const confirmDeleteProduct = (product: Product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const deleteProduct = () => {
    let _products = products.filter((val) => val.id !== product.id);

    setProducts(_products);
    setDeleteProductDialog(false);
  };



  const confirmDeleteSelected = () => {
    setDeleteProductsDialog(true);
  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));

    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts([]);
  };

  const hideDialog = () => {
    setProductDialog(false);
  };

  const saveProduct = () => {



  }

  const productDialogFooter = (
    <React.Fragment>
      <Button label="Cancel" icon="pi pi-times" outlined onClick={hideDialog} />
      <Button label="Save" icon="pi pi-check" onClick={saveProduct} />
    </React.Fragment>
  );




  const deleteProductDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteProduct} />
    </React.Fragment>
  );

  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
    </React.Fragment>
  );




  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-5">
        <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} />
        <Button label="Export" icon="pi pi-upload" className="p-button-help" onClick={exportCSV} style={{ marginInline: "15px" }} />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return <span className="p-input-icon-left">
      <i className="pi pi-search" />
      <InputText type="search" placeholder="..." />
    </span>;
  };

  const actionBodyTemplate = (rowData: Product) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-eye" rounded outlined onClick={() => editProduct(rowData)} />
        <Button icon="pi pi-trash" rounded outlined severity="danger" style={{ marginInline: '8px' }} onClick={() => confirmDeleteProduct(rowData)} />
      </React.Fragment>
    );
  };

  const editProduct = (product: Product) => {
    setProduct({ ...product });
    setProductDialog(true);
  };

  /* const onSelectionChange = (event: DataTableSelectionChangeEvent) => {
    const value = event.value;

    setSelectedProducts(value);
    setSelectAll(value.length === totalRecords);
}; */

const onSelectAllChange = (event: DataTableSelectAllChangeEvent) => {
    const selectAll = event.checked;

   /*  if (selectAll) {
    CustomerService.getCustomers().then((data) => {
    setSelectAll(true);
    setSelectedProducts(data.customers);
    });
    } else {
        setSelectAll(false);
        setSelectedCustomers([]);
    } */
};
   

  return (
    <div>
        <Dialog header="Saisie de Journaux" visible={props.visible} style={{ width: '66vw', height: "85vh" }} maximizable
        modal contentStyle={{ height: '50vh' }} onHide={() => props.setVisible(false)} footer={footerContent}>
        <Toolbar className="mb-4" left={leftToolbarTemplate} right={rightToolbarTemplate}></Toolbar>

        <DataTable ref={dt} value={produit} paginator rows={6}  virtualScrollerOptions={{ itemSize: 46 }} tableStyle={{ minWidth: '50rem', marginTop: "20px" }} selectionMode="multiple" selection={selectedProducts}
          /* onSelectionChange={onSelectionChange}  */ selectAll={selectAll} onSelectAllChange={onSelectAllChange}>
          <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
          <Column field="position" header="Position"></Column>
          <Column field="periode" header="Période"></Column>
          <Column field="code" header="Code"></Column>
          <Column field="description" header="Intitulé du journal"></Column>
          <Column body={actionBodyTemplate} exportable={false} ></Column>
        </DataTable>

        <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter} onHide={hideDeleteProductDialog}>
          <div className="confirmation-content">
            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', marginRight: '10px' }} />
            {product && (
              <span>
                Voulez vous supprimer la selection <b>{product.description}</b>?
              </span>
            )}
          </div>
        </Dialog>

        <Dialog visible={deleteProductsDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductsDialogFooter} onHide={hideDeleteProductsDialog}>
          <div className="confirmation-content">
            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', marginRight: '10px' }} />
            {product && <span>Voulez vous suprimer les elements selectionnés?</span>}
          </div>
        </Dialog>

        <Dialog visible={productDialog} style={{ width: '75vw', height: "85vh"}} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header={product.description} modal className="p-fluid" footer={productDialogFooter} onHide={hideDialog} maximizable>

          <DataTable value={produit} paginator rows={5} tableStyle={{ minWidth: '50rem', fontSize:"12px"}}>
            <Column field="position" header="Jour"></Column>
            <Column field="periode" header="N°piece"></Column>
            <Column field="code" header="N°facture"></Column>
            <Column field="description" header="Référence"></Column>
            <Column field="description" header="N°compte général"></Column>
            <Column field="description" header="N°compte tiers"></Column>
            <Column field="description" header="Libellé écriture"></Column>
            <Column field="description" header="Date echeance"></Column>
            <Column field="description" header="Position journal"></Column>
            <Column field="description" header="Débit"></Column>
            <Column field="description" header="Crédit"></Column>
          </DataTable>

        </Dialog>
      </Dialog>
    </div>
  )
}
