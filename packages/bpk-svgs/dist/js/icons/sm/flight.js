import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" {...this.props}><path d="M15.6 4.1l-3.1 3.1 1.6 6.8c.1.3 0 .7-.3.9l-.5.5c-.2.2-.7.2-.8-.1l-2.4-5.6-2.9 2.9.6 1.7c.1.2 0 .4-.1.5L6.5 16l-1.3-3.2L2 11.5l1.2-1.1c.1-.1.3-.2.5-.1l1.7.6L8.3 8 2.7 5.4c-.4-.1-.4-.5-.2-.8l.5-.5c.2-.2.6-.3.9-.3l6.8 1.6 3.1-3.1c.5-.5 1.3-.5 1.8 0 .5.6.5 1.4 0 1.8z" /></svg>;
  }

}