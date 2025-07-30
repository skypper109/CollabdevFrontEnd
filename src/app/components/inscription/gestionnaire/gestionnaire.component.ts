import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-gestionnaire',
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './gestionnaire.component.html',
  styleUrl: './gestionnaire.component.css'
})
export class GestionnaireComponent {
  fichier: File | null = null;
  conditionUtilisation: FormGroup;
  constructor(private fb:FormBuilder, private route:Router) {
    this.conditionUtilisation = this.fb.group({
      condition: [false,[Validators.requiredTrue]]
    });
  }

  fichierSelectionner(event: any) {
    this.fichier = event.target.files[0];
    console.log("Fichier sélectionné :", this.fichier);
  }

  valider(){
    if (this.conditionUtilisation.valid) {
      if (this.fichier) {
        console.log("Fichier prêt à être envoyé :", this.fichier);
      }
      console.log("Conditions acceptées");
      // this.route.navigate(['inscription/choix']);
    } else {
      console.error("Veuillez accepter les conditions d'utilisation");
    }
  }

}
