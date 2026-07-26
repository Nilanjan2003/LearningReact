interface Props {
    result: { nm: string, dp: string }[]
}

const Display = (props: Props) => {
    return (
        <>
            <ol>
                {
                    props.result.map((v, i) => {
                        return <li key={i}>Name : {v.nm} || Department : {v.dp}</li>
                    })
                }
            </ol>
        </>
    )
}

export default Display;