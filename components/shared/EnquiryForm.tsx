"use client"

import { useState } from "react"
import { CheckCircle2, X } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

// ─── Fonts ────────────────────────────────────────────────────────────────────
const ralewaySans: React.CSSProperties = {
  fontFamily: "'Raleway', 'Inter', 'Helvetica Neue', Arial, sans-serif",
}
const dmSans: React.CSSProperties = {
  fontFamily: "'DM Sans', system-ui, sans-serif",
}

// ─── Models ───────────────────────────────────────────────────────────────────
const MODELS = {
  "Saffier Yachts": [
    "Saffier SE 24 Lite",
    "Saffier SE 28 Leopard",
    "Saffier SE 33 Life",
    "Saffier SE 37 Lounge",
    "Saffier SE 38 Leader",
    "Saffier SL 46",
  ],
  "Y.Yachts": [
    "YYachts Y6",
    "YYachts Y7",
    "YYachts Y8",
    "YYachts Y9",
    "YYachts Y Breeze 75",
    "YYachts Y Custom",
  ],
  "Shogun Yachts": [
    "Shogun 43",
    "Shogun 50",
  ],
  "Virtue Yachts": [
    "Virtue V10 T-Top",
    "Virtue V10 Cabin",
    "Virtue V14 Hard Top",
  ],
  Santasevera: [
    "Santasevera 36",
    "Santasevera 42",
    "Santasevera 52",
  ],
  Candela: [
    "Candela C-8",
    "Candela P-12",
  ],
}

const CONTACT_METHODS = ["Email", "Phone", "WhatsApp"]

// ─── Types ────────────────────────────────────────────────────────────────────
interface EnquiryFormProps {
  variant: "embedded" | "modal"
  defaultModel?: string
  title?: string
}

