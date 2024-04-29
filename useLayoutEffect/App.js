// 둘 중 하나 주석
// import { useEffect, useState } from "react";
import { useLayoutEffect, useState } from "react";
export default function App() {
    const [age, setAge] = useState(0);
    const [name, setName] = useState("");
    // 둘 중 하나 주석
    // useEffect(() => {
    useLayoutEffect(() => {
        setAge(25);
        setName("찬민");
    }, []);
    
    return (
        <>
            <div className="App">{`그의 이름은 ${name} 이며,
                나이는 ${age}살 입니다.`}
            </div>
        </>
    );
}// F5를 눌러보자
// src/App.js에 붙여넣기