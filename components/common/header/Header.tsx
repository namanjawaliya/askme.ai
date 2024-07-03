import { BRAND_NAME } from "@/lib/constants";
import ThemeToggle from "@/components/common/theme/ThemeToggle";

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-10 py-2 border-b-2">
      <h1 className="font-bold">{BRAND_NAME}</h1>
      <div>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Header;
