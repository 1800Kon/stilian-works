"use client"
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
    const [src, setSrc] = useState(
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96e5b225541387.56346f21d4d34.jpg"
    );

    return (
        <div className="">
            <div className="grid grid-cols-3">

                {/* Left side */}
                <div className="bg-slate-300 grow text-center col-span-1 ">
                    <Listbox className=" gap-8">
                        <ListboxItem key="Verev" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Verev</p></ListboxItem>
                        <ListboxItem key="Indignus" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Indignus</p></ListboxItem>
                        <ListboxItem key="Something" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Something</p></ListboxItem>
                        <ListboxItem key="Another" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Another</p></ListboxItem>
                    </Listbox>
                </div>
                {/* Right side */}
                <div className="justify-center items-center bg-red-800 col-span-2">
                    <Image
                        alt="NextUI hero Image"
                        src={src}
                        className="max-h-72 max-w-72"
                    />
                </div>
            </div >
        </div >
    )

    function imageSwapper(event: React.MouseEvent<HTMLElement>) {
        const key = event.currentTarget.getAttribute("data-key");
        switch (key) {
            case "Verev":
                setSrc("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96e5b225541387.56346f21d4d34.jpg");
                break;
            case "Indignus":
                setSrc("https://epicobracelets.com.gr/wp-content/uploads/2021/05/C39CE0FE-9088-448A-9BFF-48CE6EBD03CA-1200x772.jpeg");
                break;
            case "Something":
                setSrc("https://media.s-bol.com/4vXnXJxm7GOV/4v3MZ7/1200x772.jpg");
                break;
            case "Another":
                setSrc("https://luxferity.com/up/shop-news/content/sabbia-necklace-by-pomellato-1200x772.jpg");
                break;

        }
    }

    function imageDefault() {
        setSrc("https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96e5b225541387.56346f21d4d34.jpg");
    }



}
