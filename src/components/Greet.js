import React from 'react';
import Card from "./UI/Card"; // 생략가능 ( 구버전은 X )

const Greet = (ccc) => {

    return (
        <>
            <Card className="border-green">
            <h1>
                Hello REACT!
                {ccc.children}
            </h1>
            </Card>
        </>
    );
}

export default Greet;