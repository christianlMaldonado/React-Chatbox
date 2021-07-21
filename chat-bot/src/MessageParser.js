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
    
        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet()
        }
        
        if (lowerCaseMessage.includes("javascript")) {
            this.actionProvider.handleJavasciptList();
        }
        
        if (lowerCaseMessage.includes("data visualization")) {
            this.actionProvider.handleDataVisualizationList();
        }
        
        if (lowerCaseMessage.includes("apis")) {
            this.actionProvider.handleApiList();
        }

        if (lowerCaseMessage.includes("blank")) {
            this.actionProvider.handleBlankList();
        }

        if (lowerCaseMessage.includes("interview prep")) {
            this.actionProvider.handleInterviewPrepList();
        }
    }
}

export default MessageParser;