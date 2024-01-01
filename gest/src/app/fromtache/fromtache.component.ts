import { Component } from '@angular/core';

@Component({
  selector: 'app-fromtache',
  templateUrl: './fromtache.component.html',
  styleUrls: ['./fromtache.component.css']
})
export class FromtacheComponent {
  showTaskForm: boolean = false;
  titreTache: string = '';
  descriptionTache: string = '';
  dueDateTache: string = '';
  proprietaireTache: string = '';
  taches: any[] = []; 

  creerTache() {
    const nouvelleTache = {
      titre: this.titreTache,
      description: this.descriptionTache,
      due_date: this.dueDateTache,
      proprietaire: this.proprietaireTache
    };

    this.taches.push(nouvelleTache);

    this.titreTache = '';
    this.descriptionTache = '';
    this.dueDateTache = '';
    this.proprietaireTache = '';
    this.showTaskForm = false;
  }

  modifierTache(index: number) {
    console.log('Modifier la tâche : ', index);
  }

  supprimerTache(index: number) {
    console.log('Supprimer la tâche : ', index);
  }
}

