"use client";

import LordIcon from "./LordIcon";

/**
 * Composant avec des exemples d'icônes Lordicon populaires
 * 
 * Pour trouver plus d'icônes, visite : https://lordicon.com/icons
 * 
 * Triggers disponibles :
 * - "hover" : Animation au survol
 * - "click" : Animation au clic
 * - "loop" : Animation en boucle
 * - "loop-on-hover" : Boucle uniquement au survol
 * - "morph" : Morphing entre états
 * - "morph-two-way" : Morphing bidirectionnel
 */

export function LordIconExamples() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
      {/* Checkmark animé */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/lomfljuq.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          size={80}
        />
        <span className="text-sm">Checkmark</span>
      </div>

      {/* Email */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/rhvddzym.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          size={80}
        />
        <span className="text-sm">Email</span>
      </div>

      {/* Location */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/zzcjjfpq.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          size={80}
        />
        <span className="text-sm">Location</span>
      </div>

      {/* Phone */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/srsgifqc.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          size={80}
        />
        <span className="text-sm">Phone</span>
      </div>

      {/* Heart */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/ulnswmkk.json"
          trigger="hover"
          colors="primary:#e83a30,secondary:#f24c00"
          size={80}
        />
        <span className="text-sm">Heart</span>
      </div>

      {/* Tools/Settings */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/lecprnjb.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          size={80}
        />
        <span className="text-sm">Tools</span>
      </div>

      {/* Calendar */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/wmwqvixz.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          size={80}
        />
        <span className="text-sm">Calendar</span>
      </div>

      {/* Arrow Right */}
      <div className="flex flex-col items-center gap-2">
        <LordIcon
          src="https://cdn.lordicon.com/zmkotitn.json"
          trigger="hover"
          colors="primary:#121331,secondary:#08a88a"
          size={80}
        />
        <span className="text-sm">Arrow</span>
      </div>
    </div>
  );
}

// Exemples d'icônes populaires pour ton site de van
export const VanlandIcons = {
  // Contact & Communication
  email: "https://cdn.lordicon.com/rhvddzym.json",
  phone: "https://cdn.lordicon.com/srsgifqc.json",
  location: "https://cdn.lordicon.com/zzcjjfpq.json",
  message: "https://cdn.lordicon.com/fdxqrdfe.json",
  
  // Navigation & Actions
  arrowRight: "https://cdn.lordicon.com/zmkotitn.json",
  arrowDown: "https://cdn.lordicon.com/jxwksgwv.json",
  menu: "https://cdn.lordicon.com/cllunfud.json",
  close: "https://cdn.lordicon.com/zxvuvcnc.json",
  
  // Status & Feedback
  checkmark: "https://cdn.lordicon.com/lomfljuq.json",
  star: "https://cdn.lordicon.com/pndvjlqj.json",
  heart: "https://cdn.lordicon.com/ulnswmkk.json",
  like: "https://cdn.lordicon.com/pnhskdva.json",
  
  // Tools & Services
  tools: "https://cdn.lordicon.com/lecprnjb.json",
  wrench: "https://cdn.lordicon.com/zpxybbhl.json",
  settings: "https://cdn.lordicon.com/hwuyodym.json",
  
  // Time & Schedule
  calendar: "https://cdn.lordicon.com/wmwqvixz.json",
  clock: "https://cdn.lordicon.com/egiwmiit.json",
  
  // Travel & Van
  car: "https://cdn.lordicon.com/whrxobsb.json",
  map: "https://cdn.lordicon.com/wxnxiano.json",
  compass: "https://cdn.lordicon.com/vufjamqa.json",
  
  // Images & Media
  image: "https://cdn.lordicon.com/dxjqoygy.json",
  camera: "https://cdn.lordicon.com/fihkmkwt.json",
  
  // User & Account
  user: "https://cdn.lordicon.com/bhfjfgqz.json",
  users: "https://cdn.lordicon.com/dxjqoygy.json",
  
  // Misc
  lightbulb: "https://cdn.lordicon.com/wcjauznf.json",
  shield: "https://cdn.lordicon.com/nrtdaiif.json",
  rocket: "https://cdn.lordicon.com/fihkmkwt.json",
};

