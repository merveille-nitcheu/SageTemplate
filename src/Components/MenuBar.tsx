import React, { Dispatch, SetStateAction, useState } from 'react'
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';

interface VisibilityProps {
    setVisible: Dispatch<SetStateAction<boolean>>;
  }

export default function MenuBar(props: VisibilityProps) {
    

    const items: MenuItem[] = [
        {
            label: 'Fichier',
            icon: 'pi pi-file',

        },
        {
            label: 'Edition',

        },
        {
            separator: true
        },
        {
            label: 'Structure',

        }
        ,
        {
            label: 'Traitement',
            icon: 'pi pi-cog',
            items: [
                {
                    label: 'Saisie par piece',
                },
                {
                    separator: true
                },
                {
                    label: 'Journaux de saisie',
                    command: () => props.setVisible(true)
                },


            ]
        },
        {
            label: 'Etat',


        },
        {
            label: 'Fenetre',


        }

    ];
    return (
        <div>
            <Menubar model={items} />
        </div>
    )
}
