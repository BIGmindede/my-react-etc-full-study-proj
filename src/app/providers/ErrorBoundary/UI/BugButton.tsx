import { useEffect, useState } from 'react'
import { Button } from 'shared/UI/Button/Button'

export const BugButton = () => {
    const [onError, setOnError] = useState(false)

    const handleErrorSwitch = () => {
        setOnError(true)
    }

    useEffect(() => {
        if (onError) throw new Error()
    }, [onError])

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={ handleErrorSwitch }>
            ThrowError
        </Button>
    )
}
