import React from 'react'
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export default function AddProduct() {
  return (
    <>
         <div className="card flex justify-content-center" style={{ fontSize: 'small' }}>
        <div style={{ display: 'inline-grid', marginRight: '20px' }}>
          <>

            <label htmlFor="username" >Jour:  </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />
          </>
          <>

            <label htmlFor="username">N°piece: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" disabled />

          </>

          <>

            <label htmlFor="username">N°facture: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />

          </>


        </div>
        <div style={{ display: 'inline-grid', marginRight: '20px' }}>
          <>

            <label htmlFor="username" >Référence: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />
          </>
          <>

            <label htmlFor="username">N°compte général: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />

          </>

          <>

            <label htmlFor="username">N°compte tiers: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />

          </>


        </div>
        <div style={{ display: 'inline-grid', marginRight: '20px' }}>
          <>

            <label htmlFor="username" >Libellé écriture: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />
          </>
          <>

            <label htmlFor="username">Date échéance: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />

          </>

          <>

            <label htmlFor="username">Position journal: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" disabled />

          </>


        </div>
        <div style={{ display: 'inline-grid' }}>

          <>

            <label htmlFor="username">Débit: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />

          </>

          <>

            <label htmlFor="username">Credit: </label>
            <InputText id="username" aria-describedby="username-help" className="input-style p-inputtext-sm" />

          </>

          <>

            <Button type='submit' label="Valider" className="input-style p-button-help" style={{ backgroundColor: '#3b82f6',border:'none',marginTop:'20px' }} />
          </>


        </div>
         </div>
    </>
  )
}
