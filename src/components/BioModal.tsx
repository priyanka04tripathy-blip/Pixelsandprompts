import React, { useEffect } from "react";
import { BioDetails } from "../types";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BioModalProps {
  bio: BioDetails | null;
  onClose: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({ bio, onClose }) => {
  // Listen for escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (bio) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [bio, onClose]);

  return (
    <AnimatePresence>
      {bio && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
          {/* Backdrop with extreme blur and subtle pulse */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.95 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#080810]/95 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 30, stiffness: 220 }}
            className={`relative w-full max-w-4xl bg-[#0e0e1a] border border-white/10 rounded-3xl p-6 md:p-12 shadow-[0_0_80px_rgba(44,72,212,0.15)] overflow-hidden z-10 my-8`}
          >
            {/* Background Accent Gradients */}
            <div
              className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-[100px] opacity-25 pointer-events-none`}
              style={{
                backgroundColor: bio.id === "priyanka" ? "#FF67FF" : "#00AEEF",
              }}
            />

            {/* High-Contrast Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-pink-accent/40"
              aria-label="Close modal"
            >
              <X size={22} />
            </button>

            {/* Main Grid Content */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start pt-6">
              {/* Image side */}
              <div className="md:col-span-5 relative group">
                <div
                  className={`absolute inset-0 rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500`}
                  style={{ backgroundColor: bio.id === "priyanka" ? "#FF67FF" : "#00AEEF" }}
                />
                <div className="relative border border-white/10 rounded-2xl overflow-hidden bg-black/50 aspect-[3/4] w-full max-w-sm mx-auto">
                  <img
                    src={bio.imageUrl}
                    alt={bio.name}
                    className={`w-full h-full object-cover grayscale brightness-90 contrast-105 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ${
                      bio.id === "rashi" ? "object-[center_12%]" : ""
                    }`}
                    referrerPolicy="no-referrer"
                  />
                  {/* Neon Overlay */}
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      background:
                        bio.id === "priyanka"
                          ? "radial-gradient(circle, transparent 20%, #FF67FF 100%)"
                          : "radial-gradient(circle, transparent 20%, #00AEEF 100%)",
                    }}
                  />
                </div>
              </div>

              {/* Text side */}
              <div className="md:col-span-7 flex flex-col justify-center h-full">
                {/* Accent Tag */}
                <span
                  className={`font-handwritten text-xl font-semibold mb-3 ${
                    bio.id === "priyanka" ? "text-[#FF67FF]" : "text-[#00AEEF]"
                  }`}
                >
                  {bio.tag}
                </span>

                {/* Big Title */}
                <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight mb-2">
                  {bio.name}
                </h2>

                {/* Subtitle Line */}
                <p className="font-body text-sm font-medium text-white/50 italic mb-6">
                  {bio.roleLine}
                </p>

                {/* Bio text */}
                <div className="border-t border-white/5 pt-6 mb-6">
                  <p className="font-body text-base text-body-text leading-relaxed whitespace-pre-line">
                    {bio.bio}
                  </p>
                </div>

                {/* She handles strip */}
                <div className="border-t border-white/5 pt-6">
                  <p className="font-body text-sm font-semibold text-white mb-2 uppercase tracking-widest text-[11px]">
                    Responsibilities
                  </p>
                  <p className="font-body text-sm text-white/80 leading-relaxed">
                    {bio.handles}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
