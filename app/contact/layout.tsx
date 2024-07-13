import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MADC - Contact",
  description: "An MADC project",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
