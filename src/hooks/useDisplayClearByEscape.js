import { useEffect } from "react";

export function useDisplayClearByEscape(isClear, clearDisplay) {

    useEffect(() => {

        if (isClear) return; /*Если экран очищен, останавливаем действие эффекта*/

        const handleEscapeClick = (event) => {
            if (event.key === 'Escape') {
                clearDisplay();
            }
        }
        if (!isClear) {
            document.addEventListener("keydown", handleEscapeClick);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeClick);
        }

    }, [isClear, clearDisplay]);
}