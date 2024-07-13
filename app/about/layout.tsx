import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MADC - About",
  description: "An MADC project",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
