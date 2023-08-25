import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useCreateStore } from "~/graphql/stores/useCreateStore";
import { Button } from "~/ui/components/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/ui/components/Dialog";
import { Input } from "~/ui/components/Input";

interface CreateStoreModalProps {
  children: React.ReactNode;
}

const STORE_NAME_MAX_LENGTH = 50;

const formSchema = z.object({
  name: z.string().min(2).max(STORE_NAME_MAX_LENGTH),
});

export const CreateStoreModal: React.FC<CreateStoreModalProps> = ({
  children,
}) => {
  const [createStore, state] = useCreateStore();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  async function handleCreateStore(values: z.infer<typeof formSchema>) {
    await createStore({ variables: { params: { name: values.name } } });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <form onSubmit={form.handleSubmit(handleCreateStore)}>
          <DialogHeader>
            <DialogTitle>Lets create a store!</DialogTitle>
            <DialogDescription>
              Provide some info about your store to get started
            </DialogDescription>
          </DialogHeader>
          <label htmlFor="create-store-name-input">
            <h5 className="text-sm text-gray-500 mb-1">Name</h5>
            <Input
              maxLength={STORE_NAME_MAX_LENGTH}
              id="create-store-name-input"
              {...form.register("name", { required: true })}
            />
            {form.control.getFieldState("name").error ? "aaaa" : "asas"}
          </label>
          <DialogFooter>
            <Button
              type="submit"
              isLoading={state.loading}
              disabled={!form.formState.isValid}
            >
              Create store
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
