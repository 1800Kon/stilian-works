"use client"
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";

export default function Home() {
    return (
        <div className="grid grid-cols-3">
            {/* Left side */}
            <div className="flex justify-center items-center col-span-1 bg-blue-800">
                <div className="text-center grow">
                    <Listbox className=" gap-8">
                        <ListboxItem key="new"><p className="text-4xl text-slate-100">Verev</p></ListboxItem>
                        <ListboxItem key="copy"><p className="text-4xl text-slate-100">Indignus</p></ListboxItem>
                        <ListboxItem key="edit"><p className="text-4xl text-slate-100">Something</p></ListboxItem>
                        <ListboxItem key="edit"><p className="text-4xl text-slate-100">Fortnite</p></ListboxItem>
                    </Listbox>
                </div>
            </div>
            {/* Right side */}
            <div className="flex justify-center items-center col-span-2 bg-blue-400">
                <Image
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
            </div>
        </div >
    )
}