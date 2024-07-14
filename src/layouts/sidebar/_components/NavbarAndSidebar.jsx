import { NavLink } from "react-router-dom";
import { Package2, LayoutDashboard, FileText, Settings, User, PieChart, DollarSign, Target, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const sidebarItems = [
  { icon: <LayoutDashboard className="h-4 w-4" />, label: "Overview", to: "/" },
  { icon: <DollarSign className="h-4 w-4" />, label: "Transactions", to: "/transactions" },
  { icon: <PieChart className="h-4 w-4" />, label: "Budgets", to: "/budgets" },
  { icon: <Target className="h-4 w-4" />, label: "Goals", to: "/goals" },
  { icon: <TrendingUp className="h-4 w-4" />, label: "Investments", to: "/investments" },
];

export const NavbarAndSidebar = () => (
  <div className="hidden border-r bg-background md:block">
    <div className="flex h-full max-h-screen flex-col gap-2">
      <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
        <NavLink to="/" className="flex items-center gap-2 font-semibold">
          <Package2 className="h-6 w-6" />
          <span>FinDash</span>
        </NavLink>
      </div>
      <ScrollArea className="flex-1 px-3">
        <nav className="grid items-start gap-2 text-sm font-medium">
          {sidebarItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary ${
                  isActive ? "bg-muted text-primary" : "text-muted-foreground"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>
      </ScrollArea>
    </div>
  </div>
);