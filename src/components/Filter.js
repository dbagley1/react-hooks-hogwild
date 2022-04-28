function Filter(props) {
  const { showGreased, setShowGreased, sortBy, setSortBy } = props;

  return (
    <div>
      <label>
        <input type="checkbox"
          checked={showGreased}
          onChange={() => setShowGreased(!showGreased)}
        />
        Show Greased
      </label>
      <label>
        Sort By:
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
          <option value="specialty">Specialty</option>
        </select>
      </label>
    </div>
  );
}

export default Filter;;;
