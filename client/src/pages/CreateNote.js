import React from "react";
import Container from "../components/elements/Container";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export default function CreateNote() {
  return (
    <>
      <Header />
      <Container>
        <div className="w-full flex justify-center items-center m-6">
          <h1 className="font-primary text-4xl font-semibold">
            Créer une Note <span className="text-danger">:</span>
          </h1>
        </div>
        <div className="w-full flex justify-center m-6 my-5">
          <form className="grid grid-rows-4 gap-y-6 mt-16">
            <div className="">
              <label htmlFor="title" className="text-lg font-bold">
                Titre
              </label>
              <input
                type="text"
                name="title"
                id="title"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                placeholder="Sed non risus."
              />
            </div>
            <div className="">
              <label htmlFor="content" className="text-lg font-bold">
                Contenu
              </label>
              <input
                type="text"
                name="content"
                id="content"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
                placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              />
            </div>
            <div className="text-lg font-bold">
              <label htmlFor="category" className="">
                Catégorie
              </label>
              <input
                type="text"
                name="category"
                id="category"
                autoComplete="off"
                className="focus:border block w-full border border-gray-400 rounded-md p-4"
              />
            </div>
            <div className="flex justify-center m-2">
              <input
                type="button"
                value="Créer"
                className="bg-blue-500 hover:bg-blue-700 text-white w-36 m-2 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
              <input
                type="button"
                value="Réinitialiser"
                className="bg-danger hover:bg-danger-hover text-white w-36 m-2 font-primary tracking-widest uppercase cursor-pointer rounded-md animate"
              />
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
}
