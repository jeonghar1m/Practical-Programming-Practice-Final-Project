import axios from 'axios'
import React, { useEffect, useState } from 'react'

function MemoList() {
    const [Memos, setMemos] = useState([]);
    useEffect(() => {
        axios.post('/api/memo/getMemo')
            .then(res => {
                if(res.data.success)    setMemos(res.data.memos);
                else    alert('메모를 가져오는데 실패했습니다.');
            })
    })
    return (
        <div>
            {Memos && Memos.map(memo => (
                <>
                    {memo.content}
                    <hr />
                </>
            ))}
            <hr />
            <button onClick={() => window.location.replace('/')}>메모 쓰기</button>
        </div>
    )
}

export default MemoList
