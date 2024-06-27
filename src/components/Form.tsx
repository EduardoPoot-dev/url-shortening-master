import { useState } from "react"
import { DraftLink } from "../types"
import { useShorterStore } from "../store"


export default function Form() {
    const [data, setData] = useState<DraftLink>({
        long_url: ''
    })

    const error = useShorterStore(state => state.error)
    const newLink = useShorterStore(state => state.newLink)
    const newError = useShorterStore(state => state.newError)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setData({
            long_url: e.target.value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (Object.values(data).includes('')) {
            newError('Please add a link')
            return
        }

        setData({
            long_url: ''
        })
        newError('')
        newLink(data)
    }

    return (
        <div className="main__form">
            <img className="form__bgMobile" src="/bg-shorten-mobile.svg" alt="bg-shorten" />
            <img className="form__bgDesktop" src="/bg-shorten-desktop.svg" alt="bg-shorten" />

            <form className="form__form" onSubmit={handleSubmit}>
                <div className="form__field">
                    <input
                        type="text"
                        className={`${error && 'form__input--error'} : form__input`}
                        placeholder="Shorten a link here..."
                        onChange={handleChange}
                        value={data.long_url}
                    />

                </div>
                <input className="form__submit" type="submit" value="Shorten It!" />
            </form>

            {error && (
                <span className="form__error">{error}</span>
            )}

        </div>

    )
}
