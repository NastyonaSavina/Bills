import { useDispatch } from "react-redux";
import { setFilter } from "redux/filter/filter.reducer";



const CheckCompany = ({currentFilter}) => {
  const dispatch = useDispatch();


  let forFilter = [...currentFilter];


  const handleChange = event => {

    if (event.target.checked === true) {
      

      forFilter.push(event.target.value);

      dispatch(
        setFilter(forFilter.filter(companyName => companyName !== 'All'))
      );
    } else {
      dispatch(
        setFilter(
          forFilter.filter(companyName => companyName !== event.target.value)
        )
      );
 

    }
  };



  return (
    <>
      <div className="d-flex align-content-center px-4 justify-content-between mb-3">
        <div className="d-flex  align-items-center   grid gap-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Company1"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Company1
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Company2"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Company2
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Company3"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Company3
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Company4"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Company4
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value="Company5"
              id="flexCheckDefault"
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Company5
            </label>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default CheckCompany;
