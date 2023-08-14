import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { Text, View, MovableArea, MovableView } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
// import {
//   AtSwipeActionProps,
//   AtSwipeActionState,
//   SwipeActionOption
// } from '../../../types/swipe-action'
import { uuid } from './uuid'
// import AtSwipeActionOptions from './options/index'
import './index.scss';

export default class AtSwipeAction extends React.Component<
  any,
  any
  > {
  public static defaultProps: any
  public static propTypes: InferProps<any>

  private maxOffsetSize: number
  private moveX: number
  private eleWidth: number
  private moveRatio: number

  public constructor(props: any) {
    super(props)
    const { isOpened, maxDistance, areaWidth, moveRatio } = props
    this.maxOffsetSize = maxDistance
    this.state = {
      componentId: uuid(),
      // eslint-disable-next-line no-extra-boolean-cast
      offsetSize: !!isOpened ? -this.maxOffsetSize : 0,
      _isOpened: !!isOpened,
      needAnimation: false
    }
    this.moveX = this.state.offsetSize
    this.eleWidth = areaWidth
    this.moveRatio = moveRatio || 0.5
  }

  public UNSAFE_componentWillReceiveProps(nextProps: any): void {
    const { isOpened } = nextProps
    const { _isOpened } = this.state

    if (isOpened !== _isOpened) {
      this.moveX = isOpened ? 0 : this.maxOffsetSize
      this._reset(!!isOpened) // TODO: Check behavior
    }
  }

  private _reset(isOpened: boolean): void {
    if (isOpened) {
      if (process.env.TARO_ENV === 'jd') {
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize + 0.01
        })
      } else {
        this.setState({
          _isOpened: true,
          offsetSize: -this.maxOffsetSize
        })
      }
    } else {
      this.setState(
        {
          offsetSize: this.moveX
        },
        () => {
          this.setState({
            offsetSize: 0,
            _isOpened: false
          })
        }
      )
    }
  }

  private handleOpened = (event: any): void => {
    const { onOpened } = this.props
    if (typeof onOpened === 'function') {
      onOpened(event)
    }
  }

  private handleClosed = (event: any): void => {
    const { onClosed } = this.props
    if (typeof onClosed === 'function') {
      onClosed(event)
    }
  }

  private handleClick = (
    item: any,
    index: number,
    event: CommonEvent
  ): void => {
    const { onClick, autoClose } = this.props

    if (typeof onClick === 'function') {
      onClick(item, index, event)
    }
    if (autoClose) {
      this._reset(false) // TODO: Check behavior
      this.handleClosed(event)
    }
  }

  onTouchEnd = e => {
    if (this.moveX === -this.maxOffsetSize) {
      this._reset(true)
      this.handleOpened(e)
      return
    }
    if (this.moveX === 0) {
      this._reset(false)
      this.handleClosed(e)
      return
    }
    if (this.state._isOpened && this.moveX < 0) {
      this._reset(false)
      this.handleClosed(e)
      return
    }
    if (Math.abs(this.moveX) < this.maxOffsetSize * this.moveRatio) {
      this._reset(false)
      this.handleClosed(e)
    } else {
      this._reset(true)
      this.handleOpened(e)
    }
  }

  onChange = e => {
    this.moveX = e.detail.x
  }

  public render(): JSX.Element {
    const { componentId, offsetSize } = this.state
    const { options } = this.props
    const rootClass = classNames('at-swipe-action', this.props.className)

    return (
      <View
        id={`swipeAction-${componentId}`}
        className={rootClass}
        style={{
          width: `${this.eleWidth}px`
        }}
      >
        <MovableArea
          className='at-swipe-action__area'
          style={{
            width: `${this.eleWidth + this.maxOffsetSize}px`,
            transform: `translate(-${this.maxOffsetSize}px, 0)`
          }}
        >
          <MovableView
            className='at-swipe-action__content'
            direction='horizontal'
            damping={50}
            x={offsetSize}
            onTouchEnd={this.onTouchEnd}
            onChange={this.onChange}
            style={{
              width: `${this.eleWidth}px`,
              left: `${this.maxOffsetSize}px`
            }}
          >
            {this.props.children}
            <View
              style={{
                transform: `translate(${this.maxOffsetSize}px, 0)`,
                opacity: 1
              }}
            >
              {options.map((item, key) => (
                <View
                  key={`${item.text}-${key}`}
                  style={item.style}
                  onClick={(e): void => this.handleClick(item, key, e)}
                  className={classNames(
                    'at-swipe-action__option',
                    item.className
                  )}
                >
                  <Text className='option__text'>{item.text}</Text>
                </View>
              ))}
            </View>
          </MovableView>
        </MovableArea>
      </View>
    )
  }
}

AtSwipeAction.defaultProps = {
  options: [],
  isOpened: false,
  disabled: false,
  autoClose: false,
  maxDistance: 0,
  areaWidth: 0
}

AtSwipeAction.propTypes = {
  isOpened: PropTypes.bool,
  disabled: PropTypes.bool,
  autoClose: PropTypes.bool,
  onClick: PropTypes.func,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
}
