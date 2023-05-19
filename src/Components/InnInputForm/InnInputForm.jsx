import React, { useState } from "react"
export const InnInputForm = (props) => {
    const [checked, setChecked] = useState(true);
    const [inn, setInn] = useState('');

    const showInfo = () => {
        props.showInfo(inn, checked)
    }

    return (
        <div>
            <div>
                <label>
                    ИНН:
                    <textarea name="postContent" rows={10} cols={40} value={inn}  onChange={e => setInn(e.target.value)}/>
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox"
                        defaultChecked={checked}
                        onChange={() => setChecked(!checked)}
                    />
                    Только информация
                </label>
            </div>
            <div>
                <button onClick={showInfo}>Проверить</button>
            </div>
        </div>
    )
}