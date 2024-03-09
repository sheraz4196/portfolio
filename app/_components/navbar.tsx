import Tabs from "$/components/tabs";

export default function Navbar() {
  const TABS = [
    {
      children: "About Me",
      href: "/about",
    },
    {
      children: "Projects",
      href: "/projects",
    },
  ];
  return (
    <nav>
      <Tabs tabs={TABS} />
    </nav>
  );
}
