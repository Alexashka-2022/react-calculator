import { useEffect } from "react";

export function useDisplayClearByEscape(isClear, handleClearDisplay) {

    useEffect(() => {

        if (isClear) return; /*Если экран очищен, останавливаем действие эффекта*/

        const handleEscapeClick = (event) => {
            if (event.key === 'Escape') {
                handleClearDisplay();
            }
        }
        if (!isClear) {
            document.addEventListener("keydown", handleEscapeClick);
        }

        return () => {
            document.removeEventListener("keydown", handleEscapeClick);
        }

    }, [isClear, handleClearDisplay]);
}