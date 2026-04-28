import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elektro Sør – Studio",
  robots: { index: false, follow: false },
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body>{children}</body>
    </html>
  );
}
