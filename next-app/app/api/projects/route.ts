import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const PROJECTS_FILE = path.join(DATA_DIR, "projects.json");

function readProjects(): object[] {
  try {
    const raw = fs.readFileSync(PROJECTS_FILE, "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : parsed?.projects ?? [];
  } catch {
    return [];
  }
}

function writeProjects(projects: object[]) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(PROJECTS_FILE, JSON.stringify(projects, null, 2), "utf8");
}

export async function GET() {
  const projects = readProjects();
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  let body: { action?: string; project?: object; projects?: object[]; index?: number };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Bad JSON" }, { status: 400 });
  }

  const projects = readProjects();

  if (body.action === "add" && body.project) {
    projects.unshift({ ...body.project, date: (body.project as { date?: string }).date ?? new Date().toISOString() });
  } else if (body.action === "replace" && body.projects) {
    projects.splice(0, projects.length, ...body.projects);
  } else if (body.action === "delete" && body.index !== undefined) {
    projects.splice(body.index, 1);
  } else {
    return NextResponse.json({ error: "Invalid action" }, { status: 400 });
  }

  writeProjects(projects);
  return NextResponse.json({ success: true, count: projects.length });
}
