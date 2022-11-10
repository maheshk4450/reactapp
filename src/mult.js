const Multiplication=(props)=>{

    return(
        <>
        <h1>{props.A*props.B}</h1>
        <h1>{(props.A*props.B%2)}</h1>
        </>
    )
}
export default Multiplication;