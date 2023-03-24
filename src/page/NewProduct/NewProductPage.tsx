import { type } from "os";
import { FC, useState } from "react";
import { useNewProductPage } from "./NewProductPage.hooks";

type NewProductForm = {
  title: string;
};
export const NewProductPage: FC = () => {
  const { form, updateForm, onClickSubmit, error, loading } =
    useNewProductPage();

  return (
    <div>
      {error}
      {loading && <div>Loading</div>}
      <form onSubmit={onClickSubmit}>
        <div>
          <label htmlFor="input-title">Title</label>
          <input
            id="input-title"
            value={form.title}
            onChange={(event) => {
              updateForm({
                title: event.target.value,
              });
            }}
          />
        </div>
        <div>
          <label htmlFor="input-description">Description</label>
          <input
            id="input-description"
            value={form.description}
            onChange={(event) => {
              updateForm({
                description: event.target.value,
              });
            }}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};
