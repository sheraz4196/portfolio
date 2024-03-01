import Button from "$/components/button";
import Input from "$/components/Input";
export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-white">
      <Input placeholder="Hello" label="Hello " />
      <Button>Button</Button>
    </div>
  );
}
