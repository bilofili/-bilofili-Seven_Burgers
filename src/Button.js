function ButtonF({ propsButtenF,  propsButtonById }) {

    return(
        <div className="buttonF">
            <button className="btnF" onClick={() => propsButtenF("Burgers")}>Burgers</button>
            <button className="btnF" onClick={() => propsButtenF("Drinks")}>Drinks</button>
            <button className="btnF" onClick={() => propsButtenF("Other")}>Other</button>
            <button className="btnF" onClick={() => propsButtonById("all")}>All</button>
        </div>
    )
}

export default ButtonF;