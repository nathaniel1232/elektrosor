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
          .title("Redaksjonsverktøy")
          .items([
            S.listItem()
              .title("Nettstedsinnstillinger")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.documentTypeListItem("jobPosting").title("Stillingsannonser"),
            S.documentTypeListItem("referanse").title("Referanseprosjekter"),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
