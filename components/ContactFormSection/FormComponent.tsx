"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

type Props = {};

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
);

const formSchema = z.object({
  first_name: z
    .string()
    .min(1, { message: "Can't leave this empty" })
    .max(18, { message: "Max 18 characters" }),
  last_name: z
    .string()
    .min(1, { message: "Can't leave this empty" })
    .max(18, { message: "Max 18 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone_number: z.string().regex(phoneRegex, { message: "Invalid Number" }),
  message: z
    .string()
    .min(2, { message: "Can't leave this empty" })
    .max(500, { message: "Max 500 characters" })
    .optional(),
});

function FormComponent({}: Props) {
  // Form Definition
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      message: "",
    },
  });

  // Submit Handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto grid w-full grid-cols-1 gap-4 p-5 lg:max-w-[80%] lg:grid-cols-2  lg:gap-5 lg:space-y-0"
      >
        {/* First Name*/}
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-sky-600">
                First Name
              </FormLabel>
              <FormControl>
                <Input
                  className="border-zinc-200 bg-zinc-100 text-zinc-950 shadow-lg placeholder:text-zinc-400"
                  placeholder="first name "
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Last Name */}
        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-sky-600">
                Last Name
              </FormLabel>
              <FormControl>
                <Input
                  className="border-zinc-200 bg-zinc-100  text-zinc-950 shadow-lg placeholder:text-zinc-400"
                  placeholder="last name"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-sky-600">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="border-zinc-200 bg-zinc-100 text-zinc-950 shadow-lg placeholder:text-zinc-400"
                  placeholder="email"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-sky-600">
                Phone Number
              </FormLabel>
              <FormControl>
                <Input
                  className="border-zinc-200 bg-zinc-100 text-zinc-950 shadow-lg placeholder:text-zinc-400"
                  placeholder="phone number"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2 ">
              <FormLabel className="font-semibold text-sky-600">
                Message
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your custom message here"
                  {...field}
                  className="border-zinc-200 bg-zinc-100 py-10 text-zinc-950 shadow-lg placeholder:text-zinc-400"
                />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          className="justify-self-start  bg-sky-800 font-semibold text-white transition-all duration-300 hover:scale-110 active:scale-95"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Form>
  );
}

export default FormComponent;
