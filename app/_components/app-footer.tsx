import Footer from "$/components/footer";

export default function AppFooter() {
  const links = [
    {
      href: "/",
      text: "Hello",
    },
    {
      href: "/",
      text: "World",
    },
  ];
  return (
    <Footer links={links} copyright="Sheraz Manzoor - All rights reserved" />
  );
}
