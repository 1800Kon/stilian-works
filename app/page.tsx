"use client"
import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "./components/ListboxWrapper";

export default function Home() {
    return (
        <div className="grid grid-cols-3 bg-orange-200">
            {/* Left side */}
            <div className="bg-blue-100 col-span-1">
                <ListboxWrapper>
                    <Listbox
                        aria-label="Actions">
                        <ListboxItem key="new">Verev</ListboxItem>
                        <ListboxItem key="copy">Test 1</ListboxItem>
                        <ListboxItem key="edit">Test 2</ListboxItem>
                        <ListboxItem key="edit">Test 3</ListboxItem>

                    </Listbox>
                </ListboxWrapper>
            </div>
            {/* Right side */}
            <div className="bg-yellow-100 col-span-2">

            </div>
        </div >
    )
}