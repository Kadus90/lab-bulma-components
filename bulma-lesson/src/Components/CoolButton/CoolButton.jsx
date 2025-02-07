import React, { Component } from 'react';

class CoolButton extends Component {
    styles = {
        isActive: 'is-active',
        isBlack: 'is-black',
        isCentered: 'is-centered',
        isDanger: 'is-danger',
        isDark: 'is-dark',
        isFocused: 'is-focused',
        isGrouped: 'is-grouped',
        isHovered: 'is-hovered',
        isInfo: 'is-info',
        isInverted: 'is-inverted',
        isLarge: 'is-large',
        isLight: 'is-light',
        isLink: 'is-link',
        isLoading: 'is-loading',
        isMedium: 'is-medium',
        isOutlined: 'is-outlined',
        isPrimary: 'is-primary',
        isRight: 'is-right',
        isRounded: 'is-rounded',
        isSelected: 'is-selected',
        isSmall: 'is-small',
        isStatic: 'is-static',
        isSuccess: 'is-success',
        isText: 'is-text',
        isWarning: 'is-warning',
        isWhite: 'is-white',
    };

    collectStyles = () => {
        let styling = 'button ';
        if (this.props.className) {
            styling += this.props.className + ' ';
        }
        for (let prop in this.props) {
            if (this.styles[prop]) {
                styling += this.styles[prop] + ' ';
            }
        }
        return styling;
    };

    render() {
        let style = this.collectStyles();
        return <button className={style}>{this.props.children}</button>;
    }
}

export default CoolButton;
