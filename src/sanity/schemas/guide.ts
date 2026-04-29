import { defineType, defineField } from "sanity";

export const guide = defineType({
  name: "guide",
  title: "📖 Bruksguide",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      hidden: true,
      initialValue: "Bruksguide",
    }),
    defineField({
      name: "content",
      title: "Innhold",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Heading 2", value: "h2" },
            { title: "Heading 3", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
        },
      ],
      hidden: true, // Hidden because we use the static guide instead
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "📖 Slik bruker du Redaksjonsverktøyet",
        subtitle: "Les instruksjonene her",
      };
    },
  },
});
