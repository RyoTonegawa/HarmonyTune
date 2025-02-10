import { ModeToggle } from "../modeToggle/mode-toggle";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 dark:bg-background">
      <h1 className="text-2xl font-bold text-muted-foreground">Harmony Tune</h1>

      <ModeToggle />
    </header>
  );
};

export default Header;
