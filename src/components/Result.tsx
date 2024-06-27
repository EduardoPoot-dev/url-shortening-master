import { useState } from "react"
import { Link } from "../types"
import { copyText } from "../utils"

type ResultProps = {
    link: Link
}

export default function Result({link} : ResultProps) {
    const [isCopied, setIsCopied] = useState(false)

    function handleCopy(link : Link['link']) {
        setIsCopied(true)
        copyText(link)
    }

    return (
        <div className="result">
            <div className="result__left">
                <span className="result__link">{link.long_url}</span>
            </div>

            <div className="result__right">
                <span className="result__ShortLink">{link.link}</span>
                <button 
                    onClick={() => handleCopy(link.link)}
                    className={`${isCopied ? 'result__btn--copied' : ''} result__btn`}
                >{isCopied ? 'Copied!' : 'Copy'}</button>
            </div>
        </div>
    )
}
