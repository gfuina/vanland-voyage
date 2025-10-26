"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";

interface TarifItem {
  nom: string;
  prix: string;
}

interface TarifsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tarifs: TarifItem[];
}

export default function TarifsModal({
  isOpen,
  onClose,
  title,
  tarifs,
}: TarifsModalProps) {
  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-navy/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-lg w-full max-h-[85vh] sm:max-h-[90vh] overflow-y-auto relative"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-br from-navy via-primary to-navy px-4 py-4 sm:px-6 sm:py-5 rounded-t-2xl sm:rounded-t-3xl">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">
                    {title}
                  </h3>
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors text-white"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <div className="space-y-2 sm:space-y-3">
                  {tarifs.map((tarif, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start justify-between gap-3 p-3 sm:p-4 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-navy text-sm sm:text-base leading-snug">
                          {tarif.nom}
                        </h4>
                      </div>
                      <div className="flex-shrink-0">
                        <span className="text-sm sm:text-base font-bold text-secondary whitespace-nowrap">
                          {tarif.prix}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-accent/10 rounded-xl sm:rounded-2xl border border-accent/20">
                  <p className="text-xs sm:text-sm text-navy">
                    <span className="font-bold">Note :</span> Ces tarifs sont
                    indicatifs et peuvent varier selon votre projet. Contactez-nous
                    pour un devis personnalisé.
                  </p>
                </div>

                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-secondary text-white font-bold text-sm sm:text-base rounded-xl sm:rounded-2xl hover:bg-secondary/90 transition-all duration-300 shadow-lg hover:shadow-xl text-center"
                  >
                    Demander un devis
                  </Link>
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 sm:px-8 sm:py-3 bg-accent text-navy font-bold text-sm sm:text-base rounded-xl sm:rounded-2xl hover:bg-accent/90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

