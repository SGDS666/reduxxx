const ValueLable = (props) => {
    const {revese} = props
    return (
        <>
            <div className={revese?'sxmb revese':'sxmb'}>
                {props.children}
            </div>
        </>
    )
}
export default ValueLable