import React, { useState } from 'react'

function LandingPage() {
    const [MemoValue, setMemoValue] = useState("");

    const handleClick = (event) => setMemoValue(event.currentTarget.value);
    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            content: MemoValue
        }
    }
    return (
        <div>
            <textarea style={{width: '100%', height: 500}} onChange={handleClick} value={MemoValue} placeholder="메모를 작성하세요." />
            <hr />
            <button onClick={onSubmit}>확인</button>
            <button onClick={() => window.location.replace('/list')}>메모 리스트</button>
        </div>
    )
}

export default LandingPage
