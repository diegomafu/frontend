import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LancamentoComponent } from './lancamento/lancamento.component';
import { LancamentoService } from './lancamento.service';
import { FormatarMoedaPipe } from './formatar-moeda.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LancamentoComponent,
    FormatarMoedaPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
