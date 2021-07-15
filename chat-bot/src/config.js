import React from 'react';
import { createChatBotMessage } from 'react-chatbot-kit'

import LearningOptions from './Components/LearningOptions/LearningOptions';
import LinkList from "./Components/LinkList/LinkList";

const config = {
    botName: "LearningBot",
    initialMessages: [
      createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
        widget: "learningOptions",
      }),
    ],
    customStyles: {
      botMessageBox: {
        backgroundColor: "#376B7E",
      },
      chatButton: {
        backgroundColor: "#376B7E",
      },
    },
    widgets: [
      {
        widgetName: "learningOptions",
        widgetFunc: (props) => <LearningOptions {...props} />,
        },
        {
            widgetName: "javascriptLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Link 1 Javascript",
                        url:"/",
                        id: 1,
                    },
                    {
                        text: "Link 2 mozilla js guide",
                        url: "/",
                        id: 2,
                    },
                    {
                        text: "Link 3 Full Stack Guide",
                        url: "/",
                        id:3,
                    },
                ],
            },
        },
    ],
};

export default config;