"use client";

// ============================================================
// CARBON YACHTS — ENQUIRY FORM COMPONENT
// ============================================================
// Paste your V0 Enquiry Form component code here.
//
// Props:
// - defaultModel?: string (pre-fills the model dropdown)
// - variant?: "modal" | "embedded" (default: "embedded")
// - title?: string (default: "Make an Enquiry")
//
// Form fields:
// - First Name, Last Name
// - Email
// - Phone (placeholder: 04XX XXX XXX)
// - Model of Interest (dropdown, pre-filled via defaultModel prop)
// - Message
// - Preferred contact method (radio: Email / Phone / Either)
//
// On submit:
// - POST to /api/enquiry (Supabase + email to info@carbonyachts.com.au)
// ============================================================

interface EnquiryFormProps {
  defaultModel?: string;
  variant?: "modal" | "embedded";
  title?: string;
}

export default function EnquiryForm({
  defaultModel,
  variant = "embedded",
  title = "Make an Enquiry",
}: EnquiryFormProps) {
  return (
    <div className="bg-zinc-900 p-8 rounded">
      <h2
        className="text-white text-2xl font-bold uppercase tracking-widest mb-6"
        style={{ fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif" }}
      >
        {title}
      </h2>
      {defaultModel && (
        <p className="text-zinc-400 text-sm mb-4">
          Enquiring about: <strong className="text-white">{defaultModel}</strong>
        </p>
      )}
      <p className="text-zinc-500 text-xs">
        — Paste V0 Enquiry Form component here —
      </p>
    </div>
  );
}
