import axios from 'axios';
import React from 'react';

function Memo(props) {
    const { memo } = props;

    const memoFix = (event) => {
        event.preventDefault();
    }
    const memoRemove = (event) => {
        event.preventDefault();

        let variable = {
            memoId: memo.memoId
        }

        if(window.confirm("메모를 삭제할까요?")) {
            axios.post('/api/memo/removeMemo', variable)
                .then(res => {
                    if(res.data.success) {
                        alert('메모를 삭제했습니다.');
                        window.location.replace('');
                    } else {
                        alert('메모를 삭제하지 못했습니다.')
                    }
                })
        } else {
            alert("취소합니다.");
        }
    }

    return (
        <>
            {memo.content}
            <div style={{float: 'right'}}>
                <button onClick={memoFix}>수정</button>
                <button onClick={memoRemove}>삭제</button>
            </div>
            <hr />
        </>
    )
}

export default Memo
