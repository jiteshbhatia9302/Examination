import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, content: "Method Not Allowed" });
  }

  const roll = parseInt(req.body.roll);
  if (isNaN(roll)) {
    return res.status(400).json({ success: false, content: "❌ Please enter a valid number" });
  }

  const remainder = roll % 4;
  const fileName = `${remainder + 1}.txt`;
  const filePath = path.join(process.cwd(), "public", fileName);

  try {
    const data = fs.readFileSync(filePath, "utf8");
    return res.status(200).json({ success: true, content: data });
  } catch (err) {
    return res.status(500).json({ success: false, content: "⚠️ Error reading file" });
  }
}
