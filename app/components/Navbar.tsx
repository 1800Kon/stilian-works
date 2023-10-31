import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Divider } from "@nextui-org/react";
import { AcmeLogo } from "../AcmeLogo.jsx"
export default function NavigationBar() {
    return (
        <div className="bg-blue-100">
            <div className="flex h-20 items-center justify-center">
                <p className="text-4xl">Stilian</p>
                <AcmeLogo />
                <p className="text-4xl">Works</p>
            </div>
            <div className="grid grid-cols-3 grid-flow-col bg-blue-200 h-6">
                <Link color="foreground" href="/Philosophy">
                    <div className="text-center hover:bg-blue-300 w-full">
                        Philosophy
                    </div>
                </Link>
                <Link href="#" color="foreground">
                    <div className="text-center hover:bg-blue-300 w-full">
                        Collections
                    </div>
                </Link>
                <Link color="foreground" href="#">
                    <div className="text-center hover:bg-blue-300 w-full">
                        Contact
                    </div>
                </Link>
            </div >
        </div>
    )
}