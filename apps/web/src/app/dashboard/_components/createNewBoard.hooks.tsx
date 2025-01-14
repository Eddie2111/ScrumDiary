import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const useCreateBoard = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const boardSchema = z.object({
    boardName: z
      .string()
      .min(2, { message: "Board name must be at least 2 characters." })
      .max(50, { message: "Board must be less than 50 characters." }),
  });
  const boardSchemaResolver = zodResolver(boardSchema);

  const form = useForm<z.infer<typeof boardSchema>>({
    resolver: boardSchemaResolver,
    defaultValues: {
      boardName: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof boardSchema>) => {
    setIsCreating(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("New board created:", values);

      form.reset();
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error creating board:", error);
    } finally {
      setIsCreating(false);
    }
  };
  return {
    isCreating,
    isDialogOpen,
    setIsDialogOpen,
    form,
    onSubmit,
  }
}
