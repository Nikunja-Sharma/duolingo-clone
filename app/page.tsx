import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="p-4 space-y-4 flex flex-col max-w-[200px]">
                <Button variant="default">e </Button>
                <Button className="" variant="primary">
                    Click me
                </Button>
                <Button variant="primaryOutline">Click me </Button>
                <Button className="" variant="secondary">
                    Click me
                </Button>
                <Button variant="secondaryOutline">secondary</Button>
                <Button className="" variant="danger">
                    Click me
                </Button>
                <Button variant="dangerOutline">secondary</Button>
                <Button className="" variant="super">
                    Click me
                </Button>
                <Button variant="superOutline">secondary</Button>
                <Button variant="ghost">secondary</Button>
                <Button className="" variant="sidebar">
                    Click me
                </Button>
                <Button variant="sidebarOutline">secondary</Button>
            </div>
        </>
    );
}
