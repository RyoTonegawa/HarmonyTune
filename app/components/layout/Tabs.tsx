import Link from "next/link";

const Tabs = () => {
  return (
    <nav className="flex justify-center space-x-4 border-b-2 border-gray-300 p-2">
      <Link href="/chord-check" className="px-4 py-2 text-muted-foreground">
        Chord Check
      </Link>
    </nav>
  );
};

export default Tabs;
