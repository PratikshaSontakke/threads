"use client"

import * as z from 'zod'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/Form';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { usePathname, useRouter } from 'next/navigation';
import { CommentValidation } from '@/lib/validation/thread';
import { getRandomValues } from 'crypto';
import Image from 'next/image';

interface Props {
    threadId: string,
currentUserImage: string,
currentUserId: string
}

 const Comment = ({threadId, currentUserImage, currentUserId}: Props) => {
    
    const router = useRouter();
    const pathname = usePathname()
  
    const form = useForm({
      resolver: zodResolver(CommentValidation),
      defaultValues: {
        thread:''
      },
    })

    const onSubmit = async(values: z.infer<typeof CommentValidation>)=>{
        // await createThread({
        //     text: values.thread, 
        //     author: userId,
        //     communityId:null,
        //     path:pathname
        //  })

         router.push('/')

    }
  return (
    <Form {...form}>
    <form
      className='comment-form'
      onSubmit={form.handleSubmit(onSubmit)}
    >
        <FormField
      control={form.control}
      name='thread'
      render={({ field }) => (
        <FormItem className='flex w-full items-center gap-3'>
          <FormLabel >
           <Image src={currentUserImage}
           alt='Profile image'
           height={48}
           width={48}
           className='w-full object-contain'/>
          </FormLabel>
          <FormControl className='border-none bg-transparent'>
            <Input 
            type='text'
            placeholder='Comment...'
              className='text-light-1 outline-none no-focus'
              {...field}
            />
          </FormControl>
        </FormItem>
      )}
    />
    <Button type='submit' className='comment-form_btn'>
        Reply
    </Button>
        </form> </Form>
  )
}

export default Comment