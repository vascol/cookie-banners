import { FullWidth } from "./components/FullWidth/FullWidth"
import { FixedWidth1000 } from "./components/FixedWidth1000/FixedWidth1000"
import { FixedWidth840 } from "./components/FixedWidth840/FixedWidth840"
import { FixedWidth640 } from "./components/FixedWidth640/FixedWidth640"
import { FixedWidth560 } from "./components/FixedWidth560/FixedWidth560"
import { FixedWidth480 } from "./components/FixedWidth480/FixedWidth480"
import { FixedWidth360 } from "./components/FixedWidth360/FixedWidth360"
import { FixedWidth320 } from "./components/FixedWidth320/FixedWidth320"
import { FixedWidth240 } from "./components/FixedWidth240/FixedWidth240"
import { FixedWidth190 } from "./components/FixedWidth190/FixedWidth190"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="main_title">Cookie Banners</h1>
        <h5 className="main_subtitle">
          Made by{" "}
          <span>
            <i>Vascol</i>
          </span>
        </h5>
        <FullWidth />
        <FixedWidth1000 />
        <FixedWidth840 />
        <FixedWidth640 />
        <FixedWidth560 />
        <FixedWidth480 />
        <FixedWidth360 />
        <FixedWidth320 />
        <FixedWidth240 />
        <FixedWidth190 />
      </div>
    </div>
  )
}

export default App
