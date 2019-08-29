import React from 'react';
import MarkdownIt from 'markdown-it'
import './index.scss'

const md = new MarkdownIt();

/**
 * 
 * @param {Object} props 
 * @param {string} props.content
 */

const Pane = (props) => {
  const content = md.render(props.content);
  return (
    <div className={"paneWrapper"}>
      <div dangerouslySetInnerHTML={{__html:props.content}} />    
    </div>
  );
}

export default Pane;