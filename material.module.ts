import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule, MatInputModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule, MatInputModule ],
  exports: [MatButtonModule, MatToolbarModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule, MatInputModule ],
})
export class MaterialModule { }
