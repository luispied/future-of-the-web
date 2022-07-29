import { useState } from "react";

import Terminal, { TerminalInput, TerminalOutput } from "react-terminal-ui";

import { theory1, lowCodeNoCode } from "../Theory1";
import { theory2 } from "../Theory2";
import { theory3, web3 } from "../Theory3";
import { theory4 } from "../Theory4";
import { theory5 } from "../Theory5";

import "./TerminalController.style.css";

const welcome = [
  <TerminalOutput>
    <h1>Welcome to the Web of the Future Meet!&#128075;</h1>
  </TerminalOutput>,
];
const initialSetup = [
  <TerminalOutput>
    In the next hour we are going to show the following 5 theories about of the
    future of the web:
  </TerminalOutput>,
  <br />,
  <TerminalOutput>
    1: Neither web design nor web development will exist in 10 years.
  </TerminalOutput>,
  <TerminalOutput>2: The future of everything is AI.</TerminalOutput>,
  <TerminalOutput>3: The future of web development is AR/VR.</TerminalOutput>,
  <TerminalOutput>
    4: Web 3.0 and blockchain will redefine the web as we know it.
  </TerminalOutput>,
  <TerminalOutput>5: It’s going to stay somewhat the same.</TerminalOutput>,
  <br />,
  <TerminalOutput>
    Choose a number from 1 to 5 to continue or type exit to terminate the
    meeting.
  </TerminalOutput>,
];

export const TerminalController = (props = {}) => {
  const [lineData, setLineData] = useState(welcome);

  function onInput(input: string) {
    let ld = [...lineData];
    ld.push(<TerminalInput>{input}</TerminalInput>);
    const command = input.toLocaleLowerCase().trim();
    switch (command) {
      case "1":
        ld = theory1;
        break;
      case "2":
        ld = theory2;
        break;
      case "3":
        ld = theory3;
        break;
      case "4":
        ld = theory4;
        break;
      case "5":
        ld = theory5;
        break;
      case "web3":
        ld = web3;
        break;
      case "web3link":
        window.open(
          "https://medium.com/dare-to-be-better/web-3-0-explained-8f4032ee39d4",
          "_blank"
        );
        break;
      case "lowcodenocode":
        ld = lowCodeNoCode;
        break;
      case "clear":
        ld = [];
        break;
      case "ls":
        ld = initialSetup;
        break;
      default:
        ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>);
        break;
    }
    setLineData(ld);
  }

  return (
    <Terminal name="Globant Terminal UI" onInput={onInput}>
      {lineData}
    </Terminal>
  );
};
