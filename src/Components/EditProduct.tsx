import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState } from 'react'
import LandingPage from './LandingPage'
import { useParams } from 'react-router-dom'
import { Toolbar } from 'primereact/toolbar';
import { DataTable, DataTableFilterMeta, } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown, DropdownChangeEvent,} from 'primereact/dropdown';
import { Panel } from 'primereact/panel';
import { useNavigate } from 'react-router-dom';
import { Fieldset } from 'primereact/fieldset';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import AddProduct from './AddProduct';
import TopContent from './TopContent';
import { SplitButton } from 'primereact/splitbutton';


interface VisibilityProps {
  setVisible?: Dispatch<SetStateAction<boolean>>;
  visible?: boolean
}
interface Product {
  id?: string;
  code?: string;
  position?: string;
  periode?: string;
  description?: string;
  type?: number;
}

interface Actions {
  name?: string;
  code: number | null;

}

export default function EditProduct(props: VisibilityProps) {
  const params = useParams()

  const type: Actions[] = [
    { name: 'Analytique', code: 1 },
    { name: 'Registre', code: 2 },
    { name: 'Visualisation piece', code: 3},
    { name: 'Informations libres', code: 4 },
    { name: 'Lettrage', code: 5 },
    { name: 'Interrogations genérales', code: 6 },
    { name: 'Interrogations tiers', code: 7 },
    { name: 'Documents attachés', code: 8},
  ];
  const items = [
    {
        label: 'Analytique',

    },
    {
        label: 'Registre',

    },
    {
        label: 'Visualisation piece',
 

    },
    {
      label: 'Informations libres',

  },
  {
      label: 'Lettrage',

  },
  {
      label: 'Interrogations genérales',


  },
  {
    label: 'Interrogations tiers',

},
{
    label: 'Documents attachés',

},





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
  const [selectedProduct, setSelectedProduct] = useState<Product>()
  const [ShowProduct, setShowProduct] = useState<Product[]>()

  useEffect(() => {
    if (params) {
      let _product = products.filter((val) => val.type == params.type);
      setShowProduct(_product);
    }
  }, [params]);

  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-5">
        <SplitButton label="Actions" icon="pi pi-cog"  model={items} size="small" className='buton' disabled={!selectedProduct} style={{ backgroundColor:'#3b82f6'}} />
        <Button label="Ouvrir"  className="buton p-button-help"  disabled={!selectedProduct} style={{backgroundColor:'#3b82f6',border:'none'}}/>
      </div>
    );
  };









  return (
    <LandingPage>
      <Panel header="Saisie de journaux" >

        <Fieldset legend={"Journal: " + ShowProduct?.[0].description}>
          <TopContent />
        </Fieldset>
        <Fieldset legend="Ajouter"style={{ marginBlock: '10px' }}>
          <AddProduct />
        </Fieldset>

        <Fieldset legend="Liste">
        <Toolbar style={{ padding: "0px", height: "60px" }} left={leftToolbarTemplate}  />
          <DataTable value={products} selectionMode="single" selection={selectedProduct!}
            onSelectionChange={(e) => setSelectedProduct(e.value)} paginator rows={5} tableStyle={{ minWidth: '50rem', fontSize: "small", marginBlock: '-10px' }} >
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
        </Fieldset>

      </Panel>


    </LandingPage>
  )
}
