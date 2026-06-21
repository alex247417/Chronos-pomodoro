import styles from "./styles.module.css";
import { HouseIcon } from "lucide-react";
import { SettingsIcon } from "lucide-react";
import { SunIcon } from "lucide-react";
import { HistoryIcon } from "lucide-react";

export function Menu() {
    return (
        <div className={styles.menu}>
            <a className={styles.menuLink} href="/">
                <HouseIcon />
            </a>

            <a className={styles.menuLink} href="/">
                <HistoryIcon />
            </a>

            <a className={styles.menuLink} href="/">
                <SettingsIcon />
            </a>

            <a className={styles.menuLink} href="/">
                <SunIcon />
            </a>
        </div>
    );
}