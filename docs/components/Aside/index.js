import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hljs from 'highlight.js';
import './index.scss';

/**
 * @param {Object} props
 * @param {string} props.pageName
 * @param {Function} props.onClick
 * @param {string} props.path
 * @param {React.Element} props.children
 * */
const WLink = (props) => {
  return (
    <div onClick={props.onClick}>
      <Link className={props.pageName === props.path ? 'active' : ''} to={`/${props.path}`}>
        {props.children}
      </Link>
    </div>
  );
};


const Aside = (props) => {
  const [pageName, setPageName] = useState(getHashName());

  useEffect(() => {
    props.onChangeRouter(getHashName());
  }, [])

  const wLinkConfig = {
    pageName,
    onClick: () => {
      // 只是为了让本地的 pageName 和路由的 hash 同步
      setPageName(getHashName());
      props.onChangeRouter(getHashName());
      setTimeout(() => {
        document.querySelectorAll("pre code").forEach(block => {
          hljs.highlightBlock(block);
        });

      })
    },
  };

  function getHashName() {
    return window.location.hash.split('/')[1];
  }

  const lists = [
    { path: '', name: 'Introduction 介绍' },
    { path: 'button', name: 'Button 按钮' },
    { path: 'transition', name: 'transition 过渡' },
    { path: 'popup', name: 'popup 弹出层' }
  ];

  return (
    <div className={"w-aside"}>
      <ul>
        {
          lists.map(({ path, name }) => (
            <li key={path}>
              <WLink path={path} {...wLinkConfig}>{name}</WLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
};

export default Aside;