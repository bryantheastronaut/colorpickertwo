import React, {Component} from 'react';
import PRESETS from '../../PRESETCOLORS';
import {ColorPicker} from '../components/ColorPicker';

class ColorContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
      swatches: false,
      primaryColor: '',
      secondaryColor: '',
      colors: {
        r: 200,
        g: 200,
        b: 200,
        a: 100,
        hex: ''
      }
    };
    this.openColorPicker = this.openColorPicker.bind(this);
    this.selectColor = this.selectColor.bind(this);
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
  selectColor(color) {
    // add Hex Validation here too
    console.log(color)
    if (color.hex) {
      this.setState({colors: {hex: color.hex}});
    } else {
      // set the RGBA value accordingly. Needs to be implemented when the next screen comes in.
    }
  }
  render() {
    let {isOpen} = this.state;
    let style = {
      button: {
        fontSize: '1.25rem',
        color: this.state.secondaryColor || '#fafafa',
        backgroundColor: this.state.primaryColor || '#7EDA84',
        position: 'absolute',
        bottom: '100px',
        borderRadius: '10px',
        textAlign: 'right',
        left: '100px',
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
                swatches={this.state.swatches}
                presets={PRESETS}
              />
            : null }
        <button style={style.button}onClick={this.openColorPicker}>{ (isOpen) ? 'Close' : 'Open' } color picker</button>
      </div>
    )
  }
}

export default ColorContainer;
