import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { TipoPessoa } from '../cliente/enum/tipo-pessoa-enum';

@Directive({
  selector: '[appMascaraDocumento]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,

      useExisting: MascaraDocumentoDirective,

      multi: true
    }
  ]
})
export class MascaraDocumentoDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;
  mascara: string;
  // tslint:disable-next-line:no-input-rename
  @Input('appMascaraDocumento') appMascaraDocumento: string;

  constructor(private el: ElementRef) {}

  writeValue(value: any): void {
    if (value) {
      this.el.nativeElement.value = this.aplicarMascaraDocumento(value);

      return;
    }

    this.el.nativeElement.value = '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  @HostListener('input', ['$event'])
  onInput($event: any) {
    const valor = $event.target.value.replace(/\D/g, '');

    switch (this.appMascaraDocumento) {
      case 'PF':
        this.mascara = '999.999.999-99';
        switch ($event.target.selectionEnd) {
          case 3:
          case 7:
          case 11:
            if (valor.length < 11) {
              this.onChange(valor);
              return;
            }
            break;
          default:
            break;
        }
        break;
      case 'PJ':
        this.mascara = '99.999.999/9999-99';
        switch ($event.target.selectionEnd) {
          case 2:
          case 6:
          case 10:
          case 15:
            this.onChange(valor);
            return;
          default:
            break;
        }
        break;
      default:
        // this.mascara = '999.999.999-99';
        this.ajustarDocumentoPorQtdCaracteres(valor);
        break;
    }

    const pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }
    $event.target.value = this.aplicarMascaraDocumento(valor);
  }

  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if (
      $event.target.value &&
      $event.target.value.length === this.mascara.length
    ) {
      return;
    }
    this.onChange('');
    $event.target.value = '';
  }

  aplicarMascaraDocumento(valor: string): string {
    switch (this.appMascaraDocumento) {
      case 'PF':
        this.mascara = '999.999.999-99';
        break;
      case 'PJ':
        this.mascara = '99.999.999/9999-99';
        break;
      default:
        this.ajustarDocumentoPorQtdCaracteres(valor);
        break;
    }
    valor = valor.replace(/\D/g, '');
    const pad = this.mascara.replace(/\D/g, '').replace(/9/g, '_');
    const valorMask = valor + pad.substring(0, pad.length - valor.length);
    let valorMaskPos = 0;
    valor = '';
    for (let i = 0; i < this.mascara.length; i++) {
      if (isNaN(parseInt(this.mascara.charAt(i), 10))) {
        valor += this.mascara.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }
    return valor;
  }

  ajustarDocumentoPorQtdCaracteres(valor: string) {
    switch (valor.length) {
      case 11:
        this.mascara = '999.999.999-99';
        break;
      case 14:
        this.mascara = '99.999.999/9999-99';
        break;
      default:
        break;
    }
  }
}
