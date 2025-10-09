import react, { useContext } from 'react';
import { themecontext } from './theme'
function Child() {
    const { theme, setTheme } = useContext(themecontext)
    return (
        <div style={{
            backgroundColor: theme === "light" ? "#f9f9f9" : "#333",
            color: theme === "light" ? "#000" : "#fff",
            padding: "20px",
            borderRadius: "10px",
            textAlign: "center",
            transition: "all 0.3s ease",
        }}>
            <p>current theme:{theme}</p>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} style={{
                padding: "10px 20px",
                border: "none",
                borderRadius: "6px",
                backgroundColor: theme === "light" ? "#007bff" : "#ffa500",
                color: "#fff",
                cursor: "pointer"
            }}> toggle theme</button>
        </div>
    )
}
export default Child