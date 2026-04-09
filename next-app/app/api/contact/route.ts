import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const CONTACTS_FILE = path.join(DATA_DIR, "contacts.json");
const N8N_WEBHOOK = process.env.N8N_CONTACT_WEBHOOK ?? "";

export async function POST(req: NextRequest) {
  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad JSON" }, { status: 400 });
  }

  // Save to local log
  fs.mkdirSync(DATA_DIR, { recursive: true });
  let log: object[] = [];
  try {
    log = JSON.parse(fs.readFileSync(CONTACTS_FILE, "utf8"));
  } catch {}
  log.push({ ...data, received_at: new Date().toISOString() });
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(log, null, 2), "utf8");

  // Forward to n8n (fire-and-forget, never block the response)
  if (N8N_WEBHOOK) {
    fetch(N8N_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch(() => {});
  }

  return NextResponse.json({ success: true });
}
