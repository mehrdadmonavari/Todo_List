import Select from "react-select/dist/declarations/src/Select";

const App = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return <div className="container">
    <button className="btn btn-danger">heeelo</button>
    <Select options={options} />
  </div>;
};

export default App;
