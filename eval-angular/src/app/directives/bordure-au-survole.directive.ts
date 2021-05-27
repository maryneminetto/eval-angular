import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBordureAuSurvole]',
})
export class BordureAuSurvoleDirective {
  @Input() param: string = 'ERROR';

  public red: string = '#e74c3c';
  public orange: string = '#f39c12';
  public green: string = '#2ecc71';

  public transition: string = '0.5s';

  private oldBorder: string;

  constructor(private el: ElementRef) {
    this.oldBorder = this.el.nativeElement.style.border;
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.param === 'ERROR') {
      this.el.nativeElement.style.border = 'solid' + ' 2px ' + this.red;
      this.el.nativeElement.style.transition = this.transition;
    }
    if (this.param === 'WARNING') {
      this.el.nativeElement.style.border = 'solid' + ' 2px ' + this.orange;
      this.el.nativeElement.style.transition = this.transition;
    }
    if (this.param === 'SUCCESS') {
      this.el.nativeElement.style.border = 'solid' + ' 2px ' + this.green;
      this.el.nativeElement.style.transition = this.transition;
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.border = this.oldBorder;
  }
}
