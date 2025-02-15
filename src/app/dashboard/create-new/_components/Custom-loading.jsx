import React from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Image from "next/image";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"; // Import for hidden title

export default function CustomLoading({ loading }) {
  return (
    <AlertDialog open={loading}>
      <AlertDialogContent>
        {/* Hidden title for screen reader accessibility */}
        <VisuallyHidden>
          <AlertDialogTitle>Loading</AlertDialogTitle>
        </VisuallyHidden>

        <div className="bg-white flex flex-col items-center justify-center my-10">
          <Image src="/load-time.gif" alt="Loading animation" width={100} height={100} />
          <h2 className="text-sm font-bold text-primary">Generating your video... Do not refresh</h2>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
