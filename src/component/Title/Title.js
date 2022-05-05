import React, { useState } from "react";

function Title() {
    const [num, usenNm] = useState(0)

    function handleClick() {
        usenNm(data => data + 1)
    }
    return ( <
        div >
        <
        h1 > Hello! < /h1> <
        h2 > num: { num } < /h2> <
        button onClick = { handleClick } > Click < /button>  <
        /
        div >
    )
}

export default Title;