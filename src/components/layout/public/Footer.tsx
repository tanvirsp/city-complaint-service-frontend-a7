import { ThemeToggle } from "@/providers/ThemeToggle";

export default function Footer() {
  return (
    <div className="w-full h-16 border border-t flex justify-center items-center">
      <h1> copyright: City Complaint and Service </h1>
      <ThemeToggle />
    </div>
  );
}
