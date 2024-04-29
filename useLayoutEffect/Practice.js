import { useEffect, useState } from "react";
// import { useLayoutEffect, useState } from "react";

const Practice = () => {
    const [logoUrl, setLogoUrl] = useState("");
   
    useEffect(() => {
    // useLayoutEffect(() => {
        setLogoUrl("logo192.png");
    }, []);

    return (
        <>
            <img alt="test" src={logoUrl} />
        </>
    );
};
export default Practice;
