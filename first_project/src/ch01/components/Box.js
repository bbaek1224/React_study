function Box({ name, children, isShow }) {
    const result = false && 10;
    console.log(result);

    return <div>
        <h1>{name}</h1>
        {children}
        {isShow && <h3>안녕하세요</h3>}
    </div>
}

export default Box;