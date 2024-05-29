"use client";
import React from 'react'
import { useState } from "react";
import styles from "@/components/main.module.css"
import { Links } from "@/types/Links"
import Link from "next/link";

type Props = {}

const links: Links[] = [
    { label: "Agregar información", route: "/formAdd" },
    { label: "Listar información", route: "/list" }
]

export default function Menu(props: Props) {

    const [menus, setMenus] = useState<string[]>(["HTML", "CSS", "JavaScript", "TypeScript", "Node", "Express", "React", "Next"])

    return (
        <div>
            <ul className={styles.menu}>
                {menus.map((menu, index) => (
                    <a href="#"><li className={styles.li} key={menu + index}>{menu}</li></a>
                ))}
            </ul>
            <ul className={styles.menu}>

                {links.map(({ route, label }) => (
                    <li key={route} className={styles.li}>
                        <Link href={route}>{label}</Link>
                    </li>
                ))}

            </ul>

        </div>
    )
}