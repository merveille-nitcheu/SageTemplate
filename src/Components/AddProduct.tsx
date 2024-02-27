import React, { Dispatch, SetStateAction } from "react";

import { Button } from "primereact/button";

interface VisibilityProps {
  setProduct?: Dispatch<SetStateAction<Product>>;
  product?: Product;
  products?: Product[];
  setProducts?: Dispatch<SetStateAction<Product[]>>;
  setSelectedProduct?: Dispatch<SetStateAction<Product | undefined>>;
  selectedProduct?: Product;
}

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

export default function AddProduct(props: VisibilityProps) {
  /* if (props.setProduct && props.selectedProduct) {
    props.setProduct(props.selectedProduct)
  } */

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (props.setProduct) {
      props.setProduct((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newProduct: Product = {
      jour: props.product?.jour,
      piece: props.product?.piece,
      facture: props.product?.facture,
      reference: props.product?.reference,
      type: 1,
      compte_general: props.product?.compte_general,
      compte_tiers: props.product?.compte_tiers,
      libelle_ecriture: props.product?.libelle_ecriture,
      date_echeance: props.product?.date_echeance,
      position_journal: props.product?.position_journal,
      debit: props.product?.debit,
      credit: props.product?.credit,
    };

    if (props.setProducts) {
      props.setProducts((prevData) => [...prevData, newProduct]);
    }
    if (props.setProduct) {
      props.setProduct({
        jour: "",
        piece: "",
        facture: "",
        reference: "",
        compte_general: "",
        compte_tiers: "",
        libelle_ecriture: "",
        date_echeance: "",
        position_journal: "",
        debit: "",
        credit: "",
      });
    }
  };

  return (
    <>
      <form
        className="card flex justify-content-center"
        style={{ fontSize: "small" }}
        onSubmit={handleSubmit}
      >
        <div
          className="formgrid grid text-xs"
          style={{ marginBottom: "-20px", marginTop: "10px" }}
        >
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>Jour: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="jour"
              value={props.product?.jour || props.selectedProduct?.jour}
              onChange={handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>N°piece: </label>
            <input
              type="text"
              className="input-style text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="piece"
              value={props.product?.piece || props.selectedProduct?.piece}
              disabled
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>N°facture: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="facture"
              value={props.product?.facture || props.selectedProduct?.facture}
              onChange={handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>Réference: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="reference"
              value={
                props.product?.reference || props.selectedProduct?.reference
              }
              onChange={handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>N°compte général: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="compte_general"
              value={
                props.product?.compte_general ||
                props.selectedProduct?.compte_general
              }
              onChange={() => handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>N°compte tiers: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="compte_tiers"
              value={
                props.product?.compte_tiers ||
                props.selectedProduct?.compte_tiers
              }
              onChange={handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>Libellé écriture: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="libelle_ecriture"
              value={
                props.product?.libelle_ecriture ||
                props.selectedProduct?.libelle_ecriture
              }
              onChange={handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>Date echéance: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="date_echeance"
              value={
                props.product?.date_echeance ||
                props.selectedProduct?.date_echeance
              }
              onChange={handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>Position Journal: </label>
            <input
              type="text"
              className="input-style text-color p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="position_journal"
              value={
                props.product?.position_journal ||
                props.selectedProduct?.position_journal
              }
              disabled
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>Débit: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="debit"
              value={props.product?.debit || props.selectedProduct?.debit}
              onChange={handleChangeInput}
            />
          </div>
          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <label>Credit: </label>
            <input
              type="text"
              className="input-style text-color surface-overlay p-2 border-1 border-solid surface-border border-round appearance-none outline-none focus:border-primary w-full"
              name="credit"
              value={props.product?.credit || props.selectedProduct?.credit}
              onChange={handleChangeInput}
            />
          </div>

          <div
            className="field col-6 md:col-3 lg:col-3"
            style={{ marginTop: "-10px" }}
          >
            <Button
              type="submit"
              label="Valider"
              className="input-style p-button-help w-full"
              style={{
                backgroundColor: "#3b82f6",
                border: "none",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      </form>
    </>
  );
}
