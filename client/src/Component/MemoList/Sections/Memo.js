import React, { useState } from 'react';
import axios from 'axios';

function Memo(props) {
    const { memo } = props;

    const [OpenModify, setOpenModify] = useState(false);
    const [MemoValue, setMemoValue] = useState("");

    const onClickModifyOpen = (event) => {
        event.preventDefault();
        setOpenModify(!OpenModify);
    }
    const memoModify = (event) => {
        event.preventDefault();

        const variables = {
            memoId: memo.memoId,
            content: MemoValue
        }

        axios.post('/api/memo/modifyMemo', variables)
            .then(res => {
                if(res.data.success) {
                    setMemoValue("");
                    setOpenModify(!OpenModify);
                    alert('메모를 수정했습니다.');
                    window.location.replace('');
                } else {
                    alert('메모를 수정하지 못했습니다.');
                }
            })
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
    const handleClick = (event) => setMemoValue(event.currentTarget.value);

    return (
        <>
            {memo.content}
            <div style={{float: 'right'}}>
                <button onClick={onClickModifyOpen}>수정</button>
                <button onClick={memoRemove}>삭제</button>
            </div>
            {OpenModify &&
                <form style={{display: 'flex'}} onSubmit={memoModify}>
                    <textarea
                        style={{width: '100%', height: 500}}
                        onChange={handleClick}
                        value={MemoValue}
                        placeholder='메모를 작성하세요.'
                        required="required"
                    />
                    <button onClick={memoModify}>확인</button>
                </form>
            }
            <hr />
        </>
    )
}

export default Memo
