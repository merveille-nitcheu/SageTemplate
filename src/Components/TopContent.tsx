import React from 'react'
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
export default function TopContent() {

    const navigate = useNavigate()

    const items: MenuItem[] = [
        {
            label: 'Fonctions',
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Equilibrer',
                },
                {
                    separator: true
                },
                {
                    label: 'Imprimer',

                },
                {
                    separator: true
                },
                {
                    label: 'Libellé',

                },
                {
                    separator: true
                },
                {
                    label: 'Atteindre',

                },


            ]

        },
        {
            label: 'Equilibrer',

        },
        {
            label: 'Imprimer',
            icon: 'pi pi-file',

        },
        {
            separator: true
        },



    ];
    return (
        <div>
            <Menubar model={items} style={{ backgroundColor: 'transparent', border: 'none', fontSize: 'small', height: '20px', padding: '0px' }} />
            <div className="card flex justify-content-center" style={{ display: 'flex', fontSize: 'small', marginBlock: '20PX' }}>

                <div style={{ display: 'inline-grid', marginRight: '20px' }}>
                    <>

                        <label htmlFor="modele" >Modele de saisie:  </label>
                        <InputText id="modele" aria-describedby="modele" className="input-style p-inputtext-sm" />
                    </>
                    <>

                        <label htmlFor="compte">Compte: </label>
                        <InputText id="compte" aria-describedby="compte" className="input-style p-inputtext-sm" disabled />

                    </>


                </div>

                <Divider layout="vertical" />
                
                
            <Card >
                <div style={{borderBottom:'1px ',display:'flex',width: '100%'}}>
                <span  >Ancien:  </span>
                <span  >Jour:  </span>
                <span  >Jour:  </span>
          
                </div>
                <Divider layout="horizontal" />
               
            </Card>
       

            </div>


        </div>
    )
}
