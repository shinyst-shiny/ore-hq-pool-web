import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'

import { TranslocoPipe } from '@ngneat/transloco'

@Component({
  selector: 'app-not-permission',
  standalone: true,
  imports: [RouterModule, TranslocoPipe],
  templateUrl: './not-permission.component.html',
  styleUrl: './not-permission.component.scss'
})
export class NotPermissionComponent {}
