'use client';
import * as React from 'react';
import useMediaQuery from '@/hooks/useMediaQuery';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import PostReviewForm from '../forms/post-reveiw-form';
import Link from 'next/link';
export function PostReview() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <section className="col-span-3 flex items-center justify-end">
        <div className="flex items-center gap-6">
          <Button size={'lg'} asChild>
            <Link href={'/hire-me'}>Hire Me</Link>
          </Button>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button size={'lg'} variant={'outline'}>
                Post Review
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Post Your Review Here</DialogTitle>
                <DialogDescription>
                  If you ever worked with me, please share your honest experience here!!
                </DialogDescription>
              </DialogHeader>
              <PostReviewForm />
            </DialogContent>
          </Dialog>
        </div>
      </section>
    );
  }

  return (
    <section className="col-span-3 flex items-center justify-end">
      <div className="flex items-center gap-6">
        <Button asChild>
          <Link href={'/hire-me'}>Hire Me</Link>
        </Button>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant={'outline'}>Post Reveiw</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader className="text-left">
              <DrawerTitle>Post Reveiw</DrawerTitle>
              <DrawerDescription>
                If you ever worked with me, please share your honest expereince here
              </DrawerDescription>
            </DrawerHeader>
            <PostReviewForm />
            <DrawerFooter className="pt-2">
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    </section>
  );
}
