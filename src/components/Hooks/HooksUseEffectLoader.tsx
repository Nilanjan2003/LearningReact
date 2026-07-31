import { useState } from "react"
import HooksUseEffect from "./HooksUseEffect"


const HooksUseEffectLoader = () => {
    const [load, setLoad] = useState<Boolean>(false)

    return (
        <>
            <input type="button" value={load ? 'HIDE' : 'SHOW'} onClick={() => { setLoad(!load) }} />
            {
                (load) ? <HooksUseEffect /> : null
            }
        </>
    )
}

export default HooksUseEffectLoader;