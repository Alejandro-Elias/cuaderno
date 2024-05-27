"use client";
import React from 'react'
import { useState } from "react";
import styles from "@/main.module.css"

type Props = {}

export default function Main  (props: Props)  {

    const [menus, setMenus] = useState<string[]>(["Item1", "item2", "Item3"])    

    return (
        <div>
            <ul className={styles.menu}>
                {menus.map((menu, index) => (
                    <li className={styles.li} key={menu + index}>{menu}</li>
                ))}
            </ul>
        </div>
    )
}