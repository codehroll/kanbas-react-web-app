// import Flex from "./Flex";
import Flex from "./Flex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import "./index.css";
import Positions from "./Positions";
import ReactIcons from "./ReactIcons";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Zindex from "./Zindex";
export default function Lab2() {
  return (
    <div id="wd-lab2" className="container">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        {/* <p style={{ backgroundColor: "blue", color: "white" }}> */}
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      {/* css-id-selectors */}
      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same
          name, e.g., P, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and
          feel
        </p>
      </div>
      {/* css-class-selectors */}
      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's
          CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
      </div>
      {/* css-document-structure */}
      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular places in
            the document
            <p className="wd-selector-3">
              This paragraph's red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific styles
              depending on the document structure
            </p>
          </div>
        </div>
      </div>

      {/* css-colors */}
      <div id="wd-css-colors">
        <h2>Colors</h2>
        <h3 className="wd-fg-color-blue">Foreground color</h3>
        <p className="wd-fg-color-red">
          The text in this paragraph is red but
          <span className="wd-fg-color-green">this text is green</span>
        </p>
      </div>

      {/* Styling the background color */}
      <div id="wd-css-background-colors">
        <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
        <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but
          <span className="wd-bg-color-green wd-fg-color-white">
            the background of this text is green and the foreground white
          </span>
        </p>
      </div>
      {/* Styling borders */}
      <div id="wd-css-borders">
        <h2>Borders</h2>
        <p className="wd-border-fat wd-border-red wd-border-solid">
          Solid fat red border
        </p>
        <p className="wd-border-thin wd-border-blue wd-border-dashed">
          Dashed thin blue border
        </p>
        <p className="wd-border-dotted wd-border-fat wd-border-yellow">
          Dotted fat yellow border
        </p>
      </div>

      {/* Styling margins and paddings */}
      <div id="wd-css-paddings">
        <h2>Padding</h2>
        <div
          className="wd-padded-top-left wd-border-fat 
      wd-border-red wd-border-solid 
      wd-bg-color-yellow"
        >
          Padded top left
        </div>
        <div
          className="wd-padded-bottom-right wd-border-fat 
      wd-border-blue wd-border-solid 
      wd-bg-color-yellow"
        >
          Padded bottom right
        </div>
        <div
          className="wd-padding-fat wd-border-fat 
      wd-border-yellow wd-border-solid 
      wd-bg-color-blue wd-fg-color-white"
        >
          Padded all around
        </div>
      </div>
      <div id="wd-css-margins">
        <h2>Margins</h2>
        <div
          className="wd-margin-bottom 
      wd-padded-top-left 
      wd-border-fat wd-border-red 
      wd-border-solid 
      wd-bg-color-yellow"
        >
          Margin bottom
        </div>
        <div
          className="wd-margin-right-left 
      wd-padded-bottom-right 
      wd-border-fat wd-border-blue 
      wd-border-solid 
      wd-bg-color-yellow"
        >
          Margin left right
        </div>
        <div
          className="wd-margin-all-around 
      wd-padding-fat wd-border-fat 
      wd-border-yellow 
      wd-border-solid 
      wd-bg-color-blue 
      wd-fg-color-white"
        >
          Margin all around
        </div>
      </div>

      {/* Styling corners */}
      <div id="wd-css-borders">
        <h3>Rounded corners</h3>
        <p
          className="wd-rounded-corners-top wd-border-thin 
     wd-border-blue wd-border-solid wd-padding-fat"
        >
          Rounded corners on the top
        </p>
        <p
          className="wd-rounded-corners-bottom 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
        >
          Rounded corners at the bottom
        </p>
        <p
          className="wd-rounded-corners-all-around 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
        >
          Rounded corners all around
        </p>
        <p
          className="wd-rounded-corners-inline 
     wd-border-thin wd-border-blue wd-border-solid 
     wd-padding-fat"
        >
          Different rounded corners
        </p>
      </div>

      {/* Styling dimensions */}
      <div id="wd-css-dimensions">
        <h2>Dimension</h2>
        <div>
          <div className="wd-dimension-portrait wd-bg-color-yellow">
            Portrait
          </div>
          <div
            className="wd-dimension-landscape wd-bg-color-blue
                    wd-fg-color-white"
          >
            Landscape
          </div>
          <div className="wd-dimension-square wd-bg-color-red">Square</div>
        </div>
      </div>

      <Positions />

      {/* Styling z-index */}
      <Zindex />

      {/* Floating Images and Content */}
      <Float />

      {/* Laying out content in a grid */}
      <GridLayout />
      <Flex />
      <ReactIcons />

      {/* 3.3.3 Laying out content with grids */}
      <h2>Bootstrap</h2>
      <div id="wd-bs-grid-system">
        <h2>Grid system</h2>
        <div className="row">
          <div className="col bg-danger text-white">
            <h3>Left half</h3>
          </div>
          <div className="col bg-primary text-white">
            <h3>Right half</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4 bg-warning">
            <h3>One thirds</h3>
          </div>
          <div className="col-8 bg-success text-white">
            <h3>Two thirds</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-2 bg-dark text-white">
            <h3>Sidebar</h3>
          </div>
          <div className="col-8 bg-secondary text-white">
            <h3>Main content</h3>
          </div>
          <div className="col-2 bg-info">
            <h3>Sidebar</h3>
          </div>
        </div>
      </div>

      {/* 3.3.4 Responsive Grids */}
      <div id="wd-bs-responsive-grids">
        <h2>Responsive grid system</h2>
        <div className="row">
          <div
            className="col-12 col-md-6 col-xl-3 
                    bg-warning"
          >
            <h3>Column A</h3>
          </div>
          <div
            className="col-12 col-md-6 col-xl-3 
                    bg-primary text-white"
          >
            <h3>Column B</h3>
          </div>
          <div
            className="col-12 col-md-6 col-xl-3 
                    bg-danger text-white"
          >
            <h3>Column C</h3>
          </div>
          <div
            className="col-12 col-md-6 col-xl-3 
                    bg-success text-white"
          >
            <h3>Column D</h3>
          </div>
        </div>
      </div>
      {/* wd-bs-responsive-dramatic */}
      <div id="wd-bs-responsive-dramatic">
        <h2>Responsive grid system</h2>
        <div className="row">
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-warning"
          >
            <h4>1</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-primary text-white"
          >
            <h4>2</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-danger text-white"
          >
            <h4>3</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-success text-white"
          >
            <h4>4</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-warning"
          >
            <h4>5</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1
                    bg-primary text-white"
          >
            <h4>6</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-danger text-white"
          >
            <h4>7</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-success text-white"
          >
            <h4>8</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-warning"
          >
            <h4>9</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-primary text-white"
          >
            <h4>10</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-danger text-white"
          >
            <h4>11</h4>
          </div>
          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-1 
                    bg-success text-white"
          >
            <h4>12</h4>
          </div>
        </div>
      </div>

      {/* 3.3.5 Hiding and showing responsive content */}
      <ScreenSizeLabel />

      {/* 3.3.6 Styling tables */}
      <div id="wd-css-styling-tables">
        <h2>Tables</h2>
        <table className="table">
          <thead>
            <tr className="table-dark">
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-warning">
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr className="table-danger">
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr className="table-primary">
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="table-success">
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* 3.3.7 Making tables responsive */}
      <div id="wd-css-responsive-tables">
        <h2>Responsive tables</h2>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
                <th>Very</th>
                <th>long</th>
                <th>set</th>
                <th>of</th>
                <th>columns</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
                <td>Very</td>
                <td>long</td>
                <td>set</td>
                <td>of</td>
                <td>columns</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 3.3.8 Styling Lists */}
      <div id="wd-css-styling-lists">
        <h2>Favorite movies</h2>
        <ul className="list-group">
          <li className="list-group-item active">Aliens</li>
          <li className="list-group-item">Terminator</li>
          <li className="list-group-item">Blade Runner</li>
          <li className="list-group-item">Lord of the Ring</li>
          <li className="list-group-item disabled">Star Wars</li>
        </ul>
      </div>

      {/* 3.3.9 Styling a List of Hyperlinks */}
      <div id="wd-css-hyperlink-list">
        <h3>Favorite books</h3>
        <div className="list-group">
          <a
            href="https://en.wikipedia.org/wiki/Dune_(novel)"
            className="list-group-item list-group-item-action active"
          >
            Dune
          </a>
          <a
            href="https://en.wikipedia.org/wiki/The_Lord_of_the_Rings"
            className="list-group-item list-group-item-action"
          >
            Lord of the Rings
          </a>
          <a
            href="https://en.wikipedia.org/wiki/The_Forever_War"
            className="list-group-item list-group-item-action"
          >
            The Forever War
          </a>
          <a
            href="https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(novel)"
            className="list-group-item list-group-item-action"
          >
            2001 A Space Odyssey
          </a>
          <a
            href="https://en.wikipedia.org/wiki/Ender%27s_Game"
            className="list-group-item list-group-item-action disabled"
          >
            Ender's Game
          </a>
        </div>
      </div>

      {/* 3.3.10 Basic Form Styling */}
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <div className="mb-3">
          <label htmlFor="input1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="input1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="textarea1" className="form-label">
            Example textarea
          </label>
          <textarea className="form-control" id="textarea1" rows={3}></textarea>
        </div>
      </div>

      {/* 3.3.11 Styling Dropdowns */}
      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <select className="form-select">
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      {/* 3.3.12 Styling Switches */}
      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="switch1" />
          <label className="form-check-label" htmlFor="switch1">
            Default switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switch2"
            checked
          />
          <label className="form-check-label" htmlFor="switch2">
            Checked switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switch3"
            disabled
          />
          <label className="form-check-label" htmlFor="switch3">
            Disabled switch checkbox input
          </label>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switch4"
            checked
            disabled
          />
          <label className="form-check-label" htmlFor="switch4">
            Disabled checked switch checkbox input
          </label>
        </div>
      </div>

      {/* 3.3.13 Styling Range and Sliders */}
      <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <label htmlFor="range1" className="form-label">
          Example range
        </label>
        <input
          type="range"
          className="form-range"
          min="0"
          max="5"
          step="0.5"
          id="range1"
        />
      </div>
    </div>
  );
}
