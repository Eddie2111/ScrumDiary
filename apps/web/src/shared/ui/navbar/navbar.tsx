import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    return (
        <nav className="flex justify-between items-center p-4 border-b">
            <h1 className="font-bold text-2xl">WorkList</h1>
            <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="relative rounded-full w-8 h-8">
                            <Avatar className="w-8 h-8">
                                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                                <AvatarFallback>U</AvatarFallback>
                            </Avatar>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}