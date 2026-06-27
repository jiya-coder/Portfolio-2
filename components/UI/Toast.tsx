"use client";

import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, XCircle } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  visible: boolean;
}

export default function Toast({ message, type, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-8 right-8 z-[9999] flex items-center gap-3 glass rounded-xl px-5 py-4 shadow-2xl max-w-sm"
          role="status"
        >
          {type === "success" ? (
            <CheckCircle2 size={20} className="text-green-400 flex-shrink-0" />
          ) : (
            <XCircle size={20} className="text-red-400 flex-shrink-0" />
          )}
          <p className="text-sm text-ink">{message}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
