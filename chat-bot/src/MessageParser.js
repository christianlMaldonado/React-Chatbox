class MessageParser {
    constructor(actionProvider) {
        this.actionProvider = actionProvider;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase();
        
        // Home Function
        if (lowerCaseMessage.includes("menu")) {
             this.actionProvider.mainMenu()
         }
        
        else if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }
        
        else if (lowerCaseMessage.includes("javascript")) {
            this.actionProvider.handleJavasciptList();
        }
        
        else if (lowerCaseMessage.includes("data visualization")) {
            this.actionProvider.handleDataVisualizationList();
        }
        
        else if (lowerCaseMessage.includes("apis")) {
            this.actionProvider.handleApiList();
        }

        else if (lowerCaseMessage.includes("blank")) {
            this.actionProvider.handleBlankList();
        }

        else if (lowerCaseMessage.includes("interview prep")) {
            this.actionProvider.handleInterviewPrepList();
        }
    }
}

export default MessageParser;