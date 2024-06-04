// "use client";
// import * as z from "zod";

// import { useState, useTransition } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { RoomSchema } from "@/schemas";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormLabel,
//   FormMessage,
//   FormItem,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { createRoom } from "@/actions/room";
// import { CardWrapper } from "@/components/auth/card-wrapper";
// import { FormError } from "@/components/form-error";
// import { FormSuccess } from "@/components/form-success";

// export const CreateRoomForm = () => {
//   const [error, setError] = useState<string | undefined>("");
//   const [success, setSuccess] = useState<string | undefined>("");
//   const [isPending, startTransition] = useTransition();

//   const form = useForm<z.infer<typeof RoomSchema>>({
//     resolver: zodResolver(RoomSchema),
//     defaultValues: {
//       name: "",
//       imageUrl: "",
//       description: "",
//       difficulty: "Easy",
//       content: "",
//       published: false,
//       slug: "",
//     },
//   });

//   const onSubmit = (values: z.infer<typeof RoomSchema>) => {
//     setError("");
//     setSuccess("");

//     startTransition(() => {
//       createRoom(values).then((data) => {
//         setError(data.error);
//         setSuccess(data.success);
//       });
//     });
//   };
//   let hostname = "nextlabs.cz/room/";
//   if (typeof window !== "undefined") {
//     hostname = window.location.origin;
//   }

//   return (
//     <div className="m-8">
//       <CardWrapper
//         headerLabel="Vytvoření místnosti"
//         backButtonLabel="Zpět na seznam místností"
//         backButtonHref="/dashboard"
//       >
//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
//             <div className="space-y-2">
//               <FormField
//                 control={form.control}
//                 name="name"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Name</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder="Room 1"
//                         type="text"
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="difficulty"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Difficulty</FormLabel>
//                     <FormControl>
//                       <Select defaultValue={"Easy"} disabled={isPending}>
//                         <SelectTrigger className="w-full">
//                           <SelectValue />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="Easy">Easy</SelectItem>
//                           <SelectItem value="Medium">Medium</SelectItem>
//                           <SelectItem value="Hard">Hard</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="imageUrl"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Image URL</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder="https://placekitten.com/600/600"
//                         type="text"
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="description"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Description</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         {...field}
//                         placeholder="Sem napiš krátký popis pro místnost..."
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="content"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Content</FormLabel>
//                     <FormControl>
//                       <Textarea
//                         {...field}
//                         placeholder="Obsah místnosti..."
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="slug"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel>Slug</FormLabel>
//                     <FormControl>
//                       <Input
//                         {...field}
//                         placeholder={
//                           "zaklady-js -> " + hostname + "/room/zaklady-js"
//                         }
//                         type="text"
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//               <FormField
//                 control={form.control}
//                 name="published"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-row items-center space-x-3 space-y-0">
//                     <FormControl className="flex items-center space-x-2">
//                       <Checkbox
//                         checked={field.value}
//                         onCheckedChange={field.onChange}
//                         disabled={isPending}
//                       />
//                     </FormControl>
//                     <FormLabel className="text-sm font-normal">
//                       Published
//                     </FormLabel>
//                   </FormItem>
//                 )}
//               />
//             </div>
//             <FormError message={error} />
//             <FormSuccess message={success} />
//             <FormItem>
//               <Button typeof="submit" className="w-full" disabled={isPending}>
//                 Vytvořit místnost!
//               </Button>
//             </FormItem>
//           </form>
//         </Form>
//       </CardWrapper>
//     </div>
//   );
// };
