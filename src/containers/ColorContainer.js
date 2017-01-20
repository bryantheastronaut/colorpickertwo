import React, {Component} from 'react';
import PRESETS from '../../PRESETCOLORS';
import {validateHex} from '../functions';
import {ColorPicker} from '../components/ColorPicker';

class ColorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      swatches: true,
      primaryColor: '',
      secondaryColor: '',
      colors: {
        r: 233,
        g: 95,
        b: 95,
        a: 100,
        hex: '#E95F5F'
      }
    };
    this.openColorPicker = this.openColorPicker.bind(this);
    this.selectColor = this.selectColor.bind(this);
    this.setColor = this.setColor.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.switchView = this.switchView.bind(this);
  }
  openColorPicker() {
    this.setState({isOpen: !this.state.isOpen});
  }
  switchView(id) {
    (id === 'swatches')
      ? this.setState({swatches: true})
      : this.setState({swatches: false});
  }
  selectColor(color, id) {
    if (color.hex && validateHex(color.hex)) {
      this.setState({colors: {hex: color.hex}});
    } else {
      let newState = {...this.state};
      newState[id] = color.rgba;
      this.setState(newState);
    }
  }
  changeValue(e) {
    e.preventDefault();
    let id = e.target.name;
    let val = e.target.value;
    let newColorState = {...this.state.colors};
    newColorState[id] = val;
    (id === 'hex') ? null : newColorState.hex = '';
    console.log(newColorState)
    this.setState({colors: newColorState});
  }
  setColor(id) {
    let {r, g, b, a, hex} = this.state.colors;
    let newState = {...this.state};
    (hex) ? newState[id] = hex : newState[id] = `rgba(${r || 0}, ${g || 0}, ${b || 0}, ${(a / 100) || 1})`;
    console.log(newState);
    this.setState(newState);
  }
  render() {
    let {isOpen} = this.state;
    let {r, g, b, a, hex} = this.state.colors;
    let currentColor = (hex) ? hex : `rgba(${r || 0}, ${g || 0}, ${b || 0}, ${(a / 100) || 1})`;
    let style = {
      button: {
        fontSize: '1.25rem',
        color: this.state.secondaryColor || '#fafafa',
        backgroundColor: this.state.primaryColor || '#7EDA84',
        position: 'fixed',
        bottom: '80px',
        borderRadius: '10px',
        textAlign: 'right',
        left: '130px',
        height: '50px',
        width: '200px',
      }
    }
    return (
      // oops I know I shouldn't mix business logic with presentation but for this
      // little example I think we will be okay.
      <div>
        { (isOpen)
            ? <ColorPicker
                onSwitchView={this.switchView}
                onSelectColor={this.selectColor}
                onChangeValue={this.changeValue}
                onSetColor={this.setColor}
                swatches={this.state.swatches}
                currentColor={currentColor}
                colors={this.state.colors}
                presets={PRESETS}
              />
            : null }
        <button style={style.button}onClick={this.openColorPicker}>{ (isOpen) ? 'Close' : 'Open' } color picker</button>
      </div>
    )
  }
}

export default ColorContainer;
