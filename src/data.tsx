export interface Type {
    name?: string;
    code: number | null;
  }
  
  export const typeope: Type[] = [
    { name: "Tous", code: null },
    { name: "Sortie", code: 1 },
    { name: "Entrées", code: 2 },
    { name: "Fond de Caisse", code: 3 },
    { name: "Transfert de caisse", code: 4 },
    { name: "Versement bancaire", code: 5 },
  ];
  
  export const caisse: Type[] = [{ name: "Tous", code: null }];
  
  export const sortie: Type[] = [
    { name: "Sortie", code: 1 },
    { name: "Entrées", code: 2 },
    { name: "Fond de Caisse", code: 3 },
    { name: "Transfert de caisse", code: 4 },
    { name: "Versement bancaire", code: 5 },
  ];
  
  export const typeCaisse: Type[] = [{ name: "Tous", code: null }];
  
  export const personne: Type[] = [
    { name: "Atabe", code: 1 },
    { name: "SIAKAM", code: 2 },
  ];
  
  export const notif: Type[] = [
    { name: "Aucun", code: null },
    { name: "Mail", code: 2 },
    { name: "Sms", code: 3 },
  ];

  interface Product {
    id?: string;
    code?: string;
    position?: string;
    periode?: string;
    description?: string;
    type?: number;
  }

  interface Produit {
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

  export const type: Type[] = [
    { name: "Tous", code: null },
    { name: "Ouverts", code: 1 },
    { name: "Non ouverts", code: 2 },
    { name: "Non imprimés", code: 3 },
    { name: "Non cloturés totalement", code: 4 },
    { name: "Imprimés", code: 5 },
    { name: "Non imprimés et non cloturés totalement", code: 6 },
    { name: "Cloturés totalement", code: 7 },
    { name: "Non imprimés et cloturés totalement", code: 8 },
  ];
  export const produit: Product[] = [
    {
      id: "1000",
      code: "f23h0g3",
      position: "Saisie Watch",
      periode: "10/01/2024",
      description: "Product Description",
      type: 1,
    },
    {
      id: "1000",
      code: "f230fh0g3",
      position: "Bamboo Watch",
      periode: "10/01/2024",
      description: "Product Description",
      type: 2,
    },
    {
      id: "1000",
      code: "f230fh0g3",
      position: "Bamboo Watch",
      periode: "10/01/2024",
      description: "Product Description",
      type: 3,
    },
    {
      id: "1000",
      code: "f230fh0g3",
      position: "Bamboo Watch",
      periode: "10/01/2024",
      description: "Product Description",
      type: 4,
    },
    {
      id: "1000",
      code: "f230fh0g3",
      position: "Bamboo Watch",
      periode: "10/01/2024",
      description: "Product Description",
      type: 5,
    },
    {
      id: "1000",
      code: "f230fh0g3",
      position: "Bamboo Watch",
      periode: "10/01/2024",
      description: "Product Description",
      type: 6,
    },
  ];

  export const prod: Produit[] = [
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

  