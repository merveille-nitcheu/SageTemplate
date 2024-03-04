export interface Type {
  name?: string;
  code: number | null;
}

export const typeope: Type[] = [
  { name: "Tous", code: null },
  { name: "Validées", code: 1 },
  { name: "Rejectées", code: 2 },
  { name: "En attente", code: 2 },
];

export const caisse: Type[] = [
  { name: "Caisse n°1", code: 1 },
  { name: "Caisse n°2", code: 2 },
  { name: "Caisse n°3", code: 3 },
  { name: "Caisse n°4", code: 4 },
  { name: "Caisse n°5", code: 5 },
];

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

export interface Product {
  id?: string;
  code?: string;
  position?: string;
  periode?: string;
  description?: string;
  type?: number;
}

 export interface Producte {
  jour?: string;
  piece?: string;
  reference?: string;
  facture?: string;
  type?: number;
  compteGeneral?: string;
  compteTiers?: string;
  libelleEcriture?: string;
  dateEcheance?: string;
  positionJournal?: string;
  debit?: string;
  credit?: string;
}

export interface Caisse {
  numero?: number;
  piece?: string;
  date?: Date | null | undefined;
  libelle?: string;
  montant?: string;
  caisse?: string;
  notif?: string;
  profil?: string;
  type?: string;
  status?:string;
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

export const prod: Producte[] = [
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 1,
    compteGeneral: "Bamboo Watch",
    compteTiers: "Bamboo Watch",
    libelleEcriture: "Bamboo Watch",
    dateEcheance: "Bamboo Watch",
    positionJournal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 2,
    compteGeneral: "Bamboo Watch",
    compteTiers: "Bamboo Watch",
    libelleEcriture: "Bamboo Watch",
    dateEcheance: "Bamboo Watch",
    positionJournal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 3,
    compteGeneral: "Bamboo Watch",
    compteTiers: "Bamboo Watch",
    libelleEcriture: "Bamboo Watch",
    dateEcheance: "Bamboo Watch",
    positionJournal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 4,
    compteGeneral: "Bamboo Watch",
    compteTiers: "Bamboo Watch",
    libelleEcriture: "Bamboo Watch",
    dateEcheance: "Bamboo Watch",
    positionJournal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 5,
    compteGeneral: "Bamboo Watch",
    compteTiers: "Bamboo Watch",
    libelleEcriture: "Bamboo Watch",
    dateEcheance: "Bamboo Watch",
    positionJournal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
  {
    jour: "Bamboo Watch",
    piece: "Bamboo Watch",
    reference: "Bamboo Watch",
    facture: "Bamboo Watch",
    type: 6,
    compteGeneral: "Bamboo Watch",
    compteTiers: "Bamboo Watch",
    libelleEcriture: "Bamboo Watch",
    dateEcheance: "Bamboo Watch",
    positionJournal: "Bamboo Watch",
    debit: "Bamboo Watch",
    credit: "Bamboo Watch",
  },
];
