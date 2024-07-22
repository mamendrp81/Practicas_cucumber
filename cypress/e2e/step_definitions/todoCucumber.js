import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { paginatodo } from "../../page_object/paginatodo";


Given("el usuario esta en la pagina de inicio de ToDo", () => {
  paginatodo.visit();
});

When("agrego una nueva tarea Comprar pan", () => {
  paginatodo.agregarTarea("Comprar pan");
});


Given("tengo la tarea Comprar pan", () => {
  paginatodo.visit();
  paginatodo.agregarTarea("Comprar pan");
});

When("marco la tarea Comprar pan como completada", () => {
  paginatodo.marcarTareaCompletada(1);
   
});





