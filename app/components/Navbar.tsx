import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "../AcmeLogo.jsx"
export default function NavigationBar() {
    return (
        <Navbar className="bg-orange-100">
            <NavbarBrand className="">
                < AcmeLogo />
                <p>
                    Stilian Works
                </p>
            </NavbarBrand >
            <NavbarContent className="gap-8" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="/Philosophy">
                        Philosophy
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Collections
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Contact
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar >
    )
}