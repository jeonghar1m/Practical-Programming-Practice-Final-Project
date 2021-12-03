import React from 'react'

function MemoList() {
    return (
        <div>
            작성한 메모
            <hr />
            <button onClick={() => window.location.replace('/')}>메모 쓰기</button>
        </div>
    )
}

export default MemoList
