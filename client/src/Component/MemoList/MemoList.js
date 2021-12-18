import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Memo from './Sections/Memo';

function MemoList() {
    const [Memos, setMemos] = useState([]);
    useEffect(() => {
        axios.post('/api/memo/getMemo')
            .then(res => {
                if(res.data.success) {
                    setMemos(res.data.memos);
                    console.log(res.data);
                }
                else    alert('메모를 가져오는데 실패했습니다.');
            })
    }, [])
    return (
        <div>
            {Memos && Memos.map(memo => (
                <>
                    <Memo memo={memo} />
                </>
            ))}
            <button onClick={() => window.location.replace('/')}>메모 쓰기</button>
        </div>
    )
}

export default MemoList
