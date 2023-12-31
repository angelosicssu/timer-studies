import React from "react";
import style from './Button.module.scss'

class Button extends React.Component < {texto: string, type?: "button" | "submit" | "reset" | undefined} > { //CLASS COMPONENT
    render(){
        const { type = "button"} = this.props;
        return(    
            <button className={style.botao}>
                {this.props.texto}
            </button>
        )
    }
}

export default Button;