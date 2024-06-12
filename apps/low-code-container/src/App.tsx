import ReactDOM from 'react-dom/client';
import {DynamicForm} from '@brushes/form';
// import Root from './view';
const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

const Root = () => {

  return (
    <DynamicForm initialValues={{upload: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        }
      ]}} onSubmit={() => {}} fields={
      [
        {
          type: 'upload',
          name: 'upload',
          extraProps: {
            text: 'upload',
            listType: "picture-card"
          }
        }
      ]
    } />
  )
}

root.render(<Root />);
