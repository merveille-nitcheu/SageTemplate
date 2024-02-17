import React, { Dispatch, SetStateAction, useState, useRef } from 'react'
import { Toolbar } from 'primereact/toolbar';
import { Button } from 'primereact/button';
import { DataTable, DataTableFilterMeta, } from 'primereact/datatable';
import { Dropdown, DropdownChangeEvent,} from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { Panel } from 'primereact/panel';
import { Dialog } from 'primereact/dialog';
import { useNavigate } from 'react-router-dom';
import LandingPage from './LandingPage';



interface Product {
  id?: string;
  code?: string;
  position?: string;
  periode?: string;
  description?: string;
  type?: number;
}
interface Type {
  name?: string;
  code: number | null;

}


export default function Content() {

  const navigate = useNavigate()

  const [selectedType, setSelectedType] = useState<Type | null>(null);
  const [rowClick, setRowClick] = useState<boolean>(true);

  const type: Type[] = [
    { name: 'Tous', code: null },
    { name: 'Ouverts', code: 1 },
    { name: 'Non ouverts', code: 2 },
    { name: 'Non imprimés', code: 3 },
    { name: 'Non cloturés totalement', code: 4 },
    { name: 'Imprimés', code: 5 },
    { name: 'Non imprimés et non cloturés totalement', code: 6 },
    { name: 'Cloturés totalement', code: 7 },
    { name: 'Non imprimés et cloturés totalement', code: 8 }
  ];
  const produit: Product[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
      type: 1


    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
      type: 2
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
      type: 3
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
      type: 4
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
      type: 5
    },
    {
      id: '1000',
      code: 'f230fh0g3',
      position: 'Bamboo Watch',
      periode: "10/01/2024",
      description: 'Product Description',
      type: 6
    },
  ];

  const [products, setProducts] = useState<Product[]>(produit);
  const [deleteProductDialog, setDeleteProductDialog] = useState<boolean>(false);
  const [deleteProductsDialog, setDeleteProductsDialog] = useState<boolean>(false);
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
    let _filters = { ...filters };
    // @ts-ignore
    _filters['type'].value = code;

    setFilters(_filters);
    setSelectedType(e.value);


  };

  const editProduct = (product: Product) => {
 
    navigate(`/editproduct/${product.type}`)
  };

  const onRowSelect = (event: any) => {
    const selectedProduct = event.data;
    
    navigate(`/editproduct/${selectedProduct.type}`)
};

  const confirmDeleteProduct = (product: Product) => {
    setProduct(product);
    setDeleteProductDialog(true);
  };

  const actionBodyTemplate = (rowData: Product) => {
    return (
      <React.Fragment>
        <Button icon="pi pi-eye" rounded outlined className="mr-2" onClick={() => editProduct(rowData)} style={{ width: '35px', height: '35px', marginRight: '20px' }} />
        <Button icon="pi pi-trash" rounded outlined severity="danger" onClick={() => confirmDeleteProduct(rowData)} style={{ width: '35px', height: '35px' }} />
      </React.Fragment>
    );
  };
  const deleteProduct = (product:Product) => {

    let _products = products.filter((val) => val.type !== product.type);
    setProducts(_products);
    setDeleteProductDialog(false);
    setProduct({});

  };

  const deleteSelectedProducts = () => {
    let _products = products.filter((val) => !selectedProducts.includes(val));
    setProducts(_products);
    setDeleteProductsDialog(false);
    setSelectedProducts([]);
    /*  toast.current?.show({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 }); */
  };
  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-5">
        <Button label="Delete" icon="pi pi-trash" severity="danger" onClick={confirmDeleteSelected} disabled={!selectedProducts || !selectedProducts.length} className='buton' />
        <Button label="Export" icon="pi pi-upload" className="buton p-button-help" onClick={exportCSV} style={{backgroundColor:'#3b82f6'}}/>
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
    return <Dropdown value={selectedType} onChange={(e: DropdownChangeEvent) => onGlobalFilterChange(e)} options={type} optionLabel='name'
      className="buton w-full md:w-14rem" placeholder='Selectionner un type' style={{ marginRight: "20px" }} />;
  };
  const deleteProductDialogFooter = (product:Product) => (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={() => deleteProduct(product)} />
    </React.Fragment>
  );
  const deleteProductsDialogFooter = (
    <React.Fragment>
      <Button label="No" icon="pi pi-times" outlined onClick={hideDeleteProductsDialog} />
      <Button label="Yes" icon="pi pi-check" severity="danger" onClick={deleteSelectedProducts} />
    </React.Fragment>
  );


  return (
    <LandingPage>

      <>

        <Panel header="Saisie de journaux" >
          <Toolbar style={{ padding: "0px", height: "60px" }} left={leftToolbarTemplate} right={rightToolbarTemplate} />
          <DataTable ref={dt} value={products} paginator rows={6} 
            selectionMode={rowClick ? null : 'checkbox'} selection={selectedProducts} onSelectionChange={(e: { value: any[] }) => setSelectedProducts(e.value)}
            tableStyle={{ minWidth: '50rem', marginTop: "20px" }} onRowSelect={onRowSelect} filters={filters}
            globalFilterFields={['type']} emptyMessage="Pas de Produits disponibles.">
            <Column selectionMode="multiple" exportable={false} headerStyle={{ width: '3rem' }}></Column> 
            <Column field="position" header="Position"></Column>
            <Column field="periode" header="Période"></Column>
            <Column field="code" header="Code"></Column>
            <Column field="description" header="Intitulé du journal"></Column>


            <Column body={actionBodyTemplate} exportable={false} ></Column>
          </DataTable>
        </Panel>


        <Dialog visible={deleteProductDialog} style={{ width: '32rem' }} breakpoints={{ '960px': '75vw', '641px': '90vw' }} header="Confirm" modal footer={deleteProductDialogFooter(product)} onHide={hideDeleteProductDialog}>
          <div className="confirmation-content">
            <i className="pi pi-exclamation-triangle mr-3" style={{ fontSize: '2rem', marginRight: '15px' }} />
            {product && (
              <span>
                Voulez vous supprimer le produit  <b>{product.description}</b>?
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


      </>

    </LandingPage>
  )
}

