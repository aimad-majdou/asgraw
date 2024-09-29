"use client";

import * as actions from "@/actions";
import { CreateTopicFormState } from "@/actions/create-topic";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function TopicCreateForm() {
  const [formState, action] = useFormState<CreateTopicFormState, FormData>(
    actions.createTopic,
    {
      errors: {},
    }
  );

  const { toast } = useToast();

  useEffect(() => {
    if (formState.errors.general) {
      toast({
        title: "Uh oh! Something went wrong.",
        description: formState.errors.general,
        variant: "destructive",
      });
    }
  }, [formState.errors, toast]);

  return (
    <form action={action}>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input
            id="name"
            name="slug"
            className={cn(
              "col-span-3",
              formState.errors.slug && "border-red-500"
            )}
          />
          {formState.errors.slug && (
            <ul
              className="col-start-2 col-span-3 text-red-600 text-xs list-disc list-inside"
              aria-live="assertive"
            >
              {formState.errors.slug.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="description" className="text-right">
            Description
          </Label>
          <Textarea
            id="description"
            name="description"
            className={cn(
              "col-span-3",
              formState.errors.description && "border-red-500"
            )}
          />
          {formState.errors.description && (
            <ul
              className="col-start-2 col-span-3 text-red-600 text-xs list-disc list-inside"
              aria-live="assertive"
            >
              {formState.errors.description.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <DialogFooter>
        <Button type="submit">Save</Button>
      </DialogFooter>
    </form>
  );
}
