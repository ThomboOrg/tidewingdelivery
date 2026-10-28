// ponytail: demo account data until the portal API exists

export type Status = "Booked" | "In transit" | "At customs" | "Delivered" | "Delayed";

export type Shipment = {
  id: string;
  ref: string;
  mode: "air" | "sea";
  from: string;
  to: string;
  status: Status;
  eta: string;
  weight: string;
};

export const account = { company: "Kente & Co. Ltd", user: "Ama Owusu", email: "ama@kenteco.example", accountNo: "TWB-20418" };

export const shipments: Shipment[] = [
  { id: "TW-4821-0937", ref: "PO-1182", mode: "sea", from: "Shanghai, CN", to: "Tema, GH", status: "In transit", eta: "14 Nov", weight: "12,400 kg" },
  { id: "TW-1093-2210", ref: "PO-1190", mode: "air", from: "London, GB", to: "Accra, GH", status: "At customs", eta: "29 Oct", weight: "320 kg" },
  { id: "TW-7730-1145", ref: "PO-1187", mode: "air", from: "Dubai, AE", to: "Accra, GH", status: "Delayed", eta: "31 Oct", weight: "85 kg" },
  { id: "TW-5512-0048", ref: "PO-1194", mode: "sea", from: "Shenzhen, CN", to: "Tema, GH", status: "Booked", eta: "02 Dec", weight: "6,200 kg" },
  { id: "TW-3307-8821", ref: "PO-1176", mode: "air", from: "Frankfurt, DE", to: "Lagos, NG", status: "Delivered", eta: "24 Oct", weight: "140 kg" },
  { id: "TW-9014-3360", ref: "PO-1171", mode: "sea", from: "Mumbai, IN", to: "Tema, GH", status: "Delivered", eta: "19 Oct", weight: "18,900 kg" },
  { id: "TW-2268-7704", ref: "PO-1196", mode: "air", from: "New York, US", to: "Accra, GH", status: "Booked", eta: "05 Nov", weight: "210 kg" },
  { id: "TW-6645-1902", ref: "PO-1168", mode: "sea", from: "Rotterdam, NL", to: "Tema, GH", status: "Delivered", eta: "11 Oct", weight: "9,750 kg" },
];

export const invoices = [
  { id: "INV-30871", date: "25 Oct 2026", shipment: "TW-1093-2210", amount: 2480, status: "Due" },
  { id: "INV-30842", date: "18 Oct 2026", shipment: "TW-4821-0937", amount: 14650, status: "Due" },
  { id: "INV-30790", date: "02 Oct 2026", shipment: "TW-7730-1145", amount: 690, status: "Overdue" },
  { id: "INV-30711", date: "21 Sep 2026", shipment: "TW-3307-8821", amount: 1120, status: "Paid" },
  { id: "INV-30655", date: "09 Sep 2026", shipment: "TW-9014-3360", amount: 21300, status: "Paid" },
  { id: "INV-30602", date: "28 Aug 2026", shipment: "TW-6645-1902", amount: 11840, status: "Paid" },
] as const;

export const statusStyle: Record<string, string> = {
  Booked: "bg-mist text-ink/70",
  "In transit": "bg-sky/10 text-sky",
  "At customs": "bg-amber-100 text-amber-700",
  Delivered: "bg-lagoon/10 text-lagoon",
  Delayed: "bg-red-100 text-red-700",
  Due: "bg-amber-100 text-amber-700",
  Overdue: "bg-red-100 text-red-700",
  Paid: "bg-lagoon/10 text-lagoon",
};

export const usd = (n: number) => "$" + n.toLocaleString("en-US");
