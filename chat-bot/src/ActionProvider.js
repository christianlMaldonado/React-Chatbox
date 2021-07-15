
class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc; 
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.");
        this.updateChatbotState(greetingMessage);
      }

     mainMenu(){
         const message = this.createChatBotMessage(
             "Main Menu. Choose from these options:", {
                 widget: "learningOptions",
             }
         );

         this.updateChatbotState(message);
     };

    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following recources for you on Javascript:",
            {
                widget: "javascriptLinks",
            }
        );

        this.updateChatbotState(message);
    };

    handleDataVisualizationList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following recourcees for you on Data Visualization:",
            {
                widget: "dataVisualizationLinks",
            }
        );

        this.updateChatbotState(message);
    }

    handleApiList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following recourcees for you on API's:",
            {
                widget: "apiLinks"
            }
        );

        this.updateChatbotState(message);
    }

    handleBlankList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following recourcees for you on Blank:",
            {
                widget: "blankLinks"
            }
        );

        this.updateChatbotState(message);
    }

    handleInterviewPrepList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following recourcees for you on Interview Prep:",
            {
                widget: "interviewPrepLinks"
            }
        );

        this.updateChatbotState(message);
    }

    updateChatbotState(message) {
      // NOTE: Function is set in constructoe ans is passsed below  
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;