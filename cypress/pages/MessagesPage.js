class MessagesPage {
  get messagesCount() { return cy.get('.new-messages-count') }
  get messagesList() { return cy.get('.message-list li') }
  get messageFromItems() { return cy.get('.message-from') }
  get messageTitleItems() { return cy.get('.message-title') }
}

export default new MessagesPage()
