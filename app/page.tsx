"use client"
import { Listbox, ListboxItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import { useState } from "react";
import NavigationBar from "./components/Navbar";

export default function Home() {
    // The state that controls the big picture on the main screen
    const [src, setSrc] = useState(
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/96e5b225541387.56346f21d4d34.jpg"
    );

    return (
        <div className="flex flex-col h-screen">
            <NavigationBar />
            <div className="h-full grid grid-cols-3 bg-cyan-500">
                {/* Left side */}
                <div className="text-center col-span-1 bg-yellow-100    ">
                    <Listbox className="h-full">
                        <ListboxItem key="Verev" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Verev</p></ListboxItem>
                        <ListboxItem key="Indignus" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Indignus</p></ListboxItem>
                        <ListboxItem key="Something" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Something</p></ListboxItem>
                        <ListboxItem key="Another" onMouseEnter={imageSwapper} onMouseLeave={imageDefault}><p className="text-4xl text-slate-800">Another</p></ListboxItem>
                    </Listbox>
                </div>
                {/* Right side */}
                <div className="flex justify-center items-center col-span-2">

                    <Image
                        alt="NextUI hero Image"
                        src={src}

                    />

                </div>
            </div >
        </div>
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
