import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { TranslocoPipe } from "@ngneat/transloco";

@Component({
  selector: "app-not-found",
  standalone: true,
  imports: [RouterModule, TranslocoPipe],
  templateUrl: "./not-found.component.html",
  styleUrl: "./not-found.component.scss",
})
export class NotFoundComponent {}