// ─── Inner Form ───────────────────────────────────────────────────────────────
function FormBody({
  defaultModel,
  title = "Make an Enquiry",
  onClose,
}: {
  defaultModel?: string
  title?: string
  onClose?: () => void
}) {
  const [submitted, setSubmitted] = useState(false)
  const [fields, setFields] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    model: defaultModel ?? "",
    contactMethod: "",
    message: "",
  })

  function set(key: keyof typeof fields) {
    return (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setFields((p) => ({ ...p, [key]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  // ── Input shared styles ──
  const inputBase =
    "w-full bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-400 transition-colors"

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-6 py-16 px-8 text-center">
        <CheckCircle2 className="text-white" size={52} strokeWidth={1.25} />
        <div>
          <p
            className="text-white text-2xl font-semibold tracking-wide mb-3"
            style={ralewaySans}
          >
            Thank you for your enquiry
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed" style={dmSans}>
            A member of the Carbon Yachts team will be in touch shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
      {/* Title row */}
      <div className="flex items-center justify-between mb-1">
        <h2
          className="text-white text-2xl font-semibold tracking-widest uppercase"
          style={ralewaySans}
        >
          {title}
        </h2>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition-colors ml-4 shrink-0"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Grid: 2-col */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-zinc-300 text-xs font-semibold tracking-widest uppercase"
            style={ralewaySans}
          >
            First Name
          </label>
          <input
            required
            type="text"
            value={fields.firstName}
            onChange={set("firstName")}
            placeholder="James"
            className={inputBase}
            style={dmSans}
          />
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-zinc-300 text-xs font-semibold tracking-widest uppercase"
            style={ralewaySans}
          >
            Last Name
          </label>
          <input
            required
            type="text"
            value={fields.lastName}
            onChange={set("lastName")}
            placeholder="Harrington"
            className={inputBase}
            style={dmSans}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-zinc-300 text-xs font-semibold tracking-widest uppercase"
            style={ralewaySans}
          >
            Email Address
          </label>
          <input
            required
            type="email"
            value={fields.email}
            onChange={set("email")}
            placeholder="james@example.com"
            className={inputBase}
            style={dmSans}
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            className="text-zinc-300 text-xs font-semibold tracking-widest uppercase"
            style={ralewaySans}
          >
            Phone Number
          </label>
          <input
            type="tel"
            value={fields.phone}
            onChange={set("phone")}
            placeholder="04XX XXX XXX"
            className={inputBase}
            style={dmSans}
          />
        </div>
      </div>

      {/* Model of Interest */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-zinc-300 text-xs font-semibold tracking-widest uppercase"
          style={ralewaySans}
        >
          Model of Interest
        </label>
        <Select
          value={fields.model}
          onValueChange={(v) => setFields((p) => ({ ...p, model: v }))}
        >
          <SelectTrigger
            className="w-full bg-zinc-900 border-zinc-800 text-white data-[placeholder]:text-zinc-500 focus:ring-zinc-400 focus:ring-1 rounded-none h-auto py-3 px-4 text-sm"
            style={dmSans}
          >
            <SelectValue placeholder="Select a model…" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-900 border-zinc-800 text-white rounded-none">
            <SelectItem
              value="exploring"
              className="text-zinc-400 focus:bg-zinc-800 focus:text-white"
              style={dmSans}
            >
              {"I'm not sure yet / Exploring options"}
            </SelectItem>
            {Object.entries(MODELS).map(([brand, models]) => (
              <SelectGroup key={brand}>
                <SelectLabel
                  className="text-zinc-500 text-xs tracking-widest uppercase px-2 pt-3 pb-1"
                  style={ralewaySans}
                >
                  {brand}
                </SelectLabel>
                {models.map((m) => (
                  <SelectItem
                    key={m}
                    value={m}
                    className="focus:bg-zinc-800 focus:text-white"
                    style={dmSans}
                  >
                    {m}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Preferred Contact Method */}
      <div className="flex flex-col gap-2">
        <label
          className="text-zinc-300 text-xs font-semibold tracking-widest uppercase"
          style={ralewaySans}
        >
          Preferred Contact Method
        </label>
        <div className="flex gap-3 flex-wrap">
          {CONTACT_METHODS.map((method) => {
            const active = fields.contactMethod === method
            return (
              <button
                key={method}
                type="button"
                onClick={() =>
                  setFields((p) => ({ ...p, contactMethod: method }))
                }
                className={[
                  "px-5 py-2.5 text-xs tracking-widest uppercase border transition-colors",
                  active
                    ? "bg-white text-zinc-950 border-white"
                    : "bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-400 hover:text-white",
                ].join(" ")}
                style={ralewaySans}
              >
                {method}
              </button>
            )
          })}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          className="text-zinc-300 text-xs font-semibold tracking-widest uppercase"
          style={ralewaySans}
        >
          Message
        </label>
        <textarea
          rows={4}
          value={fields.message}
          onChange={set("message")}
          placeholder="Tell us about your boating plans, where you're based, or any specific questions…"
          className={`${inputBase} resize-none`}
          style={dmSans}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-white text-zinc-950 border border-white py-6 text-sm tracking-[3px] uppercase font-semibold hover:bg-zinc-950 hover:text-white transition-colors mt-1"
        style={ralewaySans}
      >
        Submit Enquiry
      </button>

      {/* Disclaimer */}
      <p className="text-zinc-600 text-xs text-center leading-relaxed" style={dmSans}>
        By submitting this form you agree to our Privacy Policy. We will never share your details with third parties.
      </p>
    </form>
  )
}

// ─── Exported Component ───────────────────────────────────────────────────────
export function EnquiryForm({
  variant,
  defaultModel,
  title = "Make an Enquiry",
}: EnquiryFormProps) {
  const [open, setOpen] = useState(false)

  if (variant === "embedded") {
    return (
      <div className="bg-zinc-950 px-8 py-10 w-full max-w-2xl">
        <FormBody defaultModel={defaultModel} title={title} />
      </div>
    )
  }

  // Modal variant
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          className="border border-white text-white bg-transparent px-7 py-3.5 text-xs tracking-[3px] uppercase font-semibold hover:bg-white hover:text-zinc-950 transition-colors"
          style={ralewaySans}
        >
          Enquire Now
        </button>
      </DialogTrigger>
      <DialogContent
        className="bg-zinc-950 border-zinc-800 p-0 max-w-2xl w-full rounded-none max-h-[90vh] overflow-y-auto [&>button]:hidden"
      >
        <VisuallyHidden>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Fill in your details below and a member of the Carbon Yachts team will be in touch.
          </DialogDescription>
        </VisuallyHidden>
        <div className="px-8 py-10">
          <FormBody
            defaultModel={defaultModel}
            title={title}
            onClose={() => setOpen(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
