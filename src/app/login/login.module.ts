import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [/* componentes */
        MainComponent, LoginCompComponent
    ],
    exports: [/* export modulos, clases */
        MainComponent , LoginCompComponent
    ],
    imports: [/* importa modulos de angular */
        CommonModule, FormsModule
    ]
})


export class LoginModule {

}