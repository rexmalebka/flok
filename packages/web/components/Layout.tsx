import Head from "next/head";
import React from "react";
import "../styles/styles.scss";

const theme = {
  red: 'hsl(348, 86%, 61%)',
  bodyBackgroundColor: '#101010',
  bodyColor: '#bbbbbb',
  strongColor: '#cccccc',
}

export default ({ children }: { children: any }) => (
  <div>
    <Head>
      <title>flok</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <style jsx global>{`
      html {
        background-color: ${theme.bodyBackgroundColor};
        overflow: hidden;
      }

      body {
        overflow: hidden;
      }

      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background: rgba(90, 90, 90, 0.4);
      }

      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.2);
      }

      .title {
        color: ${theme.strongColor};
      }

      .subtitle {
        color: ${theme.bodyColor};
      }

      .columns {
        margin: 0;
        padding: 0;
        cursor: text;
      }
      .column {
        margin: 0;
        padding: 0;
      }

      .editor {
        .CodeMirror {
          // Transparent background
          background-color: rgba(0, 0, 0, 0) !important;
          height: 100vh;
          font-family: Monaco, monospace;
          font-size: 14px;

          .CodeMirror-line > span {
            border-radius: 4px;
            padding: 1px;
            background-color: rgba(0, 0, 0, 0.6);
          }

          .CodeMirror-line .flash-selection {
            background-color: #ffff77cc;
            color: #000;
          }
        }

        &.is-half-height .CodeMirror {
          height: 50vh;
        }
      }

      .remote-caret {
        position: absolute;
        border-left: black;
        border-left-style: solid;
        border-left-width: 2px;
        height: 1.1em;
      }
      .remote-caret > div {
        position: relative;
        top: 1.5em;
        left: -2px;
        font-size: 14px;
        background-color: rgb(250, 129, 0);
        font-family: Monaco, monospace;
        font-style: normal;
        font-weight: normal;
        line-height: normal;
        user-select: none;
        color: white;
        padding-left: 2px;
        padding-right: 2px;
        z-index: 3;
      }

      .status {
        position: absolute;
        bottom: 0;
        right: 0;
        background: transparent;
        text-align: right;
        color: #fefefe;
        z-index: 1000;
        font-family: monospace;
        font-weight: bold;
      }

      .users-list {
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        font-size: 0.9em;
        text-align: right;
        color: #fefefe;
        z-index: 1000;
        font-family: monospace;
        font-style: italic;

        ul {
          list-style-type: none;
          margin: 0;
        }
      }

      .evaluate {
        display: none;
      }

      @media only screen and (max-width: 600px) {
        html {
          overflow: scroll;
        }

        .evaluate {
          float: right;
          display: block;

          a {
            font-size: 2em;
            margin: 0 0.125em;
            color: #888;
          }
          a:hover {
            color: #fefefe;
          }
        }
      }

      .target-messages-pane {
        position: absolute;
        left: 0;
        background: #00000090;
        color: #888;
        z-index: 1000;
        font-family: monospace;
        font-size: 0.8em;
        height: 20em;
        width: 100%;

        .tabs {
          margin-bottom: 0.25em;

          li.is-active a {
            color: #4b8ffd;
            border-bottom-color: #4b8ffd;
          }
          a {
            color: #888;
            border-bottom-color: #00000000;
            padding: 0.1em 0.25em;
          }
          a:hover {
            color: #fefefe;
            border-bottom-color: #00000000;
          }
          ul {
            border-bottom-color: #00000000;
          }
        }

        .scrollable-content {
          height: 100%;
          overflow: auto;
        }

        &.top {
          top: 0;
        }
        &.bottom {
          bottom: 0;
        }
        &.maximized {
          height: 100%;
        }

        .button-group {
          float: right;

          a {
            font-size: 16px;
            margin: 0 0.125em;
            color: #888;
          }

          a:hover {
            color: #fefefe;
          }

          margin-right: 0.125em;
        }

        ol {
          list-style: none;
          padding: 0;

          li {
            pre {
              padding: 0;
              background-color: transparent;
              color: ${theme.bodyColor};
              white-space: pre-wrap; /* css-3 */
              white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
              white-space: -pre-wrap; /* Opera 4-6 */
              white-space: -o-pre-wrap; /* Opera 7 */
              word-wrap: break-word; /* Internet Explorer 5.5+ */
            }
            pre.error {
              color: ${theme.red};
            }
          }
        }
      }

      .desc {
        color: #888;
        background-color: rgba(0, 0, 0, 0.6);
        border-radius: 4px;
        font-family: Monaco, monospace;
        font-size: 13px;
        margin-left: 4px;
        padding: 3px 5px;
      }

      .audio{
        position: fixed;
        top: 0;
        z-index: 100;
        right: 0;
        canvas {
          margin: 0.3em;
        }
        svg{
          margin: 0.3em;
          cursor: pointer;
        }
      }
    `}
    </style>
  </div>
);
