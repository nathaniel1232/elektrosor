import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId } from "@/sanity/env";
import { schemaTypes } from "@/sanity/schemas";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Elektro Sør – Redaksjonsverktøy",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("📌 Redaksjonsverktøy")
          .items([
            // Help section
            S.listItem()
              .title("📖 Hvordan bruke dette?")
              .id("help")
              .child(
                S.document()
                  .schemaType("guide")
                  .documentId("guide-singleton")
                  .title("📖 Bruksguide")
              ),
            S.divider(),
            
            // Main content
            S.listItem()
              .title("⚙️ Innstillinger")
              .id("settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Nettstedets innstillinger")
              ),
            S.divider(),

            // Content sections
            S.documentTypeListItem("testimonial")
              .title("⭐ Kundeomtaler")
              .icon(() => "⭐"),
            S.documentTypeListItem("referanse")
              .title("🏆 Referanseprosjekter")
              .icon(() => "🏆"),
            S.documentTypeListItem("jobPosting")
              .title("💼 Stillingsannonser")
              .icon(() => "💼"),
            S.divider(),
            S.documentTypeListItem("sertifisering")
              .title("✅ Sertifiseringer")
              .icon(() => "✅"),
            S.listItem()
              .title("🤖 AI-chatbot innstillinger")
              .id("chatSettings")
              .child(
                S.document()
                  .schemaType("chatSettings")
                  .documentId("chatSettings")
                  .title("AI-chatbot innstillinger")
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
