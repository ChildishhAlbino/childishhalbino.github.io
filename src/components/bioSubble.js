import React from 'react'
import Subble from '../components/subble'
import style from '../components/subble.module.scss'
import { FaCaretDown, FaCaretUp } from "react-icons/fa/"
import { IconContext } from "react-icons";
class BioSubble extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: props.toggle,
            title: props.title,
            children: props.children,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        if (this.state.toggle === true) {
            return (
                <div>
                    <Subble styling={[style.bioSubbleOpen, style.shadow]}>
                        <div onClick={() => { this.handleClick() }} className={[style.bioSubbleHeader, style.bioSubbleOpen].join(' ')}>
                            <h2>{this.state.title}</h2>
                            <IconContext.Provider
                                value={{ className: style.reactIcons, size: 35 }}>
                                <FaCaretUp />
                            </IconContext.Provider>
                        </div>
                        <Subble styling={[style.Four, style.shadow]}>
                            {this.state.children}
                        </Subble>
                    </Subble>
                </div>
            )
        } else if (this.state.toggle === false) {
            return (
                <div onClick={() => { this.handleClick() }}>
                    <Subble styling={[style.Three, style.shadow]}>
                        <div className = {style.bioSubbleHeader}>
                            <h2>{this.state.title}</h2>
                            <IconContext.Provider
                                value={{ className: style.reactIcons, size: 35 }}>
                                <FaCaretDown />
                            </IconContext.Provider>
                        </div>
                    </Subble>
                </div>
            )
        }
    }

    handleClick() {
        const bool = this.toggleBoolean(this.state.toggle);
        this.setState({ toggle: bool })
    }

    toggleBoolean(bool) {
        return !bool;
    }
}

export default BioSubble;