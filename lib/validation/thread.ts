import * as z from "zod";

export const ThreadValidation = z.object({
  thread: z.string().nonempty().min(3,  {message: 'Minimum 3 characters '}),
  accountId: z.string()
});


  export const CommentValidation = z.object({
    thread: z.string()
      .refine((data) => data.trim().length >= 3, {
        message: "Minimum 3 characters.",
      })
      .refine((data) => !/\s{3,}/.test(data), {
        message: "Thread cannot contain three or more consecutive spaces.",
      }),
  });