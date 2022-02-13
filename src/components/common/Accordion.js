import "./index.css";
import React, { Component } from "react";

class Accordion extends Component {
  static defaultProps = {
    onChange: () => {},
    statusIconsComponents: {
      opened: "▲",
      closed: "▼"
    },
    allowMultipleExpand: true
  };

  state = {
    activeIndexes: []
  };

  updateIndexes = (index, callback) => {
    const { allowMultipleExpand, onChange } = this.props;
    this.setState(prevState => {
      let activeIndexes;
      let isOpen = false;
      if (prevState.activeIndexes.includes(index)) {
        activeIndexes = allowMultipleExpand
          ? prevState.activeIndexes.filter(
              currentIndex => currentIndex !== index
            )
          : [];
      } else {
        isOpen = true;
        activeIndexes = allowMultipleExpand
          ? prevState.activeIndexes.concat(index)
          : [index];
      }
      callback(isOpen);
      onChange(activeIndexes);
      return { activeIndexes };
    });
  };

  render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      const isActive = this.state.activeIndexes.includes(index);
      return React.cloneElement(child, {
        isActive,
        statusIcon: this.props.statusIconsComponents[
          isActive ? "opened" : "closed"
        ],
        onSelect: onSelectCallback =>
          this.updateIndexes(index, onSelectCallback)
      });
    });
    return <div className="accordion">{children}</div>;
  }
}

class AccordionItem extends Component {
  static defaultProps = {
    onChange: () => {},
    isOpen: false
  };

  componentWillMount() {
    const { isOpen, onSelect, onChange } = this.props;
    if (isOpen) {
      onSelect(onChange);
    }
  }

  render() {
    const { isActive, statusIcon, onSelect, onChange } = this.props;
    const children = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        isActive,
        statusIcon,
        onSelect: () => {
          onSelect(onChange);
        }
      });
    });
    return <div className="accordion__item">{children}</div>;
  }
}

class AccordionHeader extends Component {
  render() {
    return (
      <div onClick={this.props.onSelect} className="accordion__header">
        {this.props.children} - {this.props.statusIcon}
      </div>
    );
  }
}

class AccordionPanel extends Component {
  render() {
    return this.props.isActive ? (
      <div className="accordion__panel">{this.props.children}</div>
    ) : null;
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Accordion
          onChange={console.log}
          statusIconsComponents={{
            opened: "😊",
            closed: "😞"
          }}
          allowMultipleExpand={true}
        >
          <AccordionItem
            isOpen
            onChange={isOpen => console.log("isOpen = ", isOpen)}
          >
            <AccordionHeader>Header 1</AccordionHeader>
            <AccordionPanel>Panel 1</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>Header 2</AccordionHeader>
            <AccordionPanel>Panel 2</AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>Header 3</AccordionHeader>
            <AccordionPanel>Panel 3</AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default App;