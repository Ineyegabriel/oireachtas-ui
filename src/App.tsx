import BillTable from '@components/BillTable/BillTable';
import './App.css';
import FilterSelect from '@components/FilterSelect/FilterSelect';

export default function App() {
  return (
    <>
      <FilterSelect />
      <BillTable />
    </>
  );
}
