import Checkbox from "$/components/Checkbox";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <Checkbox label="True" isChecked={true} />
    </div>
  );
}
