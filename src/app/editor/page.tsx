"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { TemplateEditor } from "@/components/editor/TemplateEditor";
import { Loader2 } from "lucide-react";

function EditorContent() {
  const searchParams = useSearchParams();
  const templateId = searchParams.get("template") || "charming-dulha-dulhan-wedding";

  return <TemplateEditor initialTemplateId={templateId} />;
}

export default function UniversalEditorPage() {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-background text-foreground gap-3">
          <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
          <p className="text-sm text-neutral-400">Loading High-DPI Invitation Studio...</p>
        </div>
      }
    >
      <EditorContent />
    </Suspense>
  );
}
