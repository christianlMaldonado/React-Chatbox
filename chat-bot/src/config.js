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
        {
            widgetName: "dataVisualizationLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Link 1 Data Visualization",
                        url:"/",
                        id: 4,
                    },
                    {
                        text: "Link 2 mozilla DV guide",
                        url: "/",
                        id: 5,
                    },
                    {
                        text: "Link 3 Data Guide",
                        url: "/",
                        id:6,
                    },
                ],
            },
        },
        {
            widgetName: "apiLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "API 1",
                        url:"/",
                        id: 1,
                    },
                    {
                        text: "API 2",
                        url: "/",
                        id: 2,
                    },
                    {
                        text: "API 3",
                        url: "/",
                        id:3,
                    },
                ],
            },
        },
        {
            widgetName: "blankLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Link 1",
                        url:"/",
                        id: 1,
                    },
                    {
                        text: "Link 2",
                        url: "/",
                        id: 2,
                    },
                    {
                        text: "Link 3",
                        url: "/",
                        id:3,
                    },
                ],
            },
        },
        {
            widgetName: "interviewPrepLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Interview Prep 1",
                        url:"/",
                        id: 1,
                    },
                    {
                        text: "Interview Prep 2",
                        url: "/",
                        id: 2,
                    },
                    {
                        text: "Interview Prep 3",
                        url: "/",
                        id:3,
                    },
                ],
            },
        },
    ],
};

export default config;