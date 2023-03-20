import React from 'react';
import {NavbarProps} from "sanity";
import Link from "next/link";
import {HomeIcon} from "@sanity/icons";
import {Button} from "@sanity/ui";

const ToolMenu = (props: NavbarProps) => {
    const { renderDefault } = props;
    return (
        <div className="md:flex gap-2">
            <div className="mb-2 md:mb-0">
                <Button
                    as={Link}
                    href="/"
                    target="_blank"
                    fontSize={[2]}
                    icon={HomeIcon}
                    mode="ghost"
                    text="Home"
                    className="w-full md:w-auto"
                />
            </div>

            <div>
                {renderDefault(props)}
            </div>
        </div>
    )
};

export default ToolMenu;
