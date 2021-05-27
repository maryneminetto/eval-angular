import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBordureAuSurvole]',
})
export class BordureAuSurvoleDirective {
  @Input() param: string = 'ERROR';

  public red: string = '#e74c3c';
  public orange: string = '#f39c12';
  public green: string = '#2ecc71';

  private oldBorder: string;

  constructor(private el: ElementRef) {
    this.oldBorder = this.el.nativeElement.style.border;
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.param === 'ERROR') {
      this.el.nativeElement.style.border = 'solid' + ' 2px ' + this.red;
    }
    if (this.param === 'WARNING') {
      this.el.nativeElement.style.border = 'solid' + ' 2px ' + this.orange;
    }
    if (this.param === 'SUCCESS') {
      this.el.nativeElement.style.border = 'solid' + ' 2px ' + this.green;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = this.oldBorder;
  }
}
