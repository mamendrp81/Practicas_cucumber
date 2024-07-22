
export class PaginaToDo {

  visit() {
    cy.visit('https://todomvc.com/examples/typescript-react/#/');
  }

  agregarTarea(nombreTarea) {
    //cy.get('.new-todo').type(`${nombreTarea}{enter}`);  
    cy.get('.new-todo').type(nombreTarea + `{enter}`);  
  }

  marcarTareaCompletada(indiceElemento) {
    cy.get(`.todo-list li:nth-child(${indiceElemento}) .toggle`).click();
  }

  eliminarTarea(indiceElemento){
    cy.get(`.todo-list li:nth-child(${indiceElemento}) .destroy`).click({ force: true });
  }

  // verificarTarea(item) {
  //   cy.contains('.todo-list li', item).should('exist');
  // }
}

export const paginatodo = new PaginaToDo;