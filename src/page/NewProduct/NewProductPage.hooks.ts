import { FormEvent, useCallback, useState } from "react";
import { z } from "zod";
import { ProductUsecase } from "../../features/usecase/ProductUsecase";

const NewProductFormModel = z.object({
  title: z.string().min(2),
  description: z.string(),
});
type NewProductForm = z.infer<typeof NewProductFormModel>;

export const useNewProductPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<NewProductForm>({
    title: "",
    description: "",
  });

  const [error, setError] = useState<string>();

  const updateForm = useCallback(
    (data: Partial<NewProductForm>) => {
      setForm((prev) => {
        return { ...prev, ...data };
      });
    },
    [setForm]
  );

  const onClickSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const valid = NewProductFormModel.safeParse(form);
      if (!valid.success) {
        console.log(valid.error.message);
        setError(valid.error.message);
        return;
      }

      try {
        setLoading(true);
        await ProductUsecase.postProduct(valid.data);
      } catch (e) {
      } finally {
        setLoading(false);
      }
    },
    [form]
  );

  return { form, updateForm, onClickSubmit, error, loading };
};
