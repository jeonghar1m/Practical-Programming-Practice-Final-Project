import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LandingPage() {
    const [MemoValue, setMemoValue] = useState("");

    // useEffect(() => {
    //     console.log(MemoValue)
    // }, [MemoValue])
    
    const handleClick = (event) => setMemoValue(event.currentTarget.value);

    const onSubmit = (event) => {
        event.preventDefault();

        const variables = {
            memoId: new Date().getTime(),
            content: MemoValue
        }

        axios.post('/api/memo/saveMemo', variables)
            .then(res => {
                if(res.data.success)    setMemoValue("");
                else    alert('메모를 저장하지 못했습니다.');
            })
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <textarea style={{width: '100%', height: 500}} onChange={handleClick} value={MemoValue} placeholder="메모를 작성하세요." required="required" />
                <hr />
                <button onClick={onSubmit}>확인</button>
                <button onClick={() => window.location.replace('/list')}>메모 리스트</button>
            </form>
        </div>
    )
}

export default LandingPage
