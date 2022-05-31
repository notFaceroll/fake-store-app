import React from "react";
import { GithubLogo } from "phosphor-react";

export const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://github.com/notFaceroll/fake-store-app"
        target="_blank"
        rel="noreferrer"
      >
        Github <GithubLogo size={20} />
      </a>
    </footer>
  );
};
