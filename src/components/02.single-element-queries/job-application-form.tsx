export const JobApplicationForm = () => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <div data-testid="custom-element">Custom HTML Element testId</div>
      <img src="https://via.placeholder.com/150" alt="This is the alt text" />
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Fullname"
            value="Joey"
            onChange={() => {}}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea id="bio" name="bio" defaultValue="Default value text" />
        </div>
        <div>
          <label htmlFor="job-location">Job location</label>
          <select id="job-location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="ES">Spain</option>
            <option value="NL">Netherlands</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" />I accept the terms and
            conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};
