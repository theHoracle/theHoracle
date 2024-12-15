"use client";
import { useEffect, useState } from "react";
import { Icon as Iconify } from "@iconify/react";

const Icon = (props: { icon: string, className?: string }) => {
    const { icon } = props;
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // This will set the flag to true when the component is mounted on the client
        setIsClient(true);
    }, []);

    // Render nothing or a placeholder until the component is on the client
    if (!isClient) {
        return null; // or a placeholder
    }

    return (  
          <Iconify icon={icon} className={props.className} />
    );
};

export default Icon;
