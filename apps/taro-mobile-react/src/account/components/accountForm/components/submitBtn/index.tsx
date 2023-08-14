import { Button } from 'antd-mobile'

export const SubmitBtn = ({btnText}) => {

  return (
    <Button
      block
      shape='rounded'
      size='large'
      type='submit'
      style={{
        '--background-color': '#000000',
        '--text-color': '#FFFFFF'
      }}
    >{btnText}</Button>
  )
}
