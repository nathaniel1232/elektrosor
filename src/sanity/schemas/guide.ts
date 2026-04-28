import { defineType, defineField } from "sanity";
import { HelpView } from "../components/HelpView";

export const guide = defineType({
  name: "guide",
  title: "📖 Bruksguide",
  type: "document",
  components: {
    // Replace the entire document form with our custom help view
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    input: HelpView as any,
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
      hidden: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "📖 Slik bruker du Redaksjonsverktøyet",
        subtitle: "Les instruksjonene her – klikk for å åpne",
      };
    },
  },
});
