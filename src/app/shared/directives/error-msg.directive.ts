import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[error-msg]',
})
export class ErrorMsgDirective implements OnInit {
  htmlElement: ElementRef<HTMLElement>;
  _color = 'red';
  _content = 'Este';

  @Input() set color(value: string) {
    // this.htmlElement.nativeElement.style.color = value;
    this._color = value;
    this.setColor();

  }

  @Input() set msg(value: string) {
    this._content = value
    this.setContent();
  }

  @Input() set valid(value: boolean) {
    if(value){
      this.htmlElement.nativeElement.classList.add('hidden');
    }else{
      this.htmlElement.nativeElement.classList.remove('hidden');

    }

  }

  constructor(private el: ElementRef<HTMLElement>) {
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setClass();
    this.setColor();
    this.setContent();

  }
  // ngOnChanges(changes: SimpleChanges): void {

  //   this.setContent()
  //   this.setColor();

  // }

  setColor(
    // value: string
    ): void {
    // console.log(value);

    this.htmlElement.nativeElement.style.color = this._color;
  }

  setContent(): void {
    this.htmlElement.nativeElement.innerText = this._content;
  }
  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }
}
