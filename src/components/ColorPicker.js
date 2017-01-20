import React from 'react';
import {Header} from './Header';
import {SetColorButtons} from './SetColorButtons';
import {RGBHex} from './RGBHex';
import {ColorSwatches} from './ColorSwatches';

export const ColorPicker = props => {
  let style = {
    main: {
      width: '80vw',
      height: 'auto'
    },
    box : {
      width: '75vw',
      display: 'block',
      margin: '0 auto'
    }
  }
  return (
    <div style={style.main}>
        <img src='assets/box.svg' style={style.box} />
        <Header
          onSwitchView={props.onSwitchView}
          swatches={props.swatches}
        />
        { (props.swatches)
            ? <ColorSwatches
                presets={props.presets}
                currentColor={props.currentColor}
                onSelectColor={props.onSelectColor}/>
            : <RGBHex
                onSelectColor={props.onSelectColor}
                onChangeValue={props.onChangeValue}
                currentColor={props.currentColor}
                colors={props.colors} />
        }
        <SetColorButtons onSetColor={props.onSetColor}/>
    </div>
  )
}
