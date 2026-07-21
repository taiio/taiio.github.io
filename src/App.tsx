import { AppRouter } from "@/router";
import { ThemeProvider } from "@/components/ThemeSwitcher";
import { CommandPalette } from "@/components/CommandPalette";

export default function App() {
  return (
    <ThemeProvider>
      <CommandPalette />
      <AppRouter />
    </ThemeProvider>
  );
}
