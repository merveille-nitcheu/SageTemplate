import React, { Dispatch, SetStateAction } from "react";
import { Producte } from "../data";

import { Button } from "primereact/button";

interface VisibilityProps {
  setProduct?: Dispatch<SetStateAction<Producte>>;
  product?: Producte;
  products?: Producte[] | undefined;
  setProducts?: Dispatch<SetStateAction<Producte[] | undefined>>;
  setSelectedProduct?: Dispatch<SetStateAction<Producte | undefined>>;
  selectedProduct?: Producte;
}

export default function AddProduct(props: VisibilityProps) {
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

    if (props.selectedProduct) {
      const productToUpdate = props.products?.find(
        (product) => product.type === props.selectedProduct?.type
      );
      console.log(productToUpdate);
      if (productToUpdate) {
        const updatedProduct = {
          ...productToUpdate,
          jour: props.product?.jour,
          piece: props.product?.piece,
          facture: props.product?.facture,
          reference: props.product?.reference,
          type: 1,
          compteGeneral: props.product?.compteGeneral,
          compteTiers: props.product?.compteTiers,
          libelleEcriture: props.product?.libelleEcriture,
          dateEcheance: props.product?.dateEcheance,
          positionJournal: props.product?.positionJournal,
          debit: props.product?.debit,
          credit: props.product?.credit,
        };

        const updatedProducts =
          props.products?.map((product) => {
            if (product === productToUpdate) {
              return updatedProduct;
            }
            return product;
          }) ?? [];

        if (props.setProducts) {
          props.setProducts(updatedProducts);
        }
      }
    } else {
      const newProduct: Producte = {
        jour: props.product?.jour,
        piece: props.product?.piece,
        facture: props.product?.facture,
        reference: props.product?.reference,
        type: 1,
        compteGeneral: props.product?.compteGeneral,
        compteTiers: props.product?.compteTiers,
        libelleEcriture: props.product?.libelleEcriture,
        dateEcheance: props.product?.dateEcheance,
        positionJournal: props.product?.positionJournal,
        debit: props.product?.debit,
        credit: props.product?.credit,
      };

      if (props.setProducts) {
        props.setProducts((prevData) => [...prevData?? [], newProduct]);
      }
    }

    if (props.setProduct) {
      props.setProduct({
        jour: "",
        piece: "",
        facture: "",
        reference: "",
        compteGeneral: "",
        compteTiers: "",
        libelleEcriture: "",
        dateEcheance: "",
        positionJournal: "",
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
              value={props.product?.jour}
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
              value={props.product?.piece}
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
              value={props.product?.facture}
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
              value={props.product?.reference}
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
              name="compteGeneral"
              value={props.product?.compteGeneral}
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
              name="compteTiers"
              value={props.product?.compteTiers}
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
              name="libelleEcriture"
              value={props.product?.libelleEcriture}
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
              name="dateEcheance"
              value={props.product?.dateEcheance}
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
              name="positionJournal"
              value={props.product?.positionJournal}
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
              value={props.product?.debit}
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
              value={props.product?.credit}
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
